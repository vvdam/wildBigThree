const profiles = [
    {
        name: "Adam Maaloul",
        picture: "../doc/pfp/Sibadprofile.jpg",
        bio: `Un jour je serai le meilleur dresseur Je me battrai sans répit Je ferai tout pour être vainqueur Et gagner les défis Je parcourrai la terre entière Traquant avec espoir Les Pokémon et leurs mystères Le secret de leurs pouvoirs`,
    },
    {
        name: "Adam mamloul",
        picture: "https://pbs.twimg.com/media/EbrSamFWAAAKpTV.png",
        bio: `Pas de panique à bord, le fun et la vitesse à bord Pas de panique à
    bord C'est les Ratz, c'est les Ratz qui sont là pour ça`,
    },
    {
        name: "Ilya Répine ",
        picture:
            "https://uploads7.wikiart.org/00207/images/57726d84edc2cb3880b48a43/iv-n-el-terrible-y-su-hijo-por-ili-repin-2.jpg!Large.jpg",
        bio: `J'ai plus d'inspi`,
    },
];

const main = document.querySelector(".content");

function createCard(profile) {
    const card = document.createElement("div");
    card.classList.add("card");
    // Image---------
    const cardImage = document.createElement("img");
    cardImage.classList.add("card-img");
    console.log(profile.picture);
    cardImage.src = profile.picture;
    card.appendChild(cardImage);
    // TITRE---------
    const cardTitle = document.createElement("h1");
    cardTitle.textContent = profile.name;
    cardTitle.classList.add("card-title");
    card.appendChild(cardTitle);
    // Bio---------
    const cardBio = document.createElement("p");
    cardBio.textContent = profile.bio;
    cardBio.classList.add("card-bio");
    card.appendChild(cardBio);
    // button---------
    const cardButton = document.createElement("button");
    cardButton.classList.add("card-button");
    cardButton.textContent = "more about";
    card.appendChild(cardButton);
    return card;
}

for (const profile of profiles) {
    console.log("help!!!!!!!");
    const cardEl = createCard(profile);
    main.appendChild(cardEl);
    console.log(cardEl); //ca donne un undifined
}
