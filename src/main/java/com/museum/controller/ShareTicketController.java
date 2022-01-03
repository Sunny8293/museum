package com.museum.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;

import com.museum.service.ShareTicketService;

@Controller
public class ShareTicketController {
	
	@Autowired
	ShareTicketService ss;
}
