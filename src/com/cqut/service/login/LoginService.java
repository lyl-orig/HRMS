package com.cqut.service.login;

import com.cqut.entity.Employee;

public interface LoginService {

	public Employee loginCheck(String name,String password);
}
