'use strict';

/**
 * @ngdoc overview
 * @name drupal8linksApp
 * @description
 * # drupal8linksApp
 *
 * Main module of the application.
 */
angular
  .module('drupal8linksApp', [
    'ngRoute'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
