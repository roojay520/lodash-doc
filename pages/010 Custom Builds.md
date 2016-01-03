## 版本定制

通过版本定制可以很轻松的定制仅包含你所需功能的 lodash 版本 。更棒的是，我们已经帮你处理好了函数依赖和别名对应，查看 [版本区别](https://github.com/lodash/lodash/wiki/build-differences) & 选择一个适合你的版本。

使用 Grunt? 我们准备了 [Grunt plugin](https://npmjs.org/package/grunt-lodash) 协助构建 lodash。

安装 [lodash-cli](https://npmjs.org/package/lodash-cli) 来作为 `lodash` 全局命令行工具:

```
$ {sudo -H} npm i -g npm
$ {sudo -H} npm i -g lodash-cli
$ lodash -h
```

**注意:** 请先卸载旧版本，再安装 `lodash-cli`。

*   兼容版本构建，同时支持新旧运行环境，使用 `compat` 修饰。 _(默认)_

```
lodash compat
```

*   现代版本构建，针对新的环境，包括 [ES5](https://es5.github.io/)/[ES6](ttps://people.mozilla.org/~jorendorff/es6-draft.html) 支持，使用 `modern` 修饰。

```
lodash modern
```

*   严格模式版本构建, 开启 [ES 严格模式](https://es5.github.io/#C)，使用 `strict` 修饰。

```
lodash strict
```

*   模块化版本构建，拆散 lodash 为各个模块，使用 `modularize` 修饰。

```
lodash modularize
```

构建命令:

*   Use the `category` command to pass comma separated categories of functions to include in the build. Valid categories are _“array”_, _“chain”_, _“collection”_, _“date”_, _“function”_, _“lang”_, _“object”_, _“number”_, _“string”_, & _“utility”_.

```
lodash category=collection,function
```

*   Use the `exports` command to pass comma separated names of ways to export the `lodash` function. Valid exports are _“amd”_, _“commonjs”_, _“es”_, _“global”_, _“iojs”_, _“node”_, _“npm”_, _“none”_, & _“umd”_.

```
lodash exports=amd,commonjs,iojs
```

*   Use the `iife` command to specify code to replace the [IIFE](http://benalman.com/news/2010/11/immediately-invoked-function-expression/) that wraps lodash.

```
lodash iife="!function(window,undefined){%output%}(this)"
```

*   Use the `include` command to pass comma separated names of functions to include in the build.

```
lodash include=each,filter,map
```

*   Use the `minus` command to pass comma separated function/category names to remove from the build.

```
lodash modern minus=result,shuffle
```

*   Use the `plus` command to pass comma separated function/category names to add to the build.

```
lodash category=array plus=random,template
```

*   Use the `template` command to pass the file path pattern used to match template files to precompile. **Note:** Precompiled templates are assigned to the `_.<span class="me1">templates</span>` object.

```
lodash template="./*.jst"
```

*   Use the `settings` command to pass template settings used when precompiling templates.

```
lodash settings="{interpolate:/\{\{([\s\S]+?)\}\}/g}"
```

*   Use the `moduleId` command to specify the AMD module ID for lodash or the module ID used to include lodash in compiled templates. Use “none” as the module ID to create compiled templates without a dependency on lodash.

```
lodash moduleId=underscore
```

**Notes:**

*   All commands except `compat` & `modern` may be combined
*   The `exports` values _“es”_ & _“npm”_ may only be used in conjunction with the `modularize` command
*   The `modularize` command uses the first `exports` values as its module format, ignoring subsequent values.
*   Unless specified by `-o` or `--output` all files created are saved to the current working directory
*   Node.js 0.10.8-0.10.11 [have](https://github.com/joyent/node/issues/5622) [bugs](https://github.com/joyent/node/issues/5688) preventing minified builds

The following options are also supported:

```
-c, --stdout .......... Write output to standard output
-d, --development ..... Write only the non-minified development output
-h, --help ............ Display help information
-m, --source-map ...... Generate a source map using an optional source map URL
-o, --output .......... Write output to a given path/filename
-p, --production ...... Write only the minified production output
-s, --silent .......... Skip status updates normally logged to the console
-V, --version ......... Output current version of lodash
```
