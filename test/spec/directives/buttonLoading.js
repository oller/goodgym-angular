'use strict';

describe('Directive: buttonLoading', function () {

  // load the directive's module
  beforeEach(module('angularGoodgymApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<button-loading></button-loading>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the buttonLoading directive');
  }));
});
