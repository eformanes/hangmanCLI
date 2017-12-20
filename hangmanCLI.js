// Load the NPM Package inquirer
var inquirer = require("inquirer");
var word = require("./word");

// hard code secret word
var secretWord = "secret";
// Call word constructor to create new word
var secretWordValues = new word(secretWord);
// Assign Letters
var lettersInSecretWord = secretWordValues.letterArray;

//initial number of guesses is 8
var numberOfGuesses = 8;

// recursive function
function playGame(){
    if(secretWordValues.wordComplete == true){
        gameOver();
    }
    else{
        
        for(var j=0; j<lettersInSecretWord.length;j++){
            //console.log("_");
            if (lettersInSecretWord[j].correct){
                process.stdout.write(lettersInSecretWord[j].newLetter);
            }
            else{
                process.stdout.write("_ ");
            }
            
        }
        
        if (numberOfGuesses >0){
            inquirer.prompt([
                
            {
            type: "input",
            name: "letter",
            message: "Guess a Letter!"
            }
            
            ]).then(function(user) {
                var newLetterGuess = user.letter;
                console.log(newLetterGuess)
                
                for(var y=0; y<lettersInSecretWord.length;y++){
                    //console.log("_");
                    lettersInSecretWord[y].checkValue(newLetterGuess);                 
                }

                numberOfGuesses--;
                console.log(numberOfGuesses + " guesses remaining!");
                playGame();
            
            
            
            });
            
            
        }
    }

}

function gameOver(){
    console.log("YOU WIN!!")
}

playGame();



