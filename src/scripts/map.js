tracks = ["Autodromo Nazionale di Monza", "Circuit de Barcelona", "Silverstone"];
position = 0;

document.addEventListener('DOMContentLoaded', function() {
    document.getElementById("TrackName").innerText = tracks[position];

    document.getElementById("LeftArrow").addEventListener('click', function() {
        position = position > 0 ? position - 1 : tracks.length - 1;
        document.getElementById("TrackName").innerText = tracks[position];
    });

    document.getElementById("RightArrow").addEventListener('click', function() {
        position = position < tracks.length - 1 ? position + 1 : 0;
        document.getElementById("TrackName").innerText = tracks[position];
    });
});