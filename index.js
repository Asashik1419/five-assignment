let token = 100;
const tokenEl = document.querySelector(".token");
const callInfoEl = document.querySelector(".call-info");

document.querySelectorAll(".call-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    if (token > 0) {
      token -= 20;
      tokenEl.innerText = token;
      callInfoEl.textContent = btn.innerText;

      alert(btn.innerText);
    } else {
      alert("Token nai");
    }
  });
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
