<<<<<<< HEAD
=======
var player1 = "";
var player2 = "";
>>>>>>> 7f714ade2358f4d62333053131f8293e81cf0f34
var player1Url = localStorage.getItem('Player 1');
var player2Url = localStorage.getItem('Player 2');

fetch(player1Url)
<<<<<<< HEAD
    .then((response) => { return response.json() })
    .then((result) => {
        player1 = result.aliases[0]
    })

fetch(player2Url)
    .then((response) => { return response.json() })
    .then((result) => {
        player2 = result.aliases[0]
    })

document.getElementById('leftPlayerIcon1').innerHTML += '<img class="[ selection__icon ]" src="icons/' + localStorage.getItem('Player_1_id') + '.png" />';
document.getElementById('rightPlayerIcon2').innerHTML += '<img class="[ selection__icon ]" src="icons/' + localStorage.getItem('Player_2_id') + '.png" />';
document.getElementById('leftPlayerIcon1').innerHTML += '<p class="card-title [ card-body__characterTitle ]">'+ localStorage.getItem('player 1') +'</p>'
document.getElementById('rightPlayerIcon2').innerHTML += '<p class="card-title [ card-body__characterTitle ]">'+ localStorage.getItem('player 2') +'</p>'

var infoText = document.getElementById("text_field");
var inText = document.createElement("p");
inText.setAttribute("id","battleText");
infoText.appendChild(inText);

var infoText2 = document.getElementById("text_field");
var inText2 = document.createElement("p");
inText2.setAttribute("id","battleText2");
infoText2.appendChild(inText2);


                //----------------------------------Dice system-----------------------------//
var turn = 1;
var turn2 = 2;

var tile = 1;

var player1 = turn;
var player2 = turn2;

var playerTile = document.getElementById(tile);
var playerTile2 = document.getElementById(tile);

playerTile.innerHTML = '<img id="plr_1" class="[ selection__icon ]" src="icons/' + localStorage.getItem("Player_1_id") + '.png" />';
playerTile2.innerHTML = '<img id="plr_2" class="[ selection__icon ]" src="icons/' + localStorage.getItem("Player_2_id") + '.png" />';

var roll = {
    corners: 6,
    throw: function () {
        var randomTrow = Math.floor(Math.random() * this.corners) + 1;
=======
.then( (response) => { return response.json()})
.then( (result) => {
    player1 = result.aliases[0]
})


fetch(player2Url)
.then( (response) => { return response.json()})
.then( (result) => {
    player2 = result.aliases[0]
})


// I think we can save the image number in here also

var turn = 1;

var roll = {
    corners: 6,
    throw: function(){
        var randomTrow = Math.floor(Math.random()* this.corners) +1;
>>>>>>> 7f714ade2358f4d62333053131f8293e81cf0f34
        return randomTrow;
    }
}

<<<<<<< HEAD
function showPrint(result) {
=======
function showPrint(result){
>>>>>>> 7f714ade2358f4d62333053131f8293e81cf0f34
    var dicePlacement = document.getElementById("dicePlacement");
    console.log(result);
    dicePlacement.innerHTML = result;
};

var terning = document.getElementById("diceRoll");
<<<<<<< HEAD
terning.onclick = function () {
    var result = roll.throw();
    moveIcons(result);
    showTiles(tile);
    showPrint(result);

    winner(tile);
};


//-------------------------------Moving current icon and Removin previous icon -------------------------//

                        //-----------------player 1-----------------//
function movePiece(){
    var previous_pos = document.getElementById("plr_1");
    if (previous_pos) {
        previous_pos.parentNode.removeChild(previous_pos);
    }
    for(var i = 1; i< 31; i++){
        if(tile === i){
          var moves = document.getElementById(i); 
            moves.innerHTML += '<img id="plr_1" class="[ selection__icon ]" src="icons/' + localStorage.getItem("Player_1_id") + '.png" />';
            console.log(moves[i]);
        }
    }
};

                        //-----------------Player 2-----------------//
function movePiece2(){
    var previous_pos2 = document.getElementById("plr_2");
    if (previous_pos2) {
        previous_pos2.parentNode.removeChild(previous_pos2);
    }
    for(var i = 1; i< 31; i++){
        if(tile === i){
          var moves = document.getElementById(i); 
            moves.innerHTML += '<img id="plr_2" class="[ selection__icon ]" src="icons/' + localStorage.getItem("Player_2_id") + '.png" />';
            console.log(moves[i]);
        }
    }
};


                         //-----------------and turns-----------------//


                         
//switch turns{
//    case turn === 1:
//      movePiece2()
//      turn = 2;
//  break;
//  case turn = 2:
//      movePiece()
//  break;
//}

function moveIcons(result) {
    if (turn === 1) {
        movePiece2()
        turn = 2;
  
    }
    else {
        turn = 1;
        movePiece()
    
    }
    for (var i = 0; i < result; i++) {
        tile = tile + 1;
    }
    
 

    playerTile = document.getElementById(tile);
    console.log(playerTile);

   // playerTile2 = document.getElementById(tile):
   // console.log(playerTile2);
};


//---------------PLAYER TEXT TILE LOCATION TEXT--------------//
function showTiles(result){  
    var inText = document.getElementById("battleText");
    inText.innerHTML = "Player 1 moved to: " + result;
};
function showTiles2(result){
    var inText2 = document.getElementById("battletext2");
    inText2.innerHTML = "Player 2 moved to: " + result;
}


function winner(result){
    if(tile > 29){
        window.location.href="success_Page.html";

    }
    else{

    }
=======
terning.onclick = function(){
    var result = roll.throw();
    showPrint(result);
    moveIcons(result);
};


var tile = 1;
var playerTile = document.getElementById(tile);


//        tile.appendchild(playOne);
function moveIcons(result){
    if(turn === 1) {
        turn = 2;
        //moving stuff for player one
    }
    else{
    turn = 1;
        //moving stuff for player two
    }
  for( var i = 0; i < result; i++ ){
    tile = tile + 1;

    console.log("Tile: " + tile);
  }
  playerTile = document.getElementById(tile);
  console.log(playerTile);
>>>>>>> 7f714ade2358f4d62333053131f8293e81cf0f34
};