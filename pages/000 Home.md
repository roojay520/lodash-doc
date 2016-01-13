---- / ----
name: - 首页

## lodash
一个 JavaScript 的实用工具库, 表现一致性, [模块化](https://www.npmjs.com/browse/keyword/lodash-modularized), 高性能, 以及 [可扩展](#features)

<iframe style="width:105px;height:25px" allowtransparency="" frameborder="0" scrolling="no" src="./github-btn.html?user=lodash&amp;repo=lodash&amp;count=true&amp;type=watch"></iframe>
<iframe style="width:105px; height:25px" allowtransparency="" frameborder="0" scrolling="no" src="./github-btn.html?user=lodash&amp;repo=lodash&amp;count=true&amp;type=fork"></iframe>

#### Example

```js
_.assign({ 'a': 1 }, { 'b': 2 }, { 'c': 3 });
// → { 'a': 1, 'b': 2, 'c': 3 }

_.map([1, 2, 3], function(n) { return n * 3; });
// → [3, 6, 9]
```

## 特点

*   ~100% [代码覆盖率](https://coveralls.io/github/lodash)
*   遵循 [语义化版本控制规范](http://semver.org/)
*   [延迟计算链](http://filimanjaro.com/blog/2014/introducing-lazy-evaluation/)
*   [_(…)](/_) 支持隐式链
*   [_.ary](/ary) & [_.rearg](/rearg) 改变函数的实参个数和顺序
*   [_.at](/at) 更方便的获取数组或对象的值
*   [_.attempt](/attempt) 无需 try-catch 来处理可能会出错的执行函数
*   [_.before](/before) 与 [_.after](/after) 互补
*   [_.bindKey](/bindKey) 实现 [_“懒传参”_](http://michaux.ca/articles/lazy-function-definition-pattern)
*   [_.chunk](/chunk) 按给定个数来拆分数组
*   [_.clone](/clone) 支持对 `Date` & `RegExp` 对象的浅拷贝
*   [_.cloneDeep](/cloneDeep) 深拷贝数组或对象
*   [_.curry](/curry) & [_.curryRight](/curryRight) 用于创建 [柯里化](http://hughfdjackson.com/javascript/why-curry-helps/) 函数
*   [_.debounce](/debounce) & [_.throttle](/throttle) 处理函数防抖和节流
*   [_.defaultsDeep](/defaultsDeep) 深分配对象的可枚举属性
*   [_.fill](/fill) 指定值填充数组
*   [_.findKey](/findKey) 按 keys 查找对象
*   [_.flow](/flow) 与 [_.flowRight](/flowRight) (即 `_.compose`) 搭配
*   [_.forEach](/forEach) 支持提前中断
*   [_.forIn](/forIn) 遍历对象所有的可枚举属性
*   [_.forOwn](/forOwn) 遍历对象的所有属性
*   [_.get](/get) & [_.set](/set) 以 path 的方式获取和设置对象属性
*   [_.gt](/gt), [_.gte](/gte), [_.lt](/lt), & [_.lte](/lte) 关系比较方法
*   [_.inRange](/inRange) 检测给定的数值是否在指定范围内
*   [_.isNative](/isNative) 检测是否是原生函数
*   [_.isPlainObject](/isPlainObject) & [_.toPlainObject](/toPlainObject) 检测是否是普通对象以及转换为普通对象
*   [_.isTypedArray](/isTypedArray) 检测是否是类型数组
*   [_.mapKeys](/mapKeys) 按对象的 key 迭代，并返回新 key 的对象
*   [_.matches](/matches) 支持深匹配对象
*   [_.matchesProperty](/matchesProperty) & [_.matches](/matches) & [_.property](/property) 互补
*   [_.merge](/merge) 相当于递归版 [_.extend](/extend)
*   [_.method](/method) & [_.methodOf](/methodOf) 创建一个调用方法的函数
*   [_.modArgs](/modArgs) 更高级的功能组合
*   [_.parseInt](/parseInt) 兼容各环境
*   [_.pull](/pull), [_.pullAt](/pullAt), & [_.remove](/remove) 方便调整数组
*   [_.random](/random) 支持返回浮点数
*   [_.restParam](/restParam) & [_.spread](/spread) 应用一个 rest arguments 和 Spread operator 参数传递给函数
*   [_.runInContext](/runInContext) 无碰撞的 mixins 且更方便模拟
*   [_.slice](/slice) 支持裁剪类数组
*   [_.sortByAll](/sortByAll) & [_.sortByOrder](/sortByOrder) 多个属性排序
*   [_.support](/support) 标记环境功能
*   [_.template](/template) 支持 [_“imports”_](/templateSettings-imports) 方式 & [ES 字符串模板](http://people.mozilla.org/%7Ejorendorff/es6-draft.html#sec-template-literal-lexical-components)
*   [_.transform](/transform) 更强大的 [_.reduce](/reduce) 代替方法
*   [_.unzipWith](/unzipWith) & [_.zipWith](/zipWith) 指定如何重组分解后的数组
*   [_.valuesIn](/valuesIn) 获取所有可枚举属性的值
*   [_.xor](/xor) & [_.difference](/difference), [_.intersection](/intersection), & [_.union](/union) 互补
*   [_.add](/add), [_.round](/round), [_.sum](/sum), [及更多](/doc "_.ceil, _.floor") 数学方法
*   [_.bind](/bind), [_.curry](/curry), [_.partial](/partial), & [及更多](/docs "_.bindKey, _.curryRight, _.partialRight") 支持自定参数占位
*   [_.capitalize](/capitalize), [_.trim](/trim), & [及更多](/docs "_.camelCase, _.deburr, _.endsWith, _.escapeRegExp, _.kebabCase, _.pad, _.padLeft, _.padRight, _.repeat, _.snakeCase, _.startsWith, _.trimLeft, _.trimRight, _.trunc, _.words") string 方法
*   [_.clone](/clone), [_.isEqual](/isEqual), & [及更多](/docs "_.assign, _.cloneDeep, _.merge") 接受自定回调函数
*   [_.dropWhile](/dropWhile), [_.takeWhile](/takeWhile), & [及更多](/docs "_.drop, _.dropRight, _.dropRightWhile, _.take, _.takeRight, _.takeRightWhile") 互补 [_.first](/first), [_.initial](/initial), [_.last](/last), & [_.rest](/rest)
*   [_.findLast](/findLast), [_.findLastKey](/findLastKey), & [及更多](/docs "_.curryRight, _.dropRight, _.dropRightWhile, _.flowRight, _.forEachRight, _.forInRight, _.forOwnRight, _.padRight, partialRight, _.takeRight, _.trimRight, _.takeRightWhile") 右结合方法
*   [_.includes](/includes), [_.toArray](/toArray), & [及更多](/docs "_.at, _.countBy, _.every, _.filter, _.find, _.findLast, _.findWhere, _.forEach, _.forEachRight, _.groupBy, _.indexBy, _.invoke, _.map, _.max, _.min, _.partition, _.pluck, _.reduce, _.reduceRight, _.reject, _.shuffle, _.size, _.some, _.sortBy, _.sortByAll, _.sortByOrder, _.sum, _.where") 接受字符串方式
*   [_#commit](/prototype-commit) & [_#plant](/prototype-plant) 配合链式队列
*   [_#thru](/thru) 传递链式队列的值

## 关于翻译
* 该文档由 [think2011](https://github.com/think2011/) 翻译，遵循 [MIT协议](https://github.com/jldec/lodash-doc-src/blob/master/LICENSE)， 定时保持与官方同步，翻译质量可能没法特别好，但会保证尽可能反复细心。
* 如果您有任何建议，或者意见，[欢迎在此讨论，及时更正 ;-)](https://github.com/think2011/lodash-zh/issues)。
