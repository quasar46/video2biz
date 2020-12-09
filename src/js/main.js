$(document).ready(function () {
	$('.team__list').slick({
		slidesToShow: 4,
		responsive: [
			{
				breakpoint: 769,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 1,
					infinite: true,
					dots: true
				}
			},
			{
				breakpoint: 600,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1
				}
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1
				}
			}
		]
	})

	$('.clients__list').slick({
		slidesToShow: 4,
		responsive: [
			{
				breakpoint: 769,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 1,
					infinite: true,
					dots: true
				}
			},
			{
				breakpoint: 600,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1
				}
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1
				}
			}
		]
	})

	$('.reviews__list').slick({
		slidesToShow: 1,
	})

	$('.header__burger').on('click', function () {
		$('.header__mobile-menu').toggleClass('active');
		$(this).toggleClass('active');
	})

	// anchor
	var $page = $('html, body');
	$('a[href*="#"]').click(function () {
		$page.animate({
			scrollTop: $($.attr(this, 'href')).offset().top
		}, 400);
		return false;
	});

	$(window).scroll(function () {
		$('.header__burger').removeClass('active');
		$('.header__mobile-menu').removeClass('active');
	})
})