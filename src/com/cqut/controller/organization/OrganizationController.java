package com.cqut.controller.organization;

import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import net.sf.json.JSONArray; 
import net.sf.json.JSONObject;

import com.cqut.entity.Organization;
import com.cqut.service.organization.OrganizationService;
import com.cqut.util.JSON;
import com.google.common.collect.Maps;

@Controller
@RequestMapping(value="/Organization")
public class OrganizationController {

	@Resource
	private OrganizationService organizationService;
	
	@RequestMapping(value="insertOrganization")
	@ResponseBody
	public String insertOrganization(@RequestBody Organization organization){
		
		Map<String, Object> jsonObject = Maps.newHashMap();
		int result = organizationService.insertOrganization(organization);
		if(result==0){
			jsonObject.put("insert", false);
		}else{
			jsonObject.put("insert", true);
		}
		return JSON.toJsonString(jsonObject);
	}
	
	@RequestMapping(value="getOrganizations")
	@ResponseBody
	public String getOrganizations(){
		
		List<Organization> organizationList = organizationService.getOrganizations("");
		
		JSONArray jsonArray = JSONArray.fromObject(organizationList);
		
		System.out.println(jsonArray.toString());
		
		return jsonArray.toString();
	}
	
	@RequestMapping(value="getOrganizationById")
	@ResponseBody
	public String getOrganizationById(@RequestBody int id){
		
		Organization result=organizationService.getOrganizationById(id);

		JSONObject jsonObject = JSONObject.fromObject(result);  
		
		System.out.println(jsonObject.toString());
		
		return JSON.toJsonString(jsonObject);
	}
	
	@RequestMapping(value="getOrganizationByName")
	@ResponseBody
	public String getOrganizationByName(@RequestBody String name){
		
	
		List<Organization> oranizations = organizationService.getOrganizationByName(name);
		
		Map<String,Object> jsonObject = Maps.newHashMap();
		
		JSONArray jsonArray = JSONArray.fromObject(oranizations);
		
		jsonObject.put("oranizations", jsonArray.toString());
		
		System.out.println(jsonArray.toString());
		
		return JSON.toJsonString(jsonObject);
	}
	
	@RequestMapping(value="deleteOrganization")
	@ResponseBody
	public String deleteOrganization(@RequestBody int id){
		
		Map<String, Object> jsonObject = Maps.newHashMap();
		
		int result = organizationService.deleteOrganization(id);
		if(result==0){
			jsonObject.put("delete", false);
		}else{
			jsonObject.put("delete", true);
		}
		return JSON.toJsonString(jsonObject);
	}
	
	@RequestMapping(value="updateOrganization")
	@ResponseBody
     public String updateOrganization(@RequestBody Organization o){
		
		Map<String, Object> jsonObject = Maps.newHashMap();
		
		int result = organizationService.updateOrganization(o);
		if(result==0){
			jsonObject.put("update", false);
		}else{
			jsonObject.put("update", true);
		}
		return JSON.toJsonString(jsonObject);
	}
	
}
