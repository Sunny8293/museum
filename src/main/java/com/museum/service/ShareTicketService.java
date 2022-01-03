package com.museum.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.museum.dao.IShareTicketDao;

@Service
public class ShareTicketService {

	@Autowired
	IShareTicketDao sdao;
}
