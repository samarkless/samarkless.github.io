// I worked on this challenge [by myself]

// For each mission, write the title as a comment. (Shown here). Also include pseudocode as a comment. 
// Note: to make commenting easier, you can highlight the section you want to comment and hold 
// command + / This will comment the line. 

	// Rescue Mission

// moving downards from the entrance
this.moveDown();
this.moveDown();

// moving a bit to the right

this.moveRight();

// moving up

this.moveUp();
this.moveUp();

// moving right

this.moveRight();
this.moveRight();

// moving down

this.moveDown();

// attacking the enemy

this.attackNearbyEnemy();


	// Grab The Mushroom


// moving up

this.moveUp();

// moving right to pick up mushroom

this.moveRight();

// moving back left

this.moveLeft();

// moving up to the enemy

this.moveUp();

// attacking the enemy

this.attackNearbyEnemy();


	//  Drink Me

// attack first enemy
this.attackNearbyEnemy();

// moving right and down to the potion and back up

this.moveRight();
this.moveDown();
this.moveUp();

// moving right and attacking enemy

this.moveRight();
this.attackNearbyEnemy();


	// Taunt The Guards

this.moveRight();
this.bustDownDoor();

 // Delete the "// in front of each line below."

this.moveRight();
this.say("Hey there!");
this.moveLeft();
this.moveLeft();
this.say("Attack!");

// Now get Phoebe to follow through the dungeon.
this.moveRight();
this.say("Follow me.");

// moving Phoebe through the hallway

this.moveRight();
this.moveRight();
this.moveUp();
this.moveRight();

// taunt the enemies again

this.say("hey losers!");

// move down and past the guards

this.moveDown();
this.moveRight();
this.moveUp();
this.moveRight();


	// It's A Trap!

// Taunt the Ogre and run for cover!

this.moveDown();
this.moveDown();
this.say("hey ugly guy! over here!");
this.moveUp();
this.moveUp();

	// Taunt

this.say("Hey!");

// Lure the ogre right into your arrow trap
// by saying a few more things at him.
// Anything works!
// Let's get the big guy angry!

this.moveUp();
this.say("Hey loser! Over here!");
this.say("Come and die!");
this.say("Little do you know what is about to happen!");
this.moveDown();

	
	// Cowardly Taunt

// Move out to 53,35 draw the Ogres attention!

this.moveXY(53,35);

// Say something!

this.say("Hey stupid heads!");

// Then run back behind the arrow towers for safety

this.moveXY(70,10);

	// Commanding Followers

// Saying anything with "follow" in it will get nearby soldiers to follow you

this.say("Hey guys! its time to attack the enemy! follow me!");

// Saying anything with "attack" will send nearby troops into a battle mode.

this.moveXY(64,42);
this.say ("Hey ugly heads! time to die!");
this.say ("Common guys! lets attack!");

// Make sure Tharin is safe!

this.moveXY(71,54);

		
	//Mobile Artillery

// move into firing range!

this.moveXY(50,34);

// Attack the first group of Ogres and make sure you fire twice to finish off the big one!

this.attackXY(69,55);
this.attackXY(63,45);

// finish off the second group of ogres and attack twice to finish the big one off!

this.attackXY(49,62);
this.attackXY(48,52);



// Reflection: 

// What is this referring to? Think programming-wise rather than in the terms of the game. The .dot notation is how you look inside an object. When you use this.anykindofvariable you are essentially creating a variable which belongs to the function that it is created in. 
// What does the () do in JavaScript? When defining a function, a list of arguments to the function are usually enclosed in parentheses. If a function needs input to do its job this is where you use arugments wrapped in (). 
// What is the point of the semicolons? Semicolons in javascript are used to separate statements.

// This challenge was based around the use of code combat to work on basic javascript ideas and methods. I really enjoyed the interactivity of using methods written in javascript to move your characters around the area and didn't have too much trouble going through the tutorial. 
// In terms of answering the challenge-specific questions I had to research and use stackoverflow.com to make sure
// my answers were correct. Downloading and finding out how to use node.js through the command line was also quite interesting and will be an invaluable skill later on. Overall, I found the challenge fun and no parts were tedious.