  // -    -   -   -   -  //
 // JAVASCRIPT CARNIVAL //
// -    -   -   -   -  //
console.log("Whack-a-Mole!")
//variables
cells = document.getElementsByTagName("TD")
var x =Math.floor(Math.random() * cells.length);
var randomCell = cells[x];

var moleImage = document.createElement('img');
moleImage.src = './mole.PNG';
moleImage.id = "moleImage";

randomCell.appendChild(moleImage);

moleImage.onclick = whackMole;

function whackMole() {
  x =Math.floor(Math.random() * cells.length);
  randomCell = cells[x]
  randomCell.appendChild(moleImage);

  //Play audio on hit
  var audio = new Audio('./whack-audio.wav');
  audio.play();
}

