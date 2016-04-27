package com.cqut.service.post.impl;

import java.util.List;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.cqut.dao.post.PostDao;
import com.cqut.entity.Post;
import com.cqut.service.post.PostService;

@Service
public class PostServiceImpl implements PostService{

	@Resource 
	private PostDao postDao;
	
	@Transactional
	@Override
	public int insertPost(Post post) {
		
		return postDao.insertPost(post);
	}

	@Transactional
	@Override
	public List<Post> getAllPosts(String where) {
		
		return postDao.getAllPosts(where);
	}

}
