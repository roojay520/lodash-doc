// pub-theme-doc-II client-side navigation and search
// (to be extracted into pub-theme-doc-II)
// depends on lodash and jquery
//
// copyright 2015 jurgen leschner (github/jldec) - MIT license

$(function () {
    $('li > a:contains("Getting Started")').text('入门指南');
    $('li > a:contains("Custom Builds")').text('版本定制');
    $('li > a:contains("All-in-one Doc")').text('单页面方式浏览');


// global list of pages extracted from TOC by initSearchNav()
    var searchData  = [];
    var searchData$ = {};

// global nav state maintained by navPath()
    var currentPage;

// UI consts
    var $html        = $('html');
    var html         = $html.get(0);
    var $nav         = $('#nav');
    var $toc         = $('#toc');
    var toc          = $toc.get(0);
    var $searchInput = $('#q');
    var searchInput  = $searchInput.get(0);

    var onIOS = /iPad|iPhone/i.test(navigator.userAgent);

// prefix for site if not running at server root
    var staticRoot = location.pathname.slice(0, location.pathname.length - pubRef.href.length);
// if (staticRoot) { console.log('static Root: ' + staticRoot); }

// initialize searchData and setup keyboard and mouse search/nav event handlers
    initSearchNav();

// call once on startup and again on each pager event
    navPath(pubRef.href);

    var pager = null;
    if (history && history.pushState) {
        initPager();
    }

    return;

//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//

// maintaint nav/scroll state in TOC
// called repeatedly if pager active
// depends on searchData$
    function navPath (path) {
        if (!path) return;

        // unhighlight old page in toc
        if (currentPage) {
            currentPage.$a.removeClass('open');
        }

        // find new page
        currentPage = searchData$[path];

        if (currentPage) {
            // highlight current page in toc
            currentPage.$a.addClass('open').get(0).focus();

            // if necessary scroll toc to show current page
            var toclinktop = currentPage.$a.offset().top;
            if (toclinktop > (toc.offsetTop + toc.clientHeight) || // below
                toclinktop < toc.offsetTop) { // above
                $toc.scrollTop(currentPage.$a.get(0).offsetTop);
            }

            // close nav if toggled on
            $nav.removeClass('show');
        }
        else {
            console.log("navPath can't find %s in toc", path);
        }
    }

// pager-aware nav handler
    function navTo (href) {
        if (!href) return;
        if (pager) {
            pager.show(staticRoot + href);
            return;
        }
        window.location.href = pubRef.relPath + href;
    }

// intialize single page navigation
// based on jldec/pub-preview
// depends on visionmedia/page.js
    function initPager () {
        var pages    = [];
        var $content = $('#content'); // assume consistent layout for all content

        pager = require('page');
        $.ajaxSetup({cache: true});

        $.getJSON(pubRef.relPath + '/pages.json')
            .fail(function (jqXHR) {
                console.log('unable to load /pages.json');
            })
            .done(function (data) {

                pages         = data;
                page$         = _.keyBy(data, 'href');
                page$['/all'] = {href: '/all', html: _.map(pages, 'html').join('\n')}; // all-in-one page

                pager('*', function (ctx) {
                    var path = ctx.path;

                    // strip static root
                    path = unPrefix(path, staticRoot);

                    // strip querystring
                    path = path.split('?')[0];

                    var page = page$[path];
                    if (page) {
                        $content.html(page.html);
                        navPath(path); // fix nav UI state
                        $('html,body').animate({scrollTop: 0}, 200);
                    }
                    // console.log('pager: %s %s', path, page ? 'ok' : '-');
                });

                // start pager
                pager({dispatch: false});
                // console.log('pager ready')

            });
    }

// nav/search event handlers initialized only once
    function initSearchNav () {

        // per @jdalton request - messy interaction with default small on screens
        // var $navIcon = $('#nav > span.fa');
        // $navIcon.click(function() {
        //   $nav.toggleClass('show');
        // })

        // try to restore previous toc scroll position
        if (localStorage.tocpos) {
            $toc.scrollTop(localStorage.tocpos);
        }

        // always save state before navigating
        $(window).on(onIOS ? "pagehide" : "beforeunload", function () {
            localStorage.tocpos = $toc.scrollTop();
        });

        // nav show/hide
        $('#nav > span.fa').click(function (evt) {
            $nav.toggleClass('show');
        });

        // extract search data from page-tree
        // NOTE could be replaced with data from pages.json if always using pager
        searchData = []
        var lastObj;
        $('#toc a').each(function () {
            var $a = $(this);
            var o  = {
                href    : $a.attr('href').slice(pubRef.relPath.length),
                $a      : $a,
                text    : $a.text(),
                htmlText: this.innerHTML,
                title   : $a.attr('title')
            };
            if (lastObj) {
                o.prev       = lastObj.href;
                lastObj.next = o.href;
            }
            searchData.push(o);
            lastObj = o;
        });
        searchData$ = _.keyBy(searchData, 'href');

        // search UI state
        var searchList = {
            $list : $('#q-list'),
            length: 0,
            q     : ''
        }

        // search UI events
        $searchInput
            .focus(searchListShow)
            .keydown(searchListNav)
            .keyup(search);

        $(window).keydown(function (evt) {
            if (evt.metaKey || evt.altKey || evt.ctrlKey || evt.target == searchInput) return true;
            var k = evt.keyCode;
            if ((k >= 65 && k <= 90) || k === 189 || k === 190) {
                searchInput.focus();
                $nav.addClass('show');
            } // a-z . _
            if (k === 37) {
                navTo(currentPage && currentPage.prev)
            } // left
            if (k === 39) {
                navTo(currentPage && currentPage.next)
            } // right
            return true;
        })

        // prevent blur(searchListHide) when clicking search list
        $('#q-list')
            .click(function (evt) {
                return searchListSelect(evt);
            });

        // keydown events navigate search UI
        function searchListNav (evt) {
            if (evt.shiftKey || evt.metaKey || evt.altKey || evt.ctrlKey) return true;
            switch (evt.keyCode) {
                case 27: // esc
                case 9:  // tab
                    return searchListHide(evt, true);
                case 37: // left
                case 38: // up
                case 39: // right
                case 40: // down
                    return searchListMove(evt, evt.keyCode < 39, evt.keyCode % 2);
                case 13: // enter
                    return searchListSelect(evt);
            }
        }

        function searchListHide (evt, clear) {
            searchList.$list.removeClass('show');
            if (clear) {
                $searchInput.val('');
                $nav.removeClass('show');
                searchInput.blur();
            }
            return true; // allow other stuff to happen when you click outside
        }

        function searchListShow (evt) {
            if (searchList.length) {
                searchList.$list.addClass('show');
                return false
            }
            return true;
        }

        function searchListMove (evt, direction, hmove) {
            if (!searchList.length) return true;

            var $newsel = moveSelection('.searchitem', direction, searchList.$list);
            if (!$newsel.length) return true;

            return false;
        }

        // moves .selected class to next/prev sibling in or first/last child of $list
        // all params optional
        function moveSelection (selector, direction, $list, wraparound) {

            selector       = selector || '';
            var $selection = $(selector + '.selected', $list);
            var $to        = direction ? $selection.prev(selector) : $selection.next(selector);
            if (!$to.length) {
                // try jumping over one sibiling
                $to = direction ? $selection.prev().prev(selector) : $selection.next().next(selector);
            }

            if (!$to.length && $list && (wraparound || !$selection.length)) {
                $to = direction
                    ? $list.children(selector).last()
                    : $list.children(selector).first()
            }

            if ($to.length) {
                $(selector + '.selected').removeClass('selected');
                $to.addClass('selected').get(0).scrollIntoView(false);
            }

            return $to;
        }

        // template external to search() to avoid recompiles
        _.templateSettings.interpolate = /\{\-\{(.+?)\}\-\}/g;
        _.templateSettings.escape      = /\{\{(.+?)\}\}/g;
        var renderSearchItem           = _.template('<li class="searchitem"><a href="{{href}}" title="{{title}}">{-{htmlText}-}</a></li>');

        // search keyup events refresh search results
        function search (evt) {
            var q = $searchInput.val();
            if (q === searchList.q) return true;
            searchList.q = q;
            words        = _.compact(q.split(/\W/));
            if (!words.length) return searchListHide(evt, false);
            var re      = new RegExp(_.map(words, _.escapeRegExp).join('.*'), "i");
            var results = _.filter(searchData, function (o) {
                return (o.text.search(re) >= 0 || o.href.search(re) >= 0);
            })
            if (!results.length) return searchListHide(evt, false);
            searchList.$list
                .addClass('show')
                .html(_.map(results, renderSearchItem).join(''));

            searchList.length = results.length;
            return true;
        }

        function searchListSelect (evt) {
            var href = $(evt && evt.target).attr('href') || // click on link
                $(evt && evt.target && evt.target.parentElement).attr('href') || // click on detail next to link
                $('.searchitem.selected a').attr('href') || // enter key with selection
                $('.searchitem a').first().attr('href'); // enter key no selection
            if (!href) return true;
            navTo(href);
            searchListHide(evt, true);
            return false;
        }

    }

// return string minus prefix, if the prefix matches
    function unPrefix (s, prefix) {
        if (!prefix) return s;
        if (s.slice(0, prefix.length) === prefix) return s.slice(prefix.length);
        return s;
    }

}) // $(function()
