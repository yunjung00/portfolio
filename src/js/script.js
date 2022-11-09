

$(document).ready(function(){
	$('.gnb_menu').on('.gnb_menu_list', 'mouseenter', function(){
		$(this).find('.gnb_dropMenu_wrap').stop().slideDown(500);
	});
	$('.gnb_menu').on('.gnb_menu_list', 'focusin', function(){
		$(this).find('.gnb_dropMenu_wrap').stop().slideDown(500);
	});
	$('.gnb_menu').on('.gnb_menu_list', 'mouseleave', function(){
		$(this).find('.gnb_dropMenu_wrap').stop().slideUp(250);
	});
	$('.gnb_menu').on('.gnb_menu_list', 'focusout', function(){
		$(this).find('.gnb_dropMenu_wrap').stop().slideUp(250);
	});
	
	$('.btn_sitemap').click(function() {
		$(this).attr("aria-expanded", true);
		$('header').toggleClass('active');
    $('body').toggleClass('sitemap_open');
	});
	
	
	var didScroll;
	var lastScrollTop = 0;
	var delta = 5;
	var navbarHeight = $('header').outerHeight();
	
	$(window).scroll(function(event){
	    didScroll = true;
	});
	setInterval(function(){
	    if(didScroll){
	        hasScrolled();
	        didScroll = false;
	    }
	}, 250);


	function hasScrolled(){
	    var st = $(this).scrollTop();
	
	    if(Math.abs(lastScrollTop - st) <= delta)
	    return;
	    if(st > lastScrollTop && st > navbarHeight){
	        $('header').removeClass('header_down').addClass('header_up');
	    }else{
	        if(st + $(window).height() < $(document).height()){
	            $('header').removeClass('header_up').addClass('header_down');
	        }
	    }
	    lastScrollTop = st;
	}


  /*footer 자회사 */

	var btn_affiliate = $(".btn_affiliate");
	
	btn_affiliate.bind("click",function(){ 				// 셀렉트 박스 열고 닫기
		btn_affiliate.attr("aria-expanded","true");		
		$(window).bind("click",function(){ 					// 셀렉트 박스가 선택되면 모든 윈도우에 이벤트 추가
			btn_affiliate.attr("aria-expanded","false");				// 모든윈도우가 클릭되면 옵션 박스 의 on 삭제
			$(window).unbind("click");							// 윈도우의 클릭이벤트 삭제
		});
		return false;
	});
	
	$(".affiliate_item").click(function(){
		$(".btn_affiliate").attr('aria-expanded', 'false');
	});
});

