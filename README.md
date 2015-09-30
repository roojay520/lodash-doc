# lodash doc

http://jldec.github.io/lodash-doc/

This is a trial doc website for lodash, generated from markdown using [pub-server](http://jldec.github.io/pub-doc)

To edit the site locally, clone this repo, then

```sh
npm install
```

`pub-config` points to the source in '../../lodash/lodash/lodash.src.js'. To preview at http://localhost:3001/ while you edit

```sh
npm run develop
```

The browser preview will auto-reload whenever you save a file.

To generate a new set of html and copy static files into ./out.
```sh
npm run generate
```

To preview the generated static output at http://localhost:3001/
```sh
npm run static
```

To publish to gh-pages, first commit generated `./out` in master, then
```sh
git checkout gh-pages
git read-tree -u -m master:out
git commit -m 'publish to gh-pages'
git push
git checkout master
```
