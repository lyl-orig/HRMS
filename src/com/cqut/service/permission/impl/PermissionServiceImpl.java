package com.cqut.service.permission.impl;

import java.util.List;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.cqut.dao.permission.PermissionDao;
import com.cqut.entity.Permission;
import com.cqut.service.permission.PermissionService;

@Service
public class PermissionServiceImpl implements PermissionService{

	@Resource
	private PermissionDao permissionDao;
	
	@Transactional
	@Override
	public int insertPermission(Permission permissin) {
		// TODO Auto-generated method stub
		return permissionDao.insertPermission(permissin);
	}

	@Transactional
	@Override
	public int updatePermission(Permission permission) {
		// TODO Auto-generated method stub
		return permissionDao.insertPermission(permission);
	}

	@Transactional
	@Override
	public int deletePermission(int EId) {
		// TODO Auto-generated method stub
		return permissionDao.deletePermission(EId);
	}

	@Transactional
	@Override
	public List<Permission> getAllPermissions() {
		// TODO Auto-generated method stub
		return permissionDao.getAllPermissions();
	}

	@Transactional
	@Override
	public Permission getPermissionById(int EId) {
		// TODO Auto-generated method stub
		return permissionDao.getPermissionById(EId);
	}

}
