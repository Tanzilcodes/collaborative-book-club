/* =========================================================
   Ink & Elsewhere — Core Application Logic
   Authors: Tanzil, Mitakshi Pangariya & Deeksha Dahiya
   ========================================================= */

// 1. BOOK CONSTRUCTOR
function Book(id, title, author, clubName, genre, totalPages, rating, cover) {
  this.id = id;
  this.title = title;
  this.author = author;
  this.clubName = clubName;
  this.genre = genre;
  this.totalPages = totalPages;
  this.rating = rating;
  this.cover = cover;
}

// 2. THE 5 READING CIRCLES & PERSONALITY MAPPING
const readingCircles = [
  {
    clubName: "The Arrakis Readers",
    genre: "Sci-fi & Fantasy",
    personality: "Adventurous",
    tagline: "Epic worlds, deep space survival, and bold quests."
  },
  {
    clubName: "The Austen Society",
    genre: "Classics",
    personality: "Intellectual",
    tagline: "Timeless wit, human nature, and enduring literary masterpieces."
  },
  {
    clubName: "The Midnight Readers",
    genre: "Thriller & Gothic",
    personality: "Mysterious",
    tagline: "Psychological twists, haunting estates, and late-night suspense."
  },
  {
    clubName: "The Quiet Chapters",
    genre: "Contemporary Fiction",
    personality: "Introspective",
    tagline: "Emotionally rich stories about memory, identity, and second chances."
  },
  {
    clubName: "The Myth & Margins",
    genre: "Mythology & Historical",
    personality: "Imaginative",
    tagline: "Ancient legends retold and forgotten pages of history."
  }
];

// 3. ALL 20 CURATED BOOKS ACROSS THE 5 CLUBS
const defaultBooks = [
  // The Arrakis Readers — Sci-fi & Fantasy (Adventurous)
  new Book(1, "Dune", "Frank Herbert", "The Arrakis Readers", "Sci-fi & Fantasy", 688, "★★★★★", "https://covers.openlibrary.org/b/isbn/9780441172719-M.jpg"),
  new Book(2, "The Martian", "Andy Weir", "The Arrakis Readers", "Sci-fi & Fantasy", 387, "★★★★★", "https://covers.openlibrary.org/b/isbn/9780553418026-M.jpg"),
  new Book(3, "The Hobbit", "J.R.R. Tolkien", "The Arrakis Readers", "Sci-fi & Fantasy", 310, "★★★★★", "https://covers.openlibrary.org/b/isbn/9780547928227-M.jpg"),
  new Book(4, "Project Hail Mary", "Andy Weir", "The Arrakis Readers", "Sci-fi & Fantasy", 496, "★★★★★", "https://covers.openlibrary.org/b/isbn/9780593135204-M.jpg"),

  // The Austen Society — Classics (Intellectual)
  new Book(5, "Pride and Prejudice", "Jane Austen", "The Austen Society", "Classics", 432, "★★★★★", "https://covers.openlibrary.org/b/isbn/9780141439518-M.jpg"),
  new Book(6, "The Great Gatsby", "F. Scott Fitzgerald", "The Austen Society", "Classics", 180, "★★★★★", "https://covers.openlibrary.org/b/isbn/9780743273565-M.jpg"),
  new Book(7, "The Metamorphosis", "Franz Kafka", "The Austen Society", "Classics", 96, "★★★★☆", "https://covers.openlibrary.org/b/isbn/9780553213690-M.jpg"),
  new Book(8, "Little Women", "Louisa May Alcott", "The Austen Society", "Classics", 449, "★★★★★", "https://covers.openlibrary.org/b/isbn/9780147514011-M.jpg"),

  // The Midnight Readers — Thriller & Gothic (Mysterious)
  new Book(9, "Rebecca", "Daphne du Maurier", "The Midnight Readers", "Thriller & Gothic", 449, "★★★★★", "https://covers.openlibrary.org/b/isbn/9780380730407-M.jpg"),
  new Book(10, "The Silent Patient", "Alex Michaelides", "The Midnight Readers", "Thriller & Gothic", 336, "★★★★☆", "https://covers.openlibrary.org/b/isbn/9781250301697-M.jpg"),
  new Book(11, "The Picture of Dorian Gray", "Oscar Wilde", "The Midnight Readers", "Thriller & Gothic", 254, "★★★★★", "https://covers.openlibrary.org/b/isbn/9780141439570-M.jpg"),
  new Book(12, "Gone Girl", "Gillian Flynn", "The Midnight Readers", "Thriller & Gothic", 432, "★★★★☆", "https://covers.openlibrary.org/b/isbn/9780307588371-M.jpg"),

  // The Quiet Chapters — Contemporary Fiction (Introspective)
  new Book(13, "Norwegian Wood", "Haruki Murakami", "The Quiet Chapters", "Contemporary Fiction", 296, "★★★★★", "https://covers.openlibrary.org/b/isbn/9780375704024-M.jpg"),
  new Book(14, "The Perks of Being a Wallflower", "Stephen Chbosky", "The Quiet Chapters", "Contemporary Fiction", 213, "★★★★★", "https://covers.openlibrary.org/b/isbn/9781451696196-M.jpg"),
  new Book(15, "A Little Life", "Hanya Yanagihara", "The Quiet Chapters", "Contemporary Fiction", 720, "★★★★★", "https://covers.openlibrary.org/b/isbn/9780804172707-M.jpg"),
  new Book(16, "The Midnight Library", "Matt Haig", "The Quiet Chapters", "Contemporary Fiction", 304, "★★★★☆", "https://covers.openlibrary.org/b/isbn/9780525559474-M.jpg"),

  // The Myth & Margins — Mythology & Historical (Imaginative)
  new Book(17, "The Song of Achilles", "Madeline Miller", "The Myth & Margins", "Mythology & Historical", 378, "★★★★★", "https://covers.openlibrary.org/b/isbn/9780062060624-M.jpg"),
  new Book(18, "Circe", "Madeline Miller", "The Myth & Margins", "Mythology & Historical", 393, "★★★★★", "https://covers.openlibrary.org/b/isbn/9780316556347-M.jpg"),
  new Book(19, "The Book of Lost Names", "Kristin Harmel", "The Myth & Margins", "Mythology & Historical", 388, "★★★★☆", "https://covers.openlibrary.org/b/isbn/9781982131890-M.jpg"),
  new Book(20, "The Palace of Illusions", "Chitra Banerjee Divakaruni", "The Myth & Margins", "Mythology & Historical", 360, "★★★★★", "https://covers.openlibrary.org/b/isbn/9781400096206-M.jpg")
];

const defaultScheduleTemplate = [
  { day: "Monday", time: "7:00 PM – 7:30 PM", activity: "25-Min Silent Focus Sprint", mode: "Solo Timer" },
  { day: "Wednesday", time: "7:30 PM – 8:15 PM", activity: "Chapter Check-In & Quotes", mode: "Club Discussion" },
  { day: "Saturday", time: "5:00 PM – 5:45 PM", activity: "Weekly Bookworm Quiz & Reflection", mode: "Group Challenge" }
];

// 4. STATE MANAGEMENT (ZERO DEFAULT HARDCODED MEMBERS)
let books = [];
let users = {};
let activeUserEmail = "";
let reviews = [];
let showOnlyRecommended = false;

function loadAppState() {
  try {
    const savedBooks = JSON.parse(localStorage.getItem("ink_books_v2"));
    books = Array.isArray(savedBooks) && savedBooks.length > 0 ? savedBooks : defaultBooks;

    const savedUsers = JSON.parse(localStorage.getItem("ink_users_v2"));
    users = savedUsers && typeof savedUsers === "object" ? savedUsers : {};

    activeUserEmail = localStorage.getItem("ink_active_email_v2") || "";

    const savedReviews = JSON.parse(localStorage.getItem("ink_reviews_v2"));
    reviews = Array.isArray(savedReviews) ? savedReviews : [];
  } catch (err) {
    books = defaultBooks;
    users = {};
    activeUserEmail = "";
    reviews = [];
  }
}

function saveAppState() {
  localStorage.setItem("ink_books_v2", JSON.stringify(books));
  localStorage.setItem("ink_users_v2", JSON.stringify(users));
  localStorage.setItem("ink_active_email_v2", activeUserEmail);
  localStorage.setItem("ink_reviews_v2", JSON.stringify(reviews));
}

function getCurrentUser() {
  return activeUserEmail && users[activeUserEmail] ? users[activeUserEmail] : null;
}

// 5. AUTHENTICATION GUARD (Redirects unauthenticated visitors to login.html)
function enforceAuthGuard() {
  const isAuthPage = Boolean(document.getElementById("login-form"));
  const currentUser = getCurrentUser();

  if (!isAuthPage && !currentUser) {
    window.location.replace("login.html");
    return false;
  }
  if (isAuthPage && currentUser) {
    window.location.replace("discover.html");
    return false;
  }
  return true;
}

// 6. LOGIN.HTML — TAB SWITCHING, STRONG PASSWORD CHECK & REGISTRATION
function switchAuthTab(tab) {
  const loginForm = document.getElementById("login-form");
  const regForm = document.getElementById("register-form");
  const tabLogin = document.getElementById("tab-login");
  const tabReg = document.getElementById("tab-register");
  const msg = document.getElementById("auth-message");

  if (!loginForm || !regForm) return;
  if (msg) {
    msg.textContent = "";
    msg.classList.remove("success");
  }

  if (tab === "login") {
    loginForm.classList.remove("hidden");
    regForm.classList.add("hidden");
    tabLogin.classList.add("active");
    tabReg.classList.remove("active");
  } else {
    regForm.classList.remove("hidden");
    loginForm.classList.add("hidden");
    tabReg.classList.add("active");
    tabLogin.classList.remove("active");
  }
}

function isStrongPassword(password) {
  const hasLetter = /[a-zA-Z]/.test(password);
  const hasNumber = /[0-9]/.test(password);
  const hasSpecial = /[^a-zA-Z0-9]/.test(password);
  return password.length >= 6 && hasLetter && hasNumber && hasSpecial;
}

function handleRegister(event) {
  event.preventDefault();
  const name = document.getElementById("reg-name").value.trim();
  const email = document.getElementById("reg-email").value.trim().toLowerCase();
  const password = document.getElementById("reg-password").value;
  const genre = document.getElementById("reg-vibe").value;
  const bio = document.getElementById("reg-bio").value.trim();
  const msg = document.getElementById("auth-message");

  if (!isStrongPassword(password)) {
    msg.classList.remove("success");
    msg.textContent = "Password must be at least 6 characters and include letters, 1 number, and 1 special character (!@#$%^&*).";
    return;
  }

  if (users[email]) {
    msg.classList.remove("success");
    msg.textContent = "An account with this email already exists. Please Sign In instead.";
    return;
  }

  const matchedCircle = readingCircles.find(c => c.genre === genre) || readingCircles[0];

  users[email] = {
    name: name,
    email: email,
    password: password,
    genre: genre,
    personality: matchedCircle.personality,
    recommendedClub: matchedCircle.clubName,
    bio: bio || `${matchedCircle.personality} reader exploring ${genre}.`,
    joinedClubs: [],
    bookProgress: {},
    schedule: JSON.parse(JSON.stringify(defaultScheduleTemplate)),
    notifications: [
      `Welcome ${name}! Matched with ${matchedCircle.clubName} (${matchedCircle.personality}).`
    ]
  };

  activeUserEmail = email;
  saveAppState();
  window.location.href = "discover.html";
}

function handleLogin(event) {
  event.preventDefault();
  const identifier = document.getElementById("login-identifier").value.trim().toLowerCase();
  const password = document.getElementById("login-password").value;
  const msg = document.getElementById("auth-message");

  const foundUser = Object.values(users).find(
    u => u.email.toLowerCase() === identifier || u.name.toLowerCase() === identifier
  );

  if (!foundUser) {
    msg.classList.remove("success");
    msg.textContent = "No account found with that name or email. Please create an account first.";
    return;
  }

  if (foundUser.password !== password) {
    msg.classList.remove("success");
    msg.textContent = "Incorrect password. Please try again.";
    return;
  }

  activeUserEmail = foundUser.email;
  saveAppState();
  window.location.href = "discover.html";
}

function handleSignOut() {
  activeUserEmail = "";
  saveAppState();
  window.location.href = "login.html";
}

// 7. SHARED NAVBAR, NOTIFICATIONS & DARK MODE
function updateNavbar() {
  const user = getCurrentUser();
  if (!user) return;

  const badge = document.getElementById("active-user-badge");
  const count = document.getElementById("club-count");
  if (badge) badge.textContent = `Reader: ${user.name}`;
  if (count) count.textContent = user.joinedClubs.length;
}

function pushUserNotification(message) {
  const user = getCurrentUser();
  if (!user) return;
  const time = new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
  user.notifications.unshift(`${message} (${time})`);
  if (user.notifications.length > 12) user.notifications.pop();
  saveAppState();
  renderNotifications();
}

function renderNotifications() {
  const feed = document.getElementById("activity-feed");
  const user = getCurrentUser();
  if (!feed || !user) return;

  if (user.notifications.length === 0) {
    feed.innerHTML = `<li>No alerts yet for ${user.name}. Join one of the 5 reading circles to begin!</li>`;
    return;
  }
  feed.innerHTML = user.notifications.map(n => `<li>${n}</li>`).join("");
}

function clearNotifications() {
  const user = getCurrentUser();
  if (!user) return;
  user.notifications = [];
  saveAppState();
  renderNotifications();
}

function applySavedTheme() {
  const savedTheme = localStorage.getItem("ink_theme");
  const btn = document.getElementById("theme-toggle");
  if (savedTheme === "dark") {
    document.body.classList.add("dark-mode");
    if (btn) btn.textContent = "☀️";
  }
}

function toggleTheme() {
  document.body.classList.toggle("dark-mode");
  const isDark = document.body.classList.contains("dark-mode");
  localStorage.setItem("ink_theme", isDark ? "dark" : "light");
  const btn = document.getElementById("theme-toggle");
  if (btn) btn.textContent = isDark ? "☀️" : "🌙";
}

// 8. DISCOVER.HTML — 5 CLUBS SHOWCASE, PERSONALITY MATCH & 20-BOOK CATALOG
function initDiscoverPage() {
  const showcase = document.getElementById("clubs-showcase");
  const user = getCurrentUser();
  if (!showcase || !user) return;

  const matchedCircle = readingCircles.find(c => c.genre === user.genre) || readingCircles[0];
  user.recommendedClub = matchedCircle.clubName;
  user.personality = matchedCircle.personality;

  const matchText = document.getElementById("matched-club-text");
  if (matchText) {
    matchText.innerHTML = `Because you chose <strong>${matchedCircle.personality} (${matchedCircle.genre})</strong>, we recommend <strong>${matchedCircle.clubName}</strong>!`;
  }

  renderClubsShowcase();
  filterCatalog();
}

function renderClubsShowcase() {
  const showcase = document.getElementById("clubs-showcase");
  const user = getCurrentUser();
  if (!showcase || !user) return;

  showcase.innerHTML = readingCircles.map(circle => {
    const isJoined = user.joinedClubs.includes(circle.clubName);
    const isMatch = circle.genre === user.genre;
    return `
      <article class="club-pill-card ${isMatch ? "recommended-club" : ""}">
        <div>
          <span class="club-vibe-tag">${circle.personality} • ${circle.genre}</span>
          <h3>${circle.clubName} ${isMatch ? "✨" : ""}</h3>
          <p class="section-sub" style="margin-bottom:0;">${circle.tagline}</p>
        </div>
        <button type="button" class="${isJoined ? "join-btn joined" : "join-btn"}" onclick="toggleJoinClub('${circle.clubName.replace(/'/g, "\\'")}')">
          ${isJoined ? "✓ Joined Circle" : "+ Join Circle"}
        </button>
      </article>
    `;
  }).join("");
}

function toggleRecommendedFilter() {
  const user = getCurrentUser();
  const genreSelect = document.getElementById("genre-select");
  const btn = document.getElementById("toggle-match-btn");
  if (!user || !genreSelect || !btn) return;

  showOnlyRecommended = !showOnlyRecommended;
  if (showOnlyRecommended) {
    genreSelect.value = user.genre;
    btn.textContent = "Show All 5 Clubs";
  } else {
    genreSelect.value = "All";
    btn.textContent = "Show Only My Match";
  }
  filterCatalog();
}

function toggleJoinClub(clubName) {
  const user = getCurrentUser();
  if (!user) return;

  const idx = user.joinedClubs.indexOf(clubName);
  if (idx === -1) {
    user.joinedClubs.push(clubName);
    // Automatically add that club's books to user's multi-book progress shelf if not present
    books.filter(b => b.clubName === clubName).forEach(b => {
      if (!user.bookProgress[b.title]) {
        user.bookProgress[b.title] = { pagesRead: 0, totalPages: b.totalPages || 300 };
      }
    });
    pushUserNotification(`Joined "${clubName}" — its books are now ready in My Profile!`);
  } else {
    user.joinedClubs.splice(idx, 1);
    pushUserNotification(`Left "${clubName}".`);
  }

  saveAppState();
  updateNavbar();
  renderClubsShowcase();
  filterCatalog();
}

function renderCatalog(bookList) {
  const grid = document.getElementById("book-grid");
  const user = getCurrentUser();
  if (!grid || !user) return;

  if (bookList.length === 0) {
    grid.innerHTML = `<p class="section-sub">No matching books found. Try another keyword or club filter!</p>`;
    return;
  }

  grid.innerHTML = bookList.map(book => {
    const isClubJoined = user.joinedClubs.includes(book.clubName);
    const isTracked = Boolean(user.bookProgress[book.title]);
    return `
      <article class="book-card">
        <div>
          <div class="card-top">
            <img src="${book.cover}" alt="${book.title} cover" class="book-cover">
            <div class="book-info">
              <h3><cite>${book.title}</cite></h3>
              <p>${book.author}</p>
              <p>${book.totalPages} pages</p>
              <div class="stars">${book.rating}</div>
            </div>
          </div>
          <span class="genre-tag">${book.clubName}</span>
        </div>
        <div style="display:flex; flex-direction:column; gap:0.45rem;">
          <button type="button" class="${isClubJoined ? "join-btn joined" : "join-btn"}" onclick="toggleJoinClub('${book.clubName.replace(/'/g, "\\'")}')">
            ${isClubJoined ? `✓ In ${book.clubName}` : `+ Join ${book.clubName}`}
          </button>
          <button type="button" class="clear-btn" onclick="trackBookFromDiscover('${book.title.replace(/'/g, "\\'")}', ${book.totalPages})">
            ${isTracked ? "📖 Tracking in Profile" : "+ Track Pages in Profile"}
          </button>
        </div>
      </article>
    `;
  }).join("");
}

function trackBookFromDiscover(title, totalPages) {
  const user = getCurrentUser();
  if (!user) return;
  if (!user.bookProgress[title]) {
    user.bookProgress[title] = { pagesRead: 0, totalPages: totalPages || 300 };
    saveAppState();
    pushUserNotification(`Added "${title}" to your Profile page tracker.`);
    filterCatalog();
  }
}

function filterCatalog() {
  const searchInput = document.getElementById("search-input");
  const genreSelect = document.getElementById("genre-select");
  if (!searchInput || !genreSelect) return;

  const query = searchInput.value.toLowerCase().trim();
  const genre = genreSelect.value;

  const filtered = books.filter(book => {
    const matchesText =
      book.title.toLowerCase().includes(query) ||
      book.author.toLowerCase().includes(query) ||
      book.clubName.toLowerCase().includes(query);
    const matchesGenre = genre === "All" || book.genre === genre;
    return matchesText && matchesGenre;
  });

  renderCatalog(filtered);
}

function addNewBook(event) {
  event.preventDefault();
  const title = document.getElementById("new-title").value.trim();
  const author = document.getElementById("new-author").value.trim();
  const totalPages = Number(document.getElementById("new-pages").value);
  const genre = document.getElementById("new-genre").value;
  const coverInput = document.getElementById("new-cover").value.trim();

  const circle = readingCircles.find(c => c.genre === genre) || readingCircles[0];
  const cover = coverInput !== ""
    ? coverInput
    : `https://ui-avatars.com/api/?name=${encodeURIComponent(title)}&background=947EBF&color=FFFAED&size=150`;

  const newBook = new Book(Date.now(), title, author, circle.clubName, genre, totalPages, "★★★★★", cover);
  books.unshift(newBook);
  saveAppState();

  pushUserNotification(`Added "${title}" to ${circle.clubName}.`);
  event.target.reset();
  filterCatalog();
}

// 9. CLUB.HTML — EDITABLE SCHEDULE, FULL-SCREEN POMODORO, QUIZ & REFLECTIONS
let timerSeconds = 25 * 60;
let timerInterval = null;
let timerPaused = false;

function formatTime(secs) {
  const m = String(Math.floor(secs / 60)).padStart(2, "0");
  const s = String(secs % 60).padStart(2, "0");
  return `${m}:${s}`;
}

function syncTimerDisplays() {
  const formatted = formatTime(timerSeconds);
  const compactEl = document.getElementById("compact-timer-display");
  const fullEl = document.getElementById("fullscreen-timer-display");
  if (compactEl) compactEl.textContent = formatted;
  if (fullEl) fullEl.textContent = formatted;
}

function startFullScreenTimer() {
  const overlay = document.getElementById("fullscreen-pomo-overlay");
  const pauseBtn = document.getElementById("fs-pause-btn");
  if (overlay) overlay.classList.remove("hidden");
  timerPaused = false;
  if (pauseBtn) pauseBtn.textContent = "Pause";

  if (timerInterval !== null) return;
  timerInterval = setInterval(() => {
    if (!timerPaused) {
      if (timerSeconds > 0) {
        timerSeconds--;
        syncTimerDisplays();
      } else {
        clearInterval(timerInterval);
        timerInterval = null;
        exitFullScreenTimer();
        pushUserNotification("Completed a 25-minute full-screen reading sprint!");
        alert("25-minute reading sprint complete! Great job!");
      }
    }
  }, 1000);
}

function togglePauseFullScreen() {
  timerPaused = !timerPaused;
  const pauseBtn = document.getElementById("fs-pause-btn");
  if (pauseBtn) pauseBtn.textContent = timerPaused ? "Resume" : "Pause";
}

function exitFullScreenTimer() {
  const overlay = document.getElementById("fullscreen-pomo-overlay");
  if (overlay) overlay.classList.add("hidden");
  clearInterval(timerInterval);
  timerInterval = null;
}

function resetTimer() {
  clearInterval(timerInterval);
  timerInterval = null;
  timerPaused = false;
  timerSeconds = 25 * 60;
  syncTimerDisplays();
}

function initClubPage() {
  const tbody = document.getElementById("schedule-tbody");
  const topicSelect = document.getElementById("club-topic");
  const user = getCurrentUser();
  if (!tbody || !user) return;

  if (!Array.isArray(user.schedule)) {
    user.schedule = JSON.parse(JSON.stringify(defaultScheduleTemplate));
  }

  renderScheduleTable();
  renderReflections();

  if (topicSelect) {
    topicSelect.innerHTML = books
      .map(b => `<option value="${b.title}">${b.title} (${b.clubName})</option>`)
      .join("");
  }
}

function renderScheduleTable() {
  const tbody = document.getElementById("schedule-tbody");
  const user = getCurrentUser();
  if (!tbody || !user) return;

  if (user.schedule.length === 0) {
    tbody.innerHTML = `<tr><td colspan="5">No schedule slots yet. Add your custom reading plan above!</td></tr>`;
    return;
  }

  tbody.innerHTML = user.schedule.map((slot, index) => `
    <tr>
      <td><strong>${slot.day}</strong></td>
      <td>${slot.time}</td>
      <td>${slot.activity}</td>
      <td><span class="genre-tag">${slot.mode}</span></td>
      <td><button type="button" class="clear-btn" onclick="deleteScheduleSlot(${index})">Remove</button></td>
    </tr>
  `).join("");
}

function addScheduleSlot(event) {
  event.preventDefault();
  const user = getCurrentUser();
  if (!user) return;

  const day = document.getElementById("sched-day").value;
  const time = document.getElementById("sched-time").value.trim();
  const activity = document.getElementById("sched-activity").value.trim();
  const mode = document.getElementById("sched-mode").value.trim();

  user.schedule.push({ day, time, activity, mode });
  saveAppState();
  renderScheduleTable();
  pushUserNotification(`Added ${day} reading slot: "${activity}".`);
  event.target.reset();
}

function deleteScheduleSlot(index) {
  const user = getCurrentUser();
  if (!user) return;
  user.schedule.splice(index, 1);
  saveAppState();
  renderScheduleTable();
}

function resetScheduleTemplate() {
  const user = getCurrentUser();
  if (!user) return;
  user.schedule = JSON.parse(JSON.stringify(defaultScheduleTemplate));
  saveAppState();
  renderScheduleTable();
}

function gradeQuiz(event) {
  event.preventDefault();
  const q1 = document.querySelector('input[name="q1"]:checked')?.value;
  const q2 = document.querySelector('input[name="q2"]:checked')?.value;
  const q3 = document.querySelector('input[name="q3"]:checked')?.value;

  let score = 0;
  if (q1 === "b") score++; // A Tale of Two Cities
  if (q2 === "c") score++; // Dr. John Watson
  if (q3 === "a") score++; // Mary Ann Evans

  const result = document.getElementById("quiz-result");
  if (result) {
    result.textContent = `You scored ${score} out of 3! ${score === 3 ? "🌟 Perfect Bookworm Score!" : "Nice work — try again anytime!"}`;
  }
  pushUserNotification(`Scored ${score}/3 on the Weekly Bookworm Quiz.`);
}

function postReview(event) {
  event.preventDefault();
  const user = getCurrentUser();
  if (!user) return;

  const book = document.getElementById("club-topic").value;
  const chapter = document.getElementById("chapter-num").value;
  const rating = document.getElementById("rating").value;
  const comment = document.getElementById("comment-text").value.trim();

  reviews.unshift({
    author: user.name,
    book: book,
    chapter: chapter,
    rating: rating,
    comment: comment
  });

  saveAppState();
  renderReflections();
  pushUserNotification(`Posted a chapter reflection on "${book}" (Ch. ${chapter}).`);
  event.target.reset();
}

function renderReflections() {
  const feed = document.getElementById("discussion-feed");
  if (!feed) return;

  if (reviews.length === 0) {
    feed.innerHTML = `<p class="section-sub">No reflections posted yet. Be the first to share a chapter note above!</p>`;
    return;
  }

  feed.innerHTML = reviews.map(r => `
    <article class="review-card">
      <div class="review-meta">
        <strong>${r.author}</strong> • <cite>${r.book}</cite> (Chapter ${r.chapter}) • <span>${r.rating}</span>
      </div>
      <blockquote><q>${r.comment}</q></blockquote>
    </article>
  `).join("");
}

// 10. PROFILE.HTML — MULTI-BOOK PAGE-BASED PROGRESS TRACKER
function initProfilePage() {
  const nameEl = document.getElementById("profile-name");
  const user = getCurrentUser();
  if (!nameEl || !user) return;

  nameEl.textContent = user.name;
  document.getElementById("profile-email-display").textContent = user.email;
  document.getElementById("profile-bio").textContent = user.bio;
  document.getElementById("profile-genre").textContent = `${user.personality} • ${user.genre}`;
  document.getElementById("profile-avatar").textContent = user.name.charAt(0).toUpperCase();

  const editVibe = document.getElementById("edit-vibe");
  const editBio = document.getElementById("edit-bio");
  if (editVibe) editVibe.value = user.genre;
  if (editBio) editBio.value = user.bio;

  // Populate book selector for adding custom books to progress tracker
  const bookSelect = document.getElementById("track-book-select");
  if (bookSelect) {
    bookSelect.innerHTML = `<option value="">-- Pick a book to track --</option>` +
      books.map(b => `<option value="${b.title}" data-pages="${b.totalPages}">${b.title} (${b.totalPages} pages)</option>`).join("");

    bookSelect.onchange = function () {
      const selectedOption = bookSelect.options[bookSelect.selectedIndex];
      const pages = selectedOption?.getAttribute("data-pages");
      const totalInput = document.getElementById("track-total-pages");
      if (pages && totalInput) totalInput.value = pages;
    };
  }

  renderMultiBookProgress();
  renderJoinedClubsOnProfile();
}

function updateProfileDetails(event) {
  event.preventDefault();
  const user = getCurrentUser();
  if (!user) return;

  const newGenre = document.getElementById("edit-vibe").value;
  const newBio = document.getElementById("edit-bio").value.trim();
  const matchedCircle = readingCircles.find(c => c.genre === newGenre) || readingCircles[0];

  user.genre = newGenre;
  user.personality = matchedCircle.personality;
  user.recommendedClub = matchedCircle.clubName;
  if (newBio) user.bio = newBio;

  saveAppState();
  initProfilePage();
  pushUserNotification(`Updated reading personality to ${matchedCircle.personality} (${newGenre}).`);
}

function addCustomReadingTracker(event) {
  event.preventDefault();
  const user = getCurrentUser();
  if (!user) return;

  const title = document.getElementById("track-book-select").value;
  const totalPages = Math.max(1, Number(document.getElementById("track-total-pages").value));
  const pagesRead = Math.min(totalPages, Math.max(0, Number(document.getElementById("track-pages-read").value)));

  user.bookProgress[title] = { pagesRead, totalPages };
  saveAppState();
  renderMultiBookProgress();
  pushUserNotification(`Updated "${title}" progress to ${pagesRead}/${totalPages} pages.`);
  event.target.reset();
}

function updateSingleBookPages(title, newPagesVal) {
  const user = getCurrentUser();
  if (!user || !user.bookProgress[title]) return;

  const total = user.bookProgress[title].totalPages;
  const clamped = Math.min(total, Math.max(0, Number(newPagesVal)));
  user.bookProgress[title].pagesRead = clamped;
  saveAppState();
  renderMultiBookProgress();
}

function removeBookTracker(title) {
  const user = getCurrentUser();
  if (!user) return;
  delete user.bookProgress[title];
  saveAppState();
  renderMultiBookProgress();
}

function renderMultiBookProgress() {
  const container = document.getElementById("multi-book-progress-list");
  const completedBadge = document.getElementById("books-completed-badge");
  const user = getCurrentUser();
  if (!container || !user) return;

  const entries = Object.entries(user.bookProgress || {});
  let finishedCount = 0;

  if (entries.length === 0) {
    container.innerHTML = `<p class="section-sub">No books being tracked yet. Pick a book above or join a reading circle on Discover!</p>`;
    if (completedBadge) completedBadge.textContent = "🏆 0 Books Finished";
    return;
  }

  container.innerHTML = entries.map(([title, data]) => {
    const pct = Math.min(100, Math.round((data.pagesRead / data.totalPages) * 100));
    if (pct === 100) finishedCount++;

    return `
      <article class="book-progress-card">
        <div style="display:flex; justify-content:space-between; align-items:start; gap:0.5rem;">
          <h4><cite>${title}</cite></h4>
          <button type="button" class="clear-btn" onclick="removeBookTracker('${title.replace(/'/g, "\\'")}')">✕</button>
        </div>
        <p class="section-sub" style="margin-bottom:0;">
          <strong>${pct}%</strong> completed (${data.pagesRead} of ${data.totalPages} pages)
        </p>
        <progress value="${pct}" max="100">${pct}%</progress>
        <div class="inline-page-update">
          <label class="section-sub" style="margin-bottom:0;">Current page:</label>
          <input type="number" min="0" max="${data.totalPages}" value="${data.pagesRead}"
            onchange="updateSingleBookPages('${title.replace(/'/g, "\\'")}', this.value)">
          <span class="section-sub" style="margin-bottom:0;">/ ${data.totalPages}</span>
        </div>
      </article>
    `;
  }).join("");

  if (completedBadge) {
    completedBadge.textContent = `🏆 ${finishedCount} Book${finishedCount === 1 ? "" : "s"} Finished`;
  }
}

function renderJoinedClubsOnProfile() {
  const list = document.getElementById("joined-clubs-list");
  const badge = document.getElementById("club-badge-count");
  const user = getCurrentUser();
  if (!list || !user) return;

  if (badge) badge.textContent = `📚 ${user.joinedClubs.length} Circle${user.joinedClubs.length === 1 ? "" : "s"} Joined`;

  if (user.joinedClubs.length === 0) {
    list.innerHTML = `<li>You haven't joined any reading circles yet. Visit <a href="discover.html">Discover</a> to join one!</li>`;
    return;
  }

  list.innerHTML = user.joinedClubs.map(club =>
    `<li><strong>${club}</strong> — <a href="club.html">Open Reading Room →</a></li>`
  ).join("");
}

// 11. BOOTSTRAP ON PAGE LOAD
loadAppState();
applySavedTheme();
if (enforceAuthGuard()) {
  updateNavbar();
  renderNotifications();
  initDiscoverPage();
  initClubPage();
  initProfilePage();
}