// common.js — kode der bruges på ALLE sider.
// Indlæses før sidens egen fil, så funktionerne herfra kan bruges dér.

// Viser en fejlbesked under et felt (bruger .field-error og aria-invalid fra base.css).
// input = feltet, besked = teksten der skal stå under det.
function visFejl(input, besked) {
  fjernFejl(input);
  input.setAttribute("aria-invalid", "true");        // rød ramme (base.css)
  const p = document.createElement("p");             // laver et nyt <p>-element
  p.className = "field-error";                       // rød lille tekst (base.css)
  p.textContent = besked;
  input.insertAdjacentElement("afterend", p);        // sætter <p> lige efter feltet
}

// Fjerner fejlbeskeden igen (kaldes før hvert nyt tjek)
function fjernFejl(input) {
  input.removeAttribute("aria-invalid");
  const gammel = input.nextElementSibling;           // elementet lige efter feltet
  if (gammel && gammel.classList.contains("field-error")) {
    gammel.remove();
  }
}
