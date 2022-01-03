<%@ page language="java" contentType="text/html; charset=UTF-8"   pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt"%>

<!DOCTYPE html>
<html>
<head>
	<meta charset="UTF-8">
	<title>박물관</title>
	
	<link href="/css/museum.css" rel="stylesheet">
	<link href="/css/table_btn.css" rel="stylesheet">
	
	<script src="script/member.js"></script>
	
	
	<script src="admin/script/admin_booking.js"></script>
	
</head>
<body>
	<div id="wrap">
		<header>
			<!-- 상단 메뉴-->
			<nav id="top_menu">
				<ul>
					<c:choose>
						<c:when test="${empty loginUser}">
							<li><a href="loginForm">로그인</a></li>
							<li><a href="agreement">회원가입</a></li>
						</c:when>
						<c:otherwise>
							<li>${loginUser.name}(${loginUser.id})</li>
							<li><a href="logout">로그아웃</a></li>
							<li>
								<c:if test='${loginUser.admin_yn=="0"}'>
									<a href="myPageForm?id=">마이페이지</a>
								</c:if>
							</li>
							<li>
								<c:if test='${loginUser.admin_yn=="1"}'>
									<a href="adminPageForm?id=">관리자페이지</a>
								</c:if>
							</li>
						</c:otherwise>
					</c:choose>
				</ul>
			</nav>

			<!-- 메인로고 -->
			<div id="logo">
				<a href="main"> 
					<img src="/img/logo.png" width="200" height="40" />
				</a>
			</div>
			<br>

			<!-- <nav> 카테고리 메뉴-->
			<nav id="category_menu">
				<ul>
					<li>
						<a href="greeting">박물관 안내</a>
						<ul>
							<li><a href="greeting">인사말</a></li>
							<li><a href="architecturalOverview">시설 소개</a></li>
							<li><a href="tourGuidance">관람 안내</a></li>
							<li><a href="subway">오시는 길</a></li>
						</ul>
					</li>

					<li>
						<a href="exhibitionPermanent">전시</a>
						<ul>
							<li><a href="exhibitionPermanent">상설 전시</a></li>
							<li><a href="exhibitionSpecialList?kind=1">특별 전시</a></li>
						</ul>
					</li>

					<li>
						<a href="programList">프로그램</a>
						<ul>
							<li><a href="programList">안내 및 신청</a></li>
						</ul>
					</li>

					<li>
						<a href="collectionList">소장품</a>
						<ul>
							<li><a href="collectionList">소장품 검색</a></li>
							<li><a href="treasureList">유물 검색</a></li>
						</ul>
					</li>

					<li>
						<a href="noticeList">소식&middot;참여</a>
						<ul>
							<li><a href="noticeList">공지사항</a></li>
							<li><a href="vocList">고객의 소리</a></li>
							<li><a href="ticketList">티켓 나눔터</a></li>
						</ul>
					</li>
				</ul>
			</nav>
		</header>