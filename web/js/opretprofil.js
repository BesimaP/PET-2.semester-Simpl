// opretprofil.js — JavaScript kun til opretprofil.html (US6a)
// Tjekker formularen i browseren, FØR den sendes. Databasen tjekker igen bagefter.

const form = document.querySelector("form");           // den ene formular på siden
const brugernavn = document.getElementById("username");
const adgangskode = document.getElementById("password");

// "submit" sker når man trykker på knappen (eller Enter)
form.addEventListener("submit", function (event) {
  let ok = true;

  // brugernavn: mindst 3 tegn og ingen mellemrum
  if (brugernavn.value.trim().length < 3) {
    visFejl(brugernavn, "Brugernavnet skal være mindst 3 tegn.");
    ok = false;
  } else if (brugernavn.value.includes(" ")) {
    visFejl(brugernavn, "Brugernavnet må ikke indeholde mellemrum.");
    ok = false;
  } else {
    fjernFejl(brugernavn);
  }

  // adgangskode: mindst 8 tegn (samme regel som minlength, men med vores egen besked)
  if (adgangskode.value.length < 8) {
    visFejl(adgangskode, "Adgangskoden skal være mindst 8 tegn.");
    ok = false;
  } else {
    fjernFejl(adgangskode);
  }

  // preventDefault = stop formularen i at blive sendt, hvis noget er galt
  if (!ok) {
    event.preventDefault();
  }
});
