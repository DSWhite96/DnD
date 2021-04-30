button = document.getElementById("start");
list = document.getElementById("buttons");
classSelect = document.getElementById("classSelector");

function getRequest(extension="") {
    fetch("https://www.dnd5eapi.co/api/" + extension)
    .then((response) => {
        let data = response.json();
        return data;
    })
    .then((data) => {
        console.log(data);
        button.remove();
        for (let i = 0; i < data["count"]; i++) {
            let tempLi = document.createElement("li");
            let tempButton = document.createElement("button");
            let tempLink = document.createElement("a");
            tempLink.href = "race.html";
            tempButton.innerText = data["results"][i]["name"];
            tempButton.appendChild(tempLink);
            tempLi.appendChild(tempButton);
            list.appendChild(tempLi);
            classSelect.innertText = "Select a Class";
            tempButton.addEventListener("click", () => {
                localStorage.setItem("Selected Class", tempButton.innerText);
                window.location = "race.html";
            });
        }
    });
}

button.addEventListener("click", () => getRequest("classes"));