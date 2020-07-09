$(document).ready(function() {

	//прилипающие меню
var $menu = $(".header");
$(window).scroll(function(){
	if ( $(this).scrollTop() > 0 && $menu.hasClass("default") ){
		$menu.removeClass("default").addClass("fixed");
    $(".wrapper").addClass("wrapper_fixed");
	} else if($(this).scrollTop() <= 0 && $menu.hasClass("fixed")) {
		$menu.removeClass("fixed").addClass("default");
     $(".wrapper").removeClass("wrapper_fixed");
	}
	
});

if ( $(this).scrollTop() > 200 && $menu.hasClass("default") ){
		$menu.removeClass("default").addClass("fixed");
     $(".wrapper").addClass("wrapper_fixed");
	} else if($(this).scrollTop() <= 200 && $menu.hasClass("fixed")) {
		$menu.removeClass("fixed").addClass("default");
     $(".wrapper").removeClass("wrapper_fixed");
	}


 AOS.init({
        easing: 'ease-in-out-sine'
      });



var $range = $(".range-catalog__input"),
	$from = $(".control-input__from"),
	$to = $(".control-input__to"),
        min = 0,
        max = 50730;
    $range.ionRangeSlider({
        type: "double",
        min: min,
        max: max,
        prettify_enabled: true,
        onChange: function(data) {
            updateValues()
        }
    });
 
    function number_format(num, format) {
        num = (num + "").replace(/(\s)+/g, "");
        return format ? num.replace(/(\d{1,3})(?=(?:\d{3})+$)/g, "$1 ") : num
    }
    $range = $range.data("ionRangeSlider");
    var updateValues = function() {
        var res = $range.result;
        $from.val(number_format(res.from, true));
        $to.val(number_format(res.to,true))
    };
    $from.on("focus", function() {
        this.value = number_format(this.value);
        this.focus();
        this.selectionStart = this.value.length
    }).on("input", function() {
        $range.update({
            from: this.value
        })
    }).on("blur", updateValues);
    $to.on("focus", function() {
        this.value = number_format(this.value);
        this.focus();
        this.selectionStart = this.value.length
    }).on("input", function() {
        $range.update({
            to: this.value
        })
    }).on("blur", updateValues)

	//кнопка sandwich
	$(".btn_nav").click(function() {
		$(".sandwich").toggleClass("active");
		if ($(".menu-mobile").is(":hidden")) {
			$(".menu-mobile").slideDown(200);
		} else {
			$(".menu-mobile").slideUp(200);
		}
		
	});

	$(".menu-mobile a").click(function() {
			$(".menu-mobile").slideUp(200);
			$(".sandwich").removeClass("active");
		});

	$(".btn-catalog").click(function(e) {
		e.preventDefault();
			if ($(".menu-catalog").is(":hidden")) {
			$(".menu-catalog").slideDown(200);
		} else {
			$(".menu-catalog").slideUp(200);
		}
		});

	$(document).mouseup(function (e){ 
		var div = $(".menu-catalog"); 
		if (!div.is(e.target) 
		    && div.has(e.target).length === 0) { 
			div.slideUp(200); 
		}
	});

	$(".btn-main_filter").click(function(e) {
		e.preventDefault();
			$(".fliter-block").slideToggle(200);
			$(this).toggleClass("active");
              if ($(this).hasClass("active")) {
           $(this).find("span").html("Свернуть фильтр");
        } else {
         $(this).find("span").html("Открыть фильтр ");
        }
		});

	$(".link-show-text").click(function(e) {
		e.preventDefault();
			$(this).toggleClass("active");
             $(".hidden-mobile-text").slideToggle(200);
              if ($(this).hasClass("active")) {
           $(this).html("Свернуть");
        } else {
         $(this).html("Читать далее");
        }
		});


	/*высота блока по экрану*/
function heightDetect() {
    $('.menu-mobile').css("height", $(window).height() -$(".header").height() + 40);
  };
    heightDetect();
    $(window).resize(function() {
      heightDetect();
    });

    /*высота блока по экрану*/
function heightDetect2() {
    $('.menu-catalog').css("height", $(window).height() -$(".header").height() + 40);
  };
    heightDetect2();
    $(window).resize(function() {
      heightDetect2();
    });


    $(".question__name").click(function(e) {
		e.preventDefault();
		$(".question").removeClass("active");

		$(".question__answer").slideUp(200);
		if ($(this).siblings(".question__answer").is(":hidden")) {
			$(this).parent().addClass("active");
			$(this).siblings(".question__answer").slideDown(200);
		
		} else {
			$(this).parent().removeClass("active");
		$(this).siblings(".question__answer").slideUp(200);
		
		}

		});
	//слайдер

	$('.slider-card').slick({
		arrows: false,
		dots: true,
		infinite: true,
		slidesToShow: 1,
    touchThreshold: 1000,
		slidesToScroll: 1
	});

  $('.slider-products').slick({
    arrows: false,
    dots: true,
    infinite: true,
  variableWidth: true,
  touchThreshold: 1000,
    slidesToShow: 1,
    slidesToScroll: 1
  });

	$(".input-phone").mask("+7(999) 999-99-99");

	$('.tabs li a').click(function(event) {
		event.preventDefault();
	});
	$('.tabs li').click(function(event) {
		$(this).parent().find("li").removeClass('active');
		$(this).addClass('active');
		$(this).parent().parent().parent().find(".tab-content").hide();
		var selectTab = $(this).find('a').attr("href");
		$(selectTab).fadeIn();
	});

    jQuery('.quantity').each(function() {
      var spinner = jQuery(this),
        input = spinner.find('input[type="number"]'),
        btnUp = spinner.find('.quantity-up'),
        btnDown = spinner.find('.quantity-down'),
        min = input.attr('min'),
        max = input.attr('max');

      btnUp.click(function() {
        var oldValue = parseFloat(input.val());
        if (oldValue >= max) {
          var newVal = oldValue;
        } else {
          var newVal = oldValue + 1;
        }
        spinner.find("input").val(newVal);
        spinner.find("input").trigger("change");
      });

      btnDown.click(function() {
        var oldValue = parseFloat(input.val());
        if (oldValue <= min) {
          var newVal = oldValue;
        } else {
          var newVal = oldValue - 1;
        }
        spinner.find("input").val(newVal);
        spinner.find("input").trigger("change");
      });

    });



	//Попап менеджер FancyBox
	//Документация: http://fancybox.net/howto
	//<a class="fancybox"><img src="image.jpg" /></a>
	//<a class="fancybox" data-fancybox-group="group"><img src="image.jpg" /></a>
	$(".fancybox").fancybox({
    helpers:  {
      overlay : {
        locked : false
      }
    }
  });


	//Кнопка "Наверх"
	//Документация:
	//http://api.jquery.com/scrolltop/
	//http://api.jquery.com/animate/
	$(".btn_top").click(function () {
		$("body, html").animate({
			scrollTop: 0
		}, 800);
		return false;
	});


objectFitImages()

});


$(window).on('load', function(){

	$('.scroll-block').jScrollPane({
         autoReinitialise: true
    });
});

/*polifyl*/
/*! npm.im/object-fit-images 3.2.4 */
var objectFitImages=function(){"use strict";function t(t,e){return"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='"+t+"' height='"+e+"'%3E%3C/svg%3E"}function e(t){if(t.srcset&&!p&&window.picturefill){var e=window.picturefill._;t[e.ns]&&t[e.ns].evaled||e.fillImg(t,{reselect:!0}),t[e.ns].curSrc||(t[e.ns].supported=!1,e.fillImg(t,{reselect:!0})),t.currentSrc=t[e.ns].curSrc||t.src}}function i(t){for(var e,i=getComputedStyle(t).fontFamily,r={};null!==(e=u.exec(i));)r[e[1]]=e[2];return r}function r(e,i,r){var n=t(i||1,r||0);b.call(e,"src")!==n&&h.call(e,"src",n)}function n(t,e){t.naturalWidth?e(t):setTimeout(n,100,t,e)}function c(t){var c=i(t),o=t[l];if(c["object-fit"]=c["object-fit"]||"fill",!o.img){if("fill"===c["object-fit"])return;if(!o.skipTest&&f&&!c["object-position"])return}if(!o.img){o.img=new Image(t.width,t.height),o.img.srcset=b.call(t,"data-ofi-srcset")||t.srcset,o.img.src=b.call(t,"data-ofi-src")||t.src,h.call(t,"data-ofi-src",t.src),t.srcset&&h.call(t,"data-ofi-srcset",t.srcset),r(t,t.naturalWidth||t.width,t.naturalHeight||t.height),t.srcset&&(t.srcset="");try{s(t)}catch(t){window.console&&console.warn("https://bit.ly/ofi-old-browser")}}e(o.img),t.style.backgroundImage='url("'+(o.img.currentSrc||o.img.src).replace(/"/g,'\\"')+'")',t.style.backgroundPosition=c["object-position"]||"center",t.style.backgroundRepeat="no-repeat",t.style.backgroundOrigin="content-box",/scale-down/.test(c["object-fit"])?n(o.img,function(){o.img.naturalWidth>t.width||o.img.naturalHeight>t.height?t.style.backgroundSize="contain":t.style.backgroundSize="auto"}):t.style.backgroundSize=c["object-fit"].replace("none","auto").replace("fill","100% 100%"),n(o.img,function(e){r(t,e.naturalWidth,e.naturalHeight)})}function s(t){var e={get:function(e){return t[l].img[e?e:"src"]},set:function(e,i){return t[l].img[i?i:"src"]=e,h.call(t,"data-ofi-"+i,e),c(t),e}};Object.defineProperty(t,"src",e),Object.defineProperty(t,"currentSrc",{get:function(){return e.get("currentSrc")}}),Object.defineProperty(t,"srcset",{get:function(){return e.get("srcset")},set:function(t){return e.set(t,"srcset")}})}function o(){function t(t,e){return t[l]&&t[l].img&&("src"===e||"srcset"===e)?t[l].img:t}d||(HTMLImageElement.prototype.getAttribute=function(e){return b.call(t(this,e),e)},HTMLImageElement.prototype.setAttribute=function(e,i){return h.call(t(this,e),e,String(i))})}function a(t,e){var i=!y&&!t;if(e=e||{},t=t||"img",d&&!e.skipTest||!m)return!1;"img"===t?t=document.getElementsByTagName("img"):"string"==typeof t?t=document.querySelectorAll(t):"length"in t||(t=[t]);for(var r=0;r<t.length;r++)t[r][l]=t[r][l]||{skipTest:e.skipTest},c(t[r]);i&&(document.body.addEventListener("load",function(t){"IMG"===t.target.tagName&&a(t.target,{skipTest:e.skipTest})},!0),y=!0,t="img"),e.watchMQ&&window.addEventListener("resize",a.bind(null,t,{skipTest:e.skipTest}))}var l="fregante:object-fit-images",u=/(object-fit|object-position)\s*:\s*([-.\w\s%]+)/g,g="undefined"==typeof Image?{style:{"object-position":1}}:new Image,f="object-fit"in g.style,d="object-position"in g.style,m="background-size"in g.style,p="string"==typeof g.currentSrc,b=g.getAttribute,h=g.setAttribute,y=!1;return a.supportsObjectFit=f,a.supportsObjectPosition=d,o(),a}();

