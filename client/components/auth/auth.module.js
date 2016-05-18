'use strict';

angular.module('angularFullstackAppApp.auth', [
  'angularFullstackAppApp.constants',
  'angularFullstackAppApp.util',
  'ngCookies',
  'ui.router'
])
  .config(function($httpProvider) {
    $httpProvider.interceptors.push('authInterceptor');
  });
