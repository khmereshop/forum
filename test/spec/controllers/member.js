'use strict';

describe('Controller: MemberCtrl', function () {

  // load the controller's module
  beforeEach(module('appApp'));

  var MemberCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MemberCtrl = $controller('MemberCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(MemberCtrl.awesomeThings.length).toBe(3);
  });
});
