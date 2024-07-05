const btnValider = document.querySelector("#btnValider");
const inputPassword = document.querySelector("#password");
const inputEmail = document.querySelector("#email");
const form = document.querySelector("#formLogin");
const divP = document.querySelector("#divP");

btnValider.addEventListener("click", async function (event) {
    event.preventDefault();
    const email = inputEmail.value; 
    const password = inputPassword.value;
    if (password === null) {
        password = NULL ; 
    } 
    console.log("bouton appuyé " + email + " " + password);
    const errorLogin = document.createElement("p");

    
    if (email !== "" ) {
        try {
            const response = await fetch(`http://localhost:8080/salaries/login?email=${email}&password=${password}`);
            
            if (response.ok) { // Vérifie si la réponse a un statut de succès
                const search = await response.json();
                if (search !== false) {
                    localStockage(search)
                    console.log(password)
                    if (password === "") {
                        window.location.replace("/web/profil/profil.html?er=pass");
                    }else{

                        window.location.replace("/web/search/search.html");
                    }
                } else if (search === false) {
                    divP.innerHTML = "";
                    console.log("mdp incorrect");
                    errorLogin.innerText = "Erreur de mots de passe ou email";
                    divP.appendChild(errorLogin);
                }else {
                    console.log("erreur bizarre");
                }
                console.log(search.service.idService);
            } else {
                console.log("mdp incorrect");
            }
        } catch (error) {
            console.error("Erreur lors de la requête:", error);
        }
    } else {
        console.log("Veuillez remplir tous les champs.");
    }
});



function localStockage(search) {
    const nom = search.nom;
    const prenom = search.prenom;
    const idSalarie = search.idSalarie;
    const idSite = search.site.idSite;
    const idService = search.service.idService;
    const salaries = { idSalarie: idSalarie, nom: nom, prenom: prenom, idService: idService, idSite: idSite };
    
    localStorage.setItem('salaries', JSON.stringify(salaries));
    
    const salariesFromLocalStorage = JSON.parse(localStorage.getItem('salaries'));
    
    console.log("Voila le local storage : ", salariesFromLocalStorage);
}

let keySequence = [];
const adminCode = ['a', 'd', 'm', 'n', 'e','t'];

document.addEventListener('keydown', (event) => {
  keySequence.push(event.key);
  
  // Keep only the last `adminCode.length` keys in the sequence
  if (keySequence.length > adminCode.length) {
    keySequence.shift();
  }
  
  // Check if the sequence matches the 'admin' code
  if (keySequence.join('') === adminCode.join('')) {
    // Redirect the user
    window.location.href = 'adminLogin.html';
  }
});
