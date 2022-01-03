// 마이페이지 > 내가신청한 프로그램 > 예약확인 버튼  //  +document.bookingFrm.num.value
function mybooking()
{
	var opt = "toolbar=no, menubar=no, resizable=no, width=500, height=250";
	window.open("museum.do?command=mypageForm&id=", "", opt);
}
