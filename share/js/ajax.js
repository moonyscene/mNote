if ( typeof XMLHttpRequest == "undefined" ) {
	XMLHttpRequest = function(){
		return new ActiveXObject(navigator.userAgent.indexOf("MSIE 5") >= 0 ? "Microsoft.XMLHTTP" : "Msxml2.XMLHTTP");
	};
}

function ajax( options ) {
	options = {
		type: options.type || "POST", // HTTP 요청의 타입
		url: options.url || "", // 요청을 전달할 URL
		timeout: options.timeout || 5000, // 기본값 5초 내에 요청이 성공하지 못하면 타임아웃으로 처리
		onComplete: options.onComplete || function(){}, // 요청이 완료(실패 혹은 성공) 시 호출할 함수
		onError: options.onError || function(){}, // 요청이 실패 시 호출할 함수
		onSuccess: options.onSuccess || function(){}, // 요청이 성공 시 호출할 함수
		data: options.data || "" //  // 서버에서 반환할 데이터 타입 
	};
	var xml = new XMLHttpRequest();
	xml.open(options.type, options.url, true);
	var timeoutLength = 5000;
	var requestDone = false;
	setTimeout(function(){ // 타임아웃 검사
		 requestDone = true;
	}, timeoutLength);
	xml.onreadystatechange = function(){ // 응답 데이터 읽기
		if ( xml.readyState == 4 && !requestDone ) {
			if ( httpSuccess( xml ) ) {
				options.onSuccess( httpData( xml, options.data ) ); // options.data 데이터 타입
			} else {
				options.onError();
			}
			options.onComplete();
			xml = null;
		}
	};
	xml.send();
	function httpSuccess(r) { // 에러 처리
		try {
			return !r.status && location.protocol == "file:" ||
				( r.status >= 200 && r.status < 300 ) ||
				r.status == 304 ||
				navigator.userAgent.indexOf("Safari") >= 0 && typeof r.status == "undefined";
		} catch(e){}
		return false;
	}
	function httpData(r,type) { // 응답 데이터 처리
		var ct = r.getResponseHeader("content-type");
		var data = !type && ct && ct.indexOf("xml") >= 0;
		data = type == "xml" || data ? r.responseXML : r.responseText;
		if ( type == "script" )
			eval.call( window, data );
		return data;
	}
}
