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

	@Transactional
	@Override
	public Post getPostById(int EId) {
		
		return postDao.getPostById(EId);
	}

	@Transactional
	@Override
	public int updatePost(Post post) {
		
		return postDao.updatePost(post);
	}

	@Transactional
	@Override
	public int deletePost(int EId) {
		
		return postDao.deletePost(EId);
	}

	@Transactional
	@Override
	public List<Post> getPostByDepartmentIdAndName(int departmentId, String name) {
		// TODO Auto-generated method stub
		return postDao.getPostByDepartmentIdAndName(departmentId, name);
	}

	@Transactional
	@Override
	public List<Post> getPostByDepartmentId(int departmentId) {
		// TODO Auto-generated method stub
		return postDao.getPostByDepartmentId(departmentId);
	}

	@Transactional
	@Override
	public List<Post> getPostByName(String name) {
		// TODO Auto-generated method stub
		return postDao.getPostByName(name);
	}

}
