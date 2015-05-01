//Javascript and the DOM are heavily event driven

//publish-subscribe
//subscribing to the subject's event


define(function(){

	//this keeps track of our subscribers
	var subscribers = {};

	function subscribe(type, fn){
		if(!subscribers[type]){
			subscribers[type] = [];
		}

		if(subscribers[type].indexOf(fn) == -1){
			subscribers[type].push(fn);
		}
	}

	function unsubscribe(type, fn){
		var listeners = subscribers[type];

		if(!listeners){
			return;
		}

		var index = listeners.indexOf(fn);

		if(index > -1){
			listeners.splice(index, 1);
		}
	}

	function publish(type, evtObj){

		if(!subscribers[type]){
			return;
		}

		if(!evtObj.type){
			evtObj.type = type;
		}

		var listeners = subscribers[type];

		for(var i = 0; i < listeners.length; i++){

			listeners[i](evtObj)
		}
	}

	return {

		subscribe: subscribe,
		unsubscribe: unsubscribe,
		publish: publish
	}
})















