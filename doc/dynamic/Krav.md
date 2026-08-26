# Krav

*Opdateret til at afspejle den udvidede domænemodel (Louises model), med separat login, diagnose, medicin-stamdata, selvstændig Round-entitet samt dokumenter og notifikationer.*

## Funktionelle krav

*Beskriver hvad systemet skal kunne gøre – konkrete handlinger/features.*

1. Patienten skal kunne oprette en brugerkonto (UserAccount) og logge ind
2. Patienten skal kunne oprette og redigere sin profil (navn, fødselsdato, diagnose)
3. Patienten skal kunne oprette et nyt fertilitetsforløb (FertilityJourney)
4. Patienten skal kunne starte en ny runde (Round) inden i sit forløb, med rundenummer og behandlingstype
5. Patienten skal kunne afslutte en runde med et resultat, og se sin fulde rundehistorik
6. Patienten skal kunne se en tidslinje over hændelser (Event) i en runde
7. Patienten skal kunne se og registrere kommende aftaler (Appointment) tilknyttet en runde
8. Patienten skal kunne registrere medicinindtag (MedicationLog) knyttet til en runde
9. Patienten skal kunne registrere hormonværdier (HormoneLog) knyttet til en runde
10. Patienten skal kunne tilføje dagbogsnoter (DiaryEntry) til en runde
11. Patienten skal kunne se dokumenter (Document) tilknyttet en runde, fx blodprøvesvar og behandlingsplan
12. Patienten skal kunne modtage og se notifikationer (Notification), fx medicinpåmindelser
13. Systemet skal understøtte forskellige forløbstyper via en fælles, abstrakt forløbsstruktur — *antal udtagne/befrugtede æg og embryodata er planlagt for Round, men endnu ikke implementeret i UI*

## Non-funktionelle krav

*Beskriver hvordan systemet skal være – kvalitetsegenskaber, ikke konkrete handlinger.*

1. **Sikkerhed** – Adgangskoder skal ikke gemmes i klartekst i databasen (UserAccount.passwordHash); kun den enkelte patient kan tilgå sit eget forløb
2. **Dataintegritet** – Sletning af et forløb skal automatisk fjerne alt relateret data (Rounds, Events, Documents osv.)
3. **Ydeevne** – Oversigtssiden skal indlæses på under 2 sekunder ved normal brug
4. **Brugervenlighed** – En patient skal kunne registrere en note på maks. 3 klik fra dashboardet
5. **Udvidelighed** – En ny forløbstype skal kunne tilføjes ved at oprette én ny subklasse af `Journey`, uden at ændre eksisterende kode