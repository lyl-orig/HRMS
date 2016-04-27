define(['angularAMD', 'angularUIrouter','angularResource','bootstrap',
       ,'angularUIbootstrap','angularAnimate','ngGridDebug'], 
         function (angularAMD) 
         {
	     var  app = angular.module("app", [ 'ui.router','ngResource','ui.bootstrap','ngAnimate','ngGrid'
	                                   ]);
	     
	app.config(function($stateProvider, $urlRouterProvider,$rootScopeProvider) {
	$urlRouterProvider.otherwise('/login');
	$stateProvider
	.state("login", angularAMD.route({
			url : "/login",
			templateUrl : 'view/login/html/Login.html',
			controller:'LoginController',
			controllerUrl:['view/login/js/Login.js',
			               'view/login/js/LoginService.js'
			              ]
		}))
		
     .state('main',angularAMD.route({
			url : '/main',
			templateUrl : 'view/main/html/Main.html',
			controllerUrl:[
			               'view/login/js/LoginService.js'
			              ]
	  }))
	  
	 .state('main.list',angularAMD.route({
		url : '/list',
		views : {
			"top@main" : angularAMD.route({
				templateUrl : 'view/main/html/Header.html',
				css:['../common/common.css'],
				controller:'HeaderController',
				controllerUrl:['view/main/js/HeaderController.js',
				               'view/module/js/ModuleService.js',
				               'view/node/js/NodeService.js'
				               ]//必需是数组
			}),
			"menu@main" : angularAMD.route({
				controller:'HeaderController',
				templateUrl : 'view/main/html/Menu.html',
				controllerUrl:['view/main/js/HeaderController.js',
				               'view/module/js/ModuleService.js',
				               'view/node/js/NodeService.js'
				               ]//必需是数组
			}),
			"content@main":angularAMD.route({
				templateUrl : 'view/main/html/Content.html',
				controllerUrl:[ ]//必需是数组
			})
		}
	  }))
	 
	   .state('main.list.welcome',angularAMD.route({
		url : '/welcome',
		views : {
			"content@main":angularAMD.route({
				templateUrl : 'view/main/html/Welcome.html'
			})
		}
	  }))
	  
//	  =================================employee========================
	  .state('main.list.employee',angularAMD.route({
			url : '/employee',
			views : {
				"content@main":angularAMD.route({
					templateUrl : 'view/employee/html/EmployeeList.html'
				})
			}
		  }))
		  
		    .state('main.list.employee.list',angularAMD.route({
				url : '/list',
				css:[],
				views : {
					"content@main":angularAMD.route({
						templateUrl : 'view/employee/html/EmployeeList.html',
						controllerUrl : ['view/employee/js/EmployeeList.js',
						                 'view/employee/js/EmployeeService.js']
					})
				}
			  }))
		  .state('main.list.employee.form',angularAMD.route({
			url : '/form/:operate',
			css:[],
			views : {
				"content@main":angularAMD.route({
					templateUrl : 'view/employee/html/EmployeeForm.html',
					controllerUrl : ['view/employee/js/EmployeeForm.js',
					                 'view/employee/js/EmployeeService.js']
				})
			}
		  }))
	  
 //	  =================================Organization========================
  .state('main.list.organization',angularAMD.route({
		url : '/organization',
		views : {
			"content@main":angularAMD.route({
				templateUrl : 'view/organization/html/OrganizationList.html',
				controllerUrl : ['view/organization/js/OrganizationList.js']
			})
		}
	  }))
	  
	    .state('main.list.organization.list',angularAMD.route({
			url : '/list',
			css:[],
			views : {
				"content@main":angularAMD.route({
					templateUrl : 'view/organization/html/OrganizationList.html',
					controllerUrl : ['view/organization/js/OrganizationList.js',
					                 'view/organization/js/OrganizationService.js']
				})
			}
		  }))
	  .state('main.list.organization.form',angularAMD.route({
		url : '/form/:operate',
		css:[],
		views : {
			"content@main":angularAMD.route({
				templateUrl : 'view/organization/html/OrganizationForm.html',
				controllerUrl : ['view/organization/js/OrganizationForm.js',
				                 'view/organization/js/OrganizationService.js']
			})
		}
	  }))
//	  =================================Department========================
  .state('main.list.department',angularAMD.route({
		url : '/department',
		views : {
			"content@main":angularAMD.route({
				templateUrl : 'view/department/html/DepartmentList.html',
				controllerUrl : ['view/department/js/DepartmentList.js',
				                 'view/organization/js/OrganizationService.js'
				                 ]
			})
		}
	  }))
	  
	    .state('main.list.department.list',angularAMD.route({
			url : '/list',
			css:[],
			views : {
				"content@main":angularAMD.route({
					templateUrl : 'view/department/html/DepartmentList.html',
					controllerUrl : ['view/department/js/DepartmentList.js',
					                 'view/organization/js/OrganizationService.js',
					                 'view/department/js/DepartmentService.js']
				})
			}
		  }))
	  .state('main.list.department.form',angularAMD.route({
		url : '/form/:operate',
		css:[],
		views : {
			"content@main":angularAMD.route({
				templateUrl : 'view/department/html/DepartmentForm.html',
				controllerUrl : ['view/department/js/DepartmentForm.js',
				                 'view/department/js/DepartmentService.js',
				                 'view/organization/js/OrganizationService.js']
			})
		}
	  }))
//	  =================================module========================
		  .state('main.list.module',angularAMD.route({
				url : '/module',
				views : {
					"content@main":angularAMD.route({
						templateUrl : 'view/module/html/ModuleList.html'
					})
				}
			  }))
		  .state('main.list.module.list',angularAMD.route({
				url : '/list',
				css:[],
				views : {
					"content@main":angularAMD.route({
						templateUrl : 'view/module/html/ModuleList.html',
						controllerUrl : ['view/module/js/ModuleList.js',
						                 'view/module/js/ModuleService.js']
					})
				}
			  }))
		  .state('main.list.module.form',angularAMD.route({
			url : '/form/:operate',
			css:[],
			views : {
				"content@main":angularAMD.route({
					templateUrl : 'view/module/html/ModuleForm.html',
					controllerUrl : ['view/module/js/ModuleForm.js',
					                 'view/module/js/ModuleService.js']
				})
			}
		  }))
  //	  =================================Node 功能点========================
  .state('main.list.node',angularAMD.route({
		url : '/node',
		views : {
			"content@main":angularAMD.route({
				templateUrl : 'view/node/html/NodeList.html'
			})
		}
	  }))
  .state('main.list.node.list',angularAMD.route({
		url : '/list',
		css:[],
		views : {
			"content@main":angularAMD.route({
				templateUrl : 'view/node/html/NodeList.html',
				controllerUrl : ['view/node/js/NodeList.js',
				                 'view/node/js/NodeService.js']
			})
		}
	  }))
  .state('main.list.node.form',angularAMD.route({
	url : '/form/:operate/:nodeId',
	css:[],
	views : {
		"content@main":angularAMD.route({
			templateUrl : 'view/node/html/NodeForm.html',
			controllerUrl : ['view/node/js/NodeForm.js',
			                 'view/node/js/NodeService.js']
		})
	}
  }))
/*	  //图书列表
	  .state('main.list.bookslist',angularAMD.route({
		url : '/books',
		views : {
			"content@main":angularAMD.route({
				templateUrl : 'view/book/html/BookList.html',
				controller:'BookController',
				controllerUrl:['view/book/js/BookController.js' ]//必需是数组
			})
		}
	  }))*/
/*	  //编辑图书
	  .state('main.list.updateBook',angularAMD.route({
		url : '/updateBook/:id',
		views : {
			"content@main":angularAMD.route({
				templateUrl : 'view/book/html/BookForm.html',
				controller:'BookFormController',
				controllerUrl:['view/book/js/BookFormController.js']//必需是数组
			})
		}
	  }))
	  //新增图书
	  .state('main.list.addBook',angularAMD.route({
		url : '/addBook',
		views : {
			"content@main":angularAMD.route({
				templateUrl : 'view/book/html/BookForm.html',
				controller:'BookFormController',
				controllerUrl:['view/book/js/BookFormController.js']//必需是数组
			})
		}
	  }))*/
		//\\insertRow\\//
	})

	
	return angularAMD.bootstrap(app);
});




