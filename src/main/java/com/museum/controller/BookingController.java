package com.museum.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;

import com.museum.service.BookingService;

@Controller
public class BookingController {

	@Autowired
	BookingService bs;
}
