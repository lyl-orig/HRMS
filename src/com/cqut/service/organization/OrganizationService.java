package com.cqut.service.organization;

import java.util.List;

import com.cqut.entity.Organization;

public interface OrganizationService {

	public int insertOrganization(Organization organization);
	
	public List<Organization> getOrganizations(String where);
	
}
