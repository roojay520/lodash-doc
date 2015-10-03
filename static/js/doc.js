// pub-theme-doc-II client-side navigation and search
// (to be extracted into pub-theme-doc-II)
// depends on lodash and jquery
//
// copyright 2015 jurgen leschner (github/jldec) - MIT license

_.templateSettings.interpolate = /\{\-\{(.+?)\}\-\}/g;
_.templateSettings.escape = /\{\{(.+?)\}\}/g;
_.templateSettings.evaluate = /\|(.+?)\|/g;

$(function() {

var $toc = $('#toc');
var toc = $toc.get(0);
var $page = $('#page');
var freshTocScrollState = true;
var $searchInput = $('#q');
var searchInput = $searchInput.get(0);
var thisUrl = pubRef.relPath + pubRef.href;

// identify folder and highlight current page in toc
var $tocpagelink = $('#toc a[href="' + thisUrl + '"]').addClass('open');
var $tocfolder = $tocpagelink.parent('li').parent('ul').parent('li');

$('#navicon').click(function(evt) {
  $toc.toggleClass('show');
  $page.toggleClass('showtoc');
  // try to restore scroll position in toc the first time it is shown
  if (freshTocScrollState && localStorage.tocpos && $toc.hasClass('show')) {
    $toc.scrollTop(localStorage.tocpos);
    freshTocScrollState = false;
  }
  return false;
});

var $folders = $('li.folder > span.folderPage');

var collapsed = localStorage.collapsed;
if (collapsed) { try { collapsed = JSON.parse(collapsed); } catch(err){} }

// initialize with all except first folders collapsed
if (typeof collapsed != 'object') {
  collapsed = {};
  $folders.not($tocfolder).each(function(i) {
    if (i == 0) return; // skip
    var el = this.parentNode;
    collapsed[el.id] = true;
    $(el).addClass('collapsed');
  });
}
// use saved state
else {
  for (var id in collapsed) {
    if (collapsed[id]) { $('#' + id).not($tocfolder).addClass('collapsed'); }
  };
}

// try to restore previous toc scroll position
if (localStorage.tocpos) {
  $toc.scrollTop(localStorage.tocpos);
}
else {
  // scroll toc to show current page
  var toclinktop = ($tocpagelink.length && $tocpagelink.offset().top) || 0;
  if (toclinktop > (toc.offsetTop + toc.clientHeight)) {
    $toc.scrollTop(toclinktop - toc.clientHeight);
  }
}

// always save state before navigating
var onIOS = /iPad|iPhone/i.test(navigator.userAgent);
$(window).on(onIOS ? "pagehide" : "beforeunload", function() {
  localStorage.collapsed = JSON.stringify(collapsed);
  localStorage.tocpos = $toc.scrollTop();
});

$folders.click(function(evt) {
  var el = this.parentNode;
  var id = el.id;
  var $el = $(el);
  $el.toggleClass('collapsed');
  collapsed[id] = $el.hasClass('collapsed');
  return false;
});

// extract search data from page-tree
var searchData = []
$('#toc a').each(function(){
  var a = $(this);
  searchData.push({ href:a.attr('href'), text:a.text(), htmlText:this.innerHTML, title:a.attr('title') });
});

// search UI state
var searchList = {
  $list: $('#q-list'),
  length: 0,
  hselect: false,
  nohide: false,
  q: ''
}

// search UI events
$searchInput
  .focus(searchListShow)
  .keydown(searchListNav)
  .keyup(search);

$page.click(function(evt) {
  if (evt.target !== searchInput) return searchListHide(evt);
  return true;
});

$(window).keydown(function(evt) {
  if (evt.metaKey || evt.altKey || evt.ctrlKey  || evt.target == searchInput) return true;
  var k = evt.keyCode;
console.log('keydown: ' + k)
  if ((k >= 65 && k <= 90) || k === 189 || k === 190) { searchInput.focus(); } // a-z . _
  if (k === 37) { jump(-1); } // left
  if (k === 39) { jump(1); } // right
  return true;
})

function jump(offset) {
console.log('jump: ' + offset)
  _.each(searchData, function(o, idx) {
    if (o.href === thisUrl) {
      var goto = searchData[idx + offset];
      if (goto && goto.href) return navTo(goto.href);
    }
  })
}

// prevent blur(searchListHide) when clicking search list
$('#q-list')
  .mousedown(function() { return searchList.noHide = true; })
  .click(function(evt) { return searchListSelect(evt); });

// keydown events navigate search UI
function searchListNav(evt) {
  if (evt.shiftKey || evt.metaKey || evt.altKey || evt.ctrlKey) return true;
  switch(evt.keyCode) {
    case 27: // esc
    case 9:  // tab
      return searchListHide(evt);
    case 37: // left
    case 38: // up
    case 39: // right
    case 40: // down
      return searchListMove(evt, evt.keyCode < 39, evt.keyCode % 2);
    case 13: // enter
      return searchListSelect(evt);
  }
}

function searchListHide(evt, searching) {
  if (searchList.noHide) {
    searchList.noHide = false;
    return true;
  }
  searchList.$list.removeClass('show');
  return true; // allow other stuff to happen when you click outside
}

function searchListShow(evt) {
  if (searchList.length) {
    searchList.$list.addClass('show');
    return false
  }
  return true;
}

function searchListMove(evt, direction, hmove) {
  if (!searchList.length) return true;

  if (searchList.hselect && hmove) {
    return !moveSelection('.searchsubitem', direction).length;
  }

  var $newsel = moveSelection('.searchitem', direction, searchList.$list);
  if (!$newsel.length) return true;

  if (searchList.hselect) {
    moveSelection('.searchsubitem', false, $newsel);
  }
  return false;
}

// moves .selected class to next/prev sibling in or first/last child of $list
// all params optional
function moveSelection(selector, direction, $list, wraparound) {

  selector = selector || '';
  var $selection = $(selector + '.selected', $list);
  var $to = direction ? $selection.prev(selector) : $selection.next(selector);
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
var renderSearchItem = _.template('<li class="searchitem"><a href="{{href}}" title="{{title}}">{-{htmlText}-}</a></li>');

// search keyup events refresh search results
function search(evt) {
  var q = $searchInput.val();
  if (q === searchList.q) return true;
  searchList.q = q;
  words = _.compact(q.split(/\W/));
  if (!words.length) return searchListHide(evt, true);
  var re = new RegExp(_.map(words, _.escapeRegExp).join('.*'), "i");
  var results = _.filter(searchData, function(o) {
    return (o.text.search(re) >= 0 || o.href.search(re) >= 0);
  })
  if (!results.length) return searchListHide(evt, true);
  searchList.$list
    .addClass('show')
    .html(_.map(results, renderSearchItem).join(''));

  searchList.length = results.length;
  return true;
}

function searchListSelect(evt) {
  var href = $(evt && evt.target).attr('href') || // click on link
             $(evt && evt.target && evt.target.parentElement).attr('href') || // click on detail next to link
             $(searchList.hselect ? '.searchsubitem.selected' : '.searchitem.selected a').attr('href') || // enter key with selection
             $('.searchitem a').first().attr('href'); // enter key no selection
  if (!href) return true;
  navTo(href);
  return false;
}

// pager-aware nav for search inside pub editor
function navTo(href) {
  if (window.pager) return window.pager.show(href);
  window.location.href = href;
}

}); // $(function() {
