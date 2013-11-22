'use strict';

describe('Controller: NotificationctrlCtrl', function () {

  // load the controller's module
  beforeEach(module('angularGoodgymApp'));

  var NotificationctrlCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    NotificationctrlCtrl = $controller('NotificationctrlCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
