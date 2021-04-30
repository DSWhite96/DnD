
let classInfo = document.getElementById("selectedClass");
let className = document.getElementById("className");
let raceName = document.getElementById("raceName");
let raceInfo = document.getElementById("selectedRace");
let button = document.getElementById("funPart");
let rollsList = document.getElementById("diceRolls");
className.innerText = localStorage.getItem('Selected Class');
raceName.innerText = localStorage.getItem('Selected Race');

let rolls = localStorage.getItem("Rolls")
rollsArray = JSON.parse(rolls);
for (i = 0; i < 6; i++) {
    let tempButton = document.createElement("button");
    let tempLi = document.createElement("li");
    tempButton.innerText = rollsArray[i];
    tempLi.appendChild(tempButton);
    rollsList.appendChild(tempLi);
}

rollsList.style = "display: inline";
//button.addEventListener('click', () => generator.makeFile());