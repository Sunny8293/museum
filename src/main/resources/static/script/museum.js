
// 메인화면 이미지 슬라이드
var pos_box1 = 0; // box1 슬라이드 현재 위치
var totalSlides_box1 = $('#box1 #slider_wrap ul li').length; // box1 슬라이드 이미지 전체 개수
var sliderWidth_box1 = $('#box1 #slider_wrap').width(); // box1 슬라이드 이미지 width

var pos_box2 = 0; // box2 슬라이드 현재 위치
var totalSlides_box2 = $('#box2 #slider_wrap ul li').length; // box2 슬라이드 이미지 전체 개수
var sliderWidth_box2 = $('#box2 #slider_wrap').width(); // box2 슬라이드 이미지 width

$(document).ready(function(){
	/*****************
	 BUILD THE SLIDER
	*****************/
	// set width to be 'x' times the number of slides
	$('#box1 #slider_wrap ul#slider').width(sliderWidth_box1 * totalSlides_box1);
	$('#box1 #slider_wrap #slider').width(sliderWidth_box1 * totalSlides_box1);
	
	$('#box1 #slider_wrap #slider li img').width(sliderWidth_box1);
	
	// box1 next slide  
	$('#box1 #next').click(function(){
	  slideRight_box1();
	});
	
	// box1 previous slide
	$('#box1 #previous').click(function(){
	  slideLeft_box1();
	});
	
	
	$('#box2 #slider_wrap ul#slider').width(sliderWidth_box2 * totalSlides_box2);
	$('#box2 #slider_wrap #slider').width(sliderWidth_box2 * totalSlides_box2);
	
	$('#box2 #slider_wrap #slider li img').width(sliderWidth_box2);
	
	// box2 next slide  
	$('#box2 #next').click(function(){
	  slideRight_box2();
	});
	
	// box2 previous slide
	$('#box2 #previous').click(function(){
	  slideLeft_box2();
	});
	
	/*************************
	 //*> OPTIONAL SETTINGS
	************************/
	//automatic slider
	var autoSlider = setInterval(slideRight_box1, 5000);
	
	//for each slide 
	$.each($('#box1 #slider_wrap ul li'), function() { 
	
	   //create a pagination
	   var li = document.createElement('li');
	   $('#pagination_wrap ul').append(li);    
	});
	
	//pagination
	pagination();
	
	//hide/show controls/btns when hover
	//pause automatic slide when hover
	$('#slider_wrap').hover(
	  function(){ $(this).addClass('active'); clearInterval(autoSlider); }, 
	  function(){ $(this).removeClass('active'); autoSlider = setInterval(slideRight_box1, 3000); }
	);
});//DOCUMENT READY


/***********
 SLIDE LEFT
************/
function slideLeft_box1()
{
 	pos_box1--;
	if(pos_box1 == -1)
	{ 
		pos_box1 = totalSlides_box1 - 1; 
	}
	
	$('#box1 #slider_wrap ul#slider').css('left', -(sliderWidth_box1 * pos_box1));  
	$('#box1 #slider_wrap #slider').css('left', -(sliderWidth_box1 * pos_box1));  
  
	pagination();
}


function slideLeft_box2()
{
	pos_box2--;
	if(pos_box2 == -1)
	{ 
		pos_box2 = totalSlides_box2 - 1; 
	}
	
	$('#box2 #slider_wrap ul#slider').css('left', -(sliderWidth_box2 * pos_box2));  
	$('#box2 #slider_wrap #slider').css('left', -(sliderWidth_box2 * pos_box2));  
}

/************
 SLIDE RIGHT
*************/
function slideRight_box1()
{
  	pos_box1++;
  	if(pos_box1 == totalSlides_box1)
	{ 
		pos_box1 = 0; 
	}
	
  	$('#box1 #slider_wrap ul#slider').css('left', -(sliderWidth_box1 * pos_box1)); 
  	$('#box1 #slider_wrap #slider').css('left', -(sliderWidth_box1 * pos_box1)); 
  
 	 pagination();
}

function slideRight_box2()
{
  	pos_box2++;
  	if(pos_box2 == totalSlides_box2)
	{ 
		pos_box2 = 0; 
	}
	
	$('#box2 #slider_wrap ul#slider').css('left', -(sliderWidth_box2 * pos_box2)); 
  	$('#box2 #slider_wrap #slider').css('left', -(sliderWidth_box2 * pos_box2)); 
}

/************************
 //*> OPTIONAL SETTINGS
************************/
function pagination()
{
  $('#box1 #pagination_wrap ul li').removeClass('active');
  $('#box1 #pagination_wrap ul li:eq('+pos_box1+')').addClass('active');
}


