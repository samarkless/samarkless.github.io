// I worked [by myself] on this challenge

		// Your mission description:
// 
// You are Leon Kennedy. Your task today is to navigate a plethora
// of dimly lit halls in order to find a special weapon. Why you ask?
// There is a monster called Nemesis hunting you down, and it won't stop
// until you are dead. The only thing you can do is find the special weapon 
// and kill it first. 
// 

		// Pseudocode
// 
// First off, use the console in order to tell the user he mission 
// description. 
// 
// Create a variable called leon which has three properties: name, weapon, power.
// Give each of the properties a value.
// 
// Create a variable called nemesis which has the same properties as Leon.
// Give each of the properties a value.
// 
// Write a function for leon which allows him to walk right, then repeat this 
// for functions that allow leon to walk down, up, and left. 
// 
// Write a function for leon which allows him to taunt the nemesis
// 
// Write a function for leon which allows him to pick up the grenade launcher.
// 
// Write a method which is equal to the function slowDownnemesis. This 
// allows Leon to slow down the nemesis if his power is greater than 40.
// If it isn't the nemesis kills him. 
// 
// walk right through the hallway
// walk down through the hallway 2 spaces
// walk left through the hallway 2 spaces
// taunt the nemesis
// attempt to slow down the nemesis
// escape by running up through the hallway 4 spaces
// pick up the grenade launcher
// 
// 

		// Initial Code

console.log("You are Leon Kennedy. Your task today is to navigate a plethora of dimly lit halls in order to find a special weapon. Why you ask? There is a monster called Nemesis hunting you down, and it won't stop until you are dead. The only thing you can do is find the special weapon and kill it first.");

var leon = {
	name: "Leon Kennedy",
	weapon: "handgun",
	power: 50
};

var nemesis = {
	name: "Nemesis",
	weapon: "chaingun",
	power: 40
};

function walkRight(){
  // this will make Leon walk right
}
 
function walkLeft(){
  // this will make Leon walk left
}
 
function walkUp(){
  // this will make Leon walk up
}
 
function walkDown(){
// this will make Leon walk down
}

function tauntNemesis() {
// Leon taunts the nemesis
}

function pickUpgrenadelauncher () {
 // this will make Leon pick up the grenade launcher
}

leon.method = function slowDownnemesis () {
	if (power > 40) {
		console.log("You slowed down the nemesis! Quick, run away!");
	}
	else {
		console.log("The nemesis crushes your head");
	}
	//this function allows you to fight the nemesis an weaken him enough
	//in order to run away.
};

this.walkRight();
this.walkDown();
this.walkDown();
this.walkLeft();
this.walkLeft();
this.tauntNemesis("Hey ugly! Look over here!");
this.slowDownnemesis();
this.walkUp();
this.walkUp();
this.walkUp();
this.walkUp();
this.pickUpgrenadelauncher("Time to take out the trash...");

		// Refactored Code

// I feel as though the code above has quite a high readability and I'm not 
// quite sure what I could refactor in order to make the code shorter. 
// The code and my variables and functions are short and to the point already.
// That being said, I could refactor the directional functions so that if
// Leon is moving in one direction more than once then instead of typing this.walkdirection
// everytime I could write a function that simplifies this.


		// Reflection
// 
// In this challenge we were tasked with creating a code combat style mission which allowed us to define variables
// in javascript and then manipulate objects in javascript. Creating my own game was such a fun experience, 
// especially seeing as I love gaming already! The syntax was quite difficult and required a little bit of
// revision and creativity in order to write down. I found it very helpful to draw ideas or inspiration from
// the other boot's gists. I still am having problems knowing what to refactor and how, I will definitely be
// going back to tutorials and guides in order to find out exactly how this works. I also didn't quite have enough
// time to do the Bonus part by adding my javascript to an HTML page but I will do this in my free time.
//  All in all, a very fun experience!
// 
// 
// 
// 
// 
// 