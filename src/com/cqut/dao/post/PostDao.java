package com.cqut.dao.post;

import java.util.List;

import org.apache.ibatis.annotations.Param;

import com.cqut.entity.Post;

public interface PostDao {

	public int insertPost(Post post);
	
	public int updatePost(Post post);
	
	public int deletePost(@Param("EId")int EId);
	
	public List<Post> getAllPosts(@Param("where") String where);
	
	public Post getPostById(@Param("EId") int EId);
	
	public List<Post> getPostByDepartmentIdAndName(@Param("departmentId") int departmentId,@Param("name") String name);

	public List<Post> getPostByDepartmentId(@Param("departmentId") int departmentId);
	
	public List<Post> getPostByName(@Param("name") String name);
}
