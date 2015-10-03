/*
 * lodash-doc pub-generator plugin
 *
 * mostly copied from https://github.com/jdalton/docdown
 * copyright 2011-2015 John-David Dalton <http://allyoucanleet.com/>
*/

module.exports = function(generator) {
  var opts = generator.opts;
  var log = opts.log;
  var hb = generator.handlebars;

  var _ = require('lodash');
  var Entry = require('docdown/lib/entry.js');
  var push = Array.prototype.push;
  var specialCategories = ['Methods', 'Properties'];

  generator.parseFilesJsDOC = parseFilesJsDOC;

  //--//--//--//--//--//--//--//--//--//--//--//--//--//

  function parseFilesJsDOC(source, opts) {
    var pages = [];
    var api = [];

    _.each(source.files, function(file) {

      file.source = source;

      // what follows is mostly from docdown/lib/generator.js
      // use file.text as 'source' to getEntries

      // Add entries and aliases to the API list.
      _.each(Entry.getEntries(file.text), function(entry) {
        entry = new Entry(entry, file.text);
        api.push(entry);

        var aliases = entry.getAliases();
        if (!_.isEmpty(aliases)) {
          push.apply(api, aliases);
        }
      });

      _.each(api, function(entry) {

        // Skip privates or no name.
        var name = entry.getName();
        if (!name || entry.isPrivate()) {
          return;
        }

        var member = entry.getMembers(0) || '';
        if (member.length > 1) {
          name = member.slice(2) + '.' + name;
        }
        var separator = member ? getSeparator(entry) : '';

        // Skip aliases.
        if (entry.isAlias()) return;

        var page =
        { _href:      '/' + entry.getHash("default"),
          _hdr:       '',
          _txt:       entry.getDesc(),
          _file:      file,
          category:   entry.getCategory(),
          name:       separator.slice(1) + name,
          htmlName:   _.escape(separator.slice(1) + name),
          signature:  member + separator + entry.getCall(),
          lineNumber: entry.getLineNumber(),
          template:   'entry' };

        var aliases = entry.getAliases();
        _.each(aliases, function(alias) {
          if (!page.alias) { page.alias = []; }
          page.alias.push('/' + alias.getHash("default"));
        });
        if (!_.isEmpty(aliases)) {
          page.htmlName = _.escape(page.name) + ' <span class="aliases">' +
            _.map(aliases, function(alias) {
              return alias.getName();
            }).join(', ') + '</span>';
        }

        var params = entry.getParams();
        if (!_.isEmpty(params)) {
          page.params = _.map(params, function(param) {
            return { desc: param[2],
                     name: param[1],
                     type: param[0] };
          });
        }

        var returns = entry.getReturns();
        if (!_.isEmpty(returns)) {
          page.returns = { desc:returns[1], type:returns[0] };
        }

        var example = entry.getExample();
        if (example) {
          page.example = example;
        }

        pages.push(page);
      });
    });

    source.fragments = _.sortBy(pages, function(page) {
      return (page.category + '/' + page._href).toLowerCase();
    });

  }

  function getSeparator(entry) {
    return entry.isPlugin() ? '.prototype.' : '.';
  }

  hb.registerHelper('source', function(frame) {
    if (this.lineNumber) {
      return '<a' +
        ' href="https://github.com/lodash/lodash/blob/' + opts.version + '/lodash.src.js#L' + this.lineNumber + '"' +
        ' title="View in source."' +
        ' target="github"' +
        '>source</a>';
    }
  });

  hb.registerHelper('npm', function(frame) {
    if (this.name == "support" ||
        this.name == "templateSettings" ||
        (this.category != "Chain" && this.category != "Methods" && this.category != "Properties")) {
      return '<a' +
        ' href="https://www.npmjs.com/package/lodash.' + this.name.toLowerCase() + '"' +
        ' title="See the npm package."' +
        ' target="npm"' +
        '>npm</a>';
    }
  });

  hb.registerHelper('eachSinglePage', function(frame) {
    return _.map(_.reject(generator.contentPages, function(page) { return page.multipage; }),
           frame.fn).join('');
  });

}
