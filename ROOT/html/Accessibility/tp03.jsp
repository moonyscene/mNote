<%@page language="java" contentType="text/html; charset=utf-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="ko" lang="ko">
<head><%int d1n=1,d2n=8,d3n=1,d4n=1,d5n=0;String pageTitle="";%><%@include file="/share/inc/html_head.jsp"%></head>
<body class="<%=bodyClass%>">
<%@include file="/share/inc/head.jsp"%>
<!-- #wrap -->
<div id="wrap">
<%@include file="/share/inc/sidebar.jsp"%>
<!-- #body -->
<div id="body">
<%@include file="/share/inc/body_head.jsp"%>
<!-- #body_content -->
<div id="body_content">



<!-- hgroup1 -->
<div class="hgroup1">
<h2>가산산성</h2>
<div class="season1"><!-- ★@개발자. 화면설계에 설명 없어 title 속성값을 내맘대로 달아놨으니.. 올바르게 수정바람  -->
<span><img src="/img/c1/bt2s01off.gif" width="34" height="17" alt="봄" title="봄 추천안함" /></span>
<span><img src="/img/c1/bt2s02off.gif" width="34" height="17" alt="여름" title="여름 추천안함" /></span>
<span><img src="/img/c1/bt2s03on.gif" width="34" height="17" alt="가을" title="가을 강력추천" /></span>
<span><img src="/img/c1/bt2s04off.gif" width="34" height="17" alt="겨울" title="가을 추천안함" /></span>
</div>
<div class="btns">
<span class="m1 vod no">동영상 <span class="no">없음</span></span>
<span class="m1 vr no">VR <span class="no">없음</span></span>
<a class="m1 map" href="?">관광지도</a>
</div>
</div>
<!-- /hgroup1 -->

<!-- c1box -->
<div class="c1box">

<!-- c1pic -->
<div class="c1pic">
<h3>대표 이미지</h3>
<ul id="pt">
<li id="c1picm1"><a href="/share/ui/pic.asp?src=/img/c1/ex1.jpg&amp;alt=가산산성 사진" target="_blank" onclick="window.open(this.href,'','scrollbars=yes,resizable=yes,width=0,height=0,left=0,top=0'); return false;" title="가산산성 사진 원본 보기[새 창]"><span class="pic"><img src="/img/c1/ex1m.jpg" width="392" alt="가산산성 사진" /></span><span class="mask"></span><span class="subject">가산산성 사진</span></a></li>
<li id="c1picm2"><a href="/share/ui/pic.asp?src=/img/c1/ex2.jpg&amp;alt=가산산성 사진2" target="_blank" onclick="window.open(this.href,'','scrollbars=yes,resizable=yes,width=0,height=0,left=0,top=0'); return false;" title="가산산성 사진2 원본 보기[새 창]"><span class="pic"><img src="/img/c1/ex2m.jpg" height="392" alt="가산산성 사진2" /></span><span class="mask"></span><span class="subject">가산산성 사진2</span></a></li>
<li id="c1picm3"><a href="/share/ui/pic.asp?src=/img/c1/ex3.jpg&amp;alt=가산산성 사진3" target="_blank" onclick="window.open(this.href,'','scrollbars=yes,resizable=yes,width=0,height=0,left=0,top=0'); return false;" title="가산산성 사진3 원본 보기[새 창]"><span class="pic"><img src="/img/c1/ex3m.jpg" height="392" alt="가산산성 사진3" /></span><span class="mask"></span><span class="subject">가산산성 사진3</span></a></li>
<li id="c1picm4"><a href="/share/ui/pic.asp?src=/img/c1/ex4.jpg&amp;alt=가산산성 사진4" target="_blank" onclick="window.open(this.href,'','scrollbars=yes,resizable=yes,width=0,height=0,left=0,top=0'); return false;" title="가산산성 사진4 원본 보기[새 창]"><span class="pic"><img src="/img/c1/ex4m.jpg" height="392" alt="가산산성 사진4" /></span><span class="mask"></span><span class="subject">가산산성 사진4</span></a></li>
<li id="c1picm5"><a href="/share/ui/pic.asp?src=/img/c1/ex5.jpg&amp;alt=가산산성 사진5" target="_blank" onclick="window.open(this.href,'','scrollbars=yes,resizable=yes,width=0,height=0,left=0,top=0'); return false;" title="가산산성 사진5 원본 보기[새 창]"><span class="pic"><img src="/img/c1/ex5m.jpg" height="392" alt="가산산성 사진5" /></span><span class="mask"></span><span class="subject">가산산성 사진5</span></a></li>
<li id="c1picm6"><a href="/share/ui/pic.asp?src=/img/c1/ex6.jpg&amp;alt=가산산성 사진6" target="_blank" onclick="window.open(this.href,'','scrollbars=yes,resizable=yes,width=0,height=0,left=0,top=0'); return false;" title="가산산성 사진6 원본 보기[새 창]"><span class="pic"><img src="/img/c1/ex6m.jpg" height="392" alt="가산산성 사진6" /></span><span class="mask"></span><span class="subject">가산산성 사진6</span></a></li>
<li id="c1picm7"><a href="/share/ui/pic.asp?src=/img/c1/ex7.jpg&amp;alt=가산산성 사진7" target="_blank" onclick="window.open(this.href,'','scrollbars=yes,resizable=yes,width=0,height=0,left=0,top=0'); return false;" title="가산산성 사진7 원본 보기[새 창]"><span class="pic"><img src="/img/c1/ex7m.jpg" height="392" alt="가산산성 사진7" /></span><span class="mask"></span><span class="subject">가산산성 사진7</span></a></li>
</ul>
</div>
<!-- /c1pic -->

<!-- c1basic -->
<div class="c1basic">

<!-- c1pic2 -->
<div class="c1pic2">
<!-- c1pic2scroll -->
<div id="c1pic2scroll">
<ul id="c1pic2content">
<li><a href="#c1picm1" onclick="displayOnly('c1picm',30,1); return false;" title="가산산성 사진 크게 보기"><span class="pic"><img src="/img/c1/ex1s.jpg" width="92" alt="가산산성 사진" /></span><span class="mask"></span><span class="subject">가산산성 사진</span></a></li>
<li><a href="#c1picm2" onclick="displayOnly('c1picm',30,2); return false;" title="가산산성 사진2 크게 보기"><span class="pic"><img src="/img/c1/ex2s.jpg" width="92" alt="가산산성 사진2" /></span><span class="mask"></span><span class="subject">가산산성 사진2 아주 제목이 길고 험난하고 복잡하여</span></a></li>
<li><a href="#c1picm3" onclick="displayOnly('c1picm',30,3); return false;" title="가산산성 사진3 크게 보기"><span class="pic"><img src="/img/c1/ex3s.jpg" width="92" alt="가산산성 사진3" /></span><span class="mask"></span><span class="subject">가산산성 사진3</span></a></li>
<li><a href="#c1picm4" onclick="displayOnly('c1picm',30,4); return false;" title="가산산성 사진4 크게 보기"><span class="pic"><img src="/img/c1/ex4s.jpg" width="92" alt="가산산성 사진4" /></span><span class="mask"></span><span class="subject">가산산성 사진4</span></a></li>
<li><a href="#c1picm5" onclick="displayOnly('c1picm',30,5); return false;" title="가산산성 사진5 크게 보기"><span class="pic"><img src="/img/c1/ex5s.jpg" width="92" alt="가산산성 사진5" /></span><span class="mask"></span><span class="subject">가산산성 사진5</span></a></li>
<li><a href="#c1picm6" onclick="displayOnly('c1picm',30,6); return false;" title="가산산성 사진6 크게 보기"><span class="pic"><img src="/img/c1/ex6s.jpg" width="92" alt="가산산성 사진6" /></span><span class="mask"></span><span class="subject">가산산성 사진6</span></a></li>
<li><a href="#c1picm7" onclick="displayOnly('c1picm',30,7); return false;" title="가산산성 사진7 크게 보기"><span class="pic"><img src="/img/c1/ex7s.jpg" width="92" alt="가산산성 사진7" /></span><span class="mask"></span><span class="subject">가산산성 사진7</span></a></li>
</ul>
</div>
<!-- /c1pic2scroll -->
<script type="text/javascript">initmTicker(document.getElementById("c1pic2scroll"),document.getElementById("c1pic2content"),9999999999);</script>
<!-- control -->
<div class="control">
<a href="#c1pic2scroll" onclick="prevmTicker(document.getElementById('c1pic2scroll'));return false;" title="갤러리 이전 보기" class="prev"><img src="/img/c1/c1b1prev.gif" alt="이전" /></a>
<a href="#c1pic2scroll" onclick="nextmTicker(document.getElementById('c1pic2scroll'));return false;" title="갤러리 다음 보기" class="next"><img src="/img/c1/c1b1next.gif" alt="다음" /></a>
</div>
<!-- /control -->
</div>
<!-- /c1pic2 -->

</div>
<!-- /c1basic -->

</div>
<!-- /c1box -->

<!-- c1info1 -->
<div class="c1info1">
<p class="t1"><strong>수려한 산세의 가산산성</strong></p>
<div class="t2">
호국의 고장을 상징하는 대표적인 유적이다. 국가지정 사적 제216호(1971. 3.26)로 지정되었으며 포곡식 석성, 전략성구조이다. 
가산의 해발 901.6m에서 산골짜기를 에워싸 해발 600m에 이르도록 내·중·외성을 축조하였는데, 현재 사문지(四門址)와 암문(暗門)·
수구문(水口門)·건물지 등의 시설이 남아있다.
</div>
<dl class="t3">
<dt>주소</dt>
<dd>샘플 내용 샘플 내용 샘플 내용</dd>
<dt class="c2">문의전화</dt>
<dd class="c2">샘플 내용 샘플 내용 샘플 내용</dd>
<dt>관리처</dt>
<dd>샘플 내용 샘플 내용 샘플 내용</dd>
<dt class="c2">홈페이지주소</dt>
<dd class="c2">샘플 내용 샘플 내용 샘플 내용</dd>
</dl>
</div>
<!-- /c1info1 -->

<!-- c1tab1 -->
<div id="c1tab1" class="tab1 t2">
<ul>
<li id="c1tab1m1"><a href="tp02.asp">기본정보</a></li>
<li id="c1tab1m2"><a href="tp03.asp">주변정보</a></li>
<li id="c1tab1m3"><a href="tp04.asp">교통정보</a></li>
<li id="c1tab1m4"><a href="tp05.asp">블로그</a></li>
</ul>
</div>
<script type="text/javascript">initClickOn("c1tab1","c1tab1m1");</script>
<!-- /c1tab1 -->

<!-- c1c -->
<div class="c1c">

</div>
<!-- /c1c -->

<!-- btns -->
<p class="btns tac">
<img src="/img/c1/bt301.gif" width="200" height="28" alt="목록보기" />
</p>
<!-- /btns -->



</div>
<!-- //#body_content -->
<%@include file="/share/inc/body_foot.jsp"%>
</div>
<!-- //#body -->
</div>
<!-- //#wrap -->
<%@include file="/share/inc/foot.jsp"%>
</body>
</html>