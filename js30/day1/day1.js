
window.addEventListener("keydown", (elem) => {

    // picks the element, with "data-key"-attribute
    const pickedAudio = document.querySelector(`audio[data-key="${elem.keyCode}"]`);
    const pickedButton = document.querySelector(`.button[data-key="${elem.keyCode}"]`);

    // picks all audio-elements
    const allTracks = document.querySelectorAll("audio");

    // chosen audio
    if (pickedAudio) {
        pickedAudio.currentTime = 0;
        stopAllTracks();
        pickedAudio.play();
        pickedButton.classList.add("playing");
    }

    // stop music
    if (elem.key == "q") {
        stopAllTracks();
    }

    function stopAllTracks() {
        allTracks.forEach(audio => {
            audio.pause();
        });
    }
});

// select all elements with button-class ==> (".button")
const allButtons = document.querySelectorAll(".button");
// when button-transition ends, invoke Function
allButtons.forEach(item => item.addEventListener('transitionend', removeTransition));

// e passes the data of the "transition"-event
function removeTransition(e) {
    // pick transition event that takes the longest time
    // ignore all properties, except for "transform", which has longest transition time
    if (e.propertyName !== "box-shadow") return; 

    this.classList.remove("playing");
}

 