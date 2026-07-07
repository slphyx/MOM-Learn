const classes = [
  {
    id: 'ring',
    name: 'Ring stage',
    short: 'Early intraerythrocytic form',
    note: 'Look for a delicate ring shape and a small chromatin dot.',
    color: 'Ring',
  },
  {
    id: 'trophozoite',
    name: 'Trophozoite stage',
    short: 'Growing parasite with more cytoplasm',
    note: 'Usually larger and more irregular than a ring; pigment becomes more visible.',
    color: 'Trophozoite',
  },
  {
    id: 'schizont',
    name: 'Schizont stage',
    short: 'Mature segmented parasite',
    note: 'Often shows multiple merozoites arranged inside the infected red cell.',
    color: 'Schizont',
  },
  {
    id: 'artesunate',
    name: 'Artesunate-exposed',
    short: 'Condensed / pyknotic morphology',
    note: 'Typical clue is a compact, damaged-looking parasite with disrupted pigment.',
    color: 'Artesunate',
  },
  {
    id: 'quinine',
    name: 'Quinine-exposed',
    short: 'Vacuolised and altered morphology',
    note: 'Often shows cytoplasmic vacuolisation and pigment clumping.',
    color: 'Quinine',
  },
];

const atlasItems = [
  { cls: 'ring', title: 'Typical ring', vibe: 'Clean morphology' },
  { cls: 'ring', title: 'Small ring', vibe: 'Early infection' },
  { cls: 'trophozoite', title: 'Growing trophozoite', vibe: 'More cytoplasm' },
  { cls: 'trophozoite', title: 'Pigmented trophozoite', vibe: 'Distinct pigment' },
  { cls: 'schizont', title: 'Segmenting schizont', vibe: 'Multiple merozoites' },
  { cls: 'schizont', title: 'Late schizont', vibe: 'Mature form' },
  { cls: 'artesunate', title: 'Condensed exposure', vibe: 'Pyknotic form' },
  { cls: 'artesunate', title: 'Damaged parasite', vibe: 'Drug effect' },
  { cls: 'quinine', title: 'Vacuolised form', vibe: 'Cytoplasmic vacuoles' },
  { cls: 'quinine', title: 'Pigment clumping', vibe: 'Altered morphology' },
  { cls: 'ring', title: 'Appliqué ring', vibe: 'Peripheral ring' },
  { cls: 'trophozoite', title: 'Irregular trophozoite', vibe: 'Harder example' },
];

const quizImageData = {
  ring: 'data:image/svg+xml;utf8,' + encodeURIComponent(`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 675">
      <defs>
        <linearGradient id="g" x1="0" x2="1" y1="0" y2="1">
          <stop offset="0" stop-color="#79c7ff" stop-opacity="0.35"/>
          <stop offset="1" stop-color="#8dffbf" stop-opacity="0.12"/>
        </linearGradient>
      </defs>
      <rect width="1200" height="675" fill="#07111f"/>
      <rect x="0" y="0" width="1200" height="675" fill="url(#g)"/>
      <circle cx="520" cy="330" r="165" fill="none" stroke="#eaf4ff" stroke-width="16" opacity="0.9"/>
      <circle cx="570" cy="330" r="40" fill="#eaf4ff" opacity="0.95"/>
      <circle cx="925" cy="175" r="10" fill="#eaf4ff" opacity="0.25"/>
      <circle cx="210" cy="470" r="12" fill="#eaf4ff" opacity="0.25"/>
    </svg>`),
  trophozoite: 'data:image/svg+xml;utf8,' + encodeURIComponent(`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 675">
      <rect width="1200" height="675" fill="#07111f"/>
      <ellipse cx="610" cy="340" rx="265" ry="205" fill="#0f1a2d" stroke="#d9e9ff" stroke-width="14"/>
      <circle cx="540" cy="315" r="38" fill="#d9e9ff"/>
      <circle cx="640" cy="275" r="18" fill="#f0d07a"/>
      <circle cx="700" cy="380" r="14" fill="#f0d07a"/>
      <circle cx="750" cy="300" r="20" fill="#cfd8e8" opacity="0.7"/>
    </svg>`),
  schizont: 'data:image/svg+xml;utf8,' + encodeURIComponent(`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 675">
      <rect width="1200" height="675" fill="#07111f"/>
      <ellipse cx="600" cy="340" rx="290" ry="210" fill="#101827" stroke="#d9e9ff" stroke-width="14"/>
      ${Array.from({length: 12}).map((_,i)=>{
        const x = 470 + (i%4)*70;
        const y = 250 + Math.floor(i/4)*70;
        return `<circle cx="${x}" cy="${y}" r="18" fill="#eaf4ff" opacity="0.92"/>`;
      }).join('')}
      <circle cx="600" cy="340" r="26" fill="#f0d07a"/>
    </svg>`),
  artesunate: 'data:image/svg+xml;utf8,' + encodeURIComponent(`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 675">
      <rect width="1200" height="675" fill="#07111f"/>
      <ellipse cx="600" cy="335" rx="200" ry="160" fill="#0f1a2d" stroke="#d9e9ff" stroke-width="14"/>
      <ellipse cx="585" cy="330" rx="72" ry="58" fill="#d9e9ff" opacity="0.95"/>
      <ellipse cx="625" cy="340" rx="24" ry="20" fill="#07111f" opacity="0.9"/>
      <circle cx="660" cy="305" r="14" fill="#f0d07a" opacity="0.65"/>
    </svg>`),
  quinine: 'data:image/svg+xml;utf8,' + encodeURIComponent(`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 675">
      <rect width="1200" height="675" fill="#07111f"/>
      <ellipse cx="600" cy="340" rx="270" ry="205" fill="#11192a" stroke="#d9e9ff" stroke-width="14"/>
      <ellipse cx="565" cy="325" rx="145" ry="112" fill="none" stroke="#eaf4ff" stroke-width="12" opacity="0.9"/>
      <circle cx="520" cy="315" r="15" fill="#f0d07a"/>
      <circle cx="640" cy="385" r="15" fill="#f0d07a"/>
      <circle cx="700" cy="265" r="12" fill="#f0d07a"/>
    </svg>`),
};

let activeFilter = 'all';
let selectedOption = null;
let currentQuestion = 0;
const totalQuestions = 10;
let score = 0;
let attempts = Number(localStorage.getItem('mom-learn-attempts') || 0);
let correct = Number(localStorage.getItem('mom-learn-correct') || 0);
let bestStreak = Number(localStorage.getItem('mom-learn-best-streak') || 0);
let streak = Number(localStorage.getItem('mom-learn-current-streak') || 0);
let answered = false;

const views = [...document.querySelectorAll('.view')];
const navBtns = [...document.querySelectorAll('.nav-btn')];
const atlasGrid = document.getElementById('atlas-grid');
const filters = document.getElementById('filters');
const quizImage = document.getElementById('quiz-image');
const quizTitle = document.getElementById('quiz-title');
const quizHint = document.getElementById('quiz-hint');
const quizOptions = document.getElementById('quiz-options');
const quizResult = document.getElementById('quiz-result');
const quizProgress = document.getElementById('quiz-progress');
const quizScore = document.getElementById('quiz-score');
const attemptsEl = document.getElementById('attempts');
const accuracyEl = document.getElementById('accuracy');
const bestStreakEl = document.getElementById('best-streak');

function showView(name) {
  views.forEach((view) => view.classList.toggle('active', view.id === name));
  navBtns.forEach((btn) => btn.classList.toggle('active', btn.dataset.view === name));
}

function setProgressCard() {
  attemptsEl.textContent = attempts;
  const acc = attempts ? Math.round((correct / attempts) * 100) : 0;
  accuracyEl.textContent = `${acc}%`;
  bestStreakEl.textContent = bestStreak;
  quizScore.textContent = `Score ${score}`;
}

function makeAtlasCard(item) {
  const cls = classes.find((c) => c.id === item.cls);
  return `
    <article class="card sample-card">
      <div class="sample-image">${cls.name.split(' ')[0]}</div>
      <span class="tag">${item.vibe}</span>
      <h3>${item.title}</h3>
      <p class="muted"><strong>${cls.name}.</strong> ${cls.note}</p>
    </article>
  `;
}

function renderAtlas() {
  const filtered = activeFilter === 'all' ? atlasItems : atlasItems.filter((item) => item.cls === activeFilter);
  atlasGrid.innerHTML = filtered.map(makeAtlasCard).join('');
}

function renderFilters() {
  const buttons = [
    { id: 'all', label: 'All' },
    ...classes.map((c) => ({ id: c.id, label: c.name })),
  ];
  filters.innerHTML = buttons.map((btn) => `<button class="filter-btn ${btn.id === activeFilter ? 'active' : ''}" data-filter="${btn.id}">${btn.label}</button>`).join('');
  filters.querySelectorAll('button').forEach((btn) => btn.addEventListener('click', () => {
    activeFilter = btn.dataset.filter;
    renderFilters();
    renderAtlas();
  }));
}

function nextQuestionData() {
  const answer = classes[Math.floor(Math.random() * classes.length)];
  const distractors = classes.filter((c) => c.id !== answer.id).sort(() => Math.random() - 0.5).slice(0, 3);
  return { answer, options: [answer, ...distractors].sort(() => Math.random() - 0.5) };
}

let current = nextQuestionData();

function renderQuiz() {
  const names = ['ring', 'trophozoite', 'schizont', 'artesunate', 'quinine'];
  quizImage.src = quizImageData[current.answer.id];
  quizImage.alt = current.answer.name;
  quizTitle.textContent = 'Which class best matches this image?';
  quizHint.textContent = 'Choose the best label, then submit to see feedback.';
  quizProgress.textContent = `Question ${currentQuestion + 1} of ${totalQuestions}`;
  quizOptions.innerHTML = current.options.map((opt) => `
    <button class="option" data-option="${opt.id}">
      <strong>${opt.name}</strong><br /><span class="muted">${opt.short}</span>
    </button>
  `).join('');
  selectedOption = null;
  answered = false;
  quizResult.classList.add('hidden');
  quizResult.textContent = '';
  quizOptions.querySelectorAll('.option').forEach((btn) => {
    btn.addEventListener('click', () => {
      quizOptions.querySelectorAll('.option').forEach((b) => b.classList.remove('selected'));
      btn.classList.add('selected');
      selectedOption = btn.dataset.option;
    });
  });
}

function submitAnswer() {
  if (answered || !selectedOption) return;
  attempts += 1;
  localStorage.setItem('mom-learn-attempts', String(attempts));
  const correctAnswer = current.answer.id;
  const isCorrect = selectedOption === correctAnswer;
  if (isCorrect) {
    score += 1;
    correct += 1;
    streak += 1;
    bestStreak = Math.max(bestStreak, streak);
    localStorage.setItem('mom-learn-correct', String(correct));
    localStorage.setItem('mom-learn-current-streak', String(streak));
    localStorage.setItem('mom-learn-best-streak', String(bestStreak));
  } else {
    streak = 0;
    localStorage.setItem('mom-learn-current-streak', String(streak));
  }

  quizOptions.querySelectorAll('.option').forEach((btn) => {
    if (btn.dataset.option === correctAnswer) btn.classList.add('correct');
    if (btn.dataset.option === selectedOption && !isCorrect) btn.classList.add('wrong');
  });

  quizResult.classList.remove('hidden');
  quizResult.className = `result ${isCorrect ? 'good' : 'bad'}`;
  quizResult.innerHTML = isCorrect
    ? `<strong>Correct.</strong> ${current.answer.note}`
    : `<strong>Not quite.</strong> The correct answer is <strong>${current.answer.name}</strong>. ${current.answer.note}`;
  answered = true;
  setProgressCard();
}

function nextQuiz() {
  currentQuestion = (currentQuestion + 1) % totalQuestions;
  current = nextQuestionData();
  renderQuiz();
  quizScore.textContent = `Score ${score}`;
}

function resetProgress() {
  attempts = 0;
  correct = 0;
  score = 0;
  streak = 0;
  bestStreak = 0;
  localStorage.removeItem('mom-learn-attempts');
  localStorage.removeItem('mom-learn-correct');
  localStorage.removeItem('mom-learn-current-streak');
  localStorage.removeItem('mom-learn-best-streak');
  setProgressCard();
}

navBtns.forEach((btn) => btn.addEventListener('click', () => showView(btn.dataset.view)));
document.querySelectorAll('[data-goto]').forEach((btn) => btn.addEventListener('click', () => showView(btn.dataset.goto)));
document.getElementById('submit-answer').addEventListener('click', submitAnswer);
document.getElementById('next-question').addEventListener('click', nextQuiz);
document.getElementById('reset-progress').addEventListener('click', resetProgress);

renderFilters();
renderAtlas();
renderQuiz();
setProgressCard();
showView('home');
