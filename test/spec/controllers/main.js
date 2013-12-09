'use strict';

describe('Controller: MainCtrl', function () {

  // load the controller's module
  beforeEach(module('goodgymApp'));

  var MainCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MainCtrl = $controller('MainCtrl', {
      $scope: scope
    });
  }));

  it('should import the title', function () {
    expect(scope.text.strapline).toContain('Some introductory sentence...');
  });
});
