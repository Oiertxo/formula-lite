const tracks = [];
let position = 0;

async function loadData() {
    try {
        const parsedData = await ipcRenderer.invoke("ReadCircuits", "circuits.csv");

        parsedData.forEach(element => {
            tracks.push(element.name);
        });

        updateTrackName();
    } catch (error) {
        console.error("Error while reading file:", error);
    }
}

loadData();

function updateTrackName() {
    document.getElementById("TrackName").innerText = tracks[position];
}

document.addEventListener('DOMContentLoaded', async function() {
    document.getElementById("LeftArrow").addEventListener("click", function() {
        position = position > 0 ? position - 1 : tracks.length - 1;
        updateTrackName();
    });

    document.getElementById("RightArrow").addEventListener("click", function() {
        position = position < tracks.length - 1 ? position + 1 : 0;
        updateTrackName();
    });
});