// dagbog.js — JavaScript kun til dagbog.html (US4)

// --- Sæt dagens dato som standard i dato-feltet ---

// find <input type="date" id="date"> i html'en og gem det i en variabel
const datoFelt = document.getElementById("date");

const now = new Date();                 // "lige nu" som en dato-værdi
const text = now.toISOString();         // lavet om til tekst, fx "2026-09-10T13:45:00.000Z"
const today = text.slice(0, 10);        // behold kun de første 10 tegn: "2026-09-10" (det format et datofelt forstår)
datoFelt.value = today;                 // skriv datoen i feltet




// --- Tæl noterne og skriv tallet i teksten under listen ---

// querySelectorAll = find ALLE der matcher (getElementById finder kun ét).
// ".notes li" = de <li> der ligger inde i <ul class="notes"> - altså én pr. note
const noter = document.querySelectorAll(".notes li");
const count = noter.length;             // .length = hvor mange der er i listen

// <p id="note-count"> er teksten "x noter i denne runde"
const countText = document.getElementById("note-count");
countText.textContent = count + " noter i denne runde.";   // textContent = elementets tekst. + sætter tal og tekst sammen
