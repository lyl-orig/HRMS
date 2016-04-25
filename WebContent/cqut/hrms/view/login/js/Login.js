var loginApp = angular.module("loginApp",['loginSuccessApp']);
loginApp.controller("LoginController",['$rootScope','$state','$scope','LoginService',
                                       function($rootScope,$state,$scope,LoginService){

	$scope.showError=false;
	$scope.showEmpty=false;
	
    $scope.login=function()
   {
    	 var name = $scope.name;
    	 var password = $scope.password;
    	 if(name==null||password==null)
    	 {
    		 $scope.showEmpty=true;	 
    	 }else{
    		 $scope.showEmpty=false;
    		 
    		 LoginService.login(name,password,successcb,errorcb);
     
	   		 function successcb(data)
	   		 {
	   			 
	   			 var loginer=data.loginer;
	   			// console.log(loginer);
	   			 sessionStorage.setItem("loginer",loginer)
	   			 if(data.login==true){
	   				 $state.go('main.list.welcome');
	   			 }else{
	   				$scope.showError=true;
	   			 }
	   			
	   		 }
	   		 function errorcb()
	   		 {
	   			    alert("操作失败");
	   		 }
	    }
         
   }
    
    //重置
    $scope.reset = function(){
    	$scope.name=null;
    	$scope.password=null;
    }
    //回车事件
    $scope.loginConvenient = function($event){
    	 var keycode = window.event?event.keyCode:event.which;
    	   if(keycode==13){
    		   $scope.memberCheck();
           }
    	
    }
	//会员注册
	$scope.register = function()
	{
		$state.go("register");
	}
	
}]);

