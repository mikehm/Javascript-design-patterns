var dom = (function(){

	var _counter = 0;
	var instance;
	//This is the singlton instance, it is currently undefined;

	function generateId(){
		return "customId" + _counter++;
	}

	function create(tagName, id){
		var el = document.createElement(tagName);
		el.id = id || generateId();
		return el;
	}
	// We have to return a global point of access for the 
	// singleton in our return object 
	// However, before doing that we have to create
	// teh instance inside a function that 
	// we will call in our global return object 

	function createInstance(){
		return {
			generateId: generateId,
			create: create
		};
	} 
	// The global return object below will have a function 
	// called getInstance that will return the 
	// instance, if it is available ot will call the 
	// createInstance() function and assign it to instance.
	return {
		getInstance: function(){
			return instance || (instance = createInstance());
		}
	};
}());