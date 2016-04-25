package com.cqut.util;

import java.io.ByteArrayOutputStream;
import java.io.File;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.io.InputStream;
import java.io.OutputStreamWriter;
import java.io.Writer;
import java.util.HashMap;
import java.util.Map;
import java.util.Properties;

import com.google.common.base.Strings;
import org.apache.velocity.VelocityContext;
import org.apache.velocity.app.VelocityEngine;

public class VelocityUtil {
	private static Properties velocityProperties = new Properties();

    private static String charsetDefault;

	private static IsEmpty isEmpty = new IsEmpty();
	static{
        InputStream in = null;
        try {
			in = VelocityUtil.class.getClassLoader().getResourceAsStream("velocity.properties");
			velocityProperties.load(in);
			in.close();
		} catch (FileNotFoundException e) {
			e.printStackTrace();
		} catch (IOException e) {
			e.printStackTrace();
		} finally {
            if(in!=null){
                try {
                    in.close();
                } catch (IOException e) {
                    e.printStackTrace();
                }
            }
        }
    }
	private static VelocityEngine ve = new VelocityEngine(velocityProperties);
    static {
        if(!Strings.isNullOrEmpty(velocityProperties.getProperty("input.encoding"))){
            charsetDefault = velocityProperties.getProperty("input.encoding");
        }
        ve.setProperty(VelocityEngine.ENCODING_DEFAULT, charsetDefault);
        File file = new File(VelocityUtil.class.getResource("/").getPath()).getParentFile().getParentFile();
        ve.setProperty(VelocityEngine.FILE_RESOURCE_LOADER_PATH,file.getAbsolutePath());
    }
	
	/**
	 * 根据指定的字符串模板返回合并的字符串
	 * @param stringTemplate 字符串模板
	 * @param map  替换的值
	 * @return
	 */
	public static String generateString(String stringTemplate,Map<String, Object> map) throws IOException {
		return generateString(stringTemplate, map, charsetDefault);
	}
	/**
	 * 根据指定的字符串模板返回合并的字符串
	 * @param stringTemplate 字符串模板
	 * @param velocityContext
	 * @return
	 */
	public static String generateString(String stringTemplate,VelocityContext velocityContext) throws IOException {
		return generateString(stringTemplate, velocityContext, charsetDefault);
	}
	
	/**
	 * 根据指定的字符串模板返回合并的字符串
	 * @param stringTemplate 字符串模板
	 * @param map  替换的值
	 * @return
	 */
	public static String generateString(String stringTemplate,Map<String, Object> map,String charset)
            throws IOException {
		byte[] bytes = generateBytes(stringTemplate, map,charset);
		

		return new String(bytes,charset);

	}
	/**
	 * 根据指定的字符串模板返回合并的字符串
	 * @param stringTemplate 字符串模板
	 * @param velocityContext
	 * @return
	 */
	public static String generateString(String stringTemplate,VelocityContext velocityContext,String charset)
            throws IOException {
		byte[] bytes = generateBytes(stringTemplate, velocityContext,charset);
		

		return new String(bytes,charset);
	}
	
	/**
	 * 根据指定的字符串模板返回合并的字符串
	 * @param stringTemplate 字符串模板
	 * @param map  替换的值
	 * @return
	 */
	public static byte[] generateBytes(String stringTemplate,Map<String, Object> map,String charset)
            throws IOException {
        
        ByteArrayOutputStream byteArrayOutputStream = new ByteArrayOutputStream();
        OutputStreamWriter outputStreamWriter = null;

		outputStreamWriter = new OutputStreamWriter(byteArrayOutputStream,charset);

        generate(stringTemplate, outputStreamWriter, map);

		outputStreamWriter.flush();
		return byteArrayOutputStream.toByteArray();
	}
	/**
	 * 根据指定的字符串模板返回合并的字符串
	 * @param stringTemplate 字符串模板
	 * @param velocityContext 
	 * @return
	 */
	public static byte[] generateBytes(String stringTemplate,VelocityContext velocityContext,String charset)
            throws IOException {
        
        ByteArrayOutputStream byteArrayOutputStream = new ByteArrayOutputStream();
        OutputStreamWriter outputStreamWriter = null;

		outputStreamWriter = new OutputStreamWriter(byteArrayOutputStream,charset);

        generate(stringTemplate, outputStreamWriter, velocityContext);

		outputStreamWriter.flush();
		return byteArrayOutputStream.toByteArray();
	}
	
	/**
	 * 
	 * @param stringTemplate 字符串模板
	 * @param writer  输出
	 * @param map 替换的值
	 */
	public static void generate(String stringTemplate,Writer writer,Map<String, Object> map)
	{
        if(map==null){
        	map=new HashMap<String, Object>();
        }
        VelocityContext velocityContext = new VelocityContext(map);
        velocityContext.put("param", isEmpty);
        generate(stringTemplate, writer, velocityContext);
	}
	
	/**
	 * 
	 * @param stringTemplate 字符串模板
	 * @param writer  输出
	 * @param velocityContext 
	 */
	public static void generate(String stringTemplate,Writer writer,VelocityContext velocityContext)
	{
        org.apache.velocity.Template t=ve.getTemplate(stringTemplate, charsetDefault);
		t.merge(velocityContext, writer);
	}

}
