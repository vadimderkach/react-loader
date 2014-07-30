(function (root, factory) {

  if (typeof define === 'function' && define.amd) {
    define(['react', 'spin'], factory);
  } else if (typeof module === 'object' && typeof module.exports === 'object') {
    module.exports = factory(require('react'), require('spin'));
  } else {
    root.LoaderMixin = factory(root.React, root.Spinner);
  }

}(this, function (React, Spinner) {

  var extend = function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (source.hasOwnProperty(key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  var Loader = React.createClass({
    componentDidMount: function () {
      var target = this.refs.loader.getDOMNode();
      new Spinner(this.props).spin(target);
    },

    render: function () {
      return new React.DOM.div({ className: 'loader', ref: 'loader' });
    }
  });

  var LoaderMixin = {
    getInitialState: function () {
      return { loaded: false };
    },

    setLoaded: function (loaded) {
      if (loaded === undefined) {
        loaded = true;
      }

      this.setState({ loaded: !!loaded });
    },

    isLoaded: function () {
      return this.state.loaded;
    },

    renderIfLoaded: function (content, options) {
      options || (options = {});

      if (this.state.loaded) {
        return content;
      } else {
        return new Loader(options);
      }
    }
  };

  return LoaderMixin;
}));
