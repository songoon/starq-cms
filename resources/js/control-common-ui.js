//// layout //// 

// #header 높이에 따라 #container의 padding-top 자동 조절
$(document).ready(function(){
	var	headerHeight = $("#header").height();	//40px이 기본 
	if (headerHeight > 50) {		//가끔 높이가 몇px 더 계산되기도 해서 50이상일 때 동작하도록 설정
		$("#container").css({
		'padding-top':headerHeight,	//40px이 기본
		});
	};
});


//// #header //// 
// gnb-identity와 gnb-menu 사이일 때, gnb-search width 자동 조절
$(document).ready(function(){
	var gnbWidth = $(".gnb").width();
		gnbIdentityWidth = $(".gnb-identity-wrap").width();
		gnbMenuWidth = $(".gnb-menu-wrap").width();
		gnbSearchWidth =  ( gnbWidth - gnbIdentityWidth - gnbMenuWidth ) - 40;	//margin 값 40 여유
	$('.gnb-search-wrap').css({
	'width':gnbSearchWidth,
	});
	if ($(".gnb").width() < 768 ) {	//모바일의 경우
		$('.gnb-search-wrap').css({
		'width':'100%',
		});
	};
});

// gnd gnb-sidebar-open 
$(document).ready(function(){
    $("#gnb-sidebar-open-a").click(function(){
		$("#sidebar").animate({left:'0px'});
    });
});

// gnb gnb-search open 
$(document).ready(function(){
	$("#gnb-search-open-a").click(function(){
		$(".gnb-search-wrap").toggle();
	});
});

// gnb gnb-menu 2d-slide
$(document).ready(function(){
    $("ul.gnb-menu-2d").hide();
	$("ul.gnb-menu-1d li").hover(function(){
	    $("ul:not(:animated)",this).slideDown("fast");
		},
		function(){
		   $("ul",this).slideUp("fast");
		});
});


//// #sidebar //// 

// sidebar sidebar-close-icon
$(document).ready(function(){
    $("#sidebar-close-a").click(function(){
		$("#sidebar").animate({left:'-200px'});
    });
});

// lnb lnb-menu 2d-toggle
$(document).ready(function(){
    $("ul.lnb-menu-2d:not(.opened)").hide();
	$("ul.lnb-menu-1d li").click(function(){
	    $("ul:not(:animated)",this).slideToggle("fast");
	});
});


//// content items //// 

// datetimepicker 날짜만
$(document).ready(function() {
	$('.datepicker-input').datetimepicker({
		timepicker:false,
		format:'Y.m.d'
	});
});

// datetimepicker 시간까지
$(document).ready(function(){
	$('.datetimepicker-input').datetimepicker({
		format:'Y.m.d H:i'
	});
});

// autocomplete
$(document).ready(function(){
	$(".autocomplete-result").hide();
	$(".autocomplete .autocomplete-input").focus(function(){
		$(this).next(".autocomplete-result").slideDown("fast");
	});
	$(".autocomplete .autocomplete-input").blur(function(){
		$(this).next(".autocomplete-result").slideUp("fast");
	});
});

// deapth item 에서 마지막 요소 (span) 뒤에는 ">" 빼기.
$(document).ready(function(){
	$(".depth-item span:last-child").addClass('depth-item-last-child');
	$(".divide-item span:last-child").addClass('divide-item-last-child');
});

// list-option-filter 에서 마지막 요소 (li) 뒤에는 border 빼기.
$(document).ready(function(){
	$(".list-option-filter li:last-child").css('border-right','none');
});

// sortable
$(document).ready(function(){
	$(".sortable").sortable({
		opacity: 0.5,
	});
	$(".sortable").disableSelection();
});

// sortable table rows
$(document).ready(function(){
	$(".sortable-table-rows tbody").sortable({
		items: "tr",
		cancel: ".status-inactive",
	    opacity: 0.5,
	    placeholder: "sortable-table-rows-placeholer",
	    helper: fixWidthHelper
	}).disableSelection();
	    
	function fixWidthHelper(e, ui) {
	    ui.children().each(function() {
	        $(this).width($(this).width());
	    });
	    return ui;
	}
});

// video-player-float in-layer-detail 레이어 위의 동영상 플레이어, 스크롤에 따라 위치 이동
$(document).ready(function(){
	$(".layer-detail .layer-box").scroll(function(){
		// player 위치 계산
		var	dvst = $(".layer-detail .layer-box").scrollTop();
			dvpl = $(".layer-detail .video-player-space-wrap").position();
			dvph = $(".layer-detail .video-player-space-wrap").height();
		    dvpr = (dvpl.top + dvph); //player 아래쪽까지의 위치 산출 
		    dvpw = $(".layer-detail .layer-wrap").width() - $(".layer-detail .layer-box").width() - 1; //player width값 산출, layer좌측 영역
		    
		// player 위치 정보 표시 (임시)
		//$("#player-loc-info").html("pl-loc:" + dvpl.top + ",," + "pl-height:" +  dvph + ",," + "scroll:" + dvst + ",," + "pl-recent:" + dvpr + ",," + "pl-width:" + dvpw);
		
		// player 띄우기    
		if( dvpr < 0 ) {
			$('.layer-detail .video-player-embed-wrap').css({
	    	'position':'fixed',
	    	'z-index':'1999',
	    	'left':'0',
	    	'width': dvpw,
	    	'min-width': '240px',
		   });
		};   
		// player 내리기
		if( dvpr >= 0 ) {
			$('.layer-detail .video-player-embed-wrap').css({
	    	'position':'absolute',
	    	'z-index':'initial',
	    	'left':'initial',
	    	'width':'100%',
	    	'min-width': 'initial',
		   });
		};
	});
});