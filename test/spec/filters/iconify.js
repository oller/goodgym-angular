'use strict';

describe('Filter: iconify', function () {

  // load the filter's module
  beforeEach(module('goodgymApp'));

  // initialize a new instance of the filter before each test
  var iconify;
  beforeEach(inject(function ($filter) {
    iconify = $filter('iconify');
  }));

  it('should return the input prefixed with "iconify filter:"', function () {
    var text = 'angularjs';
    expect(iconify(text)).toBe('iconify filter: ' + text);
  });

});
