/* =========================================================
   Ink & Elsewhere — Core Application Logic
   Authors: Tanzil, Mitakshi Pangariya & Deeksha Dahiya
   ========================================================= */

// 1. BOOK CONSTRUCTOR (Matches Unit IV Slide 52)
function Book(id, title, author, year, genre, rating, cover) {
  this.id = id;
  this.title = title;
  this.author = author;
  this.year = year;
  this.genre = genre;
  this.rating = rating;
  this.cover = cover;
}

// 2. DEFAULT STARTER CATALOG (Includes Lecture Slide Books + Classics/Fiction)
const defaultBooks = [
  new Book(1, "Dune", "Frank Herbert", 1965, "Sci-Fi", "★★★★★", "https://covers.openlibrary.org/b/isbn/9780441172719-M.jpg"),
  new Book(2, "Little Women", "Louisa May Alcott", 1868, "Classics", "★★★★★", "https://covers.openlibrary.org/b/isbn/9780147514011-M.jpg"),
  new Book(3, "The Night Circus", "Erin Morgenstern", 2011, "Fantasy", "★★★★☆", "https://covers.openlibrary.org/b/isbn/9780307744432-M.jpg"),
  new Book(4, "Atomic Habits", "James Clear", 2018, "Self-Growth", "★★★★★", "https://covers.openlibrary.org/b/isbn/9780735211292-M.jpg"),
  new Book(5, "To Kill a Mockingbird", "Harper Lee", 1960, "Classics", "★★★★★", "https://covers.openlibrary.org/b/isbn/9780060935467-M.jpg"),
  new Book(6, "The Catcher in the Rye", "J.D. Salinger", 1951, "Classics", "★★★★☆", "https://covers.openlibrary.org/b/isbn/9780316769488-M.jpg"),
  new Book(7, "HTML5 Black Book", "Kogent Learning Solutions", 2016, "Academic / Web Tech", "★★★★★", "https://ui-avatars.com/api/?name=HTML5+Book&background=275992&color=FFFAED&size=150")
];

// 3. PRE-LOADED TEAM READER PROFILES
const defaultUsers = {
  "Tanzil": {
    name: "Tanzil",
    bio: "Fantasy & sci-fi enthusiast exploring whimsical worlds.",
    genre: "Fantasy & Sci-Fi",
    progress: 35,
    joinedClubs: [],
    notifications: []
  },
  "Mitakshi Pangariya": {
    name: "Mitakshi Pangariya",
    bio: "Lover of timeless classics and cozy evening reads.",
    genre: "Classics",
    progress: 50,
    joinedClubs: [],
    notifications: []
  },
  "Deeksha Dahiya": {
    name: "Deeksha Dahiya",
    bio: "Always chasing mystery novels and late-night page-turners.",
    genre: "Fantasy",
    progress: 40,
    joinedClubs: [],
    notifications: []
  }
};

// 4. LOAD & SAVE STATE IN LOCALSTORAGE (Safe try/catch from Unit IV)
let books = [];
let users = {};
let activeUserName = "Tanzil";

function loadAppState() {
  try {
    const savedBooks = JSON.parse(localStorage.getItem("ink_books"));
    books = Array.isArray(savedBooks) && savedBooks.length > 0 ? savedBooks : defaultBooks;

    const savedUsers = JSON.parse(localStorage.getItem("ink_users"));
    users = savedUsers && Object.keys(savedUsers).length > 0 ? savedUsers : defaultUsers;

    const savedActive = localStorage.getItem("ink_active_user");
    if (savedActive && users[savedActive]) {
      activeUserName = savedActive;
    }
  } catch (error) {
    books = defaultBooks;
    users = defaultUsers;
  }
}

function saveAppState() {
  localStorage.setItem("ink_books", JSON.stringify(books));
  localStorage.setItem("ink_users", JSON.stringify(users));
  localStorage.setItem("ink_active_user", activeUserName);
}

function getCurrentUser() {
  return users[activeUserName] || users["Tanzil"];
}

// 5. USER-RELEVANT NOTIFICATIONS
function pushUserNotification(message) {
  const user = getCurrentUser();
  const time = new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
  user.notifications.unshift(`${message} (${time})`);
  if (user.notifications.length > 10) {
    user.notifications.pop();
  }
  saveAppState();
  renderNotifications();
}

function renderNotifications() {
  const feed = document.getElementById("activity-feed");
  if (!feed) return;

  const user = getCurrentUser();
  if (user.notifications.length === 0) {
    feed.innerHTML = `<li>No notifications yet for ${user.name}. Join a club or complete an activity!</li>`;
    return;
  }

  feed.innerHTML = user.notifications.map(note => `<li>${note}</li>`).join("");
}

function clearNotifications() {
  const user = getCurrentUser();
  user.notifications = [];
  saveAppState();
  renderNotifications();
}

// 6. SHARED NAVBAR & DARK MODE ("MIDNIGHT WISTERIA")
function updateNavbar() {
  const user = getCurrentUser();
  const badge = document.getElementById("active-user-badge");
  const count = document.getElementById("club-count");

  if (badge) badge.textContent = `Reader: ${user.name}`;
  if (count) count.textContent = user.joinedClubs.length;
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

// 7. INDEX.HTML — CATALOG RENDERING, SEARCH, JOIN CLUB & ADD BOOK
function renderCatalog(bookList) {
  const grid = document.getElementById("book-grid");
  if (!grid) return;

  const user = getCurrentUser();
  grid.innerHTML = "";

  if (bookList.length === 0) {
    grid.innerHTML = `<p class="section-sub">No matching books found. Try another keyword or genre!</p>`;
    return;
  }

  bookList.forEach(book => {
    const isJoined = user.joinedClubs.includes(book.title);
    const btnText = isJoined ? "✓ Joined Club" : "+ Join Club";
    const btnClass = isJoined ? "join-btn joined" : "join-btn";

    grid.innerHTML += `
      <article class="book-card">
        <div>
          <div class="card-top">
            <img src="${book.cover}" alt="${book.title} cover" class="book-cover">
            <div class="book-info">
              <h3><cite>${book.title}</cite></h3>
              <p>${book.author} (${book.year})</p>
              <div class="stars">${book.rating}</div>
            </div>
          </div>
          <span class="genre-tag">${book.genre}</span>
        </div>
        <button type="button" class="${btnClass}" onclick="toggleJoinClub('${book.title.replace(/'/g, "\\'")}')">
          ${btnText}
        </button>
      </article>
    `;
  });
}

function filterCatalog() {
  const searchInput = document.getElementById("search-input");
  const genreSelect = document.getElementById("genre-select");
  if (!searchInput || !genreSelect) return;

  const query = searchInput.value.toLowerCase().trim();
  const genre = genreSelect.value;

  const filtered = books.filter(book => {
    const matchesText = book.title.toLowerCase().includes(query) || book.author.toLowerCase().includes(query);
    const matchesGenre = genre === "All" || book.genre === genre;
    return matchesText && matchesGenre;
  });

  renderCatalog(filtered);
}

function toggleJoinClub(bookTitle) {
  const user = getCurrentUser();
  const index = user.joinedClubs.indexOf(bookTitle);

  if (index === -1) {
    user.joinedClubs.push(bookTitle);
    pushUserNotification(`You joined the "${bookTitle}" reading circle.`);
  } else {
    user.joinedClubs.splice(index, 1);
    pushUserNotification(`You left the "${bookTitle}" reading circle.`);
  }

  saveAppState();
  updateNavbar();
  filterCatalog();
}

function addNewBook(event) {
  event.preventDefault();
  const title = document.getElementById("new-title").value.trim();
  const author = document.getElementById("new-author").value.trim();
  const year = Number(document.getElementById("new-year").value);
  const genre = document.getElementById("new-genre").value;
  const coverInput = document.getElementById("new-cover").value.trim();

  const cover = coverInput !== ""
    ? coverInput
    : `https://ui-avatars.com/api/?name=${encodeURIComponent(title)}&background=947EBF&color=FFFAED&size=150`;

  const newBook = new Book(Date.now(), title, author, year, genre, "★★★★★", cover);
  books.unshift(newBook);
  saveAppState();

  pushUserNotification(`Added "${title}" to the Ink & Elsewhere catalog.`);
  event.target.reset();
  filterCatalog();
}

// 8. CLUB.HTML — 25-MINUTE SPRINT TIMER, TRIVIA QUIZ & REVIEWS
let timerSeconds = 25 * 60;
let timerInterval = null;

function updateTimerDisplay() {
  const display = document.getElementById("timer-display");
  if (!display) return;
  const mins = String(Math.floor(timerSeconds / 60)).padStart(2, "0");
  const secs = String(timerSeconds % 60).padStart(2, "0");
  display.textContent = `${mins}:${secs}`;
}

function startTimer() {
  if (timerInterval !== null) return;
  const status = document.getElementById("timer-status");
  if (status) status.textContent = "Reading sprint in progress... stay focused!";

  timerInterval = setInterval(() => {
    if (timerSeconds > 0) {
      timerSeconds--;
      updateTimerDisplay();
    } else {
      clearInterval(timerInterval);
      timerInterval = null;
      if (status) status.textContent = "Sprint complete! Great job!";
      pushUserNotification("Completed a 25-minute silent reading sprint!");
    }
  }, 1000);
}

function pauseTimer() {
  clearInterval(timerInterval);
  timerInterval = null;
  const status = document.getElementById("timer-status");
  if (status) status.textContent = "Sprint paused.";
}

function resetTimer() {
  clearInterval(timerInterval);
  timerInterval = null;
  timerSeconds = 25 * 60;
  updateTimerDisplay();
  const status = document.getElementById("timer-status");
  if (status) status.textContent = "Ready when you are.";
}

function gradeQuiz(event) {
  event.preventDefault();
  const q1 = document.querySelector('input[name="q1"]:checked')?.value;
  const q2 = document.querySelector('input[name="q2"]:checked')?.value;
  const q3 = document.querySelector('input[name="q3"]:checked')?.value;

  let score = 0;
  if (q1 === "a") score++;
  if (q2 === "b") score++;
  if (q3 === "b") score++;

  const result = document.getElementById("quiz-result");
  if (result) {
    result.textContent = `You scored ${score} out of 3! ${score === 3 ? "🌟 Literary Master!" : "Keep reading!"}`;
  }
  pushUserNotification(`Scored ${score}/3 on the Weekly Chapter & Literary Quiz.`);
}

function postReview(event) {
  event.preventDefault();
  const user = getCurrentUser();
  const book = document.getElementById("club-topic").value;
  const chapter = document.getElementById("chapter-num").value;
  const rating = document.getElementById("rating").value;
  const comment = document.getElementById("comment-text").value.trim();

  const feed = document.getElementById("discussion-feed");
  if (feed) {
    const article = document.createElement("article");
    article.className = "review-card";
    article.innerHTML = `
      <div class="review-meta">
        <strong>${user.name}</strong> • <cite>${book}</cite> (Chapter ${chapter}) • <span>${rating}</span>
      </div>
      <blockquote><q>${comment}</q></blockquote>
    `;
    feed.prepend(article);
  }

  pushUserNotification(`Posted a reflection on "${book}" (Chapter ${chapter}).`);
  event.target.reset();
}

// 9. PROFILE.HTML — SWITCHER, PROGRESS SLIDER & REGISTRATION
function renderProfilePage() {
  const nameEl = document.getElementById("profile-name");
  if (!nameEl) return;

  const user = getCurrentUser();
  nameEl.textContent = user.name;
  document.getElementById("profile-bio").textContent = user.bio;
  document.getElementById("profile-genre").textContent = user.genre;
  document.getElementById("profile-avatar").textContent = user.name.charAt(0).toUpperCase();

  document.getElementById("progress-percent").textContent = `${user.progress}%`;
  document.getElementById("reading-progress").value = user.progress;
  document.getElementById("progress-slider").value = user.progress;
  document.getElementById("club-badge-count").textContent = `📚 ${user.joinedClubs.length} Clubs Joined`;

  // Sync switcher dropdown options
  const switcher = document.getElementById("profile-switcher");
  if (switcher) {
    switcher.innerHTML = Object.keys(users)
      .map(uName => `<option value="${uName}" ${uName === activeUserName ? "selected" : ""}>Active Account: ${uName}</option>`)
      .join("");
  }

  // Render joined clubs list
  const clubsList = document.getElementById("joined-clubs-list");
  if (clubsList) {
    if (user.joinedClubs.length === 0) {
      clubsList.innerHTML = `<li>You haven't joined any book clubs yet. Visit <a href="index.html">Discover</a> to pick one!</li>`;
    } else {
      clubsList.innerHTML = user.joinedClubs
        .map(club => `<li><strong>${club}</strong> — <a href="club.html">Enter Club Room →</a></li>`)
        .join("");
    }
  }
}

function switchUser(selectedName) {
  if (users[selectedName]) {
    activeUserName = selectedName;
    saveAppState();
    updateNavbar();
    renderProfilePage();
    renderNotifications();
  }
}

function updateProgress(val) {
  const user = getCurrentUser();
  user.progress = Number(val);
  document.getElementById("progress-percent").textContent = `${user.progress}%`;
  document.getElementById("reading-progress").value = user.progress;
  saveAppState();
}

function registerNewUser(event) {
  event.preventDefault();
  const name = document.getElementById("reg-name").value.trim();
  const genre = document.getElementById("reg-course").value;
  const bio = document.getElementById("reg-bio").value.trim();

  users[name] = {
    name: name,
    bio: bio,
    genre: genre,
    progress: 10,
    joinedClubs: [],
    notifications: [`Welcome to Ink & Elsewhere, ${name}!`]
  };

  activeUserName = name;
  saveAppState();
  updateNavbar();
  renderProfilePage();
  renderNotifications();
  event.target.reset();
}

// 10. INITIALIZE ON PAGE LOAD
loadAppState();
applySavedTheme();
updateNavbar();
renderNotifications();
renderCatalog(books);
renderProfilePage();