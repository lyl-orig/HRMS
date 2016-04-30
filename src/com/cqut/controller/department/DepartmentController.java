package com.cqut.controller.department;

import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import net.sf.json.JSONArray;
import net.sf.json.JSONObject;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.cqut.entity.Department;
import com.cqut.entity.Node;
import com.cqut.service.department.DepartmentService;
import com.cqut.util.JSON;
import com.google.common.collect.Maps;

@Controller
@RequestMapping(value="/Department")
public class DepartmentController {

	@Resource
	private DepartmentService departmentService;
	
	@RequestMapping(value="insertDepartment")
	@ResponseBody
	public String insertDepartment(@RequestBody Department department){
		
		Map<String, Object> jsonObject = Maps.newHashMap();
		
		int result = departmentService.insertDepartment(department);
		
		if(result==0){
			jsonObject.put("insert", false);
		}else{
			jsonObject.put("insert", true);
		}
		return JSON.toJsonString(jsonObject);
	}
	
	@RequestMapping(value="getAllDepartments")
	@ResponseBody
	public String getAllDepartments(){
		
		List<Department> departments = departmentService.getAllDepartments("");
		
		JSONArray jsonArray = JSONArray.fromObject(departments);
		
		System.out.println(jsonArray.toString());
		
		return jsonArray.toString();
	}
	
	@RequestMapping(value="getDepartmentById")
	@ResponseBody
	public String getDepartmentById(@RequestBody int id){
		
		Department result= departmentService.getDepartmentById(id);
	
		JSONObject jsonObject = JSONObject.fromObject(result);  
		
		System.out.println(jsonObject.toString());
		
		return JSON.toJsonString(jsonObject);
	}
	
	@RequestMapping(value="deleteDepartment")
	@ResponseBody
	public String deleteDepartment(@RequestBody int id){

		Map<String, Object> jsonObject = Maps.newHashMap();
		
		int result = departmentService.deleteDepartment(id);
		
		if(result==0){
			jsonObject.put("delete", false);
		}else{
			jsonObject.put("delete", true);
		}
		return JSON.toJsonString(jsonObject);
	}
	
	@RequestMapping(value="updateDepartment")
	@ResponseBody
	public String updateDepartment(@RequestBody Department d){

		Map<String, Object> jsonObject = Maps.newHashMap();
		
		int result = departmentService.updateDepartment(d);
		
		if(result==0){
			jsonObject.put("update", false);
		}else{
			jsonObject.put("update", true);
		}
		return JSON.toJsonString(jsonObject);
	}
	
	@RequestMapping(value="getDepartmentByOrgIdAndName")
	@ResponseBody
	public String getDepartmentByOrgIdAndName(@RequestBody Department department){
		
		List<Department> departments = departmentService.getDepartmentByOrgIdAndName(department.getOrganizationId(),department.getName());
		Map<String,Object> jsonObject = Maps.newHashMap();
		
		JSONArray jsonArray = JSONArray.fromObject(departments);
		jsonObject.put("departments", jsonArray.toString());
		
		System.out.println(jsonArray.toString());
		
		return JSON.toJsonString(jsonObject);
	}

	@RequestMapping(value="getDepartmentByOrgId")
	@ResponseBody
	public String getDepartmentByOrgId(@RequestBody Department d){
		
		List<Department> departments = departmentService.getDepartmentByOrgId(d.getOrganizationId());
		
		Map<String,Object> jsonObject = Maps.newHashMap();
		
		JSONArray jsonArray = JSONArray.fromObject(departments);
		jsonObject.put("departments", jsonArray.toString());
		
		System.out.println(jsonArray.toString());
		
		return JSON.toJsonString(jsonObject);
	}

	@RequestMapping(value="getDepartmentByName")
	@ResponseBody
	public String getDepartmentByName(@RequestBody String name){
		
		List<Department> departments = departmentService.getDepartmentByName(name);
		
		Map<String,Object> jsonObject = Maps.newHashMap();
		
		JSONArray jsonArray = JSONArray.fromObject(departments);
		jsonObject.put("departments", jsonArray.toString());
		
		System.out.println(jsonArray.toString());
		
		return JSON.toJsonString(jsonObject);
	}

}
