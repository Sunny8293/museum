
function search_relic()
{
	var searchName = $('.input_search').val();
	
	var category = document.getElementById('category').value;
	
	if(category == "2")
	{
		document.frm.action = 'museum.do?command=searchRelic&prev=treasureList&searchName=' + searchName;
		document.frm.submit();
	}
	else
	{
		document.frm.action = 'museum.do?command=searchRelic&prev=collectionList&searchName=' + searchName;
		document.frm.submit();
	}
}
