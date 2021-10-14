(() => {

	$(function(){
		//a태그 새로고침 방지 초기화
		$(document).on('click', 'a[href="#"]', function(e){
			e.preventDefault();
		});

		// 모바일 반응형 메뉴 크기
		function mobileShow(){
			var sw = $(window).width();
			if(sw < 768){
				$('#header').addClass('mobile_menu');
			}else{
				$('#header').removeClass('mobile_menu');
			}
		}
		mobileShow();

		// 모바일 메뉴 슬라이드
		new Swiper('.swiper-container', {
			autoplay : true, 
			slidesPerView : 3, 
			spaceBetween : 6, 
			loop : true, 
			loopAdditionalSlides : 1, 
			speed:3000,
			navigation: {  
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		}, 
			 });

		////////////////////////// main page 시작

			 // 메인 슬라이드 -1
			var activeClass = 'active_slide';
			var mainSlide = $('.main_slide').bxSlider({
			speed: 500,       
			moveSlides: 1,     
			slideWidth:1920,     
			slideHeight:920, 
			minSlides:1,     
			maxSlides: 1,    
			nextSelector:'.slider-next',
			prevSelector:'.slider-prev',
			pager:true,
			pagerCustom: '#bx-pager',
			auto: true,       
			autoHover: true,   
			controls: false,   
			responsive:true,
			onSliderLoad:function(){// 텍스트 애니메이션-1
				$('.main_slide>li').eq(1).addClass(activeClass)
			},
			onSlideAfter:function($slideElement, oldIndex, newIndex){//텍스트 애니메이션-2(각 섹션별 텍스트 인수들)
				$('.active_slide').removeClass(activeClass);
				$('.main_slide>li').eq(newIndex + 1).addClass(activeClass)
			}
		});   
				// 슬라이드 버튼 클릭시 슬라이드 발생
				$('.prev').on("click",function(){
					mainSlide.goToPrevSlide();
					return false;
				});

				$('.next').on("click",function(){
					mainSlide.goToNextSlide();
					return false;
				});

		// 메인 슬라이드 페이지 다운 기능 버튼
		 $('.main_con').find('.btn_next a').click(function(){
			var SW	=	$(window).width();
			var _y = $(this).parents('section').next().offset().top	
			if(SW < 768)_y = _y-44;
			$('html,body').stop().animate({scrollTop:_y},300)
		});


		// 메인 슬라이드 -2 
		var slideIn_sec = 0;
		showSlidesSec();

		function showSlidesSec(){
			var i;
			var slides = document.getElementsByClassName("main_image_2");

				for(i=0; i<slides.length; i++){
					slides[i].style.display ="none";
				}
				slideIn_sec++;
				if(slideIn_sec>slides.length){
					slideIn_sec =1;	
				}
				slides[slideIn_sec-1].style.display = "block";
				setTimeout(showSlidesSec,5000);	    
			}	

			// 메인 슬라이드-2 글자 클릭 시 해당 슬라이드로 이동
			var i = $(".off").index();//off 클래스 각 요소 변수
			
			$(".off").click(function() {
			i = $(this).index();
			showSlide();
			});

			function showSlide() {
			$(".off").removeClass("on");
			$(".off").eq(i).addClass("on");
			$(".main_image_2").stop(true, true).fadeOut();
			$(".main_image_2").eq(i).stop(true, true).fadeIn();
			}
	

			// 메인 슬라이드-3
			$('.bxslider').bxSlider({
				mode: 'horizontal',
				speed: 500,       
				pager: false,     
				moveSlides: 1,    
				slideWidth:true,    
				slideHeight:true,  
				minSlides:1,     
				maxSlides: 1,    
				slideMargin: 5,    
				auto: true,      
				autoHover: true,   
				controls: false,   
				responsive: true
			});
			/////////////////////// main page 끝
	});	

		////////////////////////////// info page 시작

	   // info 페이지 scroll시 나타나는 애니메이션
	   $(window).scroll(function(index){
		//info 영역 나타내기
		$('.info_image3').delay(index*1000).animate({'opacity':'1'},1000);
		$('.info_image4').delay(index*8000).animate({'opacity':'1'},4000);
		   
		 //alpha 이미지 parallax 애니메이션
		 var scroll = $(this).scrollTop();
		 var values1 = -scroll/1;// alpha-scroll-1
		 var values2 = -scroll/3;// alpha-scroll-2
	 
		 $('.alpha_scroll-1').css({'transform':'translate3d(0,'+values1+'px,0)'})
		 $('.alpha_scroll-2').css({'transform':'translate3d(0,'+values2+'px,0)'})
		});
	  
		// info 페이지 load 시 나타나는 애니메이션
				$(window).on('load',function(){
				   //info_sub_txt1 이미지 나타내기
				   $('.info_sub_txt1').each(function(i){
					var imgTxt = $(this);
					setTimeout(function(){
					  imgTxt.animate({
						'opacity':'1',
						'padding-top':'0px'
			  },i*1000);
				  });
				});
		 
				// rotate 이미지 TweenMax 애니메이션
				var agr = 0;// 회전 각도 초기값
				function loopRotation(){
				  var _t = $('.rotate');	
				TweenMax.to(_t,1.2,{rotation:agr,ease:Quad.easeOut,onComplete:function(){setTimeout(loopRotation,2000)}});
				agr+=30;//초기값에서 30도씩 추가.
			}
				loopRotation();


				// info 이미지 갤러리 구현
				var gallery = $('#isotope_list');
				gallery.isotope({
				  itemSelector : '.gallery_obj',
				  masonry: {
					columnWidth: 150
				  }
				})
				// isotope filter 선정
				function $isotope_filter(selector){
				  return gallery.isotope({filter:selector});
				}

				//gallery_select li 버튼의 변수 설정
				var tab_all = $('.tab_all');
				var item_2 = $('.item-2');
				var item_3 = $('.item-3');
				var item_4 = $('.item-4');
				var item_5 = $('.item-5');
				var item_6 = $('.item-6');
			
				tab_all.on('click',function(){
				  $isotope_filter('.gallery_obj')
				});
				item_2.on('click',function(){$isotope_filter('.item-2')})
				item_3.on('click',function(){$isotope_filter('.item-3')})
				item_4.on('click',function(){$isotope_filter('.item-4')})
				item_5.on('click',function(){$isotope_filter('.item-5')})
				item_6.on('click',function(){$isotope_filter('.item-6')})
		   
			////////////////////////////////// info page 끝
		});

			////////////////////////////////////// menu page 시작

			// menu tab 스크롤시 섹션 구간 별로 active 클래스 발생
			$(function(){
				var menuSec1 = $('#section1').position().top - 100;
				var menuSec2 = $('#section2').position().top - 500;
				var menuSec3 = $("#section3").position().top - 500;
				var menuSec4 = $('#section4').position().top - 700;
				
				$('.tab-act').removeClass('active');
				$(window).scroll(function() {
				var scroll = $(window).scrollTop();
				if (scroll < menuSec2) 
				{
				  $("#home").addClass("active");
				  $("#about").removeClass("active");
				} 
				else if (menuSec2 <= scroll && scroll< menuSec3) 
				{
				  $("#home").removeClass("active");
				  $("#about").addClass("active");
				  $("#skill").removeClass("active");
				} 
				else if (menuSec3 <= scroll && scroll < menuSec4) 
				{
				  $("#about").removeClass("active");
				  $("#skill").addClass("active");
				  $("#work").removeClass("active");
				}
				else if (menuSec4 <= scroll)
				{
				  $("#skill").removeClass("active");
				  $("#work").addClass("active");
				}else if($('.tab-act')===scroll){
				  $('.tab-act').offset().top;
				}
			  });

			  // menu 이미지 스크롤시 하나씩 fade up 하기
			 const saDefaultMargin = 300;
			 let saTriggerMargin = 0;
			 let saTriggerHeight = 0;
			 const saElementList = document.querySelectorAll('.sa');

			const saFunc = function() {
			for (const element of saElementList) {
				if (!element.classList.contains('show')) {
				if (element.dataset.saMargin) {
					saTriggerMargin = parseInt(element.dataset.saMargin);//html data delay 연결
				} else {
					saTriggerMargin = saDefaultMargin;
				}

				if (element.dataset.saTrigger) {
					saTriggerHeight = document.querySelector(element.dataset.saTrigger).getBoundingClientRect().top + saTriggerMargin;
				} else {
					saTriggerHeight = element.getBoundingClientRect().top + saTriggerMargin;
				}

				if (window.innerHeight > saTriggerHeight) {
					let delay = (element.dataset.saDelay) ? element.dataset.saDelay : 0;
					setTimeout(function() {
					element.classList.add('show');
					}, delay);
				}
    		}
  		}
	}
	window.addEventListener('load', saFunc);
	window.addEventListener('scroll', saFunc);
		});
	// menu page 끝
	
	})();