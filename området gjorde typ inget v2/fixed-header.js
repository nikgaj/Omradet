// When the user scrolls the page, execute myFunction
window.onscroll = function() {myFunction()};

// Get the header
var header = document.getElementById("logga-text");

// Get the offset position of the navbar
var sticky = header.offsetTop;

// Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}


window.onscroll = function() {funktion()};

var fastna =  document.getElementsByClassName("header-info2");
var klister = fastna.offsetTop;
while(1 < 2){



function funktion(){
if (klister <= 10 ){
  document.getElementsByClassName("header-info2").style.position = "absolute";  




}

else{
document.getElementsByClassName("header-info2").style.position = "relative";

}

console.log(klister);


}

}