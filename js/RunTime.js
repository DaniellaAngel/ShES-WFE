function runtime(){
	var endDate=new Date(2016,8,11,23,59,59);//年月日时分秒，月要减去1
	var now=new Date();
	var oft=Math.round((endDate-now)/1000);
	var ofd=parseInt(oft/3600/24);
	var ofh=parseInt((oft%(3600*24))/3600);
	var ofm=parseInt((oft%3600)/60);
	var ofs=oft%60;
	document.getElementById('LeftTime').innerHTML='还有 '+ofd+' 天 ' +ofh+ ' 小时 ' +ofm+ ' 分钟 ' +ofs+ ' 秒';
	if(ofs<0){document.getElementById('LeftTime').innerHTML='倒计时结束！';return;};
	setTimeout('runtime()',1000);
}