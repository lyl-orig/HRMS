var nodeApp = angular.module("nodeApp",[]);

nodeApp.factory('NodeService',['$resource',function($resource){
	
	var nodeService = $resource('/Node/:action',{});
	
	nodeService.insertNode= function(node,sucesscb,errorcb){
		
		nodeService.save({action:'insertNode'},node,sucesscb,errorcb);
	}
	
	nodeService.updateNode = function(node,sucesscb,errorcb){
		
		nodeService.save({action:'updateNode'},node,sucesscb,errorcb);
	}
	
	nodeService.deleteNode = function(nodeId,sucesscb,errorcb){
		
		nodeService.save({action:'deleteNode'},nodeId,sucesscb,errorcb);
	}
	
	nodeService.getNodes = function(sucesscb,errorcb){
		
		nodeService.query({action:'getNodes'},sucesscb,errorcb);	
	}
	
	nodeService.getNodeById=function(nodeId,sucesscb,errorcb){
		nodeService.save({action:'getNodeById'},nodeId,sucesscb,errorcb)
	}
	
	nodeService.getNodesByModuleId=function(moduleId,sucesscb,errorcb){
		
		nodeService.save({action:'getNodesByModuleId'},{moduleId:moduleId},sucesscb,errorcb)
	}

	nodeService.getNodesByModuleIdAndName=function(id,name,sucesscb,errorcb){
		
		nodeService.save({action:'getNodesByModuleIdAndName'},{EId:id,name:name},sucesscb,errorcb);
	}

	nodeService.getNodesByName=function(name,sucesscb,errorcb){
		
		nodeService.save({action:'getNodesByName'},{name:name},sucesscb,errorcb);
	}
	return nodeService;
}]);