package com.cqut.service.module.impl;

import java.util.List;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.cqut.dao.module.ModuleDao;
import com.cqut.entity.Module;
import com.cqut.service.module.ModuleService;

@Service
public class ModuleServiceImpl implements ModuleService{

	@Resource 
	private  ModuleDao moduleDao;
	
	@Transactional
	@Override
	public int insertModule(Module module) {
		
		return moduleDao.insertModule(module);
	}
	
	@Transactional
	@Override
	public int updateModule(Module module) {
		
		return moduleDao.updateModule(module);
	}
	@Transactional
	@Override
	public int deleteModule(int moduleId) {
		
		return moduleDao.deleteModule(moduleId);
	}
	
	@Transactional
	@Override
	public List<Module> getModules(String where) {
		
		return moduleDao.getModules("");
	}
	
	@Transactional
	@Override
	public Module getModuleById(int moduleId) {
		
		return moduleDao.getModuleById(moduleId);
	}

	@Transactional
	@Override
	public List<Module> searchModuleByName(String name) {
		
		return moduleDao.searchModuleByName(name);
	}

}
