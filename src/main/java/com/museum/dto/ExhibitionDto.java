package com.museum.dto;

import java.sql.Date;

import lombok.Data;

@Data
public class ExhibitionDto {
	private int num;
	private String title;
	private String place;
	private Date startdate;
	private Date enddate;
	private String img;
	private String detail_content;
}
