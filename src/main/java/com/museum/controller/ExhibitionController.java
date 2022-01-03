package com.museum.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import com.museum.service.ExhibitionService;

@Controller
public class ExhibitionController {

	@Autowired
	ExhibitionService es;
	


}
