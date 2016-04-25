package com.cqut;

import java.io.IOException;
import java.util.regex.Pattern;

import javax.servlet.Filter;
import javax.servlet.FilterChain;
import javax.servlet.FilterConfig;
import javax.servlet.ServletException;
import javax.servlet.ServletRequest;
import javax.servlet.ServletResponse;
import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.apache.commons.lang.StringUtils;

import com.google.common.base.Strings;

/**
 * ClassName
 *
 * @author qiaowei.wu
 * @version 1.0 2015/11/25 16:20
 */
public class DispatcheFilter implements Filter {
    public final static String LOGIN_USERNAME = "LOGIN_USERNAME";

    public final static String LOGIN_PASSWORD = "LOGIN_PASSWORD";

    public static Pattern pattern_static_resource = Pattern.compile(".+\\.((html)|(htm)|(jsp)|(png)|(gif)|(jpg)|(swf)|(css)|(js))$");

    public static Pattern pattern_pass = Pattern.compile(".*((/user/login)|(/Login/loginCheck)|(/fileUpload))");

    @Override public void init(FilterConfig filterConfig) throws ServletException {
    }

    @Override public void doFilter(ServletRequest request, ServletResponse response, FilterChain chain)
            throws IOException, ServletException {

        HttpServletRequest httpServletRequest = (HttpServletRequest) request;
        HttpServletResponse httpServletResponse = (HttpServletResponse) response;

        String requestPath = getRequestPath(httpServletRequest);

        if (pattern_static_resource.matcher(requestPath.toLowerCase()).matches() || pattern_pass.matcher(requestPath).matches()) {
            chain.doFilter(request, response);
        }else if(!loginCheck(httpServletRequest)){
            httpServletResponse.sendRedirect("/cqut/hrms/index.html");
        }else {
            chain.doFilter(request, response);
        }

    }

    // 得到请求路径
    public static String getRequestPath(HttpServletRequest request) {
        String servletPath = request.getServletPath();
        String pathInfo = StringUtils.defaultIfEmpty(request.getPathInfo(), "");
        return servletPath + pathInfo;
    }

    public static boolean loginCheck(HttpServletRequest request) {
        Cookie[] cookies = request.getCookies();

        if (cookies == null || cookies.length == 0) {
            return false;
        }

        String userName = null;
        String password = null;

        for (Cookie cookie : cookies) {

            if (cookie.getName().equals(LOGIN_USERNAME)) {
                userName = cookie.getValue();
            }
            if (cookie.getName().equals(LOGIN_PASSWORD)) {
                password = cookie.getValue();
            }
        }

        if (Strings.isNullOrEmpty(userName) || Strings.isNullOrEmpty(password)) {
            return false;
        }
        return true;
    }

    @Override public void destroy() {

    }
}
