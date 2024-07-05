function getParameterByName(name) {
    const url = window.location.href;
    const nameEncoded = name.replace(/[\[\]]/g, "\\$&");
    const regex = new RegExp("[?&]" + nameEncoded + "(=([^&#]*)|&|#|$)");
    const results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
}


const idSalarie = getParameterByName('id');



const selectService = document.createElement("select");
selectService.setAttribute("class", "input");
selectService.setAttribute("id", "selectService");

const selectSite = document.createElement("select");
selectSite.setAttribute("class", "input");
selectSite.setAttribute("id", "selectSite");
listeProfilCard(idSalarie, selectSite, selectService);

async function listeProfilCard(idSalarie) {
    
    try {
        const response = await fetch("http://localhost:8080/salaries/findById/" + idSalarie);
        if (!response.ok) {
            throw new Error('Network response was not ok ' + response.statusText);
        }
        const search = await response.json();
        console.log(search.site.ville);
        
        const optionBaseSite = document.createElement("option");
        optionBaseSite.setAttribute("value", search.site.idSite);
        optionBaseSite.innerText = "Site"
        selectSite.appendChild(optionBaseSite);
        optionSite(selectSite);
        
        const optionBaseService = document.createElement("option");
        optionBaseService.setAttribute("value", search.service.id_service);
        optionBaseService.innerText = "Service"
        selectService.appendChild(optionBaseService);
        filtreServiceFonction(selectService)


        affichageInfoProfil(search);
        affichageModifProfil(search);
        const btnValide = document.querySelector("#btnValidation");
        btnValide.addEventListener("click", function () {
            console.log("ca print");
            envoieModif(search);

        })
    } catch (error) {
        console.error('There has been a problem with your fetch operation:', error);
    }

};


function affichageInfoProfil(search) {
    const ulListeProfil = document.querySelector("#listeProfil");;
    const liNom = document.createElement("li");
    const liPrenom = document.createElement("li");
    const liTelFix = document.createElement("li");
    const liTelPortable = document.createElement("li");
    const liMail = document.createElement("li");
    const liService = document.createElement("li");
    const liSite = document.createElement("li");
    const liAdmin = document.createElement("li");
    let adminValue = "";

    if (search.admin === true) {
        adminValue = "Administrateur"
    } else {
        adminValue = "salarié";
    }

    liNom.textContent = (search.nom);
    liPrenom.textContent = (search.prenom);
    liTelFix.textContent = (search.tel_fix);
    liTelPortable.textContent = (search.tel_portable);
    liMail.textContent = (search.mail);
    liService.textContent = (search.service.nom_service);
    liSite.textContent = (search.site.ville);
    liAdmin.textContent = (adminValue);

    console.log(idSalarie);
    ulListeProfil.appendChild(liNom);
    ulListeProfil.appendChild(liPrenom);
    ulListeProfil.appendChild(liTelFix);
    ulListeProfil.appendChild(liTelPortable);
    ulListeProfil.appendChild(liMail);
    ulListeProfil.appendChild(liAdmin);
    ulListeProfil.appendChild(liSite);
    ulListeProfil.appendChild(liService);
};

function affichageModifProfil(search) {

    const sectionModif = document.querySelector("#modifCard")

    const inputNom = document.createElement("input");
    const inputPrenom = document.createElement("input");
    const inputTelFix = document.createElement("input");
    const inputTelPortable = document.createElement("input");
    const inputMail = document.createElement("input");
    const selectAdmin = document.createElement("select");
    const optionAdmin = document.createElement("option");
    const optionNoAdmin = document.createElement("option");

    const btnValide = document.createElement("button");
    const btnDelete = document.createElement("button");




    inputNom.setAttribute("type", "text");
    inputNom.setAttribute("id", "nom");
    inputNom.setAttribute("class", "input");
    inputNom.setAttribute("value", search.nom);


    inputPrenom.setAttribute("type", "text");
    inputPrenom.setAttribute("id", "prenom");
    inputPrenom.setAttribute("class", "input");
    inputPrenom.setAttribute("value", search.prenom);

    inputTelFix.setAttribute("type", "number");
    inputTelFix.setAttribute("id", "telFix");
    inputTelFix.setAttribute("class", "input");
    inputTelFix.setAttribute("value", search.tel_fix);


    inputTelPortable.setAttribute("type", "number");
    inputTelPortable.setAttribute("id", "telPortable");
    inputTelPortable.setAttribute("class", "input");
    inputTelPortable.setAttribute("value", search.tel_portable);


    inputMail.setAttribute("type", "email");
    inputMail.setAttribute("id", "mail");
    inputMail.setAttribute("class", "input");
    inputMail.setAttribute("value", search.mail);

    btnValide.setAttribute("id", "btnValidation");
    btnValide.textContent = "Valider";

    btnDelete.setAttribute("id", "btnDelte");
    btnDelete.textContent = "Supprimer le salarié";

    selectAdmin.setAttribute("type", "select");
    selectAdmin.setAttribute("id", "inputAdmin");
    selectAdmin.setAttribute("class", "input");


    optionAdmin.setAttribute("value", true)
    optionNoAdmin.setAttribute("value", false)

    optionAdmin.innerText = "Administrateur";
    optionNoAdmin.innerText = "Salarié";

    if (search.admin === true) {
        selectAdmin.appendChild(optionAdmin);
        selectAdmin.appendChild(optionNoAdmin);
    } else if (search.admin === false) {
        selectAdmin.appendChild(optionNoAdmin);
        selectAdmin.appendChild(optionAdmin);
    }

    sectionModif.appendChild(inputNom)
    sectionModif.appendChild(inputPrenom)
    sectionModif.appendChild(inputTelFix)
    sectionModif.appendChild(inputTelPortable)
    sectionModif.appendChild(inputMail)
    sectionModif.appendChild(selectAdmin)
    
    sectionModif.appendChild(selectSite)
    sectionModif.appendChild(selectService)
    sectionModif.appendChild(btnValide)
    sectionModif.appendChild(btnDelete)

    btnDelete.addEventListener("click", function () {
        console.log("ca delte");
        deleteSalarié(search.idSalarie);

    })

};

function envoieModif(search) {
    const updatedSalarie = search;

    const telFixValue = document.querySelector("#telFix");
    const telPortableValue = document.querySelector("#telPortable");
    const emailValue = document.querySelector("#mail");
    const nomValue = document.querySelector("#nom");
    const prenomValue = document.querySelector("#prenom");
    const adminValue = document.querySelector("#inputAdmin");
    const selectSiteValue = document.querySelector("#selectSite");
    const selectServiceValue = document.querySelector("#selectService");
    



    updatedSalarie.nom = nomValue.value;
    updatedSalarie.prenom = prenomValue.value;
    updatedSalarie.admin = adminValue.value;
    updatedSalarie.mail = emailValue.value;
    updatedSalarie.tel_fix = telFixValue.value;
    updatedSalarie.tel_portable = telPortableValue.value;
    updatedSalarie.site.idSite = selectSiteValue.value;
    updatedSalarie.service.idService = selectServiceValue.value;

    console.log("voila la valeur de service" + updatedSalarie.service.id_service)

    const idSalarie = updatedSalarie.idSalarie;

    fetch(`http://localhost:8080/salaries/update/${idSalarie}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(updatedSalarie)
    })
        .then(response => response.json())
        .then(data => console.log('Success:', data))
        .catch(error => console.error('Error:', error));
    // Recharge la page actuelle
    generateMessage(1)
    setTimeout(() => {
        console.log('Ce message s\'affiche après 2 secondes');
        location.reload();
      }, 5000);

}


async function optionSite(selectSite) {
    try {
        const response = await fetch("http://localhost:8080/sites/FindAll");

        if (!response.ok) {
            throw new Error('Network response was not ok ' + response.statusText);

        }
        const search = await response.json();
        search.forEach(elementFiltre => {
            const option = document.createElement("option");
            option.textContent = elementFiltre.ville;
            option.value = elementFiltre.idSite;
            selectSite.appendChild(option);
        });
        return selectSite;
    } catch (error) {
        console.error('There has been a problem with your fetch operation:', error);
    }
}

async function filtreServiceFonction(selectService) {
    try {
        const response = await fetch("http://localhost:8080/services/FindAll");
        if (!response.ok) {
            throw new Error('Network response was not ok ' + response.statusText);
        }
        const search = await response.json();
        search.forEach(elementFiltre => {
            const option = document.createElement("option");
            option.textContent = elementFiltre.nom_service;
            option.value = elementFiltre.idService;
            selectService.appendChild(option);
        });
    } catch (error) {
        console.error('There has been a problem with your fetch operation:', error);
    }
}

async function deleteSalarié(idSalarie) {
    const date = new Date().toISOString().slice(0, 10); // Récupère la date au format ISO 8601 (YYYY-MM-DD)
    
    try {
        const response = await fetch(`http://localhost:8080/salaries/deleteDate/${idSalarie}?date=${date}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            }
        });

        if (!response.ok) {
            const errorMessage = await response.text();
            throw new Error(`Erreur lors de la suppression du salarié: ${errorMessage}`);
        }
        generateMessage(0);
        console.log('Salarié supprimé avec succès');
    } catch (error) {
        console.error('Erreur lors de la requête fetch:', error.message);
    }
}


// const numero = 0;
const boutonNotif = document.querySelector("#boutonNotif");
const messageTitle = ['Attention','success'];
const messageText = ['Vous venez de supprimer un utilisateur.',
    'Mise a jour effectué avec succé.'
];

const notification = document.querySelector('.notification');

function dismissMessage() {
  notification.classList.remove('received');
}

function showMessage() {
  notification.classList.add('received');
  const button = document.querySelector('.notification__message button');
  button.addEventListener('click', dismissMessage, { once: true });
}

function generateMessage(numero) {
  const title = messageTitle[numero];
  const text = messageText[numero];

  const message = document.querySelector('.notification__message');
  message.querySelector('h1').textContent = title;
  message.querySelector('p').textContent = text;
  message.className = `notification__message message--${title}`;

  showMessage();
}



