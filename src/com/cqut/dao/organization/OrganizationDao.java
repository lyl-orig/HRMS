package com.cqut.dao.organization;

import java.util.List;

import org.apache.ibatis.annotations.Param;

import com.cqut.entity.Organization;

public interface OrganizationDao {

	public int insertOrganization(Organization organization);
	
	public int updateOrganization(Organization organization);
	
	public int deleteOranization(Organization organization);
	
	public List<Organization> getOrganizations(@Param("where") String where);
	
	public Organization getOrganizationbyName(@Param("name") String name);
}
