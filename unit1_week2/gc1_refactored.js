// We will have 9 tests running through the arrays below. 
// 3 of the tests simply check to see if certain words are keywords 
// We could write a long function that loops through every keyword to see if the 
// desired keyword belongs to that group, but that is a bit overkill. 

// create two arrays of information containing numbers.
 
var groupArray1 =[1, 2, 3, 4, 5, 6, 7];
var groupArray2 = [4, 4, 5, 5, 6, 6, 6, 7];
 
// Test 1

// if 'sum' is a reserved keyword in JS
// type 'sum', you will get Error: sum not defined
// Nothing else to do here
 
 'sum';

// Declare Sum as a function of groupArray1
// use for to create a loop.
// return sum

function sum (array) {
  var sum = 0;
  for (i = 0; i < array.length; i++) {
    sum = sum + array[i];
  }
  return sum;
}


//create two var, sum1 and sum2, that are equal to the sum of groupArray1 and groupArray2
var sum1 = sum(groupArray1);
var sum2 = sum(groupArray2);
 
 
// Test 2

// if sum1 is equal to 27, then the user is returned a statement: true. 
// Else, the console will notify the user of an Error.

if (sum1 === 27){
  return true;
}
else {
  console.log("Error: sum should return the sum of all elements in an array with an odd length.");
}

  
// Test 3
 
// if sum2 is equal to 43, then the user is returned a statement: true. 
// Else, the console notifies the user of an Error.

if (sum2 === 43){
  return true;
  }

  else {
  console.log("Error: sum should return the sum of all elements in an array with an odd length.");
}

//use the console to print sum1 and sum2 to the user.

console.log(sum1);
console.log(sum2);

// Test 4

// if 'mean' is a reserved keyword in JS
// type 'mean', you will get Error: mean not defined
// Nothing else to do here
// Declare 'mean' as a function

var mean1 = sum1/groupArray1.length;
 

// Test 5
 
// if median2 is equal to 5.5, then the user is returned a statement: true.
// Else the console notifies the user of an Error.

if (median2 === 5.5){
  return true;
}
else {
  console.log("Error: median should return the median value of all elements in an array with an odd length");
}
  
//Declare 'mean' as a function

var mean2 = sum2/groupArray2.length;
 

// Test 6

// if mean2 is equal to 5.375, then the user is returned a statement: true.
// Else the console notifies the user of an Error.

if (mean2== 5.375) {
  return true;
}
else {
    console.log("Error: mean should return the average of all elements in an array with an odd length.");
}


// Test 7


// if 'median' is a reserved keyword in JS
// type 'median', you will get Error: median not defined
// Nothing else to do here
 
 'median'

// declare median as a function 
// sort the array
// get the length of the array
// if the length is odd (use modulus)
// return the middle value
// else
// get the two values in the middle of the array
// calculate the average of the two values
// return the average

 function median(array) {
   var sorted = array.sort();
   var length = array.length;
   if (length %2 ==1) {
      return array[length/2];
   } else{
      var median = (array[length/2]+array[length/2+1])/2;
      return median;
   }
 }

//set median1 and median2 to equal the median of groupArray1 and group Array2 respectively.

 median1 = median(groupArray1);
 median2 = median(groupArray2);
 

// Test 8
 
// if median1 is equal to 4, then the user is returned a statement: true.
// Else the console notifies the user of an Error.

if (median1 === 4){
  return true;
}
else {
  console.log("Error: median should return the median value of all elements in an array with an odd length");
}
 
 

// Reflection
 
// What parts of your strategy worked? What problems did you face?
 
// The general refactoring and cleaning up of the code was simple enough, however making the distinction between using pseudo code and making a user story is a bit difficult.

// What questions did you have while coding? What resources did you find to help you answer them?
 
// Mostly questions over how to correctly articulate some syntax in the form of pseudo code. I used tutorials on codeacademy.com to revise this. 
 
// What concepts are you having trouble with, or did you just figure something out? If so, what?
 
// Still having trouble with refactoring of code and realising when you need to sacrifice readability for a more concise piece of coding.
 
// Did you learn any new skills or tricks?
 
// Some pieces of the code above in the tests were quite different to what I usually see in terms of syntax.
 
// How confident are you with each of the learning objectives?
 
// Pretty confident, although this will all require some form of revision. 
 
// Which parts of the challenge did you enjoy?
 
// Cleaning up the code was fun. 
 
// Which parts of the challenge did you find tedious?
 
// Rewriting similar pseudo code. 
 
// What was this experience like?
 
// It was fun working with others in the accountability group however I felt a bit disconnected since we couldn't see exactly what everyone was working on at every step of the process.
 
// Was your group successful in passing the tests?

// This required a lot of communication and being able to be flexible in terms of timing, after a somewhat slow start I think our organisation greatly improved.
 
// What did you learn about writing user stories, pseudo coding, writing code, refactoring, etc.?
 
// This stuff is all quite difficult. I have a lot of questions in terms of when to refactor and how, depending on the syntax.
// In terms of pseudo code and user stories, it is of paramount importance to always be as clear and concise as possible.