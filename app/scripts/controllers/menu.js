'use strict';

/**
 * @ngdoc function
 * @name drupal8linksApp.controller:MenuCtrl
 * @description
 * # MenuCtrl
 * Controller of the drupal8linksApp
 */
angular.module('drupal8linksApp')
  .controller('MenuCtrl', function ($scope, authenticationSvc) {
    $scope.$watch(authenticationSvc.getUserInfo, function (){
        $scope.userInfo = authenticationSvc.getUserInfo();
        $scope.user = $scope.userInfo.user;
        $scope.token = $scope.userInfo.token;
    });
    $scope.logout = function(){
      authenticationSvc.logout();
    }
  });
