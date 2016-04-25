package com.cqut.controller.login;

import java.util.Map;

import javax.annotation.Resource;
import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletResponse;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.cqut.DispatcheFilter;
import com.cqut.entity.Employee;
import com.cqut.service.login.LoginService;
import com.cqut.util.JSON;
import com.google.common.collect.Maps;

@Controller
@RequestMapping(value="/Login")
public class LoginController {
	
	final static Logger LOGGER = LoggerFactory.getLogger(LoginController.class);
	@Resource
	private LoginService loginService;
	
	@RequestMapping(value="loginCheck")
	@ResponseBody
	public String loginCheck(@RequestBody Employee employee, HttpServletResponse response){
		Map<String, Object> jsonObject = Maps.newHashMap();
		
		Employee result =loginService.loginCheck(employee.getName(), employee.getPassword());
		
		jsonObject.put("login", false);
		String resultStr=com.cqut.util.JSON.toJsonString(result);
		
		if(result!=null){
			jsonObject.put("login", true);
			jsonObject.put("loginer", resultStr);
			Cookie userName = new Cookie(DispatcheFilter.LOGIN_USERNAME, result.getName());
	        Cookie password = new Cookie(DispatcheFilter.LOGIN_PASSWORD, result.getPassword());
            userName.setPath("/");
            password.setPath("/");
            userName.setMaxAge(60 * 30);
            password.setMaxAge(60 * 30);
            response.addCookie(userName);
            response.addCookie(password);
            LOGGER.info("用户名[{}],登录成功", result.getName());
		}else{
			LOGGER.info("用户名[{}],登录失败", result.getName());
		}
		
		System.out.println(resultStr);
		return JSON.toJsonString(jsonObject);
	}
	
}
