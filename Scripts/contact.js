/* Set the width of the side navigation to 250px and the left margin of the page content to 250px and add a black background color to body */
function openNav() {
  document.getElementById("myTopnav").style.width = "75vw";
  // document.getElementById("main").style.marginRight = "250px";
  document.body.style.backgroundColor = "rgb(32, 38, 44)";
  document.getElementById("openNav").style.color = "#475c70";
  document.getElementById("closebtn").style.color = "white";
}

function closeNav() {
  document.getElementById("myTopnav").style.width = "0";
  // document.getElementById("main").style.marginRight = "0";
  document.body.style.backgroundColor = "rgb(32, 38, 44)";
  document.getElementById("openNav").style.color = "white";
  document.getElementById("closebtn").style.color = "transparent";
}

function copy(text) {
  var textarea = document.createElement("textarea");
  textarea.value = text;
  document.body.appendChild(textarea);
  textarea.select();
  document.execCommand("copy");
  document.body.removeChild(textarea);
}

// When the user clicks on div, open the popup
function myFunction() {
  var popup = document.getElementById("myPopup");
  popup.classList.toggle("show");
}
