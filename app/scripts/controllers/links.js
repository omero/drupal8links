'use strict';

angular.module('drupal8linksApp')
  .controller('LinksCtrl', function ($scope, $http) {
    $http.get('scripts/links/links.json').success(function(data) {
      $scope.links = data;
    });
  })
  .controller('LinksDetailCtrl', function ($scope, $http, $stateParams) {
    $scope.string = $stateParams.categoryName;
  });
