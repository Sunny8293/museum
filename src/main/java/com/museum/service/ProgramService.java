package com.museum.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.museum.dao.IProgramDao;

@Service
public class ProgramService {
	
	@Autowired
	IProgramDao pdao;
}
