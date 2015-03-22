$(document).ready(function() {
	fix_content_padding();
});

$(window).resize(function() {
	fix_content_padding();
});

function fix_content_padding() {
	var height_top = $('#top-nav').height();
	var height_bottom = $('.footer').height();
	var width = $( document ).width();
	var threshold = 767;

	var padding_top = width <= threshold
		? 20
		: 20;

	var padding_bottom = width <= threshold
		? 30
		: 40;

	var e = $('.content');
	e.css('padding-top', height_top + padding_top);
	e.css('padding-bottom', height_bottom + padding_bottom);
}