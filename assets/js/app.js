import '../css/style.css';
import '../css/normalize.css';
import "babel-polyfill";
import '../css/style.css';$(document).ready(function() {
  //header links
  var menuToggle = $('#js-mobile-menu').unbind();
  $('#js-navigation-menu').removeClass("show");

  //mobile menu toggle
  menuToggle.on('click', function(e) {
    e.preventDefault();
    $('#js-navigation-menu').slideToggle(function() {
      if ($('#js-navigation-menu').is(':hidden')) {
        $('#js-navigation-menu').removeAttr('style');
      }
    });
  });

  //owl carousels
  $(".owl-carousel").owlCarousel({
    singleItem: true,
    pagination: true
  });
  $(".owl-carousel-small").owlCarousel({
    items: 4,
    itemsDesktop: [1199, 3],
    itemsDesktopSmall: [979, 3],
    pagination: true
  });

  $('.accordion-tabs-minimal').each(function(index) {
    //accordion
    $(this).children('li').first().children('a').addClass('is-active').next().addClass('is-open').show();
  });

  $('.accordion-tabs-minimal').on('click', 'li > a', function(event) {
    if (!$(this).hasClass('is-active')) {
      event.preventDefault();
      var accordionTabs = $(this).closest('.accordion-tabs-minimal');
      accordionTabs.find('.is-open').removeClass('is-open').hide();

      $(this).next().toggleClass('is-open').toggle();
      accordionTabs.find('.is-active').removeClass('is-active');
      $(this).addClass('is-active');
    } else {
      event.preventDefault();
    }
  });
  
  //ease scroll for links
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 1250);
        return false;
      }
    }
  });
});

//parallax scroll watcher
$(window).scroll(function(e) {
  if ($(".parallax-window").length) {
    parallax();
  }
});

//parallax
function parallax() {
  if ($(".parallax-window").length > 0) {
    var plxBackground = $(".parallax-background");
    var plxWindow = $(".parallax-window");

    var plxWindowTopToPageTop = $(plxWindow).offset().top;
    var windowTopToPageTop = $(window).scrollTop();
    var plxWindowTopToWindowTop = plxWindowTopToPageTop - windowTopToPageTop;

    var plxBackgroundTopToPageTop = $(plxBackground).offset().top;
    var windowInnerHeight = window.innerHeight;
    var plxBackgroundTopToWindowTop = plxBackgroundTopToPageTop - windowTopToPageTop;
    var plxBackgroundTopToWindowBottom = windowInnerHeight - plxBackgroundTopToWindowTop;
    var plxSpeed = 0.35;

    plxBackground.css('top', -(plxWindowTopToWindowTop * plxSpeed) + 'px');
  }
}