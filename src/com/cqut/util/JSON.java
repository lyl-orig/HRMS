package com.cqut.util;

import java.io.IOException;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;

/**
 * ClassName
 *
 * 
 * @version 1.0 2015/12/8 15:04
 */
public class JSON {
    private static ObjectMapper objectMapper = new ObjectMapper();

    public static String toJsonString(Object o) {
        try {
            return objectMapper.writeValueAsString(o);
        } catch (JsonProcessingException e) {
            throw new RuntimeException(e);
        }
    }

    public static <T> T parse(String jsonString, Class<T> clazz) {
        try {
            return objectMapper.readValue(jsonString, clazz);// or :objectMapper.readValue(jsonString, new TypeReference<T>(){})
        } catch (IOException e) {
            throw new RuntimeException(e);
        }
    }
}
