'use strict';

/**
 * @ngdoc function
 * @name drupal8linksApp.controller:AddlinkCtrl
 * @description
 * # AddlinkCtrl
 * Controller of the drupal8linksApp
 */
angular.module('drupal8linksApp')
  .controller('addLinkCtrl', function ($scope, $http, $state, resourcesSvc, authenticationSvc, linkSvc) {

    function getFields(input, field) {
      var output = [];
      for (var i=0; i < input.length ; ++i)
        output.push(input[i][field]);
      return output;
    }

    $scope.$watch(authenticationSvc.getUserInfo, function (){
      $scope.userInfo = authenticationSvc.getUserInfo();
      $scope.token = $scope.userInfo.token;
    });
    $scope.form = {
      title: '',
      tags: '',
      body: '',
      url: ''
    }

    $scope.addLink = function(){
      var tags = getFields($scope.form.tags, "text");
      tags = tags.join();
      var link = linkSvc.link($scope.form.title, tags, $scope.form.body, $scope.form.url);
      var data = $.param(link);
      $http({
        method: 'POST',
        url:resourcesSvc.resources.node,
        headers: { 'X-CSRF-Token' : $scope.token },
        data: data
      }).then(function(result) {
        $scope.msg = "Link Capurado :D";
      }, function(error) {
        $scope.error = "No se pudo u_u";
      });
    }
  });