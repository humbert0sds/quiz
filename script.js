let currentQuestion = 0;
let correctAnswers = 0;

showQuestion();

function showQuestion() {
    if (questions[currentQuestion]) {
        let q = questions[currentQuestion];

        let pct = Math.floor((currentQuestion / questions.length) * 100);

        document.querySelector('.progress--bar').style.width = `${pct}%`

        document.querySelector('.scoreArea').style.display = 'none';
        document.querySelector('.questionArea').style.display = 'block';

        document.querySelector('.question').innerHTML = q.question;

        let optionsHtml = '';
        for (let i in q.options) {
            optionsHtml += `<div data-op="${i}" class="option"><span>${parseInt(i) + 1}</span> ${q.options[i]}</div>`
        }

        document.querySelector('.options').innerHTML = optionsHtml;


        document.querySelectorAll('.options .option').forEach(item => {
            item.addEventListener('click', optionClickEvent)
        });

    } else {
        finishQuiz()
    }
}

document.querySelector('.scoreArea button').addEventListener('click', resetQuestions);

function optionClickEvent(e) {
    let clickedOption = parseInt(e.target.getAttribute('data-op'))

    if (questions[currentQuestion].answer === clickedOption) {
        correctAnswers++
    }

    currentQuestion++
    showQuestion()
}

function finishQuiz() {
    let points = Math.floor((correctAnswers / questions.length) * 100);

    document.querySelector('.questionArea').style.display = 'none';
    document.querySelector('.scoreArea').style.display = 'block';
    document.querySelector('.progress--bar').style.width = '100%';

    document.querySelector('.scorePct').innerHTML = `Acertou ${points}%`
    document.querySelector('.scoreText2').innerHTML = `Voçê respondeu ${currentQuestion} e acertou ${correctAnswers}`

    if (points < 30) {
        document.querySelector('.scoreText1').innerHTML = 'Horrivel !!'
        document.querySelector('.scorePct').style.color = 'red'
    } else if (points >= 30 && points <= 70) {
        document.querySelector('.scoreText1').innerHTML = 'Ta melhorando'
        document.querySelector('.scorePct').style.color = 'orange'
    } else if (points > 70) {
        document.querySelector('.scoreText1').innerHTML = 'Parabéns'
        document.querySelector('.scorePct').style.color = 'green'
    }

}

function resetQuestions() {
    correctAnswers = 0;
    currentQuestion = 0;

    showQuestion()
}