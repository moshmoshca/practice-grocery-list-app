// Get reference to DOM elements
const form = document.getElementById("grocery-form");
const itemNameInput = document.getElementById("item-name");
const itemQtyInput = document.getElementById("item-qty");
const groceryList = document.getElementById("grocery-list");
const clearBtn = document.getElementById("clear-all");

// Add event listeners to the form
form.addEventListener("submit", function (e){
    e.preventDefault(); // Stop the page from refreshing

    const name = itemNameInput.value.trim(); // Get the name value
    const qty = itemQtyInput.value.trim(); // Get the quantity value

    if (name === "" || qty === "") return; // Avoid adding empty items
    
    //Create a new list item
    const li = document.createElement("li");
    li.textContent = `${name} - ${qty}`;

    // Add it to the grocery list
    groceryList.appendChild(li);

    // Clear the form fields
    itemNameInput.value = "";
    itemQtyInput.value = "";
});

// Add event listener to Clear All button
clearBtn.addEventListener("click", function() {
    groceryList.innerHTML = "";
});