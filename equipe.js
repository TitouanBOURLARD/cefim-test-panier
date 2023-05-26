document.addEventListener("DOMContentLoaded", function() {
    const utilisateurs = document.querySelectorAll(".utilisateur");
  
    utilisateurs.forEach(function(utilisateur) {
      const btnModif = utilisateur.querySelector(".btn-modif");
      const btnSupprimer = document.createElement("button");
      btnSupprimer.innerText = "Supprimer";
      btnSupprimer.classList.add("btn-supprimer");
  
      btnModif.addEventListener("click", function() {
        const titreUser = utilisateur.querySelector(".titreUser");
        const pUser = utilisateur.querySelector(".pUser");
  
        const currentTitre = titreUser.innerText;
        const currentText = pUser.innerText;
  
        const newTitre = prompt("Entrez le nouveau titre :", currentTitre);
        const newText = prompt("Entrez le nouveau texte :", currentText);
  
        if (newTitre !== null && newText !== null) {
          titreUser.innerText = newTitre;
          pUser.innerText = newText;
        }
      });
  
      btnSupprimer.addEventListener("click", function() {
        const confirmation = prompt("Êtes-vous sûr de vouloir supprimer cet utilisateur ? Tapez \"OK\" pour confirmer.");
  
        if (confirmation === "OK") {
          utilisateur.remove();
        }
      });
  
      utilisateur.appendChild(btnSupprimer);
    });
  });
  


/* MODE NUIT MODE JOUR */

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
  

// ------------------------------------------------------- // 
document.addEventListener("DOMContentLoaded", function() {
    const btnScrollToTop = document.getElementById("btnScrollToTop");
  
    window.addEventListener("scroll", function() {
      if (window.pageYOffset > 200) {
        btnScrollToTop.classList.add("show");
      } else {
        btnScrollToTop.classList.remove("show");
      }
    });
  
    btnScrollToTop.addEventListener("click", function() {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    });
  });
  
  
  