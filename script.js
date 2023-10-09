let currentQuestion = 0;

showQuestion();

function showQuestion() {
    let q = questions[currentQuestion];

    document.querySelector('.scoreArea').style.display = 'none';
    document.querySelector('.questionArea').style.display = 'block';
}