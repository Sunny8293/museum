package com.museum.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.museum.dao.IMemberDao;

@Service
public class MemberService {

	@Autowired
	IMemberDao mdao;
}
