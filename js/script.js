let speech =  new SpeechSynthesisUtterance();

let voices = [];

let voiceSelect = document.querySelector(".list");

window.speechSynthesis.onvoiceschanged = () => {
    voices = window.speechSynthesis.getVoices();
    speech.voice = voices[0];
    voices.forEach((voice, i) => (voiceSelect.options[i] =  new Option(voice.name, i)));
};

voiceSelect.addEventListener("change", () => {
    speech.voice = voices[voiceSelect.value];
});

document.querySelector(".btn").addEventListener("click", () => {
    speech.text = document.querySelector(".text").value;
    window.speechSynthesis.speak(speech);
});
