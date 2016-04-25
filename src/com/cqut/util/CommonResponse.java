package com.cqut.util;

import com.google.common.collect.Maps;

import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.io.PrintWriter;
import java.util.Map;

/**
 * ClassName
 *
 * @author qiaowei.wu
 * @version 1.0 2015/11/25 17:58
 */
public class CommonResponse {

    public static void reply(HttpServletResponse response, String page, Map<String, Object> msg) throws IOException {
        PrintWriter writer = response.getWriter();

        VelocityUtil.generate(page, writer, msg);
        writer.close();
    }

    public static void reply(HttpServletResponse response, String msg) throws IOException {
        Map<String, Object> map = Maps.newHashMap();
        map.put("message", msg);
        reply(response, "message.html", map);
    }

}
