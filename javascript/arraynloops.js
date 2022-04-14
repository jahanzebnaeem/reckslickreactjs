// var guestList = ['Jahanzeb', 'Sheeraz', 'Mubeen', 'Ubaid'];
// console.log(guestList[2]);
// guestList.push('Ali');
// console.log(guestList);
// var outGuest = guestList.pop();
// console.log(guestList);
// console.log(outGuest);
// guestList.includes('Mubeen');

// Steps
// create a method
// Add the values to array
// check if multiple of 3 then write fizz
// check if multiple of 5 then write buzz
// check if multiple of 3 & 5 then write fizzbuzz
// else write number

// // Fizz Buzz Game
// var countedNumbers = [];
// var counter = 1;

// function fizzBuzzGame() {
//     while(counter <= 100) {
//         if (counter % 3 == 0 && counter % 5 == 0) {
//             countedNumbers.push('fizzbuzz');
//         }
//         else if (counter % 3 == 0) {
//             countedNumbers.push('fizz');
//         } 
//         else if (counter % 5 == 0) {
//             countedNumbers.push('buzz')
//         }
//         else {
//             countedNumbers.push(counter);
//         }
//         // console.log(countedNumbers);
//         counter++;
//     }
//     console.log(countedNumbers);
// }

var person = {fname:"Jahanzeb", lname:"Naeem", age:30};

for (var x in person) {
    console.log(person[x]);
}