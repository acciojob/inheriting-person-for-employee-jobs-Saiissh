// complete this js code
function Person(name, age) {
	constructor(name,age){
		this.name=name;
		this.age=age;
	}

	greet(){
	console.log("Hello, my name is "+this.name+" , I am "+this.age+" years old.")
	}
}

function Employee(name, age, jobTitle) {
	constructor(name,age,jobTitle){
	this.name=name;
		this.age=age;
		this,jobTitle=jobTitle;
	}
	
}

// Do not change code below this line
window.Person = Person;
window.Employee = Employee;
