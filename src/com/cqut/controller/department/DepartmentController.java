package com.cqut.controller.department;

import java.util.Map;

import javax.annotation.Resource;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.cqut.entity.Department;
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
	
}
