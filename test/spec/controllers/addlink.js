'use strict';

describe('Controller: AddlinkCtrl', function () {

  // load the controller's module
  beforeEach(module('drupal8linksApp'));

  var AddlinkCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    AddlinkCtrl = $controller('AddlinkCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
