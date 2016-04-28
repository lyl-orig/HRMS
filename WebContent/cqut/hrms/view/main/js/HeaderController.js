define(['app'], function (app) 
{
	app.controller('HeaderController',['$rootScope','$state','$scope','LoginService','ModuleService','NodeService',
	function($rootScope,$state,$scope,LoginService,ModuleService,NodeService){
		
		 ModuleService.getModules(sucesscb,errorcb);
		 function sucesscb(data)
		 {
			 $scope.modules=data;
		 }
		 function errorcb(){
			 alert("系统列表加载失败");
		 }
		 $scope.isSelected = 0;
		 $scope.module1=[
		                 {name:'个人信息',mapurl:'main.list.employee.list'},
		                 {name:'系统消息',mapurl:'main.list.massage.list'},
		                 {name:'工作计划',mapurl:'main.list.plan.list'}
		                 
		                ];
		 $scope.module2=[
		                 {name:'基础数据',mapurl:'main.list.employee.list'},
		                 {name:'人员调动',mapurl:'main.list.employee.list'},
		                 {name:'百人计划',mapurl:'main.list.employee.list'},
		                 {name:'培训管理',mapurl:'main.list.employee.list'},
		                 {name:'合同管理',mapurl:'main.list.employee.list'},
		                 {name:'档案管理',mapurl:'main.list.employee.list'},
		                 ];
		 $scope.module3=[
		                 {name:'系统模块',mapurl:'main.list.module.list'},
		                 {name:'功能管理',mapurl:'main.list.node.list'},
		                 {name:'组织机构管理',mapurl:'main.list.organization.list'},
		                 {name:'部门管理',mapurl:'main.list.department.list'},
		                 {name:'岗位管理',mapurl:'main.list.post.list'},
		                 {name:'职务管理',mapurl:'main.list.duty.list'}, 
		                 {name:'日志管理',mapurl:'main.list.log.list'}, 
		                 {name:'系统消息管理',mapurl:'main.list.massage.list'},
		                 {name:'权限管理',mapurl:'main.list.permission.list'}
		                ];
		 
		 $rootScope.nodes=$scope.module1;
		 $scope.loadSystem=function(systemModuleId,index){
			 if(systemModuleId==1)
			 {
				 $rootScope.nodes=$scope.module1;
			 }else if(systemModuleId==2) {
				 
				 $rootScope.nodes=$scope.module2;
			 }else if (systemModuleId==3) {
				
				 $rootScope.nodes=$scope.module3;
			}
			
//			 NodeService.getNodesByModuleId(systemModuleId,sucesscb,errorcb);
//			 
//			 function sucesscb(data){
//				 
//				 $rootScope.nodes=data;
//			 }
//			 function errorcb(){
//				 alert("加载失败");
//			 }
		 }
		var loginer=JSON.parse(sessionStorage.getItem("loginer"));
		$scope.name=loginer.name;
		
		//退出登录
		$scope.loginOut = function()
		{
		  $state.go("login");
		}
	}]);
});