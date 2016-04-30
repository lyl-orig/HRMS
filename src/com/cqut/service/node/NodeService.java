package com.cqut.service.node;

import java.util.List;

import com.cqut.entity.Node;

public interface NodeService {
	
	public int insertNode(Node node);

	public int deleteNode(int nodeId);
	
	public int updateNode(Node node);
	
	public List<Node> getNodes();
	
	public Node getNodeById(int EId);
	
	public List<Node> getNodesByModuleId(int moduleId);
	
	public List<Node> getNodesByModuleIdAndName(int moduleId,String name);
	
	public List<Node> getNodesName(String name);
}
