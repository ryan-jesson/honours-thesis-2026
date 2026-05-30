/* ============================================================
   nav.js — shared site navigation for the class-materials site
   ------------------------------------------------------------
   TO ADD A NEW WEEK:
     1. Create the new HTML file in this directory.
     2. Add one entry to the PAGES manifest below.
   That is the whole workflow. The sticky nav bar and the
   landing page's card grid both render from this single
   manifest, so a new entry appears in both places at once.

   Each page includes, near the top of <body>:
     <div id="site-nav"></div>
     <script src="nav.js"></script>
   and, in <head>:
     <link rel="stylesheet" href="nav.css">
   ============================================================ */

(function () {
  'use strict';

  /* ---- The manifest: the single source of truth for the site ---- */
  var PAGES = [
    {
      id: 'week11',
      label: 'Framing Your Thesis',
      file: 'week11_class.html',
      week: 'Week 11',
      description: 'Choosing your thesis focus, framing your argument, and writing with precision.'
    },
    {
      id: 'week12',
      label: 'Writing Your Introduction',
      file: 'week12_class.html',
      week: 'Week 12',
      description: 'The architecture of a thesis introduction, with a deep focus on the roadmap paragraph.'
    },
    {
      id: 'week13',
      label: 'Powerful Paragraphs',
      file: 'week13_class.html',
      week: 'Week 13',
      description: 'Diagnosing topic sentences and building the body of your introduction, one argument per paragraph.'
    }
  ];

  /* Expose the manifest so other pages — e.g. the landing page's
     card grid — can render from the same single source of truth. */
  window.SITE_PAGES = PAGES;

  /* The filename of the page currently being viewed. All paths are
     relative, so this works whether the site is served from a root
     domain or a GitHub Pages project subpath. A trailing-slash URL
     (a directory root) resolves to index.html. */
  function currentFile() {
    var path = window.location.pathname;
    var file = path.substring(path.lastIndexOf('/') + 1);
    return file === '' ? 'index.html' : file;
  }

  /* Render the nav bar into the <div id="site-nav"></div> placeholder. */
  function renderNav() {
    var mount = document.getElementById('site-nav');
    if (!mount) return;

    var current = currentFile();

    var tabs = PAGES.map(function (page) {
      var active = (page.file === current) ? ' active' : '';
      return '<a class="site-nav-tab' + active + '" href="' + page.file + '">' +
               page.label +
             '</a>';
    }).join('');

    mount.innerHTML =
      '<div class="site-nav-inner">' +
        '<a class="site-nav-home" href="index.html">Honours Thesis &middot; 2026</a>' +
        '<nav class="site-nav-tabs" aria-label="Class weeks">' + tabs + '</nav>' +
      '</div>';
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', renderNav);
  } else {
    renderNav();
  }
})();
