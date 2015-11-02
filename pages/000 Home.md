---- / ----
name: JavaScript utility library - Documentation Home

## lodash
A JavaScript utility library delivering consistency, [modularity](https://www.npmjs.com/browse/keyword/lodash-modularized), performance, & [extras](#features).

<iframe style="width:105px;height:25px" allowtransparency="" frameborder="0" scrolling="no" src="./github-btn.html?user=lodash&amp;repo=lodash&amp;count=true&amp;type=watch"></iframe>
<iframe style="width:105px; height:25px" allowtransparency="" frameborder="0" scrolling="no" src="./github-btn.html?user=lodash&amp;repo=lodash&amp;count=true&amp;type=fork"></iframe>

#### Example

```js
_.assign({ 'a': 1 }, { 'b': 2 }, { 'c': 3 });
// → { 'a': 1, 'b': 2, 'c': 3 }

_.map([1, 2, 3], function(n) { return n * 3; });
// → [3, 6, 9]
```

## Features

*   ~100% [code coverage](https://coveralls.io/github/lodash)
*   Follows [semantic versioning](http://semver.org/) for releases
*   [Lazily evaluated](http://filimanjaro.com/blog/2014/introducing-lazy-evaluation/) chaining
*   [_(…)](/_) supports implicit chaining
*   [_.ary](/ary) & [_.rearg](/rearg) to change function argument limits & order
*   [_.at](/at) for cherry-picking collection values
*   [_.attempt](/attempt) to execute functions which may error without a try-catch
*   [_.before](/before) to complement [_.after](/after)
*   [_.bindKey](/bindKey) for binding [_“lazy”_](http://michaux.ca/articles/lazy-function-definition-pattern) defined methods
*   [_.chunk](/chunk) for splitting an array into chunks of a given size
*   [_.clone](/clone) supports shallow cloning of `Date` & `RegExp` objects
*   [_.cloneDeep](/cloneDeep) for deep cloning arrays & objects
*   [_.curry](/curry) & [_.curryRight](/curryRight) for creating [curried](http://hughfdjackson.com/javascript/why-curry-helps/) functions
*   [_.debounce](/debounce) & [_.throttle](/throttle) are cancelable & accept options for more control
*   [_.defaultsDeep](/defaultsDeep) for recursively assigning default properties
*   [_.fill](/fill) to fill arrays with values
*   [_.findKey](/findKey) for finding keys
*   [_.flow](/flow) to complement [_.flowRight](/flowRight) (a.k.a `_.compose`)
*   [_.forEach](/forEach) supports exiting early
*   [_.forIn](/forIn) for iterating all enumerable properties
*   [_.forOwn](/forOwn) for iterating own properties
*   [_.get](/get) & [_.set](/set) for deep property getting & setting
*   [_.gt](/gt), [_.gte](/gte), [_.lt](/lt), & [_.lte](/lte) relational methods
*   [_.inRange](/inRange) for checking whether a number is within a given range
*   [_.isNative](/isNative) to check for native functions
*   [_.isPlainObject](/isPlainObject) & [_.toPlainObject](/toPlainObject) to check for & convert to `Object` objects
*   [_.isTypedArray](/isTypedArray) to check for typed arrays
*   [_.mapKeys](/mapKeys) for mapping keys to an object
*   [_.matches](/matches) supports deep object comparisons
*   [_.matchesProperty](/matchesProperty) to complement [_.matches](/matches) & [_.property](/property)
*   [_.merge](/merge) for a deep [_.extend](/extend)
*   [_.method](/method) & [_.methodOf](/methodOf) to create functions that invoke methods
*   [_.modArgs](/modArgs) for more advanced functional composition
*   [_.parseInt](/parseInt) for consistent cross-environment behavior
*   [_.pull](/pull), [_.pullAt](/pullAt), & [_.remove](/remove) for mutating arrays
*   [_.random](/random) supports returning floating-point numbers
*   [_.restParam](/restParam) & [_.spread](/spread) for applying rest parameters & spreading arguments to functions
*   [_.runInContext](/runInContext) for collisionless mixins & easier mocking
*   [_.slice](/slice) for creating subsets of array-like values
*   [_.sortByAll](/sortByAll) & [_.sortByOrder](/sortByOrder) for sorting by multiple properties & orders
*   [_.support](/support) for flagging environment features
*   [_.template](/template) supports [_“imports”_](/templateSettings-imports) options & [ES template delimiters](http://people.mozilla.org/%7Ejorendorff/es6-draft.html#sec-template-literal-lexical-components)
*   [_.transform](/transform) as a powerful alternative to [_.reduce](/reduce) for transforming objects
*   [_.unzipWith](/unzipWith) & [_.zipWith](/zipWith) to specify how grouped values should be combined
*   [_.valuesIn](/valuesIn) for getting values of all enumerable properties
*   [_.xor](/xor) to complement [_.difference](/difference), [_.intersection](/intersection), & [_.union](/union)
*   [_.add](/add), [_.round](/round), [_.sum](/sum), & [more](/docs "_.ceil & _.floor") math methods
*   [_.bind](/bind), [_.curry](/curry), [_.partial](/partial), & [more](/docs "_.bindKey, _.curryRight, _.partialRight") support customizable argument placeholders
*   [_.capitalize](/capitalize), [_.trim](/trim), & [more](/docs "_.camelCase, _.deburr, _.endsWith, _.escapeRegExp, _.kebabCase, _.pad, _.padLeft, _.padRight, _.repeat, _.snakeCase, _.startsWith, _.trimLeft, _.trimRight, _.trunc, _.words") string methods
*   [_.clone](/clone), [_.isEqual](/isEqual), & [more](/docs "_.assign, _.cloneDeep, _.merge") accept customizer callbacks
*   [_.dropWhile](/dropWhile), [_.takeWhile](/takeWhile), & [more](/docs "_.drop, _.dropRight, _.dropRightWhile, _.take, _.takeRight, _.takeRightWhile") to complement [_.first](/first), [_.initial](/initial), [_.last](/last), & [_.rest](/rest)
*   [_.findLast](/findLast), [_.findLastKey](/findLastKey), & [more](/docs "_.curryRight, _.dropRight, _.dropRightWhile, _.flowRight, _.forEachRight, _.forInRight, _.forOwnRight, _.padRight, partialRight, _.takeRight, _.trimRight, _.takeRightWhile") right-associative methods
*   [_.includes](/includes), [_.toArray](/toArray), & [more](/docs "_.at, _.countBy, _.every, _.filter, _.find, _.findLast, _.findWhere, _.forEach, _.forEachRight, _.groupBy, _.indexBy, _.invoke, _.map, _.max, _.min, _.partition, _.pluck, _.reduce, _.reduceRight, _.reject, _.shuffle, _.size, _.some, _.sortBy, _.sortByAll, _.sortByOrder, _.sum, _.where") accept strings
*   [_#commit](/prototype-commit) & [_#plant](/prototype-plant) for working with chain sequences
*   [_#thru](/thru) to pass values thru a chain sequence
