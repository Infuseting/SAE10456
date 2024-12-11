let EntrepriseData = {
    "RenaultHavre" : ["Renault - Le Havre", "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi sequi distinctio fugit ad. Veritatis, ducimus! Obcaecati, suscipit id, fuga vel aliquid eveniet numquam reiciendis ipsa voluptatibus eum quis nemo architecto! Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, labore! Ad quibusdam quidem sit id? Recusandae, vero magni a illo aliquam tempora, iure tenetur nihil provident, dicta suscipit. Dolorum, odit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis id, quidem natus sunt nostrum qui eum tenetur ipsum tempore harum dicta beatae fugit necessitatibus illo soluta dolorum alias perspiciatis sed. Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident commodi deleniti quod exercitationem. Minus error porro quae voluptate omnis maxime neque saepe, ratione velit illum nemo officia expedita. Praesentium, eligendi.", ["assets/img/plan.png", "Plan de l'usine renault"]],
};


document.addEventListener('DOMContentLoaded', function() {
    const hashValue = window.location.hash.substring(1);
    const item = EntrepriseData[hashValue];
    if (item) {
        document.getElementById('entreprise-name').innerText = item[0];
        document.getElementById('entreprise-description').innerText = item[1];
        document.getElementById('entreprise-image').src = item[2][0];
        document.getElementById('entreprise-image.alt').innerText = item[2][1];
    }
});