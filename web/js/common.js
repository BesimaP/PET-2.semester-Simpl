// common.js — kode der bruges på ALLE sider (indlæses før sidens egen fil)
// TODO: fælles funktioner, fx til at vise en fejlbesked under et felt

// setTodayIn = skriver dagens dato i det datofelt, man giver den.
// Bruges på dagbog, hormoner og start-runde, så koden kun står ét sted.
// dateField (i parentesen) = feltet, som den side der kalder funktionen har fundet med getElementById
function setTodayIn(dateField) {
    const now = new Date();                 // spørg computeren: hvad er dato og klokkeslæt lige nu?
    const text = now.toISOString();         // lav det om til tekst, fx "2026-09-10T13:45:00.000Z"
    const today = text.slice(0, 10);        // behold kun de første 10 tegn: "2026-09-10" (formatet et datofelt forstår)
    dateField.value = today;                // .value = det der står i feltet. skriv datoen der

}
