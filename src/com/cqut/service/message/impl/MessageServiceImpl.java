package com.cqut.service.message.impl;

import java.util.List;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.cqut.dao.message.MessageDao;
import com.cqut.entity.Message;
import com.cqut.service.message.MessageService;

@Service
public class MessageServiceImpl implements MessageService{

	@Resource
	private MessageDao messageDao;
	
	@Transactional
	@Override
	public int insertMessage(Message message) {
		
		return messageDao.insertMessage(message);
	}

	@Transactional
	@Override
	public List<Message> getAllMessages(String where) {
		
		return messageDao.getAllMessages(where);
	}

	@Transactional
	@Override
	public Message getMessageById(int EId) {
		// TODO Auto-generated method stub
		return messageDao.getMessageById(EId);
	}

}
