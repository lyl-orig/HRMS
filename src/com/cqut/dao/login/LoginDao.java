package com.cqut.dao.login;

import org.apache.ibatis.annotations.Param;

import com.cqut.entity.Employee;

public interface LoginDao {

	public Employee loginCheck(@Param("name") String name,@Param("password") String password);
}
