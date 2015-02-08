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
    $httpProvider.defaults.withCredentials = true;
    delete $httpProvider.defaults.headers.common['X-Requested-With'];
    $httpProvider.defaults.headers.common["Accept"] = "application/json";
    $httpProvider.defaults.headers.common["Content-Type"] = "application/json";
    $httpProvider.defaults.headers.post["Content-Type"] = "application/x-www-form-urlencoded";
    var authentication = function($q, authenticationSvc){
      var userInfo = authenticationSvc.getUserInfo();
      if (userInfo){
        return $q.when(userInfo);
      }
      else{
        return $q.reject({authenticated: false});
      }
    };
    $stateProvider
      .state('home', {
        url:'',
        views:{
          '':{
            templateUrl:'views/home.html'
          },
          'sidebar@home':{
            controller:'CategoriesListCtrl',
            templateUrl:'views/sidebar.html'
          },
          'content@home':{
            controller:'LinksCtrl',
            templateUrl:'views/content.html'
          }
        }
      })
      .state('home.detail', {
        url:'/:categoryName',
        views:{
          'content@home':{
            controller:'LinksDetailCtrl',
            templateUrl:'views/content.html'
          }
        }
      })
      .state('login', {
        url:'/user/login',
        controller:'LoginCtrl',
        templateUrl:'views/login.html'
      })
      .state('add', {
        url:'/link/add',
        controller:'addLinkCtrl',
        templateUrl:'views/addlink.html'
      });
      $urlRouterProvider.otherwise('home');
  })
  .run(["$rootScope", "$location", function($rootScope, $location) {
    $rootScope.$on("$routeChangeSuccess", function(userInfo) {
      console.log(userInfo);
    });

    $rootScope.$on("$routeChangeError", function(event, current, previous, eventObj) {
      if (eventObj.authenticated === false) {
        console.log('not logged')
      }
    });
  }]);