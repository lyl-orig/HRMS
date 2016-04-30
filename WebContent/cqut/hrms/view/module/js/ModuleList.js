angular.module('moduleModule', [])
.controller('moduleListController',['$rootScope','$scope','$state','$stateParams','ModuleService',
function($rootScope,$scope,$state,$stateParams,ModuleService){
	//$scope.modules='';
	
	ModuleService.getModules(sucesscb,errorcb);
	 function sucesscb(data)
	 {
		 $scope.modules=data;
	 }
	 function errorcb(){
		 alert("系统列表加载失败");
	 }
	//刷新表格
	$scope.refreshGrid = function(){
		ModuleService.getModules(sucesscb,errorcb);
		 function sucesscb(data)
		 {
			 $scope.modules=data;
			 $scope.name='';
		 }
		 function errorcb(){
			 alert("系统列表加载失败");
		 }

	}
	 $scope.refreshGrid(); 
	 $scope.gridOptions = {
			data:'modules',
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
				 displayName : '系统名称',
				 width:150,
				 enableCellEdit: true,
			  },{
				  field : 'code',
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
				  cellTemplate: '<div>&nbsp;&nbsp<a ng-click="updateModule(row.getProperty(col.field))">修改</a>'+
				  '&nbsp;&nbsp<a ng-click="displayModule(row.getProperty(col.field))" >查看</a>'+
				  '&nbsp;&nbsp<a ng-click="deleteModule(row.getProperty(col.field))" >删除</a></div>'
			         	
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
	
	$scope.updateModule=function(moduleId){
		
		$state.go('main.list.module.form',{operate:'edit',moduleId:moduleId});
	}
	
    $scope.displayModule=function(moduleId){
    	
    	$state.go('main.list.module.display',{moduleId:moduleId});
    }
    
    $scope.deleteModule=function(moduleId){
    	
    	ModuleService.deleteModule(moduleId,sucesscb,errorcb);
    	
    	function sucesscb(data){
    		
    		$scope.refreshGrid();
    	}
    	function errorcb(){
    		alert("删除失败");
    	}
    	
    }
    $scope.deleteModules=function(){
    	var modules =$scope.gridOptions.selectedItems;
    	for(var i=0;i<modules.length;i++)
    	{
    		$scope.deleteModule(modules[i].EId);
    	}
    	
    }
   
	
	$scope.insertModule = function()
  	{
  		$state.go('main.list.module.form',{operate:'add'});
  	}
	
	//通过名称查找组织结构
	$scope.searchModuleByName=function(){
		var name = $scope.name;
		if($scope.name){
			ModuleService.searchModuleByName(name,sucesscb,errorcb);
	    	
	    	function sucesscb(data){
	    		console.log(JSON.parse(data.modules));
	    		$scope.modules=JSON.parse(data.modules);
	    	}
	    	function errorcb(){
	    		alert("删除失败");
	    	}
		}
	}
	
}]);



