'use strict';

describe('Service: Run', function () {

  // load the service's module
  beforeEach(module('angularGoodgymApp'));

  // instantiate service
  var Run;
  beforeEach(inject(function (_Run_) {
    Run = _Run_;
  }));

  it('should do something', function () {
    expect(!!Run).toBe(true);
  });

});
