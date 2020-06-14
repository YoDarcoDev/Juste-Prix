
let input = document.querySelector('#prix');
let error = document.querySelector('small');
let formulaire = document.querySelector('#formulaire');


// Cacher l'erreur
error.style.display ='none';


// Générer un nombre aléatoire
let nombreAleatoire = Math.floor(Math.random() * 1001);
let coups = 0
let nombreChoisi; 



function verifier(nombre) {
  let instruction = document.createElement('div');
  
  if(nombre < nombreAleatoire) {
    instruction.textContent = "#" + coups + " ( " + nombre + ") C'est plus !";
    instruction.className ="instruction plus";
  }
  else if(nombre > nombreAleatoire) {
    instruction.textContent = "#" + coups + " ( " + nombre + ") C'est moins !";
    instruction.className ="instruction moins";
  }
  else {
    instruction.textContent = "#" + coups + " ( " + nombre + ") Félicitations vous avez trouvé le Juste Prix !";
    instruction.className ="instruction fini";
    input.disabled = true;
  }
  
    document.querySelector('#instructions').prepend(instruction);
};


// Vérifier que l'utilisateur donne bien un nombre
input.addEventListener('keyup', () => {
  if(isNaN(input.value)) {
    error.style.display = 'inline';
  }
  else {
    error.style.display = 'none';
  }
});


// Envoi du formulaire
formulaire.addEventListener('submit', (e) => {
  e.preventDefault();
  
  
  // Si valeur n'est pas un nombre ou si la valeur est vide
  if(isNaN(input.value) || (input.value == "")) {
    input.style.borderColor = 'red';
  }
  else {
    coups++;
    input.style.borderColor = 'silver';
    nombreChoisi = input.value;
    input.value = ''; 
    verifier(nombreChoisi);    
  }
});

  






