let dice = document.getElementById("roller");
let list = document.getElementById("diceRolls");

const BASE_URL = "https://www.dnd5eapi.co/api/";

function rollDice() {
    //Get 4 random dice rolls
    let rolls = [Math.floor(Math.random() * 6) + 1, Math.floor(Math.random() * 6) + 1, Math.floor(Math.random() * 6) + 1, Math.floor(Math.random() * 6) + 1];
    //Remove the lowest number
    let min_roll = Math.min(...rolls);
    let min_index = rolls.indexOf(min_roll);
    rolls.splice(min_index, 1);
    //Add the remaining numbers together
    console.log(rolls);
    let total = rolls.reduce((a, b) => a+b);
    console.log(total);
    return total;
}

function removeChildren(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}


dice.addEventListener('click', () => {
    //Rolls for 6 stats
    removeChildren(list);
    let rolls = [rollDice(), rollDice(), rollDice(), rollDice(), rollDice(), rollDice()];
    for (let i = 0; i < 6; i++) {
        let tempLi = document.createElement('li');
        tempLi.innerText = rolls[i];
        list.appendChild(tempLi);
    }
    console.log(rolls);
    localStorage.setItem('Rolls', JSON.stringify(rolls));
    window.location = "./classInfo.html";
});