package com.cqut.controller.employee;



import java.util.Map;

import javax.annotation.Resource;
import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletResponse;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.cqut.DispatcheFilter;
import com.cqut.entity.Employee;
import com.cqut.service.employee.EmployeeService;
import com.cqut.util.JSON;
import com.google.common.collect.Maps;


@Controller
@RequestMapping(value = "/Employee")
public class EmployeeController {

	@Resource
	private EmployeeService employeeService;
	
	/*@RequestMapping(value="loginCheck")
	@ResponseBody
	public String loginCheck(@RequestBody Employee employee , HttpServletResponse response){
		
		Map<String, Object> jsonObject = Maps.newHashMap();
		Employee result = employeeService.loginValidate(employee.getName(), employee.getPassword());
		
		Cookie userName = new Cookie(DispatcheFilter.LOGIN_USERNAME, result.getName());
        Cookie password = new Cookie(DispatcheFilter.LOGIN_PASSWORD, result.getPassword());
        response.addCookie(userName);
        response.addCookie(password);
        
        jsonObject.put("login", false);
		String resultStr=com.cqut.util.JSON.toJsonString(result);
		//System.out.println(resultStr);
		if(result!=null){
			jsonObject.put("login", true);
			jsonObject.put("loginer", resultStr);
		}
		return JSON.toJsonString(jsonObject);
	}
	*/
	@RequestMapping(value="insertEmployee")
	@ResponseBody
	public String insertEmployee(@RequestBody Employee employee)
	{
		//System.out.println(employee.getName());
		
		Map<String, Object> jsonObject = Maps.newHashMap();
		
		int result = employeeService.insertEmployee(employee);
		if(result==0){
			jsonObject.put("insert", false);
		}else{
			jsonObject.put("insert", true);
		}
		//System.out.println(jsonObject);
		return JSON.toJsonString(jsonObject);
	}
}
