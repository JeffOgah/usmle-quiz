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
  [`number needed to treat.`, `1/ARR`],
  [`Psych question. Gave a scenario with a person who is schizophrenic
  and now has some rigidity.`, `benztropine`],
  [`Some lady just gave birth to a kid. Has been having vaginal bleeding
  since birth and has been stuffing her vagina with towels and stuff. Now she is
  sick fever skin rash or something.`, `Toxic Shock Syndrome - staph aureus (fever, rash, shock)
  `],
  [`Patient is woken up in the middle of the night with pain in the eye...
  diagnosis?`, `Acute angle closure glaucoma or uveitis`],
  [`Picture of blood cells. I saw rouloux and thought of multiple myeloma.
  What do u do?`, `Bone aspirate is most accurate \n 
  (>10% plasma cells in BM, M protein on urine/serum electrophoresis, lytic
  lesions)`],
  [`Some lady had renal transplant. How to protect the kidney?`, `allopurinol if they are trying to prevent tumor lysis syndrome while on
  chemotherapy.`],
  [`Baby has misaligned gluteal folds.`, `congenital hip dysplasia`],
  [`Bone growth from femur? What do u do?`, `excise – could be spur or cancer`],
  [`Old lady wants to prevent fractures. Has a hx of DVT. She takes Ca and
  Vit D supplements. What else can she do?`, `Don’t choose estrogen bc that can cause DVT. \n 
  I chose aldronate.`],
  [`Some guy has hypertension. U hear a renal artery bruit. What do u see
  on biopsy?`, `atherosclerosis from aorta to renal artery`],
  [`Picture of a really bad skin infection + nikolksky’s sign? What to do?`, `transfer to burn unit`],
  [`GI q – woman with nonbilious vomiting, multiple air fluid levels, what’s
  the next step?`, `SBO – hyperactive bowel sounds \n 
  Ileus – no bowel sounds`],
  [`Tx of MALT`, `Treat H. Pylori`],
  [`Lower limb cast, patient feels pain in leg still, cannot flex toe, what is
  the next step?`, `checking pressure compartments`],
  [`Posterior knee dislocation, next step?`, `PCL tear – repair the tear`],
  [`Meningitis patient, know all steps of tx?`, `Antibiotics followed by LP (do a CT if signs of increased pressure) \n 
  Empiric Antibiotics – Vancomycin, Ceftriaxone \n 
  Steroids – if thousands of neutrophils \n 
  Add Ampicillin if immunocompromised for Listeria`],
  [`Dyspnea Mechanism of CHF – (look at q34 NBME IM)`, `increased or decreased pressure, aortic, ventricles`],
  [`HCC image`, `increased AFP`],
  [`Breast Tumors - G2P2 with thin milky discharge and lump on one
  breast`, `diff options; ductal papilloma \n 
  Prolactinoma will cause milky discharge and possible proliferation of the
  ducts causing a lump?????????????`],
  [`Older women presenting with signs of menopause for about 9 months.`, `Discuss HRT`],
  [`Pregnant woman described as having carpal tunnel`, `wrist splints`],
  [`Diabetic foot with large ulcer – know steps of tx`, `debridement and glucose control \n 
  • Peripheral Neuropathy- inability to sense minor foot trauma and foot pain due to high pressure on the skin \n 
  • Microvascular insufficiency- poor perfusion due to microvascular insufficiency also promotes ulcer formation and predisposes to poor wound
  healing. \n 
  • Relative immunosuppression- predisposes to infections of these wounds,
  which may not only slow healing but may also predispose to osteomyelitis \n 
  • COMP may say something like: Pressure gradient due to sensory changes`],
  [`Described patient with Marfans`, `MVP is most common, can also have AR`],
  [`Description of patient with Klinefelters`, `xxexample of aneuploidy (XXY)x`],
  [`Description of patient with Fragile X syndrome`, `example of trinucleotide repeat CGG`],
  [`Young boy with lump under breast, tender to touch`, `is that normal puberty?`],
  [`Know that MDD and OCD are treated with SSRIs`, ``],
  [`Know what side effects may occur if MDD patient is switched from
  SSRI to bupoprion; and what indications there are for that switch; know what would cause seizures`, `The switch is done if the patient is a smoker, is getting too much weight gain from SSRI or if they are having sexual dysfunction. \n 
  Buproprion it however lowers seizure threshold so must be avoided in bulimic and anorexic patients due to pre-existing electrolyte imbalances.`],
  [`Patient with prior history of AAA comes in with chest or abdominal
  pain, know next step of action?`, `emergency op
  `],
  [`Young patient with parents who smoke, constantly coughing and
  shrugging his shoulders`, `chronic exposure to cigarette smoke`],
  [`2 week infant with high fever for 40 hours – know next step of
  treatment?`, `NSAIDS \n 
  acetaminophen used for fever`],
  [`Marcus Gunn pupil`, `afferent pupillary defect due to optic nerve damage or severe retinal injury \n 
  tested by swinging flash light test \n 
  Seen in Multiple Sclerosis, Optic Neuritis`],
  [`a “curtain falling over the eye”`, `retinal detachment and amauroxis fugax (both are differentials)`],
  [`Barium swallow. Hiatal hernia (dysphagia for solids & liquids) with
  weight loss`, `A. Schatzkis \n 
  B. Achalasia \n 
  C. Esophageal hernia`],
  [`Bed-ridden patient and causes of foul breath`, `anaerobic organisms from aspiration`],
  [`TEN question- tx was?`, `Prednisone`],
  [`Worst cause of RF`, `HTN \n 
  Hb A1C?`],
  [`Chronic Nepthropathy due to?`, `HTN or donor? \n 
  most common cause is HTN \n 
  Worst cause is Diabetes`],
  [`S pneumo treatment – macrolides. Mechanism of action?`, `Blocks 50S – blocking translocation \n 
  macroslides, it slides with the bid number`],
  [`Bronchiectasis- has dandelion like picture- what's the agent?
  `, `Aspergillus`],
  [`Gout`, `long term decrease alcohol and meat intake`],
  [`Patient ate chicken got sick`, `salmonella-fecal leukocyte test \n  \n 
  Salmonella gastroenteritis is usually a self-limiting disease. Fluid and electrolyte replacement may be indicated in severe cases. Because
  antibiotics do not appear to shorten the duration of symptoms and may
  actually prolong the duration of convalescent carriage, they are not
  routinely used to treat uncomplicated nontyphoidal Salmonella
  gastroenteritis. Current recommendations are that antibiotics be
  reserved for patients with severe disease or patients who are at a high risk for invasive disease.
  `],
  [`Pneumocystis`, `TMP-SMX \n 
  if toxicity from TMPSMX give Clindamycin and Primquine or
  Pentamidine \n 
  Atovoquone for mild PCP \n 
  Add Steriods for severe PCP`],
  [`Latent phase of labor`, `Stages of Labour \n
  First \n
  \t Latent- 0-6cm cervical dilation  \n
  \t Active- 6-10cm (complete) cervical dilation \n
  Second- 10cm (complete) cervical dilation to delivery \n
  Third- delivery of baby to delivery of placenta \n
  A prolonged latent phase can be defined as ≥20 hours for the nullipara and ≥14 hours
  for the multiparous woman.`],
  [`Lactate ringer or normal saline for burn patient?`, `Always ringer (includes saline + dextrose) unless it isn't a choice \n 
  NS may be inferior to LR in resuscitation due to its vasodilator effects
  and the risks of metabolic acidosis and hyperkalemia.`],
  [`ADHD treatment`, `behavioral therapy first then Methylphenidate`],
  [`NuvaRing (Vaginal Ring) - changes with weight gain`, `need to recheck with doctor for position every 8 weeks`],
  [`Meckels`, `technetium 99 scan`],
  [`Potassium levels`, `low, treat with however much potassium you need`],
  [`Colon ca screening age- patient had one brother who had
  CCancer when to start screening?`, `40 years old or 10 years prior to age when brother was diagnosed.`],
  [`DIC`, `FFP if platelets are below 50,000 but is asymptomatic than below 10,000`],
  [` Risk factor cancer in lung pleura`, `mesothelioma in lung pleura – asbestosis (bronchogenic carcinoma is more
    common)  \n 
    or smoking?`],
  [`Baby born 4 ounces, respiratory failure. What should u do?`, `surfactant`],
  [`Guy with Polycythemia. What can prevent it?`, `
  Primary polycythemia (polycythemia vera) can't be prevented. \n 
  However, you can prevent secondary polycythemia by avoiding things that deprive your body of oxygen for long periods. For example, you can avoid mountain climbing, living at a high altitude, or smoking`],
  [`Hodgkin's Lymphoma`, `EBV \n 

  Hodgkin’s is generalized LAD. \n 
  non Hodgkins presents like squamous cell carcinoma (uw)`],
  [`PPV rises with increase in prevalence, NPV falls. no change in SN & SP`, ``],
  [`Klinefelter`, `Hypogonadism`],
  [`Twins with one sac and no membrane between. Increased risk of:
  `, `cord entanglement`],
  [`xxx`, `xxx`],
  [`xxx`, `xxx`],
  [`xxx`, `xxx`],
  [`xxx`, `xxx`],
  [`xxx`, `xxx`],
  [`xxx`, `xxx`],
  [`xxx`, `xxx`],
  [`xxx`, `xxx`],
  [`xxx`, `xxx`],
  [`xxx`, `xxx`],
  [`xxx`, `xxx`],
  [`xxx`, `xxx`],
  [`xxx`, `xxx`],
  [`xxx`, `xxx`],
  [`xxx`, `xxx`],
  [`xxx`, `xxx`],
  [`xxx`, `xxx`],
  [`xxx`, `xxx`],
  [`xxx`, `xxx`],
  [`xxx`, `xxx`],
  [`xxx`, `xxx`],
  [`xxx`, `xxx`],
  [`xxx`, `xxx`],
  [`xxx`, `xxx`],
  [`xxx`, `xxx`],
  [`xxx`, `xxx`],
  [`xxx`, `xxx`],
  [`xxx`, `xxx`],
  [`xxx`, `xxx`],
  [`xxx`, `xxx`],
  [`xxx`, `xxx`],
  [`xxx`, `xxx`],
  [`xxx`, `xxx`],
  [`xxx`, `xxx`],
  [`xxx`, `xxx`],
  [`xxx`, `xxx`],
  [`xxx`, `xxx`],
  [`xxx`, `xxx`],
  [`xxx`, `xxx`],
  [`xxx`, `xxx`],
  [`xxx`, `xxx`],
  [`xxx`, `xxx`],
  [`xxx`, `xxx`],
  [`xxx`, `xxx`],
  [`xxx`, `xxx`],
  [`xxx`, `xxx`],
  [`xxx`, `xxx`],
  [`xxx`, `xxx`],
  [`xxx`, `xxx`],
  [`xxx`, `xxx`],
  [`xxx`, `xxx`],
  [`xxx`, `xxx`],
  [`xxx`, `xxx`],
  [`xxx`, `xxx`],
  [`xxx`, `xxx`],
  [`xxx`, `xxx`],
  [`xxx`, `xxx`],
  [`xxx`, `xxx`],
  [`xxx`, `xxx`],
  [`xxx`, `xxx`],
  [`xxx`, `xxx`],
  [`xxx`, `xxx`],
  [`xxx`, `xxx`],
  [`xxx`, `xxx`],
  [`xxx`, `xxx`],
  [`xxx`, `xxx`],
  [`xxx`, `xxx`],
  [`xxx`, `xxx`],
  [`xxx`, `xxx`],
  [`xxx`, `xxx`],
  [`xxx`, `xxx`],
  [`xxx`, `xxx`],
  [`xxx`, `xxx`],
  [`xxx`, `xxx`],
  [`xxx`, `xxx`],
  [`xxx`, `xxx`],
  [`xxx`, `xxx`],
  [`xxx`, `xxx`],
  [`xxx`, `xxx`],
  [`xxx`, `xxx`],
  [`xxx`, `xxx`],
  [`xxx`, `xxx`],
  [`xxx`, `xxx`],
  [`xxx`, `xxx`],
  [`xxx`, `xxx`],
  [`xxx`, `xxx`],
  [`xxx`, `xxx`],
  [`xxx`, `xxx`],
  [`xxx`, `xxx`],
  [`xxx`, `xxx`],
  [`xxx`, `xxx`],
  [`xxx`, `xxx`],
  [`xxx`, `xxx`],
  [`xxx`, `xxx`],
  [`xxx`, `xxx`],
  [`xxx`, `xxx`],
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
