package com.cqut.dao.duty;

import java.util.List;

import org.apache.ibatis.annotations.Param;

import com.cqut.entity.Duty;

public interface DutyDao {

	public int insertDuty(Duty duty);
	
	public int updateDuty(Duty duty);
	
	public int deleteDuty(@Param("EId") int EId);
	
	public List<Duty> getAlldDutys(@Param("where") String where);
	
	public Duty getDutyById(@Param("EId") int EId);
	
	public List<Duty> getDutyByName(@Param("name") String name);
}
