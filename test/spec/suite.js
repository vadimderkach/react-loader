require('./react-loader-mixin-test');

if (window.mochaPhantomJS) {
  mochaPhantomJS.run();
} else {
  mocha.run();
}
