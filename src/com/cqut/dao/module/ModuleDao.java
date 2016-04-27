package com.cqut.dao.module;

import java.util.List;

import org.apache.ibatis.annotations.Param;

import com.cqut.entity.Module;

public interface ModuleDao {

	public int insertModule(Module module);
	
	public int updateModule(Module module);
	
	public int deleteModule(Module module);
	
	public List<Module> getModules(@Param("where")String where);
}
