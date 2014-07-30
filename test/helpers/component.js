/** @jsx React.DOM */

var React = require('react');
var LoaderMixin = require('../../lib/react-loader-mixin');

var Component = React.createClass({
  mixins: [LoaderMixin],

  props: {
    loader: React.PropTypes.func
  },

  componentWillReceiveProps: function (nextProps) {
    nextProps.loader && nextProps.loader(this.setLoaded);
  },

  render: function () {
    return this.renderIfLoaded(
      <div className="welcome">Welcome!</div>
    );
  }
});

module.exports = Component;
