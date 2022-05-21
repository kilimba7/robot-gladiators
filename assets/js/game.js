var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

console.log(playerName, playerAttack, playerHealth);

var enemyName = "Roborto";
var enemyHealth = 50;
var enemyAttack = 12;

var fight = function() {
    window.alert("Welcoome to Robot Gladiators!");

var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter FIGHT or SKIP to choose.");

if (promptFight === "fight"  || promptFight === "FIGHT"){
  //Subtract the value of `playerAttack` from the value of `enemyHealth` and use that result to update the value in the `enemyHealth` variable
enemyHealth = enemyHealth - playerAttack;
z// Log a resulting message to the console so we know that it worked.
console.log(playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining");
 // Subtract the value of `enemyAttack` from the value of `playerHealth` and use that result to update the value in the `playerHealth` variable.
 playerHealth = playerHealth - enemyAttack;
 // Log a resulting message to the console so we know that it worked.
console.log(enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining");

// put new code under this
console.log(
 playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining."
);

// check enemy's health
if (enemyHealth <= 0) {
 window.alert(enemyName + " has died!");
} 
else {
 window.alert(enemyName + " still has " + enemyHealth + " health left.");
}

// put new code under this
console.log(enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining.");

// check player's health
if (playerHealth <= 0) {
  window.alert(playerName + " has died!");
} 
else {
  window.alert(playerName + " still has " + playerHealth + " health left.");
}
  // if player choses to skip
} else if (promptFight === "skip" || promptFight === "SKIP") {
  var confirmSkip = window.confirm("Are you sure you'd like to quit?");

  if (confirmSkip) {
    window.alert(playerName + " has decided to skip this fight. Goodbye !");
    playerMoney = playerMoney - 2;
  }

  else {
    fight();
  }
  window.alert(playerName + " has chosen to skip the fight!");
} else {
  window.alert("You need to choose a valid option. Try again!");

}


console.log(promptFight);

};

var playerHealth = 100;
 
if (playerHealth > 0) {
  console.log("Your player is still alive!");
}

var playerHealth = 10;

if (playerHealth === 0) {
  console.log("This will not run.");
} 
else {
  console.log("This will run instead.");
}

fight();