package com.cqut.service.organization;

import java.util.List;

import com.cqut.entity.Organization;

public interface OrganizationService {

	public int insertOrganization(Organization organization);
	
	public List<Organization> getOrganizations(String where);
	
	public Organization getOrganizationById(int id);
	
	public List<Organization> getOrganizationByName(String name);
	
	public int deleteOrganization(int EId);
	
	public int updateOrganization(Organization organization);
}
