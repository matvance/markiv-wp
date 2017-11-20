$(function () {
	$(".team-gallery .overlay").hide();

	$(".team-gallery .team-member")
	.hover(function () {
		$(this).children(".overlay").stop(true, true).fadeIn(200);
	})
	.mouseleave(function () {
		$(this).children(".overlay").stop(true, true).fadeOut(200);
	});
});