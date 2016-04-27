angular.module('moduleModule', [])
.controller('moduleListController',['$rootScope','$scope','$state','$stateParams','ModuleService',
function($rootScope,$scope,$state,$stateParams,ModuleService){
	
	 ModuleService.getModules(sucesscb,errorcb);
	 function sucesscb(data)
	 {
		 console.log(data);
		 $scope.modules=data;
	 }
	 function errorcb(){
		 alert("系统列表加载失败");
	 }
	/*$scope.loadGrid=function(){
		
		 ModuleService.getModules(sucesscb,sucesscb);
		 
		 function sucesscb(data)
			{
			    //alert(data);
			    $scope.modules=data;
			    
				console.log($scope.modules);
			}
			function errorcb()
			{
				alert('获取机构列表失败!');
			}		
	}

	$scope.loadGrid();*/
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
				  cellTemplate: '<div><a ui-sref="main.list.module.form({oprate:"edit",id:row.getProperty(col.field)})">修改</a>'+
				  '&nbsp;&nbsp<a ng-click="deleteModule({id:row.getProperty(col.field)})" >删除</a></div>'
			         	
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
	
	//$scope.loadGrid();
	
	$scope.insertModule = function()
  	{
  		$state.go('main.list.module.form',{operate:'add'});
  	}
	
	//通过名称查找组织结构
	$scope.searchOrgaByName=function(){
		var name = $scope.name;
		if($scope.name){
			//ModuleService.searchModuleByName(name);
		}
	}
	//刷新表格
	$scope.refreshGrid = function(){
		alert('刷新表格');
	}
}]);



