'use strict';

describe('Service: authenticationSvc', function () {

  // load the service's module
  beforeEach(module('drupal8linksApp'));

  // instantiate service
  var authenticationSvc;
  beforeEach(inject(function (_authenticationSvc_) {
    authenticationSvc = _authenticationSvc_;
  }));

  it('should do something', function () {
    expect(!!authenticationSvc).toBe(true);
  });

});
