'use strict';

/**
 * @ngdoc function
 * @name drupal8linksApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the drupal8linksApp
 */
angular.module('drupal8linksApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
