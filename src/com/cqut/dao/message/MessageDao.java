package com.cqut.dao.message;

import java.util.List;

import org.apache.ibatis.annotations.Param;

import com.cqut.entity.Message;

public interface MessageDao {

	public int insertMessage(Message message);
	
	public List<Message> getAllMessages(@Param("where") String where);

}
