'use strict';

describe('Filter: iconify', function () {

  // load the filter's module
  beforeEach(module('goodgymApp'));

  // initialize a new instance of the filter before each test
  var iconify;
  beforeEach(inject(function ($filter) {
    iconify = $filter('iconify');
  }));

  it('should return a tick icon depending if input is true"', function () {
    var booleanIcon = true;
    expect(iconify(booleanIcon)).toBe('<span class="ggicon icon-checkmark"></span>');
  });

  it('should return a cross icon depending if input is false"', function () {
    var booleanIcon = false;
    expect(iconify(booleanIcon)).toBe('<span class="ggicon icon-cross"></span>');
  });

});
