package com.museum.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.museum.dao.IReplyTicketDao;

@Service
public class ReplyTicketService {

	@Autowired
	IReplyTicketDao rdao;
	
}
