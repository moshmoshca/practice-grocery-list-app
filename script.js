// Get reference to DOM elements
const form = document.getElementById("grocery-form");
const itemNameInput = document.getElementById("item-name");
const itemQtyInput = document.getElementById("item-qty");
const groceryList = document.getElementById("grocery-list");

// Add event listeners to the form
form.addEventListener("submit", function (e){
    e.preventDefault(); // Stop the page from refreshing

    const name = itemNameInput.value.trim(); // Get the name value
    const qty = itemQtyInput.value.trim(); // Get the quantity value

    if (name === "" || qty === "") return; // Avoid adding empty items

});