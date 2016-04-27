angular.module('employeeModule', [])
.controller('employeeFormController',['$rootScope','$scope','EmployeeService','$state','$stateParams',
function($rootScope,$scope,EmployeeService,$state,$stateParams){
//	$scope.showSaveAndAddButton = $stateParams.operate == 'add' ?true:false;
	$scope.operate = $stateParams.operate;
	//alert("dsd"+$scope.operate);
	$scope.saveEmployee = function(employee){
		
		console.log(employee);
		if($scope.operate=='add')
		{
			$scope.addEmployee(employee);
		}
		else if($scope.operate=='edit')
		{
			$scope.updateEmployee(employee);
		}
	}
	
	$(".form_datetime").datetimepicker({
        format: "dd MM yyyy - hh:ii"
    });
	$scope.addEmployee = function(employee)
	{   
		EmployeeService.insertEmployee(employee,sucesscb,errorcb);

		function sucesscb(data)
		{
			console.log(data);
			$state.go('main.list.employee.list');
		}
		function errorcb()
		{
			alert('添加失败!');
		}
	}
//	$scope.id = $stateParams.id;

	
//	$scope.getInitMemberData = function()
//	{
//		if($stateParams.operate=='edit')
//		{
//			$scope.getMemberDetail();
//		}
//	}
//	
//	$scope.getMemberDetail = function()
//	{
//		MemberService.findMemberById($scope.id,sucesscb,errorcb);
//
//		function sucesscb(data)
//		{
//			$scope.member = data;
//			$rootScope.getController('memberId','dentityproperties').loadPropertiesValue($scope.member.eId); 
//		};
//
//		function errorcb(data)
//		{
//			alert('加载失败');
//		};
//	};
//	
//	$scope.saveMember = function(member)
//	{
//		if ($scope.memberForm.$valid) {
//			if($scope.operate=='add')
//			{
//				$scope.addMember(member,true);
//			}
//			else if($scope.operate=='edit')
//			{
//				$scope.updateMember(member);
//			}
//		}
//		else {
//			$scope.memberForm.submitted = true;
//		}
//	}
//	
//	$scope.saveAndAddMember = function(member)
//	{
//		$scope.addMember(member,true);
//	}	
//	$scope.addMember = function(member,needColseTab)
//	{   
//		MemberService.saveMember({member:member},sucesscb,errorcb);
//
//		function sucesscb(data)
//		{
//			$rootScope.getController('memberId','dentityproperties').saveEntityProperties(data.eId); 
//			if(needColseTab){
//				$rootScope.closeOperateTab();
//				$state.go('main.list.member.memberListRoute');
//			}
//			else
//				$scope.member=null;
//			$scope.refreshGrid();
//		}
//		function errorcb()
//		{
//			alert('添加失败!');
//		}
//	}
//	$scope.updateMember = function(member)
//	{
//		MemberService.updateMember({member:member},sucesscb,errorcb);
//	
//		function sucesscb(data)
//		{
//			$rootScope.getController('memberId','dentityproperties').updateEntityProperties(data.eId);
//			$rootScope.closeOperateTab();
//			$state.go('main.list.member.memberListRoute');
//			$scope.refreshGrid();
//		}
//		function errorcb()
//		{
//			alert('修改失败!');
//		}
//	};
//	
//	$scope.refreshGrid = function(){
//		var controller = $rootScope.getController('memberListGrid' , 'ddatagrid');
//		if(controller){
//			controller.refreshCurrent();
//		}
//	}
}]);