import Ember from 'ember';
import { module, test } from 'qunit';
import startApp from 'buildingtests/tests/helpers/start-app';

var application;

module('Acceptance | recipies test', {
  beforeEach: function() {
    application = startApp();
  },

  afterEach: function() {
    Ember.run(application, 'destroy');
  }
});

test('visiting /recipies-test', function(assert) {
  visit('/recipies-test');

  andThen(function() {
    assert.equal(find('.ingredients').length, 10);
  });
});
