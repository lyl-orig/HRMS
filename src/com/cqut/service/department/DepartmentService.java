package com.cqut.service.department;

import java.util.List;

import org.apache.ibatis.annotations.Param;

import com.cqut.entity.Department;

public interface DepartmentService {

	public int insertDepartment(Department department);
	
	public int updateDepartment(Department department);
	
	public int deleteDepartment(int EId);
	
	public List<Department> getAllDepartments(String where);
	
	public List<Department> getDepartmentByName(String name);
	
	public List<Department> getDepartmentByOrgId(int organizationId);
	
	public List<Department> getDepartmentByOrgIdAndName(int organizationId,String name);
	
	public Department getDepartmentById(int id);
}
