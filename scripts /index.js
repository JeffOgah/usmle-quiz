const data = [
  [`Anaerobic pneumonia- name the bacteria?`, `Peptostreptococcus`],
  [
    `Heinz body seen where?`,
    `a. Intracellular inclusions seen in thalassemia, G6PD deficiency, and
    postsplenectomy. 
    b. G6PD deficiency 
    i. Causes of oxidative stress in G6PD deficiency include
    infection, metabolic acidosis, fava beans, antimalarials,
    dapsone, sulfonamides, and nitrofurantoin.
    ii. An X-linked recessive disease that ↑ RBC sensitivity to
    oxidative stress.`
  ],
  [`xxx`, `xxx`],
  [`xxx`, `xxx`],
  [`xxx`, `xxx`],
  [`xxx`, `xxx`],
  [`xxx`, `xxx`],
  [`xxx`, `xxx`],
  [`xxx`, `xxx`],
  [`xxx`, `xxx`],
  [`xxx`, `xxx`],
  [`xxx`, `xxx`],
  [`xxx`, `xxx`],
  [`xxx`, `xxx`],
  [`xxx`, `xxx`],
  [`xxx`, `xxx`],
  [`xxx`, `xxx`],
  [`xxx`, `xxx`],
  [`xxx`, `xxx`],
  [`xxx`, `xxx`],
  [`xxx`, `xxx`],
  [`xxx`, `xxx`],
  [`xxx`, `xxx`],
  [`xxx`, `xxx`],
  [`xxx`, `xxx`],
  [`xxx`, `xxx`],
  [`xxx`, `xxx`],
  [`xxx`, `xxx`],
  [`xxx`, `xxx`],
  [`xxx`, `xxx`],
  [`xxx`, `xxx`],
  [`xxx`, `xxx`],
  [`xxx`, `xxx`],
  [`xxx`, `xxx`],
  [`xxx`, `xxx`],
  [`xxx`, `xxx`],
  [`xxx`, `xxx`],
  [`xxx`, `xxx`],
  [`xxx`, `xxx`],
  [`xxx`, `xxx`],
  [`xxx`, `xxx`],
  [`xxx`, `xxx`],
  [`xxx`, `xxx`],
  [`xxx`, `xxx`],
  [`xxx`, `xxx`],
  [`xxx`, `xxx`],
  [`xxx`, `xxx`],
  [`xxx`, `xxx`],
  [`xxx`, `xxx`],
  [`xxx`, `xxx`],
  [`xxx`, `xxx`],
  [`xxx`, `xxx`],
  [`xxx`, `xxx`],
  [`xxx`, `xxx`],
  [`xxx`, `xxx`],
  [`xxx`, `xxx`],
  [`xxx`, `xxx`],
  [`xxx`, `xxx`],
  [`xxx`, `xxx`],
  [`xxx`, `xxx`],
  [`xxx`, `xxx`],
  [`xxx`, `xxx`],
  [`xxx`, `xxx`],
  [`xxx`, `xxx`],
  [`xxx`, `xxx`],
  [`xxx`, `xxx`],
  [`xxx`, `xxx`],
  [`xxx`, `xxx`],
  [`xxx`, `xxx`],
  [`xxx`, `xxx`],
  [`xxx`, `xxx`],
  [`xxx`, `xxx`],
  [`xxx`, `xxx`],
  [`xxx`, `xxx`],
  [`xxx`, `xxx`],
  [`xxx`, `xxx`],
  [`xxx`, `xxx`],
  [`xxx`, `xxx`],
  [`xxx`, `xxx`],
  [`xxx`, `xxx`],
  [`xxx`, `xxx`],
  [`xxx`, `xxx`],
  [`xxx`, `xxx`],
  [`xxx`, `xxx`],
  [`xxx`, `xxx`],
  [`xxx`, `xxx`],
  [`xxx`, `xxx`],
  [`xxx`, `xxx`],
  [`xxx`, `xxx`],
  [`xxx`, `xxx`],
  [`xxx`, `xxx`],
  [`xxx`, `xxx`],
  [`xxx`, `xxx`],
  [`xxx`, `xxx`],
  [`xxx`, `xxx`],
  [`xxx`, `xxx`],
  [`xxx`, `xxx`],
  [`xxx`, `xxx`],
  [`xxx`, `xxx`],
  [`xxx`, `xxx`],
  [`xxx`, `xxx`],
  [`xxx`, `xxx`],
  [`xxx`, `xxx`],
  [`xxx`, `xxx`],
  [`xxx`, `xxx`],
  [`xxx`, `xxx`],
  [`xxx`, `xxx`],
  [`xxx`, `xxx`],
  [`xxx`, `xxx`],
  [`xxx`, `xxx`],
  [`xxx`, `xxx`],
  [`xxx`, `xxx`],
  [`xxx`, `xxx`],
  [`xxx`, `xxx`],
  [`xxx`, `xxx`],
  [`xxx`, `xxx`],
  [`xxx`, `xxx`],
  [`xxx`, `xxx`],
  [`xxx`, `xxx`],
  [`xxx`, `xxx`],
  [`xxx`, `xxx`],
  [`xxx`, `xxx`],
  [`xxx`, `xxx`],
  [`xxx`, `xxx`],
  [`xxx`, `xxx`],
  [`xxx`, `xxx`],
  [`xxx`, `xxx`],
  [`xxx`, `xxx`],
  [`xxx`, `xxx`],
  [`xxx`, `xxx`],
  [`xxx`, `xxx`],
  [`xxx`, `xxx`],
  [`xxx`, `xxx`],
  [`xxx`, `xxx`],
  [`xxx`, `xxx`],
  [`xxx`, `xxx`],
  [`xxx`, `xxx`],
  [`xxx`, `xxx`],
  [`xxx`, `xxx`],
  [`xxx`, `xxx`],
  [`xxx`, `xxx`],
  [`xxx`, `xxx`],
  [`xxx`, `xxx`],
  [`xxx`, `xxx`],
  [`xxx`, `xxx`],
  [`xxx`, `xxx`],
  [`xxx`, `xxx`],
  [`xxx`, `xxx`],
  [`xxx`, `xxx`],
  [`xxx`, `xxx`],
  [`xxx`, `xxx`],
  [`xxx`, `xxx`],
  [`xxx`, `xxx`],
  [`xxx`, `xxx`],
  [`xxx`, `xxx`],
  [`xxx`, `xxx`],
  [`xxx`, `xxx`],
  [`xxx`, `xxx`],
  [`xxx`, `xxx`],
  [`xxx`, `xxx`],
  [`xxx`, `xxx`],
  [`xxx`, `xxx`],
  [`xxx`, `xxx`],
  [`xxx`, `xxx`],
  [`xxx`, `xxx`],
  [`xxx`, `xxx`],
  [`xxx`, `xxx`],
  [`xxx`, `xxx`],
  [`xxx`, `xxx`],
  [`xxx`, `xxx`],
  [`xxx`, `xxx`],
  [`xxx`, `xxx`],
  [`xxx`, `xxx`],
  [`xxx`, `xxx`],
  [`xxx`, `xxx`],
  [`xxx`, `xxx`],
  [`xxx`, `xxx`],
  [`xxx`, `xxx`],
  [`xxx`, `xxx`],
  [`xxx`, `xxx`],
  [`xxx`, `xxx`],
  [`xxx`, `xxx`],
  [`xxx`, `xxx`],
  [`xxx`, `xxx`],
  [`xxx`, `xxx`],
  [`xxx`, `xxx`],
  [`xxx`, `xxx`],
  [`xxx`, `xxx`],
  [`xxx`, `xxx`],
  [`xxx`, `xxx`],
  [`xxx`, `xxx`],
  [`xxx`, `xxx`],
  [`xxx`, `xxx`],
  [`xxx`, `xxx`],
  [`xxx`, `xxx`],
  [`xxx`, `xxx`],
  [`xxx`, `xxx`],
  [`xxx`, `xxx`],
  [`xxx`, `xxx`],
  [`xxx`, `xxx`]
];

document.getElementById("submit").addEventListener(
  "click",
  event => {
    event.preventDefault();
    document.getElementById("quizSetup").style.display = "none";
    quizInit();
  },
  false
);

const displayTime = () => {
  let quizTime = document.getElementById("quizTime").value;
  const timerNode = document.getElementById("timer");
  if (quizTime > 1) {
    timerNode.style.display = "inline-block";
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
};

function quizInit() {
  displayTime();
  createQuestion();
}

function createQuestion() {
  const noOfQuestions = document.getElementById("noOfQuestions").value;
  const max = data.length;
  for (let i = 0; i < noOfQuestions; i++) {
    let random = Math.floor(Math.random() * (max - 0)) + 0;
    renderQuestion(data[random]);
  }
}
function renderQuestion(value) {
  const questionHistory = document.getElementById("questionHistory");
  const questionNode = document.getElementById("currentQuestion");

  let question = document.createElement("p");
  let answer = document.createElement("p");
  let [correctBtn, wrongBtn] = markQuestion();

  question.innerHTML = value[0];
  answer.innerHTML = value[1];

  // questionHistory.appendChild(question,answer);
  questionNode.append(question, answer, correctBtn, wrongBtn);
  console.log(correctBtn,wrongBtn)
}

function markQuestion() {
  const correct = document.createElement('button');
  const wrong = document.createElement('button');

  correct.innerHTML = "Correct"
  correct.classList.add('correct-btn');

  wrong.innerHTML = "Wrong"
  wrong.classList.add('wrong-btn');

  return [correct, wrong]
}
