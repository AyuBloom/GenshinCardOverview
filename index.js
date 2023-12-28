(function main() {
    const characterSelection = document.getElementsByClassName("character-select")[0];

    for (let characterName of allCharacters) {
    characterSelection.innerHTML += `<option id="${characterName}">${characterName}</option>`;
    }
})();