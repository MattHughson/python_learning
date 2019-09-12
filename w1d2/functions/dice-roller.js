// Write a program that takes a single 
// parameter from the command line, a number, 
// and rolls that many six-sided dice. For example, 
// the following is a sample output of the program.

// Extract the command line arguments
function getArguments() {
    return process.argv.slice(2);
  }
  // convert to number and only accepting 1 argument
function convertToNB(args){
   var arrayNB = Number(args[0])
return arrayNB
}
// random number genrator

function dice(rolls){
    var diceRolls = []
    var diceRolled = ""
    for (var i = 0; i < rolls; i++){
        diceRolls.push(Math.floor(Math.random() * 7));
    } return 'Rolled:' + rolls + ' dice: ' + diceRolls.toString()
    } 
    console.log(dice(convertToNB(getArguments())))