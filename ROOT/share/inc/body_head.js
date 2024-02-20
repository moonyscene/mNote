_$.html.body_headHTML = [
	'',
	'<div id="location1">',
	'<div class="breadcrumb">',
	'<strong class="blind">현재페이지 위치:</strong>',
	'<a href="?" class="home" title="홈">홈</a>',
	'<span class="sep"> &gt; </span><a href="?">e-편한민원</a>',
	'<span class="sep"> &gt; </span><a href="?">일반민원</a>',
	'<span class="sep"> &gt; </span><a href="?">여권/차량등록</a>',
	'<span class="sep"> &gt; </span><a href="?">여권등록</a>',
	'<span class="sep"> &gt; </span><a href="?">5차까지 보여주어</a>',
	'<span class="sep"> &gt; </span><a href="?">화면 폭 벗어나면.. 터치+마우스 기능 추가</a>',
	'</div>',
	'</div>',
	'',
	'<div id="body_title"><h1 class="hb1 h1"> Body Title</h1></div>',
	'',
	'<div id="bhn1">',
	'<ul>',
	'<li class="m1"><a href="?"><i class="ic1">페이스북 담기</i></a></li>',
	'<li class="m2"><a href="?"><i class="ic1">트위터 담기</i></a></li>',
	'<li class="m3"><a href="?"><i class="ic1">블로그 담기</i></a></li>',
	'<li class="m4"><a href="?"><i class="ic1">구글플러스 담기</i></a></li>',
	'<li class="m5"><a href="?"><i class="ic1">링크 주소 복사</i></a></li>',
	'<li class="m6"><a href="/share/ui/printpage.html" onclick="window.print(); return false;" target="_blank"><i class="ic1">본문 인쇄</i></a></li>',
	'</ul>',
	'</div>',
	''
];

var body_headHTML='';
for(var i in _$.html.body_headHTML){
	body_headHTML += _$.html.body_headHTML[i] + '\n';
}