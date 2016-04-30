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
				templateUrl : 'view/main/html/Menu.html',
				controllerUrl:[
				               ]//必需是数组
			}),
			"content@main":angularAMD.route({
				css:['common/common.css'],
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
		url : '/form/:operate/:organizationId',
		css:[],
		views : {
			"content@main":angularAMD.route({
				templateUrl : 'view/organization/html/OrganizationForm.html',
				controllerUrl : ['view/organization/js/OrganizationForm.js',
				                 'view/organization/js/OrganizationService.js']
			})
		}
	  }))
	   .state('main.list.organization.display',angularAMD.route({
		url : '/display/:organizationId',
		views : {
			"content@main":angularAMD.route({
				templateUrl : 'view/organization/html/OrganizationDisplay.html',
				controllerUrl : ['view/organization/js/OrganizationDisplay.js',
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
				                 'view/organization/js/OrganizationService.js',
				                 'view/department/js/DepartmentService.js'
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
		url : '/form/:operate/:departmentId',
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
	  .state('main.list.department.display',angularAMD.route({
		url : '/display/:departmentId',
		css:[],
		views : {
			"content@main":angularAMD.route({
				templateUrl : 'view/department/html/DepartmentDisplay.html',
				controllerUrl : ['view/department/js/DepartmentDisplay.js',
				                 'view/department/js/DepartmentService.js',
				                ]
			})
		}
	  }))
//	  =================================module========================
		  .state('main.list.module',angularAMD.route({
				url : '/module',
				views : {
					"content@main":angularAMD.route({
						templateUrl : 'view/module/html/ModuleList.html',
						controllerUrl : ['view/module/js/ModuleList.js',
						                 'view/module/js/ModuleService.js']
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
			url : '/form/:operate/:moduleId',
			css:[],
			views : {
				"content@main":angularAMD.route({
					templateUrl : 'view/module/html/ModuleForm.html',
					controllerUrl : ['view/module/js/ModuleForm.js',
					                 'view/module/js/ModuleService.js']
				})
			}
		  }))
		   .state('main.list.module.display',angularAMD.route({
			url : '/display/:moduleId',
			css:[],
			views : {
				"content@main":angularAMD.route({
					templateUrl : 'view/module/html/ModuleDisplay.html',
					controllerUrl : ['view/module/js/ModuleDisplay.js',
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
  .state('main.list.node.display',angularAMD.route({
	url : '/display/:nodeId',
	css:[],
	views : {
		"content@main":angularAMD.route({
			templateUrl : 'view/node/html/NodeDisplay.html',
			controllerUrl : ['view/node/js/NodeDisplay.js',
			                 'view/node/js/NodeService.js']
		})
	}
  }))
    //	  =================================Post岗位========================
  .state('main.list.post',angularAMD.route({
		url : '/post',
		views : {
			"content@main":angularAMD.route({
				templateUrl : 'view/post/html/PostList.html',
				controllerUrl : ['view/post/js/PostList.js',
				                 'view/post/js/PostService.js',
				                 'view/department/js/DepartmentService.js']
			})
		}
	  }))
  .state('main.list.post.list',angularAMD.route({
		url : '/list',
		views : {
			"content@main":angularAMD.route({
				templateUrl : 'view/post/html/PostList.html',
				controllerUrl : ['view/post/js/PostList.js',
				                 'view/post/js/PostService.js',
				                 'view/department/js/DepartmentService.js']
			})
		}
	  }))
  .state('main.list.post.form',angularAMD.route({
	url : '/form/:operate/:postId',
	views : {
		"content@main":angularAMD.route({
			templateUrl : 'view/post/html/PostForm.html',
			controllerUrl : ['view/post/js/PostForm.js',
			                 'view/post/js/PostService.js']
		})
	}
  }))
   .state('main.list.post.display',angularAMD.route({
	url : '/display/:postId',
	views : {
		"content@main":angularAMD.route({
			templateUrl : 'view/post/html/PostDisplay.html',
			controllerUrl : ['view/post/js/PostDisplay.js',
			                 'view/post/js/PostService.js']
		})
	}
  }))
 //	  =================================Duty 职务========================
  .state('main.list.duty',angularAMD.route({
		url : '/duty',
		views : {
			"content@main":angularAMD.route({
				templateUrl : 'view/duty/html/DutyList.html',
				controllerUrl : ['view/duty/js/DutyList.js',
				                 'view/duty/js/DutyService.js',
				                ]
			})
		}
	  }))
  .state('main.list.duty.list',angularAMD.route({
		url : '/list',
		css:[],
		views : {
			"content@main":angularAMD.route({
				templateUrl : 'view/duty/html/DutyList.html',
				controllerUrl : ['view/duty/js/DutyList.js',
				                 'view/duty/js/DutyService.js',
				                 ]
			})
		}
	  }))
  .state('main.list.duty.form',angularAMD.route({
	url : '/form/:operate/:dutyId',
	css:[],
	views : {
		"content@main":angularAMD.route({
			templateUrl : 'view/duty/html/DutyForm.html',
			controllerUrl : ['view/duty/js/DutyForm.js',
			                 'view/duty/js/DutyService.js']
		})
	}
  }))
  .state('main.list.duty.display',angularAMD.route({
	url : '/display/:dutyId',
	css:[],
	views : {
		"content@main":angularAMD.route({
			templateUrl : 'view/duty/html/DutyDisplay.html',
			controllerUrl : ['view/duty/js/DutyDisplay.js',
			                 'view/duty/js/DutyService.js']
		})
	}
  }))
  //	  =================================Message 职务========================
  .state('main.list.message',angularAMD.route({
		url : '/message',
		views : {
			"content@main":angularAMD.route({
				templateUrl : 'view/message/html/MessageList.html',
				controllerUrl : ['view/message/js/MessageList.js',
				                 'view/message/js/MessageService.js',
				                ]
			})
		}
	  }))
  .state('main.list.message.list',angularAMD.route({
		url : '/list',
		css:[],
		views : {
			"content@main":angularAMD.route({
				templateUrl : 'view/message/html/MessageList.html',
				controllerUrl : ['view/message/js/MessageList.js',
				                 'view/message/js/MessageService.js',
				                 ]
			})
		}
	  }))
  .state('main.list.message.form',angularAMD.route({
	url : '/form/:operate/:messageId',
	css:[],
	views : {
		"content@main":angularAMD.route({
			templateUrl : 'view/message/html/MessageForm.html',
			controllerUrl : ['view/message/js/MessageForm.js',
			                 'view/message/js/MessageService.js']
		})
	}
  }))
		//\\insertRow\\//
})

	return angularAMD.bootstrap(app);
});




