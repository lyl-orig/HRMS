package com.cqut.service.department;

import java.util.List;

import org.apache.ibatis.annotations.Param;

import com.cqut.entity.Department;

public interface DepartmentService {

	public int insertDepartment(Department department);
	
	public int updateDepartment(Department department);
	
	public int deleteDepartment(Department department);
	
	public List<Department> getAllDepartments(String where);
	
	public List<Department> getDepartmentsByName(String name);
	
	public List<Department> getDepartmentsByOrgaId(int organizationId);
	
	public Department getDepartmentsByOrgaIdAndName(String name,int organizationId);
}
