// Shared responsive navigation
const menuButton = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav");
if (menuButton && nav) {
  menuButton.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("open");
    menuButton.setAttribute("aria-expanded", String(isOpen));
    menuButton.textContent = isOpen ? "×" : "☰";
  });
}

// The 12 compliment cards are deliberately editable. Add personal, true-to-her details.
const reasons = [
  "Because being Mushfika is already a whole vibe.",
  "Because your love for Hello Kitty deserves its own fan club.",
  "Because even your chidh-chidhi side is part of the girl I adore.",
  "Because the way you come running to me after your anger melts is my favourite plot twist.",
  "Because “Mummmmmaaaaaaaaaaaaaa paaariiii chiyeeeeeeeee paariii karr dooooooooo” is an iconic sentence.",
  "Because my childish, cutey, chaotic baby makes ordinary moments memorable.",
  "Because Chijjjooooo will always have a special place in our story.",
  "Because you deserve softness, patience and kindness — even on your grumpy days.",
  "Because your happiness matters, and I love seeing you smile.",
  "Because you make someone want to create an entire website just to praise you.",
  "Because there is nobody else who is exactly you.",
  "Because Asif is very, very lucky to love you."
];
const reasonGrid = document.querySelector("#reasonGrid");
if (reasonGrid) {
  let opened = new Set();
  const count = document.querySelector("#revealedCount");
  function renderReasons() {
    reasonGrid.innerHTML = "";
    reasons.forEach((reason, index) => {
      const card = document.createElement("button");
      card.className = "reason-card " + (opened.has(index) ? "revealed" : "closed");
      card.type = "button";
      card.innerHTML = `<span class="number">REASON ${String(index + 1).padStart(2, "0")}</span><span class="reveal">${opened.has(index) ? reason : "Tap to reveal ♡"}</span>`;
      card.addEventListener("click", () => {
        opened.has(index) ? opened.delete(index) : opened.add(index);
        renderReasons();
      });
      reasonGrid.appendChild(card);
    });
    count.textContent = opened.size;
  }
  document.querySelector("#resetReasons").addEventListener("click", () => { opened.clear(); renderReasons(); });
  renderReasons();
}


// Bollywood background song: starts only after the visitor taps the music control.
const backgroundMusic = document.querySelector("#backgroundMusic");
const musicToggle = document.querySelector("#musicToggle");
if (backgroundMusic && musicToggle) {
  const musicIcon = document.querySelector("#musicIcon");
  const musicLabel = document.querySelector("#musicLabel");
  musicToggle.addEventListener("click", async () => {
    if (backgroundMusic.paused) {
      try {
        await backgroundMusic.play();
        musicToggle.classList.add("playing");
        musicToggle.setAttribute("aria-label", "Pause background song");
        musicLabel.textContent = "Music on";
        musicIcon.textContent = "♫";
      } catch (error) {
        musicLabel.textContent = "Check song file";
      }
    } else {
      backgroundMusic.pause();
      musicToggle.classList.remove("playing");
      musicToggle.setAttribute("aria-label", "Play background song");
      musicLabel.textContent = "Play our song";
    }
  });
}
