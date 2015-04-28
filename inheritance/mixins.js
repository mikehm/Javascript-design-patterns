//Mixins make multiple inheritance easy
//The purpose of mixins is to take one object
//and mix in the functionalities of another object
//jquery has its own $.extend() method that is used
//for the puspose of mixing functionalities


function extend(target){

	//target is the target object to which we want to 
	//add  the functionalities of other objects to

	//extend() when invoked should take multiple 
	//parameters...the first param is the target 
	//object and the params starting from index 1 
	// are the mixin objects 

	//if there are no mixin objects return nothing.
	if(!arguments[1]){
		return;
	}

	for(var i = 1; i < arguments.length; i++){

		//source is an object
		var source = arguments[i];

		//loop through source 
		for(prop in source){
			//if the property doesnt exist on the target object 
			//and the property is the source object's own property 
			//and not on its prototype...the assign the property to target
			
			if(!target[prop] && source.hasOwnProperty(prop)){

				target[prop] = source[prop];
			}
		}
	}

	console.log(source);
	console.log(target); 

}

function Person(name){
	this.name = name;
}

function Dog(name){
	this.name = name;
}

var speaker = {

	speak: function(){

		return this.name + " is speaking";
	}
};

var walker = {

	walk: function(){

		return this.name + " is walking";
	},

	run: function(){

		return this.name + " is running";
	}
};

var arithmetic = {

	add: function(){

		return this.name + " is adding.";
	},

	multiply: function(){

		return this.name + " is multiplying";
	}

}


extend(Person, speaker, walker, arithmetic)
extend(Dog, speaker, walker)

console.log(Person.speak())
console.log(Dog.run())
console.log(Person.add())


//var john = new Person("John")

//console.log(john.add())














