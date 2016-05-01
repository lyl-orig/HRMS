package com.cqut.controller.permission;

import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import net.sf.json.JSONArray;
import net.sf.json.JSONObject;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.cqut.entity.Permission;
import com.cqut.service.permission.PermissionService;
import com.cqut.util.JSON;
import com.google.common.collect.Maps;

@Controller
@RequestMapping(value="/Permission")
public class PermissionController {

	@Resource
	private PermissionService permissionService;
	
	@RequestMapping(value="insertPermission")
	@ResponseBody
	public String insertPermission(@RequestBody Permission permission){
		
		Map<String, Object> jsonObject = Maps.newHashMap();
		
		int result = permissionService.insertPermission(permission);
		if(result==0){
			jsonObject.put("insert", false);
		}else{
			jsonObject.put("insert", true);
		}
		return JSON.toJsonString(jsonObject);
	}
	
	@RequestMapping(value="updatePermission")
	@ResponseBody
	public String updatePermission(@RequestBody Permission permission){
		
		Map<String, Object> jsonObject = Maps.newHashMap();
		int result = permissionService.updatePermission(permission);
		if(result==0){
			jsonObject.put("update", false);
		}else{
			jsonObject.put("update", true);
		}
		return JSON.toJsonString(jsonObject);
	}
	
	@RequestMapping(value="deletePermission")
	@ResponseBody
	public String deletePermission(@RequestBody int EId){
		
		int result=permissionService.deletePermission(EId);
		Map<String, Object> jsonObject = Maps.newHashMap();
		
		if(result==0){
			jsonObject.put("del", false);
		}else{
			jsonObject.put("del", true);
		}
		return JSON.toJsonString(jsonObject);
	}
	
	@RequestMapping(value="getAllPermissions")
	@ResponseBody
	public String getAllPermissions(){
		
		List<Permission> permissios= permissionService.getAllPermissions();
		
		JSONArray jsonArray = JSONArray.fromObject(permissios);
		
		System.out.println(jsonArray.toString());
		
		return jsonArray.toString();
	}
	
	@RequestMapping(value="getPermissionById")
	@ResponseBody
	public String getPermissionById(@RequestBody int id){
		
		Permission permission = permissionService.getPermissionById(id);
		
		JSONObject jsonObject = JSONObject.fromObject(permission);  
		
		return JSON.toJsonString(jsonObject);
	}
}
