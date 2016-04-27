package com.cqut.dao.node;

import java.util.List;

import org.apache.ibatis.annotations.Param;

import com.cqut.entity.Node;

public interface NodeDao {

	public int insertNode(Node node);
	
	public int deleteNode(Node node);
	
	public int updateNode(Node node);
	
	public List<Node> getNodes();
	
	public List<Node> getNodesByModuleId(@Param("moduleId") int moduleId);
	
	public List<Node> getNodesByName(@Param("name") String name);
	
	public Node getNodeByNameAndId(@Param("name") String name,@Param("moduleId") int moduleId);
	
	public Node getNodeById(@Param("EId") int EId);
}
