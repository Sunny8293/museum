package com.museum.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;

import com.museum.service.ProgramService;

@Controller
public class ProgramController {
	
	@Autowired
	ProgramService ps;
}
