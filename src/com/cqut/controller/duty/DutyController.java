package com.cqut.controller.duty;

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
import com.cqut.entity.Organization;
import com.cqut.service.duty.DutyService;
import com.cqut.util.JSON;
import com.google.common.collect.Maps;

@Controller
@RequestMapping(value="/Duty")
public class DutyController {

	@Resource
	private DutyService dutyService;
	
	@RequestMapping(value="insertDuty")
	@ResponseBody
	public String insertDuty(@RequestBody Duty duty){
		
		int result= dutyService.insertDuty(duty);
		Map<String, Object> jsonObject = Maps.newHashMap();
		if(result==0){
			jsonObject.put("insert", false);
		}else{
			jsonObject.put("insert", true);
		}
		return JSON.toJsonString(jsonObject);
	}
	
	@RequestMapping(value="getAllDutys")
	@ResponseBody
	public String getAllDutys(){
		
		List<Duty> dutys= dutyService.getAlldDutys("");

		JSONArray jsonArray = JSONArray.fromObject(dutys);
		
		System.out.println(jsonArray.toString());
		
		return jsonArray.toString();
	}
	@RequestMapping(value="getDutyById")
	@ResponseBody
	public String getDutyById(@RequestBody int id){
		
		Duty result=dutyService.getDutyById(id);

		JSONObject jsonObject = JSONObject.fromObject(result);  
		
		System.out.println(jsonObject.toString());
		
		return JSON.toJsonString(jsonObject);
	}
	
	
	@RequestMapping(value="updateDuty")
	@ResponseBody
	public String updateDuty(@RequestBody Duty duty){
		
		int result= dutyService.updateDuty(duty);
		Map<String, Object> jsonObject = Maps.newHashMap();
		if(result==0){
			jsonObject.put("update", false);
		}else{
			jsonObject.put("update", true);
		}
		return JSON.toJsonString(jsonObject);
	}
	
	@RequestMapping(value="deleteDuty")
	@ResponseBody
	public String deleteDuty(@RequestBody int id){
		
		Map<String, Object> jsonObject = Maps.newHashMap();
		
		int result = dutyService.deleteDuty(id);
		if(result==0){
			jsonObject.put("delete", false);
		}else{
			jsonObject.put("delete", true);
		}
		return JSON.toJsonString(jsonObject);
	}
	
	@RequestMapping(value="getDutyByName")
	@ResponseBody
	public String getDutyByName(@RequestBody String name){
		
	
		List<Duty> dutys = dutyService.getDutyByName(name);
		
		Map<String,Object> jsonObject = Maps.newHashMap();
		
		JSONArray jsonArray = JSONArray.fromObject(dutys);
		
		jsonObject.put("dutys", jsonArray.toString());
		
		System.out.println(jsonArray.toString());
		
		return JSON.toJsonString(jsonObject);
	}
	
}
