const data = [
  [`Lab values showing high eosinophil.`, `Interstitial Nephritis (tubulointerstitial nephritis) \n FEVER + RASH + JOINT PAIN = AIN
  SCARP \n
  S= SULFA DRUG \n
  C= CEPHALOSPORIN \n
  A= ALLOPURINOL, ASPIRIN (NSAIDs) \n
  R= RIFAMPIN \n
  P= PENICILLIN, PPI \n
  Acute interstitial renal inflammation. Pyuria (classically eosinophils) and
  azotemia occurring after administration of drugs that act as haptens, inducing
  hypersensitivity. Nephritis typically occurs 1–2 weeks after certain drugs (e.g.,
  diuretics, penicillin derivatives, sulfonamides, rifampin), but can occur months
  after starting NSAIDs.`],
  [`Pic of port wine stain, ask what other complication.`, `Seizure (sturge-webber) – leptomeningial angioma`],
  [`DKA question, asking what causes is. Know it’s related to TYPE 1.`, `lack of insulin production`],
  [`Girl being treated for MDD and then recently switched to Buproprion, Now
  she is singing songs.`, `bipolar disorder - antidepressants can bring out a manic episode`],
  [`Pt. has + osmotic fragility test (Hereditary spherocytosis) with presentation of
  gallstones. What to do?`, `Cholecystectomy and Splenectomy`],
  [`Pt. on TMP-SMX. Abnormal heme/onc numbers.
  `, `G6PD`],
  [`Peripheral Smear has Heinz body.`, `G6PD`],
  [`77 yo old male has murmur that decreases in intensity when they hand grip
  and increase with squatting.`, `Aortic Stenosis`],
  [`Child has jelly like diarrhea. What is ur next step in management?`, `Barium Enema (intussusception)`],
  [`Patient had decreased total lung capacity.`, `Fibrosis of lung (restrictive)`],
  [`Pic of hands showing DIP involvement`, `Osteoarthritis`],
  [`Child complains of wrist pain and joint pains.`, `Juvenille Artheritis`],
  [`Septic shock with low BP. What do u do next?`, `Fluids`],
  [`Patient had small cell carcinoma of lung, showed hyponatremia. Asked
  what caused this value?`, `Decreased excretion of urine (SIADH) and increased urine osmolality`],
  [`Described pregnant pt. with DVT, asked what other values u should
  check?`, `increased homocysteine = hypercoagulable \n
  also check factor V leiden \n
  Most laboratories screen 'at risk' patients with either a snake venom (e.g.
  dilute Russell's viper venom time) based test or an aPTT based test. In both
  methods, the time it takes for blood to clot is decreased in the presence of the
  factor V Leiden mutation. This is done by running two tests simultaneously;
  one test is run in the presence of activated protein C (APC) and the other, in
  the absence. A ratio is determined based on the two tests and the results
  signify to the laboratory whether APC is working or not. \n
  Genetic Test: The mutation (a 1691G→A substitution) removes a cleavage site
  of the restriction endonuclease MnlI, so PCR, treatment with MnlI, and then
  DNA electrophoresis will give a diagnosis.`],
  [`Pt. had lens dislocations, long fingers, described the murmur of Aortic`, `Regurgitation. Asked what was likely to be messed up?
  Aortic root dilation`],
  [`Pic of AA person with hypopigmentation of back when he plays
  volleyball in the sun. Said sometimes it’s itchy.`, `tinea versicolor`],
  [`Pt. had hypertension, what meds do u give him? He didn’t have any kidney problems`, `thiazide followed by acei \n
  thiazide causes hyper GLUC (glucose, lipidemia, uricemia, calcemia)`],
  [`Otitis externa.`, `Pseudomonas`],
  [`Child was born with C-section. Doctor notices he has more fat on left
  thigh then right. Walks around normally.`, `Developmental dysplasia of hip – if there is increased gluteal fold  \n 
  Duchenne – gower’s sign is bilateral \n 
  Could this be one sided atrophy`],
  [`Young girl is now sexually active, what do u test for?`, `Chlamydia (24 or younger if sexually active, older if increased risk) \n 
  Neisseria (24 or younger if sexually active, older if increased risk) \n 
  Gonorrhea – treat both, but chlamydia you just treat chlamydia`],
  [`Pt. comes in with nuchal rigidity after throwing up and showing signs of increased intracranial pressure. No focal problems.`, `do lumbar puncture/CSF ANALYSIS  \n 
  Give mannitol  \n 
  
  avoid lumbar puncture in increased intracranial pressure because of uncal
  herniation – must rule mass lesions reasons for increased pressure`],
  [`p<.85`, `not significant`],
  [`Woman comes in with no period for 8 months and having hot flashes. What is next best step?`, `check estriol level \n 
  In menopause, check FSH and TSH. \n 
  FSH:LH ratio, FSH is higher because of decreased clearance. \n  \n 
  Another answer choice was discuss estrogen replacement therapy. I figured
  you should check the levels first b4 getting them on replacement therapy`],
  [`Asked what protects against osteoporosis?`, `Estrogen`],
  [`Pt. has withdrawal bleeding after progesterone test, why is she not
  menses?`, `Anovulation`],
  [`Pic of bone raising on a child.`, `Osteosarcoma
  `],
  [`Pt. that is diabetic hit his leg yesterday. Now skin is discolored and bullae are seen.`, `Necrotizing fasciitis \n 
  this can happen in diabetics`],
  [`Pt. had femoral artery repair now has DVT, what caused the DVT.`, `I put Popliteal break \n 
  When you are repairing the femoral artery there is a greater likelihood of
  getting a clot. It is this clot that will be transferred to the venous system via a
  possible break to cause DVT.`],
  [`Pt. has a catheter in place. Gets a clot. What do u do next?`, `A. remove catheter and start on heparin. \n 
  B. flush catheter with Heparin`],
  [`How to treat DKA?`, `IV Insulin`],
  [`Pt. has gastrectomy and now can’t walk straight. What is the cause?`, `Vitamin deficiency – possibly B12`],
  [`Pt. has dizziness (feels like the room is spinning).`, `Benign Positional Vertigo...might not be right
  The inside of the ear is composed of an organ called vestibular labyrinth. The
  vestibular labyrinth includes semicircular canals which contain fluids, and fine
  hair like sensors that act as a monitor to the rotations of the head. An
  important structure in the inner ear includes the Otolith organs which contain
  crystals that are sensitive to gravity. These crystals are responsible for the
  sensitivity of head positions and can also be dislocated, causing them to get
  inside one of the semicircular canals, which causes dizziness.  \n 
  Tx: The Epley maneuver employs gravity to move the calcium build-up that
  causes the condition.`],
  [`Pt. has facial droop, weakness on one side of face, pain n temp sensation normal both sides of face. Decreased hearing in both ears. What causes this?`, `Acoustic neuroma if it’s there  \n 
  This cannot be bells palsy if there is decreased hearing in both ears.  \n 
  Clinical features of Bell’s palsy is: BELL’S Palsy  \n 
  
  B – Blink reflex abnormal \n 
  E – Earache \n 
  L – Lacrimation [deficient, excess] \n 
  L – Loss of taste \n 
  S – Sudden onset \n Nephritis
  Palsy of VII nerve muscles (increased sensitivity to sound)`],
  [`xxx`, `xxx`],
  [`xxx`, `xxx`],
  [`xxx`, `xxx`],
  [`xxx`, `xxx`],
  [`xxx`, `xxx`],
  [`xxx`, `xxx`],
  [`xxx`, `xxx`],
  [`xxx`, `xxx`],
  [`xxx`, `xxx`],
  [`xxx`, `xxx`],
  [`xxx`, `xxx`],
  [`xxx`, `xxx`],
  [`xxx`, `xxx`],
  [`xxx`, `xxx`],
  [`xxx`, `xxx`],
  [`xxx`, `xxx`],
  [`xxx`, `xxx`],
  [`xxx`, `xxx`],
  [`xxx`, `xxx`],
  [`xxx`, `xxx`],
  [`xxx`, `xxx`],
  [`xxx`, `xxx`],
  [`xxx`, `xxx`],
  [`xxx`, `xxx`],
  [`xxx`, `xxx`],
  [`xxx`, `xxx`],
  [`xxx`, `xxx`],
  [`xxx`, `xxx`],
  [`xxx`, `xxx`],
  [`xxx`, `xxx`],
  [`xxx`, `xxx`],
  [`xxx`, `xxx`],
  [`xxx`, `xxx`],
  [`xxx`, `xxx`],
  [`xxx`, `xxx`],
  [`xxx`, `xxx`],
  [`xxx`, `xxx`],
  [`xxx`, `xxx`],
  [`xxx`, `xxx`],
  [`xxx`, `xxx`],
  [`xxx`, `xxx`],
  [`xxx`, `xxx`],
  [`xxx`, `xxx`],
  [`xxx`, `xxx`],
  [`xxx`, `xxx`],
  [`xxx`, `xxx`],
  [`xxx`, `xxx`],
  [`xxx`, `xxx`],
  [`xxx`, `xxx`],
  [`xxx`, `xxx`],
  [`xxx`, `xxx`],
  [`xxx`, `xxx`],
  [`xxx`, `xxx`],
  [`xxx`, `xxx`],
  [`xxx`, `xxx`],
  [`xxx`, `xxx`],
  [`xxx`, `xxx`],
  [`xxx`, `xxx`],
  [`xxx`, `xxx`],
  [`xxx`, `xxx`],
  [`xxx`, `xxx`],
  [`xxx`, `xxx`],
  [`xxx`, `xxx`],
  [`xxx`, `xxx`],
  [`xxx`, `xxx`],
  [`xxx`, `xxx`],
  [`xxx`, `xxx`],
  [`xxx`, `xxx`],
  [`xxx`, `xxx`],
  [`xxx`, `xxx`],
  [`xxx`, `xxx`],
  [`xxx`, `xxx`],
  [`xxx`, `xxx`],
  [`xxx`, `xxx`],
  [`xxx`, `xxx`],
  [`xxx`, `xxx`],
  [`xxx`, `xxx`],
  [`xxx`, `xxx`],
  [`xxx`, `xxx`],
  [`xxx`, `xxx`],
  [`xxx`, `xxx`],
  [`xxx`, `xxx`],
  [`xxx`, `xxx`],
  [`xxx`, `xxx`],
  [`xxx`, `xxx`],
  [`xxx`, `xxx`],
  [`xxx`, `xxx`],
  [`xxx`, `xxx`],
  [`xxx`, `xxx`],
  [`xxx`, `xxx`],
  [`xxx`, `xxx`],
  [`xxx`, `xxx`],
  [`xxx`, `xxx`],
  [`xxx`, `xxx`],
  [`xxx`, `xxx`],
  [`xxx`, `xxx`],
  [`xxx`, `xxx`],
  [`xxx`, `xxx`],
  [`xxx`, `xxx`],
  [`xxx`, `xxx`],
  [`xxx`, `xxx`],
  [`xxx`, `xxx`],
  [`xxx`, `xxx`],
  [`xxx`, `xxx`],
  [`xxx`, `xxx`],
  [`xxx`, `xxx`],
  [`xxx`, `xxx`],
  [`xxx`, `xxx`],
  [`xxx`, `xxx`],
  [`xxx`, `xxx`],
  [`xxx`, `xxx`],
  [`xxx`, `xxx`],
  [`xxx`, `xxx`],
  [`xxx`, `xxx`],
  [`xxx`, `xxx`],
  [`xxx`, `xxx`],
  [`xxx`, `xxx`],
  [`xxx`, `xxx`],
  [`xxx`, `xxx`],
  [`xxx`, `xxx`],
  [`xxx`, `xxx`],
  [`xxx`, `xxx`],
  [`xxx`, `xxx`],
  [`xxx`, `xxx`],
  [`xxx`, `xxx`],
  [`xxx`, `xxx`],
  [`xxx`, `xxx`],
  [`xxx`, `xxx`],
  [`xxx`, `xxx`],
  [`xxx`, `xxx`],
  [`xxx`, `xxx`],
  [`xxx`, `xxx`],
  [`xxx`, `xxx`],
  [`xxx`, `xxx`],
  [`xxx`, `xxx`],
  [`xxx`, `xxx`],
  [`xxx`, `xxx`],
  [`xxx`, `xxx`],
  [`xxx`, `xxx`],
  [`xxx`, `xxx`],
  [`xxx`, `xxx`],
  [`xxx`, `xxx`],
  [`xxx`, `xxx`],
  [`xxx`, `xxx`],
  [`xxx`, `xxx`],
  [`xxx`, `xxx`],
  [`xxx`, `xxx`],
  [`xxx`, `xxx`],
  [`xxx`, `xxx`],
  [`xxx`, `xxx`],
  [`xxx`, `xxx`],
  [`xxx`, `xxx`],
  [`xxx`, `xxx`],
  [`xxx`, `xxx`],
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

  question.innerHTML = `<b>${value[0]}</b>`;
  answer.innerText = value[1];

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
