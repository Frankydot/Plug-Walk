/*//get elements by id//
var content = document.getElementById ("content");
var button = document.getElementById ("show-more");
// attach event to button//
button.onclick=function() {
  // within fn is where the animation behaviour will be controlled
if  (content.className === "open") {
  //shrink box//
  content.className = "";
  button.innerHTML="show-less";

  // if not open, when clicked, it will open.....give div class of open...
} else {
  // expand the boxes
  content.className === "open";
  button.innerHTML="show-less";

}

};*/
