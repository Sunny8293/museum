function loginCheck() 
{
	if(document.loginFrm.id.value == "")
	{
		alert("아이디를 입력하세요");
		
		document.loginFrm.id.focus();
		
		return false;
	}
	if(document.loginFrm.pwd.value == "")
	{
		alert("비밀번호를 입력하세요");
		
		document.loginFrm.pwd.focus();
		
		return false;
	}
	
	return true;
}

function go_next_signup()
{ 
	if( (document.agreementFrm.okon1[0].checked == true )
		&& (document.agreementFrm.okon2[0].checked == true))
	{			
		document.agreementFrm.action ="museum.do?command=signupForm";
		document.agreementFrm.submit();		
	}
	else
	{
		alert('모든 약관에 동의하셔야 회원 가입이 가능합니다.');	 
	}
}

function idcheck()
{
	if( document.signupForm.id.value=="" )
	{
		alert("아이디를 입력하세요" );
		
		documnet.signupForm.id.focus();
		
		return;
	}
	
	var url = "museum.do?command=idCheck&id="+document.signupForm.id.value;
	var opt = "toolbar=no, menubar=no, resizable=no, width=500, height=250";
	
	window.open(url, "idCheck", opt);
}

function idok(userid)
{
	opener.signupForm.id.value=userid;
	opener.signupForm.reid.value=userid;
	
	self.close();
}

function go_save_signup()
{
	if(document.signupForm.name.value=="")
	{
		alert("성명 입력은 필수사항입니다");
		
		document.signupForm.name.focus();
	}
	else if(document.signupForm.id.value=="")
	{
		alert("아이디 입력은 필수사항입니다");
		
		document.signupForm.id.focus();
	}
	else if(document.signupForm.reid.value != document.signupForm.id.value)
	{
		alert("아이디 중복확인을 하지 않았습니다");
		
		document.signupForm.id.focus();
	}
	else if(document.signupForm.pwd.value=="")
	{
		alert("비밀번호 입력은 필수사항입니다");
		
		document.signupForm.pwd.focus();
	}
	else if(document.signupForm.pwdCheck.value != document.signupForm.pwdCheck.value)
	{
		alert("비밀번호 확인이 일치하지 않습니다");
		
		document.signupForm.pwdCheck.focus();
	}
	else if(document.signupForm.email.value =="")
	{
		alert("이메일 입력은 필수사항입니다");
		
		document.signupForm.email.focus();
	}
	else if(document.signupForm.phone.value=="")
	{
		alert("전화번호 입력은 필수사항입니다");
		
		document.signupForm.phone.focus();
	}
	else if(document.signupForm.admin_yn.value=="0")
	{
		alert('[' + document.signupForm.id.value + '] 님이 가입되었습니다.');
		
		document.signupForm.action = "museum.do?command=signup";
		document.signupForm.submit();
	}
	else
	{
		alert('관리자 계정 [' +document.signupForm.id.value+ ']이 생성되었습니다');
		
		document.signupForm.action="museum.do?command=signup";
		document.signupForm.submit();
	}
}

function go_update_member()
{
	if (document.signupForm.pwd.value == "") 
	{
	    alert("비밀번호를 입력해 주세요.");

	    document.signupForm.pwd.focus();
	}
	else if ((document.signupForm.pwd.value != document.signupForm.pwdCheck.value)) 
	{
	    alert("비밀번호가 일치하지 않습니다.");

	    document.signupForm.pwd.focus();
	}
	else if (document.signupForm.email.value == "") 
	{
	    alert("전화번호를 입력해 주세요.");

	    document.signupForm.email.focus();
	} 
	else if (document.signupForm.phone.value == "") 
	{
	    alert("이메일을 입력해 주세요.");

	    document.signupForm.phone.focus();
	}
	else 
	{
		alert(' 회원정보 수정이 완료되었습니다 ');
		
	    document.signupForm.action = "museum.do?command=memberEdit";
	    document.signupForm.submit();
	}
}

function go_delete_member()
{
	if(document.signupForm.pwdCheck.value=="")
	{
		alert("탈퇴하시려면 비밀번호 확인이 필요합니다");
		
		document.signupForm.pwdCheck.focus();	
		
	}
	else if(document.signupForm.pwd.value==document.signupForm.pwdCheck.value)
	{
		alert("회원탈퇴가 완료되었습니다");
		
		document.signupForm.action = "museum.do?command=memberDelete";
		document.signupForm.submit();
	}
	else
	{
		alert("비밀번호가 틀렸습니다");
		
		document.signupForm.pwdCheck.focus();
	}
}

function find_id()
{
	var url = "museum.do?command=findIdPwd";
	var opt = "toolbar=no,menubar=no,scrollbars=no,resizable=no,width=700,";
	opt = opt + "height=500, top=300, left=300";
	window.open(url, "Find Id/Pw", opt);
}