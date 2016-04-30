package com.cqut.controller.node;

import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import net.sf.json.JSONArray;
import net.sf.json.JSONObject;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import com.cqut.entity.Node;
import com.cqut.service.node.NodeService;
import com.cqut.util.JSON;
import com.google.common.collect.Maps;

@Controller
@RequestMapping(value="/Node")
public class NodeController {

	@Resource 
	private NodeService nodeService;
	
	@RequestMapping(value="insertNode")
	@ResponseBody
	public String insertNode(@RequestBody Node node){
		
		Map<String,Object> jsonObject = Maps.newHashMap();
		
		int result= nodeService.insertNode(node);
		
		if(result==0){
			jsonObject.put("insert", false);
		}else{
			jsonObject.put("insert", true);
		}
	
		return JSON.toJsonString(jsonObject);
	}
	
	@RequestMapping(value="updateNode")
	@ResponseBody
	public String updateNode(@RequestBody Node node){
		Map<String,Object> jsonObject = Maps.newHashMap();
		int result=nodeService.updateNode(node);
		if(result==0){
			jsonObject.put("update", false);
		}else{
			jsonObject.put("update", true);
		}
	
		return JSON.toJsonString(jsonObject);
	}
	
	@RequestMapping(value="deleteNode")
	@ResponseBody
	public String deleteNode(@RequestBody int nodeId){
		
		Map<String,Object> jsonObject = Maps.newHashMap();
		int result=nodeService.deleteNode(nodeId);
		
		if(result==0){
			jsonObject.put("delete", false);
		}else{
			jsonObject.put("delete", true);
		}
	
		return JSON.toJsonString(jsonObject);
	}
	
	@RequestMapping(value="getNodes")
	@ResponseBody
	public String getNodes(){
		
		List<Node> nodes = nodeService.getNodes();
		
		JSONArray jsonArray = JSONArray.fromObject(nodes);

		System.out.println(jsonArray.toString());
		
		return jsonArray.toString();
	}
	
	@RequestMapping(value="getNodeById")
	@ResponseBody
	public String getNodeById(@RequestBody int id){
		
		Node result =nodeService.getNodeById(id);
		JSONObject jsonObject =JSONObject.fromObject(result);
		System.out.println(jsonObject.toString());		
		return jsonObject.toString();
	}
	
	@RequestMapping(value="getNodesByModuleId")
	@ResponseBody
	public String getNodesByModuleId(@RequestBody Node node){
		
		//System.out.println(node.getModuleId());
		List<Node> nodes = nodeService.getNodesByModuleId(node.getModuleId());
		Map<String,Object> jsonObject = Maps.newHashMap();
		
		JSONArray jsonArray = JSONArray.fromObject(nodes);
		jsonObject.put("nodes", jsonArray.toString());
		
		System.out.println(jsonArray.toString());
		
		return JSON.toJsonString(jsonObject);
	}
	@RequestMapping(value="getNodesByModuleIdAndName")
	@ResponseBody
	public String getNodesByModuleIdAndName(@RequestBody Node node){
		
		List<Node> nodes = nodeService.getNodesByModuleIdAndName(node.getModuleId(),node.getName());
		Map<String,Object> jsonObject = Maps.newHashMap();
		
		JSONArray jsonArray = JSONArray.fromObject(nodes);
		jsonObject.put("nodes", jsonArray.toString());
		
		System.out.println(jsonArray.toString());
		
		return JSON.toJsonString(jsonObject);
	}

	@RequestMapping(value="getNodesByName")
	@ResponseBody
	public String getNodesByName(@RequestBody Node node){
		
		List<Node> nodes = nodeService.getNodesName(node.getName());
		Map<String,Object> jsonObject = Maps.newHashMap();
		
		JSONArray jsonArray = JSONArray.fromObject(nodes);
		jsonObject.put("nodes", jsonArray.toString());
		
		System.out.println(jsonArray.toString());
		
		return JSON.toJsonString(jsonObject);
	}
}
