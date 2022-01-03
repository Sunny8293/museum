package com.museum.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.museum.dao.IRelicDao;

@Service
public class RelicService {

	@Autowired
	IRelicDao rdao;
}
