function showPhase(phaseNumber) {
    document.getElementById('content1').style.display = 'none';
    document.getElementById('content2').style.display = 'none';
    document.getElementById('content3').style.display = 'none';
    document.getElementById('content' + phaseNumber).style.display = 'block';
    
}