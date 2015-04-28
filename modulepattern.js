// This is a basic module pattern
// the immediately invoked function returns 
// an object. 
// since we do not want the _counter variable 
// to be accessed from outside, we have set is
// as a variable and not as a property of the 
// object. 
/*
var dom = (function(){

	var _counter = 0;

	return {
		generateId: function(){
			return 'customId' + _counter++;
		},

		create: function(tagName, id){

			var el = document.createElement(tagName);

			el.id = id || this.generateId();

			return el;
		}
	}

}());
*/



var dom = (function(){

	var _counter = 0;

	return {

		geneateId: function(){

			return "cur" + _counter_++;

		},
	
		getElement: function(tagName, id){
		
		var el = document.createElement(tagName);
		
		el.id = id || this.generateId();

		return el;
	} 


	};
}

());

























