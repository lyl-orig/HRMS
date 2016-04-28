package com.cqut.dao.duty;

import java.util.List;

import org.apache.ibatis.annotations.Param;

import com.cqut.entity.Duty;

public interface DutyDao {

	public int insertDuty(Duty duty);
	
	public List<Duty> getAlldDutys(@Param("where") String where);
}
