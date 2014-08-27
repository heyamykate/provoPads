'use strict';

angular.module('angularPadsApp').controller('MainCtrl', function ($scope, $firebase) {
  var ref = new Firebase('https://intense-fire-6764.firebaseio.com');

  var sync = $firebase(ref);
    // download the data into a local object
  var syncObject = sync.$asObject();
  // synchronize the object with a three-way data binding
  // click on `index.html` above to see it used in the DOM!
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
    var isMatch;

      for (var i = 0; i < apartments.length; i++) {

        if (apartments[i].gender !== answers.gender && apartments[i].gender !== 'both') {
          isMatch = false;
        }
        if (answers.pool && !apartments[i].pool) {
          isMatch = false;
        }
        if (apartments[i].room !== answers.room && apartments[i].room !== 'both') {
          isMatch = false;
        }
        if (apartments[i].price > answers.price) {
          isMatch = false;
        }
        if (answers.distance === 'walking' && apartments[i].distance !== 'walking') {
          isMatch = false;
        }
        else {
          isMatch = true;
          console.log('match!');
        }
      }
  };

});
