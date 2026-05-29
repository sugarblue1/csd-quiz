'use strict';

const SHEETS_URL = 'https://script.google.com/macros/s/AKfycbxC2Vkg4PKJcHullR-ai1Yl-6X1c8kfI2OA0mk95piuyEy8WV-yPQ1ofhDKkkZKu33LzQ/exec';

// =============================================================

const questions = [
  {
    id: 1,
    category: "Fahrzeugordner*innen",
    question: "Wie sind Fahrzeugordner*innen mindestens einzuteilen?",
    options: [
      "1 volljähriger vorne, 1 volljähriger hinten",
      "2 volljährige Ordner*innen vorne, je 1 volljähriger beidseitig an jeder Achse",
      "3 volljährige Ordner*innen vorne, keine weiteren nötig",
      "Beliebig verteilt, Hauptsache alle volljährig"
    ],
    correct: 1
  },
  {
    id: 2,
    category: "Erkennbarkeit",
    question: "Woran müssen Fahrzeugordner*innen erkennbar sein?",
    options: [
      "Gelbe Sicherheitsweste",
      "Rote Armbinde mit \"CSD\"",
      "Weiße Armbinde mit der Aufschrift \"Ordner*in\" oder Warnwesten",
      "Ausweis des Berliner CSD e.V."
    ],
    correct: 2
  },
  {
    id: 3,
    category: "Alkohol- & Drogenverbot",
    question: "Für wen gilt das strikte Alkohol- und Drogenverbot während der gesamten Demonstration?",
    options: [
      "Nur für Fahrer*innen",
      "Für Wagenleitung und Fahrer*innen",
      "Für Wagenleitung, Ordner*innen und Fahrer*innen",
      "Für alle Personen auf dem Fahrzeug inkl. Gäste"
    ],
    correct: 2
  },
  {
    id: 4,
    category: "Verbot – Ausgabe vom Fahrzeug",
    question: "Was darf während der Demonstration NICHT von Fahrzeugen ausgegeben werden?",
    options: [
      "Nur alkoholische Getränke",
      "Getränke, Nahrungsmittel, Werbeartikel, Fächer, Sticker, Süßigkeiten etc.",
      "Nur kommerzielle Produkte – politisches Material ist erlaubt",
      "Nichts – jede Ausgabe ist verboten"
    ],
    correct: 1
  },
  {
    id: 5,
    category: "Ausnahmen",
    question: "Wann darf ausnahmsweise etwas von der Fahrzeugseite ausgegeben werden?",
    options: [
      "Wenn Fahrzeugordner*innen dabei assistieren",
      "Bei Schwächeanfällen oder Dehydrierung – schnelle Notversorgung",
      "Wenn eine Sondernutzungserlaubnis vorliegt",
      "Auf ausdrückliche Anweisung der Demoleitung"
    ],
    correct: 1
  },
  {
    id: 6,
    category: "Werbematerial",
    question: "Wo ist die Verteilung von Werbematerial beim CSD erlaubt?",
    options: [
      "Auf der gesamten Demostrecke mit CSD-Genehmigung",
      "Nur von der Fahrzeugseite, nicht zu Fuß",
      "Nur an eigens vom CSD eingerichteten Ständen mit Sondernutzungserlaubnis",
      "Überall, wenn es sich um politisches Informationsmaterial handelt"
    ],
    correct: 2
  },
  {
    id: 7,
    category: "Funkgeräte",
    question: "Wer erhält vom Berliner CSD e.V. ein Funkgerät leihweise?",
    options: [
      "Nur die Wagenleitung",
      "Wagenleitung und Fahrer*in",
      "Wagenleitung, Fahrer*in und alle Ordner*innen",
      "Nur die Fahrer*in"
    ],
    correct: 1
  },
  {
    id: 8,
    category: "Erreichbarkeit",
    question: "Was gilt zusätzlich zum Funkgerät für die Erreichbarkeit?",
    options: [
      "Ein zweites Funkgerät als Reserve mitzuführen",
      "Wagenleitung und Fahrer*in müssen zusätzlich per Handy erreichbar sein",
      "Ein fest installiertes Bordtelefon ist Pflicht",
      "Es gibt keine weitere Anforderung"
    ],
    correct: 1
  },
  {
    id: 9,
    category: "Notfall",
    question: "Was muss die Wagenleitung bei einem Sicherheitsproblem sofort tun?",
    options: [
      "Das Fahrzeug eigenständig anhalten und das Problem selbst lösen",
      "Direkt die Polizei über 110 rufen",
      "Umgehend die Demoleitung per Funk informieren oder die zentrale Koordinierungsstelle kontaktieren",
      "Abwarten bis man auf Polizei trifft"
    ],
    correct: 2
  },
  {
    id: 10,
    category: "Ersthelfer*in",
    question: "Was gilt für die Ersthelfer*in auf dem Fahrzeug?",
    options: [
      "Nur bei mehr als 20 Personen auf dem Fahrzeug Pflicht",
      "Muss erkennbar sein, von der Wagenleitung benannt werden, kann in Personalunion ausgeübt werden",
      "Muss ein*e zertifizierte*r Sanitäter*in von außen sein",
      "Übernimmt automatisch die Fahrer*in"
    ],
    correct: 1
  },
  {
    id: 11,
    category: "Sicherheitsseil",
    question: "Welchen Sicherheitsabstand muss das Seil um das Fahrzeug einhalten?",
    options: ["0,5 m", "1,0 m", "1,5 m", "2,0 m"],
    correct: 1
  },
  {
    id: 12,
    category: "Sicherheitsseil",
    question: "Welchen Mindestdurchmesser muss das Sicherheitsseil haben?",
    options: ["8 mm", "10 mm", "12 mm", "15 mm"],
    correct: 2
  },
  {
    id: 13,
    category: "Feuerlöscher",
    question: "Wie viele zusätzliche ABC-Feuerlöscher (6 kg) sind ab 15 m² Fahrzeugfläche vorgeschrieben?",
    options: [
      "Einer",
      "Zwei",
      "Drei",
      "Keiner – die gesetzlichen Pflichtlöscher genügen"
    ],
    correct: 1
  },
  {
    id: 14,
    category: "Brandschutz",
    question: "Welche Brandschutzklasse muss Dekorationsmaterial mindestens erfüllen?",
    options: [
      "A2 – nicht brennbar",
      "B1 – schwer entflammbar",
      "B2 – normal entflammbar reicht aus",
      "Es gibt keine Vorschrift für Dekorationsmaterial"
    ],
    correct: 1
  },
  {
    id: 15,
    category: "DEKRA-Abnahme",
    question: "Bei welchen Fahrzeugen ist eine technische Abnahme durch die DEKRA vorgeschrieben?",
    options: [
      "Nur bei Fahrzeugen über 12 Tonnen",
      "Bei allen Fahrzeugen mit Ladefläche (Personen), Busse mit offenem Oberdeck oder Stromaggregat",
      "Nur bei Fahrzeugen, die Musik abspielen",
      "Bei allen Fahrzeugen, unabhängig von Aufbauten"
    ],
    correct: 1
  },
  {
    id: 16,
    category: "DEKRA-Abnahme",
    question: "Was passiert, wenn ein Fahrzeug die DEKRA-Abnahme nicht besteht?",
    options: [
      "Es erhält eine 2-stündige Nachfrist zur Nachbesserung",
      "Es darf ohne Personen auf der Ladefläche mitfahren",
      "Es wird ausgeschlossen – die Teilnahmegebühr wird nicht erstattet",
      "Die Wagenleitung kann eine Ausnahme beantragen"
    ],
    correct: 2
  },
  {
    id: 17,
    category: "Abrüstplatz",
    question: "Wo müssen Aufbauten und Materialien nach der Demonstration abgebaut werden?",
    options: [
      "Direkt auf der Demonstrationsstrecke nach dem Einlauf",
      "Am zugewiesenen Abrüstplatz",
      "Am ursprünglichen Startplatz",
      "Es gibt keine Regelung – der Veranstalter übernimmt den Abbau"
    ],
    correct: 1
  },
  {
    id: 18,
    category: "Planen & Banner",
    question: "Was gilt für Planen und Banner nach der Demonstration?",
    options: [
      "Sie dürfen auf der Strecke zurückgelassen werden",
      "Sie können in CSD-Müllcontainer entsorgt werden",
      "Sie dürfen nicht vor Ort entsorgt werden und sind mitzunehmen",
      "Sie können an die Demoleitung übergeben werden"
    ],
    correct: 2
  },
  {
    id: 19,
    category: "Müllentsorgung",
    question: "Wie ist unvermeidbarer Restmüll während und nach der Demonstration zu behandeln?",
    options: [
      "Auf dem Fahrzeug lassen – der CSD kümmert sich",
      "In nächstgelegene öffentliche Mülleimer werfen",
      "Getrennt in eigenen Müllbehältern auf dem Fahrzeug sammeln und korrekt entsorgen",
      "Auf dem Boden hinterlassen – gilt als unvermeidlich"
    ],
    correct: 2
  },
  {
    id: 20,
    category: "Konfetti",
    question: "Was gilt für das Ausbringen von Konfetti auf der Demonstrationsstrecke?",
    options: [
      "Erlaubt, wenn es biologisch abbaubar ist",
      "Erlaubt bis zu 1 kg pro Fahrzeug",
      "Verboten – Konfetti und Dekorationsmaterial, das auf der Strecke zurückbleibt, ist nicht gestattet",
      "Nur mit Genehmigung der Demoleitung erlaubt"
    ],
    correct: 2
  }
];

const LABELS = ['A', 'B', 'C', 'D'];
const CONFETTI_COLORS = ['#E40078','#FFD700','#FF6B35','#00A550','#004DFF','#750787','#55CDFC','#F7A8B8'];

let currentIndex = 0;
let score = 0;
let answered = false;
let wrongAnswers = [];
let participantName = '';
let wagonNumber = '';
let wagonName = '';

// Screens
const startScreen    = document.getElementById('start-screen');
const registerScreen = document.getElementById('register-screen');
const quizScreen     = document.getElementById('quiz-screen');
const resultsScreen  = document.getElementById('results-screen');
const paradeStrip    = document.getElementById('parade-strip');

document.getElementById('start-btn').addEventListener('click', () => show(registerScreen));
document.getElementById('back-btn').addEventListener('click', () => show(startScreen));
document.getElementById('register-btn').addEventListener('click', handleRegister);
document.getElementById('next-btn').addEventListener('click', nextQuestion);
document.getElementById('restart-btn').addEventListener('click', restartQuiz);

function show(screen) {
  [startScreen, registerScreen, quizScreen, resultsScreen].forEach(s => s.classList.remove('active'));
  screen.classList.add('active');
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function handleRegister() {
  const nameInput   = document.getElementById('input-name');
  const numInput    = document.getElementById('input-truck-number');
  const nameWInput  = document.getElementById('input-truck-name');
  const errEl       = document.getElementById('reg-error');

  if (!nameInput.value.trim() || !numInput.value.trim() || !nameWInput.value.trim()) {
    errEl.style.display = 'block';
    return;
  }
  errEl.style.display = 'none';
  participantName = nameInput.value.trim();
  wagonNumber     = numInput.value.trim();
  wagonName       = nameWInput.value.trim();
  startQuiz();
}

function startQuiz() {
  currentIndex = 0;
  score = 0;
  answered = false;
  wrongAnswers = [];
  paradeStrip.style.display = 'block';
  updateParade();
  show(quizScreen);
  renderQuestion();
}

function renderQuestion() {
  answered = false;
  document.getElementById('next-btn').style.display = 'none';

  const q = questions[currentIndex];
  document.getElementById('q-current').textContent = currentIndex + 1;
  document.getElementById('q-total').textContent = questions.length;
  document.getElementById('score-live').textContent = score;
  document.getElementById('q-category').textContent = q.category;
  document.getElementById('q-text').textContent = q.question;

  const pct = (currentIndex / questions.length) * 100;
  document.getElementById('progress-bar').style.width = pct + '%';

  const fb = document.getElementById('feedback-box');
  fb.style.display = 'none';
  fb.className = 'feedback-box';

  const list = document.getElementById('options-list');
  list.innerHTML = '';
  q.options.forEach((opt, i) => {
    const btn = document.createElement('button');
    btn.className = 'option-btn';
    btn.innerHTML = `<span class="option-label">${LABELS[i]}</span><span>${opt}</span>`;
    btn.addEventListener('click', () => selectAnswer(i));
    list.appendChild(btn);
  });

  const card = document.getElementById('question-card');
  card.style.animation = 'none';
  card.offsetHeight;
  card.style.animation = '';
}

function selectAnswer(chosen) {
  if (answered) return;
  answered = true;

  const q = questions[currentIndex];
  const correct = q.correct;
  const isCorrect = chosen === correct;
  const buttons = document.querySelectorAll('.option-btn');

  buttons.forEach((btn, i) => {
    btn.disabled = true;
    if (i === correct) btn.classList.add('correct');
    else if (i === chosen) btn.classList.add('wrong');
    else btn.classList.add('dimmed');
  });

  const fb  = document.getElementById('feedback-box');
  const fi  = document.getElementById('feedback-inner');
  fb.style.display = 'block';

  const checkSvg = `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#00A550" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" style="vertical-align:middle;margin-right:6px"><polyline points="20 6 9 17 4 12"/></svg>`;
  const xSvg     = `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#E53935" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" style="vertical-align:middle;margin-right:6px"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>`;

  if (isCorrect) {
    score++;
    document.getElementById('score-live').textContent = score;
    fb.classList.add('fb-correct');
    const msgs = ['Richtig! Super gemacht.', 'Korrekt! Gut aufgepasst.', 'Ja, genau!', 'Richtig! Weiter so.'];
    fi.innerHTML = checkSvg + msgs[Math.floor(Math.random() * msgs.length)];
  } else {
    fb.classList.add('fb-wrong');
    fi.innerHTML = xSvg + `Leider falsch. Richtig: <strong>${LABELS[correct]}) ${q.options[correct]}</strong>`;
    wrongAnswers.push({ q: q.question, correct: q.options[correct], label: LABELS[correct] });
  }

  const nextBtn = document.getElementById('next-btn');
  nextBtn.style.display = 'block';
  nextBtn.textContent = currentIndex === questions.length - 1 ? 'Auswertung anzeigen' : 'Weiter';
  // Weiter-Button immer ins Sichtfeld scrollen (iOS Fix)
  setTimeout(() => nextBtn.scrollIntoView({ behavior: 'smooth', block: 'nearest' }), 120);
}

function nextQuestion() {
  currentIndex++;
  updateParade();
  if (currentIndex >= questions.length) {
    showResults();
  } else {
    renderQuestion();
  }
}

// ===== PARADE =====
function updateParade() {
  const L = -5 + (currentIndex / questions.length) * 87;

  setLeft('ptruck1',   L);
  // Gruppe 1: direkt hinter Truck 1, kein Lücke
  setLeft('pperson1',  L - 8);
  setLeft('pperson2',  L - 10.5);
  setLeft('pperson3',  L - 13);
  setLeft('pperson4',  L - 15.5);
  setLeft('pperson5',  L - 18);
  setLeft('pperson6',  L - 20.5);
  setLeft('pperson7',  L - 23);
  setLeft('pperson8',  L - 25.5);
  setLeft('ptruck2',   L - 32);
  // Gruppe 2: direkt hinter Truck 2
  setLeft('pperson9',  L - 52);
  setLeft('pperson10', L - 54.5);
  setLeft('pperson11', L - 57);
  setLeft('pperson12', L - 59.5);
  setLeft('pperson13', L - 62);
  setLeft('pperson14', L - 64.5);
  setLeft('pperson15', L - 67);
  setLeft('pperson16', L - 69.5);
  setLeft('ptruck3',   L - 76);
  // Gruppe 3: direkt hinter Truck 3
  setLeft('pperson17', L - 94);
  setLeft('pperson18', L - 96.5);
  setLeft('pperson19', L - 99);
  setLeft('pperson20', L - 101.5);
  setLeft('pperson21', L - 104);
  setLeft('pperson22', L - 106.5);
  setLeft('pperson23', L - 109);
  setLeft('pperson24', L - 111.5);
}

function setLeft(id, pct) {
  const el = document.getElementById(id);
  if (el) el.style.left = pct + '%';
}

// ===== RESULTS =====
async function showResults() {
  paradeStrip.style.display = 'none';
  show(resultsScreen);
  document.getElementById('progress-bar').style.width = '100%';
  document.getElementById('score-number').textContent = score;

  const pct = (score / questions.length) * 100;
  let title, msg;
  if (pct === 100) {
    title = 'Perfekt!';
    msg = 'Alle 20 Fragen richtig! Du bist vollständig vorbereitet. Wir sehen uns am 25. Juli!';
    launchConfetti();
  } else if (pct >= 80) {
    title = 'Sehr gut!';
    msg = 'Fast alle Fragen richtig. Schau dir die falsch beantworteten kurz an und du bist top!';
    launchConfetti();
  } else if (pct >= 60) {
    title = 'Gut gemacht!';
    msg = 'Solide Grundlage! Die markierten Fragen noch einmal lesen und du hast alles drauf.';
  } else if (pct >= 40) {
    title = 'Noch etwas Luft';
    msg = 'Einige Regeln sitzen noch nicht. Ein zweiter Versuch lohnt sich!';
  } else {
    title = 'Auf ins Lernen!';
    msg = 'Die Teilnahmebedingungen bitte noch einmal gründlich durchlesen. Du schaffst das!';
  }

  document.getElementById('result-title').textContent = title;
  document.getElementById('result-message').textContent = msg;

  const fullStars = Math.round((score / questions.length) * 5);
  const starsEl = document.getElementById('result-stars');
  starsEl.innerHTML = '';
  for (let i = 0; i < 5; i++) {
    const f = i < fullStars;
    starsEl.innerHTML += `<svg viewBox="0 0 24 24" fill="${f ? '#FFD700' : '#ddd'}" stroke="${f ? '#e6a800' : '#ccc'}" stroke-width="1.5"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>`;
  }

  const wrongSection = document.getElementById('wrong-section');
  const wrongList    = document.getElementById('wrong-list');
  wrongList.innerHTML = '';
  if (wrongAnswers.length > 0) {
    wrongSection.style.display = 'block';
    wrongAnswers.forEach(w => {
      wrongList.innerHTML += `<div class="wrong-item">
        <p class="wrong-q">${w.q}</p>
        <p class="wrong-answer"><span class="wrong-answer-label">Richtig</span>${w.label}) ${w.correct}</p>
      </div>`;
    });
  } else {
    wrongSection.style.display = 'none';
  }

  await saveResult();
}

async function saveResult() {
  const statusEl = document.getElementById('save-status');
  try {
    const params = new URLSearchParams({
      name:         participantName,
      wagon_number: wagonNumber,
      wagon_name:   wagonName,
      score:        score,
      wrong:        wrongAnswers.length
    });
    await fetch(SHEETS_URL + '?' + params.toString(), { mode: 'no-cors' });
    statusEl.textContent = 'Ergebnis gespeichert.';
    statusEl.className = 'save-status';
  } catch (e) {
    statusEl.textContent = 'Speichern fehlgeschlagen – bitte Screenshot machen.';
    statusEl.className = 'save-status error';
  }
}

function restartQuiz() {
  removeConfetti();
  // Formular-Felder leeren für neuen Durchlauf
  document.getElementById('input-name').value = '';
  document.getElementById('input-truck-number').value = '';
  document.getElementById('input-truck-name').value = '';
  participantName = '';
  wagonNumber = '';
  wagonName = '';
  show(registerScreen);
}

// ===== CONFETTI =====
function launchConfetti() {
  removeConfetti();
  const wrap = document.createElement('div');
  wrap.className = 'confetti-wrap';
  wrap.id = 'confetti-wrap';
  document.body.appendChild(wrap);
  for (let i = 0; i < 70; i++) {
    const p = document.createElement('div');
    p.className = 'confetti-piece';
    p.style.left = Math.random() * 100 + 'vw';
    p.style.background = CONFETTI_COLORS[Math.floor(Math.random() * CONFETTI_COLORS.length)];
    p.style.width  = (6 + Math.random() * 8) + 'px';
    p.style.height = (8 + Math.random() * 10) + 'px';
    p.style.borderRadius = Math.random() > 0.5 ? '50%' : '2px';
    const dur   = 2.5 + Math.random() * 2.5;
    const delay = Math.random() * 1.5;
    p.style.animation = `confettiFall ${dur}s ${delay}s linear forwards`;
    wrap.appendChild(p);
  }
  setTimeout(removeConfetti, 6000);
}

function removeConfetti() {
  const old = document.getElementById('confetti-wrap');
  if (old) old.remove();
}
