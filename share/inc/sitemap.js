/*! sitemap.js v0.1 | (c) 2015, 20150430 MoonYoungshin //creativecommons.org/licenses/by/3.0/deed.ko */
_$.site = {
	name: 'mNote.v2',
	id: 001, // primary || 001 | 002 | 101 | ..
	path: '', // '/mNote'
	viewType: 'desktop', // RWD | desktop | tablet | mobile |
	layoutType: 'sub',  // default | main | sub | popup | indy |
	bar: ''
};

_$.site.page = { // 현재페이지 계산값
	id: [0,0,0,0,0],
	makeTitleTagText: (function(){ // 즉시실행함수 결과를 바로 객체변수에 저장.
		var text1 = '';
		if(_$.nowPage.title){
			text1 = _$.nowPage.title + ' &lt;| ' + _$.site.name; // 페이지에 직접 기입한거
		}else{
			text1 = 'get (_$.site.IA.m0.m0)';
			if(text1){
				text1 = _$.nowPage.title + ' &lt;| ' + _$.site.name; // IA 에 있는거
			}else{
			}
			text1 = _$.site.name; // 메인 또는 정의되지 않은거
		}
		return text1;
	})(),
	title : '', // 빈값초기화?
	layoutType : 'sub' // sub | main | indy | popup
};

_$.site.page.layoutType = _$.nowPage.layoutType || _$.nowPage.pageType;

//console.log('_$.site.layoutType: ' + _$.site.layoutType);
//console.log('_$.nowPage.pageType: ' + _$.nowPage.pageType);
//console.log('_$.nowPage.layoutType: ' + _$.nowPage.layoutType);
//console.log('_$.site.page.id: ' + _$.site.page.id);
//console.log('_$.site.page.layoutType: ' + _$.site.page.layoutType);


/* ☆console.log(_$.site.page.makeTitleTagText); */

_$.site.IA = {
	tp_menus: {
		mn: ["title", "link", "pageType", "groupPattern", "role"]
	},
	menus: {
		m0: {
			m0: ["홈", _$.site.path + "/", "main" ],
			m1: ["독립메뉴", _$.site.path + "/", "indy" ],
			m2: ["팝업메뉴", _$.site.path + "/", "popup" ]
		},
		m1: { // 1depth
			m0: ["서브1메인", _$.site.path + "/html/sub/01.html", "sub"],
			m1: ["서브1메뉴1", _$.site.path + "/html/sub/01_01.html", "sub"],
			m2: ["서브1메뉴2", _$.site.path + "/html/sub/01_02.html", "sub"],
			m3: ["서브1메뉴3", _$.site.path + "/html/sub/01_03.html", "sub"]
		},
		m2: { // 1depth
			m0: ["서브2메인", _$.site.path + "/html/sub/02.html", "sub"],
			m1: ["서브2메뉴1", _$.site.path + "/html/sub/02_01.html", "sub"],
			m2: ["서브2메뉴2", _$.site.path + "/html/sub/02_02.html", "sub"],
			m3: ["서브2메뉴3", _$.site.path + "/html/sub/02_03.html", "sub"]
		}
	}
};

/* ☆
console.log(_$.site.IA.menus); // object
console.log(_$.site.IA.menus.__proto__.arguments); // undefined
console.log(Object.keys(_$.site.IA.menus).length); // 3
for(var i in _$.site.IA.menus){ //
	console.log(eval('_$.site.IA.menus.'+i));
}

console.log(_$.site.IA.menus.m0.m0);
console.log(_$.site.IA.menus.m1.m0);
console.log(_$.site.IA.menus.m1.m1);
console.log(_$.site.IA.menus.m1.m2);
console.log(_$.site.IA.menus.m1.m3);
console.log(_$.site.IA.menus.m1.m3[0]);
console.log(_$.site.IA.menus.m1.m3[1]);
console.log(_$.site.IA.menus.m1.m3[2]);
console.log(_$.site.IA.menus.m1.m3[3]); // undefined
 */