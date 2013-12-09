'use strict';

describe('Directive: noData', function () {

  // load the directive's module
  beforeEach(module('goodgymApp'));

  var element,
    scope;

  beforeEach(module('views/partials/noData.html'));

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should render the no-data partial with the correct text and icon', inject(function ($compile) {
    element = angular.element('<no-data title="This is the title" desc="This is the description" icon="map"></no-data>');
    element = $compile(element)(scope);
    scope.$digest();
    console.log('nodata directive');
    console.log(element);
    expect(element.text()).toBe('this is the noData directive');
  }));
});



