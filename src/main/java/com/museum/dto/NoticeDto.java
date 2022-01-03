package com.museum.dto;

import java.sql.Timestamp;

import lombok.Data;

@Data
public class NoticeDto {
	private int num;
	private String member_id;
	private String title;
	private String content;
	private Timestamp writedate;
	private int readcount;
}
