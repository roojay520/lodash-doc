var opts = module.exports = {

  appUrl: 'http://jldec.github.io/lodash-doc',
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
    '.nojekyll'
  ],

  generatorPlugins: './plugins/generator-plugin.js',

  injectCss: ['/css/doc.css'],
  injectJs: ['/js/lodash.min.js', '/js/doc.js' ],

  outputs: {
    path: './out',
    relPaths: true
  }

};
