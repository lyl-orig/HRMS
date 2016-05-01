package com.cqut.service.message;

import java.util.List;

import org.apache.ibatis.annotations.Param;

import com.cqut.entity.Message;

public interface MessageService {

	public int insertMessage(Message message);
	
	public List<Message> getAllMessages(String where);

	public Message getMessageById(int EId);
}
