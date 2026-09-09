// min-profil.js — JavaScript kun til min-profil.html (US6b)

// --- Skift adgangskode: de to nye koder skal være ens ---
const nyKode = document.getElementById("new-password");
const gentagKode = document.getElementById("repeat-password");
const kodeForm = nyKode.closest("form");             // closest = den nærmeste <form> udenom feltet

kodeForm.addEventListener("submit", function (event) {
  if (nyKode.value !== gentagKode.value) {           // !== betyder "er ikke ens"
    visFejl(gentagKode, "De to adgangskoder er ikke ens.");
    event.preventDefault();                          // send ikke formularen
  } else {
    fjernFejl(gentagKode);
  }
});

// --- Slet konto: spørg først (Nielsen #5: forebyg fejl) ---
const sletLink = document.getElementById("delete-account");

sletLink.addEventListener("click", function (event) {
  event.preventDefault();                            // linket skal ikke gå nogen steder
  const sikker = confirm("Er du sikker? Alle dine data slettes og kan ikke gendannes.");
  if (sikker) {
    // TODO: kald backend, der sletter kontoen (US6b)
    window.location.href = "login.html";
  }
});
