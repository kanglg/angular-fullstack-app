'use strict';

angular.module('angularFullstackAppApp', [
  'angularFullstackAppApp.auth',
  'angularFullstackAppApp.admin',
  'angularFullstackAppApp.constants',
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'btford.socket-io',
  'ui.router',
  'ui.bootstrap',
  'validation.match'
])
  .config(function($urlRouterProvider, $locationProvider) {
    $urlRouterProvider
      .otherwise('/');

    $locationProvider.html5Mode(true);
  });
