'use strict';

describe('Controller: ViewCtrl', function () {

  // load the controller's module
  beforeEach(module('angularGoodgymApp'));

  var ViewCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ViewCtrl = $controller('ViewCtrl', {
      $scope: scope
    });
  }));

  it('should import the title', function () {
    expect(scope.title).toContain('Runs');
  });
});
