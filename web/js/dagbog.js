// dagbog.js — JavaScript kun til dagbog.html (US4)

// --- Sæt dagens dato som standard i dato-feltet ---

// find <input type="date" id="date"> i html'en og gem det i en variabel
const datoFelt = document.getElementById("date");
setTodayIn(datoFelt);

// --- Tæl noterne og skriv tallet i teksten under listen ---

// querySelectorAll = find ALLE der matcher (getElementById finder kun ét).
// ".notes li" = de <li> der ligger inde i <ul class="notes"> - altså én pr. note
const noter = document.querySelectorAll(".notes li");
const count = noter.length;             // .length = hvor mange der er i listen

// <p id="note-count"> er teksten "x noter i denne runde"
const countText = document.getElementById("note-count");
countText.textContent = count + " noter i denne runde.";   // textContent = elementets tekst. + sætter tal og tekst sammen
