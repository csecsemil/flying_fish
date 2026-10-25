document.addEventListener("DOMContentLoaded", function() {
    showPhase(1);
});

function showPhase(phaseNumber) {
    document.getElementById('content1').style.display = 'none';
    document.getElementById('content2').style.display = 'none';
    document.getElementById('content3').style.display = 'none';
    document.getElementById('content' + phaseNumber).style.display = 'block';
}



function toggleTheme() {
    document.body.classList.toggle('dark-mode');

}



function calculateGlide() {
    let speed = document.getElementById('speedInput').value;
    let distance = speed * 3.5;
    document.getElementById('calcResult').innerText = 'Estimated maximum flight distance: ' + distance + ' m!';
}


const facts = [
    "Flying fish cannot fly overland, they only glide over the water.",
    "They are capable of gliding a clear distance of up to 400 meters in a singel launch!",
    "At night, they often stray on to the decks of the ships, drawn by the light.",
    "There are more than 40 different species of them in the world's tropical oceans."
];

function getRandomFact() {
    let randomIndex = Math.floor(Math.random() * facts.length);
    document.getElementById('factDisplay').innerText = facts[randomIndex];
};

function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}


// mini quiz

let score = 0;
let answeredQuestions = 0;
 
function checkAnswer(button, isCorrect) {

    const questionBlock = button.parentElement;
    const buttonsInBlock = questionBlock.querySelectorAll('.quiz-btn');
    buttonsInBlock.forEach(btn => btn.disabled = true);

    if (isCorrect) {
        button.classList.add('correct');
        score++;
    } else {
        button.classList.add('incorrect');
    } 

    answeredQuestions++;

    if (answeredQuestions === 3) {
        const scoreDiv = document.getElementById('quiz-score');
        scoreDiv.innerText = `You scored ${score} out of 3!`;
        document.getElementById('resetQuizBtn').style.display = 'block';

    
    };
    
}
function resetQuiz() {
    score = 0;
    answeredQuestions = 0;

    document.getElementById('quiz-score').innerText = '';
    document.getElementById('resetQuizBtn').style.display = 'none';

    //minden gombot alapelyzetbe allitunk
    const allButtons = document.querySelectorAll('.quiz-btn');

    allButtons.forEach(btn => {
        btn.disabled = false,
        btn.classList.remove('correct', 'incorrect');
    });
}

