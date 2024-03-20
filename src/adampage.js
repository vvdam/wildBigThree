const navBar = document.querySelector('.navbar');
const burgerButton = document.querySelector('#burger');
const closeButton = document.querySelector('#closemark');
const body = document.querySelector('body');

// Défilement de la navbar => affichage croix + disparition burger
burgerButton.addEventListener('click', () => {
    navBar.classList.add('open');
    burgerButton.classList.add('remove');
})

// Défilement de la navbar => affichage burger + disparition croix
closeButton.addEventListener('click', () => {
    navBar.classList.remove('open');
    burgerButton.classList.remove('remove');
})

// Disparition burger au click sur le body
// body.addEventListener('click', () => {
//     console.log(2);
//     navBar.classList.remove('open');
//     burgerButton.classList.remove('remove');
// })


// Effet de mouvement sur image principale
const movieTitles = document.querySelectorAll(".mainimage");

if (window.matchMedia("(min-width: 800px)").matches) {
    movieTitles.forEach(el => {
        el.addEventListener("mousemove", e => {

            let elRect = el.getBoundingClientRect()

            let x = e.clientX - elRect.x
            let y = e.clientY - elRect.y


            let midCardWidth = elRect.width / 2
            let midCardHeight = elRect.height / 2




            let angleY = (x - midCardWidth) / 4
            let angleX = (y - midCardHeight) / 4


            el.style.transform = `perspective(900px) rotateX(${angleX}deg) rotateY(${angleY}deg) scale(1.1)`

        })
        el.addEventListener("mouseleave", e => {

            el.style.transform = 'none'

        })
    });

    // On récupère le slider
    const slider = document.querySelector('.slider');

    // On récupère les éléments
    const elements = document.querySelector('.elements');

    // On récupère le button next
    const nextButton = document.querySelector('#rightarrow');

    // On récupère le bouton prev
    const prevButton = document.querySelector('#leftarrow');

    // On récupère la card pour en retirer sa taille X
    const element = document.querySelector('.element');
    const style = window.getComputedStyle(element);

    // On vient créer un tableau avec tous les éléments
    const listElement = Array.from(elements.children);

    // On vient cloner le nombre d'image nécessaire à la fin du slider
    const elementWidth = element.getBoundingClientRect().width; // Dimension X d'un élément
    const elementsWidth = elements.getBoundingClientRect().width; // Dimension X du conteneur éléments

    // Calcul du nombre d'images visible 
    const imgNumber = Math.floor(elementsWidth / elementWidth) + 1;

    // Création des clones des 1ères images
    let firstTab = [];
    for (i = 0; i < imgNumber; i++) {
        let image = listElement[i].cloneNode(true);
        firstTab.push(image);
    }

    // Création des clones des dernières images
    let secondTab = []
    for (i = 0; i < imgNumber; i++) {
        let image = listElement[listElement.length - (i + 1)].cloneNode(true);
        secondTab.push(image);
    }

    // Ajout des clones dans le code HTML
    for (i = 0; i < imgNumber; i++) {
        elements.appendChild(firstTab[i]);
        elements.prepend(secondTab[i]);
    }

    // Gestion du click pour faire défiler le carroussel
    let compteur = 0;

    nextButton.addEventListener('click', () => {
        compteur++;
        elements.style.transition = "0.5s ease";
        let offSet = (-(elementWidth + 50) * compteur);
        elements.style.transform = `translateX(${offSet}px)`;

        // Rembobinage dès que l'animation est terminée avec la fonction setTimeout
        setTimeout(function () {
            if (compteur > listElement.length - 2) {  // Compteur = Dernière image du slider de base
                compteur = -1;
                elements.style.transition = "unset";
                let offSet = -elementWidth * compteur;
                elements.style.transform = `translateX(${offSet}px)`;
            }
        }, 500);

    })

    prevButton.addEventListener('click', () => {
        compteur--;
        elements.style.transition = "0.5s ease";
        let offSet = (-(elementWidth + 50) * compteur);
        elements.style.transform = `translateX(${offSet}px)`;

        // Rembobinage dès que l'animation est terminée avec la fonction setTimeout
        setTimeout(function () {
            if (compteur < -(listElement.length - 2)) {
                compteur = 1;
                let offSet = -elementWidth * compteur;
                elements.style.transition = "unset";
                elements.style.transform = `translateX(${offSet}px)`;
            }
        }, 500);

    })

}

// Note -> Carroussel fonctionnant avec un nombre impaire de cartes créées. 
// Pour effectuer le bon reset dans la fonction setTimeout:
// compteur = 0 si 3 cartes créées 
// compteur = 1 et -1 si 5 cartes créées 
// compteur = 2 et -2 si 7 cartes créées 
// ...


