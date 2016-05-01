package com.cqut.dao.permission;

import java.util.List;

import org.apache.ibatis.annotations.Param;

import com.cqut.entity.Permission;

public interface PermissionDao {

	public int insertPermission(Permission permissin);
	
	public int updatePermission(Permission permission);
	
	public int deletePermission(@Param("EId") int EId);
	
	public List<Permission> getAllPermissions();
	
	public Permission getPermissionById(@Param("EId") int EId);
	
	public int insertPermissionEmployee(@Param("permissionId") int permissionId,@Param("employeeId") int employeeId);
}
