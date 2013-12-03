'use strict';

describe('Filter: tickOrCross', function () {

  // load the filter's module
  beforeEach(module('angularGoodgymApp'));

  // initialize a new instance of the filter before each test
  var tickOrCross;
  beforeEach(inject(function ($filter) {
    tickOrCross = $filter('tickOrCross');
  }));

  it('should return the input prefixed with "tickOrCross filter:"', function () {
    var text = 'angularjs';
    expect(tickOrCross(text)).toBe('tickOrCross filter: ' + text);
  });

});
