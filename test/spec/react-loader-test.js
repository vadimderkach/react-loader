/** @jsx React.DOM */

var React = require('react');
var Loader = require('../../lib/react-loader');
var expect = require('chai').expect;

var loader;

describe('Loader', function () {
  describe('before loaded', function () {
    beforeEach(function () {
      loader = <Loader loaded={false}>Welcome</Loader>;
      React.renderComponent(loader, document.body);
    });

    it('renders the loader', function () {
      expect(document.body.innerHTML).to.match(/<div class="loader"/);
    });

    it('does not render the content', function () {
      expect(document.body.innerHTML).to.not.match(/Welcome/);
    });
  });

  describe('after loaded', function () {
    beforeEach(function () {
      loader = <Loader loaded={true}>Welcome</Loader>;
      React.renderComponent(loader, document.body);
    });

    it('does not render the loader', function () {
      expect(document.body.innerHTML).to.not.match(/<div class="loader"/);
    });

    it('renders the content', function () {
      expect(document.body.innerHTML).to.match(/Welcome/);
    });
  });
});
