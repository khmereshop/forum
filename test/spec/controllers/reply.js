'use strict';

describe('Controller: ReplyCtrl', function () {

  // load the controller's module
  beforeEach(module('appApp'));

  var ReplyCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ReplyCtrl = $controller('ReplyCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(ReplyCtrl.awesomeThings.length).toBe(3);
  });
});
