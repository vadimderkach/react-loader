/** @jsx React.DOM */

var React = require('react');
var Component = require('../helpers/component');
var expect = require('chai').expect;

var component, loader;

describe('LoaderMixin', function () {
  describe('on first render', function () {
    beforeEach(function () {
      loader = function (callback) { }
      component = <Component loader={loader}/>;

      React.renderComponent(component, document.body);
    });

    it('renders the loader', function () {
      expect(document.body.innerHTML).to.match(/<div class="loader"/);
    });

    it('does not render the content', function () {
      expect(document.body.innerHTML).to.not.match(/<div class="welcome">Welcome!<\/div>/);
    });
  });

  describe('after loaded', function () {
    beforeEach(function () {
      loader = function (callback) { callback(); }
      component = <Component loader={loader}/>;

      React.renderComponent(component, document.body);
    });

    it('does not render the loader', function () {
      expect(document.body.innerHTML).to.not.match(/<div class="loader"/);
    });

    it('renders the content', function () {
      expect(document.body.innerHTML).to.match(/<div class="welcome"/);
    });
  });
});
