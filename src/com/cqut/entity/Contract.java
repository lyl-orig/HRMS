package com.cqut.entity;

import java.util.Date;

public class Contract {

	private int EId;
	private Date signDate;
	private Date stopDate;
	private String term;
	
	public Date getSignDate() {
		return signDate;
	}
	public void setSignDate(Date signDate) {
		this.signDate = signDate;
	}
	public Date getStopDate() {
		return stopDate;
	}
	public void setStopDate(Date stopDate) {
		this.stopDate = stopDate;
	}
	public String getTerm() {
		return term;
	}
	public void setTerm(String term) {
		this.term = term;
	}
	
	public int getEId() {
		return EId;
	}
	public void setEId(int eId) {
		EId = eId;
	}
}
