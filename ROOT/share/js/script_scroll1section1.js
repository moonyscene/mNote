/**
 * @File Name : script_scroll1section1.js
 * @Description : jQuery Code. 스크롤 섹션.
 * @Modification Information
 * <pre>
 * 수정일 | 수정자 | 수정내용
 * 2016.11.03 | 문영신 | 최초 등록
 * 2016.11.30 | 문영신 | 요구반영. 결함개선. 고도화.
 * 2017.03.24 | 문영신 | 파일명 변경. jq_scroll1section1.js 를 script_scroll1section1.js 로
 * 2018.03.26 | 문영신 | 콘텐츠 맞춤 setoff 적용
 * 2018.07.12 | 문영신 | $nav1top1 변경, $nav1top2 추가
 * 2020.01.30 | 문영신 | //setoff = -$head.height();
 * 2020.02.05 | 문영신 | 스크롤. 해당 위치로 가면 addClass
 * 2020.06.01 | 문영신 | 부드러운 타겟 스크롤 smoothScrollTarget()
 * 2020.08.19 | 문영신 | 마우스휠모양내비($mw1nav) 동작 주석처리
 * 2020.11.12 | 문영신 | 마우스휠모양내비($mw1nav) 동작 부활
 * </pre>
 * @author 웹표준화실 문영신
 * @since 2016.10.26
 *
 * @Copyright (C) IACTS.CO.KR All rights reserved.
 */

/* Table of contents )) ☆ 코드 변하면 목차 갱신하세요.
************************************************************
Var --
	변수 초기화
Event --
	마우스휠
즉시실행 --
	메인UX연결
		$선택객체
		이벤트연결
		스크롤. 해당 위치로 가면 addClass
Function --
	smoothScrollToHash() // 섹션내비.동작
	smoothScrollTop() // 부드러운 세로 스크롤
	smoothScrollTargetTop() // 
************************************************************
 */


/** ◇◆◇◆◇◆ (function(){})(); 20161024. 20161130. MoonYoungshin
 */
//(function(){ // 20161130. 즉시 실행 익명 함수 사용말자! 여기 함수들을 전역으로 사용하기 위해서!


	var setoff = 0, // 상쇄값 최종 상계
		do1 = {}; // 동작정의


	/** ◇◆  마우스휠. 20160721. MoonYoungshin
	 */
	$(function(){
		$("html, body").on('mousewheel DOMMouseScroll', function(e) {
			var e = e.originalEvent,
				delta = 0;
				//console.log(e);
			if (e.detail) { // [FF]
				delta = e.detail * -28; // [CR][IE]과 동일하게 계상
				//console.log('detail: '+ delta);
			}else{ // [CR][IE]
				delta = e.wheelDelta;
				//console.log('wheelDelta: '+ delta);
			}
		});
	});


	/* ◇◆ Call Functions, Plugins ◇◆◇◆◇◆ */


	$(function(){ // 20161024~. 20180712
		
		var nowScrollTop = 0; // $(window).scrollTop() 담는거

		var $mw1nav = $('.mousewheel1[class*="scroll1"]'), // 마우스휠모양내비
			$nav1top1 = $('#gotop1'), // 현재 페이지 상단으로 가기
			$nav1top2 = $('#gotop2'), // 현재 페이지 상단으로 가기
			$head = $('#head'); // 상단 fixed 요소

		// 20200130
		//setoff = -$head.height();


		/** ◇◆ 이벤트연결. 20180712~ 20200819. 20201112. MoonYoungshin
		 * 20200819. $mw1nav 동작 주석처리
		 * 20201112. $mw1nav 동작 부활
		 */

		// 마우스휠모양내비. 20200819. 20201112
		$mw1nav.each(function(index, element){
			// element == this
			$(this).on('click', function(e){
				e.preventDefault();
				smoothScrollToHash($(this), setoff);
			});
		});

		$nav1top1.on('click', function(e){ // 맨 위로 가기
			e.preventDefault();
			smoothScrollTop(0);
		});

		$nav1top2.on('click', function(e){ // 맨 위로 가기
			e.preventDefault();
			smoothScrollTop(0);
		});

		// 20200608. a href="#target" class="mj-smooth1scroll1" 하면 부드러운 스크롤 이동 적용
		$('.mj-smooth1scroll1').on('click', function(e){
			e.preventDefault();
			smoothScrollToHash($(this), setoff);
		});


		/** ◇◆ 스크롤. 해당 위치로 가면 addClass. 20200205. MoonYoungshin
		 */
		(function(){
			//var $test = $('<div id="text" style="z-index:9999;position:fixed;left:0;right:0;top:0;background:#ee0;">TEST</div>').appendTo('body');
			$(window).on('scroll load resize', function(e){
				nowScrollTop = $(window).scrollTop();
				//$test.html(nowScrollTop);
				if( nowScrollTop > $head.height() ){
					$head.addClass('scroll-top-gt-this'); // 헤더 항상 보이게
				}else{
					$head.removeClass('scroll-top-gt-this');
				}
			});
		})();


	}); // $(function(){


	/* ◇◆ Function ◇◆◇◆◇◆ */


	/** ◇◆ 섹션내비.동작. 20160725. MoonYoungshin
	 */
	function smoothScrollToHash($this, setoff){ // (제이쿼리객체, 상쇄값)
		this_hash = $this[0].hash; // = $this.attr('href');
		//console.log(this_hash);
		this_hash_top = $(this_hash).offset().top;
		smoothScrollTop( this_hash_top, setoff ); // setoff 단위 없이 정숫값
	}


	/** ◇◆ 부드러운 세로 스크롤. 20160725. MoonYoungshin
	 */
	function smoothScrollTop(end_top, setoff){ // (이동할곳, 상쇄값)
		(setoff)? setoff: setoff = 0;
		$('html, body').stop().animate({ // $('html, body').animate() ☆[호환]OK!
			//scrollTop: end_top // end_top 이동은 여기서 하고.. 끝나면 상쇄값 이동 시작하려는거
			scrollTop: end_top + setoff // 상쇄 합침
		}, 400, 'swing', function(){
			// 아래처럼 2번 동작하는 거는 어지러워 주석처리하고 상쇄값 합쳐서 1번에 동작시킴.
			//$('html, body').stop().animate({
			//	scrollTop: $(document).scrollTop() + setoff
			//}, 200, 'swing', function(){});
		});
	}


	/** ◇◆ 부드러운 타겟 스크롤. 20200601. MoonYoungshin.
	 */
	function smoothScrollTarget(selector, target){
		var $my = $(selector);
		$my.on('click', function(e){
			$(target).stop().animate({
				scrollTop: 0
			}, 400, 'swing', function(){});
		});
	}


//})();
/** /◇◆◇◆◇◆ (function(){})(); */