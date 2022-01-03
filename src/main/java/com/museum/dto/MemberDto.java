package com.museum.dto;

import lombok.Data;

@Data
public class MemberDto {
	private String id;
	private String pwd;
	private String name;
	private String email;
	private String phone;
	private String admin_yn;
}
