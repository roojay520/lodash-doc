## Download

Review the [build differences](https://github.com/lodash/lodash/wiki/build-differences) & pick the one that’s right for you.

*   [Modern build](https://raw.github.com/lodash/lodash/3.10.1/lodash.js) ([minified](https://raw.github.com/lodash/lodash/3.10.1/lodash.min.js))
    For new environments like Chrome, Firefox, IE ≥ 9, & Safari ≥ 5.1
*   [Compatibility build](https://raw.github.com/lodash/lodash-compat/3.10.1/lodash.js) ([minified](https://raw.github.com/lodash/lodash-compat/3.10.1/lodash.min.js))
    For new & old environments like IE ≤ 8 & PhantomJS

## Installation

In a browser:

```
<script src="lodash.js"></script>
```

In an AMD loader:

```
require(['lodash'], function(_) {});
```

Using npm:

```
$ {sudo -H} npm i -g npm$ npm i --save lodash
```

In Node.js/io.js:

```
// load the modern build
var _ = require('lodash');

// or a method category
var array = require('lodash/array');

// or a method (great for smaller builds with browserify/webpack)
var chunk = require('lodash/array/chunk');
```

See the [package source](https://github.com/lodash/lodash/tree/3.0.0-npm) for more details.

**Note:**
Don’t assign values to the [special variable](http://nodejs.org/api/repl.html#repl_repl_features) “`_`” when in the REPL.
Install [n_](https://www.npmjs.com/package/n_) for a REPL that includes lodash by default.

## Module formats

lodash is also available in a variety of other builds & module formats.

*   npm packages for [modern](https://www.npmjs.com/package/lodash), [compatibility](https://www.npmjs.com/package/lodash-compat), & [per method](https://www.npmjs.com/browse/keyword/lodash-modularized) builds
*   AMD modules for [modern](https://github.com/lodash/lodash/tree/3.10.1-amd) & [compatibility](https://github.com/lodash/lodash-compat/tree/3.10.1-amd) builds
*   ES modules for the [modern](https://github.com/lodash/lodash/tree/3.10.1-es) build

CDN copies are available on [cdnjs](https://cdnjs.com/) & [jsDelivr](http://www.jsdelivr.com/).
Create [custom builds](/custom-builds) with only the features you need.
Looking for more functional usage? Try [lodash-fp](https://www.npmjs.com/package/lodash-fp).

## Dive in

Check out our [changelog](https://github.com/lodash/lodash/wiki/Changelog), [roadmap](https://github.com/lodash/lodash/wiki/Roadmap), as well as [community created podcasts, posts, & videos](https://github.com/lodash/lodash/wiki/Resources).

## Support

Tested in Chrome 43-44, Firefox 38-39, IE 6-11, MS Edge, Safari 5-8, ChakraNode 0.12.2, Node.js 0.8.28, 0.10.40, 0.12.7, & 4.0.0, PhantomJS 1.9.8, RingoJS 0.11, & Rhino 1.7.6

Automated [browser](https://saucelabs.com/u/lodash) & [CI](https://travis-ci.org/lodash/) test runs are available. Special thanks to [Sauce Labs](https://saucelabs.com/) for providing automated browser testing.
