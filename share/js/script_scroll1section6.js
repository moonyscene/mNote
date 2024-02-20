/**
 * @File Name : script_scroll1section6.js
 * @Description : 스크롤 섹션. 메인본문섹션 페이징. 마우스휠. 제스처.
 * @Modification Information
 * <pre>
 * 수정일 | 수정자 | 수정내용
 * 2019.12.10 | 문영신 | 이전 버전들 합침!!
 * 2020.02.05 | 문영신 | 푸터보이기시작하면 / 제스처 / 최초실행 / 코드정리
 * 2020.08.19 | 문영신 | script_scroll1section5.js 가져와서 맞춤 / 마우스휠 및 마우스휠모양내비($mw1nav) 동작 제거
 * 2020.08.20 | 문영신 | 고도화
 * 2020.09.01 | 문영신 | 마우스휠, 제스처 추가 및 고도화
 * </pre>
 * @author 웹표준화실 문영신
 * @since 2018.03.19
 *
 * @Copyright (C) IACTS.CO.KR All rights reserved.
 */

/* Table of contents )) ☆ 코드 변하면 목차 갱신하세요.
––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
즉시실행 --
	변수선언
	메인UX연결 --
		$객체선언
		동작정의
		최초실행
		자동순환
		동작연결
		내비연결
		이벤트연결 --
			스크롤
			마우스휠 동작 제거
			제스처
		접근성
Function --
	onActiveSN2() // 순번.활성
	smoothScrollToHash() // 섹션내비.동작
	setLocationHash() // URI 해시
	smoothScrollTop() // 부드러운 세로 스크롤
––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
 */

/** ◇◆◇◆◇◆ (function(){})(); 20160725~ 20190529. 20200205 MoonYoungshin
 */
(function(){

	var onSN = 1, // on serial number 1, 2, 3, …
		nowScrollTop = 0, // $(window).scrollTop() 담는거
		vmTop = 0, // 섹션 이전 요소 상쇄값. 기본 $head.height()
		vmTopFirst = 0, // 첫째 섹션 상쇄값
		vmTopLast = 0, // 맨끝 섹션 상쇄값
		this_hash = '', // #해시값 담는거
		this_hash_top = '', // $(this_hash).offset().top
		location_href = '', // location.href 담아 계산
		end_top = 0, // 목적위치
		setoff = 0, // 상쇄값 최종 상계
		timer1 = 0, // 섹션순환타이머
		timer2 = 0, // #head fixed 지연타이머
		interval = 60000, // 간격 ★☆
		isStop = 0, // 정지상태
		do1 = {}, // 동작정의
		// 20180327
		isScroll = false, // 스크롤 동작여부 
		duration = 600, // 스크롤 동작시간
		bar;


	/** ◇◆◇◆ 메인UX연결. 20180327~. 20200205. MoonYoungshin
	 */
	$(function(){
		var $my, // 활성 섹션내비 담는거
			$nav1a = $('#go1mainbody li a'), // 섹션내비
			$nav1top = $('#gotop1'),	// 위로가기
			$mw1nav = $('.mousewheel1[class*="scroll1"]'), // 마우스휠모양내비
			$section = $('#body [id^="mainbody"]'), // 바디섹션
			$head = $('#head'),
			$foot = $('#foot'),
			$b1stop = $('.control1 .stop'), // 버튼 정지
			$b1play = $('.control1 .play'), // 버튼 재생
			$b1prev = $('.control1 .prev'), // 버튼 이전
			$b1next = $('.control1 .next'); // 버튼 다음


		/** ◇◆ 동작정의. 20180531. 20200205. MoonYoungshin
		 * ★☆ setoff 맞춤화. 다른 값은 주석처리!
		 */

		do1.act = function(){ // 기본동작

			$my = $nav1a.eq(onSN-1);

			// 상쇄값 최종 상계
			vmTop = $head.height(); // 20180327. 공통.상단 높이 고려함.
			nowScrollTop = $(window).scrollTop();
			this_hash = $my[0].hash;
			this_hash_top = $(this_hash).offset().top;

			setoff = 0; // 상쇄값 초기화

			if( !(onSN ==  $nav1a.length) ){ // 맨끝제외

				// #head 클릭시엔 relative 이고 조각링크로 이동중~후에는 fixed 로 변화하면
				//if( (nowScrollTop < vmTop) && (this_hash_top > vmTop) ){
				//	setoff = (-vmTop * 2); // ★☆ #head 에 가리지 않고, 높이에서 빠진 #head 까지 고려
				//}else{
				//	setoff = (-vmTop);
				//}

			}

			//setoff++; // 소수점 오차 고려 +1

			smoothScrollToHash($my, setoff);
		};

		do1.stop = function(){ // 정지
			clearInterval(timer1);
		};

		do1.play = function(){ // 재생
			clearInterval(timer1);
			timer1 = setInterval(function(){
				do1.auto();
			}, interval);
		};

		do1.prev = function(){ // 이전
			if( --onSN < 1 ){
				//onSN = $nav1a.length; // 반대끝으로 돌리기
				onSN = 1; // 안돌리기
			}
			do1.act();
		};
		do1.next = function(){ // 다음
			if( ++onSN > $nav1a.length ){
				//onSN = 1; // 반대끝으로 돌리기
				onSN = $nav1a.length; // 안돌리기
			}
			do1.act();
		};


		// 최초실행. 20200205
		(do1.init = function(){
			do1.act();
			onActiveSN2(onSN, [$nav1a, $section]);
		})();


		/** ◇◆ 자동순환. 20160725. MoonYoungshin
		 */
		/* (function(){
			clearInterval(timer1);
			timer1 = setInterval(function(){
				do1.auto();
			}, interval);
			do1.auto = function(){ // 다음 동작
				if(!isStop){
					do1.next();
				}
			}
		})(); */


		/** ◇◆ 동작연결. 20160725. 20180327. MoonYoungshin
		 */

			$b1stop.on('click', function(){ // 정지
				$b1stop.addClass('off');
				isStop = 1;
				do1.stop();
			});

			$b1play.on('click', function(){ // 재생
				$b1stop.removeClass('off');
				isStop = 0;
				do1.play();
			});
			
			$b1prev.on('click', function(){ // 이전
				do1.prev();
			});

			$b1next.on('click', function(){ // 다음
				do1.next();
			});

			$('#body .container').on('mouseenter focusin', function(){ // 본문 영역에 마우스 진입 또는 초점진입
				$b1stop.addClass('off');
				isStop = 1;
				do1.stop();
			});


		/** ◇◆ 내비연결. 20160725. 20200819. MoonYoungshin
		 * 20200819. $mw1nav 동작 주석처리
		 */

			$nav1a.each(function(index, element){ // 섹션내비
				// element == this
				$(this).on('click', function(e){
					e.preventDefault();
					onSN = index + 1;
					do1.act();
				});
			});

			$nav1top.on('click', function(e){ // 위로가기
				e.preventDefault();
				//setLocationHash($(this)[0].hash);
				smoothScrollTop(0);
			});

			// 마우스휠모양내비. 20200819
			$mw1nav.each(function(index, element){
				$(this).on('click', function(e){
					//e.preventDefault();
					//smoothScrollToHash($(this), setoff);
					//console.log(setoff);
				});
			});


		/** ◇◆ 스크롤. 섹션 위치로 가면 해당 섹션내비 활성. 20180327~. 20200205. 20200820. MoonYoungshin
		 */
		$(window).on('scroll load resize', function(e){

			nowScrollTop = $(window).scrollTop();
			vmTop = $head.height(); // $head 높이 고려 // ★☆ 안하려면 주석처리한다.
			vmTopFirst = vmTop;
			vmTopLast = ($(document).height() - $(window).height()) - $foot.height(); // $foot 보이기 시작하는 scrollTop
			vmTop2 = ($(window).height()/2);
			vmTop = vmTop2; // 더 많이 보이는 섹션 활성 // ★☆ 안하려면 주석처리한다.

			// scrollTop 이 해당 위치로 가면 addClass
			if(nowScrollTop > $head.height()){
				$head.addClass('scroll-top-gt-this');
			}else{
				$head.removeClass('scroll-top-gt-this');
			}

			if(nowScrollTop == 0 || nowScrollTop < vmTop ){ // 기본
				onSN = 1; // onSN = 0
			}
			if(nowScrollTop > ($section.eq(0).offset().top - vmTopFirst) ){
				onSN = 1;
			}
			if(nowScrollTop > ($section.eq(1).offset().top - vmTop)){
				onSN = 2;
			}
			if(nowScrollTop > ($section.eq(2).offset().top - vmTop)){
				onSN = 3;
			}
			if(nowScrollTop > ($section.eq(3).offset().top - vmTop)){
				onSN = 4;
			}
			if(nowScrollTop > ($section.eq(4).offset().top - vmTop)){
				onSN = 5;
			}

			// 맨끝 ★☆

			// ★ 반이상 보이거나 푸터보이기시작하면 활성 // 20180327~.
			//if( (nowScrollTop > ($section.eq(5).offset().top - vmTop2)) || (nowScrollTop > vmTopLast) ){
			//	onSN = 6;
			//}

			// ★ 푸터보이기시작하면 활성 // 20200205~.
			if( nowScrollTop > vmTopLast ){
				//onSN = 6;
			}

			// ★ 푸터보이기시작 + V 하면 비활성 // 20200820.
			if( nowScrollTop > (vmTopLast + 180) ){ // + $mw1nav 높이
				$mw1nav.fadeOut();
			}else{
				$mw1nav.fadeIn();
			}

			onActiveSN2(onSN, [$nav1a, $section]);

		});


		/** ◇◆ 접근성 20180530. MoonYoungshin
		 */
		var doWa1 = function(){
			$section.each(function(index, element){
				// element == this
				$(this).on('focusin', function(e){
					onSN = index + 1;
					do1.act();
				});
			});
		};
		$(window).on('load resize', function(){
			setTimeout(function(){
				if($('html').is('.width-xlarge')){
					//doWa1(); // 한 섹션이 화면 영역 높이를 벗어나지 않을 때만 이거 실행 권장.
				}
			}, 500);
		});


		/** ◇◆  마우스휠. 20180327~20200205. 20200901. MoonYoungshin
		 * 휠 내리면 1섹션씩 스크롤 하다가 endScrollTop 이후는 기본 스크롤
		 * 20190529 [CR73~] 마우스 휠 스크롤 버벅 결함 해결!
		 */
		var doWheelScroll1 = function(){
			var delta = 0,
				endScrollTop = 0; // 휠 1섹션씩 스크롤 끝나는 지점 (기본 스크롤 시작 위치)
				isXlarge = true; // 큰폭화면 여부

			var ePreventDefault = function(e){e.preventDefault();}

			if( !!$('html').is('.Chrome') ){ // [CR][OP]
				window.addEventListener('wheel', ePreventDefault, { passive: false }); // 휠 기본 동작 제거 (동작 버벅 해결)
			}

			$("html, body").on('mousewheel DOMMouseScroll', function(e) {

				isXlarge = $('html').is('.width-xlarge'); // 20200901

				if( !$('html').is('.Chrome') ){ // [CR][OP] 아니면
					e.preventDefault();
				}

				// endScrollTop = $section.eq(1).offset().top; // 2번째 섹션 이후는 기본 스크롤
				endScrollTop = $section.last().offset().top; // 20200901. 마지막 섹션만 기본 스크롤

				var e = e.originalEvent;

				if (e.detail) { // [FF]
					delta = e.detail * -40; // [CR][IE]과 동일하게 계상
				}else{ // [CR][IE]
					delta = e.wheelDelta;
				}
				//console.log(delta);

				if( isScroll == false ){
					if( delta < 0){ // 아래로 휠
						//if( (nowScrollTop + 1) < endScrollTop ){ // +1 은 소수점 오차 고려
						if( ((nowScrollTop + 1) < endScrollTop ) && isXlarge ){ // 20200901 큰폭 조건 추가
							do1.next();
						}else{
							smoothScrollTop( nowScrollTop, 400, 400, 'swing');
						}
					}else if( delta > 0 ){ // 위로 휠
						//if( (nowScrollTop + 1) < endScrollTop ){ // +1 은 소수점 오차 고려
						if( ( (nowScrollTop + 1) < endScrollTop ) && isXlarge ){ // 20200901 큰폭 조건 추가
							do1.prev();
						}else{
							smoothScrollTop( nowScrollTop, -400, 400, 'swing');
						}
					}
					isScroll = true;
				}

			});
		};
		doWheelScroll1();


		/** ◇◆ 제스처 20200205. 20200901. MoonYoungshin
		 * hammer.min.js required
		 */
		var doSwipe1 = function(){
			var $my = $('[id^="mainbody"]:not(":last")'); // 20200901. 마지막 섹션만 제외
			$my.each(function(){
				var hammertime = new Hammer( $(this)[0] );
				hammertime.get('swipe').set({ direction: Hammer.DIRECTION_ALL }); // 세로 인식
				hammertime.on('swipeup', function(){
					do1.next();
				}).on('swipedown', function(){
					do1.prev();
				});
			});
		};
		//doSwipe1(); // 20200901. 제스처 동작 하려면 이거 주석 처리



	});
	/** /◇◆◇◆ 메인UX연결 **/


	/* ◇◆ Function ◇◆◇◆◇◆◇◆◇◆ */


	/** ◇◆ 순번.활성 20180406. MoonYoungshin
	 */
	function onActiveSN2(onSN, objArray){ // 활성순번, [요소객체배열, 요소객체배열, ..]
		for (property in objArray){
			var $it = objArray[property];
			if(!$it.siblings().length){ // li>a 이면 li 을 선택
				$it = $it.closest('li');
			}
			$it.filter('.on').removeClass('on');
			if(onSN){ // .eq(-1) 은 맨끝이므로.. 걸러줘야한다.
				$it.eq(onSN-1).addClass('on');
			}
		}
	}


	/** ◇◆ 섹션내비.동작 20160725. MoonYoungshin
	 */
	function smoothScrollToHash($my, setoff){ // (제이쿼리객체, 상쇄값)
		this_hash = $my[0].hash; // = $my.attr('href');
		this_hash_top = $(this_hash).offset().top;
		smoothScrollTop( this_hash_top, setoff );
	}


	/** ◇◆ URI 해시 20160725. MoonYoungshin. (현재사용안함)
	 */
	function setLocationHash(uriHash){ // (해시값) 인자 this_hash 사용하니 스코프 변수와 충돌나서 uriHash 로 수정함.
		//console.log(location.href);
		//console.log(uriHash);
		location_href = location.href;
		location_href = location_href.substring(0, location_href.lastIndexOf('#')); // 해시부터이후제거
		location.href = location_href + uriHash;
	}


	/** ◇◆ 부드러운 세로 스크롤 20180327. MoonYoungshin
	 */
	function smoothScrollTop(end_top, setoff){ // (이동할곳, 상쇄값)
		(setoff)? setoff: setoff = 0;
		$('html, body').stop().animate({ // $('html, body').animate() ☆[호환]OK!
			scrollTop: end_top + setoff // 상쇄 합침
		}, duration, 'easeInOutExpo', function(){
			isScroll = false; // 20180327
		});
	}


})();
/** /◇◆◇◆◇◆ (function(){})(); */