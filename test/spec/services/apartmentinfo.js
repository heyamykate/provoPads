'use strict';

describe('Service: apartmentInfo', function () {

  // load the service's module
  beforeEach(module('angularPadsApp'));

  // instantiate service
  var apartmentInfo;
  beforeEach(inject(function (_apartmentInfo_) {
    apartmentInfo = _apartmentInfo_;
  }));

  it('should do something', function () {
    expect(!!apartmentInfo).toBe(true);
  });

});
