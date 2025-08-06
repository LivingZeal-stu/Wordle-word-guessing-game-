const wordList4 = [
  "able", "acid", "aged", "also", "area", "army", "away", "baby", "back", "ball", "band", "bank", "base", "bath",
  "bear", "beat", "been", "beer", "bell", "belt", "bend", "bent", "best", "bill", "bird", "blow", "blue", "boat",
  "body", "bomb", "bond", "bone", "book", "boom", "born", "boss", "both", "bowl", "bulk", "burn", "bush", "busy",
  "call", "calm", "came", "camp", "card", "care", "case", "cash", "cast", "cell", "chat", "chip", "city", "club",
  "coal", "coat", "code", "cold", "come", "cook", "cool", "cope", "copy", "core", "cost", "crew", "crop", "dark",
  "data", "date", "dawn", "dead", "deal", "dear", "debt", "deep", "deny", "desk", "dial", "diet", "disc", "disk",
  "does", "done", "door", "dose", "down", "draw", "drop", "drug", "dual", "duck", "dust", "duty", "each", "earn",
  "ease", "east", "easy", "edge", "edit", "else", "even", "ever", "evil", "exit", "face", "fact", "fade", "fail",
  "fair", "fall", "farm", "fast", "fate", "fear", "feed", "feel", "feet", "fell", "felt", "file", "fill", "film",
  "find", "fine", "fire", "firm", "fish", "five", "flat", "flow", "fold", "folk", "food", "foot", "ford", "form",
  "fort", "foul", "four", "free", "from", "fuel", "full", "fund", "gain", "game", "gate", "gave", "gear", "gene",
  "gift", "girl", "give", "glad", "goal", "goes", "gold", "golf", "gone", "good", "gray", "grew", "grey", "grow",
  "gulf", "hair", "half", "hall", "hand", "hang", "hard", "harm", "hate", "have", "head", "hear", "heat", "held",
  "hell", "help", "here", "hero", "high", "hill", "hire", "hold", "hole", "holy", "home", "hope", "host", "hour",
  "huge", "hung", "hunt", "hurt", "idea", "inch", "into", "iron", "item", "jack", "jane", "jean", "john", "join",
  "jump", "jury", "just", "keep", "kept", "kick", "kill", "kind", "king", "knee", "knew", "know", "lack", "lady",
  "laid", "lake", "land", "lane", "last", "late", "lead", "left", "less", "life", "lift", "like", "line", "link",
  "list", "live", "load", "loan", "lock", "logo", "long", "look", "lord", "lose", "loss", "lost", "love", "luck",
  "made", "mail", "main", "make", "male", "many", "mark", "mass", "matt", "meal", "mean", "meat", "meet", "menu",
  "mere", "mild", "mile", "milk", "mill", "mind", "mine", "miss", "mode", "mood", "moon", "more", "most", "move",
  "much", "must", "name", "navy", "near", "neck", "need", "news", "next", "nice", "nick", "nine", "none", "nose",
  "note", "okay", "once", "only", "onto", "open", "oral", "over", "pace", "pack", "page", "paid", "pain", "pair",
  "palm", "park", "part", "pass", "past", "path", "peak", "pick", "pink", "pipe", "plan", "play", "plot", "plug",
  "plus", "poll", "pool", "poor", "port", "post", "pull", "pure", "push", "race", "rail", "rain", "rank", "rare",
  "rate", "read", "real", "rear", "rely", "rent", "rest", "rice", "rich", "ride", "ring", "rise", "risk", "road",
  "rock", "role", "roll", "roof", "room", "root", "rose", "rule", "rush", "safe", "said", "sake", "sale", "salt",
  "same", "sand", "save", "seat", "seed", "seek", "seem", "seen", "self", "sell", "send", "sent", "sept", "ship",
  "shop", "shot", "show", "shut", "sick", "side", "sign", "site", "size", "skin", "slip", "slow", "snow", "soft",
  "soil", "sold", "sole", "some", "song", "soon", "sort", "soul", "spot", "star", "stay", "step", "stop", "such",
  "suit", "sure", "take", "tale", "talk", "tall", "tank", "tape", "task", "team", "tech", "tell", "tend", "term",
  "test", "text", "than", "that", "them", "then", "they", "thin", "this", "thus", "time", "tiny", "told", "toll",
  "tone", "tony", "took", "tool", "tour", "town", "tree", "trip", "true", "tune", "turn", "twin", "type", "unit",
  "upon", "used", "user", "vary", "vast", "very", "vice", "view", "vote", "wage", "wait", "wake", "walk", "wall",
  "want", "ward", "warm", "wash", "wave", "ways", "weak", "wear", "week", "well", "went", "were", "west", "what",
  "when", "whom", "wide", "wife", "wild", "will", "wind", "wine", "wing", "wire", "wise", "wish", "with", "wolf",
  "wood", "word", "wore", "work", "yard", "yeah", "year", "your", "zero", "zone"
];


const wordList5 = [
  "about", "abuse", "actor", "acute", "admit", "adopt", "adult", "after", "again", "agent", "agree", "ahead",
  "alarm", "album", "alert", "alike", "alive", "allow", "alone", "along", "alter", "among", "anger", "angle",
  "angry", "apart", "apple", "apply", "arena", "argue", "arise", "array", "aside", "asset", "audio", "audit",
  "avoid", "await", "awake", "award", "aware", "badly", "baker", "bases", "basic", "basis", "beach", "begin",
  "being", "below", "bench", "birth", "black", "blame", "blind", "block", "blood", "board", "boost", "booth",
  "bound", "brain", "brand", "bread", "break", "breed", "brief", "bring", "broad", "broke", "brown", "build",
  "built", "buyer", "cabin", "cable", "calif", "carry", "catch", "cause", "chain", "chair", "chart", "chase",
  "cheap", "check", "chest", "chief", "child", "china", "chose", "civil", "claim", "class", "clean", "clear",
  "click", "clock", "close", "coach", "coast", "could", "count", "court", "cover", "craft", "crash", "cream",
  "crime", "cross", "crowd", "crown", "curve", "cycle", "daily", "dance", "dated", "dealt", "death", "debut",
  "delay", "depth", "doing", "doubt", "dozen", "draft", "drama", "drawn", "dream", "dress", "drill", "drink",
  "drive", "drove", "dying", "eager", "early", "earth", "eight", "elite", "empty", "enemy", "enjoy", "enter",
  "entry", "equal", "error", "event", "every", "exact", "exist", "extra", "faith", "false", "fault", "fiber",
  "field", "fifth", "fifty", "fight", "final", "first", "fixed", "flash", "fleet", "floor", "fluid", "focus",
  "force", "forth", "forty", "forum", "found", "frame", "frank", "fraud", "fresh", "front", "fruit", "fully",
  "funny", "giant", "given", "glass", "globe", "going", "grace", "grade", "grand", "grant", "grass", "great",
  "green", "gross", "group", "grown", "guard", "guess", "guest", "guide", "habit", "happy", "harry", "heart",
  "heavy", "hence", "henry", "horse", "hotel", "house", "human", "ideal", "image", "index", "inner", "input",
  "issue", "japan", "jimmy", "joint", "jones", "judge", "known", "label", "large", "laser", "later", "laugh",
  "layer", "learn", "lease", "least", "leave", "legal", "level", "light", "limit", "links", "lives", "local",
  "logic", "loose", "lower", "lucky", "lunch", "major", "maker", "march", "maria", "match", "maybe", "mayor",
  "meant", "media", "metal", "might", "minor", "minus", "mixed", "model", "money", "month", "moral", "motor",
  "mount", "mouse", "mouth", "movie", "music", "needs", "never", "newly", "night", "noise", "north", "noted",
  "novel", "nurse", "occur", "ocean", "offer", "often", "order", "other", "ought", "paint", "panel", "paper",
  "party", "peace", "peter", "phase", "phone", "photo", "piece", "pilot", "pitch", "place", "plain", "plane",
  "plant", "plate", "point", "pound", "power", "press", "price", "pride", "prime", "print", "prior", "prize",
  "proof", "proud", "prove", "queen", "quick", "quiet", "quite", "radio", "raise", "range", "rapid", "ratio",
  "reach", "react", "ready", "refer", "right", "rival", "river", "robin", "rough", "round", "route", "royal",
  "rural", "scale", "scene", "scope", "score", "sense", "serve", "seven", "shall", "shape", "share", "sharp",
  "sheet", "shelf", "shell", "shift", "shirt", "shock", "shoot", "shore", "short", "shown", "sight", "since",
  "skill", "sleep", "slide", "small", "smart", "smile", "smith", "smoke", "solid", "solve", "sorry", "sound",
  "south", "space", "spare", "speak", "speed", "spend", "spent", "split", "spoke", "sport", "staff", "stage",
  "stake", "stand", "start", "state", "steam", "steel", "stick", "still", "stock", "stone", "stood", "store",
  "storm", "story", "strip", "stuck", "study", "stuff", "style", "sugar", "suite", "super", "sweet", "table",
  "taken", "taste", "taxes", "teach", "teeth", "terry", "texas", "thank", "their", "theme", "there", "these",
  "thick", "thing", "think", "third", "those", "three", "threw", "throw", "tight", "times", "tired", "title",
  "today", "topic", "total", "touch", "tough", "tower", "track", "trade", "train", "treat", "trend", "trial",
  "tried", "tries", "truck", "truly", "trust", "truth", "twice", "under", "union", "unity", "until", "upper",
  "upset", "urban", "usage", "usual", "valid", "value", "video", "virus", "visit", "vital", "voice", "waste",
  "watch", "water", "wheel", "where", "which", "while", "white", "whole", "whose", "woman", "women", "world",
  "worry", "worse", "worst", "worth", "would", "wound", "write", "wrong", "wrote", "yield", "young", "youth"
];


let secretWord = "";
let currentWordLength = 5;
let attempts = 0;
let maxAttempts = 6;
let score = 70;

function startGame() {
  const mode = document.getElementById("modeSelect").value;
  currentWordLength = parseInt(mode);
  const wordList = currentWordLength === 4 ? wordList4 : wordList5;
  secretWord = wordList[Math.floor(Math.random() * wordList.length)];

  attempts = 0;
  score = 70;

  document.getElementById("gameInfo").textContent = `Guess the ${currentWordLength}-letter word (You have ${maxAttempts} tries!)`;
  document.getElementById("attemptsLeft").textContent = `Attempts Left: ${maxAttempts}`;
  document.getElementById("scoreDisplay").textContent = `Score: ${score}`;
  document.getElementById("guessInput").value = "";
  document.getElementById("guessInput").maxLength = currentWordLength;
  document.getElementById("guessInput").disabled = false;
  document.getElementById("feedback").innerHTML = "";
  document.getElementById("replay").style.display = "none";
  document.getElementById("guessInput").focus();
}

function submitGuess() {
  const input = document.getElementById("guessInput");
  const guess = input.value.toLowerCase().trim();

  if (guess.length !== currentWordLength) {
    alert(`Please enter a ${currentWordLength}-letter word.`);
    return;
  }

  const feedbackDiv = document.getElementById("feedback");
  const result = [];
  const usedSecret = Array(currentWordLength).fill(false);

  // First pass: exact matches
  for (let i = 0; i < currentWordLength; i++) {
    if (guess[i] === secretWord[i]) {
      result[i] = { letter: guess[i], className: "correct" };
      usedSecret[i] = true;
    } else {
      result[i] = null;
    }
  }

  // Second pass: misplaced letters
  for (let i = 0; i < currentWordLength; i++) {
    if (!result[i]) {
      let found = false;
      for (let j = 0; j < currentWordLength; j++) {
        if (!usedSecret[j] && guess[i] === secretWord[j]) {
          found = true;
          usedSecret[j] = true;
          break;
        }
      }
      result[i] = found
        ? { letter: guess[i], className: "misplaced" }
        : { letter: guess[i], className: "wrong" };
    }
  }

  // Display feedback
  const row = document.createElement("div");
  result.forEach(({ letter, className }) => {
    const span = document.createElement("span");
    span.textContent = letter.toUpperCase();
    span.className = `letter ${className}`;
    row.appendChild(span);
  });
  feedbackDiv.appendChild(row);

  attempts++;
  score -= 10;

  document.getElementById("attemptsLeft").textContent = `Attempts Left: ${maxAttempts - attempts}`;
  document.getElementById("scoreDisplay").textContent = `Score: ${score}`;

  if (guess === secretWord) {
    score = 100;
    document.getElementById("scoreDisplay").textContent = `Score: ${score}`;
    feedbackDiv.innerHTML += `<p>🎉 You guessed the word in ${attempts} tries!</p>`;
    endGame();
  } else if (attempts >= maxAttempts) {
    score = 0;
    document.getElementById("scoreDisplay").textContent = `Score: ${score}`;
    feedbackDiv.innerHTML += `<p>❌ Out of attempts! The word was <strong>${secretWord.toUpperCase()}</strong>.</p>`;
    endGame();
  }


  input.value = "";
  input.focus();
}

function endGame() {
  document.getElementById("scoreDisplay").textContent = `Score: ${score}`;
  document.getElementById("guessInput").disabled = true;
  document.getElementById("replay").style.display = "inline-block";

  const didWin = score === 100;
  updateStats(didWin);

  const playerName = prompt("Enter your name for the leaderboard:") || "Anonymous";
  saveToLeaderboard(playerName, score);
}


window.onload = () => {
  startGame();
  document.getElementById("guessInput").addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
      submitGuess();
    }
  });
};

function updateStats(didWin) {
  let stats = JSON.parse(localStorage.getItem("stats")) || {
    games: 0,
    wins: 0,
    streak: 0,
    bestStreak: 0
  };

  stats.games += 1;

  if (didWin) {
    stats.wins += 1;
    stats.streak += 1;
    if (stats.streak > stats.bestStreak) {
      stats.bestStreak = stats.streak;
    }
  } else {
    stats.streak = 0;
  }

  localStorage.setItem("stats", JSON.stringify(stats));
  showStats();
}

function showStats() {
  let stats = JSON.parse(localStorage.getItem("stats")) || {
    games: 0,
    wins: 0,
    streak: 0,
    bestStreak: 0
  };

  const winRate = stats.games > 0 ? Math.round((stats.wins / stats.games) * 100) : 0;

  document.getElementById("statGames").textContent = stats.games;
  document.getElementById("statWins").textContent = stats.wins;
  document.getElementById("statWinRate").textContent = `${winRate}%`;
  document.getElementById("statStreak").textContent = stats.streak;
  document.getElementById("statBestStreak").textContent = stats.bestStreak;
}
function toggleStats() {
  const stats = document.getElementById("statsSection");
  const toggleBtn = document.getElementById("toggleStatsBtn");

  if (stats.style.display === "none" || stats.style.display === "") {
    stats.style.display = "block";
    toggleBtn.textContent = "🔼 Hide Stats";
  } else {
    stats.style.display = "none";
    toggleBtn.textContent = "🔽 Show Stats";
  }
}
