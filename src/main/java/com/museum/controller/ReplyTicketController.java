package com.museum.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;

import com.museum.service.ReplyTicketService;

@Controller
public class ReplyTicketController {
	
	@Autowired
	ReplyTicketService rs;
}
