package com.cqut.controller.module;

import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import net.sf.json.JSONArray;
import net.sf.json.JSONObject;

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
	
	@RequestMapping(value="getModuleById")
	@ResponseBody
	public String getModuleById(@RequestBody int id){
		
		Module result=moduleService.getModuleById(id);
		
		JSONObject jsonObject = JSONObject.fromObject(result);  
		
		//jsonObject.put("module", result);
		
		System.out.println(jsonObject.toString());
		
		return JSON.toJsonString(jsonObject);
	}
	
	@RequestMapping(value="updateModule")
	@ResponseBody
	public String updateModule(@RequestBody Module module){
			
		int result= moduleService.updateModule(module);
		
		Map<String, Object> jsonObject = Maps.newHashMap();
		
		if(result==0){
			jsonObject.put("update", false);
		}else{
			jsonObject.put("update", true);
		}
	
		return JSON.toJsonString(jsonObject);
	}
	
	@RequestMapping(value="deleteModule")
	@ResponseBody
	public String deleteModule(@RequestBody int moduleId){

		Map<String, Object> jsonObject = Maps.newHashMap();
		
		int result=moduleService.deleteModule(moduleId);
		
		if(result==0){
			jsonObject.put("delete", false);
		}else{
			jsonObject.put("delete", true);
		}
	
		return JSON.toJsonString(jsonObject);
	}
	
	@RequestMapping(value="searchModuleByName")
	@ResponseBody
	public String searchModuleByName(@RequestBody String name){
		
		List<Module> modules = moduleService.searchModuleByName(name);
		

		Map<String,Object> jsonObject = Maps.newHashMap();
		
		JSONArray jsonArray = JSONArray.fromObject(modules);
		
		jsonObject.put("modules", jsonArray.toString());
		
		System.out.println(jsonArray.toString());
		
		return JSON.toJsonString(jsonObject);

	}
	
}
