$(document).ready(function(){
	var strKind = document.getElementById('inputKind').value;
	
	if(strKind == 'bus')
	{
		// 버스
		$('#map_subMenu #kind2').css("border-bottom", "2px solid #000");
		$('#map_subMenu #kind2 a').css("color", "#000");
	}
	else if(strKind == 'car')
	{
		// 자기차량
		$('#map_subMenu #kind3').css("border-bottom", "2px solid #000");
		$('#map_subMenu #kind3 a').css("color", "#000");
	}
	else if(strKind == 'parking')
	{
		// 주차안내
		$('#map_subMenu #kind4').css("border-bottom", "2px solid #000");
		$('#map_subMenu #kind4 a').css("color", "#000");
	}
	else
	{
		// 지하철
		$('#map_subMenu #kind1').css("border-bottom", "2px solid #000");
		$('#map_subMenu #kind1 a').css("color", "#000");
	}
	
});