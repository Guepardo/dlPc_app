var DeliveryAPI = function(){
	this.API_KEY       = window.localStorage.getItem('api_key'); 
	this.HOST_NAME_API = 'http://192.168.0.6:3000'; 
}; 

DeliveryAPI.prototype.send = function(relativePath, data, callback){
	var url = this.HOST_NAME_API+'/v1.0/'+relativePath; 

	$.post({
		url: url, 
		data: data, 
		dataType: 'json'
	}).done(function(data){
		callback(data); 
	}).fail(function(){
		alert('Falha na conexão'); 
	}); 
}; 

DeliveryAPI.prototype.register = function(data,callback){
	this.send('register',data,callback); 
}; 

DeliveryAPI.prototype.validate = function(data,callback){
	this.send('validate',data,callback); 
}; 

DeliveryAPI.prototype.getStatus = function(callback){
	var data = new Array(); 
	data.push( new Object({name: 'api_key', value: this.API_KEY}));
	this.send('getStatus',data,callback); 
};

DeliveryAPI.prototype.cancelSolicitation = function(callback){
	var data = new Array(); 
	data.push( new Object({name: 'api_key', value: this.API_KEY}));
	this.send('cancelSolicitation',data,callback); 
};

DeliveryAPI.prototype.createSolicitation = function(data,callback){
	data.push( new Object({name: 'api_key', value: this.API_KEY}));
	this.send('createSolicitation',data,callback); 
}; 


DeliveryAPI = new DeliveryAPI(); 