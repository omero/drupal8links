'use strict';

describe('Service: resourcesSvc', function () {

  // load the service's module
  beforeEach(module('drupal8linksApp'));

  // instantiate service
  var resourcesSvc;
  beforeEach(inject(function (_resourcesSvc_) {
    resourcesSvc = _resourcesSvc_;
  }));

  it('should do something', function () {
    expect(!!resourcesSvc).toBe(true);
  });

});
