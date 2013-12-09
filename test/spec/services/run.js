'use strict';

describe('Service: Run', function() {

  // load the service's module
  beforeEach(module('goodgymApp'));

  // instantiate service
  var Run;
  beforeEach(inject(function(_Run_) {
    Run = _Run_;
    $httpBackend = Run.get('$httpBackend');
    $rootScope = Run.get('$rootScope');
  }));
  afterEach(function() {
    $httpBackend.verifyNoOutstandingExpectation();
    $httpBackend.verifyNoOutstandingRequest();
  });

  console.log(Run);

  // it('should do something', function() {
  //   expect( !! Run).toBe(true);
  // });

});
