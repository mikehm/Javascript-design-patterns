//Creational patterns

var obj = {};
//var obj = new Object();

//There are several ways of defining properties 

//The dot syntax

obj.firstName = "Jeremy";

//Square bracket syntax 

obj["lastName"] = "McPeak";

//The square bracket synta gives us the flexibility 
//to use invalid identifiers and reserved words 
//as property names, but thats not genreally 
//recommeded:

obj["first name"] = "Jeremy" //this is valid
obj["new"] = "something" //this is valid

//definePropety() method can be used to define 
//a property on an object 

//defineProperty accepts three parameters
//the object that we want to define the properties on
//the name the property and an object descriptor 
//with a value property.

Object.defineProperty(obj, 'country', {
	value: 'England'
});

console.log(obj.country); //Ethiopia

//defineProperties() defines multiple properties on 
//an object 

Object.defineProperties(obj, {

	twitter: {
		value: 'jmcpeak'
	}, 

	email: {
		value: 'jmcpeak@gmail.com'
	}

});


console.log(obj.twitter); //jmcpeak

console.log(obj.email); //jmcpeak@gmail.com



