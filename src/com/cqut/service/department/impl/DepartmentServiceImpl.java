package com.cqut.service.department.impl;

import java.util.List;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.cqut.dao.department.DepartmentDao;
import com.cqut.entity.Department;
import com.cqut.service.department.DepartmentService;

@Service
public class DepartmentServiceImpl implements DepartmentService{

	@Resource
	private DepartmentDao departmentDao;
	
	@Transactional
	@Override
	public int insertDepartment(Department department) {
		
		return departmentDao.insertDepartment(department);
		
	}

	@Override
	public int updateDepartment(Department department) {
		// TODO Auto-generated method stub
		return 0;
	}

	@Override
	public int deleteDepartment(Department department) {
		// TODO Auto-generated method stub
		return 0;
	}

	@Transactional
	@Override
	public List<Department> getAllDepartments(String where) {
		
		return departmentDao.getAllDepartments(where);
	}

	@Override
	public List<Department> getDepartmentsByName(String name) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public List<Department> getDepartmentsByOrgaId(int organizationId) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public Department getDepartmentsByOrgaIdAndName(String name,
			int organizationId) {
		// TODO Auto-generated method stub
		return null;
	}

}
