var DeliveryLocalStorage = function(){
	this.lc = window.localStorage; 
}; 

DeliveryLocalStorage.prototype.get = function(key){
	return this.lc.getItem(key); 
}; 

DeliveryLocalStorage.prototype.set = function(key,item){
	this.lc.setItem(key,item); 
	return true; 
}; 

DeliveryLocalStorage.prototype.remove = function(key){
	return this.lc.removeItem(key); 
}; 

DeliveryLocalStorage.prototype.exists = function(key){
	var temp = this.lc.getItem(key); 
	if( temp == null || temp == '')
		return false; 
	return true; 
}; 