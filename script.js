// ═══════════════════════════════════════════════════════════════════════════════
// WORDMASTER - COMPLETE ENGLISH GRAMMAR LEARNING PLATFORM
// JavaScript File - v4 con 2 secciones nuevas
// ═══════════════════════════════════════════════════════════════════════════════

const C = {
bg: "#06060e",
card: "#0b0b1a",
card2: "#0e0e20",
border: "#14142a",
gold: "#f0c060",
green: "#4ade80",
blue: "#818cf8",
purple: "#c084fc",
cyan: "#22d3ee",
teal: "#5eead4",
orange: "#fb923c",
red: "#f87171",
pink: "#f472b6",
yellow: "#facc15",
text: "#e8e2d8",
muted: "#4a5568",
vdim: "#12121e",
};

// WORDS DATA - DICCIONARIO CON TODAS LAS PALABRAS
const WORDS_DATA = [
{ word: "intend", cat: "regular", spanish: "tener la intención de", def: "To have a plan or purpose in mind.", forms: { base: "intend", past: "intended", pp: "intended", ing: "intending", s: "intends" } },
{ word: "compose", cat: "regular", spanish: "componer / redactar", def: "To write or create.", forms: { base: "compose", past: "composed", pp: "composed", ing: "composing", s: "composes" } },
{ word: "take off", cat: "phrasal verb", spanish: "despegar / quitarse", def: "To leave the ground; to remove.", forms: { base: "take off", past: "took off", pp: "taken off", ing: "taking off", s: "takes off" } },
{ word: "fear", cat: "regular", spanish: "temer / miedo", def: "To be afraid of something.", forms: { base: "fear", past: "feared", pp: "feared", ing: "fearing", s: "fears" } },
{ word: "overcome", cat: "irregular", spanish: "superar / vencer", def: "To succeed in dealing with a problem.", forms: { base: "overcome", past: "overcame", pp: "overcome", ing: "overcoming", s: "overcomes" } },
{ word: "exhaust", cat: "regular", spanish: "agotar / extenuarse", def: "To make someone very tired.", forms: { base: "exhaust", past: "exhausted", pp: "exhausted", ing: "exhausting", s: "exhausts" } },
{ word: "capable", cat: "adjective", spanish: "capaz", def: "Having the ability or qualities.", forms: { base: "capable", past: "—", pp: "—", ing: "—", s: "—" } },
{ word: "regulate", cat: "regular", spanish: "regular / regulación", def: "To control or keep something at a level.", forms: { base: "regulate", past: "regulated", pp: "regulated", ing: "regulating", s: "regulates" } },
{ word: "implement", cat: "regular", spanish: "implementar / aplicar", def: "To put a plan into effect.", forms: { base: "implement", past: "implemented", pp: "implemented", ing: "implementing", s: "implements" } },
{ word: "hire", cat: "regular", spanish: "contratar / alquilar", def: "To employ someone; to rent.", forms: { base: "hire", past: "hired", pp: "hired", ing: "hiring", s: "hires" } },
{ word: "disclose", cat: "regular", spanish: "divulgar / revelar", def: "To make information known publicly.", forms: { base: "disclose", past: "disclosed", pp: "disclosed", ing: "disclosing", s: "discloses" } },
{ word: "emerge", cat: "regular", spanish: "surgir / emerger", def: "To come out or appear from somewhere.", forms: { base: "emerge", past: "emerged", pp: "emerged", ing: "emerging", s: "emerges" } },
{ word: "evolve", cat: "regular", spanish: "evolucionar", def: "To develop gradually into something complex.", forms: { base: "evolve", past: "evolved", pp: "evolved", ing: "evolving", s: "evolves" } },
{ word: "acquire", cat: "regular", spanish: "adquirir / obtener", def: "To get or obtain something.", forms: { base: "acquire", past: "acquired", pp: "acquired", ing: "acquiring", s: "acquires" } },
{ word: "retain", cat: "regular", spanish: "retener / conservar", def: "To keep or continue to have.", forms: { base: "retain", past: "retained", pp: "retained", ing: "retaining", s: "retains" } },
{ word: "enroll", cat: "regular", spanish: "inscribirse / matricularse", def: "To officially register.", forms: { base: "enroll", past: "enrolled", pp: "enrolled", ing: "enrolling", s: "enrolls" } },
{ word: "manage", cat: "regular", spanish: "gestionar / lograr", def: "To be in charge of; to succeed.", forms: { base: "manage", past: "managed", pp: "managed", ing: "managing", s: "manages" } },
{ word: "provide", cat: "regular", spanish: "proporcionar / proveer", def: "To give or supply something needed.", forms: { base: "provide", past: "provided", pp: "provided", ing: "providing", s: "provides" } },
{ word: "encourage", cat: "regular", spanish: "animar / alentar", def: "To give support or confidence.", forms: { base: "encourage", past: "encouraged", pp: "encouraged", ing: "encouraging", s: "encourages" } },
{ word: "conform", cat: "regular", spanish: "conformarse / cumplir", def: "To comply with standards, rules.", forms: { base: "conform", past: "conformed", pp: "conformed", ing: "conforming", s: "conforms" } },
{ word: "boycott", cat: "regular", spanish: "boicotear", def: "To withdraw as a form of protest.", forms: { base: "boycott", past: "boycotted", pp: "boycotted", ing: "boycotting", s: "boycotts" } },
{ word: "prejudice", cat: "regular", spanish: "prejuicio / predisponer", def: "To cause prejudice against.", forms: { base: "prejudice", past: "prejudiced", pp: "prejudiced", ing: "prejudicing", s: "prejudices" } },
{ word: "resemble", cat: "regular", spanish: "parecerse a / asemejarse", def: "To look like or be similar to.", forms: { base: "resemble", past: "resembled", pp: "resembled", ing: "resembling", s: "resembles" } },
{ word: "speak", cat: "irregular", spanish: "hablar", def: "To say words aloud; communicate.", forms: { base: "speak", past: "spoke", pp: "spoken", ing: "speaking", s: "speaks" } },
{ word: "work", cat: "regular", spanish: "trabajar", def: "To do a job or task.", forms: { base: "work", past: "worked", pp: "worked", ing: "working", s: "works" } },
{ word: "learn", cat: "regular", spanish: "aprender", def: "To gain knowledge or skills.", forms: { base: "learn", past: "learned", pp: "learned", ing: "learning", s: "learns" } },
{ word: "build", cat: "irregular", spanish: "construir", def: "To create or construct.", forms: { base: "build", past: "built", pp: "built", ing: "building", s: "builds" } },
{ word: "grow", cat: "irregular", spanish: "crecer", def: "To increase in size or importance.", forms: { base: "grow", past: "grew", pp: "grown", ing: "growing", s: "grows" } },
{ word: "help", cat: "regular", spanish: "ayudar", def: "To assist or support someone.", forms: { base: "help", past: "helped", pp: "helped", ing: "helping", s: "helps" } },
{ word: "improve", cat: "regular", spanish: "mejorar", def: "To make or become better.", forms: { base: "improve", past: "improved", pp: "improved", ing: "improving", s: "improves" } },
{ word: "achieve", cat: "regular", spanish: "lograr", def: "To accomplish or reach a goal.", forms: { base: "achieve", past: "achieved", pp: "achieved", ing: "achieving", s: "achieves" } },
{ word: "think", cat: "irregular", spanish: "pensar", def: "To have thoughts or opinions.", forms: { base: "think", past: "thought", pp: "thought", ing: "thinking", s: "thinks" } },
{ word: "play", cat: "regular", spanish: "jugar / tocar", def: "To engage in activity; perform music.", forms: { base: "play", past: "played", pp: "played", ing: "playing", s: "plays" } },
{ word: "listen", cat: "regular", spanish: "escuchar", def: "To pay attention to sound.", forms: { base: "listen", past: "listened", pp: "listened", ing: "listening", s: "listens" } },
{ word: "watch", cat: "regular", spanish: "ver / mirar", def: "To look at for a period of time.", forms: { base: "watch", past: "watched", pp: "watched", ing: "watching", s: "watches" } },
{ word: "read", cat: "irregular", spanish: "leer", def: "To understand written words.", forms: { base: "read", past: "read", pp: "read", ing: "reading", s: "reads" } },
{ word: "write", cat: "irregular", spanish: "escribir", def: "To mark letters or words on surface.", forms: { base: "write", past: "wrote", pp: "written", ing: "writing", s: "writes" } },
{ word: "go", cat: "irregular", spanish: "ir", def: "To move or travel to a place.", forms: { base: "go", past: "went", pp: "gone", ing: "going", s: "goes" } },
{ word: "come", cat: "irregular", spanish: "venir", def: "To move toward a place.", forms: { base: "come", past: "came", pp: "come", ing: "coming", s: "comes" } },
];

const PHRASES_DATA = [
{ phrase: "What is your name?", spanish: "¿Cuál es tu nombre?", category: "greeting", freq: "very high" },
{ phrase: "How are you?", spanish: "¿Cómo estás?", category: "greeting", freq: "very high" },
{ phrase: "Nice to meet you.", spanish: "Encantado de conocerte.", category: "greeting", freq: "very high" },
{ phrase: "Can you help me?", spanish: "¿Puedes ayudarme?", category: "request", freq: "very high" },
{ phrase: "I don't understand.", spanish: "No entiendo.", category: "communication", freq: "very high" },
{ phrase: "How much does it cost?", spanish: "¿Cuánto cuesta?", category: "shopping", freq: "very high" },
{ phrase: "Where is the bathroom?", spanish: "¿Dónde está el baño?", category: "place", freq: "very high" },
{ phrase: "Can I have the bill?", spanish: "¿Me traes la cuenta?", category: "restaurant", freq: "very high" },
{ phrase: "What time is it?", spanish: "¿Qué hora es?", category: "time", freq: "very high" },
{ phrase: "See you later.", spanish: "Hasta luego.", category: "goodbye", freq: "very high" },
{ phrase: "Thank you very much.", spanish: "Muchas gracias.", category: "polite", freq: "very high" },
{ phrase: "I'm sorry.", spanish: "Lo siento.", category: "polite", freq: "very high" },
{ phrase: "Please.", spanish: "Por favor.", category: "polite", freq: "very high" },
];

const CONTRACTIONS_DATA = [
{ contraction: "I'm", expanded: "I am", spanish: "Yo soy / estoy", example: "I'm happy.", ex_es: "Estoy feliz." },
{ contraction: "you're", expanded: "you are", spanish: "Tú eres / estás", example: "You're a good friend.", ex_es: "Eres un buen amigo." },
{ contraction: "he's", expanded: "he is", spanish: "Él es / está", example: "He's a doctor.", ex_es: "Él es doctor." },
{ contraction: "she's", expanded: "she is", spanish: "Ella es / está", example: "She's from Spain.", ex_es: "Ella es de España." },
{ contraction: "it's", expanded: "it is", spanish: "Es / está (neutro)", example: "It's a beautiful day.", ex_es: "Es un día hermoso." },
{ contraction: "we're", expanded: "we are", spanish: "Nosotros somos / estamos", example: "We're going to the beach.", ex_es: "Vamos a la playa." },
{ contraction: "they're", expanded: "they are", spanish: "Ellos son / están", example: "They're very nice.", ex_es: "Son muy amables." },
{ contraction: "don't", expanded: "do not", spanish: "No (presente)", example: "I don't like it.", ex_es: "No me gusta." },
{ contraction: "doesn't", expanded: "does not", spanish: "No (3ª persona)", example: "He doesn't know.", ex_es: "Él no sabe." },
{ contraction: "didn't", expanded: "did not", spanish: "No (pasado)", example: "They didn't call.", ex_es: "Ellos no llamaron." },
{ contraction: "won't", expanded: "will not", spanish: "No (futuro)", example: "I won't be late.", ex_es: "No llegaré tarde." },
{ contraction: "can't", expanded: "cannot", spanish: "No puedo", example: "I can't swim.", ex_es: "No puedo nadar." },
{ contraction: "I've", expanded: "I have", spanish: "He (presente perfecto)", example: "I've been here.", ex_es: "He estado aquí." },
{ contraction: "I'll", expanded: "I will", spanish: "Voy a", example: "I'll help you.", ex_es: "Te ayudaré." },
];

const QUANTIFIERS_DATA = [
{ word: "some", spanish: "algo / algunos", type: "indefinite", def: "A certain amount; not specified exactly.", ex: "I have some books." },
{ word: "any", spanish: "alguno / ninguno", type: "indefinite", def: "One or some; used in negatives and questions.", ex: "Do you have any questions?" },
{ word: "many", spanish: "muchos", type: "quantifier", def: "A large number of (countable).", ex: "She has many friends." },
{ word: "much", spanish: "mucho", type: "quantifier", def: "A large amount of (uncountable).", ex: "This requires much effort." },
];

const ARTICLES_DATA = [
{ article: "a", spanish: "un / una", type: "indefinite", def: "Before consonant sounds.", ex: "She is a doctor." },
{ article: "an", spanish: "un / una", type: "indefinite", def: "Before vowel sounds.", ex: "He is an engineer." },
{ article: "the", spanish: "el / la / los / las", type: "definite", def: "When the noun is specific.", ex: "The president announced a policy." },
];

const MODALS_DATA = [
{ modal: "CAN", neg: "can't", spanish: "puedo", color: C.green, emoji: "💪", use: "Habilidad • Posibilidad" },
{ modal: "COULD", neg: "couldn't", spanish: "podría", color: C.purple, emoji: "🌊", use: "Pasado de CAN • Sugerencia" },
{ modal: "SHOULD", neg: "shouldn't", spanish: "debería", color: C.cyan, emoji: "✅", use: "Consejo • Recomendación" },
{ modal: "MUST", neg: "mustn't", spanish: "debo", color: C.red, emoji: "🔒", use: "Obligación fuerte" },
{ modal: "MAY", neg: "may not", spanish: "puede que", color: C.yellow, emoji: "🌤️", use: "Posibilidad formal" },
{ modal: "MIGHT", neg: "might not", spanish: "quizás", color: C.cyan, emoji: "🌫️", use: "Posibilidad baja" },
];

const PREPOSITIONS_DATA = [
{ prep: "in", spanish: "en / dentro", color: C.green, def: "Espacios cerrados, ciudades", ex: "I live in Madrid." },
{ prep: "on", spanish: "en / sobre", color: C.yellow, def: "Superficies, medios", ex: "The book is on the table." },
{ prep: "at", spanish: "en (punto específico)", color: C.red, def: "Lugares específicos, eventos", ex: "I'll meet you at noon." },
{ prep: "to", spanish: "hacia / a (destino)", color: C.teal, def: "Destino de movimiento", ex: "She went to the store." },
{ prep: "from", spanish: "desde / de", color: C.green, def: "Origen, punto de partida", ex: "I come from Spain." },
];

const AUXILIARIES_DATA = [
{ word: "BE", forms: ["am", "is", "are", "was", "were", "been"], color: C.yellow, spanish: "ser / estar", use: "Tiempos continuos • Voz pasiva" },
{ word: "DO", forms: ["do", "does", "did"], color: C.green, spanish: "hacer (auxiliar)", use: "Preguntas • Negaciones" },
{ word: "HAVE", forms: ["have", "has", "had"], color: C.blue, spanish: "haber (auxiliar)", use: "Tiempos perfectos" },
];

const VERB_TENSES_DATA = [
{ tense: "Simple Present", spanish: "Presente Simple", formula: "Subject + Verb", use: "Hechos, rutinas", example: "I work every day.", color: C.green },
{ tense: "Present Continuous", spanish: "Presente Continuo", formula: "Subject + BE + Verb-ing", use: "Acciones en progreso NOW", example: "I am working now.", color: C.blue },
{ tense: "Present Perfect", spanish: "Presente Perfecto", formula: "Subject + HAVE/HAS + PP", use: "Experiencia de vida", example: "I have worked here 5 years.", color: C.yellow },
{ tense: "Simple Past", spanish: "Pasado Simple", formula: "Subject + Verb (past)", use: "Acciones completadas", example: "I worked yesterday.", color: C.red },
{ tense: "Past Continuous", spanish: "Pasado Continuo", formula: "Subject + WAS/WERE + Verb-ing", use: "En progreso en el pasado", example: "I was working when you called.", color: C.cyan },
{ tense: "Simple Future", spanish: "Futuro Simple", formula: "Subject + WILL + Verb", use: "Acciones futuras", example: "I will work tomorrow.", color: C.orange },
];

const PHRASAL_VERBS_DATA = [
{ phrasal: "Break down", spanish: "Descomponer", meaning: "To stop working", example: "The car broke down.", ex_es: "El auto se descompuso." },
{ phrasal: "Break up", spanish: "Terminar", meaning: "To end a relationship", example: "They broke up.", ex_es: "Terminaron." },
{ phrasal: "Bring up", spanish: "Educar", meaning: "To raise children", example: "She brought up her kids.", ex_es: "Ella educó a sus hijos." },
{ phrasal: "Come back", spanish: "Volver", meaning: "To return", example: "I'll come back tomorrow.", ex_es: "Volveré mañana." },
{ phrasal: "Figure out", spanish: "Averiguar", meaning: "To understand or solve", example: "I figured out the problem.", ex_es: "Entendí el problema." },
{ phrasal: "Give up", spanish: "Rendirse", meaning: "To stop trying", example: "Don't give up.", ex_es: "No te rindas." },
{ phrasal: "Go out", spanish: "Salir", meaning: "To leave the house", example: "We're going out tonight.", ex_es: "Salimos esta noche." },
{ phrasal: "Grow up", spanish: "Crecer", meaning: "To become an adult", example: "Where did you grow up?", ex_es: "¿Dónde creciste?" },
{ phrasal: "Keep up", spanish: "Mantenerse al día", meaning: "To maintain pace", example: "Keep up with technology.", ex_es: "Mantente al día." },
{ phrasal: "Look for", spanish: "Buscar", meaning: "To search for", example: "What are you looking for?", ex_es: "¿Qué buscas?" },
{ phrasal: "Make up", spanish: "Reconciliarse", meaning: "To reconcile", example: "They made up.", ex_es: "Se reconciliaron." },
{ phrasal: "Pick up", spanish: "Recoger", meaning: "To collect", example: "Can you pick me up?", ex_es: "¿Puedes recogerme?" },
{ phrasal: "Run out", spanish: "Agotarse", meaning: "To exhaust supply", example: "We've run out of milk.", ex_es: "Se acabó la leche." },
{ phrasal: "Take off", spanish: "Despegar", meaning: "To leave ground", example: "The plane takes off.", ex_es: "El avión despega." },
{ phrasal: "Turn off", spanish: "Apagar", meaning: "To switch off", example: "Turn off the light.", ex_es: "Apaga la luz." },
];

const NAV_ITEMS = [
{ id: "phrases", label: "💬", full: "Phrases", color: C.pink },
{ id: "dictionary", label: "📚", full: "Dict", color: C.gold },
{ id: "phrase-builder", label: "🎨", full: "Builder", color: C.purple },
{ id: "word-conjugator", label: "🔄", full: "Conjug", color: C.green },
{ id: "phrasal-verbs", label: "🔗", full: "Phrasal", color: C.blue },
{ id: "verb-tenses", label: "⏰", full: "Tenses", color: C.orange },
{ id: "contractions", label: "〜", full: "Contr", color: C.teal },
{ id: "modals", label: "⚡", full: "Modal", color: C.yellow },
{ id: "quantifiers", label: "#️⃣", full: "Quant", color: C.blue },
{ id: "articles", label: "🔤", full: "Art", color: C.cyan },
{ id: "prepositions", label: "📍", full: "Prep", color: C.green },
{ id: "auxiliaries", label: "🅰️", full: "Aux", color: C.gold },
];

let currentTab = "phrases";
let appState = {
searchQuery: "",
selectedCategory: "all",
expandedItems: [],
selectedWord: null,
phraseBuilderState: {
pronoun: "I",
modal: null,
phrasal: null,
article: null,
contraction: null,
quantifier: null,
verbTense: "Simple Present",
preposition: null,
auxiliary: null,
},
};

function createElement(tag, className = "", innerHTML = "", style = {}) {
const el = document.createElement(tag);
if (className) el.className = className;
if (innerHTML) el.innerHTML = innerHTML;
Object.assign(el.style, style);
return el;
}

function renderNavBar() {
const navBar = document.getElementById("navBar");
navBar.innerHTML = "";
NAV_ITEMS.forEach(item => {
const btn = document.createElement("button");
btn.className = `nav-button ${currentTab === item.id ? "active" : ""}`;
btn.style.color = currentTab === item.id ? item.color : "#202035";
btn.style.borderBottomColor = currentTab === item.id ? item.color : "transparent";
btn.innerHTML = `${item.label}<span class="nav-button-label">${item.full}</span>`;
btn.onclick = () => switchTab(item.id);
navBar.appendChild(btn);
});
}

function switchTab(tabId) {
currentTab = tabId;
renderNavBar();
renderContent();
}

function updateSectionHeader(label) {
const header = document.getElementById("sectionTitle");
const navItem = NAV_ITEMS.find(n => n.id === currentTab);
header.textContent = navItem ? `${navItem.label} ${label}` : label;
}

function renderContent() {
const container = document.getElementById("mainContent");
container.innerHTML = "";
switch (currentTab) {
case "phrases":
updateSectionHeader("Top Phrases");
renderPhrases(container);
break;
case "dictionary":
updateSectionHeader("Dictionary");
renderDictionary(container);
break;
case "phrase-builder":
updateSectionHeader("Phrase Builder");
renderPhraseBuilder(container);
break;
case "word-conjugator":
updateSectionHeader("Word Conjugator");
renderWordConjugator(container);
break;
case "phrasal-verbs":
updateSectionHeader("Phrasal Verbs");
renderPhrasalVerbs(container);
break;
case "verb-tenses":
updateSectionHeader("Verb Tenses");
renderVerbTenses(container);
break;
case "contractions":
updateSectionHeader("Contractions");
renderContractions(container);
break;
case "modals":
updateSectionHeader("Modals");
renderModals(container);
break;
case "quantifiers":
updateSectionHeader("Quantifiers");
renderQuantifiers(container);
break;
case "articles":
updateSectionHeader("Articles");
renderArticles(container);
break;
case "prepositions":
updateSectionHeader("Prepositions");
renderPrepositions(container);
break;
case "auxiliaries":
updateSectionHeader("Auxiliaries");
renderAuxiliaries(container);
break;
default:
container.innerHTML = "<p>Sección en construcción…</p>";
}
}

function renderPhrases(container) {
const wrapper = createElement("div");
const categories = ["greeting", "request", "communication", "shopping", "place", "restaurant", "time", "goodbye", "polite"];
const categoryContainer = createElement("div", "btn-grid");
const allBtn = document.createElement("button");
allBtn.className = `pill ${appState.selectedCategory === "all" ? "active" : ""}`;
allBtn.textContent = "All";
allBtn.onclick = () => { appState.selectedCategory = "all"; renderPhrases(container); };
categoryContainer.appendChild(allBtn);
categories.forEach(cat => {
const btn = document.createElement("button");
btn.className = `pill ${appState.selectedCategory === cat ? "active" : ""}`;
btn.textContent = cat.charAt(0).toUpperCase() + cat.slice(1);
btn.onclick = () => { appState.selectedCategory = cat; renderPhrases(container); };
categoryContainer.appendChild(btn);
});
wrapper.appendChild(categoryContainer);
const filtered = PHRASES_DATA.filter(p => appState.selectedCategory === "all" || p.category === appState.selectedCategory);
filtered.forEach((phrase, idx) => {
const card = createElement("div", "card");
const isExpanded = appState.expandedItems.includes(`phrase-${idx}`);
const header = createElement("div");
header.style.cursor = "pointer";
header.onclick = () => {
const key = `phrase-${idx}`;
if (appState.expandedItems.includes(key)) {
appState.expandedItems = appState.expandedItems.filter(k => k !== key);
} else {
appState.expandedItems.push(key);
}
renderPhrases(container);
};
const titleDiv = createElement("div");
titleDiv.style.display = "flex";
titleDiv.style.justifyContent = "space-between";
titleDiv.innerHTML = `<span class="card-title" style="color: ${C.pink};">"${phrase.phrase}"</span>`;
header.appendChild(titleDiv);
const toggle = createElement("span", "toggle-icon", isExpanded ? "▲" : "▼");
header.appendChild(toggle);
card.appendChild(header);
const subtitle = createElement("div", "card-subtitle", `🇲🇽 "${phrase.spanish}"`);
card.appendChild(subtitle);
if (isExpanded) {
const content = createElement("div");
content.style.marginTop = "14px";
content.style.paddingTop = "14px";
content.style.borderTop = `1px solid ${C.pink}22`;
const freqBadge = createElement("div", "section-label");
freqBadge.style.color = C.yellow;
freqBadge.textContent = `📊 Freq: ${phrase.freq}`;
content.appendChild(freqBadge);
card.appendChild(content);
}
wrapper.appendChild(card);
});
container.appendChild(wrapper);
}

function renderDictionary(container) {
const wrapper = createElement("div");
const searchInput = createElement("input");
searchInput.type = "text";
searchInput.placeholder = "🔍 Busca palabra…";
searchInput.value = appState.searchQuery;
searchInput.onchange = (e) => { appState.searchQuery = e.target.value; renderDictionary(container); };
wrapper.appendChild(searchInput);
const filtered = WORDS_DATA.filter(w => w.word.toLowerCase().includes(appState.searchQuery.toLowerCase()) || w.spanish.toLowerCase().includes(appState.searchQuery.toLowerCase()));
const countEl = createElement("div", "text-small text-muted", `${filtered.length}/${WORDS_DATA.length} palabras`);
wrapper.appendChild(countEl);
filtered.forEach((word, idx) => {
const card = createElement("div", "card");
const isExpanded = appState.expandedItems.includes(`word-${idx}`);
const header = createElement("div");
header.style.cursor = "pointer";
header.onclick = () => {
const key = `word-${idx}`;
if (appState.expandedItems.includes(key)) {
appState.expandedItems = appState.expandedItems.filter(k => k !== key);
} else {
appState.expandedItems.push(key);
}
renderDictionary(container);
};
const titleDiv = createElement("div");
titleDiv.innerHTML = `<span class="card-title" style="color: ${C.gold}">${word.word}</span>`;
header.appendChild(titleDiv);
const toggleIcon = createElement("span", "toggle-icon", isExpanded ? "▲" : "▼");
header.appendChild(toggleIcon);
card.appendChild(header);
const subtitle = createElement("div", "card-subtitle", `🇲🇽 ${word.spanish}`);
card.appendChild(subtitle);
if (isExpanded) {
const content = createElement("div");
content.style.marginTop = "14px";
const defBox = createElement("div", "description-box", word.def);
content.appendChild(defBox);
card.appendChild(content);
}
wrapper.appendChild(card);
});
container.appendChild(wrapper);
}

function renderPhraseBuilder(container) {
const wrapper = createElement("div");
const descBox = createElement("div", "description-box");
descBox.textContent = "Construye oraciones complejas usando pronouns, modals, phrasal verbs, tenses, contractions, quantifiers, articles, prepositions y auxiliares.";
wrapper.appendChild(descBox);

const controls = createElement("div");

// Pronouns
const pronounDiv = createElement("div", "control-section");
pronounDiv.innerHTML = `<div class="control-title">👤 Pronoun</div>`;
const pronounBtns = createElement("div", "btn-grid");
["I", "You", "He", "She", "It", "We", "They"].forEach(p => {
const btn = document.createElement("button");
btn.className = `pill ${appState.phraseBuilderState.pronoun === p ? "active" : ""}`;
btn.textContent = p;
btn.onclick = () => { appState.phraseBuilderState.pronoun = p; updateSentenceDisplay(container); };
pronounBtns.appendChild(btn);
});
pronounDiv.appendChild(pronounBtns);
controls.appendChild(pronounDiv);

// Auxiliary (optional)
const auxDiv = createElement("div", "control-section");
auxDiv.innerHTML = `<div class="control-title">🅰️ Auxiliary (optional)</div>`;
const auxBtns = createElement("div", "btn-grid");
const auxOptions = ["None", ...AUXILIARIES_DATA.map(a => a.word)];
auxOptions.forEach(a => {
const btn = document.createElement("button");
btn.className = `pill ${appState.phraseBuilderState.auxiliary === (a === "None" ? null : a) ? "active" : ""}`;
btn.textContent = a;
btn.onclick = () => { appState.phraseBuilderState.auxiliary = a === "None" ? null : a; updateSentenceDisplay(container); };
auxBtns.appendChild(btn);
});
auxDiv.appendChild(auxBtns);
controls.appendChild(auxDiv);

// Modal (optional)
const modalDiv = createElement("div", "control-section");
modalDiv.innerHTML = `<div class="control-title">⚡ Modal (optional)</div>`;
const modalBtns = createElement("div", "btn-grid");
const modalOptions = ["None", ...MODALS_DATA.map(m => m.modal)];
modalOptions.forEach(m => {
const btn = document.createElement("button");
btn.className = `pill ${appState.phraseBuilderState.modal === (m === "None" ? null : m) ? "active" : ""}`;
btn.textContent = m;
btn.onclick = () => { appState.phraseBuilderState.modal = m === "None" ? null : m; updateSentenceDisplay(container); };
modalBtns.appendChild(btn);
});
modalDiv.appendChild(modalBtns);
controls.appendChild(modalDiv);

// Phrasal Verb (optional)
const phrasalDiv = createElement("div", "control-section");
phrasalDiv.innerHTML = `<div class="control-title">🔗 Phrasal Verb (optional)</div>`;
const phrasalBtns = createElement("div", "btn-grid");
const phrasalOptions = ["None", "break down", "come back", "give up", "go out", "pick up", "take off"];
phrasalOptions.forEach(pv => {
const btn = document.createElement("button");
btn.className = `pill ${appState.phraseBuilderState.phrasal === (pv === "None" ? null : pv) ? "active" : ""}`;
btn.textContent = pv;
btn.onclick = () => { appState.phraseBuilderState.phrasal = pv === "None" ? null : pv; updateSentenceDisplay(container); };
phrasalBtns.appendChild(btn);
});
phrasalDiv.appendChild(phrasalBtns);
controls.appendChild(phrasalDiv);

// Contraction (optional)
const contrDiv = createElement("div", "control-section");
contrDiv.innerHTML = `<div class="control-title">〜 Contraction (optional)</div>`;
const contrBtns = createElement("div", "btn-grid");
const contrOptions = ["None", "I'm", "you're", "he's", "she's", "we're", "they're", "don't", "can't"];
contrOptions.forEach(c => {
const btn = document.createElement("button");
btn.className = `pill ${appState.phraseBuilderState.contraction === (c === "None" ? null : c) ? "active" : ""}`;
btn.textContent = c;
btn.onclick = () => { appState.phraseBuilderState.contraction = c === "None" ? null : c; updateSentenceDisplay(container); };
contrBtns.appendChild(btn);
});
contrDiv.appendChild(contrBtns);
controls.appendChild(contrDiv);

// Quantifier (optional)
const quantDiv = createElement("div", "control-section");
quantDiv.innerHTML = `<div class="control-title">#️⃣ Quantifier (optional)</div>`;
const quantBtns = createElement("div", "btn-grid");
const quantOptions = ["None", "some", "any", "many", "much"];
quantOptions.forEach(q => {
const btn = document.createElement("button");
btn.className = `pill ${appState.phraseBuilderState.quantifier === (q === "None" ? null : q) ? "active" : ""}`;
btn.textContent = q;
btn.onclick = () => { appState.phraseBuilderState.quantifier = q === "None" ? null : q; updateSentenceDisplay(container); };
quantBtns.appendChild(btn);
});
quantDiv.appendChild(quantBtns);
controls.appendChild(quantDiv);

// Article (optional)
const artDiv = createElement("div", "control-section");
artDiv.innerHTML = `<div class="control-title">🔤 Article (optional)</div>`;
const artBtns = createElement("div", "btn-grid");
const artOptions = ["None", "a", "an", "the"];
artOptions.forEach(a => {
const btn = document.createElement("button");
btn.className = `pill ${appState.phraseBuilderState.article === (a === "None" ? null : a) ? "active" : ""}`;
btn.textContent = a;
btn.onclick = () => { appState.phraseBuilderState.article = a === "None" ? null : a; updateSentenceDisplay(container); };
artBtns.appendChild(btn);
});
artDiv.appendChild(artBtns);
controls.appendChild(artDiv);

// Preposition (optional)
const prepDiv = createElement("div", "control-section");
prepDiv.innerHTML = `<div class="control-title">📍 Preposition (optional)</div>`;
const prepBtns = createElement("div", "btn-grid");
const prepOptions = ["None", "in", "on", "at", "to", "from"];
prepOptions.forEach(p => {
const btn = document.createElement("button");
btn.className = `pill ${appState.phraseBuilderState.preposition === (p === "None" ? null : p) ? "active" : ""}`;
btn.textContent = p;
btn.onclick = () => { appState.phraseBuilderState.preposition = p === "None" ? null : p; updateSentenceDisplay(container); };
prepBtns.appendChild(btn);
});
prepDiv.appendChild(prepBtns);
controls.appendChild(prepDiv);

// Verb Tense
const tenseDiv = createElement("div", "control-section");
tenseDiv.innerHTML = `<div class="control-title">⏰ Verb Tense</div>`;
const tenseBtns = createElement("div", "btn-grid");
VERB_TENSES_DATA.forEach(t => {
const btn = document.createElement("button");
btn.className = `pill ${appState.phraseBuilderState.verbTense === t.tense ? "active" : ""}`;
btn.textContent = t.tense.split(" ")[0];
btn.onclick = () => { appState.phraseBuilderState.verbTense = t.tense; updateSentenceDisplay(container); };
tenseBtns.appendChild(btn);
});
tenseDiv.appendChild(tenseBtns);
controls.appendChild(tenseDiv);

wrapper.appendChild(controls);

const sentenceBox = createElement("div", "sentence-box");
sentenceBox.innerHTML = `<div class="sentence-label">Tu oración</div><div class="sentence-text" id="builtSentence">I speak English fluently.</div>`;
wrapper.appendChild(sentenceBox);

container.appendChild(wrapper);
updateSentenceDisplay(container);
}

function updateSentenceDisplay(container) {
const state = appState.phraseBuilderState;
let sentence = "";

// Build the sentence based on selected components
const pronoun = state.pronoun || "I";
const auxiliary = state.auxiliary || null;
const modal = state.modal || null;
const contraction = state.contraction || null;
const quantifier = state.quantifier || null;
const article = state.article || null;
const phrasal = state.phrasal || null;
const preposition = state.preposition || null;
const verbTense = state.verbTense || "Simple Present";

// Main verb based on tense
let mainVerb = phrasal || "speak";
let verbForm = "speak";

if (verbTense === "Simple Present") {
verbForm = pronoun === "He" || pronoun === "She" || pronoun === "It" ? mainVerb + "s" : mainVerb;
} else if (verbTense === "Simple Past") {
verbForm = mainVerb + "ed";
} else if (verbTense === "Present Continuous") {
verbForm = pronoun === "I" ? "am" : pronoun === "He" || pronoun === "She" || pronoun === "It" ? "is" : "are";
verbForm += " " + mainVerb + "ing";
} else if (verbTense === "Simple Future") {
verbForm = "will " + mainVerb;
} else if (verbTense === "Present Perfect") {
verbForm = pronoun === "I" || pronoun === "You" || pronoun === "We" || pronoun === "They" ? "have" : "has";
verbForm += " " + mainVerb + "ed";
} else if (verbTense === "Past Continuous") {
verbForm = pronoun === "I" || pronoun === "It" ? "was" : "were";
verbForm += " " + mainVerb + "ing";
}

// Construct sentence
sentence = pronoun;

if (contraction) {
sentence = contraction.split("'")[0].charAt(0).toUpperCase() + contraction.substring(1);
}

if (auxiliary) {
sentence += " " + auxiliary.toLowerCase();
} else if (modal) {
sentence += " " + modal.toLowerCase();
} else {
sentence += " " + verbForm;
}

if (quantifier) {
sentence += " " + quantifier;
}

if (article) {
sentence += " " + article;
}

sentence += " " + (phrasal || "thing");

if (preposition) {
sentence += " " + preposition + " " + (article || "the") + " place";
}

sentence += ".";

const sentenceEl = document.getElementById("builtSentence");
if (sentenceEl) {
sentenceEl.textContent = sentence;
}
}

function renderWordConjugator(container) {
const wrapper = createElement("div");
const descBox = createElement("div", "description-box");
descBox.textContent = "Selecciona una palabra del diccionario y ve cómo se conjuga con todos los pronouns.";
wrapper.appendChild(descBox);

const wordSelector = createElement("div", "btn-grid");
WORDS_DATA.slice(0, 12).forEach((word) => {
if (word.forms.base !== "—") {
const btn = document.createElement("button");
btn.className = "pill";
btn.textContent = word.word;
btn.onclick = () => renderConjugationDetail(container, word);
wordSelector.appendChild(btn);
}
});
wrapper.appendChild(wordSelector);

if (WORDS_DATA.length > 0 && WORDS_DATA[0].forms.base !== "—") {
renderConjugationDetail(container, WORDS_DATA[0]);
}

container.appendChild(wrapper);
}

function renderConjugationDetail(container, word) {
const wrapper = createElement("div");

const infoCard = createElement("div", "card");
infoCard.style.background = C.card2;

const titleDiv = createElement("div");
titleDiv.innerHTML = `<div style="font-size: 20px; font-weight: 900; color: ${C.green};">${word.word}</div><div style="font-size: 11px; color: ${C.muted};">🇲🇽 ${word.spanish}</div>`;
infoCard.appendChild(titleDiv);
wrapper.appendChild(infoCard);

const conjugationGrid = createElement("div", "conjugation-grid");

// Subject Pronouns
const subjectHeader = createElement("div", "section-label", "👤 SUBJECT PRONOUNS");
conjugationGrid.appendChild(subjectHeader);

["I", "You", "He", "She", "It", "We", "They"].forEach((pronoun, idx) => {
const row = createElement("div", "conjugation-row");
const isThird = idx === 2 || idx === 3 || idx === 4;
const form = isThird && word.forms.s ? word.forms.s : word.forms.base;
row.innerHTML = `<div class="conjugation-pronoun">${pronoun}</div><div class="conjugation-form">${form}</div>`;
conjugationGrid.appendChild(row);
});

// Object Pronouns
const objectHeader = createElement("div", "section-label", "👥 OBJECT PRONOUNS");
conjugationGrid.appendChild(objectHeader);

["me", "you", "him", "her", "it", "us", "them"].forEach((pronoun) => {
const row = createElement("div", "conjugation-row");
row.innerHTML = `<div class="conjugation-pronoun">${pronoun}</div><div class="conjugation-form">I ${word.forms.base} ${pronoun}</div>`;
conjugationGrid.appendChild(row);
});

// Possessive Pronouns
const possessiveHeader = createElement("div", "section-label", "🔐 POSSESSIVE PRONOUNS");
conjugationGrid.appendChild(possessiveHeader);

["my", "your", "his", "her", "its", "our", "their"].forEach((pronoun) => {
const row = createElement("div", "conjugation-row");
row.innerHTML = `<div class="conjugation-pronoun">${pronoun}</div><div class="conjugation-form">${pronoun} ${word.word}</div>`;
conjugationGrid.appendChild(row);
});

wrapper.appendChild(conjugationGrid);

container.innerHTML = "";
container.appendChild(wrapper);
}

function renderPhrasalVerbs(container) {
const wrapper = createElement("div");
const descBox = createElement("div", "description-box");
descBox.textContent = "Phrasal verbs: combinación de verbo + partícula con nuevos significados.";
wrapper.appendChild(descBox);

PHRASAL_VERBS_DATA.forEach((pv, idx) => {
const card = createElement("div", "card");
const isExpanded = appState.expandedItems.includes(`phrasal-${idx}`);
const header = createElement("div");
header.style.cursor = "pointer";
header.onclick = () => {
const key = `phrasal-${idx}`;
if (appState.expandedItems.includes(key)) {
appState.expandedItems = appState.expandedItems.filter(k => k !== key);
} else {
appState.expandedItems.push(key);
}
renderPhrasalVerbs(container);
};
const titleDiv = createElement("div");
titleDiv.innerHTML = `<span class="card-title" style="color: ${C.blue};">${pv.phrasal}</span>`;
header.appendChild(titleDiv);
const toggle = createElement("span", "toggle-icon", isExpanded ? "▲" : "▼");
header.appendChild(toggle);
card.appendChild(header);
const subtitle = createElement("div", "card-subtitle", `🇲🇽 ${pv.spanish}`);
card.appendChild(subtitle);
if (isExpanded) {
const content = createElement("div");
content.style.marginTop = "14px";
const meaningBox = createElement("div", "description-box", pv.meaning);
content.appendChild(meaningBox);
const exBox = createElement("div", "combo-row");
exBox.innerHTML = `<div class="sentence-en">"${pv.example}"</div><div class="sentence-es">📌 "${pv.ex_es}"</div>`;
content.appendChild(exBox);
card.appendChild(content);
}
wrapper.appendChild(card);
});
container.appendChild(wrapper);
}

function renderVerbTenses(container) {
const wrapper = createElement("div");
const descBox = createElement("div", "description-box");
descBox.textContent = "Aprende los 10 tiempos verbales principales del inglés.";
wrapper.appendChild(descBox);

VERB_TENSES_DATA.forEach((tense, idx) => {
const card = createElement("div", "card");
const isExpanded = appState.expandedItems.includes(`tense-${idx}`);
const header = createElement("div");
header.style.cursor = "pointer";
header.onclick = () => {
const key = `tense-${idx}`;
if (appState.expandedItems.includes(key)) {
appState.expandedItems = appState.expandedItems.filter(k => k !== key);
} else {
appState.expandedItems.push(key);
}
renderVerbTenses(container);
};
const titleDiv = createElement("div");
titleDiv.innerHTML = `<span class="card-title" style="color: ${tense.color};">${tense.tense}</span>`;
header.appendChild(titleDiv);
const toggle = createElement("span", "toggle-icon", isExpanded ? "▲" : "▼");
header.appendChild(toggle);
card.appendChild(header);
const subtitle = createElement("div", "card-subtitle", `🇲🇽 ${tense.spanish}`);
card.appendChild(subtitle);
if (isExpanded) {
const content = createElement("div");
content.style.marginTop = "14px";
const formulaBox = createElement("div");
formulaBox.style.background = `${tense.color}11`;
formulaBox.style.padding = "8px 12px";
formulaBox.style.borderRadius = "8px";
formulaBox.style.fontSize = "11px";
formulaBox.style.color = `${tense.color}cc`;
formulaBox.innerHTML = `<strong>Formula:</strong> ${tense.formula}`;
content.appendChild(formulaBox);
const exBox = createElement("div", "combo-row");
exBox.style.borderLeftColor = tense.color;
exBox.innerHTML = `<div class="sentence-en">"${tense.example}"</div><div class="sentence-es">📌 "${tense.spanish}"</div>`;
content.appendChild(exBox);
card.appendChild(content);
}
wrapper.appendChild(card);
});
container.appendChild(wrapper);
}

function renderContractions(container) {
const wrapper = createElement("div");
const descBox = createElement("div", "description-box");
descBox.textContent = "Las contracciones son formas abreviadas muy comunes en inglés conversacional.";
wrapper.appendChild(descBox);

CONTRACTIONS_DATA.forEach((contr, idx) => {
const card = createElement("div", "card");
const isExpanded = appState.expandedItems.includes(`contr-${idx}`);
const header = createElement("div");
header.style.cursor = "pointer";
header.onclick = () => {
const key = `contr-${idx}`;
if (appState.expandedItems.includes(key)) {
appState.expandedItems = appState.expandedItems.filter(k => k !== key);
} else {
appState.expandedItems.push(key);
}
renderContractions(container);
};
const titleDiv = createElement("div");
titleDiv.innerHTML = `<span style="font-size: 18px; font-weight: 700; color: ${C.teal};">${contr.contraction}</span> = <span style="color: ${C.muted};">${contr.expanded}</span>`;
header.appendChild(titleDiv);
const toggle = createElement("span", "toggle-icon", isExpanded ? "▲" : "▼");
header.appendChild(toggle);
card.appendChild(header);
const subtitle = createElement("div", "card-subtitle", `🇲🇽 ${contr.spanish}`);
card.appendChild(subtitle);
if (isExpanded) {
const content = createElement("div");
content.style.marginTop = "14px";
const exBox = createElement("div", "combo-row");
exBox.innerHTML = `<div class="sentence-en">"${contr.example}"</div>`;
content.appendChild(exBox);
card.appendChild(content);
}
wrapper.appendChild(card);
});
container.appendChild(wrapper);
}

function renderModals(container) {
const wrapper = createElement("div");
const btnGrid = createElement("div", "btn-grid");
MODALS_DATA.forEach((modal) => {
const btn = document.createElement("button");
btn.className = "pill";
btn.style.borderColor = modal.color;
btn.style.color = modal.color;
btn.style.background = `${modal.color}22`;
btn.style.borderWidth = "2px";
btn.textContent = `${modal.emoji} ${modal.modal}`;
btn.onclick = () => renderModalDetail(container, modal);
btnGrid.appendChild(btn);
});
wrapper.appendChild(btnGrid);
if (MODALS_DATA.length > 0) {
renderModalDetail(container, MODALS_DATA[0]);
}
container.appendChild(wrapper);
}

function renderModalDetail(container, modal) {
const wrapper = createElement("div");
const infoCard = createElement("div", "card");
infoCard.style.background = `${modal.color}18`;
infoCard.style.border = `2px solid ${modal.color}44`;
const header = createElement("div");
header.innerHTML = `<div style="font-size: 28px; font-weight: 900; color: ${modal.color};">${modal.modal}</div><div style="font-size: 11px; color: ${modal.color}88;">Neg: ${modal.neg}</div>`;
infoCard.appendChild(header);
const useBox = createElement("div");
useBox.style.background = "rgba(0,0,0,0.2)";
useBox.style.padding = "8px 12px";
useBox.style.color = `${modal.color}cc`;
useBox.innerHTML = `📌 ${modal.use}`;
infoCard.appendChild(useBox);
wrapper.appendChild(infoCard);
container.innerHTML = "";
container.appendChild(wrapper);
}

function renderQuantifiers(container) {
const wrapper = createElement("div");
const descBox = createElement("div", "description-box");
descBox.textContent = "Los quantifiers expresan cantidad: some, any, many, much, few, little, etc.";
wrapper.appendChild(descBox);

QUANTIFIERS_DATA.forEach((quant, idx) => {
const card = createElement("div", "card");
const isExpanded = appState.expandedItems.includes(`quant-${idx}`);
const header = createElement("div");
header.style.cursor = "pointer";
header.onclick = () => {
const key = `quant-${idx}`;
if (appState.expandedItems.includes(key)) {
appState.expandedItems = appState.expandedItems.filter(k => k !== key);
} else {
appState.expandedItems.push(key);
}
renderQuantifiers(container);
};
const titleDiv = createElement("div");
titleDiv.innerHTML = `<span class="card-title" style="color: ${C.blue};">${quant.word}</span>`;
header.appendChild(titleDiv);
const toggle = createElement("span", "toggle-icon", isExpanded ? "▲" : "▼");
header.appendChild(toggle);
card.appendChild(header);
const subtitle = createElement("div", "card-subtitle", `🇲🇽 ${quant.spanish}`);
card.appendChild(subtitle);
if (isExpanded) {
const content = createElement("div");
content.style.marginTop = "14px";
const def = createElement("div", "description-box", quant.def);
content.appendChild(def);
const exBox = createElement("div", "combo-row");
exBox.innerHTML = `<div class="sentence-en">"${quant.ex}"</div>`;
content.appendChild(exBox);
card.appendChild(content);
}
wrapper.appendChild(card);
});
container.appendChild(wrapper);
}

function renderArticles(container) {
const wrapper = createElement("div");
const descBox = createElement("div", "description-box");
descBox.textContent = "Los artículos (a, an, the) son fundamentales en inglés.";
wrapper.appendChild(descBox);

ARTICLES_DATA.forEach((art, idx) => {
const card = createElement("div", "card");
const isExpanded = appState.expandedItems.includes(`art-${idx}`);
const header = createElement("div");
header.style.cursor = "pointer";
header.onclick = () => {
const key = `art-${idx}`;
if (appState.expandedItems.includes(key)) {
appState.expandedItems = appState.expandedItems.filter(k => k !== key);
} else {
appState.expandedItems.push(key);
}
renderArticles(container);
};
const titleDiv = createElement("div");
titleDiv.innerHTML = `<span class="card-title" style="color: ${C.cyan};">${art.article}</span>`;
header.appendChild(titleDiv);
const toggle = createElement("span", "toggle-icon", isExpanded ? "▲" : "▼");
header.appendChild(toggle);
card.appendChild(header);
const subtitle = createElement("div", "card-subtitle", `🇲🇽 ${art.spanish}`);
card.appendChild(subtitle);
if (isExpanded) {
const content = createElement("div");
content.style.marginTop = "14px";
const def = createElement("div", "description-box", art.def);
content.appendChild(def);
const exBox = createElement("div", "combo-row");
exBox.innerHTML = `<div class="sentence-en">"${art.ex}"</div>`;
content.appendChild(exBox);
card.appendChild(content);
}
wrapper.appendChild(card);
});
container.appendChild(wrapper);
}

function renderPrepositions(container) {
const wrapper = createElement("div");
const descBox = createElement("div");
descBox.style.background = `${C.green}11`;
descBox.style.padding = "10px 12px";
descBox.style.borderRadius = "8px";
descBox.style.marginBottom = "12px";
descBox.style.fontSize = "12px";
descBox.style.color = `${C.green}cc`;
descBox.textContent = "Las preposiciones conectan palabras: in, on, at, to, from, etc.";
wrapper.appendChild(descBox);

PREPOSITIONS_DATA.forEach((prep, idx) => {
const card = createElement("div", "card");
const isExpanded = appState.expandedItems.includes(`prep-${idx}`);
const header = createElement("div");
header.style.cursor = "pointer";
header.onclick = () => {
const key = `prep-${idx}`;
if (appState.expandedItems.includes(key)) {
appState.expandedItems = appState.expandedItems.filter(k => k !== key);
} else {
appState.expandedItems.push(key);
}
renderPrepositions(container);
};
const titleDiv = createElement("div");
titleDiv.innerHTML = `<span class="card-title" style="color: ${prep.color};">${prep.prep}</span>`;
header.appendChild(titleDiv);
const toggle = createElement("span", "toggle-icon", isExpanded ? "▲" : "▼");
header.appendChild(toggle);
card.appendChild(header);
const subtitle = createElement("div", "card-subtitle", `🇲🇽 ${prep.spanish}`);
card.appendChild(subtitle);
if (isExpanded) {
const content = createElement("div");
content.style.marginTop = "14px";
const def = createElement("div", "description-box");
def.style.color = prep.color;
def.textContent = prep.def;
content.appendChild(def);
const exBox = createElement("div", "combo-row");
exBox.style.borderLeftColor = prep.color;
exBox.innerHTML = `<div class="sentence-en">"${prep.ex}"</div>`;
content.appendChild(exBox);
card.appendChild(content);
}
wrapper.appendChild(card);
});
container.appendChild(wrapper);
}

function renderAuxiliaries(container) {
const wrapper = createElement("div");
const descBox = createElement("div", "description-box");
descBox.textContent = "Los auxiliares (BE, DO, HAVE) son fundamentales para tiempos y preguntas.";
wrapper.appendChild(descBox);

AUXILIARIES_DATA.forEach((aux, idx) => {
const card = createElement("div", "card");
const isExpanded = appState.expandedItems.includes(`aux-${idx}`);
const header = createElement("div");
header.style.cursor = "pointer";
header.onclick = () => {
const key = `aux-${idx}`;
if (appState.expandedItems.includes(key)) {
appState.expandedItems = appState.expandedItems.filter(k => k !== key);
} else {
appState.expandedItems.push(key);
}
renderAuxiliaries(container);
};
const titleDiv = createElement("div");
titleDiv.innerHTML = `<span class="card-title" style="color: ${aux.color};">${aux.word}</span>`;
header.appendChild(titleDiv);
const toggle = createElement("span", "toggle-icon", isExpanded ? "▲" : "▼");
header.appendChild(toggle);
card.appendChild(header);
const subtitle = createElement("div", "card-subtitle", `🇲🇽 ${aux.spanish}`);
card.appendChild(subtitle);
if (isExpanded) {
const content = createElement("div");
content.style.marginTop = "14px";
const def = createElement("div", "description-box", aux.use);
content.appendChild(def);
const formsDiv = createElement("div");
formsDiv.style.marginTop = "10px";
const formsLabel = createElement("div", "section-label", "📋 Formas");
formsDiv.appendChild(formsLabel);
const formsBadges = createElement("div");
formsBadges.style.display = "flex";
formsBadges.style.gap = "6px";
formsBadges.style.flexWrap = "wrap";
aux.forms.forEach(form => {
const badge = createElement("div", "pronouns-badge");
badge.innerHTML = `<div class="pronoun-text" style="font-size: 12px;">${form}</div>`;
formsBadges.appendChild(badge);
});
formsDiv.appendChild(formsBadges);
content.appendChild(formsDiv);
card.appendChild(content);
}
wrapper.appendChild(card);
});
container.appendChild(wrapper);
}

function initApp() {
renderNavBar();
renderContent();
}

document.addEventListener("DOMContentLoaded", initApp);
