
$(document).ready(function(){
	var strKind = document.getElementById('inputKind').value;
	
	if(strKind == '2')
	{
		// 예정 전시
		$('#exhibition_subMenu #kind2').css("border-bottom", "2px solid #000");
		$('#exhibition_subMenu #kind2 a').css("color", "#000");
	}
	else if(strKind == '3')
	{
		// 지난 전시
		$('#exhibition_subMenu #kind3').css("border-bottom", "2px solid #000");
		$('#exhibition_subMenu #kind3 a').css("color", "#000");
	}
	else
	{
		// 현재 전시
		$('#exhibition_subMenu #kind1').css("border-bottom", "2px solid #000");
		$('#exhibition_subMenu #kind1 a').css("color", "#000");
	}
	
});
