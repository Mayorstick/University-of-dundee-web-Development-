// Select search input and product card titles
const search = document.getElementById("search");
const productTitles = document.querySelectorAll(".card-title");

search.addEventListener("keyup", mySearch);

// Create a function called mySearch
function mySearch(e) {
  const myText = e.target.value.toLowerCase();
  console.log(myText);

  // Loop through the array
  productTitles.forEach((item) => {
    if (item.textContent.toLowerCase().indexOf(myText) !== -1) {
      item.closest(".col-md-4").style.display = "block";
    } else {
      item.closest(".col-md-4").style.display = "none";
    }
  });
}

// Add to cart implementation
const cartItems = document.getElementById("carts-items");
const clearButton = document.getElementById("Clear-cart");

// Selecting all add to cart buttons
const addToCartButtons = document.querySelectorAll(".add");

// Global variable to track total price
let total = 0;

addToCartButtons.forEach((button) => {
  button.addEventListener("click", add);
});

function add(event) {
  // Getting the card element
  const card = event.target.closest(".card");
  // Getting product details
  const productTitle = card.querySelector(".card-title").textContent;
  const productPriceText = card.querySelector(".card-text").textContent;
  const productPrice = parseFloat(productPriceText.replace(/[^0-9.-]+/g, ""));

  // Create a new list item for the cart
  const cartItem = document.createElement("li");
  cartItem.classList.add("list-group-item");
  cartItem.textContent = `${productTitle} - ${productPriceText}`;

  // Add the new item to the cart
  cartItems.appendChild(cartItem);

  // Update the total price
  total += productPrice;
  updateTotalPrice();
}

function updateTotalPrice() {
  let totalPriceElement = document.getElementById('total-price');
  if (!totalPriceElement) {
    totalPriceElement = document.createElement("div");
    totalPriceElement.id = "total-price";
    cartItems.parentElement.appendChild(totalPriceElement);
  }
  totalPriceElement.textContent = `Total: £${total.toFixed(2)}`;
}

// Clear Cart Functionality
clearButton.addEventListener('click', () => {
  cartItems.innerHTML = '';
  total = 0;
  updateTotalPrice();
});
