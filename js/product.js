const products = [
  {
    id: "fiddle-leaf-fig",
    name: "Fiddle Leaf Fig",
    price: 25,
    description:
      "The Fiddle Leaf Fig is a popular indoor tree with large, glossy, violin-shaped leaves that add dramatic flair to any room. It thrives in bright, indirect sunlight and prefers a stable environment without frequent movement or drafts. A perfect statement piece for modern or minimalist interiors.",
    image:
      "../images/HousePlants/Altman_Plants_Fiddle_Leaf_Fig_House_Plant.png",
  },
  {
    id: "dieffenbachia",
    name: "Dieffenbachia",
    price: 25,
    description:
      "Known as Dumb Cane, this lush plant boasts large, variegated green-and-white leaves that brighten low-light spaces. It's ideal for shady corners and is valued for its tropical appearance. Caution: toxic if ingested.",
    image: "../images/HousePlants/Dieffenbachia_Tropic_Snow__Dumb_Cane.png",
  },
  {
    id: "parsey",
    name: "Parsey",
    price: 25,
    description:
      "An easy-to-grow kitchen herb with bright green curly or flat leaves. Great for garnishing dishes, it also freshens the air and is rich in antioxidants and vitamins. Best placed on a windowsill with sunlight.",
    image: "../images/HousePlants/Parsey.png",
  },
  {
    id: "carrots",
    name: "Carrots",
    price: 25,
    description:
      "A rewarding root vegetable to grow in containers or garden beds. Carrots add a sweet crunch to meals and are rich in beta-carotene and fiber. Needs full sun and loose soil for best root development.",
    image: "../images/HousePlants/Carrots.png",
  },
  {
    id: "golden-pothos",
    name: "Epipremnum Aureum",
    price: 25,
    description:
      "Also known as Devil’s Ivy, this trailing plant has variegated heart-shaped leaves and is incredibly easy to care for. It tolerates a variety of lighting conditions and helps purify the air, making it great for beginners.",
    image: "../images/HousePlants/Golden_Pothos__Epipremnum_Aureum__6__Pot.png",
  },
  {
    id: "monstera",
    name: "Monstera",
    price: 25,
    description:
      "Recognized by its large, iconic split leaves, the Monstera brings a bold, tropical flair to any room. Prefers bright, indirect sunlight and a humid environment. Rotate regularly for balanced growth.",
    image: "../images/HousePlants/Grosse_Monstera_-_ohne_Übertopf-.png",
  },
  {
    id: "mint",
    name: "Mint Leaf",
    price: 25,
    description:
      "A fast-growing, aromatic herb that enhances teas, desserts, and more. Mint also acts as a natural pest repellent. Keep it in its own container to prevent spreading, and provide ample sunlight and moisture.",
    image: "../images/HousePlants/Mint.png",
  },
  {
    id: "bell-peppers",
    name: "Sweet Bell Peppers",
    price: 25,
    description:
      "These colorful, sweet peppers are easy to grow in containers with enough sunlight. They add crunch and flavor to meals, and are high in vitamins C and A. Needs full sun and moderate watering.",
    image: "../images/HousePlants/Swwet Peppers.png",
  },
  {
    id: "philodendron",
    name: "Philodendron",
    price: 25,
    description:
      "A low-maintenance indoor plant that thrives in indirect light and helps purify the air. Its trailing or upright growth makes it suitable for shelves or hanging baskets. Avoid overwatering.",
    image: "../images/HousePlants/Philodendron.png",
  },
  {
    id: "sansevieria",
    name: "Sansevieria Bogenhanf",
    price: 25,
    description:
      "Also called Snake Plant or Mother-in-Law’s Tongue, this upright succulent stores water in its sword-like leaves. Extremely drought-tolerant and known for purifying air even at night.",
    image:
      "../images/HousePlants/Sansevieria__Bogenhanf__-_Pflege_und_Arten__Pflanzenlexikon_-.png",
  },
  {
    id: "peace-lily",
    name: "Spathiphyllum",
    price: 25,
    description:
      "The Peace Lily features elegant white flowers and broad green leaves. It thrives in low to medium light and is excellent for improving indoor air quality. Keep soil moist and mist occasionally.",
    image: "../images/HousePlants/Spathiphyllum__Peace_Lily.png",
  },
];

const parameters = new URLSearchParams(window.location.search);
const productId = parameters.get("id");

// Find the selected product based on the URL ID
const selectedProduct = products.find(function (product) {
  return product.id === productId;
});

const product_container = document.getElementById("product_container");

if (selectedProduct) {
  product_container.innerHTML = `
    <div class='product-content'>
      <img src="${selectedProduct.image}" alt="${selectedProduct.name}" width="300" />
      <div class='product-details'>
        <h2>${selectedProduct.name}</h2>
        <p>${selectedProduct.description}</p>
        <strong>Price: $${selectedProduct.price}</strong>
        <div class='product-btn'>
          <button class="buyNowBtn">Buy now</button>
          <button class="addToCartBtn">Add to Cart</button>
        </div>
      </div>
    </div>
  `;

  // Attach event to the "Add to Cart" button
  const addToCartBtn = document.querySelector(".addToCartBtn");
  addToCartBtn.addEventListener("click", () => {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    // Check if product is already in cart (using id)
    const alreadyInCart = cart.some((item) => item.id === selectedProduct.id);

    if (alreadyInCart) {
      alert(`${selectedProduct.name} cannot be added again.`);
    } else {
      // Add the selectedProduct to the cart
      cart.push(selectedProduct);

      // Save back to localStorage
      localStorage.setItem("cart", JSON.stringify(cart));

      alert(`${selectedProduct.name} successfully added to cart!`);
    }
  });
} else {
  product_container.innerHTML = "<p>Product not found.</p>";
}


const buyNowBtn = document.querySelector(".buyNowBtn");
buyNowBtn.addEventListener("click", () => {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];

  // Add current product if not already in cart
  if (!cart.some((item) => item.id === selectedProduct.id)) {
    cart.push(selectedProduct);
    localStorage.setItem("cart", JSON.stringify(cart));
  }

  // Redirect to cart page
  window.location.href = "cart.html";
});

