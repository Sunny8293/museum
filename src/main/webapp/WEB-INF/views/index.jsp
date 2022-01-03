<%@ page language="java" contentType="text/html; charset=UTF-8"    pageEncoding="UTF-8"%>
<%@ include file="./header.jsp" %>

<script src="/script/museum.js"></script>
<div id="box1">
	<div id="wrapper">
		<div id="slider_wrap">
			<ul id="slider">
				<c:forEach items="${ExhibitionList}" var="exhibitionDto">
					<li>          
						<a href="exhibitionSpecialDetail?num=${exhibitionDto.num}">
							<img src="img/${exhibitionDto.img}" onerror="this.src='img/img_noImage.jpg'">
						</a>
	             	</li>
				</c:forEach>
			</ul>
          	
			<div class="btns" id="next"><img src="/img/icons8-chevron-right-60.png"></div>
			<div class="btns" id="previous"><img src="/img/icons8-chevron-left-60.png"></div>
		</div>
	</div>
</div>

<!-- 프로그램 -->
<div id="box2">
	<h2>프로그램</h2>
	<div id="wrapper">
		<div id="slider_wrap">
			<ul id="slider">
				<c:forEach items="${programList}" var="programDto">
					<li>      
						<a href="programDetail?num=${programDto.num}">     
							<img src="/img/${programDto.img}" onerror="this.src='/img/img_noImage.jpg'">
						</a>
					</li>
					<li>      
						<a href="programDetail&num=${programDto.num}">     
							<img src="img/img_main_exhibition_02" onerror="this.src='img/img_main_exhibition_02.jpg'">
						</a>
					</li>
				</c:forEach>
			</ul>     
		          
			<div class="btns" id="previous"><img src="img/icons8-chevron-left-60.png"></div>
			<div class="btns" id="next"><img src="img/icons8-chevron-right-60.png"></div>
		</div>
	</div>
</div> 

<!-- 공지사항 -->
<div id="box3">
	<h2>공지사항</h2>
	<table class="notice">
		<c:forEach items="${noticeList}" var="noticeDto">
			<tr>
				<td style="text-align: left;"><a href="noticeDetail&num=${noticeDto.num}">${noticeDto.title}</a></td>
				<td style="text-align: center;"><fmt:formatDate value="${noticeDto.writedate}" type="date"  pattern="yy.MM.dd"/></td>
			</tr>
		</c:forEach>
	</table>
</div>

<%@ include file="./footer.jsp" %>