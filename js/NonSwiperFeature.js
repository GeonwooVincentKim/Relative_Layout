$(document).ready(function () {
	
	var s = 0;
	var delay = 3500;
	var length = $(".demnodey-wrapper div").length;
    var bullet = $(".swiper-paging a")
	// var bullet = $(".demnodey-pagination span");
	var pause = false;
	
	var loop = setInterval(function () {
		if (!pause) {
			s = s + 1;
			s = s == length ? 0 : s;
			var slide = 500 * s;
			
			pagination(bullet[s])
			
			$(".demnodey-wrapper").css("transform", "translateX(-"+slide+"px)");
		}
	}, delay);
	
	$(".swiper-paging a").on("click", function () {
		
		s = $(this).attr("idx") - 1;
		s = s == length ? 0 : s;
		var slide = s * 500;
		
		pause = true;
		
		pagination(this);
		
		$(".demnodey-wrapper").css("transform", "translateX(-"+slide+"px)");
		
		setTimeout(function () {
			pause = false;
		}, delay);
	})
	
	// pagination
	function pagination (target) {
		$(bullet).each(function (i, d) {
			if ($(d).hasClass("selected")) {
				$(d).removeClass("selected");
			}
		})
		
		$(target).addClass("selected");
	}
	
})