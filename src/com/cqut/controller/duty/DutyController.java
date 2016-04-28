package com.cqut.controller.duty;

import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import net.sf.json.JSONArray;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.cqut.entity.Duty;
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
}
