const nav = document.querySelector('.nav');
const ulNav = document.querySelector('#fixed');
const nav_color_menu = document.querySelector('.color');
const deconnexionBtn = document.querySelector('#test_bas');

const salariesFromLocalStorage = JSON.parse(localStorage.getItem('salaries'));
if (salariesFromLocalStorage === null) {
  window.location.replace("/web/index.html");
}

if (salariesFromLocalStorage.admin == true) {
  const divNav = document.querySelector("#divNav");
  divNav.innerHTML = "";
  
  const liSearch = document.createElement("li");
  const linkSearch = document.createElement("a");
  const btnSearch = document.createElement("button");

  linkSearch.setAttribute("href", "/web/search/search.html");
  btnSearch.innerText = "Recherche";

  divNav.appendChild(liSearch);
  liSearch.appendChild(linkSearch);
  linkSearch.appendChild(btnSearch);


  const liSalarie = document.createElement("li");
  const linkSalarie = document.createElement("a");
  const btnSalarie = document.createElement("button");

  const liSite = document.createElement("li");
  const linkSite = document.createElement("a");
  const btnSite = document.createElement("button");

  linkSite.setAttribute("href", "/web/site/siteModif.html");
  btnSite.innerText = "Site";

  const liService = document.createElement("li");
  const linkService = document.createElement("a");
  const btnService = document.createElement("button");

  linkService.setAttribute("href", "/web/service/serviceModif.html");
  btnService.innerText = "Service";
  
  linkSalarie.setAttribute("href", "/web/salarie/salaries.html");
  btnSalarie.innerText = "Salaries";
  
  divNav.appendChild(liSalarie);
  liSalarie.appendChild(linkSalarie);
  linkSalarie.appendChild(btnSalarie);
  
  const liProfil = document.createElement("li");
  const linkProfil = document.createElement("a");
  const btnProfil = document.createElement("button");
  
  
  linkProfil.setAttribute("href", "/web/profil/profil.html");
  btnProfil.innerText = "Profil";

  
  divNav.appendChild(liProfil);
  liProfil.appendChild(linkProfil);
  linkProfil.appendChild(btnProfil);
  divNav.appendChild(liSite);

  divNav.appendChild(liSite);
  liSite.appendChild(linkSite);
  linkSite.appendChild(btnSite);

  divNav.appendChild(liService);
  liService.appendChild(linkService);
  linkService.appendChild(btnService);
}

const testElement = document.querySelector('#menu');
profilNav()
testElement.addEventListener('input', function(event) {
    if (event.target.checked == true ) {
        nav.classList.remove('hidden');
        nav.classList.add('visible');
        nav_color_menu.classList.add('nav_color_menu');
        
    }
    else{
        nav.classList.remove('visible');
        nav_color_menu.classList.remove('nav_color_menu');
        nav.classList.add('hidden');

    }


});

    
deconnexionBtn.addEventListener('click', function () {
    localStorage.removeItem('salaries');
    window.location.replace("http://127.0.0.1:5500/web/index.html");

});






function profilNav() {
    const salariesFromLocalStorage = JSON.parse(localStorage.getItem('salaries'));
    const li = document.createElement('li');
    li.id = 'liInfo';
    li.textContent = salariesFromLocalStorage.nom + " " + salariesFromLocalStorage.prenom;
    ulNav.appendChild(li);
}
