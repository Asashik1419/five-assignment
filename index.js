let token = 100;

const btn = document.querySelector(".myBtn");
const tokenEl = document.querySelector(".token");

btn.addEventListener("click", function () {
  if (token > 0) {
    token -= 20;
    tokenEl.innerText = token;

    if (token > -20) {
      alert("📞 calling National Emergency Number 999");
    }
  } else {
    alert("token nai");
  }
});