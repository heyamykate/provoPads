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

  $scope.checkForMatch = function(answers, apartments) {
    var apartments = $scope.data.apartments;
    console.log(apartments);

    var answers = $scope.data.users[userId].answers;
    console.log(answers);

    for (var i = 0; i < apartments.length; i++) {

      if (apartments[i].gender !== answers.gender && apartments[i].gender !== 'both') {

        console.log('not a match');
      }
      if (answers.pool && !apartments[i].pool) {

        console.log('not a match');
      }
      if (apartments[i].room !== answers.room && apartments[i].room !== 'both') {

        console.log('not a match');
      }
      if (apartments[i].price > answers.price) {

        console.log('not a match');
      }
      if (answers.distance === 'walking' && apartments[i].distance !== 'walking') {

        console.log('not a match');
      }
      console.log('finished the loop');
    }




  };


});
