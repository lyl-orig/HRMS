package com.cqut.dao.department;

import java.util.List;

import org.apache.ibatis.annotations.Param;

import com.cqut.entity.Department;

public interface DepartmentDao {
	
	public int insertDepartment(Department department);
	
	public int updateDepartment(Department department);
	
	public int deleteDepartment(@Param("EId") int EId);
	
	public List<Department> getAllDepartments(@Param("where") String where);
	
	public List<Department> getDepartmentByName(@Param("name") String name);
	
	public List<Department> getDepartmentByOrgId(@Param("organizationId") int organizationId);
	
	public List<Department> getDepartmentByOrgIdAndName(@Param("organizationId") int organizationId,@Param("name") String name);
	
	public Department getDepartmentById(@Param("EId") int EId);
	
}
