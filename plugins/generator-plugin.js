/*
 * lodash-doc pub-generator plugin
 *
 * parts copied from https://github.com/jdalton/docdown
 * copyright 2011-2015 John-David Dalton <http://allyoucanleet.com/>
 */

module.exports = function (generator) {
    var opts = generator.opts;
    var log  = opts.log;
    var hb   = generator.handlebars;
    var u    = generator.util;

    var _                 = require('lodash');
    var Entry             = require('docdown/lib/entry.js');
    var push              = Array.prototype.push;
    var specialCategories = ['Methods', 'Properties'];

    // plugin parser
    generator.parseFilesJsDOC = parseFilesJsDOC;

    //--//--//--//--//--//--//--//--//--//--//--//--//--//

    function parseFilesJsDOC (source, opts) {
        var pages = [];
        var api   = [];

        _.each(source.files, function (file) {

            file.source = source;

            // what follows is mostly from docdown/lib/generator.js
            // using file.text as 'source' to getEntries

            // Add entries and aliases to the API list.
            _.each(Entry.getEntries(file.text), function (entry) {
                entry = new Entry(entry, file.text);
                api.push(entry);

                var aliases = entry.getAliases();
                if (!_.isEmpty(aliases)) {
                    push.apply(api, aliases);
                }
            });

            _.each(api, function (entry) {

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
                    {
                        _href     : '/' + entry.getHash("default"),
                        _hdr      : '',
                        _txt      : entry.getDesc(),
                        _file     : file,
                        category  : entry.getCategory(),
                        name      : separator.slice(1) + name,
                        htmlName  : _.escape(separator.slice(1) + name),
                        title     : member + separator + entry.getCall(),
                        lineNumber: entry.getLineNumber(),
                        template  : 'entry'
                    };

                var aliases = entry.getAliases();
                _.each(aliases, function (alias) {
                    if (!page.alias) {
                        page.alias = [];
                    }
                    page.alias.push('/' + alias.getHash("default"));
                });
                if (!_.isEmpty(aliases)) {
                    page.htmlName = _.escape(page.name) + ' <span class="aliases">' +
                        _.map(aliases, function (alias) {
                            return alias.getName();
                        }).join(', ') + '</span>';
                }

                var params = entry.getParams();
                if (!_.isEmpty(params)) {
                    page.params = _.map(params, function (param) {
                        return {
                            desc: param[2],
                            name: param[1],
                            type: param[0]
                        };
                    });
                }

                var returns = entry.getReturns();
                if (!_.isEmpty(returns)) {
                    page.returns = {desc: returns[1], type: returns[0]};
                }

                var example = entry.getExample();
                if (example) {
                    page.example = example;
                }

                pages.push(page);
            });
        });

        source.fragments = _.sortBy(pages, function (page) {
            return (page.category + '/' + page._href).toLowerCase();
        });

    }

    function getSeparator (entry) {
        return entry.isPlugin() ? '.prototype.' : '.';
    }

    hb.registerHelper('source', function (frame) {
        if (this.lineNumber) {
            return '<a' +
                ' href="https://github.com/lodash/lodash/blob/' + opts.version + '/lodash.src.js#L' + this.lineNumber + '"' +
                ' title="View in source."' +
                ' target="github"' +
                '>source</a>';
        }
    });

    hb.registerHelper('npm', function (frame) {
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

    hb.registerHelper('eachSinglePage', function (frame) {
        return _.map(singlePages(), frame.fn).join('');
    });

    hb.registerHelper('eachSinglePageArray', function (frame) {
        return '[' + _.map(singlePages(), frame.fn).join(',') + ']';
    });

    hb.registerHelper('serializePages', function (frame) {
        return JSON.stringify(_.map(singlePages(), bare));
    });

    hb.registerHelper('jsonBlock', function (frame) {
        return JSON.stringify(frame.fn(this));
    });

    // unformatted object inspector - down to 2 levels
    hb.registerHelper('inspect', function (frame) {
        return require('util').inspect(bare(this), {levels: 2});
    });

    hb.registerHelper('timestamp', function (fmt) {
        return u.date().format(hb.hbp(fmt));
    });

    // return bare page object (no refs to files etc.)
    function bare (page) {
        var o = _.omit(page, ['_file', '_children', '_parent', '_prev', '_next']);
        try {
            JSON.stringify(o);
        } catch (err) {
            console.log('ERROR', page._href, _.keys(page));
            return '';
        }
        return o;
    }

    // return array of single pages
    function singlePages () {
        return _.reject(generator.contentPages, function (page) {
            return page.multipage;
        });
    }

}
