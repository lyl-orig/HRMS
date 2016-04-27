package com.cqut.service.module;

import java.util.List;


import com.cqut.entity.Module;

public interface ModuleService {

	public int insertModule(Module module);
	
	public int updateModule(Module module);
	
	public int deleteModule(Module module);
	
	public List<Module> getModules(String where);
}
