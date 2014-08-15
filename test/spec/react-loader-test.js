/** @jsx React.DOM */

var React = require('react');
var Loader = require('../../lib/react-loader');
var expect = require('chai').expect;

describe('Loader', function () {
  var testCases = [{
    description: 'loading is in progress',
    options: { loaded: false },
    expectedOutput: /<div class="loader".*<div class="spinner"/
  },
  {
    description: 'loading is in progress with spinner options',
    options: { loaded: false, radius: 17, width: 900 },
    expectedOutput: /<div class="loader"[^>]*?><div class="spinner"[^>]*?>.*translate\(17px, 0px\).*style="[^"]*?height: 900px;/
  },
  {
    describe: 'loading is complete',
    options: { loaded: true },
    expectedOutput: /<div[^>]*>Welcome<\/div>/
  }];

  testCases.forEach(function (testCase) {
    describe(testCase.description, function () {
      beforeEach(function () {
        var loader = new Loader(testCase.options, 'Welcome');
        React.renderComponent(loader, document.body);
      });

      it('renders the correct output', function () {
        expect(document.body.innerHTML).to.match(testCase.expectedOutput);
      })
    });
  });
});
