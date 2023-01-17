$('[name="phone"]').mask('+7 (999) 999-99-99');

// sliders
$('.home-slider').slick({
	slidesToShow: 1,
	fade: true,
	arrows: false,
	// autoplay: true,
	// autoplaySpeed: 3000,
	asNavFor: '.home-navigation-slider',
});

$('.home-navigation-slider').slick({
	slidesToShow: 4,
	slidesToScroll: 1,
	focusOnSelect: true,
	arrows: false,
	asNavFor: '.home-slider',
	variableWidth: true,
	// infinite: false,
	autoplay: true,
	autoplaySpeed: 3000,
});

$('.news-slider').slick({
	slidesToShow: 3,
	prevArrow: '<button type="button" class="slick-prev"><svg class="svg-icon"><use xlink:href="img/sprite.svg#prev"></use></svg></button>',
	nextArrow: '<button type="button" class="slick-next"><svg class="svg-icon"><use xlink:href="img/sprite.svg#next"></use></svg></button>',
});

$('.reviews-video-slider').slick({
	slidesToShow: 3,
	infinite: false,
	prevArrow: '<button type="button" class="slick-prev"><svg class="svg-icon"><use xlink:href="img/sprite.svg#prev"></use></svg></button>',
	nextArrow: '<button type="button" class="slick-next"><svg class="svg-icon"><use xlink:href="img/sprite.svg#next"></use></svg></button>',
});

$('.reviews-slider').slick({
	slidesToShow: 2,
	infinite: false,
	prevArrow: '<button type="button" class="slick-prev"><svg class="svg-icon"><use xlink:href="img/sprite.svg#prev"></use></svg></button>',
	nextArrow: '<button type="button" class="slick-next"><svg class="svg-icon"><use xlink:href="img/sprite.svg#next"></use></svg></button>',
});

$('.best-offers-slider1').slick({
	slidesToShow: 4,
	appendArrows: '.best-offers-slider-nav1',
	prevArrow: '<button type="button" class="slick-prev"><svg class="svg-icon"><use xlink:href="img/sprite.svg#prev"></use></svg></button>',
	nextArrow: '<button type="button" class="slick-next"><svg class="svg-icon"><use xlink:href="img/sprite.svg#next"></use></svg></button>',
});
$('.best-offers-slider2').slick({
	slidesToShow: 4,
	appendArrows: '.best-offers-slider-nav2',
	prevArrow: '<button type="button" class="slick-prev"><svg class="svg-icon"><use xlink:href="img/sprite.svg#prev"></use></svg></button>',
	nextArrow: '<button type="button" class="slick-next"><svg class="svg-icon"><use xlink:href="img/sprite.svg#next"></use></svg></button>',
});
$('.best-offers-slider3').slick({
	slidesToShow: 4,
	appendArrows: '.best-offers-slider-nav3',
	prevArrow: '<button type="button" class="slick-prev"><svg class="svg-icon"><use xlink:href="img/sprite.svg#prev"></use></svg></button>',
	nextArrow: '<button type="button" class="slick-next"><svg class="svg-icon"><use xlink:href="img/sprite.svg#next"></use></svg></button>',
});
// sliders end


// slider in bootstrap tabs
$('[data-bs-toggle="tab"]').on('shown.bs.tab', function (e) {
	$('.slick-slider').slick('setPosition');
});
// slider in bootstrap tabs end

// header fixed
$(window).scroll(function () {
	if ($(this).scrollTop() > 150) {
		$('header').addClass('fixed');
	} else {
		$('header').removeClass('fixed');
	}
});