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
		
		return departmentDao.updateDepartment(department);
	}

	@Override
	public int deleteDepartment(int EId) {
		
		return departmentDao.deleteDepartment(EId);
	}

	@Transactional
	@Override
	public List<Department> getAllDepartments(String where) {
		
		return departmentDao.getAllDepartments(where);
	}

	@Transactional
	@Override
	public List<Department> getDepartmentByName(String name) {
		// TODO Auto-generated method stub
		return departmentDao.getDepartmentByName(name);
	}

	@Transactional
	@Override
	public List<Department> getDepartmentByOrgId(int organizationId) {
		// TODO Auto-generated method stub
		return departmentDao.getDepartmentByOrgId(organizationId);
	}

	@Transactional
	@Override
	public List<Department> getDepartmentByOrgIdAndName(int organizationId,String name) 
	{
		return departmentDao.getDepartmentByOrgIdAndName(organizationId, name);
	}
	
	@Transactional
	@Override
	public Department getDepartmentById(int id) {
		
		return departmentDao.getDepartmentById(id);
	}

}
