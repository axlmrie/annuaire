async function getModif() {
    try {
        const response = await fetch("http://localhost:8080/services/FindAll");
        if (!response.ok) {
            throw new Error('Network response was not ok ' + response.statusText);
        }
        const site = await response.json();
        console.log(site);
        selectSite(site);
        return site;
    } catch (error) {
        console.error('There has been a problem with your fetch operation:', error);
    }
}

function selectSite(site) {
    const siteModif = document.querySelector("#siteModif");
    siteModif.innerHTML = ""
    const baseOption = document.createElement("option");
    baseOption.setAttribute("value", " ")
    baseOption.innerText = "Services";
    siteModif.appendChild(baseOption);
    for (let i = 0; i < site.length; i++) {
        const siteSelect = site[i];

        const optionSite = document.createElement("option");
        optionSite.setAttribute("value", siteSelect.idService);
        optionSite.innerText = siteSelect.nom_service;

        siteModif.appendChild(optionSite);
    }
}

function affichage(site, select) {
    const sectionAff = document.querySelector("#affichageSite");
    const villeInput = document.querySelector("#nom");
    const fonctionInput = document.querySelector("#description");

    if (select == "") {
        villeInput.value = "";
        fonctionInput.value = "";
    }else{
        for (let i = 0; i < site.length; i++) {
            const siteAffich = site[i];
            if (siteAffich.idService == select) {
                console.log(siteAffich.nom_service);

                
                villeInput.value = siteAffich.nom_service;
                fonctionInput.value = siteAffich.description;
    
                break;
            } else {
                villeInput.value = "";
                fonctionInput.value = "";
            }
        }
    }


}
function creeSite() {
    villeInput = document.querySelector("#nom")
    fonctionInput = document.querySelector("#description")
    ville = villeInput.value;
    fonction = fonctionInput.value;
    if (ville == null & fonction == null || ville == "" & fonction == "" ) {
        generateMessage(5);
        return null 
    }else{
        const url = 'http://localhost:8080/services/create';
        const data = { "nom_service": ville, "description": fonction };
    
        fetch(url, {
            method: 'POST', 
            headers: {
                'Content-Type': 'application/json' 
            },
            body: JSON.stringify(data) 
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok ' + response.statusText);
                }
                return response.json();
            })
            .then(data => {
                console.log('Success:', data);
                location.reload();
            })
            .catch(error => {
                console.error('Error:', error);
            });

    }

}
async function supprimerSite() {
    const selectOptionSite = document.querySelector("#siteModif").value;
    try {
        const response = await fetch("http://localhost:8080/salaries/filtreService?service=" + selectOptionSite);
        if (!response.ok) {
            throw new Error('Network response was not ok ' + response.statusText);
        }
        const site = await response.json();
        console.log(site.length);
        if (site.length <= 0) {
            const dateSuppression = new Date().toLocaleDateString();
            const url = `http://localhost:8080/services/deleteDate/${selectOptionSite}?date=${dateSuppression}`;
            try {
                const response = await fetch(url, {
                    method: 'PUT',
                    headers: {
                        'Content-Type': 'application/json'
                    }
                });
        
                if (!response.ok) {
                    throw new Error('Network response was not ok ' + response.statusText);
                }
        
                const responseData = await response.text();
                getModif()
                affichage(site, "")
                generateMessage(1);
            } catch (error) {
                console.error('There has been a problem with your fetch operation:', error);
            }
        }else{
            generateMessage(0);
        }
    

        return site;
    } catch (error) {
        console.error('There has been a problem with your fetch operation:', error);
    }

}





const messageTitle = ['Attention','success','success','Service', 'Service', 'Aide'];
const messageText = ['Il reste des utilisateur attribué a se service.',
    'Le service a été supprimer avec succée.',
    'Le service a été modifié avec succée.',
    'Veuillez choisire un service a modifier',
    'Veuillez choisire un service a supprimer',
    'Veuillez remplire au moins un champs pour crée un salarié'
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

function modifierSite() {
    const selectOptionSite = document.querySelector("#siteModif").value;
    const ville = document.querySelector("#nom").value;
    const fonction = document.querySelector("#description").value;
    const url = 'http://localhost:8080/services/update/'+ selectOptionSite;
    const data = { "nom_service": ville, "description": fonction };

    fetch(url, {
        method: 'PUT', 
        headers: {
            'Content-Type': 'application/json' 
        },
        body: JSON.stringify(data) 
    })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok ' + response.statusText);
            }
            return response.text();
        })
        .then(data => {
            console.log('Success:', data);
            getModif()
            affichage("site", "")
            generateMessage(2);
        })
        .catch(error => {
            console.error('Error:', error);
        });
}


document.addEventListener('DOMContentLoaded', async () => {
    const site = await getModif(); 
    const cree = document.querySelector("#cree");
    const modifier = document.querySelector("#modifier");
    const supprimer = document.querySelector("#supprimer");
    const selectOptionSite = document.querySelector("#siteModif");

    cree.addEventListener('click', function () {

        creeSite();

    })
    modifier.addEventListener('click', function () {
        modifierSite();
        if (selectOptionSite.value === " ") {
            generateMessage(3);
        }else{
        }
    })
    supprimer.addEventListener('click', function () {
        if (selectOptionSite.value === " ") {
            generateMessage(4);
        }else{
            supprimerSite();
        }
    })

    selectOptionSite.addEventListener('change', function () {
        const select = selectOptionSite.value;
        console.log(site.length)
        affichage(site, select);
    });
});