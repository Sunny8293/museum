package com.museum.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.museum.dao.INoticeDao;

@Service
public class NoticeService {
	
	@Autowired
	INoticeDao ndao;
}
