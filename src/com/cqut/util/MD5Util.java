package com.cqut.util;

import com.google.common.base.Strings;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import java.math.BigInteger;
import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;

/**
 * ClassName
 *
 * @author qiaowei.wu
 * @version 1.0 2015/11/25 17:45
 */
public class MD5Util {
    final static Logger LOGGER = LoggerFactory.getLogger(MD5Util.class);
    private static MessageDigest digest;

    public static MessageDigest getDigest() {
        if (digest == null) {
            try {
                digest = MessageDigest.getInstance("MD5");
            } catch (NoSuchAlgorithmException e) {
                LOGGER.error("不支持的加密方式", e);
                System.exit(-1);
            }
        }
        return digest;
    }

    public static String getMD5(String str) {
        if (Strings.isNullOrEmpty(str)) {
            return str;
        }
        byte[] bytes = getDigest().digest(str.getBytes());
        return new BigInteger(1, bytes).toString(16);
    }

}
