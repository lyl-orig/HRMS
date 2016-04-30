package com.cqut.service.post;

import java.util.List;

import org.apache.ibatis.annotations.Param;

import com.cqut.entity.Post;

public interface PostService {
	
	public int insertPost(Post post);
	
	public int updatePost(Post post);
	
	public List<Post> getAllPosts(String where);
	
	public Post getPostById(int EId);
	
	public int deletePost(int EId);
	
	public List<Post> getPostByDepartmentIdAndName(int departmentId,String name);

	public List<Post> getPostByDepartmentId(int departmentId);
	
	public List<Post> getPostByName(String name);
}
