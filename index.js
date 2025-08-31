let token = 100;
const tokenEl = document.querySelector(".token");
const historyEl = document.querySelector(".history");
const clearBtn = document.querySelector(".clear-btn");

document.querySelectorAll(".call-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    if (token > 0) {
      token -= 20;
      tokenEl.innerText = token;

      const card = btn.closest(".card");
      const title = card.querySelector(".title").innerText;
      const number = card.querySelector(".number").innerText;

      const now = new Date();
      const currentTime = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' });

      const alertText = `${title} ${number}`;
      alert(alertText);

      const div = document.createElement("div");
      div.classList.add("history-item");
      div.innerHTML = `
        <div class="history-title">${title}</div>
        <div class="history-number">${number}</div>
        <div class="history-time">${currentTime}</div>
      `;
      historyEl.appendChild(div);

    } else {
      alert("You don't have enough tokens. You will need 20 tokens to make a call.");
    }
  });
});

clearBtn.addEventListener("click", () => {
  historyEl.innerHTML = "";
});
// heart icon js
const count = document.querySelector(".count");
const hearts = document.querySelectorAll(".heart");
let counts = 0;

hearts.forEach(heart => {
  heart.addEventListener("click", function () {
    counts++;
    count.textContent = counts;
  });
});

// copy js

const counterBtn = document.querySelector(".counterBtn");
const copyBtns = document.querySelectorAll(".copyBtn");

let copy = 0;

copyBtns.forEach(btn => {
  btn.addEventListener("click", function () {
    copy++;
    counterBtn.textContent = copy;
    alert("Copied successfully");
  });
});

document.addEventListener("click", async (e) => {
  const btn = e.target.closest(".copy-btn");
  if (!btn) return;

  const card = btn.closest(".card");
  const source = card?.querySelector(".copy-text");
  if (!source) return;

  const text = source.innerText.trim();

  try {
    await navigator.clipboard.writeText(text);
    showCopied(card);
  } catch (err) {
    fallbackCopy(text, card);
  }
});
