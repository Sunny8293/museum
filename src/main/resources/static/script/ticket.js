function go_save_ticket()
{
	if( document.ticketWrite.title.value == "")
	{
		alert("제목을 입력하세요");
		
		document.ticketWrite.title.focus();
		
		return false;
	}
	else if (document.ticketWrite.content.value == "") 
	{
		alert("내용을 입력하세요.");
		
		document.ticketWrite.content.focus();
		
		return false;
	} 
	else 
	{
		alert("게시글이 등록되었습니다. 해당 게시판은 금전 거래를 금지합니다")
		
		document.ticketWrite.action = "museum.do?command=ticketWrite";
		document.ticketWrite.submit();
	}
}

function go_share_ticket()
{
	if(document.frm.title.value == "")
	{
		alert('제목을 입력하세요');
		
		document.frm.title.focus();
	} 
	else if(document.frm.content.value == "")
	{
		alert('내용을 입력하세요');
		
		document.frm.content.focus();
	}
	else
	{
		if( confirm('수정하시겠습니까?') )
		{
			document.frm.action="museum.do?command=ticketUpdate";
			document.frm.submit();
		}
		
	}
}

function go_delete_ticket(num)
{
	if( confirm('삭제하시겠습니까?') )
	{
		alert('삭제되었습니다.')
		
		document.frm.action = "museum.do?command=ticketDelete&prev=ticketList&num=" + num;
		document.frm.submit();
	}
}

function go_reply_submit()
{
	if(document.frm2.reply.value == "")
	{
		alert("댓글을 입력하세요.");	
		
		document.frm2.reply.focus();
		
		return false;
	}
	return true;
}

function go_reply_delete(replyTicketNum, num)
{
		alert("댓글이 삭제되었습니다");
		
		document.frm2.action = "museum.do?command=replyDelete&replyTicketNum=" + replyTicketNum + "&num=" + num;
		document.frm2.submit();	
}
