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
    'ui.router'
  ])
  .config(function ($stateProvider, $urlRouterProvider, $httpProvider) {
    $httpProvider.defaults.useXDomain = true;
    delete $httpProvider.defaults.headers.common['X-Requested-With'];
    $httpProvider.defaults.headers.common["Accept"] = "application/json";
    $httpProvider.defaults.headers.common["Content-Type"] = "application/json";
    $httpProvider.defaults.headers.post["Content-Type"] = "application/x-www-form-urlencoded";
    $stateProvider
      .state('home', {
        url:'',
        views:{
          '':{
            templateUrl:'views/home.html'
          },
          'sidebar@home':{
            controller:'CategoriesListCtrl',
            templateUrl:'views/sidebar.html',
          },
          'content@home':{
            controller:'LinksCtrl',
            templateUrl:'views/content.html',
          }
        },
      })
      .state('home.detail', {
        url:'/:categoryName',
        views:{
          'content@home':{
            controller:'LinksDetailCtrl',
            templateUrl:'views/content.html',
          }
        }
      });
      $urlRouterProvider.otherwise('home');
  })
  .controller('LinksCtrl', function ($scope, $stateParams) {

  });
