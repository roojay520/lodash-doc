var opts = module.exports = {

    appUrl : 'http://lodash.think2011.net',
    github : 'https://github.com/think2011/lodash-zh',
    version: '4.5.0正式版',

    noRobots      : false,            // please don't crawl me (yet)
    linkNewWindow : true,
    folderPages   : true,
    editor        : false,
    throttleReload: '1s',

    pkgs: [
        'pub-pkg-prism',
        'pub-pkg-font-awesome',
        'pub-pkg-seo'
    ],

    sources: [
        {path: './pages', writable: true},
        {path: './lodash-src/lodash-zh.js', format: 'JsDOC'},
        {path: './templates', compile: 'handlebars'}
    ],

    staticPaths: [
        {path: './lodash-src/lodash-zh.js', route: '/js', inject: true},
        './static',
        './CNAME',
        '.gitignore',
        '.nojekyll',
        './README.md'
    ],

    generatorPlugins: './plugins/generator-plugin.js',

    browserScripts: {path: './doc.js', route: '/js', inject: true},

    injectCss: ['/css/doc.css'],

    outputs: {
        path    : './dist',
        relPaths: true
    }

};
