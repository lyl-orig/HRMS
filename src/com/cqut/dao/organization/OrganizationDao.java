package com.cqut.dao.organization;

import java.util.List;

import org.apache.ibatis.annotations.Param;

import com.cqut.entity.Organization;

public interface OrganizationDao {

	public int insertOrganization(Organization organization);
	
	public int updateOrganization(Organization organization);
	
	public int deleteOrganization(@Param("EId") int EId);
	
	public List<Organization> getOrganizations(@Param("where") String where);
	
	public List<Organization> getOrganizationByName(@Param("name") String name);
	
	public Organization getOrganizationById(@Param("EId") int EId);
}
