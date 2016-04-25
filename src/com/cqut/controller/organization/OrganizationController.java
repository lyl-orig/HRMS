package com.cqut.controller.organization;

import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import net.sf.json.JSONArray; 

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
}
