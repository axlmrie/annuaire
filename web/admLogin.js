const btnValider = document.querySelector("#btnValider");
const inputPassword = document.querySelector("#password");
const inputEmail = document.querySelector("#email");
const form = document.querySelector("#formLogin");
const divP = document.querySelector("#divP");

btnValider.addEventListener("click", async function (event) {
    event.preventDefault();
    const email = inputEmail.value; 
    const password = inputPassword.value; 
    console.log("bouton appuyé " + email + " " + password);
    const errorLogin = document.createElement("p");

    
    if (email !== "" && password !== "") {
        try {
            const response = await fetch(`http://localhost:8080/salaries/login?email=${email}&password=${password}`);
            
            if (response.ok) { // Vérifie si la réponse a un statut de succès
                const search = await response.json();
                if (search !== false) {
                    if (search.admin == true) {
                        localStockage(search)
                        window.location.replace("/web/search/search.html"); // autoriser la connexion si admin 
                    }else{
                        // window.location.replace("index.html");
                        console.log(search.admin)
                    }
                    
                } else if (search === false) {
                    divP.innerHTML = "";
                    console.log("mdp incorrect");
                    errorLogin.innerText = "Erreur de mots de passe ou email";
                    divP.appendChild(errorLogin);
                }else {
                    console.log("erreur bizarre");
                }
                console.log(search);
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
    const admin = search.admin;
    const salaries = { idSalarie: idSalarie, nom: nom, prenom: prenom, admin: admin };
    
    localStorage.setItem('salaries', JSON.stringify(salaries));
    
    const salariesFromLocalStorage = JSON.parse(localStorage.getItem('salaries'));
    
    console.log("Voila le local storage : ", salariesFromLocalStorage.idSalarie);
}