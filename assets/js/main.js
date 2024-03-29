// ---------------------------------------------------------------------
// Global JavaScript
// Authors: Andrew Ross & a little help from my friends
// ---------------------------------------------------------------------

var AROSSMN = AROSSMN || {};

(function($, APP) {

$(function() {
  APP.Global.init();
  APP.Viewport.init();
  APP.Header.init();
  APP.ScrollTo.init();
  APP.Modal.init();
  APP.Sections.init();
  APP.Filters.init();
  APP.Carousel.init();
});

// ---------------------------------------------------------------------
// Browser and Feature Detection
// ---------------------------------------------------------------------

APP.Global = {
  init: function() {

    $(function(){
      document.body.classList.add("page-ready");
      // var subscribe = document.getElementById('subscribe'),
      //     sh = subscribe.offsetHeight;
      // subscribe.style.minHeight = sh + 'px';
    });

    if ( ! ('ontouchstart' in window) ) {
      document.documentElement.classList.add('no-touch');
    }

    if ( 'ontouchstart' in window ) {
      document.documentElement.classList.add('is-touch');
    }

    if (document.documentMode || /Edge/.test(navigator.userAgent)) {
      if(navigator.appVersion.indexOf('Trident') === -1) {
        document.documentElement.classList.add('isEDGE');
      } else {
        $('html').addClass('isIE isIE11');
      }
    }

    var isSafari = /constructor/i.test(window.HTMLElement) || (function (p) { return p.toString() === "[object SafariRemoteNotification]"; })(!window['safari'] || (typeof safari !== 'undefined' && safari.pushNotification));

    if(isSafari){
      document.body.classList.add('browser-safari');
    }

    if(window.location.hostname == 'localhost' | window.location.hostname == '127.0.0.1'){
      document.body.classList.add('localhost');
    }

    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
			document.body.classList.add('darkmode');
			document.getElementById('favicon').setAttribute('href', '/assets/img/favicons/favicon-light.png');
		}

    var reportBtn = $('#download-report');
    reportBtnText = $('#download-report > span'),
    reportNote = $('#downloaded-note');
    reportBtn.click(function(){
      setTimeout(function(){
        reportBtn.addClass('btn--completed');
        reportBtnText.html('Downloaded');
        reportNote.removeClass('d-none');
      }, 1000);

    });

    $('.js-menu-trigger').click(function(e){
      e.preventDefault();
      if( $('body').hasClass('menu-is-active') ) {
        $('body').removeClass('menu-is-active');
      } else {
        $('body').addClass('menu-is-active');
      }
    });

    $(window).keyup(function (e) {
      var code = (e.keyCode ? e.keyCode : e.which);
      if (code == 9){
        if ($(window).width() < 768) {
          if ( $('.navigation__inner a:focus, .navigation__inner input:focus').length) {
            $('body').addClass('menu-is-active');
          } else {
            $('body').removeClass('menu-is-active');
          }
        }
      }
    });

    $('.has-sub-nav > a').click(function(e){
      e.preventDefault();
    });

    $(window).keyup(function (e) {
      var code = (e.keyCode ? e.keyCode : e.which);
      if (code == 9){
        //if ($(window).width() < 768) {
          if ( $('.site-header a:focus').length) {
            $('.site-header').addClass('is-focused');
          } else {
            $('.site-header').removeClass('is-focused');
          }
        //}
      }
    });

    // report redirect
    let hash = window.location.hash.replace('#', '');
    $(document).ready(function(){
      if(hash === 'report') {
        window.location.href = '/insights/#research';
      }
    });
  }
}


// ---------------------------------------------------------------------
// header
// ---------------------------------------------------------------------

APP.Header = {
  init: function() {
    var header = document.getElementById('site-header'),
    w = $(window),
    b = $('body');

    var lastScrollTop = 0;

    $('.js-menu-trigger').click(function(e){
      e.preventDefault();
      if( $('body').hasClass('menu-is-open') ) {
        $('body').removeClass('menu-is-open');
      } else {
        $('body').addClass('menu-is-open');
      }
    });
  }
}


// ---------------------------------------------------------------------
// Detect when an element is in the viewport
// ---------------------------------------------------------------------

APP.Viewport = {
  init: function() {
    var items = document.querySelectorAll('*[data-animate-in], *[data-detect-viewport]'),
    pageOffset = window.pageYOffset;

    function isScrolledIntoView(el) {
      var rect = el.getBoundingClientRect(),
      elemTop = rect.top,
      elemBottom = rect.top + el.offsetHeight,
      bottomWin = pageOffset + window.innerHeight;

      return (elemTop < bottomWin && elemBottom > 0);
    }

    function detect() {
      for(var i = 0; i < items.length; i++) {
        if ( isScrolledIntoView(items[i]) ) {
          if( !items[i].classList.contains('in-view') ) {
            items[i].classList.add('in-view');

            if( items[i].getAttribute('data-count') ) {
              var item = items[i];
              let el = jQuery(items[i]);
              let count = el.attr('data-count');
              let fin = el.text();
              let counter = { var: 0 };
              el.html('0');

              setTimeout(function(){
                TweenLite.to(counter, 2, {
                  val: count,
                  roundProps:"val",
                  onUpdate:function(){
                    var num = Math.ceil(counter.val);
                    el.html(num);
                  },
                  onComplete: function() {
                    el.html(fin);
                  },
                  ease:Circ.easeOut
                });
              }, 300);
            }

          }
        }
      }
    }

    window.addEventListener('scroll', detect);
    window.addEventListener('resize', detect);

    for(var i = 0; i < items.length; i++) {
      var d = 0,
      el = items[i];

      if( items[i].getAttribute('data-animate-in-delay') ) {
        d = items[i].getAttribute('data-animate-in-delay') / 1000 + 's';
      } else {
        d = 0;
      }
      el.style.transitionDelay = d;
    }

    $(document).ready(detect);

  }
}


// ---------------------------------------------------------------------
// Scroll to
// Used for smooth scrolling to elements
// ---------------------------------------------------------------------

APP.ScrollTo = {

  init: function() {
    if( $('*[data-scroll-to]').length ) {
      this.bind();
    } else {
      return;
    }
  },

  bind: function() {

    $('*[data-scroll-to]').on('click touchstart:not(touchmove)', function(e) {
      e.preventDefault();

      var trigger = $(this).attr('data-scroll-to'),
      target = $("#" + trigger),
      ss = 1000, //scroll speed
      o = 0; // offset

      if( $(this).attr('data-scroll-speed') ) {
        ss = $(this).attr('data-scroll-speed');
      }

      if( $(this).attr('data-scroll-offset') ) {
        o = $(this).attr('data-scroll-offset');
      }

      $('html, body').animate({
        scrollTop: target.offset().top - o
      }, ss);

      document.body.classList.remove('menu-is-open');
    });


  }
};


// ---------------------------------------------------------------------
// Modal
// ---------------------------------------------------------------------

APP.Modal = {

  init: function() {

    const modalOpen = $('*[data-modal]');

    modalOpen.on('click touchstart:not(touchmove)', function(event) {
      event.preventDefault();
      let el = $(this);
      let trigger = el.attr('data-modal');
      let target = $("#" + trigger);

      if( target.hasClass('is-active') ) {
        target.removeClass('is-active');
        $('body').removeClass('modal-is-active');
        target.find('.modal__content').removeClass('d-none');
        target.find('.share-modal-content').addClass('d-none');
        window.location.hash = '';
      } else {
        target.addClass('is-active');
        $('body').addClass('modal-is-active');
        window.location.hash = trigger;
        window._octo = window._octo || [];
        window._octo.push(['recordPageView'])
      }
    });

    $(document).ready(function(){
      let hash = window.location.hash.replace('#', '');
      $('.modal-wrap').each(function(){
        if( $(this).attr('id') === hash ) {
          $(this).addClass('is-active');
          $('body').addClass('modal-is-active');
          window.location.hash = hash;
          window._octo = window._octo || [];
          window._octo.push(['recordPageView'])
        }
      });
    });
  }
};


// ---------------------------------------------------------------------
// Sections
// ---------------------------------------------------------------------

APP.Sections = {

  init: function() {
    if( $('.js-page-section').length ) {
      this.bind();
    } else {
      return;
    }
  },

  bind: function() {

    var section = $('.js-page-section'),
    w = $(window),
    offsetCount = 134;

    function checkSection() {

      section.each(function(){
        var el = $(this),
        topPos = el.offset().top - offsetCount,
        bottomPos = el.offset().top + el.innerHeight(),
        elId = el.attr('ID'),
        navLinks = $('.insights-nav a');

        if ( w.scrollTop() >= topPos && w.scrollTop() < (bottomPos - offsetCount) ){
          if( !el.hasClass('active-section') ){
            el.addClass('active-section');

            navLinks.each(function(){
              var nl = $(this);
              if( nl.attr('data-scroll-to') == elId ) {
                navLinks.removeClass('is-active');
                nl.addClass('is-active');
              }
            });
          }
        } else {
          if( el.hasClass('active-section') ){
            el.removeClass('active-section');
          }
        }
      });
    }

    function throttle(fn, wait) {
      var time = Date.now();
      return function() {
        if ((time + wait - Date.now()) < 0) {
          fn();
          time = Date.now();
        }
      };
    }

    window.addEventListener('scroll', throttle(checkSection, 100));
    window.addEventListener('resize', checkSection);

    $(document).ready(function(){
      $(window).trigger('resize');
    });
  }

};


// ---------------------------------------------------------------------
// Filters
// ---------------------------------------------------------------------

APP.Filters = {

  init: function() {
    if( $('.filters').length ) {
      this.bind();
    } else {
      return;
    }
  },

  bind: function() {

    function removeItemOnce(arr, value) {
        var index = arr.indexOf(value);
        if (index > -1) {
            arr.splice(index, 1);
        }
        return arr;
    }

    function findOne(arr2, arr) {
      return arr.some(function (v) {
        return arr2.indexOf(v) >= 0;
      });
    }

    function matchAll(superset, subset) {
      return subset.every(function (value) {
        return (superset.indexOf(value) >= 0);
      });
    }

    const contentTypes = $('#content-type-filters input');
    const workflows = $('#workflow-filters input');
    const filters = $('.js-filter-list a');
    let activeFilters = [];
    let activeContentTypes = [];

    contentTypes.on('click', function(){
      let el = $(this);
      let filter = el.val();
      if( activeContentTypes.includes(filter) ) {
        removeItemOnce(activeContentTypes, filter);
      } else {
        activeContentTypes.push(filter);
      }
      updatePosts();
      setTimeout(function(){
        $('body').removeClass('filters-open');
      }, 200);
    });

    workflows.on('click', function(){
      let el = $(this);
      let filter = el.val();
      if( activeFilters.includes(filter) ) {
        removeItemOnce(activeFilters, filter);
      } else {
        activeFilters.push(filter);
      }
      updatePosts();
      setTimeout(function(){
        $('body').removeClass('filters-open');
      }, 200);
    });

    const filteredList = $('.js-filtered-list');
    const item = $('.post-preview');

    function updatePosts() {
      let count = 0;
      filteredList.addClass('is-thinking');
      setTimeout(function(){
        filteredList.removeClass('is-thinking');
        if( activeFilters.length || activeContentTypes.length ) {
          filteredList.addClass('is-filtered');
        } else {
          filteredList.removeClass('is-filtered');
          item.removeClass('has-active-filter');
        }
        item.each(function(){
          let item = $(this);
          let tags = item.attr('data-tags');
          tags = tags.split(", ");

          if( activeFilters.length && activeContentTypes.length ) {
            let match = 0;
            if( findOne(activeFilters, tags) ) {
              item.addClass('has-active-filter');
              match++;
            }
            if( findOne(activeContentTypes, tags) ) {
              item.addClass('has-active-filter');
              match++;
            }
            if(match != 2) {
              item.removeClass('has-active-filter');
            }
          }

          if( activeFilters.length && activeContentTypes.length == 0 ) {
            if( findOne(activeFilters, tags) ) {
              item.addClass('has-active-filter');

            } else {
              item.removeClass('has-active-filter');
            }
          }

          if( activeContentTypes.length && activeFilters.length == 0 ) {
            if( findOne(activeContentTypes, tags) ) {
              item.addClass('has-active-filter');
            } else {
              item.removeClass('has-active-filter');
            }
          }
        });
        window.scrollTo(window.scrollX, window.scrollY - 1);
        window.scrollTo(window.scrollX, window.scrollY + 1);
      }, 1200);

    }

    $('.js-reset-filters').click(function(e){
      e.preventDefault();
      activeFilters = [];
      activeContentTypes = [];
      contentTypes.val('');
      workflows.val('');
      updatePosts();
    });


    function getParams() {
      let urlParams = new URLSearchParams(window.location.search);
      urlParams = urlParams.get('filters');
      let params = '';

      if( urlParams ) {
        params = urlParams;
      }

      if( params !== '' ) {

      }
    }

    var filterGroup = $('.filters');
    $('.js-filter-toggle').click(function(e){
      e.preventDefault();
      if( $('body').hasClass('filters-open') ) {
        $('body').removeClass('filters-open');
      } else {
        $('body').addClass('filters-open');
      }
    });

    // Check for query params
    $(document).ready(function(){
      getParams();
    });


    $('.js-clear-filters').click(function(){
      activeFilters = [];
      updatePosts();
    });

  }
};


// ---------------------------------------------------------------------
// Carousel
// ---------------------------------------------------------------------

APP.Carousel = {

  init: function() {
    if( $('.carousel').length ) {
      this.bind();
    } else {
      return;
    }
  },

  bind: function() {

    let car = $('.carousel--fades');

    $.fn.shuffleChildren = function() {
        $.each(this.get(), function(index, el) {
            var $el = $(el);
            var $find = $el.children();

            $find.sort(function() {
                return 0.5 - Math.random();
            });

            $el.empty();
            $find.appendTo($el);
        });
    };

    car.shuffleChildren();

    car.slick({
      dots: true,
      arrows: false,
      infinite: true,
      speed: 1000,
      autoplay: true,
      autoplaySpeed: 12000,
      fade: true,
      focusOnSelect: false,
      accessibility: false,
    });


  }
};



}(jQuery, AROSSMN));
