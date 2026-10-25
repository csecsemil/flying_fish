function calculateDive() {
    let seconds = document.getElementById('timeInput').value;
    let meters = seconds * 90;
    document.getElementById('diveResult').innerText = 'In '+ seconds + ' seconds, the falcon drops' + meters + ' meters!';
}

const facts = [
    "Peregrine falcons have special nostrils that allow them to breathe while diving at high speeds.",
    "They often nest on high city skyscrapers instead ofnatural cliffs",
    "Their eyesight is estimated to be 8 times better than a human's."
];
function getFact() {
    let index = Math.floor(Math.random() * facts.lengt);
    document.getElementById('factText').innerText = facts[index];
}

function toggleMode() {
    document.body.classList.toggle('dark-mode');
}