// dokumenter.js — JavaScript kun til dokumenter.html (US11)

// --- Tjek filen, når man har valgt den: kun PDF/JPG/PNG og højst 10 MB ---

// find fil-feltet og det tomme <p id="file-error"> under det (fejlbeskeden skrives derind)
const fileInput = document.getElementById("file");
const fileError = document.getElementById("file-error");

// "change" = når man har valgt en fil. Koden herinde kører hver gang.
fileInput.addEventListener("change", function () {

    fileError.textContent = "";             // start med at slette en evt. gammel fejlbesked

    const file = fileInput.files[0];        // .files = de valgte filer (en liste). [0] = den første

    // file.type er fx "application/pdf", "image/jpeg", "image/png" - eller "text/html" for en forkert fil
    // !== betyder "er ikke lig med". && betyder "og". Så: hvis den hverken er pdf, jpeg eller png ...
    if (file.type !== "application/pdf" && file.type !== "image/jpeg" && file.type !== "image/png") {
        fileError.textContent = "Kun PDF, JPG og PNG.";   // vis fejl under feltet (rød via .field-error i base.css)
        fileInput.value = "";                             // tøm feltet, så den forkerte fil ikke bliver uploadet
    }

    // file.size er i bytes. 10 MB = 10 * 1024 * 1024 bytes
    const maxSize = 10 * 1024 * 1024;
    if (file.size > maxSize) {                            // > betyder "større end"
        fileError.textContent = "Filen må højst være 10 MB.";
        fileInput.value = "";
    }

});

// --- "Fjern fil"-knappen: tøm feltet, hvis man fortryder sit valg ---

const removeButton = document.getElementById("remove-file");

// "click" = når man klikker på knappen
removeButton.addEventListener("click", function () {
    fileInput.value = "";                   // feltet viser "Ingen fil valgt" igen
    fileError.textContent = "";             // og en evt. fejlbesked forsvinder
});
