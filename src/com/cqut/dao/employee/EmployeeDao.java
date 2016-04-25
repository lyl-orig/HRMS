package com.cqut.dao.employee;



import java.util.List;

import org.apache.ibatis.annotations.Param;

import com.cqut.entity.Employee;

public interface EmployeeDao {

	public Employee loginValidate(@Param("name") String name,@Param("password") String password) ;
	
	public int insertEmployee(Employee employee);
	
	public int deleteEmployee(Employee employee);
	
	public int updateEmployee(Employee employee);
	
	public List<Employee> getEmployee(@Param("where") String where);
	
	public Employee getEmployeeById(@Param("id") int id);
}
