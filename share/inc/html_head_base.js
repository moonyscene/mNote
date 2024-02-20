/*! html_head.* v0.2.1. 20190110. 20180206 since 20150421.  | @MoonYoungshin[myshin@naver.com] | Private Licensed
 * 공통 <head></head> 태그 자식 코드. meta, title, link, script, ..
 */
_$.html.head = [
	[ // All Pages
		'', // \n
		'<!-- html_head -->',
		//'<meta charset="utf-8" />', // 각 html 소스에 둬야 head 요소 안 개별 콘텐츠 정의에 문제가 없다.
		'<meta http-equiv="X-UA-Compatible" content="IE=edge" />',
		//'<meta name="viewport" content="width=device-width, maximum-scale=1, minimum-scale=1, user-scalable=no" />', // ~2015
		'<meta name="viewport" content="width=device-width, initial-scale=1.0" />', // [m]☆2015~.
		'<meta name="format-detection" content="telephone=no, email=no, address=no" />', // <!-- ☆(Added) 전화번호,이메일,지도 자동링크 방지 --> 
		'<meta name="author" content="' + _$.site.name +'" />',
		'<meta name="keywords" content="' + _$.site.metaKeywords + '" />',
		'<meta name="description" content="' + _$.site.metaKeywords + '" />',
		'<title>' + _$.site.page.makeTitleTagText + '</title>',
		// 가져온거
		//'<link rel="stylesheet" href="' + _$.site.path + '../../share/font-awesome/css/font-awesome_@m.valid.css" />', // <!-- ☆(Added) [FF] 오프라인에서는 결함발생 -->
		'<link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />', // <!-- ☆ 아이콘 웹폰트 [IE10+] -->
		//'<link rel="stylesheet" href="' + _$.site.path + '../../share/css/normalize@m.css" />', // <!-- ★☆ToEdit) -->
		// 만든거
		'<link rel="stylesheet" href="' + _$.site.path + '../../share/css/font.css" />',
		'<link rel="stylesheet" href="' + _$.site.path + '../../share/css/base.css" />',
		''
	],
	[ // MainPage, SubPages
		'<link rel="stylesheet" href="' + _$.site.path + '../../share/css/all.css" />',
		''
	],
	[ // MainPage
		'<link rel="stylesheet" href="' + _$.site.path + '../../share/css/main.css" />',
		''
	],
	[ // SubPages
		'<link rel="stylesheet" href="' + _$.site.path + '../../share/css/sub.css" />',
		'<link rel="stylesheet" href="' + _$.site.path + '../../share/css/lib.css" />',
		'<link rel="stylesheet" href="' + _$.site.path + '../../share/css/lib1cp1.css" />',

		'<link rel="stylesheet" href="' + _$.site.path + '../../_lib/_css/lib1tour1.css" />',
		'<link rel="stylesheet" href="' + _$.site.path + '../../_lib/_css/lib1tour2.css" />',
		'<link rel="stylesheet" href="' + _$.site.path + '../../_lib/_css/lib1tour3.css" />',
		'<link rel="stylesheet" href="' + _$.site.path + '../../_lib/_css/lib1cp3.css" />',
		'<link rel="stylesheet" href="' + _$.site.path + '../../_lib/_css/lib1cp4.css" />',
		'<link rel="stylesheet" href="' + _$.site.path + '../../_lib/_css/lib1cp5.css" />',
		'<link rel="stylesheet" href="' + _$.site.path + '../../_lib/_css/lib1cp6.css" />',
		'<link rel="stylesheet" href="' + _$.site.path + '../../_lib/_css/lib1cp7.css" />',
		'<link rel="stylesheet" href="' + _$.site.path + '../../_lib/_css/lib1cp8.css" />',
		'<link rel="stylesheet" href="' + _$.site.path + '../../_lib/_css/lib1spc1.css" />',
		'<link rel="stylesheet" href="' + _$.site.path + '../../_lib/_css/lib1cp9.css" />',
		'<link rel="stylesheet" href="' + _$.site.path + '../../_lib/_css/lib1spc2.css" />',
		'<link rel="stylesheet" href="' + _$.site.path + '../../_lib/_css/lib1cp10.css" />',

		'<link rel="stylesheet" href="' + _$.site.path + '../../share/css/lib2.css" />',
		'<link rel="stylesheet" href="' + _$.site.path + '../../share/css/style.css" />',
		'<link rel="stylesheet" href="' + _$.site.path + '../../share/css/content.css" />',
		'<link rel="stylesheet" href="' + _$.site.path + '../../share/css/mNote.v2.css" />', // <!-- ★☆ToEdit) -->
		''
	],
	[ // PopupPages
		'<link rel="stylesheet" href="' + _$.site.path + '../../share/css/lib.css" />',
		'<link rel="stylesheet" href="' + _$.site.path + '../../share/css/lib2.css" />',
		'<link rel="stylesheet" href="' + _$.site.path + '../../share/css/_popup.css" />',
		''
	],
	[ // IndyPages
		'<link rel="stylesheet" href="' + _$.site.path + '../../share/css/lib.css" />',
		'<link rel="stylesheet" href="' + _$.site.path + '../../share/css/lib2.css" />',
		'<link rel="stylesheet" href="' + _$.site.path + '../../share/css/_indy.css" />',
		''
	],
	[ // All Pages
		
		'<link rel="stylesheet" href="../../share/vendor/syntaxhighlighter_3.0.83/styles/shCoreDefault.css" />', // syntaxhighlighter

		'<script src="' + _$.site.path + '../../share/js/hammer.min.js"></script>', //
		'<script src="' + _$.site.path + '../../share/js/iscroll-min.js"></script>', //

		//'<script src="http://code.jquery.com/jquery-latest.min.js"></script>',
		//'<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js"></script>',
		'<script src="' + _$.site.path + '../../share/js/jquery-3.4.1.min.js"></script>',
		'<script src="' + _$.site.path + '../../share/js/jquery.easing.1.3.js"></script>',

		'<link rel="stylesheet" type="text/css" href="' + _$.site.path + '../../share/OwlCarousel2/owl.carousel.min.css" />', //
		'<script src="' + _$.site.path + '../../share/OwlCarousel2/owl.carousel.min.js"></script>', //

		'<script src="' + _$.site.path + '../../share/inc/layout.js"></script>', // ★☆ToEdit) DOM 준비

		// ★☆ToEdit) DOM 탐색. UX

		//'<script src="' + _$.site.path + '../../share/js/all.js"></script>',
		'<script src="' + _$.site.path + '../../share/js/script_base.js"></script>',
		'<script src="' + _$.site.path + '../../share/js/script_scroll1section1.js"></script>',

		'<script src="' + _$.site.path + '../../share/js/script.js"></script>',

		'<script src="' + _$.site.path + '../../share/js/mNote.v2.js"></script>',

		'<script src="' + _$.site.path + '../../share/js/flowtype.js"></script>', // <!-- ☆(Testing) -->
		'<script src="' + _$.site.path + '../../share/js/_test.js"></script>', // <!-- ☆(Testing) -->

		'<!-- /html_head -->',
		'' // \n
	],
	[]
];

// splice() 인덱스 주의! 앞에서 제거된거 고려바람.
if( _$.site.page.layoutType == 'main' ){ // main
	_$.html.head.splice(3,1);
	_$.html.head.splice(3,1);
	_$.html.head.splice(3,1);
}
if( _$.site.page.layoutType == 'sub' || _$.site.page.layoutType == 'normal' || _$.site.page.layoutType == null ){ // sub
	_$.html.head.splice(2,1);
	_$.html.head.splice(3,1);
	_$.html.head.splice(3,1);
}
if( _$.site.page.layoutType == 'popup' ){ // popup
	_$.html.head.splice(1,1);
	_$.html.head.splice(1,1);
	_$.html.head.splice(1,1);
	_$.html.head.splice(2,1);
}
if( _$.site.page.layoutType == 'indy' ){ // indy
	_$.html.head.splice(1,1);
	_$.html.head.splice(1,1);
	_$.html.head.splice(1,1);
	_$.html.head.splice(1,1);
}

for(var i in _$.html.head){
	for(var j in _$.html.head[i]){
		document.writeln(_$.html.head[i][j]);
	}
}