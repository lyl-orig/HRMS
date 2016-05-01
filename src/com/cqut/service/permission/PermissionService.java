package com.cqut.service.permission;

import java.util.List;

import org.apache.ibatis.annotations.Param;

import com.cqut.entity.Permission;

public interface PermissionService {

	public int insertPermission(Permission permissin);
	
	public int updatePermission(Permission permission);
	
	public int deletePermission(int EId);
	
	public List<Permission> getAllPermissions();
	
	public Permission getPermissionById(int EId);
}
