$(document).ready(function() {
	$(".overlay-menu").hide();

	$('#fullpage').fullpage({
		hybrid: true,	
		fitToSectionDelay: 100,
		scrollingSpeed: 400,
		afterLoad: function (anchorLink, index) {
			if (index == 4) {
				$.fn.fullpage.setFitToSection(false);
			} else if (index == 3) {
				$.fn.fullpage.setFitToSection(true);
			}
		}
	});
});

$(".navbar-button").click(function () {
	$(".overlay-button").css("left", $(".navbar-button").position().left);
	$(".overlay-menu").fadeIn(300);
});
$(".overlay-button").click(function () {
	$(".overlay-menu").fadeOut(300);
})
$(window).resize(function () {
	$(".overlay-button").css("left", $(".navbar-button").position().left);
})