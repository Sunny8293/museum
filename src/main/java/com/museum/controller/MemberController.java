package com.museum.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;

import com.museum.service.MemberService;

@Controller
public class MemberController {

	@Autowired
	MemberService ms;
}
