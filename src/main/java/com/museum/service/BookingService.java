package com.museum.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.museum.dao.IBookingDao;

@Service
public class BookingService {
	
	@Autowired
	IBookingDao bdao;
}
