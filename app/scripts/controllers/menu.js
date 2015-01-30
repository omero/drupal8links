'use strict';

/**
 * @ngdoc function
 * @name drupal8linksApp.controller:MenuCtrl
 * @description
 * # MenuCtrl
 * Controller of the drupal8linksApp
 */
angular.module('drupal8linksApp')
  .controller('MenuCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
