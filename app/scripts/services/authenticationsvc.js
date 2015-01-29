'use strict';

/**
 * @ngdoc service
 * @name drupal8linksApp.authenticationSvc
 * @description
 * # authenticationSvc
 * Factory in the drupal8linksApp.
 */
angular.module('drupal8linksApp')
  .factory('authenticationSvc', function ($http, $q, $window, resourcesSvc) {
      var userInfo;

      function login(userName, password) {
        //console.log(resourcesSvc.resources.login);
        //var deferred = $q.defer();
        $http.post(resourcesSvc.resources.login, {
          username: userName,
          password: password
        }).then(function(result) {
          /*userInfo = {
            token: result.data.token,
            userName: result.data.name
          };*/
          //$window.sessionStorage["userInfo"] = JSON.stringify(userInfo);
          //deferred.resolve(userInfo);
          console.log('logeao');
        }, function(error) {
          //deferred.reject(error);
        });

        //return deferred.promise;
      }

      return {
        login: login
      };
  });
