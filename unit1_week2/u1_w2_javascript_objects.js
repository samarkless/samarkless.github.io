// I paired [by myself, with: myself] on this challenge.




// Pseudocode
// Opened commandline and ran this file using node.js
// Got "ERROR: The value of secretNumber should be a number."
// made a new variable, secretNumber, equal to 10
// Got "ERROR: The value of secretNumber should be 7"
// changed the value of the secretNumber variable to 7
// code accepted, moving on to next part
// 
// Got "ERROR: The value of password should be a string."
// made a new variable, password, equal to string "whats the pass?"
// Got "ERROR: The value of password should be 'just open the door'"
// changed the password variable to be equal to the string "just open the door"
// code accepted, moving on to next part
// 
// Got "ERROR: The value of allowedIn should be a boolean"
// made a new variable, allowedIn, with a value equal to the boolean false.
// code accepted, moving onto next part
// 
// Got "members instanceof Array", and "ReferenceError: members is not defined"
// made a new variable, members, and set it equal to an array containing "sam" and "annatina"
// Got "ERROR: the first element in the value of members should be 'John'"
// changing members variable to equal array with 'John' inside.
// Got "ERROR: the fourth elements in the value of members should be 'Mary'"
// changing members variable to equal array with 'john', 'sam','annatina', and 'mary' inside 
// code accepted, challenge over

// __________________________________________
// Write your code below.
var secretNumber= 7;
var password = "just open the door";
var allowedIn= false;
var members = ["John", "sam", "annatina", "Mary"];


// __________________________________________
// Refactored Code: Include a refactored version (or justification of your original code) here. 

// I feel as though my variable names are descriptive and as short as possible. It also is not DRY.
// In terms of refactoring, I believe my code could be changed so that it takes up less lines
// however I feel like this would reduce the readability of the code for the sake of short code.
// That being said I will keep my code how it is.


// __________________________________________
// Reflection: Use the reflection guidelines to write a reflection here. 
// 
// In this challenge I revised how to define local variables in javascript, 
// and how to create objects of different types. One tricky concept was Test-Driven Development
// and using my text editor and command line together in order to quickly and effectively test my code.
// Although once I tried this a few times it became much easier and it seems like a very useful skill to have.
// Looking at the pros and cons of refactoring my code was interesting and the readability vs. short code debate is
// clearly important to any code. 
// 
// 
// 
// 
// __________________________________________
// Driver Code:  Do not alter code below this line.

function assert(test, message, test_number) {
  if (!test) {
    console.log(test_number + "false");
    throw "ERROR: " + message;
  }
  console.log(test_number + "true");
  return true;
}

assert(
  (typeof secretNumber === 'number'),
  "The value of secretNumber should be a number.",
  "1. "
)

assert(
  secretNumber === 7,
  "The value of secretNumber should be 7.",
  "2. "
)

assert(
  typeof password === 'string',
  "The value of password should be a string.",
  "3. "
)

assert(
  password === "just open the door",
  "The value of password should be 'just open the door'.",
  "4. "
)

assert(
  typeof allowedIn === 'boolean',
  "The value of allowedIn should be a boolean.",
  "5. "
)

assert(
  allowedIn === false,
  "The value of allowedIn should be false.",
  "6. "
)

assert(
  members instanceof Array,
  "The value of members should be an array",
  "7. "
)

assert(
  members[0] === "John",
  "The first element in the value of members should be 'John'.",
  "8. "
)

assert(
  members[3] === "Mary",
  "The fourth element in the value of members should be 'Mary'.",
  "9. "
)


