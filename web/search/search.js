const searchBtn = document.querySelector("#search");
const affichage = document.querySelector("#affichage");
const filtrePourSite = document.querySelector("#sites");
const selectService = document.querySelector("#services");
const boutonFiltre = document.querySelector("#boutonFiltre");

filtreServiceFonction(selectService);
optionSite(filtrePourSite);



boutonFiltre.addEventListener('click', function () {
  filtre()
});



// searchBtn.addEventListener('input', function(searchText) {
//   if (searchText.target.value != null && searchText.target.value != " " && searchText.target.value !=  "" ) {
//     const filtreSite = filtrePourSite.value;
//     const filtreText = searchBtn.value;
//     const filtreService = selectService.value;
//     console.log(filtreSite + " " + filtreService + " " + filtreText);
//     searchByFiltre(filtreSite, filtreService, filtreText);
//   } else {
//     affichage.innerHTML = "";
//   }
// });
 
// async function searchByFiltre(site, service, text) {
//   try {
//     let valueReponse;
//     if (site != "" && service != "" && text != "") { //Recherche tout parametre 
//       valueReponse = await fetch("http://localhost:8080/salaries/allFilter?id_site=" + site + "&id_service="+ service + "&text=" + text);
//     } else if (site != "" && service == "" && text == "") { // site seul 
//       valueReponse = await fetch("http://localhost:8080/salaries/filtreSite?site=" + site);
//     } else if (site == "" && service != "" && text == "") {/// service seule
//       valueReponse = await fetch("http://localhost:8080/salaries/filtreService?service=" + service);
//     } else if (site == "" && service == "" && text != "") {/// recherche seul 
//       valueReponse = await fetch("http://localhost:8080/salaries/search?keyword=" + text);
//     } else if (site != "" && service != "" && text == "") {/// site service 
//       valueReponse = await fetch("http://localhost:8080/salaries/filtreServiceSite?site=" + site + "&service=" + service);
//     }else if (site != "" && service == "" && text != "" ) {/// site recherche 
//       valueReponse = await fetch("http://localhost:8080/salaries/filtreSiteText?site=" + site + "&text=" + text);
//     }else if (site == "" && service != "" && text != "") {/// service recherche 
//       valueReponse = await fetch("http://localhost:8080/salaries/filtreServiceText?service=" + service + "&text=" + text);
//     }else{
//       affichage.innerHTML = "";
//     }




//     if (!valueReponse.ok) {
//       throw new Error('Network response was not ok ' + valueReponse.statusText);
//     }
//     const search = await valueReponse.json();
//     affichafe(search);
//   } catch (error) {
//     console.error('There has been a problem with your fetch operation:', error);
//   }
// }

function affichafe(search) {
  affichage.innerHTML = "";
  for (let i = 0; i < search.length; i++) {
    const searchElement = search[i];
    const ul = document.createElement("ul");
    ul.className = 'affichageListe';

    const nom = document.createElement("li");
    const prenom = document.createElement("li");
    const tel_fix = document.createElement("li");
    const tel_portable = document.createElement("li");
    const mail = document.createElement("li");
    const site = document.createElement("li");
    const service = document.createElement("li");

    nom.innerText = `Nom: ${searchElement.nom}`;
    prenom.innerText = `Prenom: ${searchElement.prenom}`;
    tel_fix.innerText = `Telephone Fix: ${searchElement.tel_fix}`;
    tel_portable.innerText = `Telephone Portable: ${searchElement.tel_portable}`;
    mail.innerText = `Mail: ${searchElement.mail}`;
    site.innerText = `Site: ${searchElement.site.ville}`;
    service.innerText = `Service: ${searchElement.service.nom_service}`;

    affichage.appendChild(ul);
    ul.appendChild(nom);
    ul.appendChild(prenom);
    ul.appendChild(tel_fix);
    ul.appendChild(tel_portable);
    ul.appendChild(mail);
    ul.appendChild(site);
    ul.appendChild(service);

    const salariesFromLocalStorage = JSON.parse(localStorage.getItem('salaries'));

    if (salariesFromLocalStorage.admin == true) {
      const imgEdit = document.createElement("img");
      const liEdit = document.createElement("li");
      const aEdit = document.createElement("a");

      const id = searchElement.idSalarie;


      let baseUrl = '../modif/modifAdmin.html';
      let fullUrl = `${baseUrl}?id=${encodeURIComponent(id)}`;


      imgEdit.setAttribute("src", "../assets/edit.png");
      aEdit.setAttribute("href", fullUrl);



      
      aEdit.appendChild(imgEdit);
      liEdit.appendChild(aEdit);
      ul.appendChild(liEdit);
    }
  }
}

async function optionSite(filtrePourSite) {
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
      filtrePourSite.appendChild(option);
    });
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
async function requette() {
  const response = await fetch("http://localhost:8080/salaries/FindAll");
  if (!response.ok) {
      throw new Error('Network response was not ok ' + response.statusText);
  }
  return await response.json();
}

async function filtre() {
  try {
      const requetteAll = await requette();
      const search = document.querySelector("#search")
      const services = document.querySelector("#services")
      const sites = document.querySelector("#sites")
      let listeJson = [];
      if (sites.value == "" && services.value == "" && search.value.trim() === "") {
        console.log("c'est null")
      }else{
        console.log(requetteAll[1].site.idSite)
        for (let i = 0; i < requetteAll.length; i++) {
            const elementVerif = requetteAll[i];
                if (services.value != "") {
                    if (elementVerif.service.idService == services.value) {
                        console.log("ok")
                    }
                    else{
                        continue
                    }
                }
                if (sites.value != "") {
                    if (elementVerif.site.idSite == sites.value) {
                        console.log("site ok ")
                    }
                    else{
                        continue
                    }
                }
                if (search.value != "" && search.value != " ") {
  
                    let nom = elementVerif.nom.toLowerCase();
                    let prenom = elementVerif.prenom.toLowerCase();
                    if (nom.includes(search.value.toLowerCase()) || prenom.includes(search.value.toLowerCase()) ) {
                        console.log("site ok ")
                    }
                    else{
                        continue
                    }
                }
  
                listeJson.push(elementVerif);
  
            }
      }

          console.log(listeJson)
          console.log(sites.value)
          affichafe(listeJson);




  } catch (error) {
      console.error('There was a problem with the fetch operation:', error);
  }
}
