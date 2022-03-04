var playerName = window.prompt("What is your robot's name?")
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

var enemyNames = ["Roborto", "Amy Android", "Robo Trumble"]
var enemyHealth = 50;
var enemyAttack = 12;

// Game States
// "WIN" - PLayer robot has defeated all enemy-robots
//    *Fight all enemy-robots
//    *Defeat each enemy-robot
// "LOSE"- PLayer robot's health is zero or less

var fight = function (enemyName) {
    window.alert("Welcome to Robot Gladiators!");
    var promptFight = window.prompt(" Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' OR 'SKIP' to choose.")
    //if player chooses to fight,then fight.
    if (promptFight === "fight" || promptFight === "FIGHT") {
        enemyHealth = enemyHealth - playerAttack
        console.log(playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health reamining ")
    }
    //Check enemy's health
    if (enemyHealth <= 0) {
        window.alert(enemyName + " has died ")
    } else {
        window.alert(enemyName + " still has " + enemyHealth + " health left. ")
    }

    //Subtract the value of 'enemyAttack' from the value of 'playerHealth' and use that result to update the value in the 'playerHealth' variable.
    playerHealth = playerHealth - enemyAttack;
    console.log(enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining.")


    //Check player's health
    if (playerHealth <= 0) {
        window.alert(playerName + " has died ")
    } else {
        window.alert(playerName + " still has " + playerHealth + " health left.")
    }

    if (promptFight === 'skip' || promptFight === 'SKIP') {
        var confirmSkip = window.confirm("Are you sure you'd like to quit?")
        //if yes (true), leave fight
        if (confirmSkip) {
            window.alert(playerName + " has decided to skip this fight. Goodbye!")
            // subtract money from playerMoney for skipping
            playerMoney = playerMoney - 2;
        }
        //if no (false), ask question again by running fight() again
    } else {
        fight();
    }

}


for (var i = 0; i < enemyNames.length; i++) {
    fight(enemyNames[i]);
}