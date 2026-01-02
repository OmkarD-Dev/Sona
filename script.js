// Smooth scroll
function scrollToSection(id) {
  const el = document.getElementById(id);
  if (!el) return;
  window.scrollTo({
    top: el.offsetTop - 80,
    behavior: "smooth",
  });
}

// Love meter animation and days counter
window.addEventListener("load", function () {
  const meter = document.getElementById("loveMeter");
  if (meter) {
    setTimeout(() => {
      meter.style.width = "100%";
    }, 600);
  }

  // Days counter (EDIT startDate to your real date)
  const startDate = new Date(2024, 11, 24); // year, monthIndex(0-11), day
  const today = new Date();
  const diffTime = today - startDate;
  const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
  const daysCounter = document.getElementById("daysCounter");
  if (daysCounter) {
    let current = 0;
    const target = diffDays > 0 ? diffDays : 1;
    const step = Math.max(1, Math.floor(target / 80));
    const interval = setInterval(() => {
      current += step;
      if (current >= target) {
        current = target;
        clearInterval(interval);
      }
      daysCounter.textContent = String(current).padStart(3, "0");
    }, 30);
  }
});

// Memory cards flash
function flashLove(card) {
  if (!card) return;
  card.style.boxShadow = "0 0 0 0 rgba(255, 71, 126, 0.9)";
  card.style.transform = "translateY(-2px) scale(0.99)";
  setTimeout(() => {
    card.style.boxShadow =
      "0 20px 55px rgba(255, 175, 189, 0.55)";
    card.style.transform = "translateY(-6px) scale(1)";
  }, 180);
}

// QA accordion
document.querySelectorAll(".qa-card").forEach((card) => {
  card.addEventListener("click", () => {
    const isOpen = card.classList.contains("open");
    document.querySelectorAll(".qa-card").forEach((c) => c.classList.remove("open"));
    if (!isOpen) card.classList.add("open");
  });
});

// Surprise popup
const overlay = document.getElementById("overlay");
function openSurprise() {
  if (!overlay) return;
  overlay.classList.add("active");
}
function closeSurprise() {
  if (!overlay) return;
  overlay.classList.remove("active");
}
window.openSurprise = openSurprise;
window.closeSurprise = closeSurprise;

// Personal message generator
function showPersonalMessage() {
  const input = document.getElementById("nameInput");
  const output = document.getElementById("personalMessage");
  if (!input || !output) return;
  const rawName = input.value.trim();
  if (!rawName) {
    output.textContent = "Even without a name, my heart knows exactly who you are.";
    return;
  }
  const name = rawName[0].toUpperCase() + rawName.slice(1);
  const messages = [
    `${name}, if only you could see yourself through my eyes, you would never doubt how beautiful you truly are.`,
    `${name}, you are not just part of my life—you are the softest, brightest, most magical part of it.`,
    `${name}, every version of my future that makes sense has you in it, smiling like you always do.`,
    `${name}, your presence feels like home, your voice feels like comfort, and your love feels like my favorite miracle.`,
    `${name}, thank you for being my constant, my comfort, and my favorite “what are you doing?” text.`,
  ];
  const pick = messages[Math.floor(Math.random() * messages.length)];
  output.textContent = pick;
}
window.showPersonalMessage = showPersonalMessage;
