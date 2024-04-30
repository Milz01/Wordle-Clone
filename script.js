
var height = 6; //number of guesses player can make
var width = 5; //length of the word of player has to guess

var row = 0; //current guess (attempt #)
var col = 0; //current letter for that attempt

var gameOver = false;
var word = " ";


window.onload = function(){
    intialize();
}


function intialize() {

    // Create the game board
    for (let r = 0; r < height; r++) {
        for (let c = 0; c < width; c++) {
            // <span id="0-0" class="title"></span>
            let tile = document.createElement("span");
            tile.id = r.toString() +  "-" + c.toString();
            tile.classList.add("tile");
            tile.innertext = "";
            document.getElementById("board").appendChild(tile);
        }
    }
}
