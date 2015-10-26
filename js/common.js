$(function(){
	
	if($('.hpMenu').size() > 0){
		$('.hpMenu').each(function(index, element) {
			var h = ($(window).height() - $(this).position().top) / 5 - 1;
			$('li a', this).each(function(index, element) {
				$(this).height(h)
				$(this).css('line-height', h + 'px');
			});
		});
	};
	
	$('.btnVote').click(function(){
		
		$('.btnVote').each(function(index, element) {
			$(this).parents('.tit').hide();
			var $res = $(this).parents('.tit').siblings('.result');
				result = $res.find('em').text();
			$res.show().find('span').animate({width: result}, 500);	
		});
		
	});
	
	$('#repForm').submit(function(){
		$('.back',this).show();
		return false;
	});

});