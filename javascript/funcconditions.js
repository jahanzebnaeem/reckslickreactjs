// Datatype String

// Psudo code
// Get name from user
// Split the provided name
    // Only first name
    // both
    // none


var name = prompt('Enter your name');

// console.log(name[3]);
// console.log(name.split(' '));

var values = name.split(' ');
var firstName;
var lastName;

if(values.lenght == 1){
    firstName = values[0];
} else if (values.lenght >= 2) {
    firstName = values[0];
    lastName = values[1];
} else {
    firstName = 'Not provided';
    lastName = 'Not provided';
}

console.log('Your First Name : ' + firstName + ' and Family Name : ' + lastName);


// // Conditions
// var personAge = prompt("Enter your age to check if you can have a driver's lisence!");

// if(personAge >= 21) {
//     console.log('You are eligiable to drive a car/bike');
// } 
// else if(personAge >= 16 && personAge < 21){
//     console.log('You can have a learning lisence');
// }
// else {
//     console.log('You are too young to drive');
// }

// Functions in JS
// // buyMilk();
// // buyMilk(3);
// var changeAmount = buyMilk(150);
// console.log('Here is the remaining amount: ' + changeAmount);


// function moveForward() {
//     console.log("Move");
//     console.log("Move");
//     console.log("Move");
//     console.log("Move");
//     console.log("Move");
// }

// function moveDirection() {
//     console.log("Turn right");
//     moveForward();
//     console.log("Move");
//     console.log("Turn left");
//     moveForward();
// }

// // // Simple method
// // function buyMilk() {
// //     console.log("Get out of the house");
// //     moveDirection();
// //     console.log("Enter shop")
// //     console.log("Buy milk");
// //     console.log("Get out of the house");
// //     console.log("Exit shop");
// //     moveDirection();
// //     console.log("Enter house");
// // }

// // // Parameterised method
// // function buyMilk(milkPack) {
// //     console.log("Get out of the house");
// //     moveDirection();
// //     console.log("Enter shop")
// //     console.log("Buy " + milkPack + " milk pack");
// //     console.log("Get out of the house");
// //     console.log("Exit shop");
// //     moveDirection();
// //     console.log("Enter house");
// // }

// // Parameterised function
// function buyMilk(amount) {
//     console.log("Get out of the house");
//     moveDirection();
//     console.log("Enter shop")
//     var milkPack = Math.floor(amount/100);
//     var changeReturned = amount%100;
//     console.log("Buy " + milkPack + " milk pack");
//     console.log("Get out of the house");
//     console.log("Exit shop");
//     moveDirection();
//     console.log("Enter house");
//     return changeReturned
// }