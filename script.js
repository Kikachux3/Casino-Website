document.addEventListener("DOMContentLoaded", function() {
    console.log("Casino Royale Loaded!");
});
document.addEventListener("DOMContentLoaded", function() {
    let currentCurrency = "harmony"; // Default currency

    document.getElementById("currency-switch").addEventListener("click", function() {
        if (currentCurrency === "harmony") {
            currentCurrency = "fortune";
            document.getElementById("currency-display").innerText = "Fortune Coins 🟡";
        } else {
            currentCurrency = "harmony";
            document.getElementById("currency-display").innerText = "Harmony Coins 🟢";
        }
    });
});
// Disable right-click
document.addEventListener("contextmenu", function(event) {
    event.preventDefault();
    alert("Right-click is disabled for security reasons.");
});
// Disable F12
document.onkeydown = function(e)
  
