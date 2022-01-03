package com.museum.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.museum.dao.IExhibitionDao;

@Service
public class ExhibitionService {
	
	@Autowired
	IExhibitionDao edao;
}
