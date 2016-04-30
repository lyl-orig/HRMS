package com.cqut.service.organization.impl;

import java.util.List;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.cqut.dao.organization.OrganizationDao;
import com.cqut.entity.Organization;
import com.cqut.service.organization.OrganizationService;

@Service
public class OrganizationServiceImpl implements OrganizationService{

	@Resource
	private OrganizationDao organizationDao;
	
	@Transactional
	@Override
	public int insertOrganization(Organization organization) {
		
		return organizationDao.insertOrganization(organization);
	}

	@Transactional
	@Override
	public List<Organization> getOrganizations(String where) {
		
		return organizationDao.getOrganizations(where);
	}

	@Transactional
	@Override
	public Organization getOrganizationById(int id) {
		
		return organizationDao.getOrganizationById(id);
	}

	@Transactional
	@Override
	public List<Organization> getOrganizationByName(String name) {
		
		return organizationDao.getOrganizationByName(name);
	}

	@Transactional
	@Override
	public int deleteOrganization(int EId) {
		
		return organizationDao.deleteOrganization(EId);
	}

	@Transactional
	@Override
	public int updateOrganization(Organization organization) {
	
		return organizationDao.updateOrganization(organization);
	}

}
