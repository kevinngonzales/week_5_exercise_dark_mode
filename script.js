// Start with a HTML file and linked JS and CSS files
// Create a button with the text  “dark mode”
// When the button is pressed, the background of the page should change to a dark color and the text should be a light color 
// The text of the button should should switch to say “light mode”
// You should be able to toggle between light and dark modes 
// You can use an online IDE or VS code 

let darkButton = document.getElementById("darkButton");
let isDarkMode = true;

function switchBackground() {
  if (isDarkMode === true) {
    document.body.style.backgroundColor = "black";
    document.getElementById("text").style.color = "white";
    darkButton.innerText = "Light Mode";
    isDarkMode = false;
  } else {
    document.body.style.backgroundColor = "white";
    document.getElementById("text").style.color = "black";
    darkButton.innerText = "Dark Mode";
    isDarkMode = true;
  }
}

darkButton.addEventListener('click', switchBackground);