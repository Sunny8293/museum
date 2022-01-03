package com.museum.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;

import com.museum.service.RelicService;

@Controller
public class RelicController {
	
	@Autowired
	RelicService rs;
	
}
