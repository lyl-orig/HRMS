package com.cqut.dao.department;

import java.util.List;

import org.apache.ibatis.annotations.Param;

import com.cqut.entity.Department;

public interface DepartmentDao {
	
	public int insertDepartment(Department department);
	
	public int updateDepartment(Department department);
	
	public int deleteDepartment(Department department);
	
	public List<Department> getAllDepartments(@Param("where") String where);
	
	public List<Department> getDepartmentsByName(@Param("name") String name);
	
	public List<Department> getDepartmentsByOrgaId(@Param("organizationId") int organizationId);
	
	public Department getDepartmentsByOrgaIdAndName(@Param("name") String name, @Param("organizationId") int organizationId);

}
