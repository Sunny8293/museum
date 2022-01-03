package com.museum.dto;

import java.sql.Timestamp;

import lombok.Data;

@Data
public class ReplyTicketDto {
	private int num;
	private int ticket_num;
	private String member_id;
	private Timestamp writedate;
	private String content;
}
