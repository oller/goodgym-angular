'use strict';

describe('Directive: noData', function () {

  // load the directive's module
  beforeEach(module('goodgymApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<no-data></no-data>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the noData directive');
  }));
});
