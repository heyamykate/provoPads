'use strict';

var angularPadsApp = angular.module('angularPadsApp', ['ui.router']);

angularPadsApp.config(function($stateProvider, $urlRouterProvider) {

  $urlRouterProvider.otherwise('/main');

  $stateProvider
    .state('main', {
      url: '/main',
      templateUrl: 'views/main.html'
    })
    .state('first', {
      url: '/first',
      templateUrl: 'views/first.html'
    })
    .state('second', {
      url: '/second',
      templateUrl: 'views/second.html'
    });

});
