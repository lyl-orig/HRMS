package com.cqut.service.duty;

import java.util.List;


import com.cqut.entity.Duty;

public interface DutyService {

	public int insertDuty(Duty duty);
	
	public List<Duty> getAlldDutys(String where);
}
