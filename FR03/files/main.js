(function($) {
	$(document).ready(function() {
		var isMobile = /Android|webOS|iPhone|iPad|iPod|pocket|psp|kindle|avantgo|blazer|midori|Tablet|Palm|maemo|plucker|phone|BlackBerry|symbian|IEMobile|mobile|ZuneWP7|Windows Phone|Opera Mini/i.test(navigator.userAgent);
		var isIOS = /iPhone|iPad|iPod/i.test(navigator.userAgent);
		var isAndroid = /Android/i.test(navigator.userAgent);

		if(isMobile) {
			$('body').addClass('isMobile');
		}
		else {
			$('body').addClass('isDesk');
		}
	
		if(isIOS) {
			$('body').addClass('iOs');
		}
		else if(isAndroid) {
			$('body').addClass('isAndroid');
		}

		$('.step-body').on('click', 'img', function() {
			$(this).addClass('animation');
			var parent = $(this).parents('.step-container');
			parent.delay(600).fadeOut(200, function() {
				parent.next('.step-container').fadeIn(100);
			});
		});
		$('.step-body').on('click', 'button.next', function() {
			var sibling_img = $(this).parent().siblings();
			sibling_img.addClass('animation');
			var parent = $(this).parents('.step-container');
			parent.delay(600).fadeOut(200, function() {
				parent.next('.step-container').fadeIn(100);
			});
		});

		function changeTitle(data) {
			if ($('#titleES').length && data.city.es) {
				$('title').text('Buscando sexo esta noche en ' + data.city.es);
			}
			else if ($('#titleEN').length && data.city.en) {
				$('title').text('Meet local girls in ' + data.city.en + '?');
			}
			else if ($('#titleRU').length && data.city.ru) {
				$('title').text('Встретиться с местными девушками в г. ' + data.city.ru + '?');
			}
			else if ($('#titleJA').length && data.city.ja) {
				$('title').text(data.city.ja + 'にいる女の子に会う？');
			}

			if ($('.geo-text').length && data.city.en) {
				$('.geo-text').text(data.city.en).addClass('detected');
			}
			else if ($('.geo-text').length && data.city.en === undefined && data.cnames.en !== undefined) {
				$('.geo-text').text(data.cnames.en).addClass('detected');
			}
		}
		

	});
})(jQuery);