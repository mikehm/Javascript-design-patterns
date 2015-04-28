//Object.create allows the creation of objects that 
//are based on other objects.
//An example could be var bar = Object.create(Object.prototype)

//Object.create() accepts parameters such as the object that 
//we want to create a new object from and an object with 
//property names and their object descriptors containing the 
//values of the properties 

//What the create() method does is set a prototype chain 
//in the example below johnDoe is the prototype of janeDoe 
//and janeDoe is the prototype of jimSmith

var johnDoe = {

	firstName: 'John',
	lastName: 'Doe',
	sayName: function(){
		return 'My name is ' + this.firstName + ' ' + this.lastName;
	}
}

var janeDoe = Object.create(johnDoe, {
	firstName: {value:'Jane'}, 
	greet: {
		value: function(person){
	   			return 'Hello ' + person.firstName
	   	}
	}
});

console.log(janeDoe.sayName())
console.log(janeDoe.greet(johnDoe))

var jimSmith = Object.create(janeDoe, {

	firstName: {value: 'Jim'},
	lastName: {value: 'Smith'}
});

console.log(janeDoe.sayName() +  " ; " + janeDoe.greet(jimSmith))

//To check whether the prototypes of two objects are equal, we can use the __proto__
//property 

console.log(janeDoe.__proto__ === johnDoe) //true
console.log(jimSmith.__proto__ === janeDoe) //true








