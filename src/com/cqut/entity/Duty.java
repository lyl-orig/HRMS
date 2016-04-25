package com.cqut.entity;

import java.util.List;

public class Duty {
//  职务ID
	private int EId;
//	职务编码
	private String code;
//	职务名称
	private String name;
		
	
	public String getCode() {
		return code;
	}
	public void setCode(String code) {
		this.code = code;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}

	public int getEId() {
		return EId;
	}
	public void setEId(int eId) {
		EId = eId;
	}
}
