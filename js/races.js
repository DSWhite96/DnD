races = document.getElementById("races");

fetch("https://www.dnd5eapi.co/api/races")
    .then((response) => {
        let data = response.json();
        return data;
    })
    .then((data) => {
        console.log(data);
        for (let i = 0; i < data["count"]; i++) {
            let tempLi = document.createElement("li");
            let tempButton = document.createElement("BUTTON");
            let tempLink = document.createElement("a");
            tempButton.innerText = data["results"][i]["name"];
            tempButton.appendChild(tempLink);
            tempLi.appendChild(tempButton);
            races.appendChild(tempLi);
            tempButton.addEventListener("click", () => {
                localStorage.setItem("Selected Race", tempButton.innerText);
                window.location = "rolls.html";
            });
        }
    })