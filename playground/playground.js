document.addEventListener("DOMContentLoaded", function() {
  const modifyBtn = document.getElementById("modifyBtn");
  const textarea = document.getElementById("myTextarea");
  
  modifyBtn.addEventListener("click", function() {
    // Récupérer le nouveau contenu du texte
    const newContent = prompt("Entrez le nouveau contenu :");
    
    // Mettre à jour le contenu de la zone de texte
    textarea.value = newContent;
  });
});

