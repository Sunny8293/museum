package com.museum.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;

import com.museum.service.VocService;

@Controller
public class VocController {
	
	@Autowired
	VocService vs;
}
