
package com.cqut.util;
/** 
 * @date 创建时间：2015年7月29日 下午5:47:37
 * @version 1.0 
 * @parameter  
 * @since  
 * @return  
 */

public class IsEmpty {
	
	public static boolean empty(Object o){
		if(o==null||o.toString().equals("")||o.toString().startsWith("$")){
			return true;
		}
		
		return false;
	}
	public static boolean notEmpty(Object o){
		if(o==null||o.toString().equals("")||o.toString().startsWith("$")){
			return false;
		}
		
		return true;
	}
}
