'use strict';

describe('Controller: TeamCtrl', function () {

  // load the controller's module
  beforeEach(module('goodgymApp'));

  var TeamCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    TeamCtrl = $controller('TeamCtrl', {
      $scope: scope
    });
  }));

  it('should import the title', function () {
    expect(scope.title).toContain('Team');
  });
});
