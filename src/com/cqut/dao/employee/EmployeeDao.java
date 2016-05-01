package com.cqut.dao.employee;



import java.util.List;

import org.apache.ibatis.annotations.Param;

import com.cqut.entity.Employee;

public interface EmployeeDao {

	public Employee loginValidate(@Param("name") String name,@Param("password") String password) ;
	
	public int insertEmployee(Employee employee);
	
	public int deleteEmployee(Employee employee);
	
	public int updateEmployee(Employee employee);
	
	public List<Employee> getEmployee();
	
	public Employee getEmployeeById(@Param("id") int id);
	
	public List<Employee> getEmployeeByPermissionId(@Param("permissionId") int permissionId);
	
	public List<Employee> getEmployeeByDepartmentId(@Param("departmentId") int departmentId);
	
	public List<Employee> getEmployeeByName(@Param("name") String name);
	
	public List<Employee> getEmployeeByDepartmentIdAndName(@Param("departmentId") int departmentId,@Param("name") String name);
	
}
