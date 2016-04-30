package com.cqut.controller.post;

import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import net.sf.json.JSONArray;
import net.sf.json.JSONObject;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.cqut.entity.Department;
import com.cqut.entity.Post;
import com.cqut.service.post.PostService;
import com.cqut.util.JSON;
import com.google.common.collect.Maps;

@Controller
@RequestMapping(value="/Post")
public class PostController {

	@Resource
	private PostService postService;
	
	@RequestMapping(value="insertPost")
	@ResponseBody
	public String insertPost(@RequestBody Post post){
		
		int result=postService.insertPost(post);
		
		Map<String, Object> jsonObject =Maps.newHashMap();
		
		if(result==0){
			jsonObject.put("insert", false);
		}else{
			jsonObject.put("insert", true);
		}
		return JSON.toJsonString(jsonObject);
		
	}
	
	@RequestMapping(value="getAllPosts")
	@ResponseBody
	public String getAllPosts(){
		
		List<Post> posts= postService.getAllPosts("");
		
		JSONArray jsonArray = JSONArray.fromObject(posts);
		
		System.out.println(jsonArray.toString());
		
		return jsonArray.toString();
	}
	
	@RequestMapping(value="getPostById")
	@ResponseBody
	public String getPostById(@RequestBody int id){
		
		Post result= postService.getPostById(id);
	
		JSONObject jsonObject = JSONObject.fromObject(result);  
		
		System.out.println(jsonObject.toString());
		
		return JSON.toJsonString(jsonObject);
	}
	
	@RequestMapping(value="updatePost")
	@ResponseBody
	public String updatePost(@RequestBody Post post){
		
		int result=postService.updatePost(post);
		
		Map<String, Object> jsonObject =Maps.newHashMap();
		
		if(result==0){
			jsonObject.put("update", false);
		}else{
			jsonObject.put("update", true);
		}
		return JSON.toJsonString(jsonObject);
		
	}
	
	@RequestMapping(value="deletePost")
	@ResponseBody
	public String deletePost(@RequestBody int id){
		
		int result=postService.deletePost(id);
		
		Map<String, Object> jsonObject =Maps.newHashMap();
		
		if(result==0){
			jsonObject.put("delete", false);
		}else{
			jsonObject.put("delete", true);
		}
		return JSON.toJsonString(jsonObject);
		
	}
	@RequestMapping(value="getPostByDepartmentIdAndName")
	@ResponseBody
	public String getPostByDepartmentIdAndName(@RequestBody Post post){
		
		List<Post> posts = postService.getPostByDepartmentIdAndName(post.getDepartmentId(), post.getName());
		
		Map<String,Object> jsonObject = Maps.newHashMap();
		
		JSONArray jsonArray = JSONArray.fromObject(posts);
		jsonObject.put("posts", jsonArray.toString());
		
		System.out.println(jsonArray.toString());
		
		return JSON.toJsonString(jsonObject);
	}
	
	
	@RequestMapping(value="getPostByDepartmentId")
	@ResponseBody
	public String getPostByDepartmentId(@RequestBody int id){
		
		List<Post> posts = postService.getPostByDepartmentId(id);
		
		Map<String,Object> jsonObject = Maps.newHashMap();
		
		JSONArray jsonArray = JSONArray.fromObject(posts);
		jsonObject.put("posts", jsonArray.toString());
		
		System.out.println(jsonArray.toString());
		
		return JSON.toJsonString(jsonObject);
	}
	
	
	@RequestMapping(value="getPostByName")
	@ResponseBody
	public String getPostByName(@RequestBody String name){
		
		List<Post> posts = postService.getPostByName(name);
		
		Map<String,Object> jsonObject = Maps.newHashMap();
		
		JSONArray jsonArray = JSONArray.fromObject(posts);
		jsonObject.put("posts", jsonArray.toString());
		
		System.out.println(jsonArray.toString());
		
		return JSON.toJsonString(jsonObject);
	}
}
