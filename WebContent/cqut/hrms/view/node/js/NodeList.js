angular.module('nodeModule', [])
.controller('nodeListController',['$rootScope','$scope','$state','$stateParams','NodeService','ModuleService',
       function($rootScope,$scope,$state,$stateParams,NodeService,ModuleService){
	   
	   
     //获取全部模块
     ModuleService.getModules(sucesscb,errorcb);
	 function sucesscb(data)
	 {
		 $scope.module=data;
		 //获取全部功能点
		 NodeService.getNodes(sucesscb,errorcb);
		 function sucesscb(data)
		 {
			 $scope.nodes=data;
		 }
		 function errorcb(){
			 alert("系统列表加载失败");
		 }
	 }
		  function errorcb(){
			 alert("系统列表加载失败");
		  }
	   $scope.refreshGrid=function(){
	    	 NodeService.getNodes(sucesscb,errorcb);
			 function sucesscb(data)
			 {
				 $scope.nodes=data;
				 $scope.name='';
				 $scope.node.moduleId='';
			 }
			 function errorcb(){
				 alert("系统列表加载失败");
			 }
	    }
	 
	 $scope.selectItem=function(){
			//alert($scope.module.EId);
	 }
         
		
	 $scope.gridOptions = {
				data:'nodes',
				rowTemplate: '<div style="height: 100%"><div ng-style="{ \'cursor\': row.cursor }" ng-repeat="col in renderedColumns" ng-class="col.colIndex()" class="ngCell ">' +
				'<div class="ngVerticalBar" ng-style="{height: rowHeight}" ng-class="{ ngVerticalBarVisible: !$last }"> </div>' +
				'<div ng-cell></div>' +
				'</div></div>',
				multiSelect: true,
				enableCellSelection: true,
				enableRowSelection: true,
				enableCellEdit: true,
				enablePinning: true,
				showSelectionCheckbox:true,
				selectedItems:[],
				columnDefs:[
				  {
					 field : 'EId',
					 displayName : 'ID',
					 width:150,
					 enableCellEdit: true,
					 visible:false
				},
				  {
					 field : 'name',
					 displayName : '功能名称',
					 width:200,
					 enableCellEdit: true,
				  },{
					  field : 'mapurl',
					  displayName : '访问路径',
					  width:200,
					  enableCellEdit: true
				  }
				  ,{
					  field : 'remark',
					  displayName : '备注',
					  width:200,
					  enableCellEdit: true
				  },
				  {
					  field: 'EId',
					  displayName: '操作',
					  enableCellEdit: false,
					  sortable: false,
					  pinnable: false,
					  cellTemplate:  '<div>&nbsp;&nbsp<a ng-click="updateNode(row.getProperty(col.field))">修改</a>'+
					  '&nbsp;&nbsp<a ng-click="displayNode(row.getProperty(col.field))" >查看</a>'+
						'&nbsp;&nbsp<a ng-click="deleteNode(row.getProperty(col.field))" >删除</a></div>'		  
				         	
				  }],
				    enablePaging: true,
			        showFooter: true,
			        pagingOptions:
			        { 
			        	pageSizes: [10, 20, 50], 
			        	pageSize: 10,
			        	totalServerItems: 0,
			        	currentPage: 1 },
			      i18n:'zh-cn'
			};
	   
		$scope.updateNode=function(nodeId){
			
			$state.go('main.list.node.form',{operate:'edit',nodeId:nodeId});
		}
		
		$scope.displayNode=function(nodeId){
			
			$state.go('main.list.node.display',{nodeId:nodeId});
		}
		
		$scope.deleteNode=function(nodeId){
			NodeService.deleteNode(nodeId,sucesscb,errorcb);
			function sucesscb(data){
				$scope.refreshGrid();
			}
			function errorcb (){
				
			}
		}
		$scope.deleteNodes=function(){
			
			var nodes =$scope.gridOptions.selectedItems;
	    	for(var i=0;i<nodes.length;i++)
	    	{
	    		$scope.deleteNode(nodes[i].EId);
	    	}
		}
	    //新增部门
	    $scope.insertNode = function(){	   
	    	$state.go('main.list.node.form',{operate:'add'});
	    }
	    
	    $scope.searchNode = function(){
	    	
	    	if($scope.node.moduleId && $scope.name){
	    		NodeService.getNodesByModuleIdAndName($scope.node.moduleId,$scope.name,sucesscb,errorcb);
	    		function sucesscb(data){
	    			$scope.nodes=JSON.parse(data.nodes);
				}
				function errorcb (){
					
				}
	    	}else if($scope.node.moduleId){
	    		NodeService.getNodesByModuleId($scope.node.moduleId,sucesscb,errorcb);
	    		
	    		function sucesscb(data){
	    			$scope.nodes=JSON.parse(data.nodes);
				
				}
				function errorcb (){
					alert("加载失败");
				}
	    	}else if($scope.name){
	    		NodeService.getNodesByName($scope.name,sucesscb,errorcb);
	    		
	    		function sucesscb(data){
	    			$scope.nodes=JSON.parse(data.nodes);
				}
				function errorcb (){
					alert("加载失败");
				}
	    	}else{
	    		$scope.refreshGrid();
	    	}
	    }
	 
}]);