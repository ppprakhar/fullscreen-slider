(function($){
	

	function img_active(){

		var index = $('#slides div.active').index()+1;

		if( $('#slides div:last').hasClass('active') )
			{
				$('#slides div:first').siblings().removeClass('active bars-down');
				$('#slides div:first').addClass('active bars-down');
				$('.imgs_point div:first').siblings().removeClass('active');
				$('.imgs_point div:first').addClass('active');
				$('.copy_section img:first').siblings().removeClass('active');
				$('.copy_section img:first').addClass('active');
			}

			else{
				index += 1;
				$('#slides div:nth-child('+index+')').siblings().removeClass('active bars-down');
				$('.imgs_point div:nth-child('+index+')').siblings().removeClass('active');
				$('.copy_section img:nth-child('+index+')').siblings().removeClass('active');
					
				$('#slides div:nth-child('+index+')').addClass('active bars-down');
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
	

	$('body').append('<div id="image"> </div>'); 

	function img_active1(){		
		if( $('#slides').hasClass('bars-down')){	

			var effect = $('#slides div.active img').attr("src"),
				part = 10,
				partWidth = $('#image').width() / part,
				partHeight = $('#slides div.active img').height( $(window).height()-100 );

			$('#image').empty(); 

			for(i=0;i<part;i++)
			{
				$('#image').append('<div id="image'+i+'"> <img src="'+effect+'" alt="image"/> </div>');
			}

			$('#image > div img').width($('#slides div.active img').width());
			$('#image > div img').height(partHeight);
			$('#image > div').width(partWidth);

			$('#image div').each(function(){
				var index = $(this).index();
				$(this).children().css({'margin-left': -100*index+'%'});			
			});
			
			
				i = 0;
				$('#image div').each(function(index, el) {
					$('#image div#image'+i+' img').delay(100*i).queue(function(){
						$(this).css({'transform':'translateY(100%)'});
					});
					i++;
				});				
				
			
			img_active();
		}

	}

	setInterval(img_active1,3000);


	

})(jQuery);