package com.cqut.controller.message;

import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import net.sf.json.JSONArray;
import net.sf.json.JSONObject;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.cqut.entity.Duty;
import com.cqut.entity.Message;
import com.cqut.service.message.MessageService;
import com.cqut.util.JSON;
import com.google.common.collect.Maps;

@Controller
@RequestMapping(value="/Message")
public class MessageController {

	@Resource
	private MessageService messageService;
	
	@RequestMapping(value="insertMessage")
	@ResponseBody
	public String insertMessage(@RequestBody Message message){
		
		int result=messageService.insertMessage(message);
		Map<String, Object> jsonObject = Maps.newHashMap();
		if(result==0){
			jsonObject.put("insert", false);
		}else{
			jsonObject.put("insert", true);
		}
		return JSON.toJsonString(jsonObject);
	}
	@RequestMapping(value="getAllMessages")
	@ResponseBody
	public String getAllMessages(){
		
		List<Message> messages= messageService.getAllMessages("");

		JSONArray jsonArray = JSONArray.fromObject(messages);
		
		System.out.println(jsonArray.toString());
		
		return jsonArray.toString();
	}
	
	@RequestMapping(value="getMessageById")
	@ResponseBody
	public String getMessageById(@RequestBody int id){
		
		Message result = messageService.getMessageById(id);

		JSONObject jsonObject = JSONObject.fromObject(result);  
		
		System.out.println(jsonObject.toString());
		
		return JSON.toJsonString(jsonObject);
	}
}
