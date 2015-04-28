//Inheritance between two constructor functions

function Beverages(name, temperature){

	this.name = name;
	this.temperature = temperature;
}


Beverages.prototype.drink = function(){
	console.log('Drinking ' + this.name);
};

//Create the next constructor 
//type is the type of coffee (dark rost, bold, mild etc)



function Coffee(type){
	//Call the Beverages constructor inside of
	//the Coffee constructor to initialize 
	//the name and beverage properties 
	Beverages.call(this, "coffee", "hot");
	this.type = type;
}

//After defining the Coffee constructor...to 
//make teh inheritance effective we have to 
//create an instance of the Beverages class on 
//the prototype object of the Coffee Constructor

Coffee.prototype = new Beverages("Coffee", "Hot");



//define a method sip on the prototype
Coffee.prototype.sip = function(){

	console.log('Sipping ' + this.type + " " + this.name);
};


var water = new Beverages("water", "cold");
var coffee = new Coffee("bold dark roast");

console.log(water.drink())
console.log(coffee.drink());
console.log(coffee.sip())






