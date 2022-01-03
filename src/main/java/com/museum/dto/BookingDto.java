package com.museum.dto;

import lombok.Data;

@Data
public class BookingDto {
	private int num;
	private String member_id;
	private int program_num;
	private String name;
	private String phone;
	private String email;
	private String personal_info_yn;
}
