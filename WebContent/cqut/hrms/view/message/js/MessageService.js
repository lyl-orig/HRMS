var  messageApp=angular.module('messageApp', []);

messageApp.factory('MessageService',['$resource',function($resource){
	
	var messageService = $resource('/Message/:action',{});
	
	messageService.insertMessage=function(message,sucesscb,errorcb){
		messageService.save({action:'insertMessage'},message,sucesscb,errorcb);
	}
	
	messageService.getAllMessages=function(sucesscb,errorcb){
		messageService.query({action:'getAllMessages'},sucesscb,errorcb);
	}
	
	messageService.getMessageById =function(id,sucesscb,errorcb){
		
		messageService.save({action:'getMessageById'},id,sucesscb,errorcb);
	}
	
	return messageService;
}]);