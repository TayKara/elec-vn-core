var object = window.api.sendSync("ask-object");
var dirname = window.api.sendSync("ask-dirname");
var playedObjects = window.api.sendSync("ask-played-objects");
var audio = document.getElementById("audioVoice");
var containerLogs = document.getElementById("containerLogs");
var buttonReturn = document.getElementById("buttonReturn");
buttonReturn.addEventListener("click", (ev) => {
    window.api.send("close-children");
});
function addButtons(listButtons) {
    console.log("log object");
    console.log(playedObjects);
    for (let i = 0; i < playedObjects.length; i++) {
        let value = object.find(element => (element.id == playedObjects[i] && element.type == "object"));
        if (value) {
            let button = document.createElement("button");
            button.setAttribute("class", "logItem");
            value = object[i];
            if (value.audioVoice) {
                button.addEventListener("click", () => {
                    audio.setAttribute("src", dirname + "/game/sound/" + value.audioVoice);
                    audio.play();
                });
            }
            if (value.text) {
                button.innerText = value.text;
            }
            containerLogs.appendChild(button);
        }
    }
    let button = containerLogs.childNodes[containerLogs.childNodes.length - 1];
    button.scrollIntoView();
}
addButtons(playedObjects);
