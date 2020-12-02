console.log("hello there!");

let displayCards = document.querySelector(".pokemon-display");

let form = document.querySelector(".search__form");


//lets make a function
function makeACard(img, name, id, entry){
    //get some page elements
    let card = document.createElement("div");
    //give it a class of pokemon-card
    card.classList.add("pokemon-card");
    displayCards.prepend(card);
    //picture
    let pokePicture = document.createElement("div");
    pokePicture.classList.add("pokemon-card__img");
    //api will add img here
    pokePicture.innerHTML = `<img class="pokemon-card__img__picture" src="${img}">`;

    card.appendChild(pokePicture);

    //name
    let pokeName = document.createElement("div");
    pokeName.classList.add("pokemon-card__name");
    card.appendChild(pokeName);
    pokeName.innerHTML = `<p class="pokemon-card__name__text">${name}</p>`;
    //pokedex #
    let pokeID = document.createElement("div");
    pokeID.classList.add("pokemon-card__id");
    card.appendChild(pokeID);
    pokeID.innerHTML = `<p class="pokemon-card__id__text">Pokedex #:<br>${id}</p>`;

    //entry
    let pokeEntry = document.createElement("div");
    pokeEntry.classList.add("pokemon-card__entry");
    card.appendChild(pokeEntry);
    pokeEntry.innerHTML = `<p class="pokemon-card__entry__text">${entry}</p>`;

}

form.addEventListener('submit', event =>{
    event.preventDefault();
    let result = event.target.finder.value.toLowerCase();
    //get some apis for
    axios
        .get(`https://pokeapi.co/api/v2/pokemon/` + result)
        .then(result => {
            let randomer = result.data.moves.length;
            let newString = result.data.moves[Math.floor(Math.random() * randomer)].move.name;
            
            makeACard(result.data.sprites.front_default, result.data.name, result.data.id, newString)
        })
    
    form.reset();

});