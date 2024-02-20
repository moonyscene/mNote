/*! layout.* v.20150406. r.20150521.20161014. | @MoonYoungshin[myshin@naver.com] | Private Licensed
 * 공통. 인클루드. DOM 준비
 */
_$.html.inc = [
	'',
	'<script type="text/javascript" src="' + _$.site.path + '../../share/inc/head.js"></script>',
	//'<script type="text/javascript" src="' + _$.site.path + '../../share/inc/head_below.js"></script>', // 20161014.제거
	'<script type="text/javascript" src="' + _$.site.path + '../../share/inc/foot.js"></script>',
	'<script type="text/javascript" src="' + _$.site.path + '../../share/inc/sidebar.js"></script>',
	'<script type="text/javascript" src="' + _$.site.path + '../../share/inc/side.js"></script>',
	'<script type="text/javascript" src="' + _$.site.path + '../../share/inc/body_head.js"></script>',
	'<script type="text/javascript" src="' + _$.site.path + '../../share/inc/body_foot.js"></script>',
	'<script type="text/javascript" src="' + _$.site.path + '../../share/inc/aside.js"></script>',
	'<script type="text/javascript" src="' + _$.site.path + '../../share/inc/wing.js"></script>',
	''
];

for(var i in _$.html.inc){
	document.writeln(_$.html.inc[i]);
}

//console.log($('head').html());

/* ◇◆ jQuery(document).ready(function($){}); ◇◆◇◆◇◆◇◆◇◆◇◆◇◆◇◆ */
jQuery(function($){

/** ◇◆ Local Include+Layout+Library.20150406.MoonYoungShin.
 * Use)
 * Task)
 */
//(function(){
	// ◇ Include (DOM)
	//$('#head').load('../../share/inc/head.html');
	//$('#side').load('../../share/inc/side.html');
	$('#head').html(headHTML);
	//$('#head_below').html(head_belowHTML); // 20161014.제거
	$('#foot').html(footHTML);
	//$('#sidebar').html(sidebarHTML);
	//$('#side').html(sideHTML);
	$('#body_head').html(body_headHTML);
	$('#body_foot').html(body_footHTML);
	$('#aside').html(sideHTML);
	$('#wing').html(wingHTML);
//});
/** /◇◆ */

}); /* /jQuery(function($){})(); */