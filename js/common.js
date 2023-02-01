$('[name="phone"]').mask('+7 (999) 999-99-99');

// sliders
$('.home-slider').slick({
	slidesToShow: 1,
	fade: true,
	arrows: false,
	swipe: false,
	pauseOnHover: false,
	// autoplay: true,
	// autoplaySpeed: 4000,
	// asNavFor: '.home-navigation-slider',
});



$(document).ready(function () {
	var time = 2;
	var $bar,
		$slick,
		isPause,
		tick,
		percentTime;

	$slick = $('.home-navigation-slider');
	$slick.slick({
		draggable: true,
		slidesToShow: 4,
		slidesToScroll: 1,
		focusOnSelect: true,
		arrows: false,
		asNavFor: '.home-slider',
		variableWidth: true,
		// centerMode: true,
		cssEase: 'linear',
		speed: 2500,
		pauseOnHover: false,
	});

	$bar = $('.slider-progress .progress');
	$barRound = $('.progress');

	$('.home-navigation').on({
		mouseenter: function () {
			isPause = true;
		},
		mouseleave: function () {
			isPause = false;
		}
	});

	// function startProgressbar() {
	// 	resetProgressbar();
	// 	percentTime = 0;
	// 	isPause = false;
	// 	tick = setInterval(interval, 20);
	// }
	// function interval() {
	// 	percentTime += 1 / (time + 0.1);
	// 	$bar.css({
	// 		width: percentTime + '%'
	// 	});

	// 	if (percentTime >= 100) {
	// 		$slick.slick('slickNext');
	// 		startProgressbar();
	// 	}
	// }

	// function resetProgressbar() {
	// 	$bar.css({
	// 		width: 0 + '%'
	// 	});
	// 	clearTimeout(tick);
	// }
	// startProgressbar();
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

$('.best-offers-slider').slick({
	slidesToShow: 4,
	prevArrow: '<button type="button" class="slick-prev"><svg class="svg-icon"><use xlink:href="img/sprite.svg#prev2"></use></svg></button>',
	nextArrow: '<button type="button" class="slick-next"><svg class="svg-icon"><use xlink:href="img/sprite.svg#next2"></use></svg></button>',
	swipe: false,
});
// $('.best-offers-slider2').slick({
// 	slidesToShow: 4,
// 	// appendArrows: '.best-offers-slider-nav2',
// 	prevArrow: '<button type="button" class="slick-prev"><svg class="svg-icon"><use xlink:href="img/sprite.svg#prev2"></use></svg></button>',
// 	nextArrow: '<button type="button" class="slick-next"><svg class="svg-icon"><use xlink:href="img/sprite.svg#next2"></use></svg></button>',
// 	swipe: false,
// });
// $('.best-offers-slider3').slick({
// 	slidesToShow: 4,
// 	// appendArrows: '.best-offers-slider-nav3',
// 	prevArrow: '<button type="button" class="slick-prev"><svg class="svg-icon"><use xlink:href="img/sprite.svg#prev2"></use></svg></button>',
// 	nextArrow: '<button type="button" class="slick-next"><svg class="svg-icon"><use xlink:href="img/sprite.svg#next2"></use></svg></button>',
// 	swipe: false,
// });

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

new WOW().init();