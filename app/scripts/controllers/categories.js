'use strict';

angular.module('drupal8linksApp')
  .controller('CategoriesListCtrl', function ($scope, $http, resourcesSvc) {
    $http.get(resourcesSvc.resources.categories).success(function(data) {
      $scope.categories = data;
    });
  });
