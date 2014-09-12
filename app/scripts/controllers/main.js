'use strict';

angular.module('angularPadsApp').controller('MainCtrl', function ($scope, $firebase) {
  var ref = new Firebase('https://intense-fire-6764.firebaseio.com');

  var sync = $firebase(ref);

  var syncObject = sync.$asObject();

  syncObject.$bindTo($scope, 'data');

  var userId = sessionStorage.userId;
  if(!userId) {
    userId = + new Date();
    sessionStorage.userId = userId;
  }


  $scope.saveAnswer = function(label, value) {
    if(!$scope.data.users) {
      $scope.data.users = {};
    }
    if(!$scope.data.users[userId]) {
      $scope.data.users[userId] = {};
    }
    if(!$scope.data.users[userId].answers) {
      $scope.data.users[userId].answers = {};
    }
    $scope.data.users[userId].answers[label] = value;
  };


  $scope.checkForMatch = function(apartments, answers) {
    var apartments = $scope.data.apartments;
    var answers = $scope.data.users[userId].answers;

      for (var i = 0; i < apartments.length; i++) {

        var apt = apartments[i];
        apt.isMatch = true;

        if (apt.gender !== answers.gender && apt.gender !== 'both') {
          apt.isMatch = false;
        }
        if (answers.pool && !apt.pool) {
          apt.isMatch = false;
        }
        if (apt.room !== answers.room && apt.room !== 'both') {
          apt.isMatch = false;
        }
        if (apt.price > answers.price) {
          apt.isMatch = false;
        }
        if (answers.distance === 'walking' && apt.distance !== 'walking') {
          apt.isMatch = false;
        }
      }
  };



});
