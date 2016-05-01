angular.module('messageModule', [])
.controller('messageListController',['$rootScope','$scope','$state','$stateParams','MessageService',
       function($rootScope,$scope,$state,$stateParams,MessageService){
	 	
		//加载全部部门
		MessageService.getAllMessages(sucesscb,errorcb);
		function sucesscb(data)
		{
		    $scope.messages=data;
		}
		function errorcb()
		{
			alert('获取机构列表失败!');
		}	
		$scope.gridOptions = {
				data:'messages',
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
					 displayName : '消息名称',
					 width:150,
					 enableCellEdit: true,
				  },{
					  field : 'publishDate',
					  displayName : '创建时间',
					  width:150,
					  enableCellEdit: true
				  },{
					  field : 'publisher',
					  displayName : '创建者',
					  width:150,
					  enableCellEdit: true
				  },
				  {
					  field: 'EId',
					  displayName: '操作',
					  enableCellEdit: false,
					  sortable: false,
					  pinnable: false,
					  cellTemplate: '<div>&nbsp;&nbsp<a ng-click="updateMessage(row.getProperty(col.field))">修改</a>'+
					  '&nbsp;&nbsp<a ng-click="displayMessage(row.getProperty(col.field))" >查看</a>'+
					  '&nbsp;&nbsp<a ng-click="deleteMessage(row.getProperty(col.field))" >删除</a></div>'
				         	
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
		 
	  $scope.updateMessage=function(messageId){
		  $state.go('main.list.message.form',{operate:'edit',messageId:messageId});
	  }
	  $scope.displayMessage=function(messageId){
		  alert(messageId);
		  $state.go('main.list.message.display',{messageId:messageId});
	  }
	    //新增部门
	    $scope.insertMessage = function(){	    	
	    	$state.go('main.list.message.form',{operate:'add'});
	    }
}]);