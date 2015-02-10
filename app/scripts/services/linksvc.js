'use strict';

/**
 * @ngdoc service
 * @name drupal8linksApp.link
 * @description
 * # link
 * Factory in the drupal8linksApp.
 */

angular.module('drupal8linksApp')
  .factory('linkSvc', function () {
    return {
      link: function (title,tags,body,url) {
        return  {
          "node": {
            "type": "link",
            "field_tags": {
              "und": tags
            },
            "title": title,
            "body": {
              "und": [
                {
                  "value": body
                }
              ]
            },
            "field_link": {
              "und": [
                {
                  "url": url
                }
              ]
            }
          }
        };
      }
    };
  });
