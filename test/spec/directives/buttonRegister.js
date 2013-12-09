'use strict';

describe('Directive: buttonRegister', function () {

  // load the directive's module
  beforeEach(module('goodgymApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<button-register></button-register>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the buttonRegister directive');
  }));
});
