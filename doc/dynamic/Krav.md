# Krav

*Kravene afspejler domænemodellen (Patient → FertilityJourney → Round) med separat login (UserAccount), diagnoser, medicin-stamdata, dokumenter og notifikationer. Hvert funktionelt krav svarer til én user story.*

## Funktionelle krav

*Beskriver hvad systemet skal kunne gøre – konkrete handlinger/features.*

1. Patienten skal kunne oprette en brugerkonto (UserAccount) og logge ind (US5, US6a)
2. Patienten skal kunne oprette, redigere og slette sin profil (navn, fødselsdato) (US6a, US6b)
3. Patienten skal kunne registrere sine diagnoser (Diagnosis) på profilen (US7)
4. Patienten skal kunne oprette et nyt fertilitetsforløb (FertilityJourney) (US1)
5. Patienten skal kunne starte en ny runde (Round) i sit forløb med rundenummer og behandlingstype (IVF, ICSI, IUI, FET) (US10a)
6. Patienten skal kunne afslutte en runde med et resultat og se sin fulde rundehistorik (US10a, US10b)
7. Patienten skal kunne se en tidslinje over hændelser (Event) i en runde (US2)
8. Patienten skal kunne se og registrere kommende aftaler (Appointment) tilknyttet sit forløb (US3)
9. Patienten skal kunne registrere medicinindtag (MedicationLog) med reference til medicin-stamdata (Medication), knyttet til en runde (US8)
10. Patienten skal kunne registrere hormonværdier (HormoneLog) knyttet til en runde (US9)
11. Patienten skal kunne tilføje dagbogsnoter (DiaryEntry) til sit forløb (US4)
12. Patienten skal kunne tilføje og se dokumenter (Document) tilknyttet en runde, fx blodprøvesvar og behandlingsplan (US11)
13. Patienten skal kunne modtage og se notifikationer (Notification), fx medicinpåmindelser (US12)

## Non-funktionelle krav

*Beskriver hvordan systemet skal være – kvalitetsegenskaber, ikke konkrete handlinger.*

1. **Sikkerhed** – Adgangskoder gemmes aldrig i klartekst i databasen (UserAccount.password gemmes som hash); kun den enkelte patient kan tilgå sit eget forløb
2. **Dataintegritet** – Sletning af en konto skal automatisk fjerne alt patientens data (forløb, runder, logs, dokumenter og notifikationer)
3. **Ydeevne** – Oversigtssiden skal indlæses på under 2 sekunder ved normal brug
4. **Brugervenlighed** – En patient skal kunne registrere en dagbogsnote på maks. 3 klik fra dashboardet
5. **Udvidelighed** – Nye typer (fx en ny aftaletype eller hormontype) skal kunne tilføjes ved at udvide den relevante enum, uden at ændre eksisterende logik