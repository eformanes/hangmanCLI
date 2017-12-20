
var letter = function(newLetter){
    this.newLetter = newLetter;

    this.checkValue = function(checkLetter){
        // If ever true, then stay true
        if(checkLetter === newLetter){
            this.correct = true;
        }
        
    }

    // default is false
    this.correct = false;

}







module.exports = letter;