<%@page language="java" contentType="text/html; charset=utf-8"%>
<!doctype html>
<%--
/**
 * @File Name : gouri.jsp
 * @Description : Go to URI (select 요소와 이동 버튼을 이용한 바로가기 form 의 action 파일)
 * @Modification Information
 * <pre>
 * 수정일 | 수정자 | 수정내용
 * 2014.11.13 | 문영신 | 최초 등록
 * </pre>
 * @author 웹표준화실 문영신
 * @since 2014.11.13
 *
 * @Copyright (C) IACTS.CO.KR All rights reserved.
 */
--%>
<html lang="ko"><head><meta charset="utf-8" />
<title>Go to URI</title>
</head>
<body>
<h1 style="display:none;">Go to URI</h1>
<%
String uri = request.getParameter("uri");
if(uri!=null && !uri.equals(""))
	response.sendRedirect(uri);
%>
</body>
</html>