package com.cqut.controller.post;

import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import net.sf.json.JSONArray;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

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
}
