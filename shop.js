const btnBuy = document.querySelectorAll('.btn-buy');
const panierElement = document.getElementById('panierElement');

let panierNumero = 0;


const incrementerPanier = () => {
  panierNumero++;
  panierElement.innerHTML = `<a href="index.html" class="harryMode">Panier (${panierNumero})</a>`;
};

btnBuy.forEach((btn) => {
  btn.addEventListener('click', incrementerPanier);
});


// MODE NUIT

let sequence = ""; 
let targetSequence = "1234"; 

document.addEventListener("keydown", function(event) {
  sequence += event.key; 

  if (sequence === targetSequence) {
    let currentColor = document.body.style.backgroundColor;

    if (currentColor === "grey") {
        document.body.style.backgroundColor = "#f8f5e8"
    } else {
        document.body.style.backgroundColor = "grey"
    }

    sequence = ""; 
  }
});

