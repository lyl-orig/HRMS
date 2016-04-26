angular.module('departmentModule', [])
.controller('departmentListController',['$rootScope','$scope','$state','$stateParams','DepartmentService','OrganizationService',
       function($rootScope,$scope,$state,$stateParams,DepartmentService,OrganizationService){
	   $scope.selectItem=function(){
		//alert($scope.organization.EId);
	  }
	   //加载全部组织机构
	     OrganizationService.getOrganizations(sucesscb,errorcb);
		 
		 function sucesscb(data)
			{
			    //alert(data);
			    $scope.organization=data;
			    
				console.log($scope.organization);
				//$state.go('main.list.organization.list');
			}
			function errorcb()
			{
				alert('获取机构列表失败!');
			}		
	    //新增部门
	    $scope.insertDepartment = function(){	    	
	    	$state.go('main.list.department.form',{operate:'add'});
	    }
}]);