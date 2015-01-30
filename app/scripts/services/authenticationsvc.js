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
          userInfo = {
            session_name: result.data.session_name,
            sessid: result.data.sessid,
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

    function logout() {
      console.log(userInfo);
      var deferred = $q.defer();
      $http({
          method: 'POST',
          url:resourcesSvc.resources.logout,
          headers: { 'X-CSRF-Token' : userInfo.token }
      }).then(function(result) {
        console.log('logoff');
        $window.location.reload();
        $window.sessionStorage["userInfo"] = null;
        userInfo = null;
        deferred.resolve(userInfo);
      }, function(error) {
        deferred.reject(error);
      });
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
        logout: logout,
        getUserInfo: getUserInfo
      };
  });
