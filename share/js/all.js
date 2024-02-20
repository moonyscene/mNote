/*! All JavaScript v20150406.r20150406 | @MoonYoungshin[myshin@naver.com] | Private Licensed */
/**
 * JavaScript 파일 연결
 * YYYYMMDD. Last Developer. 
 * 20150406. MoonYoungshin. The first written.
 * ⓒMoonYoungshin[myshin@naver.com]
 * @since 20150406
 */


/* ◇◆ Function ◇◆◇◆◇◆◇◆◇◆◇◆◇◆◇◆ */

/** ◇◆ Get Internet Explorer Version v20130115 @MoonYoungShin.
 * Use) see ex()
 * Task) Local 에서도 될까?
 */

function getIEVer(){// Returns the version of Internet Explorer or a -1 for other browsers.
	var rv = -1;
	if(navigator.appName == 'Microsoft Internet Explorer'){
		var ua = navigator.userAgent;
		var re = new RegExp("MSIE ([0-9]{1,}[\.0-9]{0,})");
		if(re.exec(ua) != null) rv = parseFloat( RegExp.$1 );
	}
	return rv;
}
function ex(){ // ex()
	var version = getIEVer();
	if(version <= 7 && version > -1){
		// Code to run in Internet Explorer 7 or earlier.
	}
}