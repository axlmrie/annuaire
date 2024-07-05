async function getServiceSite(storedSalaries) {
    try {
        const response = await fetch("http://localhost:8080/salaries/filtreServiceSite?service="+ storedSalaries.idService +"&site="+storedSalaries.idSite);
        if (!response.ok) {
          throw new Error('Network response was not ok ' + response.statusText);
        }
        const search = await response.json();
        affichage(search)

      } catch (error) {
        console.error('There has been a problem with your fetch operation:', error);
      }
}
function affichage(search) {
    const sectionAff = document.querySelector("#affichage");
    sectionAff.innerHTML = "";
    for (let i = 0; i < search.length; i++ ) {
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
    
        sectionAff.appendChild(ul);
        ul.appendChild(nom);
        ul.appendChild(prenom);
        ul.appendChild(tel_fix);
        ul.appendChild(tel_portable);
        ul.appendChild(mail);
        ul.appendChild(site);
        ul.appendChild(service);
    }
}


const storedSalaries = JSON.parse(localStorage.getItem('salaries')) ;

console.log(storedSalaries.idSite)
getServiceSite(storedSalaries)
