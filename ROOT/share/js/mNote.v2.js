/*! All Script v.20150406~20161014. 20181115 | @MoonYoungshin[myshin@naver.com] | BSD Licensed */

/* ◇◆ jQuery(document).ready(function($){}); ◇◆◇◆◇◆◇◆◇◆◇◆◇◆◇◆ */
jQuery(function($){

	/** ◇◆ 소스코드 라인넘버 자동생성. 20161014. 20181115. MoonYoungshin.
	 * Use)
	 * for문 사용하니 먹통
	 * 999줄 수용
	 * Task) To Advance.
	 * 내용이 한줄이지만 2줄 이상으로 보여질 때.
	 */
	$(function(){
		(function makeLineNumber(){
			$('<i class="linenum" />').appendTo('.xmp')
				.css({
					position: 'absolute',
					left: '0',
					top: '0',
					bottom: '0',
					width: '2em',
					margin: '0 0',
					padding: '0 .375em',
					background: 'transparent',
					borderRight: '1px solid #e5e7e9',
					color: '#789',
					textAlign: 'right',
					whiteSpace: 'normal',
					overflow: 'hidden'
				})
				.closest('.xmp').css({paddingLeft:'3.375em'});
			$('.linenum').each(function(){
				var lines = 0; // 라인수
				var str = ''; // 라인넘버문자열
				lines = Math.round( $(this).height() / parseInt( $(this).css('line-height') ) );
				//console.log( 'lines: ' + lines );
				for( var i=1; i <= lines; i++ ){
					i = (i < 10)? '0' + i: i;
					str = str + ' ' + i;
				}
				//console.log( 'str: ' + str );
				$(this).text(str);
			});
		}());
	});


	// ◇ 새 창 아이콘 넣기
	$('#body_content a[href^=http]').attr({target: '_blank'});
	$('#body_content a[target=_blank]').css({/* ☆whiteSpace:'nowrap' */}).append('<i class="ic" title="새 창"></i>')
		.find('i.ic').css({
			display:'inline-block',
			width:'12px',
			height:'12px',
			marginLeft:'2px',
			background:'url(../../img/lib/bi1s.png) no-repeat -54px -4px',
			verticalAlign:'middle'
	});

	// ◇ 새 페이지
	$('.mtab1 a:not([href^="#"])').filter('a:not([target=_blank])').filter('[href]').css({whiteSpace:'nowrap'}).append('<i class="ic"></i>')
		.find('i.ic').css({
			display:'inline-block',
			width:'5px',
			height:'5px',
			marginBottom:'0',
			marginLeft:'4px',
			border:'1px solid #9bd',
			background:'fff',
			verticalAlign:'middle'
	});

	// ◇ 사이드바 조절
	$('.doSideShrink').on('click',function(){
		$(this).hide().siblings().show();
		$('#aside').animate({width:0, marginLeft:0, marginRight:0},
			0, 'swing');
		$('#body').animate({width:'97%'},
			0, 'swing');
		$('#aside>*').not('.doSide').animate({opacity:'0'},
			0, 'swing');
	});
	$('.doSideExpand').on('click',function(){
		$(this).hide().siblings().show();
		$('#aside').animate({width:'16%', marginLeft:'1.5%', marginRight:'1.5%'},
			0, 'swing');
		$('#body').animate({width:'78%'},
			0,'swing');
		$('#aside>*').not('.doSide').animate({opacity:'1'},
			0, 'swing');
	});

}); /* /jQuery(function($){})(); */