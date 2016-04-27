package com.cqut.service.post;

import java.util.List;

import com.cqut.entity.Post;

public interface PostService {
	
	public int insertPost(Post post);
	
	public List<Post> getAllPosts(String where);
}
