'use strict';

var angularPadsApp = angular.module('angularPadsApp', ['ui.router', 'firebase']);

angularPadsApp.config(function($stateProvider, $urlRouterProvider) {

  $urlRouterProvider.otherwise('/main');

  $stateProvider
    .state('main', {
      url: '/main',
      templateUrl: 'views/main.html',
      controller: 'MainCtrl'
    })
    .state('about', {
      url: '/about',
      templateUrl: 'views/about.html',
    })
    .state('contact', {
      url: '/contact',
      templateUrl: 'views/contact.html',
    })
    .state('gender', {
      url: '/gender',
      templateUrl: 'views/gender.html',
      controller: 'MainCtrl'
    })
    .state('second', {
      url: '/second',
      templateUrl: 'views/second.html',
      controller: 'MainCtrl'
    })
    .state('third', {
      url: '/third',
      templateUrl: 'views/third.html',
      controller: 'MainCtrl'
    })
    .state('fourth', {
      url: '/fourth',
      templateUrl: 'views/fourth.html',
      controller: 'MainCtrl'
    })
    .state('fifth', {
      url: '/fifth',
      templateUrl: 'views/fifth.html',
      controller: 'MainCtrl'
    })
    .state('final', {
      url: '/final',
      templateUrl: 'views/final.html',
      controller: 'MainCtrl'
    })
    .state('results', {
      url: '/results',
      templateUrl: 'views/results.html',
      controller: 'MainCtrl'
    });



});
