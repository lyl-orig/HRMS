package com.cqut.service.duty.impl;

import java.util.List;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.cqut.dao.duty.DutyDao;
import com.cqut.entity.Duty;
import com.cqut.service.duty.DutyService;

@Service
public class DutyServiceImpl implements DutyService {

	@Resource
	private DutyDao dutyDao;
	
	@Transactional
	@Override
	public int insertDuty(Duty duty) {
		
		return dutyDao.insertDuty(duty);
	}

	@Transactional
	@Override
	public List<Duty> getAlldDutys(String where) {
		
		return dutyDao.getAlldDutys(where);
	}

	@Transactional
	@Override
	public Duty getDutyById(int EId) {
		// TODO Auto-generated method stub
		return dutyDao.getDutyById(EId);
	}

	@Transactional
	@Override
	public int updateDuty(Duty duty) {
		// TODO Auto-generated method stub
		return dutyDao.updateDuty(duty);
	}

	@Transactional
	@Override
	public int deleteDuty(int EId) {
		// TODO Auto-generated method stub
		return dutyDao.deleteDuty(EId);
	}

	@Transactional
	@Override
	public List<Duty> getDutyByName(String name) {
		// TODO Auto-generated method stub
		return dutyDao.getDutyByName(name);
	}

}
