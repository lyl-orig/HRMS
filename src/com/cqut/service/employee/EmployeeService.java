package com.cqut.service.employee;

import java.util.List;

import org.apache.ibatis.annotations.Param;

import com.cqut.entity.Employee;

public interface EmployeeService {
	 
	 public int insertEmployee(Employee employee);
	 
	 public List<Employee> getEmployee();
	 
	 public List<Employee> getEmployeeByPermissionId(int permissionId);
	 
	 public List<Employee> getEmployeeByDepartmentId(int departmentId);
		
	 public List<Employee> getEmployeeByName(String name);
		
	 public List<Employee> getEmployeeByDepartmentIdAndName(int departmentId,String name);
}
