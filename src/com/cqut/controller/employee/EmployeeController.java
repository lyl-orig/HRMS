package com.cqut.controller.employee;



import java.util.List;
import java.util.Map;

import javax.annotation.Resource;
import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletResponse;

import net.sf.json.JSONArray;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.cqut.DispatcheFilter;
import com.cqut.entity.Employee;
import com.cqut.entity.Organization;
import com.cqut.service.employee.EmployeeService;
import com.cqut.util.JSON;
import com.google.common.collect.Maps;


@Controller
@RequestMapping(value = "/Employee")
public class EmployeeController {

	@Resource
	private EmployeeService employeeService;
	
	@RequestMapping(value="insertEmployee")
	@ResponseBody
	public String insertEmployee(@RequestBody Employee employee)
	{
	
		Map<String, Object> jsonObject = Maps.newHashMap();
		
		int result = employeeService.insertEmployee(employee);
		if(result==0){
			jsonObject.put("insert", false);
		}else{
			jsonObject.put("insert", true);
		}
		
		return JSON.toJsonString(jsonObject);
	}
	
	@RequestMapping(value="getEmployeeByPermissionId")
	@ResponseBody
	public String getEmployeeByPermissionId(@RequestBody int permissionId){
		
		List<Employee> result = employeeService.getEmployeeByPermissionId(permissionId);

		Map<String,Object> jsonObject = Maps.newHashMap();
		
		JSONArray jsonArray = JSONArray.fromObject(result);
		
		jsonObject.put("employee", jsonArray.toString());
		
		System.out.println(jsonArray.toString());
		
		return JSON.toJsonString(jsonObject);
	}
	@RequestMapping(value="getEmployeeByDepartmentId")
	@ResponseBody
	public String getEmployeeByDepartmentId(@RequestBody int departmentId){
		
		List<Employee> result = employeeService.getEmployeeByDepartmentId(departmentId);

		Map<String,Object> jsonObject = Maps.newHashMap();
		
		JSONArray jsonArray = JSONArray.fromObject(result);
		
		jsonObject.put("employee", jsonArray.toString());
		
		System.out.println(jsonArray.toString());
		
		return JSON.toJsonString(jsonObject);
	}
	
	@RequestMapping(value="getEmployeeByName")
	@ResponseBody
	public String getEmployeeByName(@RequestBody String name){
		
		List<Employee> result = employeeService.getEmployeeByName(name);

		Map<String,Object> jsonObject = Maps.newHashMap();
		
		JSONArray jsonArray = JSONArray.fromObject(result);
		
		jsonObject.put("employee", jsonArray.toString());
		
		System.out.println(jsonArray.toString());
		
		return JSON.toJsonString(jsonObject);
	}
	
	@RequestMapping(value="getEmployeeByDepartmentIdAndName")
	@ResponseBody
	public String getEmployeeByDepartmentIdAndName(@RequestBody  Employee employee){
		
		List<Employee> result = employeeService.getEmployeeByDepartmentIdAndName(employee.getDepartmentId(), employee.getName());

		Map<String,Object> jsonObject = Maps.newHashMap();
		
		JSONArray jsonArray = JSONArray.fromObject(result);
		
		jsonObject.put("employee", jsonArray.toString());
		
		System.out.println(jsonArray.toString());
		
		return JSON.toJsonString(jsonObject);
	}
	
	@RequestMapping(value="getEmployee")
	@ResponseBody
	public String getEmployee(){
		
		List<Employee> resultList = employeeService.getEmployee();
		
		JSONArray jsonArray = JSONArray.fromObject(resultList);
		
		System.out.println(jsonArray.toString());
		
		return jsonArray.toString();
	}
}
