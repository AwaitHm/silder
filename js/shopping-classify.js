(function($) {
	var defaults = {
		targetContent: ".shopping-handbag-qiehuan",
		targetchildren: ".shopping-handbag-show-img",
		leftbtn: ".qiehuan-left",
		rightbtn: ".qiehuan-right",
		animationone: "animation",
		animationtwo: "animation1"
		
	}
	$.fn.silder = function(options) {
		options = $.extend(defaults, options);
		var length = $(options.targetContent).children().length - 1;
		var page_length = $(options.targetContent).children().eq(i);
		var i = 0;
		
		/*左右*/
	 $(options.rightbtn).off("click").on("click", function() {
		i = (i >= length) ? 0 : parseInt(i + 1);
		console.log(i);
		$(options.targetchildren).addClass(options.animationtwo).removeClass(options.animationone).eq(i).addClass(options.animationone).removeClass(options.animationtwo);
	});
	$(options.leftbtn).off("click").on("click", function() {
		i = (i <= 0) ? length : ~~Math.abs(i - 1);
		console.log(i);
		$(options.targetchildren).addClass(options.animationtwo).removeClass(options.animationone).eq(i).addClass(options.animationone).removeClass(options.animationtwo);
	});

		/*自动轮播*/	
	
	var loop_page = function() {
	if (i >= length) {
		i = 0;
	} else {
		i = i + 1;
	}
	console.log(i);
	var page_length = $(options.targetContent).children().eq(i);
	page_length.addClass(options.animationone).removeClass(options.animationtwo);
	page_length.siblings().addClass(options.animationtwo).removeClass(options.animationone);
    }
	setInterval(loop_page,5000);
	    };
})(jQuery);