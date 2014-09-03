'use strict';

angular.module('drupal8linksApp')
  .controller('LinksCtrl', function ($scope, $http) {
    $http.get('links/links.json').success(function(data) {
      $scope.links = data;
    });
  })
  .controller('LinksDetailCtrl', function ($scope, $http, $stateParams) {
    console.log($stateParams.categoryName);
    $scope.string = $stateParams.categoryName;
  });