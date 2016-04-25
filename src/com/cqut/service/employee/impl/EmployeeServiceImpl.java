package com.cqut.service.employee.impl;


import javax.annotation.Resource;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.cqut.dao.employee.EmployeeDao;
import com.cqut.entity.Employee;
import com.cqut.service.employee.EmployeeService;


@Service
public class EmployeeServiceImpl implements EmployeeService{

	@Resource
	private EmployeeDao employeeDao;
	
	@Transactional
	@Override
	public int insertEmployee(Employee employee) {
		
		return employeeDao.insertEmployee(employee);
	}

}
