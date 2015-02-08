'use strict';

angular.module('drupal8linksApp')
  .controller('LinksCtrl', function ($scope, $http, $stateParams, resourcesSvc) {
    $http.get(resourcesSvc.resources.links).success(function(data) {
      $scope.links = data;
    });
  })
  .controller('LinksDetailCtrl', function ($scope, $http, $stateParams, resourcesSvc) {
    console.log($stateParams.categoryName);
    $http.get(resourcesSvc.resources.links+'?args[0]='+$stateParams.categoryName).success(function(data) {
      $scope.links = data;
    });
  });
