$(document).ready(function() {
	fixContentPadding();
	initCarousel();
});

$(window).resize(function() {
	fixContentPadding();
});

function fixContentPadding() {
	var height_top = $('#top-nav').height();
	var height_bottom = $('.footer').height();
	var width = $( document ).width();
	var threshold = 767;

	var padding_top = width <= threshold
		? 0
		: 0;

	var padding_bottom = width <= threshold
		? 30
		: 40;

	var e = $('.content');
	e.css('padding-top', height_top + padding_top);
	e.css('padding-bottom', height_bottom + padding_bottom);
}

function initCarousel() {
	$("#owl-demo").owlCarousel({
      navigation: false,
      slideSpeed: 300,
      paginationSpeed: 400,
      singleItem: true,
      autoPlay: true,
  });
}