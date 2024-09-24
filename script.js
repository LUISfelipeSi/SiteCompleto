// Função para validar formulário de contato
document.querySelector('form').addEventListener('submit', function(e) {
    var nome = document.getElementById('nome').value;
    var email = document.getElementById('email').value;
    var mensagem = document.getElementById('mensagem').value;

    if (nome === '' || email === '' || mensagem === '') {
        e.preventDefault();
        alert('Por favor, preencha todos os campos.');
    }
});
//Quizz
function disableOptions(questionName) {
    let options = document.getElementsByName(questionName);
    options.forEach(option => {
        if (!option.checked) {
            option.disabled = true;
        }
    });
}

function playSound() {
    let clickSound = document.getElementById('selecionasom');
    clickSound.play();
}

function submitQuiz() {
    let correctAnswers = {
        q1: "B",
        q2: "B",
        q3: "B",
        q4: "C",
        q5: "B",
        q6: "B",
        q7: "C",
        q8: "C",
        q9: "A",
        q10: "B",
    };

    let form = document.getElementById('quiz-form');
    let score = 0;
    let totalQuestions = Object.keys(correctAnswers).length;

    for (let key in correctAnswers) {
        let userAnswer = form.elements[key].value;
        if (userAnswer === correctAnswers[key]) {
            score++;
        }
    }

    let result = document.getElementById('result');
    result.innerHTML = `Você acertou ${score} de ${totalQuestions} perguntas.`;

    let submitButton = document.getElementById('submit-btn');
    let retryButton = document.getElementById('retry-btn');

    if (score === totalQuestions) {
        let successSound = document.getElementById('venceusom');
        successSound.play();
    } else {
        let errorSound = document.getElementById('errosom');
        errorSound.play();
    }

    submitButton.disabled = true;
    retryButton.disabled = false;
}

function retryQuiz() {
    let form = document.getElementById('quiz-form');
    let submitButton = document.getElementById('submit-btn');
    let retryButton = document.getElementById('retry-btn');

    form.reset();
    submitButton.disabled = false;
    retryButton.disabled = true;

    let options
}