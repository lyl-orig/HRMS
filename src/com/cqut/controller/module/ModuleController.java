package com.cqut.controller.module;

import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import net.sf.json.JSONArray;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.cqut.entity.Module;
import com.cqut.service.module.ModuleService;
import com.cqut.util.JSON;
import com.google.common.collect.Maps;

@Controller
@RequestMapping(value="/Module")
public class ModuleController {

	@Resource 
	private ModuleService moduleService;
	
	@RequestMapping(value="insertModule")
	@ResponseBody
	public String insertModule(@RequestBody Module module){
		
		Map<String, Object> jsonObject = Maps.newHashMap();
		
		int result=moduleService.insertModule(module);
		
		if(result==0){
			jsonObject.put("insert", false);
		}else{
			jsonObject.put("insert", true);
		}
	
		return JSON.toJsonString(jsonObject);
	}
	
	@RequestMapping(value="getModules")
	@ResponseBody
	public String getModules(){
		
		List<Module> modules= moduleService.getModules("");

		JSONArray jsonArray = JSONArray.fromObject(modules);
		System.out.println(jsonArray.toString());
		
		return jsonArray.toString();
	}
	
}
