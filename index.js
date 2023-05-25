let counters = document.querySelectorAll(".counter"); // Sélection de tous les compteurs
let addButtons = document.querySelectorAll(".btn-add"); // Sélection des boutons d'ajout par leur classe
let removeButtons = document.querySelectorAll(".btn-remove"); // Sélection des boutons de réduction par leur classe
let deleteButtons = document.querySelectorAll(".btn-delete"); // Sélection des boutons de suppression par leur classe
let totalPriceValue = 0;
let cartTotalElement = document.getElementById('prixTotal');
let clearButton = document.getElementById('clear-button');
clearButton.addEventListener('click', clearCart);

// Parcours des boutons d'ajout pour ajouter les écouteurs d'événement
addButtons.forEach(function(addButton, index) {
  let counter = counters[index];

  addButton.addEventListener("click", function() {
    let count = parseInt(counter.textContent); // Valeur actuelle du compteur

    if (count < 15) {
      count++; // Augmentation du compteur

      counter.textContent = count;
      updateProductPrice(addButton.parentElement.parentElement, count); // Mettre à jour le prix du produit
      updatePriceColor(addButton.parentElement.parentElement); // Mettre à jour la couleur du prix
    }
  });
});

// Parcours des boutons de réduction pour ajouter les écouteurs d'événement
removeButtons.forEach(function(removeButton, index) {
  let counter = counters[index];

  removeButton.addEventListener("click", function() {
    let count = parseInt(counter.textContent); // Valeur actuelle du compteur

    if (count > 1) {
      count--; // Réduction du compteur

      counter.textContent = count;
      updateProductPrice(removeButton.parentElement.parentElement, count); // Mettre à jour le prix du produit
      updatePriceColor(removeButton.parentElement.parentElement); // Mettre à jour la couleur du prix
    }
  });
});

// Parcours des boutons de suppression pour ajouter les écouteurs d'événement
deleteButtons.forEach(function(deleteButton) {
  deleteButton.addEventListener("click", function() {
    let productElement = deleteButton.parentElement.parentElement;
    let priceElement = productElement.querySelector(".total-price");
    let price = parseFloat(priceElement.textContent.replace("€", ""));

    productElement.remove();

    totalPriceValue -= price; // Soustraire le prix du produit supprimé du totalPriceValue

    // Mise à jour de l'affichage du total du panier sur la page HTML
    cartTotalElement.textContent = totalPriceValue.toFixed(2) + " €";
  });
});

// Fonction pour mettre à jour le prix du produit
function updateProductPrice(productElement, count) {
  let priceElement = productElement.querySelector(".price");
  let price = parseFloat(priceElement.textContent.replace("€", ""));
  let totalPriceElement = productElement.querySelector(".total-price");

  let previousTotalPrice = parseFloat(totalPriceElement.textContent.replace("€", ""));
  let totalPrice = count * price;

  totalPriceElement.textContent = totalPrice.toFixed(2) + " €";

  totalPriceValue = totalPriceValue - previousTotalPrice + totalPrice; // Mettre à jour le totalPriceValue en soustrayant le prix précédent et en ajoutant le nouveau

  // Mise à jour de l'affichage du total du panier sur la page HTML
  cartTotalElement.textContent = totalPriceValue.toFixed(2) + " €";

  console.log(totalPriceValue);
}

// Fonction pour mettre à jour la couleur du prix en fonction de sa valeur
function updatePriceColor(productElement) {
  let priceElement = productElement.querySelector(".total-price");
  let price = parseFloat(priceElement.textContent.replace("€", ""));

  priceElement.classList.remove("green", "orange", "red");

  if (price < 50) {
    priceElement.classList.add("green");
  } else if (price < 75) {
    priceElement.classList.add("orange");
  } else {
    priceElement.classList.add("red");
  }
}

// Parcours des boutons de suppression pour ajouter les écouteurs d'événement
deleteButtons.forEach(function(deleteButton) {
  deleteButton.addEventListener("click", function() {
    let productElement = deleteButton.parentElement.parentElement;
    let priceElement = productElement.querySelector(".total-price");
    let price = parseFloat(priceElement.textContent.replace("€", ""));

    productElement.remove();

    totalPriceValue -= price; // Soustraire le prix du produit supprimé du totalPriceValue

    // Mise à jour de l'affichage du total du panier sur la page HTML
    cartTotalElement.textContent = totalPriceValue.toFixed(2) + " €";
  });
});

function clearCart() {
  let productElements = document.querySelectorAll('.product');
  productElements.forEach(function(productElement) {
    productElement.remove();
  });

  // Réinitialiser le prix total
  totalPriceValue = 0;
  cartTotalElement.textContent = "0,00 €";
}

  





