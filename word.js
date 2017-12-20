// Calls constructor for letter
var letter = require("./letter");

// word constructor
var word = function(secretWord){
    this.secretWord = secretWord;

    secretWordArray = secretWord.split('');
    // letterArray holds the individual letter objects
    this.letterArray = [];
    for(var i=0; i< secretWordArray.length; i++){
        var secretLetter = new letter(secretWordArray[i]);
        this.letterArray.push(secretLetter);
    }

    this.wordComplete = false;

    for(var k=0;k<this.letterArray.length;k++){
        if(this.letterArray[k].correct == true)
        {
            this.wordComplete = true;
        }
        else{
            this.wordComplete = false;
            //just finding one letter wrong, means we keep playing the game
            break;
        }
    }


}

module.exports = word;







