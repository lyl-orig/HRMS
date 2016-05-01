package com.cqut.service.employee.impl;


import java.util.List;

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

	@Transactional
	@Override
	public List<Employee> getEmployeeByPermissionId(int permissionId) {
		// TODO Auto-generated method stub
		return employeeDao.getEmployeeByPermissionId(permissionId);
	}

	@Transactional
	@Override
	public List<Employee> getEmployeeByDepartmentId(int departmentId) {
		// TODO Auto-generated method stub
		return employeeDao.getEmployeeByDepartmentId(departmentId);
	}

	@Transactional
	@Override
	public List<Employee> getEmployeeByName(String name) {
		// TODO Auto-generated method stub
		return employeeDao.getEmployeeByName(name);
	}

	@Transactional
	@Override
	public List<Employee> getEmployeeByDepartmentIdAndName(int departmentId,
			String name) {
		// TODO Auto-generated method stub
		return employeeDao.getEmployeeByDepartmentIdAndName(departmentId, name);
	}

	@Transactional
	@Override
	public List<Employee> getEmployee() {
		// TODO Auto-generated method stub
		return employeeDao.getEmployee();
	}

}
