// const numero = 0;

const messageTitle = ['Attention', 'success'];
const messageText = ['Vous devez ajouter un mots de passe.',
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



function getParameterByName(name) {
  const url = window.location.href;
  const nameEncoded = name.replace(/[\[\]]/g, "\\$&");
  const regex = new RegExp("[?&]" + nameEncoded + "(=([^&#]*)|&|#|$)");
  const results = regex.exec(url);
  if (!results) return null;
  if (!results[2]) return '';
  return decodeURIComponent(results[2].replace(/\+/g, " "));
}

// Utilisation de la fonction pour obtenir l'ID
const urlERR = getParameterByName('er');
if (urlERR == "pass") {
  generateMessage(0);
}
console.log(urlERR);

listeProfilCard();
async function listeProfilCard() {
  const salariesFromLocalStorage = JSON.parse(localStorage.getItem('salaries'));
  const idSalarie = salariesFromLocalStorage.idSalarie;
  try {
    const response = await fetch("http://localhost:8080/salaries/findById/" + idSalarie);
    if (!response.ok) {
      throw new Error('Network response was not ok ' + response.statusText);
    }
    const search = await response.json();
    console.log(search.site.ville);
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

  liNom.textContent = (search.nom);
  liPrenom.textContent = (search.prenom);
  liTelFix.textContent = (search.tel_fix);
  liTelPortable.textContent = (search.tel_portable);
  liMail.textContent = (search.mail);
  liService.textContent = (search.service.nom_service);
  liSite.textContent = (search.site.ville);

  ulListeProfil.appendChild(liNom);
  ulListeProfil.appendChild(liPrenom);
  ulListeProfil.appendChild(liTelFix);
  ulListeProfil.appendChild(liTelPortable);
  ulListeProfil.appendChild(liMail);
  ulListeProfil.appendChild(liService);
  ulListeProfil.appendChild(liSite);
};

function affichageModifProfil(search) {

  const sectionModif = document.querySelector("#modifCard")

  const inputTelFix = document.createElement("input");
  const inputTelPortable = document.createElement("input");
  const inputMail = document.createElement("input");
  const br1 = document.createElement("br");
  const br2 = document.createElement("br");
  const br3 = document.createElement("br");
  const br4 = document.createElement("br");
  const btnValide = document.createElement("button");
  const password = document.createElement("input");

  password.setAttribute("type", "password")
  password.setAttribute("placeholder", "Mots de passe")
  password.setAttribute("id", "password")


  inputTelFix.setAttribute("type", "number");
  inputTelFix.setAttribute("placeholder", "Telephone fix");
  inputTelFix.setAttribute("id", "telFix");
  inputTelFix.setAttribute("value", search.tel_fix);



  inputTelPortable.setAttribute("type", "number");
  inputTelPortable.setAttribute("id", "telPortable");
  inputTelPortable.setAttribute("placeholder", "Telephone portable");
  inputTelPortable.setAttribute("value", search.tel_portable);


  inputMail.setAttribute("type", "email");
  inputMail.setAttribute("id", "mail");
  inputMail.setAttribute("placeholder", "Adresse mail");
  inputMail.setAttribute("value", search.mail);

  btnValide.setAttribute("id", "btnValidation");
  btnValide.textContent = "Valider";

  
  sectionModif.appendChild(password)
  sectionModif.appendChild(br4)
  sectionModif.appendChild(inputTelFix)
  sectionModif.appendChild(br1)
  sectionModif.appendChild(inputTelPortable)
  sectionModif.appendChild(br2)
  sectionModif.appendChild(inputMail)
  sectionModif.appendChild(br3)
  sectionModif.appendChild(btnValide)


};

function envoieModif(search) {
  const updatedSalarie = search;

  const telFixValue = document.querySelector("#telFix");
  const telPortableValue = document.querySelector("#telPortable");
  const emailValue = document.querySelector("#mail");



  updatedSalarie.mail = emailValue.value;
  updatedSalarie.tel_fix = telFixValue.value;
  updatedSalarie.tel_portable = telPortableValue.value;

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


