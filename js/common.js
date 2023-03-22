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
				dots: true
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
				dots: true
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
				dots: true
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
		},
		{
			breakpoint: 576,
			settings: {
				slidesToShow: 1,
				dots: true
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

$('.team-slider').slick({
	slidesToShow: 4,
	prevArrow: '<button type="button" class="slick-prev"><svg class="svg-icon"><use xlink:href="img/sprite.svg#prev"></use></svg></button>',
	nextArrow: '<button type="button" class="slick-next"><svg class="svg-icon"><use xlink:href="img/sprite.svg#next"></use></svg></button>',
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
				arrows: false, 
				dots: true,
			}
		}
	]
});

$('.recommended-product-slider').slick({
	slidesToShow: 4,
	prevArrow: '<button type="button" class="slick-prev"><svg class="svg-icon"><use xlink:href="img/sprite.svg#prev"></use></svg></button>',
	nextArrow: '<button type="button" class="slick-next"><svg class="svg-icon"><use xlink:href="img/sprite.svg#next"></use></svg></button>',
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

$('.product-slider').slick({
	slidesToShow: 1,
	fade: true,
	arrows: false,
});

$('.product-slider-preview').slick({
	slidesToShow: 5,
	arrows: false,
	vertical: true,
	verticalSwiping: true,
	focusOnSelect: true,
	asNavFor: '.product-slider',
	responsive: [
		{
			breakpoint: 992,
			settings: {
				slidesToShow: 4,
				vertical: false,
				verticalSwiping: false,
			}
		},
		{
			breakpoint: 768,
			settings: {
				slidesToShow: 3,
				vertical: false,
				verticalSwiping: false,
			}
		},
		{
			breakpoint: 576,
			settings: {
				slidesToShow: 2,
				vertical: false,
				verticalSwiping: false,
			}
		}
	]
});
// sliders end

// amount
$('.down').on("click", function () {
	var $input = $(this).parent().find('input');
	var count = parseInt($input.val()) - 1;
	count = count < 1 ? 1 : count;
	$input.val(count);
	$input.change();
	return false;
});
$('.up').on("click", function () {
	var $input = $(this).parent().find('input');
	$input.val(parseInt($input.val()) + 1);
	$input.change();
	return false;
});

$(document).ready(function () {
	$(".js-tab-trigger").click(function () {
		var id = $(this).attr('data-tab'),
			content = $('.js-tab-content[data-tab="' + id + '"]');

		// $('.js-tab-trigger.active').removeClass('active'); // 1
		// $(this).addClass('active'); // 2

		$('.js-tab-content.active').removeClass('active'); // 3
		content.addClass('active'); // 4
	});
});

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

$('.header-bottom__close').on('click', function () {
	$('.header-bottom').fadeOut();
	$('.btn-burger').removeClass('click');
});


new WOW().init();