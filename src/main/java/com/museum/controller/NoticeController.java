package com.museum.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;

import com.museum.service.NoticeService;

@Controller
public class NoticeController {
	
	@Autowired
	NoticeService ns;
}
