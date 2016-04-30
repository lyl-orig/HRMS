package com.cqut.service.duty;

import java.util.List;



import org.apache.ibatis.annotations.Param;

import com.cqut.entity.Duty;

public interface DutyService {

	public int insertDuty(Duty duty);
	
	public int updateDuty(Duty duty);
	
	public int deleteDuty(int EId);
	
	public List<Duty> getAlldDutys(String where);
	
	public Duty getDutyById(int EId);
	
	public List<Duty> getDutyByName(String name);
}
