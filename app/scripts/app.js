'use strict';
/* global app:true */

/**
 * @ngdoc overview
 * @name angNewsApp
 * @description
 * # angNewsApp
 *
 * Main module of the application.
 */
var app = angular.module('angNewsApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'firebase'
  ])
  .constant( 'FIREBASE_URL', 'https://flickering-fire-1316.firebaseio.com/');

  app.config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/posts.html',
        controller: 'PostsCtrl'
      })
      .when( '/posts/:postId', {
        templateUrl: 'views/showpost.html',
        controller:  'PostViewCtrl'
      })
      .when( '/register', {
        templateUrl: 'views/register.html',
        controller:  'AuthCtrl'
      })
      .when( '/login', {
        templateUrl: 'views/login.html',
        controller:  'AuthCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });

