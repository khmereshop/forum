'use strict';

describe('Controller: SubcategoryCtrl', function () {

  // load the controller's module
  beforeEach(module('appApp'));

  var SubcategoryCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    SubcategoryCtrl = $controller('SubcategoryCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(SubcategoryCtrl.awesomeThings.length).toBe(3);
  });
});
