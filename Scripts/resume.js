/* Set the width of the side navigation to 250px and the left margin of the page content to 250px and add a black background color to body */
function openNav() {
  document.getElementById("myTopnav").style.width = "75vw";
  document.body.style.backgroundColor = "rgb(32, 38, 44)";
  document.getElementById("openNav").style.color = "#475c70";
  document.getElementById("closebtn").style.color = "white";
}

function closeNav() {
  document.getElementById("myTopnav").style.width = "0";
  document.body.style.backgroundColor = "rgb(32, 38, 44)";
  document.getElementById("openNav").style.color = "white";
  document.getElementById("closebtn").style.color = "transparent";
}
