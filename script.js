// ═══════════════════════════════════════════════════════════════════════════════
// WORDMASTER PRO - COMPLETE ENGLISH GRAMMAR LEARNING PLATFORM
// JavaScript v6 - 12 Complete Sections + ADVANCED FEATURES + 2000+ Lines
// ═══════════════════════════════════════════════════════════════════════════════

const C = {
  bg: "#06060e", card: "#0b0b1a", card2: "#0e0e20", border: "#14142a",
  gold: "#f0c060", green: "#4ade80", blue: "#818cf8", purple: "#c084fc",
  cyan: "#22d3ee", teal: "#5eead4", orange: "#fb923c", red: "#f87171",
  pink: "#f472b6", yellow: "#facc15", text: "#e8e2d8", muted: "#4a5568",
};

// ═══════════════════════════════════════════════════════════════════════════════
// DICCIONARIO EXPANDIDO
// ═══════════════════════════════════════════════════════════════════════════════

const WORDS_DATA = [
  { word: "intend", cat: "regular", spanish: "tener la intención de / proponerse", def: "To have a plan or purpose in mind; to mean to do something.", difficulty: "intermediate", freq: "high", forms: { base: "intend", past: "intended", pp: "intended", ing: "intending", s: "intends" }, errors: ["I intending to go", "He intend to call"], correct: ["I intend to go", "He intends to call"] },
  { word: "compose", cat: "regular", spanish: "componer / redactar / crear", def: "To write or create music, poetry, or literary work.", difficulty: "intermediate", freq: "medium", forms: { base: "compose", past: "composed", pp: "composed", ing: "composing", s: "composes" }, errors: ["She composed a song yesterday", "They are composing music"], correct: ["She composed a song yesterday", "They are composing music"] },
  { word: "take off", cat: "phrasal verb", spanish: "despegar / quitarse / salir rápido", def: "To leave the ground (airplane); to remove (clothing); to depart quickly.", difficulty: "beginner", freq: "very high", forms: { base: "take off", past: "took off", pp: "taken off", ing: "taking off", s: "takes off" }, errors: ["The plane will take off soon", "He is taking off his jacket"], correct: ["The plane will take off soon", "He is taking off his jacket"] },
  { word: "fear", cat: "regular", spanish: "temer / miedo / temor", def: "To be afraid of something or someone; to have concern about.", difficulty: "beginner", freq: "high", forms: { base: "fear", past: "feared", pp: "feared", ing: "fearing", s: "fears" }, errors: ["I am fearing the exam", "She fears spiders"], correct: ["I fear the exam", "She fears spiders"] },
  { word: "overcome", cat: "irregular", spanish: "superar / vencer / conquistar", def: "To succeed in dealing with a problem or difficulty.", difficulty: "advanced", freq: "high", forms: { base: "overcome", past: "overcame", pp: "overcome", ing: "overcoming", s: "overcomes" }, errors: ["He overcame his fear yesterday", "They overcome obstacles"], correct: ["He overcame his fear yesterday", "They overcome obstacles"] },
  { word: "exhaust", cat: "regular", spanish: "agotar / extenuarse / cansar mucho", def: "To make someone very tired; to use up completely.", difficulty: "intermediate", freq: "medium", forms: { base: "exhaust", past: "exhausted", pp: "exhausted", ing: "exhausting", s: "exhausts" }, errors: ["The work exhausted him", "Running exhausts me"], correct: ["The work exhausted him", "Running exhausts me"] },
  { word: "capable", cat: "adjective", spanish: "capaz / competente / apto", def: "Having the ability or qualities needed to do something.", difficulty: "intermediate", freq: "high", forms: { base: "capable", past: "—", pp: "—", ing: "—", s: "—" } },
  { word: "regulate", cat: "regular", spanish: "regular / controlar / gobernar", def: "To control or keep something at a particular level.", difficulty: "advanced", freq: "medium", forms: { base: "regulate", past: "regulated", pp: "regulated", ing: "regulating", s: "regulates" } },
  { word: "implement", cat: "regular", spanish: "implementar / aplicar / ejecutar", def: "To put a plan, decision, or system into effect.", difficulty: "advanced", freq: "high", forms: { base: "implement", past: "implemented", pp: "implemented", ing: "implementing", s: "implements" } },
  { word: "hire", cat: "regular", spanish: "contratar / alquilar / emplear", def: "To employ someone; to rent something.", difficulty: "intermediate", freq: "high", forms: { base: "hire", past: "hired", pp: "hired", ing: "hiring", s: "hires" } },
  { word: "disclose", cat: "regular", spanish: "divulgar / revelar / desvelar", def: "To make information known publicly or privately.", difficulty: "advanced", freq: "medium", forms: { base: "disclose", past: "disclosed", pp: "disclosed", ing: "disclosing", s: "discloses" } },
  { word: "emerge", cat: "regular", spanish: "surgir / emerger / aparecer", def: "To come out or appear from somewhere or a situation.", difficulty: "intermediate", freq: "high", forms: { base: "emerge", past: "emerged", pp: "emerged", ing: "emerging", s: "emerges" } },
  { word: "evolve", cat: "regular", spanish: "evolucionar / desarrollar / cambiar", def: "To develop gradually into something complex or better.", difficulty: "intermediate", freq: "high", forms: { base: "evolve", past: "evolved", pp: "evolved", ing: "evolving", s: "evolves" } },
  { word: "acquire", cat: "regular", spanish: "adquirir / obtener / conseguir", def: "To get or obtain something.", difficulty: "intermediate", freq: "medium", forms: { base: "acquire", past: "acquired", pp: "acquired", ing: "acquiring", s: "acquires" } },
  { word: "retain", cat: "regular", spanish: "retener / conservar / mantener", def: "To keep or continue to have something.", difficulty: "advanced", freq: "medium", forms: { base: "retain", past: "retained", pp: "retained", ing: "retaining", s: "retains" } },
  { word: "enroll", cat: "regular", spanish: "inscribirse / matricularse / registrarse", def: "To officially register for a course or organization.", difficulty: "intermediate", freq: "medium", forms: { base: "enroll", past: "enrolled", pp: "enrolled", ing: "enrolling", s: "enrolls" } },
  { word: "manage", cat: "regular", spanish: "gestionar / lograr / dirigir", def: "To be in charge of; to succeed in dealing with.", difficulty: "beginner", freq: "very high", forms: { base: "manage", past: "managed", pp: "managed", ing: "managing", s: "manages" } },
  { word: "provide", cat: "regular", spanish: "proporcionar / proveer / suministrar", def: "To give or supply something needed.", difficulty: "beginner", freq: "very high", forms: { base: "provide", past: "provided", pp: "provided", ing: "providing", s: "provides" } },
  { word: "encourage", cat: "regular", spanish: "animar / alentar / motivar", def: "To give support or confidence to someone.", difficulty: "intermediate", freq: "high", forms: { base: "encourage", past: "encouraged", pp: "encouraged", ing: "encouraging", s: "encourages" } },
  { word: "conform", cat: "regular", spanish: "conformarse / cumplir / ajustarse", def: "To comply with standards, rules, or expectations.", difficulty: "advanced", freq: "medium", forms: { base: "conform", past: "conformed", pp: "conformed", ing: "conforming", s: "conforms" } },
  { word: "boycott", cat: "regular", spanish: "boicotear / rechazar", def: "To withdraw from commercial or social relations as protest.", difficulty: "advanced", freq: "low", forms: { base: "boycott", past: "boycotted", pp: "boycotted", ing: "boycotting", s: "boycotts" } },
  { word: "prejudice", cat: "regular", spanish: "prejuicio / predisponer / perjudicar", def: "To cause bias against; harm or injure.", difficulty: "advanced", freq: "medium", forms: { base: "prejudice", past: "prejudiced", pp: "prejudiced", ing: "prejudicing", s: "prejudices" } },
  { word: "resemble", cat: "regular", spanish: "parecerse a / asemejarse", def: "To look like or be similar to.", difficulty: "intermediate", freq: "medium", forms: { base: "resemble", past: "resembled", pp: "resembled", ing: "resembling", s: "resembles" } },
  { word: "speak", cat: "irregular", spanish: "hablar / decir", def: "To say words aloud; to communicate.", difficulty: "beginner", freq: "very high", forms: { base: "speak", past: "spoke", pp: "spoken", ing: "speaking", s: "speaks" } },
  { word: "work", cat: "regular", spanish: "trabajar / funcionar", def: "To do a job or task; to function.", difficulty: "beginner", freq: "very high", forms: { base: "work", past: "worked", pp: "worked", ing: "working", s: "works" } },
  { word: "learn", cat: "regular", spanish: "aprender / enterarse", def: "To gain knowledge or skills.", difficulty: "beginner", freq: "very high", forms: { base: "learn", past: "learned", pp: "learned", ing: "learning", s: "learns" } },
  { word: "build", cat: "irregular", spanish: "construir / edificar", def: "To create or construct something.", difficulty: "beginner", freq: "high", forms: { base: "build", past: "built", pp: "built", ing: "building", s: "builds" } },
  { word: "grow", cat: "irregular", spanish: "crecer / cultivar", def: "To increase in size or importance.", difficulty: "beginner", freq: "very high", forms: { base: "grow", past: "grew", pp: "grown", ing: "growing", s: "grows" } },
  { word: "help", cat: "regular", spanish: "ayudar / asistir", def: "To assist or support someone.", difficulty: "beginner", freq: "very high", forms: { base: "help", past: "helped", pp: "helped", ing: "helping", s: "helps" } },
  { word: "improve", cat: "regular", spanish: "mejorar / optimizar", def: "To make or become better.", difficulty: "intermediate", freq: "high", forms: { base: "improve", past: "improved", pp: "improved", ing: "improving", s: "improves" } },
  { word: "achieve", cat: "regular", spanish: "lograr / conseguir / alcanzar", def: "To accomplish or reach a goal.", difficulty: "intermediate", freq: "high", forms: { base: "achieve", past: "achieved", pp: "achieved", ing: "achieving", s: "achieves" } },
];

// ═══════════════════════════════════════════════════════════════════════════════
// DATOS DE FRASES
// ═══════════════════════════════════════════════════════════════════════════════

const PHRASES_DATA = [
  { phrase: "What is your name?", spanish: "¿Cuál es tu nombre?", category: "greeting", freq: "very high", usage: "Used when you want to know someone's identity.", difficulty: "beginner" },
  { phrase: "How are you?", spanish: "¿Cómo estás?", category: "greeting", freq: "very high", usage: "A common greeting to ask about someone's well-being.", difficulty: "beginner" },
  { phrase: "Nice to meet you.", spanish: "Encantado de conocerte.", category: "greeting", freq: "very high", usage: "Polite greeting when meeting someone for the first time.", difficulty: "beginner" },
  { phrase: "Can you help me?", spanish: "¿Puedes ayudarme?", category: "request", freq: "very high", usage: "Asking someone to assist you with something.", difficulty: "beginner" },
  { phrase: "I don't understand.", spanish: "No entiendo.", category: "communication", freq: "very high", usage: "Expressing confusion or lack of comprehension.", difficulty: "beginner" },
  { phrase: "How much does it cost?", spanish: "¿Cuánto cuesta?", category: "shopping", freq: "very high", usage: "Asking the price of an item.", difficulty: "beginner" },
  { phrase: "Where is the bathroom?", spanish: "¿Dónde está el baño?", category: "place", freq: "very high", usage: "Asking for directions to a restroom.", difficulty: "beginner" },
  { phrase: "Can I have the bill?", spanish: "¿Me traes la cuenta?", category: "restaurant", freq: "very high", usage: "Asking for the bill at a restaurant.", difficulty: "beginner" },
  { phrase: "What time is it?", spanish: "¿Qué hora es?", category: "time", freq: "very high", usage: "Asking for the current time.", difficulty: "beginner" },
  { phrase: "See you later.", spanish: "Hasta luego.", category: "goodbye", freq: "very high", usage: "Casual way to say goodbye.", difficulty: "beginner" },
  { phrase: "Thank you very much.", spanish: "Muchas gracias.", category: "polite", freq: "very high", usage: "Expressing gratitude.", difficulty: "beginner" },
  { phrase: "I'm sorry.", spanish: "Lo siento.", category: "polite", freq: "very high", usage: "Apologizing for something.", difficulty: "beginner" },
  { phrase: "Please.", spanish: "Por favor.", category: "polite", freq: "very high", usage: "Making a polite request.", difficulty: "beginner" },
  { phrase: "Do you speak English?", spanish: "¿Hablas inglés?", category: "communication", freq: "high", usage: "Asking if someone understands English.", difficulty: "beginner" },
  { phrase: "Excuse me.", spanish: "Disculpe.", category: "polite", freq: "high", usage: "Getting someone's attention politely.", difficulty: "beginner" },
];

// ═══════════════════════════════════════════════════════════════════════════════
// CONTRACCIONES
// ═══════════════════════════════════════════════════════════════════════════════

const CONTRACTIONS_DATA = [
  { contraction: "I'm", expanded: "I am", spanish: "Yo soy/estoy", example: "I'm happy.", ex_es: "Estoy feliz.", explanation: "Present tense of 'to be' with first person singular.", difficulty: "beginner" },
  { contraction: "you're", expanded: "you are", spanish: "Tú eres/estás", example: "You're a good friend.", ex_es: "Eres un buen amigo.", explanation: "Present tense of 'to be' with second person.", difficulty: "beginner" },
  { contraction: "he's", expanded: "he is", spanish: "Él es/está", example: "He's a doctor.", ex_es: "Él es doctor.", explanation: "Present tense of 'to be' with third person singular.", difficulty: "beginner" },
  { contraction: "she's", expanded: "she is", spanish: "Ella es/está", example: "She's from Spain.", ex_es: "Ella es de España.", explanation: "Present tense of 'to be' with third person singular (female).", difficulty: "beginner" },
  { contraction: "it's", expanded: "it is", spanish: "Es/está (neutro)", example: "It's a beautiful day.", ex_es: "Es un día hermoso.", explanation: "Present tense of 'to be' with third person singular (neutral).", difficulty: "beginner" },
  { contraction: "we're", expanded: "we are", spanish: "Nosotros somos/estamos", example: "We're going to the beach.", ex_es: "Vamos a la playa.", explanation: "Present tense of 'to be' with first person plural.", difficulty: "beginner" },
  { contraction: "they're", expanded: "they are", spanish: "Ellos son/están", example: "They're very nice.", ex_es: "Son muy amables.", explanation: "Present tense of 'to be' with third person plural.", difficulty: "beginner" },
  { contraction: "don't", expanded: "do not", spanish: "No (presente)", example: "I don't like it.", ex_es: "No me gusta.", explanation: "Negative form of present simple.", difficulty: "beginner" },
  { contraction: "doesn't", expanded: "does not", spanish: "No (3ª persona)", example: "He doesn't know.", ex_es: "Él no sabe.", explanation: "Negative form of present simple (3rd person).", difficulty: "beginner" },
  { contraction: "didn't", expanded: "did not", spanish: "No (pasado)", example: "They didn't call.", ex_es: "Ellos no llamaron.", explanation: "Negative form of past simple.", difficulty: "beginner" },
  { contraction: "won't", expanded: "will not", spanish: "No (futuro)", example: "I won't be late.", ex_es: "No llegaré tarde.", explanation: "Negative form of future simple.", difficulty: "intermediate" },
  { contraction: "can't", expanded: "cannot", spanish: "No puedo", example: "I can't swim.", ex_es: "No puedo nadar.", explanation: "Negative form of modal can.", difficulty: "beginner" },
  { contraction: "I've", expanded: "I have", spanish: "He (presente perfecto)", example: "I've been here.", ex_es: "He estado aquí.", explanation: "Present perfect auxiliary.", difficulty: "intermediate" },
  { contraction: "I'll", expanded: "I will", spanish: "Voy a", example: "I'll help you.", ex_es: "Te ayudaré.", explanation: "Future simple auxiliary.", difficulty: "beginner" },
];

// ═══════════════════════════════════════════════════════════════════════════════
// CUANTIFICADORES
// ═══════════════════════════════════════════════════════════════════════════════

const QUANTIFIERS_DATA = [
  { word: "some", spanish: "algo / algunos / un poco", type: "indefinite", def: "A certain amount; used in positive sentences with countable and uncountable nouns.", ex: "I have some books.", example: "I have some money.", explanation: "Affirmative sentences or requests.", difficulty: "beginner" },
  { word: "any", spanish: "alguno / ninguno / cualquier", type: "indefinite", def: "One or some; used in negatives and questions.", ex: "Do you have any questions?", example: "I don't have any pen.", explanation: "Negative sentences and questions.", difficulty: "beginner" },
  { word: "many", spanish: "muchos", type: "quantifier", def: "A large number of (countable nouns only).", ex: "She has many friends.", example: "How many students are there?", explanation: "Used with countable nouns: cars, people, books.", difficulty: "beginner" },
  { word: "much", spanish: "mucho", type: "quantifier", def: "A large amount of (uncountable nouns only).", ex: "This requires much effort.", example: "How much water do you drink?", explanation: "Used with uncountable nouns: water, time, money.", difficulty: "beginner" },
  { word: "few", spanish: "pocos", type: "quantifier", def: "A small number; implies not enough.", ex: "Few people came to the party.", example: "A few minutes ago.", explanation: "'Few' = negative; 'a few' = positive.", difficulty: "intermediate" },
  { word: "little", spanish: "poco", type: "quantifier", def: "A small amount; implies not enough.", ex: "He has little time.", example: "A little sugar in my tea.", explanation: "'Little' = negative; 'a little' = positive.", difficulty: "intermediate" },
];

// ═══════════════════════════════════════════════════════════════════════════════
// ARTÍCULOS
// ═══════════════════════════════════════════════════════════════════════════════

const ARTICLES_DATA = [
  { article: "a", spanish: "un / una", type: "indefinite", def: "Before consonant sounds.", ex: "She is a doctor.", rule: "Use before words starting with consonant sounds: a book, a computer, a university.", difficulty: "beginner" },
  { article: "an", spanish: "un / una", type: "indefinite", def: "Before vowel sounds.", ex: "He is an engineer.", rule: "Use before words starting with vowel sounds: an apple, an hour, an orange.", difficulty: "beginner" },
  { article: "the", spanish: "el / la / los / las", type: "definite", def: "When the noun is specific or known.", ex: "The president announced a policy.", rule: "Use when referring to specific things: the book (which one?), the moon, the Internet.", difficulty: "beginner" },
];

// ═══════════════════════════════════════════════════════════════════════════════
// MODALES
// ═══════════════════════════════════════════════════════════════════════════════

const MODALS_DATA = [
  { modal: "CAN", neg: "can't", spanish: "puedo", color: C.green, emoji: "💪", use: "Habilidad • Posibilidad", explanation: "Ability (I can swim) or possibility (You can go now).", examples: ["I can speak French.", "Can you help me?"], difficulty: "beginner" },
  { modal: "COULD", neg: "couldn't", spanish: "podría", color: C.purple, emoji: "🌊", use: "Pasado CAN • Sugerencia", explanation: "Past ability (He could run fast) or polite request/suggestion.", examples: ["She could play piano when young.", "Could you pass the salt?"], difficulty: "intermediate" },
  { modal: "SHOULD", neg: "shouldn't", spanish: "debería", color: C.cyan, emoji: "✅", use: "Consejo • Recomendación", explanation: "Advice, recommendation, or what is right to do.", examples: ["You should study hard.", "I should sleep more."], difficulty: "intermediate" },
  { modal: "MUST", neg: "mustn't", spanish: "debo", color: C.red, emoji: "🔒", use: "Obligación fuerte", explanation: "Strong obligation or certainty; something is necessary.", examples: ["You must wear a seatbelt.", "She must be at home."], difficulty: "intermediate" },
  { modal: "MAY", neg: "may not", spanish: "puede que", color: C.yellow, emoji: "🌤️", use: "Posibilidad formal", explanation: "Formal possibility or permission.", examples: ["You may sit down.", "It may rain tomorrow."], difficulty: "intermediate" },
  { modal: "MIGHT", neg: "might not", spanish: "quizás", color: C.cyan, emoji: "🌫️", use: "Posibilidad baja", explanation: "Lower possibility; uncertain about future.", examples: ["I might go to the party.", "It might be cold tomorrow."], difficulty: "intermediate" },
];

// ═══════════════════════════════════════════════════════════════════════════════
// PREPOSICIONES
// ═══════════════════════════════════════════════════════════════════════════════

const PREPOSITIONS_DATA = [
  { prep: "in", spanish: "en / dentro", color: C.green, def: "Spaces, cities, months, seasons, years", ex: "I live in Madrid.", explanation: "I live IN a city • We are IN the office • The meeting is IN June.", difficulty: "beginner" },
  { prep: "on", spanish: "en / sobre", color: C.yellow, def: "Surfaces, days of the week, means of transport", ex: "The book is on the table.", explanation: "The book is ON the table • I met him ON Monday • We traveled ON the train.", difficulty: "beginner" },
  { prep: "at", spanish: "en (punto específico)", color: C.red, def: "Specific locations, events, times (hours)", ex: "I'll meet you at noon.", explanation: "Let's meet AT the station • I'll be AT home • The show is AT 8pm.", difficulty: "beginner" },
  { prep: "to", spanish: "hacia / a (destino)", color: C.teal, def: "Destination of movement; direction", ex: "She went to the store.", explanation: "I'm going TO the cinema • Send this TO the boss • From 9 AM TO 5 PM.", difficulty: "beginner" },
  { prep: "from", spanish: "desde / de", color: C.green, def: "Origin, starting point, source", ex: "I come from Spain.", explanation: "Where are you FROM? • The train is FROM London • Made FROM 100% cotton.", difficulty: "beginner" },
  { prep: "about", spanish: "acerca de / sobre", color: C.blue, def: "Regarding, concerning, or approximately", ex: "We talked about the project.", explanation: "What are you ABOUT? • There were ABOUT 50 people • A movie ABOUT love.", difficulty: "intermediate" },
  { prep: "with", spanish: "con", color: C.purple, def: "Accompanying, using, or having", ex: "I went with my friend.", explanation: "Come WITH me • Write WITH a pen • A house WITH a garden.", difficulty: "beginner" },
  { prep: "by", spanish: "por / mediante", color: C.pink, def: "Near, close to, or means of transport/action", ex: "The book was written by the author.", explanation: "The house BY the sea • Travel BY car • Written BY hand.", difficulty: "intermediate" },
];

// ═══════════════════════════════════════════════════════════════════════════════
// AUXILIARES
// ═══════════════════════════════════════════════════════════════════════════════

const AUXILIARIES_DATA = [
  { word: "BE", forms: ["am", "is", "are", "was", "were", "been", "being"], color: C.yellow, spanish: "ser / estar", use: "Continuous tenses • Passive voice", explanation: "Forms: am/is/are (present) • was/were (past) • Used in: I am working, The work is done.", difficulty: "beginner" },
  { word: "DO", forms: ["do", "does", "did"], color: C.green, spanish: "hacer (auxiliar)", use: "Questions • Negations • Emphasis", explanation: "Forms: do/does (present) • did (past) • Used in: Do you like it? I don't like it.", difficulty: "beginner" },
  { word: "HAVE", forms: ["have", "has", "had"], color: C.blue, spanish: "haber (auxiliar)", use: "Perfect tenses", explanation: "Forms: have/has (present) • had (past) • Used in: I have finished, She has gone.", difficulty: "intermediate" },
];

// ═══════════════════════════════════════════════════════════════════════════════
// TIEMPOS VERBALES
// ═══════════════════════════════════════════════════════════════════════════════

const VERB_TENSES_DATA = [
  { tense: "Simple Present", spanish: "Presente Simple", formula: "Subject + Verb", use: "Hechos generales, rutinas, verdades", example: "I work every day.", color: C.green, explanation: "Facts, habits, routines. She works here. I like coffee.", difficulty: "beginner" },
  { tense: "Present Continuous", spanish: "Presente Continuo", formula: "Subject + BE + Verb-ing", use: "Acciones EN PROGRESO NOW", example: "I am working now.", color: C.blue, explanation: "Right now. What is happening? I am working. She is reading.", difficulty: "beginner" },
  { tense: "Present Perfect", spanish: "Presente Perfecto", formula: "Subject + HAVE/HAS + Past Participle", use: "Experiencia de vida / Desde hace tiempo", example: "I have worked here 5 years.", color: C.yellow, explanation: "Life experience. I have been there. She has finished.", difficulty: "intermediate" },
  { tense: "Simple Past", spanish: "Pasado Simple", formula: "Subject + Verb (past)", use: "Acciones completadas", example: "I worked yesterday.", color: C.red, explanation: "Finished actions. I went home. She called yesterday.", difficulty: "beginner" },
  { tense: "Past Continuous", spanish: "Pasado Continuo", formula: "Subject + WAS/WERE + Verb-ing", use: "En progreso en el pasado", example: "I was working when you called.", color: C.cyan, explanation: "Action in progress at a past time. I was sleeping when he arrived.", difficulty: "intermediate" },
  { tense: "Simple Future", spanish: "Futuro Simple", formula: "Subject + WILL + Verb", use: "Acciones futuras", example: "I will work tomorrow.", color: C.orange, explanation: "Future actions. I will go. She will finish tomorrow.", difficulty: "beginner" },
];

// ═══════════════════════════════════════════════════════════════════════════════
// PHRASAL VERBS
// ═══════════════════════════════════════════════════════════════════════════════

const PHRASAL_VERBS_DATA = [
  { phrasal: "Break down", spanish: "Descomponer", meaning: "To stop working or to analyze", example: "The car broke down.", ex_es: "El auto se descompuso.", explanation: "Mechanical failure or to separate into parts.", difficulty: "intermediate" },
  { phrasal: "Break up", spanish: "Terminar", meaning: "To end a relationship", example: "They broke up.", ex_es: "Terminaron.", explanation: "End of romantic relationship.", difficulty: "intermediate" },
  { phrasal: "Bring up", spanish: "Educar", meaning: "To raise children; to mention a topic", example: "She brought up her kids.", ex_es: "Ella educó a sus hijos.", explanation: "Raising or mentioning something.", difficulty: "intermediate" },
  { phrasal: "Come back", spanish: "Volver", meaning: "To return", example: "I'll come back tomorrow.", ex_es: "Volveré mañana.", explanation: "Return to a place.", difficulty: "beginner" },
  { phrasal: "Figure out", spanish: "Averiguar", meaning: "To understand or solve", example: "I figured out the problem.", ex_es: "Entendí el problema.", explanation: "To solve or understand something.", difficulty: "intermediate" },
  { phrasal: "Give up", spanish: "Rendirse", meaning: "To stop trying", example: "Don't give up.", ex_es: "No te rindas.", explanation: "To stop attempting something.", difficulty: "beginner" },
  { phrasal: "Go out", spanish: "Salir", meaning: "To leave the house", example: "We're going out tonight.", ex_es: "Salimos esta noche.", explanation: "Exit a place socially.", difficulty: "beginner" },
  { phrasal: "Grow up", spanish: "Crecer", meaning: "To become an adult", example: "Where did you grow up?", ex_es: "¿Dónde creciste?", explanation: "Become mature.", difficulty: "beginner" },
  { phrasal: "Keep up", spanish: "Mantenerse al día", meaning: "To maintain pace", example: "Keep up with technology.", ex_es: "Mantente al día.", explanation: "Stay current with.", difficulty: "intermediate" },
  { phrasal: "Look for", spanish: "Buscar", meaning: "To search for", example: "What are you looking for?", ex_es: "¿Qué buscas?", explanation: "Search or seek.", difficulty: "beginner" },
  { phrasal: "Make up", spanish: "Reconciliarse", meaning: "To reconcile", example: "They made up.", ex_es: "Se reconciliaron.", explanation: "End a conflict.", difficulty: "intermediate" },
  { phrasal: "Pick up", spanish: "Recoger", meaning: "To collect or to learn", example: "Can you pick me up?", ex_es: "¿Puedes recogerme?", explanation: "Collect something/someone.", difficulty: "beginner" },
  { phrasal: "Run out", spanish: "Agotarse", meaning: "To exhaust supply", example: "We've run out of milk.", ex_es: "Se acabó la leche.", explanation: "Supply is finished.", difficulty: "intermediate" },
  { phrasal: "Take off", spanish: "Despegar", meaning: "To leave ground; remove", example: "The plane takes off.", ex_es: "El avión despega.", explanation: "Aircraft departure or remove clothing.", difficulty: "beginner" },
  { phrasal: "Turn off", spanish: "Apagar", meaning: "To switch off", example: "Turn off the light.", ex_es: "Apaga la luz.", explanation: "Deactivate or extinguish.", difficulty: "beginner" },
];

// ═══════════════════════════════════════════════════════════════════════════════
// NAVEGACIÓN
// ═══════════════════════════════════════════════════════════════════════════════

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

// ═══════════════════════════════════════════════════════════════════════════════
// STATE MANAGEMENT + LOCALSTORAGE
// ═══════════════════════════════════════════════════════════════════════════════

let currentTab = "phrases";
let appState = {
  searchQuery: "",
  selectedCategory: "all",
  expandedItems: [],
  selectedWord: null,
  theme: "dark",
  favorites: [],
  searchHistory: [],
  statistics: { wordsLearned: 0, questionsAnswered: 0, quizScore: 0, hoursSpent: 0 },
  quizMode: false,
  quizProgress: 0,
  flashcardMode: false,
  currentFlashcardIndex: 0,
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

// ═══════════════════════════════════════════════════════════════════════════════
// LOCALSTORAGE FUNCTIONS
// ═══════════════════════════════════════════════════════════════════════════════

function saveState() {
  localStorage.setItem("wordmasterState", JSON.stringify(appState));
}

function loadState() {
  const saved = localStorage.getItem("wordmasterState");
  if (saved) {
    appState = { ...appState, ...JSON.parse(saved) };
  }
}

function addToFavorites(item, type) {
  const favorite = { item, type, date: new Date().toISOString() };
  if (!appState.favorites.some(f => f.item === item && f.type === type)) {
    appState.favorites.push(favorite);
    saveState();
    showNotification(`✅ Added to favorites!`);
  }
}

function removeFromFavorites(item, type) {
  appState.favorites = appState.favorites.filter(f => !(f.item === item && f.type === type));
  saveState();
  showNotification(`❌ Removed from favorites`);
}

function isFavorite(item, type) {
  return appState.favorites.some(f => f.item === item && f.type === type);
}

function addToSearchHistory(query) {
  if (query && query.trim()) {
    appState.searchHistory = [query, ...appState.searchHistory.filter(q => q !== query)].slice(0, 10);
    saveState();
  }
}

function updateStatistics(wordsLearned = 0, questionsAnswered = 0, quizScore = 0, hoursSpent = 0) {
  appState.statistics.wordsLearned += wordsLearned;
  appState.statistics.questionsAnswered += questionsAnswered;
  appState.statistics.quizScore += quizScore;
  appState.statistics.hoursSpent += hoursSpent;
  saveState();
}

// ═══════════════════════════════════════════════════════════════════════════════
// NOTIFICATION SYSTEM
// ═══════════════════════════════════════════════════════════════════════════════

function showNotification(message, duration = 2000) {
  const notif = document.createElement("div");
  notif.className = "notification";
  notif.textContent = message;
  notif.style.position = "fixed";
  notif.style.bottom = "20px";
  notif.style.right = "20px";
  notif.style.background = C.card2;
  notif.style.border = `1px solid ${C.green}`;
  notif.style.color = C.green;
  notif.style.padding = "10px 16px";
  notif.style.borderRadius = "8px";
  notif.style.zIndex = "10000";
  notif.style.animation = "slideIn 0.3s ease";
  document.body.appendChild(notif);
  
  setTimeout(() => {
    notif.style.animation = "slideOut 0.3s ease";
    setTimeout(() => notif.remove(), 300);
  }, duration);
}

// ═══════════════════════════════════════════════════════════════════════════════
// DARK/LIGHT MODE
// ═══════════════════════════════════════════════════════════════════════════════

function toggleTheme() {
  appState.theme = appState.theme === "dark" ? "light" : "dark";
  applyTheme();
  saveState();
  showNotification(`🌙 Theme: ${appState.theme.toUpperCase()}`);
}

function applyTheme() {
  const root = document.documentElement;
  if (appState.theme === "light") {
    root.style.setProperty("--bg", "#f5f5f5");
    root.style.setProperty("--card", "#ffffff");
    root.style.setProperty("--card2", "#f9f9f9");
    root.style.setProperty("--border", "#e0e0e0");
    root.style.setProperty("--text", "#1a1a1a");
    root.style.setProperty("--muted", "#777777");
    root.style.setProperty("--vdim", "#eeeeee");
  } else {
    root.style.setProperty("--bg", "#06060e");
    root.style.setProperty("--card", "#0b0b1a");
    root.style.setProperty("--card2", "#0e0e20");
    root.style.setProperty("--border", "#14142a");
    root.style.setProperty("--text", "#e8e2d8");
    root.style.setProperty("--muted", "#4a5568");
    root.style.setProperty("--vdim", "#12121e");
  }
}

// ═══════════════════════════════════════════════════════════════════════════════
// UTILIDADES
// ═══════════════════════════════════════════════════════════════════════════════

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
  
  // Theme toggle button
  const themeBtn = document.createElement("button");
  themeBtn.className = "nav-button";
  themeBtn.innerHTML = appState.theme === "dark" ? "🌙" : "☀️";
  themeBtn.onclick = toggleTheme;
  themeBtn.title = "Toggle Theme";
  navBar.appendChild(themeBtn);
  
  NAV_ITEMS.forEach(item => {
    const btn = document.createElement("button");
    btn.className = `nav-button ${currentTab === item.id ? "active" : ""}`;
    btn.style.color = currentTab === item.id ? item.color : "#202035";
    btn.style.borderBottomColor = currentTab === item.id ? item.color : "transparent";
    btn.innerHTML = `${item.label}<span class="nav-button-label">${item.full}</span>`;
    btn.onclick = () => switchTab(item.id);
    navBar.appendChild(btn);
  });
  
  // Settings button
  const settingsBtn = document.createElement("button");
  settingsBtn.className = "nav-button";
  settingsBtn.innerHTML = "⚙️<span class='nav-button-label'>Settings</span>";
  settingsBtn.onclick = () => showSettingsModal();
  navBar.appendChild(settingsBtn);
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

// ═══════════════════════════════════════════════════════════════════════════════
// QUIZ SYSTEM
// ═══════════════════════════════════════════════════════════════════════════════

function startQuiz() {
  appState.quizMode = true;
  appState.quizProgress = 0;
  showQuizQuestion();
}

function showQuizQuestion() {
  const container = document.getElementById("mainContent");
  container.innerHTML = "";
  
  const randomWord = WORDS_DATA[Math.floor(Math.random() * WORDS_DATA.length)];
  const quiz = {
    word: randomWord.word,
    spanish: randomWord.spanish,
    correctForm: randomWord.forms.past,
    options: [randomWord.forms.past, "wrongform", "badpast", "notright"]
      .sort(() => Math.random() - 0.5)
  };
  
  const quizBox = createElement("div", "card");
  quizBox.style.marginTop = "20px";
  quizBox.innerHTML = `
    <div style="font-size: 14px; color: ${C.gold}; margin-bottom: 16px;">
      ✅ Question ${appState.quizProgress + 1} / 10
    </div>
    <div style="font-size: 16px; font-weight: 700; color: ${C.text}; margin-bottom: 12px;">
      What is the past tense of "<strong style="color: ${C.cyan};">${quiz.word}</strong>"?
    </div>
    <div style="color: ${C.muted}; margin-bottom: 16px; font-size: 12px;">
      🇲🇽 ${quiz.spanish}
    </div>
  `;
  
  const optionsDiv = createElement("div");
  quiz.options.forEach((option, idx) => {
    const btn = document.createElement("button");
    btn.className = "pill";
    btn.style.width = "100%";
    btn.style.marginBottom = "8px";
    btn.style.padding = "12px";
    btn.style.fontSize = "13px";
    btn.textContent = option;
    btn.onclick = () => {
      const isCorrect = option === quiz.correctForm;
      if (isCorrect) {
        appState.quizProgress++;
        updateStatistics(0, 1, 1, 0);
        if (appState.quizProgress >= 10) {
          showQuizResults();
        } else {
          showQuizQuestion();
        }
        showNotification("✅ Correct!");
      } else {
        showNotification(`❌ Wrong! Correct: ${quiz.correctForm}`);
      }
    };
    optionsDiv.appendChild(btn);
  });
  
  quizBox.appendChild(optionsDiv);
  container.appendChild(quizBox);
}

function showQuizResults() {
  const container = document.getElementById("mainContent");
  container.innerHTML = "";
  
  const percentage = (appState.quizProgress / 10) * 100;
  const resultsBox = createElement("div", "card");
  resultsBox.style.textAlign = "center";
  resultsBox.innerHTML = `
    <div style="font-size: 24px; color: ${C.gold}; margin-bottom: 12px;">🎉 QUIZ COMPLETED!</div>
    <div style="font-size: 20px; color: ${C.green}; margin-bottom: 16px; font-weight: 700;">
      ${appState.quizProgress} / 10 Correct
    </div>
    <div style="font-size: 16px; color: ${C.text}; margin-bottom: 20px;">
      Score: ${percentage.toFixed(1)}%
    </div>
    <button class="pill" onclick="switchTab('dictionary')">👈 Back to Dictionary</button>
  `;
  container.appendChild(resultsBox);
  appState.quizMode = false;
}

// ═══════════════════════════════════════════════════════════════════════════════
// FLASHCARD SYSTEM
// ═══════════════════════════════════════════════════════════════════════════════

function startFlashcards() {
  appState.flashcardMode = true;
  appState.currentFlashcardIndex = 0;
  showFlashcard();
}

function showFlashcard() {
  const container = document.getElementById("mainContent");
  container.innerHTML = "";
  
  const card = WORDS_DATA[appState.currentFlashcardIndex];
  const flashcardDiv = createElement("div");
  flashcardDiv.style.marginTop = "20px";
  
  const flashcard = createElement("div", "flashcard-flip");
  flashcard.style.perspective = "1000px";
  flashcard.style.width = "100%";
  flashcard.style.height = "300px";
  flashcard.style.marginBottom = "20px";
  flashcard.innerHTML = `
    <div style="
      background: linear-gradient(135deg, ${C.gold}33, ${C.purple}33);
      border: 2px solid ${C.gold};
      border-radius: 16px;
      width: 100%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      text-align: center;
      padding: 20px;
    " onclick="this.style.opacity = this.style.opacity === '0.5' ? '1' : '0.5';">
      <div>
        <div style="font-size: 14px; color: ${C.muted}; margin-bottom: 16px;">📝 WORD</div>
        <div style="font-size: 32px; font-weight: 900; color: ${C.gold}; margin-bottom: 20px;">${card.word}</div>
        <div style="font-size: 12px; color: ${C.text};">${card.spanish}</div>
        <div style="font-size: 10px; color: ${C.muted}; margin-top: 12px;">Click to reveal definition</div>
      </div>
    </div>
  `;
  flashcardDiv.appendChild(flashcard);
  
  const defBox = createElement("div", "description-box");
  defBox.innerHTML = `📖 <strong>${card.def}</strong>`;
  flashcardDiv.appendChild(defBox);
  
  const navDiv = createElement("div");
  navDiv.style.display = "flex";
  navDiv.style.gap = "8px";
  navDiv.style.marginTop = "16px";
  
  const prevBtn = document.createElement("button");
  prevBtn.className = "pill";
  prevBtn.textContent = "← Previous";
  prevBtn.onclick = () => {
    appState.currentFlashcardIndex = Math.max(0, appState.currentFlashcardIndex - 1);
    showFlashcard();
  };
  navDiv.appendChild(prevBtn);
  
  const nextBtn = document.createElement("button");
  nextBtn.className = "pill";
  nextBtn.textContent = "Next →";
  nextBtn.onclick = () => {
    appState.currentFlashcardIndex = Math.min(WORDS_DATA.length - 1, appState.currentFlashcardIndex + 1);
    showFlashcard();
  };
  navDiv.appendChild(nextBtn);
  
  flashcardDiv.appendChild(navDiv);
  container.appendChild(flashcardDiv);
}

// ═══════════════════════════════════════════════════════════════════════════════
// SETTINGS MODAL
// ═══════════════════════════════════════════════════════════════════════════════

function showSettingsModal() {
  const modal = document.createElement("div");
  modal.className = "modal";
  modal.style.position = "fixed";
  modal.style.top = "0";
  modal.style.left = "0";
  modal.style.width = "100%";
  modal.style.height = "100%";
  modal.style.background = "rgba(0,0,0,0.7)";
  modal.style.display = "flex";
  modal.style.alignItems = "center";
  modal.style.justifyContent = "center";
  modal.style.zIndex = "9999";
  
  const content = createElement("div", "card");
  content.style.width = "90%";
  content.style.maxWidth = "500px";
  content.style.maxHeight = "80vh";
  content.style.overflowY = "auto";
  
  content.innerHTML = `
    <div style="font-size: 18px; color: ${C.gold}; margin-bottom: 16px; font-weight: 700;">⚙️ Settings</div>
    
    <div style="margin-bottom: 16px;">
      <div style="color: ${C.muted}; font-size: 12px; margin-bottom: 8px;">📊 STATISTICS</div>
      <div style="background: ${C.card2}; padding: 12px; border-radius: 8px; font-size: 12px;">
        <div>📚 Words Learned: <strong style="color: ${C.gold};">${appState.statistics.wordsLearned}</strong></div>
        <div>❓ Questions Answered: <strong style="color: ${C.gold};">${appState.statistics.questionsAnswered}</strong></div>
        <div>🎯 Quiz Score: <strong style="color: ${C.gold};">${appState.statistics.quizScore}</strong></div>
        <div>⏱️ Hours Spent: <strong style="color: ${C.gold};">${appState.statistics.hoursSpent}</strong></div>
      </div>
    </div>
    
    <div style="margin-bottom: 16px;">
      <div style="color: ${C.muted}; font-size: 12px; margin-bottom: 8px;">❤️ FAVORITES (${appState.favorites.length})</div>
      <div style="background: ${C.card2}; padding: 12px; border-radius: 8px; max-height: 200px; overflow-y: auto;">
        ${appState.favorites.length === 0 ? '<div style="color: ' + C.muted + ';">No favorites yet</div>' : appState.favorites.map(f => `
          <div style="padding: 6px; border-bottom: 1px solid ${C.border}; font-size: 11px;">
            ${f.item} <span style="color: ${C.muted};">(${f.type})</span>
          </div>
        `).join('')}
      </div>
    </div>
    
    <div style="margin-bottom: 16px;">
      <div style="color: ${C.muted}; font-size: 12px; margin-bottom: 8px;">🔍 SEARCH HISTORY</div>
      <div style="background: ${C.card2}; padding: 12px; border-radius: 8px; max-height: 150px; overflow-y: auto;">
        ${appState.searchHistory.length === 0 ? '<div style="color: ' + C.muted + ';">No searches yet</div>' : appState.searchHistory.map(q => `
          <div style="padding: 6px; border-bottom: 1px solid ${C.border}; font-size: 11px; cursor: pointer;" onclick="appState.searchQuery='${q}'; switchTab('dictionary');">
            ${q}
          </div>
        `).join('')}
      </div>
    </div>
    
    <div style="display: flex; gap: 8px;">
      <button class="pill" onclick="exportData()">📥 Export Data</button>
      <button class="pill" onclick="clearAllData()">🗑️ Clear All</button>
      <button class="pill" onclick="document.querySelector('.modal').remove()">❌ Close</button>
    </div>
  `;
  
  modal.appendChild(content);
  document.body.appendChild(modal);
}

// ═══════════════════════════════════════════════════════════════════════════════
// EXPORT & CLEAR DATA
// ═══════════════════════════════════════════════════════════════════════════════

function exportData() {
  const exportData = {
    statistics: appState.statistics,
    favorites: appState.favorites,
    searchHistory: appState.searchHistory,
    exportDate: new Date().toISOString()
  };
  
  const dataStr = JSON.stringify(exportData, null, 2);
  const dataBlob = new Blob([dataStr], { type: "application/json" });
  const url = URL.createObjectURL(dataBlob);
  const link = document.createElement("a");
  link.href = url;
  link.download = `wordmaster-export-${Date.now()}.json`;
  link.click();
  
  showNotification("📥 Data exported!");
}

function clearAllData() {
  if (confirm("⚠️ This will delete all your data. Are you sure?")) {
    appState.favorites = [];
    appState.searchHistory = [];
    appState.statistics = { wordsLearned: 0, questionsAnswered: 0, quizScore: 0, hoursSpent: 0 };
    saveState();
    showNotification("🗑️ All data cleared");
    document.querySelector(".modal").remove();
  }
}

// ═══════════════════════════════════════════════════════════════════════════════
// ADVANCED SEARCH
// ═══════════════════════════════════════════════════════════════════════════════

function filterByDifficulty(difficulty) {
  return WORDS_DATA.filter(w => w.difficulty === difficulty);
}

function filterByFrequency(freq) {
  return WORDS_DATA.filter(w => w.freq === freq);
}

function filterByCategory(category) {
  return WORDS_DATA.filter(w => w.cat === category);
}

// ═══════════════════════════════════════════════════════════════════════════════
// PRONUNCIATION
// ═══════════════════════════════════════════════════════════════════════════════

function speakWord(word) {
  if ('speechSynthesis' in window) {
    const utterance = new SpeechSynthesisUtterance(word);
    utterance.lang = 'en-US';
    utterance.rate = 0.8;
    window.speechSynthesis.speak(utterance);
  } else {
    showNotification("🔔 Speech synthesis not supported");
  }
}

// ═══════════════════════════════════════════════════════════════════════════════
// RENDER FUNCTIONS
// ═══════════════════════════════════════════════════════════════════════════════

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
  }
}

// ═══════════════════════════════════════════════════════════════════════════════
// 1. FRASES (PHRASES)
// ═══════════════════════════════════════════════════════════════════════════════

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
    const isFav = isFavorite(phrase.phrase, "phrase");
    titleDiv.innerHTML = `<span class="card-title" style="color: ${C.pink};">"${phrase.phrase}"</span>
      <button class="fav-btn" style="background: none; border: none; cursor: pointer; font-size: 16px;" onclick="event.stopPropagation(); ${isFav ? `removeFromFavorites('${phrase.phrase}', 'phrase')` : `addToFavorites('${phrase.phrase}', 'phrase')`}; renderPhrases(document.getElementById('mainContent'));">
        ${isFav ? '❤️' : '🤍'}
      </button>`;
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
      content.style.borderTop = `1px solid ${C.pink}33`;
      
      const usageBox = createElement("div", "description-box", `📌 ${phrase.usage}`);
      content.appendChild(usageBox);
      
      const freqBadge = createElement("div", "section-label");
      freqBadge.style.color = C.yellow;
      freqBadge.textContent = `📊 Frequency: ${phrase.freq}`;
      content.appendChild(freqBadge);
      
      const speakBtn = document.createElement("button");
      speakBtn.className = "pill";
      speakBtn.textContent = "🔊 Pronounce";
      speakBtn.onclick = () => speakWord(phrase.phrase);
      content.appendChild(speakBtn);
      
      card.appendChild(content);
    }
    wrapper.appendChild(card);
  });
  
  container.appendChild(wrapper);
}

// ═══════════════════════════════════════════════════════════════════════════════
// 2. DICCIONARIO (DICTIONARY)
// ═══════════════════════════════════════════════════════════════════════════════

function renderDictionary(container) {
  const wrapper = createElement("div");
  
  const controlsDiv = createElement("div");
  controlsDiv.style.marginBottom = "12px";
  
  const searchInput = createElement("input");
  searchInput.type = "text";
  searchInput.placeholder = "🔍 Search word...";
  searchInput.value = appState.searchQuery;
  searchInput.onchange = (e) => { appState.searchQuery = e.target.value; addToSearchHistory(e.target.value); renderDictionary(container); };
  searchInput.oninput = (e) => { appState.searchQuery = e.target.value; renderDictionary(container); };
  controlsDiv.appendChild(searchInput);
  
  const filterGrid = createElement("div", "btn-grid");
  ["beginner", "intermediate", "advanced"].forEach(diff => {
    const btn = document.createElement("button");
    btn.className = "pill small";
    btn.textContent = diff.charAt(0).toUpperCase() + diff.slice(1);
    btn.onclick = () => {
      const filtered = filterByDifficulty(diff);
      renderFilteredDictionary(container, filtered, `${diff} Level`);
    };
    filterGrid.appendChild(btn);
  });
  
  controlsDiv.appendChild(filterGrid);
  wrapper.appendChild(controlsDiv);
  
  const filtered = WORDS_DATA.filter(w => 
    w.word.toLowerCase().includes(appState.searchQuery.toLowerCase()) || 
    w.spanish.toLowerCase().includes(appState.searchQuery.toLowerCase())
  );
  
  const countEl = createElement("div", "text-small text-muted", `${filtered.length}/${WORDS_DATA.length} words`);
  wrapper.appendChild(countEl);
  
  // Quiz and Flashcard buttons
  const actionGrid = createElement("div", "btn-grid");
  const quizBtn = document.createElement("button");
  quizBtn.className = "pill";
  quizBtn.textContent = "🎯 Start Quiz";
  quizBtn.onclick = startQuiz;
  actionGrid.appendChild(quizBtn);
  
  const flashBtn = document.createElement("button");
  flashBtn.className = "pill";
  flashBtn.textContent = "📇 Flashcards";
  flashBtn.onclick = startFlashcards;
  actionGrid.appendChild(flashBtn);
  
  wrapper.appendChild(actionGrid);
  
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
    const isFav = isFavorite(word.word, "word");
    titleDiv.innerHTML = `<span class="card-title" style="color: ${C.gold}">${word.word}</span>
      <button class="fav-btn" style="background: none; border: none; cursor: pointer; font-size: 16px;" onclick="event.stopPropagation(); ${isFav ? `removeFromFavorites('${word.word}', 'word')` : `addToFavorites('${word.word}', 'word')`}; renderDictionary(document.getElementById('mainContent'));">
        ${isFav ? '❤️' : '🤍'}
      </button>`;
    header.appendChild(titleDiv);
    
    const toggleIcon = createElement("span", "toggle-icon", isExpanded ? "▲" : "▼");
    header.appendChild(toggleIcon);
    card.appendChild(header);
    
    const subtitle = createElement("div", "card-subtitle", `🇲🇽 ${word.spanish} • ${word.cat} • ${word.difficulty}`);
    card.appendChild(subtitle);
    
    if (isExpanded) {
      const content = createElement("div");
      content.style.marginTop = "14px";
      
      const defBox = createElement("div", "description-box", `📖 ${word.def}`);
      content.appendChild(defBox);
      
      const speakBtn = document.createElement("button");
      speakBtn.className = "pill";
      speakBtn.textContent = "🔊 Pronounce";
      speakBtn.style.marginBottom = "10px";
      speakBtn.onclick = () => speakWord(word.word);
      content.appendChild(speakBtn);
      
      if (word.forms && word.forms.base !== "—") {
        const formsSection = createElement("div");
        formsSection.innerHTML = `<div class="section-label">📋 FORMS</div>`;
        const formsTable = createElement("table");
        formsTable.innerHTML = `
          <tr><th>Base</th><th>Past</th><th>P.P.</th><th>-ing</th><th>3ª Pers.</th></tr>
          <tr><td>${word.forms.base}</td><td>${word.forms.past}</td><td>${word.forms.pp}</td><td>${word.forms.ing}</td><td>${word.forms.s}</td></tr>
        `;
        formsSection.appendChild(formsTable);
        content.appendChild(formsSection);
      }
      
      card.appendChild(content);
    }
    wrapper.appendChild(card);
  });
  
  container.appendChild(wrapper);
}

function renderFilteredDictionary(container, filtered, title) {
  container.innerHTML = "";
  const wrapper = createElement("div");
  const titleEl = createElement("div", "section-label", `📚 ${title}`);
  wrapper.appendChild(titleEl);
  
  filtered.forEach((word, idx) => {
    const card = createElement("div", "card");
    card.innerHTML = `<span class="card-title" style="color: ${C.gold}">${word.word}</span>
      <div class="card-subtitle" style="margin-top: 4px;">🇲🇽 ${word.spanish}</div>`;
    wrapper.appendChild(card);
  });
  
  container.appendChild(wrapper);
}

// ═══════════════════════════════════════════════════════════════════════════════
// 3. PHRASE BUILDER (ULTRA POTENTE)
// ═══════════════════════════════════════════════════════════════════════════════

function renderPhraseBuilder(container) {
  const wrapper = createElement("div");
  
  const descBox = createElement("div", "description-box");
  descBox.innerHTML = `📌 Build complex sentences using: <strong>Pronouns • Auxiliaries • Modals • Phrasal Verbs • Verb Tenses • Contractions • Quantifiers • Articles • Prepositions</strong>`;
  wrapper.appendChild(descBox);
  
  const controls = createElement("div");
  
  // PRONOUNS
  const pronounDiv = createElement("div", "control-section");
  pronounDiv.innerHTML = `<div class="control-title">👤 PRONOUN (Required)</div>`;
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
  
  // VERB TENSE
  const tenseDiv = createElement("div", "control-section");
  tenseDiv.innerHTML = `<div class="control-title">⏰ VERB TENSE</div>`;
  const tenseBtns = createElement("div", "btn-grid");
  VERB_TENSES_DATA.forEach(t => {
    const btn = document.createElement("button");
    btn.className = `pill ${appState.phraseBuilderState.verbTense === t.tense ? "active" : ""}`;
    btn.textContent = t.tense.split(" ")[0];
    btn.title = t.use;
    btn.onclick = () => { appState.phraseBuilderState.verbTense = t.tense; updateSentenceDisplay(container); };
    tenseBtns.appendChild(btn);
  });
  tenseDiv.appendChild(tenseBtns);
  controls.appendChild(tenseDiv);
  
  // MODALS
  const modalDiv = createElement("div", "control-section");
  modalDiv.innerHTML = `<div class="control-title">⚡ MODAL (Optional)</div>`;
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
  
  // AUXILIARY
  const auxDiv = createElement("div", "control-section");
  auxDiv.innerHTML = `<div class="control-title">🅰️ AUXILIARY (Optional)</div>`;
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
  
  // PHRASAL VERBS
  const phrasalDiv = createElement("div", "control-section");
  phrasalDiv.innerHTML = `<div class="control-title">🔗 PHRASAL VERB (Optional)</div>`;
  const phrasalBtns = createElement("div", "btn-grid");
  const phrasalOptions = ["None", ...PHRASAL_VERBS_DATA.map(pv => pv.phrasal)];
  phrasalOptions.forEach(pv => {
    const btn = document.createElement("button");
    btn.className = `pill ${appState.phraseBuilderState.phrasal === (pv === "None" ? null : pv) ? "active" : ""}`;
    btn.textContent = pv;
    btn.onclick = () => { appState.phraseBuilderState.phrasal = pv === "None" ? null : pv; updateSentenceDisplay(container); };
    phrasalBtns.appendChild(btn);
  });
  phrasalDiv.appendChild(phrasalBtns);
  controls.appendChild(phrasalDiv);
  
  // CONTRACTION
  const contrDiv = createElement("div", "control-section");
  contrDiv.innerHTML = `<div class="control-title">〜 CONTRACTION (Optional)</div>`;
  const contrBtns = createElement("div", "btn-grid");
  const contrOptions = ["None", ...CONTRACTIONS_DATA.map(c => c.contraction)];
  contrOptions.forEach(c => {
    const btn = document.createElement("button");
    btn.className = `pill ${appState.phraseBuilderState.contraction === (c === "None" ? null : c) ? "active" : ""}`;
    btn.textContent = c;
    btn.onclick = () => { appState.phraseBuilderState.contraction = c === "None" ? null : c; updateSentenceDisplay(container); };
    contrBtns.appendChild(btn);
  });
  contrDiv.appendChild(contrBtns);
  controls.appendChild(contrDiv);
  
  // QUANTIFIERS
  const quantDiv = createElement("div", "control-section");
  quantDiv.innerHTML = `<div class="control-title">#️⃣ QUANTIFIER (Optional)</div>`;
  const quantBtns = createElement("div", "btn-grid");
  const quantOptions = ["None", ...QUANTIFIERS_DATA.map(q => q.word)];
  quantOptions.forEach(q => {
    const btn = document.createElement("button");
    btn.className = `pill ${appState.phraseBuilderState.quantifier === (q === "None" ? null : q) ? "active" : ""}`;
    btn.textContent = q;
    btn.onclick = () => { appState.phraseBuilderState.quantifier = q === "None" ? null : q; updateSentenceDisplay(container); };
    quantBtns.appendChild(btn);
  });
  quantDiv.appendChild(quantBtns);
  controls.appendChild(quantDiv);
  
  // ARTICLES
  const artDiv = createElement("div", "control-section");
  artDiv.innerHTML = `<div class="control-title">🔤 ARTICLE (Optional)</div>`;
  const artBtns = createElement("div", "btn-grid");
  const artOptions = ["None", ...ARTICLES_DATA.map(a => a.article)];
  artOptions.forEach(a => {
    const btn = document.createElement("button");
    btn.className = `pill ${appState.phraseBuilderState.article === (a === "None" ? null : a) ? "active" : ""}`;
    btn.textContent = a;
    btn.onclick = () => { appState.phraseBuilderState.article = a === "None" ? null : a; updateSentenceDisplay(container); };
    artBtns.appendChild(btn);
  });
  artDiv.appendChild(artBtns);
  controls.appendChild(artDiv);
  
  // PREPOSITIONS
  const prepDiv = createElement("div", "control-section");
  prepDiv.innerHTML = `<div class="control-title">📍 PREPOSITION (Optional)</div>`;
  const prepBtns = createElement("div", "btn-grid");
  const prepOptions = ["None", ...PREPOSITIONS_DATA.map(p => p.prep)];
  prepOptions.forEach(p => {
    const btn = document.createElement("button");
    btn.className = `pill ${appState.phraseBuilderState.preposition === (p === "None" ? null : p) ? "active" : ""}`;
    btn.textContent = p;
    btn.onclick = () => { appState.phraseBuilderState.preposition = p === "None" ? null : p; updateSentenceDisplay(container); };
    prepBtns.appendChild(btn);
  });
  prepDiv.appendChild(prepBtns);
  controls.appendChild(prepDiv);
  
  wrapper.appendChild(controls);
  
  const sentenceBox = createElement("div", "sentence-box");
  sentenceBox.innerHTML = `<div class="sentence-label">Your Sentence</div><div class="sentence-text" id="builtSentence">I speak English fluently.</div>`;
  wrapper.appendChild(sentenceBox);
  
  container.appendChild(wrapper);
  updateSentenceDisplay(container);
}

function updateSentenceDisplay(container) {
  const state = appState.phraseBuilderState;
  const pronoun = state.pronoun || "I";
  const modal = state.modal;
  const auxiliary = state.auxiliary;
  const tense = state.verbTense;
  const phrasal = state.phrasal || "speak";
  const article = state.article;
  const quantifier = state.quantifier;
  const preposition = state.preposition;
  
  let sentence = pronoun;
  
  if (modal) {
    sentence += ` ${modal.toLowerCase()}`;
  } else if (auxiliary) {
    sentence += ` ${auxiliary.toLowerCase()}`;
  } else {
    if (tense === "Present Continuous") {
      sentence += ` ${pronoun === "I" || pronoun === "It" ? "am" : pronoun === "He" || pronoun === "She" ? "is" : "are"}`;
    } else if (tense === "Simple Past") {
      sentence += ` ${pronoun === "I" ? "was" : "were"}`;
    } else if (tense === "Simple Future") {
      sentence += ` will`;
    } else if (tense === "Present Perfect") {
      sentence += ` ${pronoun === "He" || pronoun === "She" || pronoun === "It" ? "has" : "have"}`;
    } else {
      sentence += ` ${pronoun === "He" || pronoun === "She" || pronoun === "It" ? "does" : "do"}`;
    }
  }
  
  sentence += ` ${phrasal}`;
  
  if (quantifier) sentence += ` ${quantifier}`;
  if (article) sentence += ` ${article}`;
  sentence += ` thing`;
  if (preposition) sentence += ` ${preposition} the place`;
  
  sentence += ".";
  
  const sentenceEl = document.getElementById("builtSentence");
  if (sentenceEl) sentenceEl.textContent = sentence;
}

// ═══════════════════════════════════════════════════════════════════════════════
// 4. WORD CONJUGATOR
// ═══════════════════════════════════════════════════════════════════════════════

function renderWordConjugator(container) {
  const wrapper = createElement("div");
  const descBox = createElement("div", "description-box");
  descBox.innerHTML = `📌 Select a word from the dictionary to see all conjugations with every pronoun.`;
  wrapper.appendChild(descBox);
  
  const wordSelector = createElement("div", "btn-grid");
  WORDS_DATA.forEach((word) => {
    if (word.forms && word.forms.base !== "—") {
      const btn = document.createElement("button");
      btn.className = "pill";
      btn.textContent = word.word;
      btn.onclick = () => renderConjugationDetail(container, word);
      wordSelector.appendChild(btn);
    }
  });
  wrapper.appendChild(wordSelector);
  
  if (WORDS_DATA.length > 0 && WORDS_DATA[0].forms && WORDS_DATA[0].forms.base !== "—") {
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
  
  const subjectHeader = createElement("div", "section-label", "👤 SUBJECT PRONOUNS");
  conjugationGrid.appendChild(subjectHeader);
  
  ["I", "You", "He", "She", "It", "We", "They"].forEach((pronoun) => {
    const row = createElement("div", "conjugation-row");
    row.innerHTML = `<div class="conjugation-pronoun">${pronoun}</div><div class="conjugation-form">${pronoun} ${word.forms.base}</div>`;
    conjugationGrid.appendChild(row);
  });
  
  wrapper.appendChild(conjugationGrid);
  
  container.innerHTML = "";
  container.appendChild(wrapper);
}

// ═══════════════════════════════════════════════════════════════════════════════
// 5-12. REMAINING SECTIONS (Phrasal Verbs, Tenses, Contractions, Modals, etc.)
// ═══════════════════════════════════════════════════════════════════════════════

function renderPhrasalVerbs(container) {
  const wrapper = createElement("div");
  const descBox = createElement("div", "description-box");
  descBox.innerHTML = `📌 <strong>Phrasal Verbs:</strong> Combination of verb + particle with new meanings. Example: "break down" = to stop working.`;
  wrapper.appendChild(descBox);
  
  PHRASAL_VERBS_DATA.forEach((pv, idx) => {
    const card = createElement("div", "card");
    const isExpanded = appState.expandedItems.includes(`phrasal-${idx}`);
    
    const header = createElement("div");
    header.style.cursor = "pointer";
    header.onclick = () => {
      const key = `phrasal-${idx}`;
      appState.expandedItems = appState.expandedItems.includes(key) 
        ? appState.expandedItems.filter(k => k !== key) 
        : [...appState.expandedItems, key];
      renderPhrasalVerbs(container);
    };
    
    const titleDiv = createElement("div");
    const isFav = isFavorite(pv.phrasal, "phrasal");
    titleDiv.innerHTML = `<span class="card-title" style="color: ${C.blue};">${pv.phrasal}</span>
      <button class="fav-btn" style="background: none; border: none; cursor: pointer; font-size: 16px;" onclick="event.stopPropagation(); ${isFav ? `removeFromFavorites('${pv.phrasal}', 'phrasal')` : `addToFavorites('${pv.phrasal}', 'phrasal')`}; renderPhrasalVerbs(document.getElementById('mainContent'));">
        ${isFav ? '❤️' : '🤍'}
      </button>`;
    header.appendChild(titleDiv);
    header.appendChild(createElement("span", "toggle-icon", isExpanded ? "▲" : "▼"));
    card.appendChild(header);
    
    const subtitle = createElement("div", "card-subtitle", `🇲🇽 ${pv.spanish} • ${pv.meaning}`);
    card.appendChild(subtitle);
    
    if (isExpanded) {
      const content = createElement("div");
      content.style.marginTop = "14px";
      
      const expBox = createElement("div", "description-box", `📖 ${pv.explanation}`);
      content.appendChild(expBox);
      
      const exBox = createElement("div", "combo-row");
      exBox.innerHTML = `<div class="sentence-en">"${pv.example}"</div><div class="sentence-es">📌 "${pv.ex_es}"</div>`;
      content.appendChild(exBox);
      
      const speakBtn = document.createElement("button");
      speakBtn.className = "pill";
      speakBtn.textContent = "🔊 Pronounce";
      speakBtn.onclick = () => speakWord(pv.phrasal);
      content.appendChild(speakBtn);
      
      card.appendChild(content);
    }
    wrapper.appendChild(card);
  });
  
  container.appendChild(wrapper);
}

function renderVerbTenses(container) {
  const wrapper = createElement("div");
  const descBox = createElement("div", "description-box");
  descBox.innerHTML = `📌 <strong>Verb Tenses:</strong> Learn the 6 main English tenses with formulas and examples.`;
  wrapper.appendChild(descBox);
  
  VERB_TENSES_DATA.forEach((tense, idx) => {
    const card = createElement("div", "card");
    const isExpanded = appState.expandedItems.includes(`tense-${idx}`);
    
    const header = createElement("div");
    header.style.cursor = "pointer";
    header.onclick = () => {
      const key = `tense-${idx}`;
      appState.expandedItems = appState.expandedItems.includes(key) 
        ? appState.expandedItems.filter(k => k !== key) 
        : [...appState.expandedItems, key];
      renderVerbTenses(container);
    };
    
    const titleDiv = createElement("div");
    titleDiv.innerHTML = `<span class="card-title" style="color: ${tense.color};">${tense.tense}</span>`;
    header.appendChild(titleDiv);
    header.appendChild(createElement("span", "toggle-icon", isExpanded ? "▲" : "▼"));
    card.appendChild(header);
    
    const subtitle = createElement("div", "card-subtitle", `🇲🇽 ${tense.spanish}`);
    card.appendChild(subtitle);
    
    if (isExpanded) {
      const content = createElement("div");
      content.style.marginTop = "14px";
      
      const formulaBox = createElement("div", "usage-pattern");
      formulaBox.style.borderLeftColor = tense.color;
      formulaBox.innerHTML = `<strong>Formula:</strong> <code>${tense.formula}</code><br><strong>Usage:</strong> ${tense.use}<br><strong>Explanation:</strong> ${tense.explanation}`;
      content.appendChild(formulaBox);
      
      const exBox = createElement("div", "combo-row");
      exBox.style.borderLeftColor = tense.color;
      exBox.innerHTML = `<div class="sentence-en">"${tense.example}"</div>`;
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
  descBox.innerHTML = `📌 <strong>Contractions:</strong> Short forms very common in conversational English. Don't, I'm, you're, etc.`;
  wrapper.appendChild(descBox);
  
  CONTRACTIONS_DATA.forEach((contr, idx) => {
    const card = createElement("div", "card");
    const isExpanded = appState.expandedItems.includes(`contr-${idx}`);
    
    const header = createElement("div");
    header.style.cursor = "pointer";
    header.onclick = () => {
      const key = `contr-${idx}`;
      appState.expandedItems = appState.expandedItems.includes(key) 
        ? appState.expandedItems.filter(k => k !== key) 
        : [...appState.expandedItems, key];
      renderContractions(container);
    };
    
    const titleDiv = createElement("div");
    titleDiv.innerHTML = `<span style="font-size: 18px; font-weight: 700; color: ${C.teal};">${contr.contraction}</span> = <span style="color: ${C.muted};">${contr.expanded}</span>`;
    header.appendChild(titleDiv);
    header.appendChild(createElement("span", "toggle-icon", isExpanded ? "▲" : "▼"));
    card.appendChild(header);
    
    const subtitle = createElement("div", "card-subtitle", `🇲🇽 ${contr.spanish}`);
    card.appendChild(subtitle);
    
    if (isExpanded) {
      const content = createElement("div");
      content.style.marginTop = "14px";
      
      const expBox = createElement("div", "description-box", contr.explanation);
      content.appendChild(expBox);
      
      const exBox = createElement("div", "combo-row");
      exBox.innerHTML = `<div class="sentence-en">"${contr.example}"</div><div class="sentence-es">📌 "${contr.ex_es}"</div>`;
      content.appendChild(exBox);
      
      card.appendChild(content);
    }
    wrapper.appendChild(card);
  });
  
  container.appendChild(wrapper);
}

function renderModals(container) {
  const wrapper = createElement("div");
  const descBox = createElement("div", "description-box");
  descBox.innerHTML = `📌 <strong>Modals:</strong> CAN, COULD, SHOULD, MUST, MAY, MIGHT - Express ability, obligation, possibility.`;
  wrapper.appendChild(descBox);
  
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
  header.innerHTML = `<div style="font-size: 28px; font-weight: 900; color: ${modal.color};">${modal.modal}</div><div style="font-size: 11px; color: ${modal.color}88;">Negative: ${modal.neg}</div>`;
  infoCard.appendChild(header);
  
  const useBox = createElement("div", "usage-pattern");
  useBox.style.borderLeftColor = modal.color;
  useBox.innerHTML = `<strong>Usage:</strong> ${modal.use}<br><strong>Explanation:</strong> ${modal.explanation}<br><strong>Examples:</strong> ${modal.examples.map(e => `"${e}"`).join(" • ")}`;
  infoCard.appendChild(useBox);
  
  wrapper.appendChild(infoCard);
  container.innerHTML = "";
  container.appendChild(wrapper);
}

function renderQuantifiers(container) {
  const wrapper = createElement("div");
  const descBox = createElement("div", "description-box");
  descBox.innerHTML = `📌 <strong>Quantifiers:</strong> Express quantity - some, any, many, much, few, little. Countable vs Uncountable.`;
  wrapper.appendChild(descBox);
  
  QUANTIFIERS_DATA.forEach((quant, idx) => {
    const card = createElement("div", "card");
    const isExpanded = appState.expandedItems.includes(`quant-${idx}`);
    
    const header = createElement("div");
    header.style.cursor = "pointer";
    header.onclick = () => {
      const key = `quant-${idx}`;
      appState.expandedItems = appState.expandedItems.includes(key) 
        ? appState.expandedItems.filter(k => k !== key) 
        : [...appState.expandedItems, key];
      renderQuantifiers(container);
    };
    
    const titleDiv = createElement("div");
    const isFav = isFavorite(quant.word, "quantifier");
    titleDiv.innerHTML = `<span class="card-title" style="color: ${C.blue};">${quant.word}</span>
      <button class="fav-btn" style="background: none; border: none; cursor: pointer; font-size: 16px;" onclick="event.stopPropagation(); ${isFav ? `removeFromFavorites('${quant.word}', 'quantifier')` : `addToFavorites('${quant.word}', 'quantifier')`}; renderQuantifiers(document.getElementById('mainContent'));">
        ${isFav ? '❤️' : '🤍'}
      </button>`;
    header.appendChild(titleDiv);
    header.appendChild(createElement("span", "toggle-icon", isExpanded ? "▲" : "▼"));
    card.appendChild(header);
    
    const subtitle = createElement("div", "card-subtitle", `🇲🇽 ${quant.spanish}`);
    card.appendChild(subtitle);
    
    if (isExpanded) {
      const content = createElement("div");
      content.style.marginTop = "14px";
      
      const def = createElement("div", "description-box");
      def.innerHTML = `<strong>Definition:</strong> ${quant.def}`;
      content.appendChild(def);
      
      const expBox = createElement("div", "usage-pattern");
      expBox.innerHTML = `<strong>Explanation:</strong> ${quant.explanation}`;
      content.appendChild(expBox);
      
      const exBox = createElement("div", "combo-row");
      exBox.innerHTML = `<div class="sentence-en">"${quant.example}"</div>`;
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
  descBox.innerHTML = `📌 <strong>Articles:</strong> A, AN, THE - Fundamental in English. Choose correctly based on specific vs. general nouns.`;
  wrapper.appendChild(descBox);
  
  ARTICLES_DATA.forEach((art, idx) => {
    const card = createElement("div", "card");
    const isExpanded = appState.expandedItems.includes(`art-${idx}`);
    
    const header = createElement("div");
    header.style.cursor = "pointer";
    header.onclick = () => {
      const key = `art-${idx}`;
      appState.expandedItems = appState.expandedItems.includes(key) 
        ? appState.expandedItems.filter(k => k !== key) 
        : [...appState.expandedItems, key];
      renderArticles(container);
    };
    
    const titleDiv = createElement("div");
    titleDiv.innerHTML = `<span class="card-title" style="color: ${C.cyan};">${art.article}</span>`;
    header.appendChild(titleDiv);
    header.appendChild(createElement("span", "toggle-icon", isExpanded ? "▲" : "▼"));
    card.appendChild(header);
    
    const subtitle = createElement("div", "card-subtitle", `🇲🇽 ${art.spanish}`);
    card.appendChild(subtitle);
    
    if (isExpanded) {
      const content = createElement("div");
      content.style.marginTop = "14px";
      
      const def = createElement("div", "description-box");
      def.innerHTML = `<strong>Rule:</strong> ${art.rule}`;
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
  descBox.innerHTML = `📌 <strong>Prepositions:</strong> Connect words showing relationships - time, place, direction, manner.`;
  wrapper.appendChild(descBox);
  
  PREPOSITIONS_DATA.forEach((prep, idx) => {
    const card = createElement("div", "card");
    const isExpanded = appState.expandedItems.includes(`prep-${idx}`);
    
    const header = createElement("div");
    header.style.cursor = "pointer";
    header.onclick = () => {
      const key = `prep-${idx}`;
      appState.expandedItems = appState.expandedItems.includes(key) 
        ? appState.expandedItems.filter(k => k !== key) 
        : [...appState.expandedItems, key];
      renderPrepositions(container);
    };
    
    const titleDiv = createElement("div");
    const isFav = isFavorite(prep.prep, "preposition");
    titleDiv.innerHTML = `<span class="card-title" style="color: ${prep.color};">${prep.prep}</span>
      <button class="fav-btn" style="background: none; border: none; cursor: pointer; font-size: 16px;" onclick="event.stopPropagation(); ${isFav ? `removeFromFavorites('${prep.prep}', 'preposition')` : `addToFavorites('${prep.prep}', 'preposition')`}; renderPrepositions(document.getElementById('mainContent'));">
        ${isFav ? '❤️' : '🤍'}
      </button>`;
    header.appendChild(titleDiv);
    header.appendChild(createElement("span", "toggle-icon", isExpanded ? "▲" : "▼"));
    card.appendChild(header);
    
    const subtitle = createElement("div", "card-subtitle", `🇲🇽 ${prep.spanish}`);
    card.appendChild(subtitle);
    
    if (isExpanded) {
      const content = createElement("div");
      content.style.marginTop = "14px";
      
      const def = createElement("div", "description-box");
      def.style.color = prep.color;
      def.innerHTML = `<strong>Usage:</strong> ${prep.def}`;
      content.appendChild(def);
      
      const expBox = createElement("div", "usage-pattern");
      expBox.style.borderLeftColor = prep.color;
      expBox.innerHTML = `<strong>Explanation:</strong> ${prep.explanation}`;
      content.appendChild(expBox);
      
      const exBox = createElement("div", "combo-row");
      exBox.style.borderLeftColor = prep.color;
      exBox.innerHTML = `<div class="sentence-en">"${prep.ex}"</div>`;
      content.appendChild(exBox);
      
      const speakBtn = document.createElement("button");
      speakBtn.className = "pill";
      speakBtn.textContent = "🔊 Pronounce";
      speakBtn.onclick = () => speakWord(prep.prep);
      content.appendChild(speakBtn);
      
      card.appendChild(content);
    }
    wrapper.appendChild(card);
  });
  
  container.appendChild(wrapper);
}

function renderAuxiliaries(container) {
  const wrapper = createElement("div");
  const descBox = createElement("div", "description-box");
  descBox.innerHTML = `📌 <strong>Auxiliaries:</strong> BE, DO, HAVE - Essential for forming tenses, questions, and negations.`;
  wrapper.appendChild(descBox);
  
  AUXILIARIES_DATA.forEach((aux, idx) => {
    const card = createElement("div", "card");
    const isExpanded = appState.expandedItems.includes(`aux-${idx}`);
    
    const header = createElement("div");
    header.style.cursor = "pointer";
    header.onclick = () => {
      const key = `aux-${idx}`;
      appState.expandedItems = appState.expandedItems.includes(key) 
        ? appState.expandedItems.filter(k => k !== key) 
        : [...appState.expandedItems, key];
      renderAuxiliaries(container);
    };
    
    const titleDiv = createElement("div");
    titleDiv.innerHTML = `<span class="card-title" style="color: ${aux.color};">${aux.word}</span>`;
    header.appendChild(titleDiv);
    header.appendChild(createElement("span", "toggle-icon", isExpanded ? "▲" : "▼"));
    card.appendChild(header);
    
    const subtitle = createElement("div", "card-subtitle", `🇲🇽 ${aux.spanish}`);
    card.appendChild(subtitle);
    
    if (isExpanded) {
      const content = createElement("div");
      content.style.marginTop = "14px";
      
      const def = createElement("div", "description-box");
      def.innerHTML = `<strong>Usage:</strong> ${aux.use}`;
      content.appendChild(def);
      
      const expBox = createElement("div", "usage-pattern");
      expBox.style.borderLeftColor = aux.color;
      expBox.innerHTML = `<strong>Explanation:</strong> ${aux.explanation}`;
      content.appendChild(expBox);
      
      const formsDiv = createElement("div");
      formsDiv.style.marginTop = "10px";
      const formsLabel = createElement("div", "section-label", "📋 FORMS");
      formsDiv.appendChild(formsLabel);
      
      const formsBadges = createElement("div");
      formsBadges.style.display = "flex";
      formsBadges.style.gap = "6px";
      formsBadges.style.flexWrap = "wrap";
      aux.forms.forEach(form => {
        const badge = createElement("div", "pronouns-badge");
        badge.innerHTML = `<div class="pronoun-text" style="font-size: 12px; color: ${aux.color};">${form}</div>`;
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

// ═══════════════════════════════════════════════════════════════════════════════
// INIT APP
// ═══════════════════════════════════════════════════════════════════════════════

function initApp() {
  loadState();
  applyTheme();
  renderNavBar();
  renderContent();
}

document.addEventListener("DOMContentLoaded", initApp);
