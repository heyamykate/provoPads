'use strict';

var angularPadsApp = angular.module('angularPadsApp', ['ui.router']);

angularPadsApp.config(function($stateProvider, $urlRouterProvider) {

  $urlRouterProvider.otherwise('/main');

  $stateProvider
    .state('main', {
      url: '/main',
      templateUrl: 'views/main.html'
    })
    .state('about', {
      url: '/about',
      templateUrl: 'views/about.html'
    })
    .state('contact', {
      url: '/contact',
      templateUrl: 'views/contact.html'
    })
    .state('first', {
      url: '/first',
      templateUrl: 'views/first.html'
    })
    .state('second', {
      url: '/second',
      templateUrl: 'views/second.html'
    })
    .state('third', {
      url: '/third',
      templateUrl: 'views/third.html'
    })
    .state('fourth', {
      url: '/fourth',
      templateUrl: 'views/fourth.html'
    })
    .state('fifth', {
      url: '/fifth',
      templateUrl: 'views/fifth.html'
    });

});
