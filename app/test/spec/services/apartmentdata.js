'use strict';

describe('Service: apartmentData', function () {

  // load the service's module
  beforeEach(module('appApp'));

  // instantiate service
  var apartmentData;
  beforeEach(inject(function (_apartmentData_) {
    apartmentData = _apartmentData_;
  }));

  it('should do something', function () {
    expect(!!apartmentData).toBe(true);
  });

});
