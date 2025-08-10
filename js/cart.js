const cart_container = document.getElementById("cart_container");
const totalPriceElement = document.getElementById("total-price");
// Get the cart from localStorage
let cart = JSON.parse(localStorage.getItem("cart")) || [];

// Add quantity property if it doesn't exist
cart = cart.map((item) => {
  if (!item.quantity) {
    item.quantity = 1;
  }
  return item;
});

function renderCart() {
  if (cart.length > 0) {
    cart_container.innerHTML = cart
      .map(
        (product, index) => `
      <div class='cart-item'>
        <img src="${product.image}" alt="${product.name}" width="100" />
        <div class='cart-details'>
          <h3>${product.name}</h3>
          <div class='cart-actions'>
            <button class="subtract-btn" data-index="${index}">-</button>
            <input type="text" class='number' value="${
              product.quantity
            }" readonly>
            <button class="add-btn" data-index="${index}">+</button>
          </div>
        </div>
        <div class ='item-actions'>
          <strong>Price: $${product.price * product.quantity}</strong>
          <button class="remove-btn" data-index="${index}">Remove</button>
        </div>
      </div>
    `
      )
      .join("");

    //calculate total
    const total = cart.reduce(
      (sum, product) => sum + product.price * product.quantity,
      0
    );

    // Update the total price element
    totalPriceElement.textContent = `$${total.toFixed(2)}`;
  } else {
    cart_container.innerHTML = "<p>Your cart is empty.</p>";
    totalPriceElement.textContent = "$0.00";
  }
}

// Initial render
renderCart();


// Click handling
document.addEventListener("click", ({ target }) => {
  if (!target.dataset.index) return;

  const index = Number(target.dataset.index);
  if (isNaN(index)) return;

  let updated = false;

  if (target.classList.contains("remove-btn")) {
    cart.splice(index, 1);
    updated = true;
  } else if (target.classList.contains("add-btn")) {
    cart[index].quantity++;
    updated = true;
  } else if (target.classList.contains("subtract-btn")) {
    if (cart[index].quantity > 1) {
      cart[index].quantity--;
      updated = true;
    }
  }

  if (updated) {
    localStorage.setItem("cart", JSON.stringify(cart));
    renderCart();
  }
});

// Get DOM elements
const buyButton = document.querySelector(".buyBtn");
const purchaseModal = document.querySelector(".purchase-modal");
const deleteBtn = document.querySelector(".delete-btn");

// Add event listeners
buyButton.addEventListener("click", openPurchaseModal);
deleteBtn.addEventListener("click", closePurchaseModal);

// Open modal function
function openPurchaseModal() {
  // Only proceed if there are items in the cart
  if (cart.length > 0) {
    // Clear the cart
    cart = [];
    localStorage.setItem("cart", JSON.stringify(cart));

    // Update the UI
    renderCart();

    // Show the modal
    purchaseModal.classList.add("active");
  }
}
// Close modal function
function closePurchaseModal() {
  purchaseModal.classList.remove("active");
   window.location.href = "shop.html";
}
