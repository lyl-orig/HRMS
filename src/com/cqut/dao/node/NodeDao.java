package com.cqut.dao.node;

import java.util.List;

import org.apache.ibatis.annotations.Param;

import com.cqut.entity.Node;

public interface NodeDao {

	public int insertNode(Node node);
	
	public int deleteNode(@Param("EId") int EId);
	
	public int updateNode(Node node);
	
	public List<Node> getNodes();
	
	public List<Node> getNodesByModuleId(@Param("moduleId") int moduleId);
	
	public List<Node> getNodesByName(@Param("name") String name);
	
	public List<Node> getNodesByModuleIdAndName(@Param("moduleId") int moduleId,@Param("name") String name);
	
	public Node getNodeById(@Param("EId") int EId);
}
