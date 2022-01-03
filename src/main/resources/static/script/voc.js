function go_save_voc() 
{
	if( document.vocWrite.title.value=="")
	{
		alert("제목을 입력하세요");
		
		document.vocWrite.title.focus();
		
		return false;
	}
	else if (document.vocWrite.content.value == "") 
	{
		alert("내용을 입력하세요.");
		
		document.vocWrite.content.focus();
		
		return false;
	} 
	else 
	{
		alert("회원님의 소중한 의견이 등록되었습니다")
		
		document.vocWrite.action = "museum.do?command=vocWrite";
		document.vocWrite.submit();
	}
}

function go_voc_update()
{
	if(document.frm.title.value=="")
	{
		alert('제목을 입력하세요');
		
		document.frm.title.focus();
	} 
	else if(document.frm.content.value=="")
	{
		alert('내용을 입력하세요');
		
		document.frm.content.focus();
	}
	else
	{
		if( confirm('수정하시겠습니까?') )
		{
			document.frm.action="museum.do?command=vocUpdate";
			document.frm.submit();
		}
		
	}
}

function go_voc_delete(num)
{
	if( confirm('삭제하시겠습니까?') )
	{
		alert("삭제되었습니다");
		
		document.frm.action = "museum.do?command=vocDelete&prev=vocList&num=" + num;
		document.frm.submit();
	}
}
