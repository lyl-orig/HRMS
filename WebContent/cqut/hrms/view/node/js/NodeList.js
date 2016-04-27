angular.module('nodeModule', [])
.controller('nodeListController',['$rootScope','$scope','$state','$stateParams','NodeService','ModuleService',
       function($rootScope,$scope,$state,$stateParams,NodeService,ModuleService){
	   
	   
     //获取全部模块
     ModuleService.getModules(sucesscb,errorcb);
	 function sucesscb(data)
	 {
		 $scope.module=data;
	 }
	 function errorcb(){
		 alert("系统列表加载失败");
	 }
	 
	 $scope.selectItem=function(){
			//alert($scope.module.EId);
	 }
         
		 //获取全部功能点
	 NodeService.getNodes(sucesscb,errorcb);
	 function sucesscb(data)
	 {
		 $scope.nodes=data;
	 }
	 function errorcb(){
		 alert("系统列表加载失败");
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
					 width:150,
					 enableCellEdit: true,
				  },{
					  field : 'mapurl',
					  displayName : '访问路径',
					  width:150,
					  enableCellEdit: true
				  }
				  ,{
					  field : 'remark',
					  displayName : '备注',
					  width:150,
					  enableCellEdit: true
				  },
				  {
					  field: 'EId',
					  displayName: '操作',
					  enableCellEdit: false,
					  sortable: false,
					  pinnable: false,
					  cellTemplate:  '<div><a ng-click="updateNode(row.getProperty(col.field))">修改</a>'+
						'&nbsp;&nbsp<a ng-click="deleteNode({EId:row.getProperty(col.field)})" >删除</a></div>'		  
				         	
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
	    //新增部门
	    $scope.insertNode = function(){	   
	    	$state.go('main.list.node.form',{operate:'add'});
	    }
}]);