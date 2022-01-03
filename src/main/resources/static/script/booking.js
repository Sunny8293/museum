function go_booking(num)
{
	document.frm.action ="museum.do?command=bookingForm&num="+num;
	document.frm.submit();
}

/*신규*/
function go_booking_save_program()
{
	if (document.frmbooking.name.value == "") 
	{
		alert("이름 입력은 필수사항입니다.");
		
		document.frmbooking.name.focus();
	}
	else if (document.frmbooking.phone.value == "") 
	{
		alert("전화번호 입력은 필수사항입니다.");
		
		document.frmbooking.phone.focus();
	} 
	else if (document.frmbooking.personal_info_yn.value == "0") 
	{
		alert("개인정보 수집 동의에 체크해주세요.");
		
		document.frmbooking.personal_info_yn.focus();
	} 
	else 
	{	
		if(confirm("예약이 완료되었습니다."))
		{
			document.frmbooking.action = "museum.do?command=booking";
			document.frmbooking.submit();
		}
	}
}

/*취소*/
function go_cancel_booking(num)
{
	if( confirm('예약을 취소하시겠습니까?') )
	{
		alert('예약이 취소되었습니다.');
		
		document.frm.action = "museum.do?command=bookingCancel&num="+num;
		document.frm.submit();
	}
}

/*변경*/
function go_update_booking(num)
{
	var url = "museum.do?command=bookingUpdateForm&num=" + num;
	location.href = url;
}

function go_update_save_booking()
{
	if (document.frmbooking.name.value == "") 
	{
		alert("이름 입력은 필수사항입니다.");
		
		document.frmbooking.name.focus();
	}
	else if (document.frmbooking.phone.value == "") 
	{
		alert("전화번호 입력은 필수사항입니다.");
		
		document.frmbooking.phone.focus();
	} 
	else if (document.frmbooking.personal_info_yn.value == "0") 
	{
		alert("개인정보 수집 동의에 체크해주세요.");
		
		document.frmbooking.personal_info_yn.focus();
	} 
	else 
	{	
		if(confirm("예약을 변경하시겠습니까?"))
		{
			alert('예약이 변경되었습니다.');
		
			document.frmbooking.action = "museum.do?command=bookingUpdate";
			document.frmbooking.submit();
		}
	}
}

function go_mov_booking()
{
	location.href = "museum.do?command=bookingList"
}