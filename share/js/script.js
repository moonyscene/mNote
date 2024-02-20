/**
 * @File Name : script.js
 * @Description : Javascript jQuery Code (메소드와 함수 호출, 실행..)
 * @Modification Information
 * <pre>
 * 수정일 | 수정자 | 수정내용
 * 2017.05.15 | 문영신 | 최초 등록
 * (중략)
 * 2017.06.23 | 문영신 | 유사 사이트 공통 스크립트 중 인클루드 하면 안되는거 가져옴.
 * (중략)
 * 2019.09.04 | 문영신 | addOnNav() 맞춤
 * 2019.10.17 | 문영신 | take2tnb1heightD2() 결함개선
 * 2019.10.23 | 문영신 | take2tnb1heightD2() 고도화
 * 2019.11.04 | 문영신 | 메인 1차 첫번째 활성 주석처리
 * 2019.12.18 | 문영신 | addOnNav() 맞춤
 * 2019.12.23 | 문영신 | jQmPanX1() 호출 (터치(마우스) 좌우로 이동). 현재위치, ..
 * 2020.03.05 | 문영신 | 스크롤on효과 추가
 * 2020.04.06 | 문영신 | //take2tnb1heightD2(); 주석
 * 2020.04.10 | 문영신 | take2tnb1heightD2(); 호출
 * 2020.05.20 | 문영신 | take2tnb1heightD2(); 결함개선
 * 2020.06.26 | 문영신 | #head 내부에 들어가거나 있으면.. 결함개선
 * 2020.08.11 | 문영신 | take2tnb1heightD2(); 결함개선
 * 2020.08.19 | 문영신 | 스크롤on효과 고도화
 * 2020.08.21 | 문영신 | 주석
 * 2020.09.25 | 문영신 | 모바일.클릭활성.클릭링크이동 추가
 * 2020.10.16 | 문영신 | //take2tnb1heightD2(); 주석
 * 2020.11.11 | 문영신 | take2tnb1heightD2(); 호출 안함
 * </pre>
 * @author 웹표준화실 문영신
 * @since 2017.03.23
 *
 * @Copyright (C) IACTS.CO.KR All rights reserved.
 */

/*! All JavaScript jQuery v.20170323~ 20200925. 20201016 | by MoonYoungshin[myshin@naver.com] | MIT License
 * 20170323. ( jq.js (v.20170314) 를 script_base.js (즉시실행, 메소드, 함수 정의) 와 script.js (메소드, 함수 호출, 실행..) 으로 분리 )
 */

/* Table of contents )) ☆ 코드 추가되면.. 목차 갱신하세요.
************************************************************
jQuery(function($){
	메소드, 함수 호출
});
코드 변경이 필요한 메소드, 함수만 아래에 둔다.
Plugin --
	none
Function --
	addOnNav() 현재활성1·2·3·4차
	take2tnb1heightD2()
	take2tnb1d2heightD3
************************************************************
 */


//jQuery.noConflict();
/* ◇◆ jQuery(document).ready(function($){}); ◇◆◇◆◇◆◇◆◇◆ */
jQuery(function($){


/* ◇◆ 메소드, 함수 호출 ◇◆◇◆◇◆
 * HTML 코드 직후에 호출하면 성능 향상된다.
 */

$(function(){ // 중첩하면 지연 실행한다 .

}); /* /$(function(){}); */


/* ◇◆ Compatible */


// Scroll
jQscrollTouch('.scroll1wrap', {setDesktop: false});
jQscrollTouch('.scroll1wrap1all1', {setDesktop: true});


// backgroundSize[IE6~8]Support. 20150703. 20161110
// * ☆required: jquery.backgroundSize.js
$(window).on('load', function(){ // 모든 이미지 로드 후 실행
	$('.bsContain').css({backgroundSize: 'contain'});
	$('.bsCover').css({backgroundSize: 'cover'});
});


/* ◇◆ UX 20170224~ 20200410. 20200811. ◇◆
 * 여기 말고 HTML 코드 직후에 호출한다.
 * 함수는 여기서 호출하더라도 재호출 가능하지만 두번 실행된다. )))
 * 메서드(플러그인)는 $(동일선택자).메서드({옵션값}); 재호출 안된다.
 */

addOnNav();

// 주메뉴 기본 동작
makeActive2ClickHover2('#tnb1');
//$('#tnb1 .b1.toggle').triggerHandler('click'); // ☆모바일확인용
//$('#tnb1 div.d1').find('>ul>li').addBack().addClass('over'); // ☆데스크탑확인용(모두활성)
//$('#tnb1 div.d1').find('>ul>li.m1').addBack().addClass('over'); // ☆데스크탑확인용(하나활성)

// 주메뉴 고도화
//take2tnb1heightD2(); // 20201110. (단, 1차인라인.2차스택.개별열림.모두열림 안씀)
//take2tnb1d2heightD3();

// 터치(마우스) 좌우로 이동. 20191223
$('#location1').jQmPanX1({mView: this, mStage: '.breadcrumb', mCont: '.cont' });
$('#gn1').jQmPanX1({mView: this, mStage: '#gn1c', mCont: '#gn1c>ul' });


/** ◇◆ UX 고도화 ~ 20171226. MoonYoungshin.
 */

	// 주메뉴 배경 클릭하면 주메뉴 닫음
	$('#tnb1c>.bg').on('click', function(){ // 20171222
		$('#tnb1c .b2.close').triggerHandler('click');
	});

	// 주메뉴 레이어 활성되면 바닥은 스크롤 막음
	//$('#tnb1 .b1.toggle').add('#search1 .b1.toggle').on('click', function(){
	$('#tnb1 .b1.toggle').on('click', function(){
		//if( $('#tnb1c').is('.on') || $('#search1c').is('.on') ){
		if( $('#tnb1c').is('.on') ){
			$('html').addClass('ofh');
		}else{
			$('html').removeClass('ofh');
		}
	});
	$(window).on('resize', function(){ // 모든 이미지 로드 후 실행
		if( !$('html').is('.Mobile') ){
			$('html').removeClass('ofh');
		}
	});


/** ◇◆ #head 내부에 들어가거나 있으면 body 태그에 CSS 클래스 추가. 20191023. 20200626 MoonYoungshin.
 */
	$('#head').on('focusin mouseenter mouseover', function(){ // 20200626. [FF][IE9]bugFix) mouseover 추가
		$('body').addClass('in-head');
	}).on('focusout mouseleave', function(){
		if( !$('#tnb1c').is('.over') ){
			$('body').removeClass('in-head');
		}
	});


/** ◇◆ 스크롤on효과. 20200305. 20200819. MoonYoungshin.
 */
(function(){

	$(window).on('load resize scroll', function(){
		makeScrollOn();
	});

	function makeScrollOn(){
		var where = .85; // < 1
		var newScrollTop = $(this).scrollTop() + $(this).height() * where;
		
		$('.mj-ani').each(function(){
		  var $my = $(this);
		  if( $my.offset().top < newScrollTop ){
				$my.addClass('on');
			}
		});
	}

})();


/** ◇◆ 모바일.클릭활성.클릭링크이동. 20200925. MoonYoungshin.
 * use) mjs.doClick2('html.Mobile .cp33card4 .item .a1');
 */
mjs = window.mjs || {};
mjs.doClick2 = function(selector){
	var my = selector;
	var myHref;
	$(document).on('click', my, function(){
		if( $(this).is('.click1') ){
			return;
		}else{
			$(this).addClass('click1');
			return false;
		}
	});
};


}); /* /jQuery(function($){})(); ◇◆◇◆◇◆◇◆◇◆ */


/* ◇◆ Plugin ◇◆◇◆◇◆◇◆◇◆ */
/* ◇◆ Function ◇◆◇◆◇◆◇◆◇◆ */


/** ◇◆ addOnNav. 20140919~20191104. 20191218. MoonYoungShin. 현재활성1·2·3·4차
 * Use) addOnNav();
 * menu_all.* 에서 받은 값으로 만든 코드 <body class="d1 d1_1 d1_1_1 d1_1_1_1"> 를 이용한다.
 * 문서 준비되기 전에 함수 정의 해야한다. ((( 코드 중간에서 addOnNav(); 실행
 * 주메뉴, 부메뉴 구조에 맞춰 수정한다.
 */
function addOnNav(){
	var dn_n_n_n = $('body').attr('class');
	if(!dn_n_n_n) return false; // 에러방지
	var depthArr = /d([0-9]+)_([0-9]+)_([0-9]+)_([0-9]+)/.exec(dn_n_n_n);
	if(!depthArr) return false; // 에러방지. 팝업페이지 등 menu_all 없는 경우
	// 전체메뉴
	$('#anb1 div.d1>ul>li.m'+depthArr[1]).addClass('on'); // 1차
	$('#anb1 div.d1>ul>li.on>div.d2>ul>li.m'+depthArr[2]).addClass('on'); // 2차
	$('#anb1 div.d2>ul>li.on>div.d3>ul>li.m'+depthArr[3]).addClass('on'); // 3차
	// 20190430. 메인 or 기타 페이지에서 메뉴 1차 첫번째 활성 (모바일 메뉴 1차 세로배치에서 하위메뉴 허전함 채움)
	if( depthArr[1] == 0 || depthArr[1] > 9 ){
		//$('#tnb1 div.d1>ul>li.m1').addClass('on'); // 20191104
	}
	// 주메뉴
	$('#tnb1 div.d1>ul>li.m'+depthArr[1]).addClass('on'); // 1차
	$('#tnb1 div.d1>ul>li.on>div.d2>ul>li.m'+depthArr[2]).addClass('on'); // 2차
	$('#tnb1 div.d2>ul>li.on>div.d3>ul>li.m'+depthArr[3]).addClass('on'); // 3차
	$('#tnb1 div.d3>ul>li.on>div.d4>ul>li.m'+depthArr[4]).addClass('on'); // 4차
	// 부메뉴
	$('#snb1 div.d2>ul>li.m'+depthArr[2]).addClass('on'); // 2차
	$('#snb1 div.d2>ul>li.on>div.d3>ul>li.m'+depthArr[3]).addClass('on'); // 3차
	$('#snb1 div.d3>ul>li.m'+depthArr[3]).addClass('on'); // 3차
	$('#snb1 div.d3>ul>li.on>div.d4>ul>li.m'+depthArr[4]).addClass('on'); // 4차
	// 현재위치펼침
	$('#lnb1d1 li.m'+depthArr[1]).addClass('on'); // 1차
	// 콘텐츠메뉴
	//$('#cnb1 .m'+depthArr[2]).addClass('on');
	//$('#cnb1 .m'+depthArr[3]).addClass('on');
	//$('#cnb1 .m'+depthArr[4]).addClass('on'); 
	//$('#cnb2 .m'+depthArr[5]).addClass('on');
	//$('#cnb2 .m'+depthArr[6]).addClass('on');
	//console.log(depthArr); // Test
}


/** ◇◆ Desktop 주메뉴 높이값 추가 부드러운 동작 (d1((d2) 20190502~. 20200520. 20200811. MoonYoungshin.
 * 2차메뉴가 절대위치 스택배치일 때, 1차메뉴 오버에 따라 높이 재설정해준다.
 * Use) $(function(){ take2tnb1d1heightD2(); });
 * 20191017. 마우스 오버 newHeight 에 + defaultHeight 추가
 * 20191023. 모든 메뉴 포커스인 마우스 오버
 * 20200520. 작은폭 제외하여 결함 방지
 * 20200811. 결함개선. 성공한 코드 참조하여 누락한 $this = $(this); 추가
 */
function take2tnb1heightD2(){

	var $my = $('html.width-xlarge #tnb1c'); // .width-xlarge 주메뉴 콘텐츠 컨테이너
		$my.$d1 = $('div.d1', $my);

	var defaultHeight = $my.outerHeight(true),
		newHeight = 0;
		//console.log(defaultHeight);

	// 1차영역 마우스 오버아웃 :: 아래 $('div.d1 li>a', $my) 동작과 합치면 안됨!
	$my.$d1.on('mouseenter', function(){
		if(!$('html').is('.width-xlarge')){return false;} // 20200520 작은폭 제외
		newHeight = defaultHeight;
		$my.css({
			height: defaultHeight + 'px', //
			height: '',
			overflow: 'hidden',
			transition: '.4s ease-in-out'
		});
	}).on('mouseleave', function(){
		if(!$('html').is('.width-xlarge')){return false;} // 20200520 작은폭 제외
		$my.css({
			height: defaultHeight + 'px', //
			height: '',
			overflow: 'visible',
			transition: '.0s ease-in-out'
		});
	});

	// 20191023. 1차~메뉴 포커스인 마우스 오버
	$('div.d1 li>a', $my).on('focusin mouseenter', function(){ // 모든 메뉴
		$this = $(this);
		if(!$('html').is('.width-xlarge')){return false;} // 20200520 작은폭 제외
		setTimeout(function(){ // 값 얻으려면
			newHeight = $this.closest('div.d1>ul>li').find('.d2').outerHeight(true);
			$my.css({ // 20191017
				height: newHeight + defaultHeight + 'px'
			});
		}, 0);
	});

};


/** ◇◆ 주메뉴 2차 높이값 추가 (d2((d3) 20190502. MoonYoungshin.
 * 3차메뉴가 절대위치 스택배치일 때, 2차메뉴 오버에 따라 높이 재설정해준다.
 * Use) $(function(){ take2tnb1d2heightD3(); });
 * Task) 범용 가능해지면 고도화
 */
function take2tnb1d2heightD3(){
	var d3height =	0;
	$('#tnb1 div.d2>ul>li>a').on('mouseenter focusin', function(){
		var $this = $(this);
		var $d2 = $this.closest('div.d2');
		var $d3 = $this.next('.d3');
		setTimeout(function(){
			$d2.css({height: 'auto'});
			d3height = $d3.height();
			//console.log( $d3.css('display') +'  '+ d3height +'  '+ $d2.height() );
			if( $d2.height() < d3height ){
				$d2.css({
					height: d3height + 'px'
				});
			}
			console.log(d3height);
		}, 0);
	});
};