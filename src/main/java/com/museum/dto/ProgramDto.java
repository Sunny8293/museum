package com.museum.dto;

import java.sql.Date;

import lombok.Data;

@Data
public class ProgramDto {
	private int num;
	private String title;
	private String content;
	private Date startdate;
	private Date enddate;
	private String place;
	private String target;
	private int entry_fee;
	private String status;
	private String img;
	private String detail_content;

}
