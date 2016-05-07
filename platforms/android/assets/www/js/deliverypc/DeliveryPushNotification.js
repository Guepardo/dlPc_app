var DeliveryPushNotification = function(){
	document.addEventListener('deviceready', this.setUp, false);
};

DeliveryPushNotification.prototype.setUp = function(){
	var push = PushNotification.init({
		android: {
			senderID: "488794373348",
			alert: "true",
			badge: "true",
			sound: "true"
		},
		ios: {
			alert: "true",
			badge: "true",
			sound: "true"
		},
		windows: {}
	});

	var onNotification = null; 

	push.on('registration', function(data) {
		//alert("Id app: "+data.registrationId);
		window.localStorage.setItem('gcm_key', data.registrationId); 
	});

	push.on('notification', function(data) {
		alert("Title: "+ data.title+" Message: "+data.message); 
		if( typeof this.onNotification == "function")
			this.onNotification(data); 
	});

	push.on('error', function(e) {
		alert(e); 
	});
}; 

DeliveryPushNotification.prototype.setOnNotification = function(callback){
	this.onNotification = callback; 
}

DeliveryPushNotification = new DeliveryPushNotification(); 
