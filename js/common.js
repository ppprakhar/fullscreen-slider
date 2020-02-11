(function($) {

	var imgs = $('#slides').find('img').clone(),
		imgsLen = imgs.length;

	$('.slider').append('<div class="imgs_point"></div>');	

	for(var i=0;i<imgsLen;i++){
		imgs_add();
	}	

	function imgs_add() {
		$('.imgs_point').append('<div id="point'+i+'"></div>');
		$('.copy_section').append(imgs[i]);
	}

	$('#slides div:first').addClass('active');
	$('.imgs_point div:first').addClass('active');
	$('.copy_section img:first').addClass('active');

	var imgWidth = $('#slides div img').width( $(window).width() ),
		imgHeight = $('#slides div img').height( $(window).height()-100 );

current = 1;
	$('#image_container .fa.fa-angle-up').click(function() {	
		var index = ($('.copy_section img:last').index()+1) - 4;
		
		if( $('.copy_section img').css("top") === (-102*index+'px') ){
			current = 1;
			return false;
		}

		else{
			$('.copy_section img').css({'top' : (-102*current+'px') });
				current++;
			}	
		
	});	

	$('#image_container .fa.fa-angle-down').click(function() {
		var index = ($('.copy_section img:last').index()+1) - 4;

		if( $('.copy_section img').css('top') === '0px'){
			current = 1;
			return false;
		}

		else{
			$('.copy_section img').css({'top' : (100*current+'px') });
			current--;
		}
	});
	
	$('.copy_section img').on('click', function(){
		var index = $(this).index()+1;
		$(this).siblings().removeClass('active');
		$(this).addClass('active');

		$('#slides div:nth-child('+index+')').siblings().removeClass('active');
		$('#slides div:nth-child('+index+')').addClass('active');

		$('.imgs_point div:nth-child('+index+')').siblings().removeClass('active');
		$('.imgs_point div:nth-child('+index+')').addClass('active');

	});

	$('.imgs_point div').on('click', function(){
		var index = $(this).index()+1;
		$(this).siblings().removeClass('active');
		$(this).addClass('active');

		$('#slides div:nth-child('+index+')').siblings().removeClass('active');
		$('#slides div:nth-child('+index+')').addClass('active');

		$('.copy_section img:nth-child('+index+')').siblings().removeClass('active');
		$('.copy_section img:nth-child('+index+')').addClass('active');

		if($('#slides div:gt(3)').hasClass('active') )
		{	
			var posTop = index - 4; 			

			$('.copy_section img').animate({top : -102*posTop },1);	
			
		}

		else{
				$('.copy_section img').animate({top : 0},1);				
			}
	});
	


})(jQuery);