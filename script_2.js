function calculateDive() {
    let seconds = document.getElementById('timeInput').value;
    let meters = seconds * 90;
    document.getElementById('diveResult').innerText = 'In '+ seconds + ' seconds, the falcon drops' + meters + ' meters!';
}