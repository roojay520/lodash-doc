var opts = module.exports = {

    appUrl : 'http://think2011.net/lodash-zh',
    github : 'https://github.com/think2011/lodash-zh',
    version: '4.0.0-pre',

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
        {path: './lodash/lodash.js', format: 'JsDOC'},
        {path: './templates', compile: 'handlebars'}
    ],

    staticPaths: [
        {path: './lodash/lodash.js', route: '/js', inject: true},
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
        path    : './lodash-zh',
        relPaths: true
    }

};
