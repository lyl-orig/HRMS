package com.cqut.entity;


import java.util.Date;
import java.util.List;

import javax.persistence.*;

public class Employee {

	private int EId;
	private String name;
	private String password;

//	员工编号
	private String code;
//	员工性别
	private String sex;
//	出生年月
	private Date birthDate;
//	工作时间
	private Date workTime;
//	身份证号码
	private String IDCard;
//	籍贯
	private String origin;
//	民族
	private String nation;
//	政治面貌
	private String political;
//	学习性质
	private String education;
//	毕业学校
	private String school;
//	所学专业
	private String major;
//	毕业时间
	private Date graduTime;
//	配偶名字
	private String spouseName;
//	配偶单位
	private String spouseCompany;
//	原厂
	private String originalFactory;
//	员工等级 1 普通员工 2 领导 3 子公司管理人事管理人员 4 系统管理员
	private int permissionId;
	
	private int departmentId;
	
	private int postId;
	
	public int isAssgin;
	
	public int getIsAssgin() {
		return isAssgin;
	}
	public void setIsAssgin(int isAssgin) {
		this.isAssgin = isAssgin;
	}
	private int contractId;
	
	private int dutyId;
	
	private List<Train> trains;
	
	
	
	public int getEId() {
		return EId;
	}
	public void setEId(int eId) {
		EId = eId;
	}
	public int getDepartmentId() {
		return departmentId;
	}
	public void setDepartmentId(int departmentId) {
		this.departmentId = departmentId;
	}
	public int getPostId() {
		return postId;
	}
	public void setPostId(int postId) {
		this.postId = postId;
	}
	public int getContractId() {
		return contractId;
	}
	public void setContractId(int contractId) {
		this.contractId = contractId;
	}
	public List<Train> getTrains() {
		return trains;
	}
	public void setTrains(List<Train> trains) {
		this.trains = trains;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	public String getCode() {
		return code;
	}
	public void setCode(String code) {
		this.code = code;
	}
	public String getSex() {
		return sex;
	}
	public void setSex(String sex) {
		this.sex = sex;
	}
	public Date getBirthDate() {
		return birthDate;
	}
	public void setBirthDate(Date birthDate) {
		this.birthDate = birthDate;
	}
	public Date getWorkTime() {
		return workTime;
	}
	public void setWorkTime(Date workTime) {
		this.workTime = workTime;
	}
	public String getIDCard() {
		return IDCard;
	}
	public void setIDCard(String iDCard) {
		IDCard = iDCard;
	}
	public String getOrigin() {
		return origin;
	}
	public void setOrigin(String origin) {
		this.origin = origin;
	}
	public String getNation() {
		return nation;
	}
	public void setNation(String nation) {
		this.nation = nation;
	}
	public String getPolitical() {
		return political;
	}
	public void setPolitical(String political) {
		this.political = political;
	}
	public String getEducation() {
		return education;
	}
	public void setEducation(String education) {
		this.education = education;
	}
	public String getSchool() {
		return school;
	}
	public void setSchool(String school) {
		this.school = school;
	}
	public String getMajor() {
		return major;
	}
	public void setMajor(String major) {
		this.major = major;
	}
	public Date getGraduTime() {
		return graduTime;
	}
	public void setGraduTime(Date graduTime) {
		this.graduTime = graduTime;
	}
	public String getSpouseName() {
		return spouseName;
	}
	public void setSpouseName(String spouseName) {
		this.spouseName = spouseName;
	}
	public String getSpouseCompany() {
		return spouseCompany;
	}
	public void setSpouseCompany(String spouseCompany) {
		this.spouseCompany = spouseCompany;
	}
	public String getOriginalFactory() {
		return originalFactory;
	}
	public void setOriginalFactory(String originalFactory) {
		this.originalFactory = originalFactory;
	}
	
	public int getDutyId() {
		return dutyId;
	}
	public void setDutyId(int dutyId) {
		this.dutyId = dutyId;
	}
	public int getPermissionId() {
		return permissionId;
	}
	public void setPermissionId(int permissionId) {
		this.permissionId = permissionId;
	}	
}
