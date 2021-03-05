  // -    -   -   -   -  //
 // JAVASCRIPT CARNIVAL //
// -    -   -   -   -  //
var unicorn1 = 0;
var unicorn2 = 0;
var unicorn3 = 0;
console.log("Inflate The Unicorn!")

function inflate() {

    document.getElementById('unicorn1').src = "./images/unicorn-" + unicorn1 + ".png";
    if (unicorn1 < 3) {
      unicorn1++;
    } else {
      alert("Thank you!");
    }
  }
function inflate2 () {
  document.getElementById('unicorn2').src = "./images/unicorn-" + unicorn2 + ".png";
  if (unicorn2 < 3) {
    unicorn2++;
  } else {
    alert("Thank you!");
  }
}
function inflate3 () {
  document.getElementById('unicorn3').src = "./images/unicorn-" + unicorn3 + ".png";
  if (unicorn3 < 3) {
    unicorn3++;
  } else {
    alert("Thank you!");
  }
}
