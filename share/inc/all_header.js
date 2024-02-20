/*! html ) body ) all_header v20150406. r20150515 | @MoonYoungshin[myshin(at)naver.com] | Private Licensed
 * 공통. #container start, #head, #wrap start, #body start, (#visual, #side)
 */
_$.html.all_header = [
	[ // all
		'<!-- #container -->',
		'<div id="container">',
		'<div class="bg bg2top"><div></div></div>',
		'<div class="bg bg2btm"><div></div></div>',
		'<noscript><p class="noscript">JavaScript has been disabled. This site requires JavaScript for full functionality, please enable.</p></noscript>',
		'',
		'<div id="skipnav">',
		'<ul>',
		'<li><a href="#sidebar">부메뉴 바로가기</a></li>',
		'<li><a href="#body">본문 바로가기</a></li>',
		'<li><a href="#aside">부메뉴 바로가기</a></li>',
		'</ul>',
		'</div><hr class="dpn" />',
		'',
		'<!-- #head -->',
		'<div id="head" class="init">',
		'<!-- /share/inc/head.html --><!-- ★☆ToEdit) #tnb1 depth )) 1 | 1~2 | 1~3 | 1~4 | ... -->',
		'</div><hr class="dpn" />',
		'<!-- /#head -->',
		'',
		'<div id="visual">',
		'</div><hr class="dpn" />',
		'',
		'<!-- #head_s4 -->',
		'<div id="head_s4" class="init">',

		'</div><hr class="dpn" />',
		'<!-- /#head_s4 -->',
		'',
		'<!-- #wrap -->',
		'<div id="wrap">',
		'<!-- container -->',
		'<div class="container">',
		''
	],
	[ // sub
		'<div class="doSide">',
		'<p class="wrap">',
		'<button type="button" class="button doSideShrink"><i class="ic1"></i><span class="t1">side 줄이기</span></button>',
		'<button type="button" class="button doSideExpand"><i class="ic1"></i><span class="t1">side 늘이기</span></button>',
		'</p>',
		'</div>',
		'',
		'<!-- #sidebar -->',
		'<div id="sidebar" class="init">',
		'<!-- /share/inc/sidebar.html --><!-- ★☆ToEdit) #snb1 depth )) 2~3 | 1~3 | 2~4 | ... -->',
		'</div>',
		'<!-- /#sidebar -->',
		'',
		'<!-- #side -->',
		'<div id="side" class="init">',
		'<!-- /share/inc/side.html -->',
		'</div>',
		'<!-- /#side -->',
		''
	],
	[ // all
		'<!-- #body -->',
		'<div id="body">',
		''
	],
	[ // sub
		'<!-- #forPrint --><hr class="dpn" />',
		'<div id="forPrint">',
		'<!-- #body_head -->',
		'<div id="body_head" class="init">',
		'<!-- /share/inc/body_head.html -->',
		'</div>',
		'<!-- /#body_head -->',
		'<!-- #body_content -->',
		'<div id="body_content">',
		''
	],
	[]
];

if( _$.site.page.layoutType == 'main' ){ // main
	_$.html.all_header.splice(1,1);
	_$.html.all_header.splice(2,1); // 인덱스 주의! 앞에서 [1] 제거된거 고려바람.
}

for(var i in _$.html.all_header){
	for(var j in _$.html.all_header[i]){
		document.writeln(_$.html.all_header[i][j]);
	}
}