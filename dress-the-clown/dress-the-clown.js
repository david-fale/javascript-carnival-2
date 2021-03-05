  // -    -   -   -   -  //
 // JAVASCRIPT CARNIVAL //
// -    -   -   -   -  //

//variables
var headIndex = 0;
var bodyIndex = 0;
var shoesIndex = 0;
var clothingIndex = 0;


console.log("Dress The Clown!")

//function to change head to head1.png
function changeClownHead () {
  if (clothingIndex === 0) {
    var headVar = document.getElementById("head");
    headVar.src = "./images/head" + headIndex + ".png";
    if (headIndex < 5) {
      headIndex++;
    } else {
      headIndex = 0;
    }
    
  } else if (clothingIndex === 1) {
    var bodVar = document.getElementById("body");
    bodVar.src = "./images/body" + bodyIndex + ".png";
    if (bodyIndex < 5) {
      bodyIndex++;
    } else {
      bodyIndex = 0;
    }
    
  } else if (clothingIndex === 2) {
    var shoesVar = document.getElementById("shoes");
    shoesVar.src = "./images/shoes" + shoesIndex + ".png";
    if (shoesIndex < 5) {
      shoesIndex++;
    } else {
      shoesIndex = 0;
    }
    
  }
  
}
function changeClownHeadRev () {
  if (clothingIndex === 0) {
    var headVar = document.getElementById("head");
    headVar.src = "./images/head" + headIndex + ".png";
    if (headIndex > 0) {
      headIndex--;
    } else {
      headIndex = 0;
    }
    
  } else if (clothingIndex === 1) {
    var bodVar = document.getElementById("body");
    bodVar.src = "./images/body" + bodyIndex + ".png";
    if (bodyIndex > 0) {
      bodyIndex--;
    } else {
      bodyIndex = 0;
    }
    
  } else if (clothingIndex === 2) {
    var shoesVar = document.getElementById("shoes");
    shoesVar.src = "./images/shoes" + shoesIndex + ".png";
    if (shoesIndex > 0) {
      shoesIndex--;
    } else {
      shoesIndex = 0;
    }
  }
}

document.onkeydown = checkKey;

function checkKey(j) {

  j = j || window.event;
  //up arrow
  if (j.keyCode == '38') {
    if (clothingIndex <= 1) {
      clothingIndex++
      console.log(clothingIndex)
    }
  }

  //down arrow
  else if (j.keyCode == '40') {
    if (clothingIndex >= 1) {
      clothingIndex--
      console.log(clothingIndex)
    }
  }
   
  //left arrow
  else if (j.keyCode == '37') {
      changeClownHeadRev();
  }

  //right arrow
  else if (j.keyCode == '39') {
      changeClownHead();
    } else {
      if (clothingIndex === 0) {
        headIndex = 0;
      } else if (clothingIndex === 1) {
        bodyIndex = 0;
      } else if (clothingIndex === 2) {
        shoesIndex = 0;
      } 
    }
  }



console.log(headIndex)

