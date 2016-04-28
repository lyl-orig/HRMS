package com.cqut.service.message;

import java.util.List;

import com.cqut.entity.Message;

public interface MessageService {

	public int insertMessage(Message message);
	
	public List<Message> getAllMessages(String where);

}
