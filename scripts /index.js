//Selector variables
const questionNode = document.getElementById('question');
const answerNode = document.getElementById('answer');
const markQuestionNode = document.getElementById('markQuestion');
const showAnswerNode = document.getElementById('showAnswer');
const questionHistory = document.getElementById('questionHistory');
let questions = [];
let counter = 0;
let wrongCount = 0;

//Event Listeners
document.getElementById('submit').addEventListener(
  'click',
  event => {
    event.preventDefault();
    document.getElementById('quizSetup').classList.add('d-none');
    document.getElementById('currentQuestion').classList.remove('d-none');
    quizInit();
  },
  false
);

function showAnswerEvents() {
  if (showAnswerNode.classList.contains('d-none')) {
    showAnswerNode.classList.remove('d-none');
    answerNode.classList.add('d-none');
    markQuestionNode.classList.add('d-none');
  } else {
    showAnswerNode.classList.add('d-none');
    answerNode.classList.remove('d-none');
    markQuestionNode.classList.remove('d-none');
  }
}

function quizInit() {
  // displayTime();
  createQuestion();
  renderQuestion(data[counter]);
}

function markAnswer(value) {
  if (value == 'wrong') {
    addToHistory(data[counter]);
    wrongCount++;
  }
  //move to the next question
  counter++;
  if (counter < questions.length) {
    renderQuestion(data[counter]);
    showAnswerEvents();
  } else {
    document.getElementById('currentQuestion').classList.add('d-none');
    if (wrongCount > 0) {
      questionHistory.classList.remove('d-none');
    }
    else {
      document.getElementById('perfectScore').classList.remove('d-none');
    }
    document.getElementById('newQuiz').classList.remove('d-none')
  }
}

/* const displayTime = () => {
  let quizTime = document.getElementById('quizTime').value;
  const timerNode = document.getElementById('timer');
  if (quizTime > 1) {
    timerNode.style.display = 'inline-block';
    const timer = setInterval(() => {
      quizTime--;
      let min = `0${Math.floor(quizTime / 60)}`;
      let sec = `0${quizTime % 60}`;
      timerNode.innerHTML = `${min.slice(-2)} : ${sec.slice(-2)}`;
      if (quizTime == 0) {
        clearInterval(timer);
      }
    }, 1000);
  }
}; */

function createQuestion() {
  const noOfQuestions = document.getElementById('noOfQuestions').value;
  const max = data.length;
  for (let i = 0; i < noOfQuestions; i++) {
    let random = Math.floor(Math.random() * (max - 0)) + 0;
    if (!questions.includes(random)) {
      questions.push(random);
    } else {
      random = Math.floor(Math.random() * (max - 0)) + 0;
      questions.push(random);
    }
  }
}

function renderQuestion(value) {
  questionNode.innerHTML = `<b>${counter+1}. ${value[0]}</b>`;
  answerNode.innerHTML = value[1];
}

function addToHistory([quest, ans]) {
  let container = document.createElement('div');
  let questNode = document.createElement('p');
  let ansNode = document.createElement('p');
  questNode.innerHTML = `<b>${quest}</b>`;
  ansNode.innerHTML = ans;

  container.append(questNode, ansNode);
  questionHistory.append(container);
}
