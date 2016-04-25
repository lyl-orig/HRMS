angular.module('departmentModule', [])
.controller('departmentListController',['$rootScope','$scope','$state','$stateParams','DepartmentService',
       function($rootScope,$scope,$state,$stateParams,DepartmentService){
	   $scope.selectItem=function(){
		alert($scope.model.id);
	  }
	    $scope.model = [{
	        id: 10001,
	        mainCategory: '男',
	        productName: '水洗T恤',
	        productColor: '白'
	    }, {
	        id: 10002,
	        mainCategory: '女',
	        productName: '圆领短袖',
	        productColor: '黑'
	    }, {
	        id: 10003,
	        mainCategory: '女',
	        productName: '短袖短袖',
	        productColor: '黃'
	    }];
	    
	    //新增部门
	    $scope.insertDepartment = function(){	    	
	    	$state.go('main.list.department.form',{operate:'add'});
	    }
}]);