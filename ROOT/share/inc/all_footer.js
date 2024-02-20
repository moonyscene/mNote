/*! html ) body ) all_footer v20150406. r20150515 | @MoonYoungshin[myshin(at)naver.com] | Private Licensed
 * 공통. #body end, #wrap end, #foot, #container end
 */
_$.html.all_footer = [
	[ // sub
		'</div>',
		'<!-- /#body_content -->',
		'</div>',
		'<hr class="dpn" /><!-- /#forPrint -->',
		'<!-- #body_foot -->',
		'<div id="body_foot" class="init">',
		'<!-- /share/inc/body_foot.html -->',
		'</div>',
		'<!-- /#body_foot -->',
		''
	],
	[ // all
		'</div>',
		'<!-- /#body -->',
		''
	],
	[ // sub
		'<!-- #aside --><hr class="dpn" />',
		'<div id="aside" class="init">',
		'<!-- /share/inc/aside.html -->',
		'</div>',
		'<!-- /#aside -->',
		''
	],
	[ // all
		'</div>',
		'<!-- /container -->',
		'</div>',
		'<!-- /#wrap -->',
		'<!-- #wing --><hr class="dpn" />',
		'<div id="wing" class="init">',
		'<!-- /share/inc/wing.html -->',
		'</div>',
		'<!-- /#wing -->',
		'<!-- #foot --><hr class="dpn" />',
		'<div id="foot" class="init">',
		'<!-- /share/inc/foot.html -->',
		'</div>',
		'<!-- /#foot -->',
		'</div>',
		'<!-- /#container -->',
		''
	],
	[]
];

if( _$.site.page.layoutType == 'main' ){ // main
	_$.html.all_footer.splice(0,1);
	_$.html.all_footer.splice(1,1); // 인덱스 주의! 앞에서 [0] 제거된거 고려바람. 
}

for(var i in _$.html.all_footer){
	for(var j in _$.html.all_footer[i]){
		document.writeln(_$.html.all_footer[i][j]);
	}
}