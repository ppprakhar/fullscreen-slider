(function($){	

	function img_active(){
		var index = $('#slides div.active').index()+1,
			slidesNthChild = $('#slides div:nth-child('+index+')'),
			imgs_pointNthChild = $('.imgs_point div:nth-child('+index+')'),
			copy_sectionNthChild = $('.copy_section img:nth-child('+index+')');

		setTimeout(function(){
			if( $('#slides').hasClass('explode') ) {

				$('#slides div.active img').hide('explode', {pieces:32}, 1500);

				if( $('#slides div:last').hasClass('active') )
				{
					$('#slides div:first').siblings().removeClass('active');
					$('#slides div:first').addClass('active');
					$('.imgs_point div:first').siblings().removeClass('active');
					$('.imgs_point div:first').addClass('active');
					$('.copy_section img:first').siblings().removeClass('active');
					$('.copy_section img:first').addClass('active');
				}

				else{
					index += 1;
					$('#slides div:nth-child('+index+')').siblings().removeClass('active');
					$('.imgs_point div:nth-child('+index+')').siblings().removeClass('active');
					$('.copy_section img:nth-child('+index+')').siblings().removeClass('active');
						
					$('#slides div:nth-child('+index+')').addClass('active');
					$('.imgs_point div:nth-child('+index+')').addClass('active');
					$('.copy_section img:nth-child('+index+')').addClass('active');
				}

				if($('#slides div:gt(3)').hasClass('active') )
				{	
					var posTop = index - 4; 
					/*$('.copy_section img:nth-child('+index+')').siblings().removeClass('active');
					$('.copy_section img:nth-child('+index+')').addClass('active');*/

					$('.copy_section img').animate({top : -102*posTop },1);			
				}

				else{
						$('.copy_section img').animate({top : 0},1);				
					}
			}

		});	

	}


setInterval(img_active,3000);

	
	
})(jQuery);