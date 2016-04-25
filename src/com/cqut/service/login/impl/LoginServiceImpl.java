package com.cqut.service.login.impl;

import javax.annotation.Resource;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.cqut.dao.login.LoginDao;
import com.cqut.entity.Employee;
import com.cqut.service.login.LoginService;

@Service

public class LoginServiceImpl implements LoginService{

	@Resource 
	private  LoginDao loginDao;
	
	@Transactional
	@Override
	public Employee loginCheck(String name, String password) {
		
		return loginDao.loginCheck(name, password);
	}

}
