$(function(){
	/* Mobile */
	isMobile = {  
		Android: function() {  
			return navigator.userAgent.match(/Android/i) ? true : false;  
		},  
		BlackBerry: function() {  
			return navigator.userAgent.match(/BlackBerry/i) ? true : false;  
		},  
		iOS: function() {  
			return navigator.userAgent.match(/iPhone|iPad|iPod/i) ? true : false;  
		},  
		Windows: function() {  
			return navigator.userAgent.match(/IEMobile/i) ? true : false;  
		},  
		any: function() {  
			return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Windows());  
		},
		iPad :function(){
			return navigator.userAgent.match(/iPad/i)? true : false;
		},
		Status: function() {  
			return checkLayout();  
		}
	};
	
	if(!isMobile.any()){
		var pcshow = '\
			<section id="pcshow">\
				<section class="box">\
					<img src="imgs/wxCode.png" alt="">\
					<p>手机扫码浏览</p>\
				</section>\
			</section>\
		';
		$('#wrap').remove();
		$('body').append(pcshow);
		return false;
	};
	
	$('.btnMenu').click(function(e){
		e.preventDefault();
		$('#wrap, header').animate({left:-500},500);
		$('#navi').animate({left:140},500);
		$(this).hide();
		$('.btnClose').show();
		$(window).on('touchmove mousemove', function(e){
			e.preventDefault();
			e.isDefaultPrevented();
		});
	});
	$('.btnClose').click(function(e){
		e.preventDefault();
		$('#wrap, header').animate({left:0},500);
		$('#navi').animate({left:640},500);
		$(this).hide();
		$('.btnMenu').show();
		$(window).unbind('touchmove mousemove');
	});
	
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
		
		setTimeout(function(){
			$('#popShare').fadeIn();
		}, 2000);
		return false;
	});
	
	$('#popShare').click(function(){
		$(this).fadeOut();
	})

	$('footer').on('click', 'strong a', function(e){
		e.preventDefault();
		$('#wrap').hide();
		$('#rule').show();
		$(window).scrollTop(0);
	});
	
	$('.more').on('click','button',function(){
		
		$(this).hasClass('open')?(
			$(this).text('展开'),
			$(this).removeClass('open'),
			$(this).parent().siblings('.cont').children('p').hide()
		):(
			$(this).text('收起'),
			$(this).addClass('open'),
			$(this).parent().siblings('.cont').children('p').show()
		)
	
	});
	
	/* 2015-11-08 */
	$('.backTop').click(function(){
		$('body').scrollTop(0);
	});
});

$(window).load(function(){
	$(window).trigger('resize');
	
	if($('.hpFocus.flexslider').size() > 0){
		$('.hpFocus').flexslider({
			animation: "slide",
			directionNav : false
		});
	}
}).bind('orientationchange', function(e){
	if (window.orientation == 0 || window.orientation == 180) {
		$('.landscape').hide();
	}else if (window.orientation == 90 || window.orientation == -90) {
		$('.landscape').show();
	}
});
