/*! html_head.* v20150406.r20150417 | @MoonYoungshin[myshin@naver.com] | Private Licensed
 * 공통 <head></head> 태그 자식 코드. meta, title, link, script, ..
 * Task) [~IE8] 자바스크립트로 인클루드 구현 안되는건가?
 */

function jsonConcat(o1, o2) {
	for (var key in o2) {
		o1[key] = o2[key];
	}
	return o1;
}
var _json1 = _$ || {}; // 현재페이지 옵션값 임시 저장
var _$ = { // 전역객체 재정의
	nowPage: {
		title: '', // title tag text
		pageType: 'normal', // normal | main | sub | popup | indy |
		layoutType: null, // normal | main | sub | popup | indy |
		bar: ''
	},
	site: {},
	html: {}
}
_$.nowPage = jsonConcat(_$.nowPage, _json1.nowPage); // 옵션값 합치기


document.writeln('\n'+'<script type="text/javascript" src="../../share/inc/sitemap.js"></'+'script>');

var type = _$.nowPage.pageType || _$.site.pageType;
//alert(type);

switch(type){
case 'normal':
	document.writeln('<script type="text/javascript" src="../../share/inc/html_head_base.js"></'+'script>');
	break;
case 'main':
	document.writeln('<script type="text/javascript" src="../../share/inc/html_head_base.js"></'+'script>');
	break;
case 'sub':
	document.writeln('<script type="text/javascript" src="../../share/inc/html_head_base.js"></'+'script>');
	break;
case 'popup':
	document.writeln('<script type="text/javascript" src="../../share/inc/html_head_base.js"></'+'script>');
	break;
case 'indy':
	document.writeln('<script type="text/javascript" src="../../share/inc/html_head_base.js"></'+'script>');
	break;
default:
	document.writeln('');
}
