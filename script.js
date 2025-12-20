console.log("Script gestart");

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

function updateCountdown() {
    const now = new Date();

    // Volgende verjaardag (11 februari)
    let birthday = new Date(now.getFullYear(), 1, 11); // maand = 1 → februari

    // Als verjaardag dit jaar al voorbij is
    if (now > birthday) {
        birthday = new Date(now.getFullYear() + 1, 1, 11);
    }

    const diff = birthday - now;

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((diff / (1000 * 60)) % 60);
    const seconds = Math.floor((diff / 1000) % 60);

    document.getElementById("countdown").textContent =
        `${days} dagen ${hours} uur ${minutes} minuten ${seconds} seconden`;
}

// Elke seconde updaten
setInterval(updateCountdown, 1000);
updateCountdown();