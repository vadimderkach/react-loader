# react-loader-mixin

react-loader-mixin provides your [React.js](http://facebook.github.io/react/)
component a simple mechanism for rendering a loading spinner (via
[spin.js](http://fgnass.github.io/spin.js/)) while data is loading, such as an
asynchronous request to load data for a view.

## Installation

react-loader-mixin is available through both [Bower](http://bower.io/) and
[npm](https://www.npmjs.org/) via:

    npm install react-loader-mixin

or:

    bower install react-loader-mixin

Be sure to include the `--save` option to add this as a dependency in your
application's `package.json` or `bower.json` file.

## Usage

Add the mixin to your React component, and wrap the code that is dependent on
load being completed within your .

    var ReactLoaderMixin = require('react-loader-mixin');

    var MyComponent = React.createClass({
      mixins: [ReactLoaderMixin]
    });

This will expose several methods to your component:

* `renderIfLoaded()`: This method should be called from inside `render()`.  It
  accepts two parameters:

    * JSX (or a React component) and
    * an options object per the [spin.js documentation](http://fgnass.github.io/spin.js/)

* `setLoaded()`: This method should be called to notify your component that
  loading has completed.  By default, it is assumed that your component is not
  loaded when it mounts.  It accepts a boolean argument to denote whether or not
  loading has completed or assumes `true` if no arguments are passed.

* `isLoaded()`: This method returns the boolean defining whether or not your
  component is in a loaded state.

Here's a fully implemented example of how you might use this while waiting for
an asynchronous fetch call to complete.

    var React = require('react');
    var ReactLoaderMixin = require('react-loader-mixin');
    var InterestCollection = require('./collections/interest-collection');

    var InterestEditor = React.createClass({
      mixins: [ReactLoaderMixin],

      getInitialState: function () {
        return { interests: [] };
      },

      componentDidMount: function () {
        new InterestCollection().fetch({ success: this.onInterestsLoaded });
      },

      onInterestsLoaded: function (interests) {
        this.setState({ interests: interests });
        this.setLoaded();
      },

      render: function () {
        return (
          <div className="interest-editor">
            {this.renderIfLoaded(
              <InterestList interests={this.state.interests}/>
            )}
          </div>
        );
      }
    });

### Styling

The loader is rendered inside a DIV element with class "loader".  A simple
solution for rendering the spinner on the center of your screen would be to use
some CSS like the following:

    .loader {
      position: fixed;
      top: 50%;
      left: 50%;
      width: 100px;
      height: 100px;
      margin-top: -50px;
      margin-left: -50px;
    }

## Testing

Tests can be run via:

    npm test

## Contributing

To contribute:

1. Fork it
2. Create your feature branch (`git checkout -b my-new-feature`)
3. Commit your changes (`git commit -am 'Added some feature'`)
4. Push to the branch (`git push origin my-new-feature`)
5. Create new Pull Request

## License

react-loader-mixin is released under the [MIT License](http://opensource.org/licenses/MIT).
