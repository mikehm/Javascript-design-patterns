//The constructor pattern
//A constructor doesnt have to have any parameters
//Do not define methods inside constructors,
//that will result in creating specific function objects when 
//instances of the data type (the constructor) are created.
//That will cause an increase in memory usage.
//Instead define methods on the constructor's prototype.
//The object instances will then have access to the same function
//in the prototype of the constructor. 
//Any propety or method defined on the prototype of the 
//constrructor is shared among the instances of the constrcutor 
//function.


function Person(firstName, lastName){
	this.firstName = firstName;
	this.lastName = lastName;
};


Person.prototype.sayName = function(){

	return 'Hello my name is ' + this.firstName + ' ' + this.lastName; 
};

var johnDoe = new Person('John', 'Doe');

console.log(johnDoe.sayName());


