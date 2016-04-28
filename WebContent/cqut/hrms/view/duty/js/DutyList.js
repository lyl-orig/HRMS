angular.module('dutyModule', [])
.controller('dutyListController',['$rootScope','$scope','$state','$stateParams','DutyService',
       function($rootScope,$scope,$state,$stateParams,DutyService){
	 	
		//加载全部部门
		DutyService.getAllDutys(sucesscb,errorcb);
		function sucesscb(data)
		{
		    $scope.dutys=data;
		}
		function errorcb()
		{
			alert('获取机构列表失败!');
		}	
		$scope.gridOptions = {
				data:'dutys',
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
					 displayName : '职务名称',
					 width:150,
					 enableCellEdit: true,
				  },{
					  field : 'code',
					  displayName : '编码',
					  width:150,
					  enableCellEdit: true
				  },
				  {
					  field: 'EId',
					  displayName: '操作',
					  enableCellEdit: false,
					  sortable: false,
					  pinnable: false,
					  cellTemplate: '<div>&nbsp;&nbsp<a ng-click="updateDuty({id:row.getProperty(col.field)})">修改</a>'+
					  '&nbsp;&nbsp<a ng-click="displayDuty({id:row.getProperty(col.field)})" >查看</a>'+
					  '&nbsp;&nbsp<a ng-click="deleteDuty({id:row.getProperty(col.field)})" >删除</a></div>'
				         	
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
		 
	  
	    //新增部门
	    $scope.insertDuty = function(){	    	
	    	$state.go('main.list.duty.form',{operate:'add'});
	    }
}]);