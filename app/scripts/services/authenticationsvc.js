'use strict';

/**
 * @ngdoc service
 * @name drupal8linksApp.authenticationSvc
 * @description
 * # authenticationSvc
 * Factory in the drupal8linksApp.
 */
angular.module('drupal8linksApp')
  .factory('authenticationSvc', function ($http, $q, $window, resourcesSvc, $state) {
      var userInfo;

      function login(userName, password) {
        var data = $.param({username: userName, password: password});
        var deferred = $q.defer();
        $http.post(resourcesSvc.resources.login, data).then(function(result) {
          console.log(result);
          userInfo = {
            token: result.data.token,
            user: result.data.user
          };
          $window.sessionStorage["userInfo"] = JSON.stringify(userInfo);
          deferred.resolve(userInfo);
          $state.go('home');
        }, function(error) {
          deferred.reject(error);
        });
        return deferred.promise;
      }

      function getUserInfo() {
        return userInfo;
      }

      function init() {
        if ($window.sessionStorage["userInfo"]) {
          userInfo = JSON.parse($window.sessionStorage["userInfo"]);
        }
      }
      init();

      return {
        login: login,
        getUserInfo: getUserInfo
      };
  });
