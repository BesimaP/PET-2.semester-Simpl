# Krav

## Funktionelle krav

*Beskriver hvad systemet skal kunne gøre – konkrete handlinger/features.*

1. Patienten skal kunne oprette en profil og logge ind
2. Patienten skal kunne oprette et nyt behandlingsforløb med en valgt type (Fertility, Cancer, Rehabilitation, Psychiatry, Other)
3. Patienten skal kunne se en tidslinje over hændelser i forløbet
4. Patienten skal kunne se og registrere kommende aftaler tilknyttet forløbet
5. Patienten skal kunne registrere medicinindtag
6. Patienten skal kunne registrere hormonværdier
7. Patienten skal kunne tilføje dagbogsnoter til sit forløb
8. For fertilitetsforløb: patienten skal kunne registrere rundedata (rundenummer, resultat) — *antal udtagne/befrugtede æg er planlagt, men ikke implementeret i UI endnu*
9. Patienten skal kunne se og redigere sin profil
10. Systemet skal understøtte forskellige forløbstyper via en fælles, abstrakt forløbsstruktur

## Non-funktionelle krav

*Beskriver hvordan systemet skal være – kvalitetsegenskaber, ikke konkrete handlinger.*

1. **Sikkerhed** – Adgangskoder skal ikke gemmes i klartekst i databasen; kun den enkelte patient kan tilgå sit eget forløb
2. **Dataintegritet** – Sletning af et forløb skal automatisk fjerne alt relateret data (løst med `ON DELETE CASCADE` i databasen)
3. **Ydeevne** – Oversigtssiden skal indlæses på under 2 sekunder ved normal brug
4. **Brugervenlighed** – En patient skal kunne registrere en note på maks. 3 klik fra dashboardet
5. **Udvidelighed** – En ny forløbstype skal kunne tilføjes ved at oprette én ny subklasse af `Journey`, uden at ændre eksisterende kode