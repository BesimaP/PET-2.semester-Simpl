// hormoner.js — JavaScript kun til hormoner.html (US9)
// TODO senere: kurve over målinger (når backend kan hente rigtige data)

// 1) Sæt dagens dato i dato-feltet, så man ikke skal vælge den selv

const dateField = document.getElementById("date");
setTodayIn(dateField);

// 2) Vælg enheden automatisk, når man vælger et hormon
//    (østradiol måles i pmol/L, LH og FSH i IU/L osv. - det skal patienten ikke selv vide)

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
