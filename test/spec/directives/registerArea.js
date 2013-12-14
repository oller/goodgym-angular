'use strict';

describe('Directive: registerArea', function () {

  // load the directive's module
  beforeEach(module('goodgymApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<register-area></register-area>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the registerArea directive');
  }));
});
