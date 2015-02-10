'use strict';

/**
 * @ngdoc service
 * @name drupal8linksApp.resourcesSvc
 * @description
 * # resourcesSvc
 * Factory in the drupal8linksApp.
 */
angular.module('drupal8linksApp')
  .factory('resourcesSvc', function () {
    return {
      resources: {
        connect: 'http://dev-links-drupal-7.pantheon.io/api/system/connect',
        login: 'http://dev-links-drupal-7.pantheon.io/api/user/login',
        logout: 'http://dev-links-drupal-7.pantheon.io/api/user/logout',
        categories: 'http://dev-links-drupal-7.pantheon.io/api/views/categories_links',
        links:'http://dev-links-drupal-7.pantheon.io/api/views/links',
        node:'http://dev-links-drupal-7.pantheon.io/api/node'
      }
    };
  });
