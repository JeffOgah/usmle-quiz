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

const questionNode = document.getElementById('currentQuestion');
const questionHistory = document.getElementById('questionHistory');

document.getElementById("submit").addEventListener(
  "click",
  event => {
    event.preventDefault();
    document.getElementById('quizSetup').style.display = "none";
    quizInit();
  },
  false
);

const displayTime = () => {
  let quizTime = document.getElementById("quizTime").value;
  const timerNode = document.getElementById("timer");
  if (quizTime > 1) {
    timerNode.style.display = "inline-block"
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
  for (let i=0; i <= noOfQuestions; i++) {
    let random = Math.floor(Math.random() * (max - 0)) + 0;
    renderQuestion(data[random]);
  }
}
function renderQuestion(value) {
  let question = document.createElement('p');
  let answer = document.createElement('p');

  question.innerHTML = value[0];
  answer.innerHTML = value[1];

  questionNode.appendChild(question);
  questionNode.appendChild(answer);

  questionHistory.appendChild(question);
  questionHistory.appendChild(answer);

}
/* function markQuestion() {
  const correct = document.createElement('button');
  const wrong = document.createElement('button');

  correct.classList.add('correct-btn');
  wrong.classList.add('wrong-btn');

  return (correct, wrong)
} */