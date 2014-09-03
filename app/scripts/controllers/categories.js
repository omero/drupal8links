'use strict';

angular.module('drupal8linksApp')

  .controller('CategoriesLinksCtrl', function ($scope, $http) {
    $http.get('links/links.json').success(function(data) {
      $scope.links = data;
    });
  })
  .controller('CategoriesLinksDetailCtrl', function ($scope, $http, $stateParams) {
    console.log($stateParams.categoryName);
    $scope.string = $stateParams.categoryName;
  })

  .controller('CategoriesListCtrl', function ($scope, $http) {
    $http.get('links/categories.json').success(function(data) {
      $scope.categories = data.categories;
    });
  });
