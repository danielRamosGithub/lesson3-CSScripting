/* javascript lives here */

console.log("App Started");

// create a referenc to the button on the page index.html
var clickMeButton = document.getElementById("clickMeButton");

// add an event listener - for the click eeent and call the clickMeButton_Click function 
clickMeButton.addEventListener("click", clickMeButton_Click);

// click function - used as an event handler
function clickMeButton_Click() {
    console.log("clicked");
}