const productCart = document.querySelectorAll(".product");

const products = [
  {
    id: "fiddle-leaf-fig",
    name: "Fiddle Leaf Fig",
  },
  {
    id: "dieffenbachia",
    name: "Dieffenbachia",
  },
  {
    id: "parsey",
    name: "Parsey",

  },
  {
    id: "carrots",
    name: "Carrots",
  },
  {
    id: "golden-pothos",
    name: "Epipremnum Aureum",

  },
  {
    id: "monstera",
    name: "Monstera",
    
  },
  {
    id: "mint",
    name: "Mint Leaf",
  },
  {
    id: "bell-peppers",
    name: "Sweet Bell Peppers",
  },
  {
    id: "philodendron",
    name: "Philodendron",
  },
  {
    id: "sansevieria",
    name: "Sansevieria Bogenhanf",
  },
  {
    id: "peace-lily",
    name: "Spathiphyllum",
  },
];

// Redirecting to product page on click
productCart.forEach((product, index) => {
  product.addEventListener("click", () => {
    const selectedProduct = products[index];
    if (selectedProduct) {
      window.location.href = `product.html?id=${selectedProduct.id}`;
    }
  });
});
