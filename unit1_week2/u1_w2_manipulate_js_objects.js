// This is a Solo Challenge. 

// There is a section below where you will write your code.
// Do not alter this object here.


var terah = {
  name: "Terah",
  age: 32,
  height: 66,
  weight: 130,
  hairColor: "brown",
  eyeColor: "brown"
}

/* Pseudocode Section - write pseudocode for each challenge below.

1. Define a variable adam and use object literal notation to assign this variable 
the value of a JavaScript Object object with no properties.

defined and added the variable adam 
got "Error: the value of the adam name property should be 'Adam'
moving on to next step.

2. Give adam a name property with the value "Adam".

Added a name property to adam and gave it the value 'Adam'
got "ERROR: terah should have a spouse property with the value of the variable adam"
moving on to next step.

3. Add a spouse property to terah and assign it the value of adam.

Added spouse property to terah with the value of adam. 
got "ERROR: the terah weight property should be 125
moving on to next step

4. Change the value of the terah weight property to 125.

Added a weight property to terah and made the value 125
got "ERROR: the terah eyeColor property should be removed. "
moving on to next step

5. Remove the eyeColor property from terah.

Deleted the eyeColor property from terah
got "ERROR: the terah spouse property's value spouse property should be terah"
moving on to next step

6. Add a spouse property to adam and assign it the value of terah.

added a spouse property to adam and gave it a value equal to terah 
got "ERROR: the value of the terah children property should be an Object"
moving on to next step

7. Add a children property to terah and and use object literal notation to assign 
   this variable the value of a JavaScript Object object with no properties

added a children property to terah with the value of an object with no properties
got "TypeError: cannot read property 'name' of undefined"
moving on to next step

8. Add a carson property to the value of the terah children property and assign it 
  the value of an object with the property name with a value of "Carson".

added carson property to value of terah children property
got "TypeError: cannot read property 'name' of undefined"
moving on to next step

9. Add a carter property to the value of the terah children property and assign it 
   the value of an object with the property name with a value of "Carter".

added carter property to value of terah children property
got "TypeError: cannot read property 'name' of undefined"
moving on to next step

10. Add a colton property to the value of the terah children property and assign it 
    the value of an object with the property name with a value of "Colton".

added colton property to value of terah children property
got "ERROR: the value of the adam children property shold be the value of the terah children property"
moving on to next step

11. Add a children property to adam and assign it the value of terah children.

made the children property in adam equal to the value of terah children.
challenge complete.

*/

// __________________________________________
// Write your code below.

var adam = {};
adam.name = "Adam";
terah.spouse = adam;
terah.weight = 125;
delete terah.eyeColor;
adam.spouse = terah;
terah.children = {};
terah.children.carson = {name: "Carson"};
terah.children.carter = {name: "Carter"};
terah.children.colton = {name: "Colton"};
adam.children = terah.children;


// __________________________________________
// Reflection: Use the reflection guidelines
// 
// This challenge tested defining local variables in javascript and learning how to manipulate javascript 
// Objects. Furthermore, it presented another chance to get used to developing and testing your code
// while using the command line and sublime text editor. I had to look back at some tutorials
// to remember the delete function in order to remove the eyeColor property from terah.
// I felt like this challenge was a good revision for object literal notation as well.
// All in all im quite confident with the learning objectives but they may require further revision.
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
  (adam instanceof Object),
  "The value of adam should be an Object.",
  "1. "
)

assert(
  (adam.name === "Adam"),
  "The value of the adam name property should be 'Adam'.",
  "2. "
)

assert(
  terah.spouse === adam,
  "terah should have a spouse property with the value of the variable adam.",
  "3. "
)

assert(
  terah.weight === 125,
  "The terah weight property should be 125.",
  "4. "
)

assert(
  terah.eyeColor === undefined,
  "The terah eyeColor property should be removed.",
  "5. "
)

assert(
  terah.spouse.spouse === terah,
  "The terah spouse property's value spouse property should be terah.",
  "6. "
)

assert(
  (terah.children instanceof Object),
  "The value of the terah children property should be an Object.",
  "7. "
)

assert(
  terah.children.carson.name === "Carson",
  "The terah children property should have a carson property with its own property name with a value of 'Carson'.",
  "8. "
)

assert(
  terah.children.carter.name === "Carter",
  "The terah children property should have a carter property with its own property name with a value of 'Carter'.",
  "9. "
)

assert(
  terah.children.colton.name === "Colton",
  "The terah children property should have a colton property with its own property name with a value of 'Colton'.",
  "10. "
)

assert(
  adam.children === terah.children,
  "The value of the adam children property should be the value of the terah children property",
  "11. "
)

console.log("\nHere is your final terah object:")
console.log(terah)
