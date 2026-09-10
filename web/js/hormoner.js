// hormoner.js — JavaScript kun til hormoner.html (US9)
// TODO senere: kurve over målinger (når backend kan hente rigtige data)

// ============================================================
// 1) Sæt dagens dato i dato-feltet, så man ikke skal vælge den selv
// ============================================================

// find <input type="date" id="date"> i html'en og gem feltet i en variabel
const dateField = document.getElementById("date");

const now = new Date();                 // spørg computeren: hvad er dato og klokkeslæt lige nu?
const text = now.toISOString();         // lav det om til tekst, fx "2026-09-10T13:45:00.000Z"
const today = text.slice(0, 10);        // behold kun de første 10 tegn: "2026-09-10" (formatet et datofelt forstår)
dateField.value = today;                // .value = det der står i feltet. skriv datoen der

// ============================================================
// 2) Vælg enheden automatisk, når man vælger et hormon
//    (østradiol måles i pmol/L, LH og FSH i IU/L osv. - det skal patienten ikke selv vide)
// ============================================================

// find de to dropdowns (<select>) og gem dem i hver sin variabel
const hormonSelect = document.getElementById("hormone");
const unitSelect = document.getElementById("unit");

// addEventListener = "lyt efter noget der sker". "change" = når man vælger noget nyt i dropdown'en.
// Koden inde i function () { ... } kører HVER gang det sker - ikke når siden loader.
hormonSelect.addEventListener("change", function () {

    // hormonSelect.value = value fra den <option> man har valgt (databasens navn, fx "E2_OESTRADIOL")
    // === betyder "er præcis lig med"
    // unitSelect.value = "pmol/L" vælger den <option> i enhed-dropdown'en, der har value="pmol/L"
    if (hormonSelect.value === "E2_OESTRADIOL") {
        unitSelect.value = "pmol/L";
    } else if (hormonSelect.value === "LH") {
        unitSelect.value = "IU/L";
    } else if (hormonSelect.value === "FSH") {
        unitSelect.value = "IU/L";
    } else if (hormonSelect.value === "PROGESTERONE") {
        unitSelect.value = "nmol/L";
    } else if (hormonSelect.value === "AMH") {
        unitSelect.value = "pmol/L";
    }
    // man kan stadig rette enheden bagefter - vi vælger bare et godt bud

});
