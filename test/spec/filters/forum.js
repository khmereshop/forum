'use strict';

describe('Filter: forum', function () {

  // load the filter's module
  beforeEach(module('appApp'));

  // initialize a new instance of the filter before each test
  var forum;
  beforeEach(inject(function ($filter) {
    forum = $filter('forum');
  }));

  it('should return the input prefixed with "forum filter:"', function () {
    var text = 'angularjs';
    expect(forum(text)).toBe('forum filter: ' + text);
  });

});
