// script.js
document.getElementById("yesBtn").addEventListener("click", function() {
    document.getElementById("responseMessage").textContent = "Yes!! 💍 I’m so happy!!";
    document.getElementById("responseMessage").style.color = "green";
    document.querySelector('.container').style.backgroundColor = "#e8f5e9"; // Light green background
});

document.getElementById("noBtn").addEventListener("mouseover", function() {
    this.classList.add("moving");  // Add the class to move the "No" button
    document.getElementById("noMessage").style.display = "block";  // Show the message
});

document.getElementById("noBtn").addEventListener("mouseleave", function() {
    this.classList.remove("moving");  // Remove the class to stop the button from moving
    document.getElementById("noMessage").style.display = "none";  // Hide the message
});

// Prevent clicking on the "No" button
document.getElementById("noBtn").addEventListener("click", function(event) {
    event.preventDefault();
    document.getElementById("noMessage").style.display = "block";  // Show the message if clicked
});
