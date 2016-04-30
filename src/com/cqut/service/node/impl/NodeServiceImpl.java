package com.cqut.service.node.impl;

import java.util.List;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.cqut.dao.node.NodeDao;
import com.cqut.entity.Node;
import com.cqut.service.node.NodeService;

@Service
public class NodeServiceImpl implements NodeService{

	@Resource
	private NodeDao nodeDao;
	
	@Transactional
	@Override
	public int insertNode(Node node) {
		return nodeDao.insertNode(node);
	}

	@Transactional
	@Override
	public int deleteNode(int nodeId) {
		
		return nodeDao.deleteNode(nodeId);
	}

	@Transactional
	@Override
	public int updateNode(Node node) {

		return nodeDao.updateNode(node);
	}

	@Transactional
	@Override
	public List<Node> getNodes() {	
		return nodeDao.getNodes();
	}

	@Transactional
	@Override
	public Node getNodeById(int EId) {
		
		return nodeDao.getNodeById(EId);
	}
	
	@Transactional
	@Override
	public List<Node> getNodesByModuleId(int moduleId) {
		
		return nodeDao.getNodesByModuleId(moduleId);
	}
	
	@Transactional
	@Override
	public List<Node> getNodesByModuleIdAndName(int moduleId, String name) {
		
		return nodeDao.getNodesByModuleIdAndName(moduleId, name);
	}

	@Transactional
	@Override
	public List<Node> getNodesName(String name) {
		
		return nodeDao.getNodesByName(name);
	}

}
