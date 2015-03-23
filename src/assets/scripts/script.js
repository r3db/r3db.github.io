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
	var attributeName = 'data-animation';
  	var attributeNotation = '[' + attributeName + ']';

	$("#owl-carousel").owlCarousel({
      navigation: false,
      slideSpeed: 300,
      paginationSpeed: 400,
      singleItem: true,
      autoPlay: true,
      pagination: true,
      afterMove : moved,
  	});

  	clearAnimations();
  	activateAnimation(0);

  	function moved() {
  		clearAnimations();
  		activateAnimation(this.owl.currentItem);
  	}

  	function clearAnimations() {
  		$(attributeNotation).each(function(i, element) {
  			var e = $(element);
  			e.hide();
  			e.removeClass(e.attr(attributeName));
  		});
  	}

  	function activateAnimation(index) {
  		$('[data-index="' + index + '"] ' + attributeNotation).each(function(i, element) {
  			var e = $(element);
  			var className = e.attr(attributeName);

  			if (className == undefined) {
  				return;
  			}

  			e.show();
  			e.addClass(className);
  		});
  	}
}