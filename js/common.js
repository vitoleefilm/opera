$(function(){
	
	$('.btnVote').click(function(){
		console.log($(this).val());
		
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