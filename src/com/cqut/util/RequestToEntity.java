package com.cqut.util;

import javax.servlet.http.HttpServletRequest;

/**
 * ClassName
 *
 * @author qiaowei.wu
 * @version 1.0    2015/11/25 16:41
 */
public class RequestToEntity {

    public static <T> T by(Class<T> clazz, HttpServletRequest request,String... names)
            throws IllegalAccessException, InstantiationException {
        T entity = entity = clazz.newInstance();

        


        return entity;
    }

}
