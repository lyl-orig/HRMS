package com.cqut.entity;

public class Department {

	private int EId;
	private String code;
	private String name;
	private int organizationId;
	
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
	public int getOrganizationId() {
		return organizationId;
	}
	public void setOrganizationId(int organizationId) {
		this.organizationId = organizationId;
	}
	public int getEId() {
		return EId;
	}
	public void setEId(int eId) {
		EId = eId;
	}
}
