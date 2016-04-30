package com.cqut.service.module;

import java.util.List;



import org.apache.ibatis.annotations.Param;

import com.cqut.entity.Module;

public interface ModuleService {

	public int insertModule(Module module);
	
	public int updateModule(Module module);
	
	public int deleteModule(int moduleId);
	
	public List<Module> getModules(String where);
	
	public Module getModuleById(int EId);
	
	public List<Module> searchModuleByName(String name);
}
