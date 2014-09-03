'use strict';

angular.module('drupal8linksApp')
  .controller('CategoriesListCtrl', function ($scope, $http) {
    $http.get('scripts/links/categories.json').success(function(data) {
      $scope.categories = data.categories;
    });
  });
