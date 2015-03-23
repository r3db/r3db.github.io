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

	var padding_bottom = width <= threshold
		? 20
		: 30;

	$('.content').css('padding-top', height_top + $('.topbar').height() + 1);
	$('.page-content').css('padding-bottom', height_bottom + padding_bottom);
}

function initCarousel() {
	$("#owl-carousel").owlCarousel({
      navigation: false,
      slideSpeed: 300,
      paginationSpeed: 400,
      singleItem: true,
      autoPlay: true,
      pagination: true,
  	});
}