const siteSelect = document.querySelector("#site");
const serviceSelect = document.querySelector("#service");
const btnValidation = document.querySelector("#btnValidation");

btnValidation.addEventListener("click", function () {
    console.log("salut");
    creeSalarie()
    
})

optionSite(siteSelect)
filtreServiceFonction(serviceSelect)


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

async function creeSalarie() {
    const nomInput = document.querySelector("#nom");
    const prenomInput = document.querySelector("#prenom");
    const telPortableInput = document.querySelector("#telPortable");
    const telFix = document.querySelector("#telFix");
    const mailInput = document.querySelector("#mail");
    const adminInput = document.querySelector("#admin")
    // const passwordInput= document.querySelector("#password");
    const serviceInput = document.querySelector("#service")
    const siteInput = document.querySelector("#site");

    const createSalarie = {
        "nom": nomInput.value ,
        "prenom": prenomInput.value,
        "tel_fix": telFix.value,
        "tel_portable": telPortableInput.value,
        "mail": mailInput.value,
        "admin": adminInput.value,
        "site":{
            "idSite": siteInput.value
        },
        "service": {
            "idService": serviceInput.value
        }
    }


    console.log(JSON.stringify(createSalarie, null, 2));
    fetch(`http://localhost:8080/salaries/create`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(createSalarie)
    })
    .then(response => response.json())
    .then(data => {
        console.log('Success:', data);
        // Rafraîchit la page après avoir reçu une réponse réussie
        location.reload();
    })
    .catch(error => console.error('Error:', error));


}