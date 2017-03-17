

/*asddfd
asddfdasd
many comments
*/
// curly brackets for objects square brackets to refer the item
// alert("hello class")


//1 Create a script with two variables, each assigned to a number. Add them together and output the result to the console. Now do the same with two strings.
// answer:

var sum1 = 1+4;
var sum2 = 43+34
console.log(sum1+sum2);

var person = "maria";
var age = 30;
var color = "green";
console.log ("person " + "color ");

// putting space on the front will seperate things



// 2 Create a multidimensional array related to a subject that interests you. Output two of the items in sub-arrays to the console.
// ansewer:

var student= {
  firstName : "Maria",
  lastName : "Francia",
  birthday : "october",
  interests :[
    "Make-up",
  "desserts",
  "clothes"
]
}
console.log(student)


// 3 Write a script that checks if a variable captured from a prompt is less than 100. If it is, alert the user that their variable is less than 100. If it is not alert the user of what the value was and that it was greater than 100.
// ansewer://
if (5 < 10) {

} else {
console.log("5 is not less than 10");
}
var pets = "dogs"
if (pets == "dogs") {
  console.log("cats")
} else {
  alert("pets")
}

 var numbers = 100
 if ( numbers < 99) {
   alert("you got it!");
 } else {
  prompt("100");

 }
 //  // prompt(this is " + numbers" this is greater);


// 4 Try running the script and then changing the variable's value to see how this affects the program's output.
var numbers = 50
if ( numbers >= 50) {
  alert("try again!");
} else {
 prompt(49);
}
// // 5 Write a similar script to check if a string stored in a variable is the same as another string.
var colors = "red"
if (colors == "blue"){
console.log("its the color")
}


// 6 Declare a function that takes a name as an argument and tells the user what name they've entered. Try running it after it has been declared.
// ansewer:
function someName (nameOne, nameTwo);{
  console.log("maria is my name");
}
someName()
// 7 Declare a function that takes no arguments but prints something to the console. Try running it after it has been declared.
function school(){
  console.log('beer');
}
school()


// Declare a function that depending upon which virtual 'door' was entered tells the user they've received a different 'prize' in an alert. After declaring the function, try running it with different options. There must be at least 3 doors.

function chooseDoor(door){
if (door == 1 ) {
  alert ("try again")

}
else if (door == 2){
  alert ( "try again")
}

else if (door == 3){
  alert ( "you got it")
}
else {
alert  ("please choose 1 2 3")
}
}
chooseDoor (prompt())
// ===============================
// var className = ["Orlando", "Maria" , "Fizal"];

// console.log( className)
// // curly brackets for objects
// var car = {make: 'toyota', model: 'Pirius'};
// console.log(car ['make']);
