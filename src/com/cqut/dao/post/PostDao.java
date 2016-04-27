package com.cqut.dao.post;

import java.util.List;

import org.apache.ibatis.annotations.Param;

import com.cqut.entity.Post;

public interface PostDao {

	public int insertPost(Post post);
	
	public int updatePost(Post post);
	
	public int deletePost(Post post);
	
	public List<Post> getAllPosts(@Param("where") String where);
	
}
