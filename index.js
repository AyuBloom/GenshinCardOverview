async function onCharacterSelect({ value: character }) {
    /* const constellation = constellationsByCharacter[value];
    const constellationImage = fetch("") */
    console.log(character);
    const seralizedCharacterName = character.split(" ").join("_");
    const {constellation: constellationName, element: elementName, region: regionName} = allCharacters[character];

    const card = document.getElementsByClassName("main-card")[0];
    card.style.backgroundImage = "linear-gradient(to left, rgba(0, 0, 0, 0.6) 0%, transparent 50%), url(/assets/name-cards/" + seralizedCharacterName + "-name-card.png)";

    const characterFullBody = document.getElementsByClassName("character-full-body")[0];
    try {
        characterFullBody.src = `/assets/full-wish/${seralizedCharacterName}-full-wish.png`;
    } catch {};

    const characterElement = document.getElementsByClassName("element")[0];
    characterElement.className = 'element ' + elementName;

    const emblem = document.getElementsByClassName("emblem")[0];
    emblem.className = 'emblem ' + regionName;

    const characterName = document.getElementsByClassName("character-name")[0];
    characterName.innerText = character;

    const characterConstellation = document.getElementsByClassName("character-constellation")[0];
    characterConstellation.src = `/assets/constellations/${seralizedCharacterName}-constellation.png`;

    const characterConstellationName = document.getElementsByClassName("character-constellation-name")[0];
    characterConstellationName.innerText = constellationName;
};

(function main() {
    const characterSelection = document.getElementsByClassName("character-select")[0];

    for (let characterName in allCharacters) {
        characterSelection.innerHTML += `<option id="${characterName}">${characterName}</option>`;
    };

    onCharacterSelect(characterSelection);
})();

document.getElementsByClassName("character-select")[0].addEventListener("change", ({target}) => { onCharacterSelect(target); });

document.getElementsByClassName("character-constellation")[0].addEventListener("mouseenter", ({target}) => {
    target.style.opacity = 1;
    document.getElementsByClassName("character-constellation-name")[0].style.opacity = 1;
    document.getElementsByClassName("character-full-body")[0].style.opacity = 0.1;
});

document.getElementsByClassName("character-constellation")[0].addEventListener("mouseleave", ({target}) => {
    target.style.opacity = 0;
    document.getElementsByClassName("character-constellation-name")[0].style.opacity = 0;
    document.getElementsByClassName("character-full-body")[0].style.opacity = 1;
});