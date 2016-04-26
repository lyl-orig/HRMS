require.config({
    baseUrl: "",
   
    // alias libraries paths.  Must set 'angular'
    paths: {
    	'angularAnimate': '../js/angular/angular-animate',
    	'angularResource': '../js/angular/angular-resource',
    	'angularUIbootstrap': '../js/angular/angular-ui-bootstrap',
    	'angularUIrouter': '../js/angular/angular-ui-router',
        'angular': '../js/angular/angular',
        'angularAMD': '../js/angular/angularAMD',
        'bootstrap': '../js/angular/bootstrap',
		'jquery':'../js/jquery/jquery-1.9.0',
		'ngGridDebug':'../js/nggrid/ng-grid',
		'uiBootstrap':'../js/bootstrap/ui-bootstrap-0.12.0',
		'app':'js/app'
    },
    
    // Add angular modules that does not support AMD out of the box, put it in a shim
    //注入依赖模块
    shim: {
    	'angularAnimate': ['angular'],
    	'angularResource': ['angular'],
    	'angularUIbootstrap': ['angular'],
    	'angularUIrouter': ['angular'],
        'angularAMD': ['angular'],
        'ngGridDebug': ['angular'],
        'bootstrap':['jquery'],
    },  
    // kick start application
    deps: ['app']//定义模块app
});

require( ['../js/jquery/jquery-1.9.0.js']);