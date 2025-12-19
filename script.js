// check of gebruiker al gekozen heeft
const cookieChoice = localStorage.getItem("cookie-consent");
const banner = document.getElementById("cookie-banner");

// toon banner als geen keuze is gemaakt
if (cookieChoice === null) {
    banner.style.display = "block";
}

// accepteren
document.getElementById("accept-btn").addEventListener("click", () => {
    localStorage.setItem("cookie-consent", "accepted");
    banner.style.display = "none";
});

// weigeren
document.getElementById("decline-btn").addEventListener("click", () => {
    localStorage.setItem("cookie-consent", "declined");
    banner.style.display = "none";
});

const toggle = document.getElementById("bwToggle");
const body = document.body;

// Herstel vorige keuze
if (localStorage.getItem("lightMode") === "true") {
  body.classList.add("light");
  toggle.textContent = "Zwart";
}

// Toggle bij klikken
toggle.addEventListener("click", () => {
  body.classList.toggle("light");

  const isLight = body.classList.contains("light");
  toggle.textContent = isLight ? "Zwart" : "Wit/zwart";

  // Opslaan
  localStorage.setItem("lightMode", isLight);
});
