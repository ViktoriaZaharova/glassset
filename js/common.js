$('[name="phone"]').mask('+7 (999) 999-99-99');

// sliders
$('.home-slider').slick({
	slidesToShow: 1,
	fade: true,
	arrows: false,
	swipe: false,
	pauseOnHover: false,
});

$('.home-navigation-slider').slick({
	draggable: true,
	slidesToShow: 4,
	slidesToScroll: 1,
	focusOnSelect: true,
	arrows: false,
	asNavFor: '.home-slider',
	variableWidth: true,
	cssEase: 'linear',
	speed: 2000,
	pauseOnHover: false,
	responsive: [
		{
			breakpoint: 992,
			settings: {
				slidesToShow: 3,
				variableWidth: false,
				speed: 700,
			}
		},
		{
			breakpoint: 768,
			settings: {
				slidesToShow: 2,
				variableWidth: false,
				speed: 700,
			}
		},
		{
			breakpoint: 576,
			settings: {
				slidesToShow: 1,
				variableWidth: false,
				speed: 700,
			}
		}
	]
});


$('.product-card-slider').slick({
	slidesToShow: 1,
	arrows: false,
	dots: true,
});

$('.news-slider').slick({
	slidesToShow: 3,
	prevArrow: '<button type="button" class="slick-prev"><svg class="svg-icon"><use xlink:href="img/sprite.svg#prev"></use></svg></button>',
	nextArrow: '<button type="button" class="slick-next"><svg class="svg-icon"><use xlink:href="img/sprite.svg#next"></use></svg></button>',
	responsive: [
		{
			breakpoint: 768,
			settings: {
				slidesToShow: 2,
			}
		},
		{
			breakpoint: 576,
			settings: {
				slidesToShow: 1,
			}
		}
	]
});

$('.reviews-video-slider').slick({
	slidesToShow: 3,
	infinite: false,
	prevArrow: '<button type="button" class="slick-prev"><svg class="svg-icon"><use xlink:href="img/sprite.svg#prev"></use></svg></button>',
	nextArrow: '<button type="button" class="slick-next"><svg class="svg-icon"><use xlink:href="img/sprite.svg#next"></use></svg></button>',
	responsive: [
		{
			breakpoint: 768,
			settings: {
				slidesToShow: 2,
			}
		},
		{
			breakpoint: 576,
			settings: {
				slidesToShow: 1,
			}
		}
	]
});

$('.reviews-slider').slick({
	slidesToShow: 2,
	infinite: false,
	prevArrow: '<button type="button" class="slick-prev"><svg class="svg-icon"><use xlink:href="img/sprite.svg#prev"></use></svg></button>',
	nextArrow: '<button type="button" class="slick-next"><svg class="svg-icon"><use xlink:href="img/sprite.svg#next"></use></svg></button>',
	responsive: [
		{
			breakpoint: 768,
			settings: {
				slidesToShow: 1,
			}
		}
	]
});

$('.best-offers-slider').slick({
	slidesToShow: 4,
	prevArrow: '<button type="button" class="slick-prev"><svg class="svg-icon"><use xlink:href="img/sprite.svg#prev2"></use></svg></button>',
	nextArrow: '<button type="button" class="slick-next"><svg class="svg-icon"><use xlink:href="img/sprite.svg#next2"></use></svg></button>',
	swipe: false,
	responsive: [
		{
			breakpoint: 992,
			settings: {
				slidesToShow: 3,
			}
		},
		{
			breakpoint: 768,
			settings: {
				slidesToShow: 2,
			}
		},
		{
			breakpoint: 576,
			settings: {
				slidesToShow: 1,
			}
		}
	]
});
// sliders end


// slider in bootstrap tabs
$('[data-bs-toggle="tab"]').on('shown.bs.tab', function (e) {
	$('.tab-pane.show').find('.slick-slider').slick('setPosition');
});


// header fixed
$(window).scroll(function () {
	if ($(this).scrollTop() > 150) {
		$('header').addClass('fixed');
	} else {
		$('header').removeClass('fixed');
	}
});

// mobile menu
$('.btn-burger').on('click', function () {
	$(this).toggleClass('click');
	$('.header-bottom').fadeToggle();
});

$('.header-bottom').on('click', function () {
	$('.header-bottom').fadeOut();
	$('.btn-burger').removeClass('click');
});


new WOW().init();