'use strict';

/**
 * @ngdoc function
 * @name drupal8linksApp.controller:LoginCtrl
 * @description
 * # LoginCtrl
 * Controller of the drupal8linksApp
 */
angular.module('drupal8linksApp')
  .controller('LoginCtrl', function ($scope, authenticationSvc) {
    $scope.user = {
      name: '',
      password: ''
    }
    $scope.login = function(){
      authenticationSvc.login($scope.user.name, $scope.user.password);
    }

  });
