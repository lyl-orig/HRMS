package com.cqut.exception;

import org.springframework.web.servlet.HandlerExceptionResolver;
import org.springframework.web.servlet.ModelAndView;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/**
 * ClassName
 *
 * @author qiaowei.wu
 * @version 1.0    2015/12/7 11:29
 */
public class ExceptionHandler implements HandlerExceptionResolver {
    @Override public ModelAndView resolveException(HttpServletRequest request, HttpServletResponse response,
            Object handler, Exception ex) {
        return new ModelAndView("message").addObject("message",ex.getMessage());
    }
}
