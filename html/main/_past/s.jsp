<!doctype html><html lang="ko"><head><meta charset="utf-8">
<meta name="viewport" content="width=device-width,maximum-scale=1,minimum-scale=1,user-scalable=no" />
<title>Script Test',
	pageType: 'default'
};
/*]]>*/</script>
<script type="text/javascript" src="../../share/inc/html_head.js"></script>
<style type="text/css">body{margin:10px;}</style>
<script type="text/javascript">
function getNow(){var now=new Date();
	now.t=""+(now.getSeconds()+now.getMilliseconds()*0.001);
	return now.t;
}
</script>
</head>
<body>

<script type="text/javascript">
	var n1=n2=sum=0;
	n1=getNow();
</script>
<%
int sum=0;
for(int i=0;i<10;i++){for(int j=0;j<10;j++){for(int k=0;k<10;k++){for(int l=0;l<1000;l++){sum++;}}}}
%>
<div id="contentsBlock"></div>
<script type="text/javascript">
	n2=getNow();
	e1=document.getElementById("contentsBlock");
	e1.innerHTML=n2+"-"+n1+"="+(n2-n1)+"<br />"+<%=sum%>;
</script>

</body>
</html>