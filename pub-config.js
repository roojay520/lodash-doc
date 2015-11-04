var opts = module.exports = {

  appUrl: 'https://jldec.github.io/lodash-doc-2',
  github: 'https://github.com/jldec/lodash-doc-src',
  version: '4.0.0',

  noRobots: true,            // please don't crawl me (yet)
  linkNewWindow: true,
  folderPages: true,
  editor: false,
  throttleReload: '1s',

  pkgs: [
    'pub-pkg-prism',
    'pub-pkg-font-awesome',
    'pub-pkg-seo'
  ],

  sources: [
    { path:'./pages', writable:true },
    { path:'../../lodash/lodash/lodash.js', format: 'JsDOC' },
    { path:'./templates', compile:'handlebars' }
  ],

  staticPaths: [
    './static',
    './CNAME',
    '.gitignore',
    '.nojekyll',
    './README.md'
  ],

  generatorPlugins: './plugins/generator-plugin.js',

  browserScripts: { path:'./doc.js', route:'/js', inject:true },

  injectCss: ['/css/doc.css'],
  injectJs: ['/js/lodash.min.js'],

  outputs: {
    path: './out',
    relPaths: true
  }

};
