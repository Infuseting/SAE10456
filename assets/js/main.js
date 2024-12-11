document.addEventListener('DOMContentLoaded', function() {
    const fileName = location.pathname.split('/').pop();
    const finalFileName = fileName ? fileName.replace('.html', '') : 'index';
    document.title = document.title.replace('${file.name}', finalFileName);
    document.getElementById("brand").innerText = "Handi'cap - " + finalFileName.replaceAll('_', ' ');
    manageEntreprise();
    manageHandicap();
});

function scrollToNextSection(event) {
    event.preventDefault();
    document.getElementById('next-section').scrollIntoView({ behavior: 'smooth' });
}

function scrollToLastSection(event) {
    event.preventDefault();
    document.getElementById('last-section').scrollIntoView({ behavior: 'smooth' });
}

function toggleDropdownContent(event) {
    const paragraphs = event.querySelectorAll('p');
    const links = event.querySelectorAll('a');

    paragraphs.forEach(p => {
        p.classList.toggle('hidden');
    });

    links.forEach(a => {
        a.classList.toggle('hidden');
    });
}


function deleteMyData() {
    document.cookie.split(';').forEach(cookie => {
        const eqPos = cookie.indexOf('=');
        const name = eqPos > -1 ? cookie.substring(0, eqPos) : cookie;
        document.cookie = name + '=;expires=Thu, 01 Jan 1970 00:00:00 GMT';
    });
}




function manageEntreprise() {
    let isEntreprise  = null;
    if (getCookie('entreprise') == null) {
        isEntreprise = confirm("Êtes-vous une entreprise ?");
    }
    if (isEntreprise) {
        addCookie('entreprise', 'true');
    } else if (isEntreprise == false) {
        addCookie('entreprise', 'false');
    }
    let nav = `<li class="nav-item">
                        <a class="nav-link" aria-current="page" href="index.html">Accueil</a>
                    </li>`
    if (getCookie('entreprise') == 'true') {
        nav += `<li class="nav-item">
                        <a class="nav-link" href="Questionnaire_Entreprise.html">Questionnaire Entreprise</a>
                    </li>`;
    }
    else if (getCookie('entreprise') == 'false') {
        nav += `<li class="nav-item">
                        <a class="nav-link" href="Questionnaire_Particulier.html">Questionnaire Particulier</a>
                    </li>`;
                    
    }
    nav += `<li class="nav-item">
                        <a class="nav-link" href="Source.html">Sources</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="" onclick="deleteMyData()">Supprimer mes données</a>
                    </li>`;
    document.querySelector('.navbar-nav').innerHTML = nav;
}
function handicapVisuel() {
    addCookie('handicap', 'visuel');
    manageHandicap();
}

function continueFunction() {
    addCookie('handicap', 'none');
    manageHandicap();
    
}


function showEveryButton() {
    const buttons = document.querySelectorAll('.btn');
    buttons.forEach(button => {
        button.classList.remove('hidden');
    });

}

function manageHandicap() {

    if (getCookie('handicap') == 'visuel') {
        document.body.classList.add('visuel');
        const chooseHandicapElement = document.getElementById('chooseHandicap');
        showEveryButton();
        if (chooseHandicapElement) {
            chooseHandicapElement.remove();
        }
    }
    else if(getCookie('handicap') == 'none') {
        const chooseHandicapElement = document.getElementById('chooseHandicap');
        showEveryButton();
        if (chooseHandicapElement) {
            chooseHandicapElement.remove();
            
        }
    }
    else {
        const buttons = document.querySelectorAll('.btn');
        buttons.forEach(button => {
            button.classList.add('hidden');
        }
        );
        document.body.innerHTML = `<div id="chooseHandicap" class="container-fluid vh-50 vw-50">
        <div class="row justify-content-center align-items-center vh-100">
            <div class="col-12 text-center">
                <h1>Handi'cap</h1>
                <p>Êtes vous atteinds d'un handicap ?</p>
                <div class="column">
                    <img onclick="handicapVisuel()" src="https://www.handinorme.com/7006-thickbox_default/panneau-accessibilite-malvoyant-iso-7001-.jpg" alt="Handicap visuel" class="img-fluid" width="75">
                </div>
                <div class="column"></div>
                    <button onclick="continueFunction()" class="btn btn-primary mt-3">Continue</button>
                </div>

            </div>
        </div>
    </div> ${document.body.innerHTML}`;
    }
}


function getCookie(name) {
    const cookies = document.cookie.split(';');
    const cookie = cookies.find(c => c.includes(name));
    return cookie ? cookie.split('=')[1] : null;
}
function addCookie(name, value) {
    document.cookie = `${name}=${value}`;
}
function removeCookie(name) {
    document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC;`;
}



















//Nom Prenom