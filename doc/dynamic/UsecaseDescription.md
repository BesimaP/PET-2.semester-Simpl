## UC1: StartSystem
Systemet starter og viser en login-skærm.
Brugeren indtaster brugernavn og adgangskode og klikker Log ind.
Systemet validerer oplysningerne og indlæser patientdata fra databasen.
Hvis ingen konto findes sendes brugeren til UC2: ManageProfile.
Hvis patienten allerede har et fertilitetsforløb vises dashboardet.
Hvis patienten endnu ikke har et forløb sendes brugeren til UC3: CreateJourney.

Regnvejrsdag:
- Databasen kan ikke læses: Fejlbesked vises, brugeren kan prøve igen.
- Forkert brugernavn eller adgangskode: Systemet viser en fejlbesked og logger ikke ind.
- Felter er tomme: Systemet viser en fejlbesked og logger ikke ind.


## UC2: ManageProfile
Systemet viser en skærm med felter til navn, fødselsdato, brugernavn og adgangskode.
Brugeren udfylder felterne og klikker Gem.
Systemet opretter en ny patient og gemmer den i databasen.
Brugeren sendes videre til UC3: CreateJourney.
Brugeren kan efterfølgende redigere sine oplysninger eller slette sin konto og data.

Regnvejrsdag:
- Et eller flere påkrævede felter er tomme: Systemet viser en fejlbesked og gemmer ikke.
- Brugernavn er allerede i brug: Systemet viser en fejlbesked og gemmer ikke.


## UC3: CreateJourney
Systemet opretter et nyt FertilityJourney med status ACTIVE og gemmer det i databasen.
Journey_id gemmes i Session.
Systemet sender brugeren videre til dashboardet.

Regnvejrsdag:
- Forløbet kan ikke oprettes pga. en databasefejl: Systemet viser en fejlbesked.


## UC4: Diagnosis
Systemet viser en skærm med patientens registrerede diagnoser.
Brugeren klikker Tilføj Diagnose og udfylder navn og beskrivelse.
Brugeren klikker Gem. Systemet gemmer diagnosen i databasen, tilknyttet patienten, og opdaterer listen.

Regnvejrsdag:
- Navn er tomt: Systemet viser en fejlbesked og gemmer ikke.


## UC5: Appointment
Systemet viser en skærm med kommende aftaler i en kalendervisning, tilknyttet det aktive forløb.
Brugeren klikker Tilføj Aftale og udfylder dato, type (scanning, konsultation mv.) og sted.
Brugeren klikker Gem. Systemet gemmer aftalen i databasen og opdaterer listen.
Brugeren kan markere en aftale som gennemført.
Dashboardet viser kommende vigtige datoer.

Regnvejrsdag:
- Et eller flere påkrævede felter er tomme: Systemet viser en fejlbesked og gemmer ikke.
- Datoen er i fortiden: Systemet viser en advarsel og beder brugeren bekræfte inden der gemmes.


## UC6: Diary
Systemet viser en skærm til dagbogsnote med dato, titel og indhold, tilknyttet det aktive forløb.
Brugeren udfylder felterne og klikker Save.
Systemet gemmer noten i databasen.

Regnvejrsdag:
- Titel er tom: Systemet viser en fejlbesked og gemmer ikke.
- Indhold er tomt: Systemet viser en fejlbesked og gemmer ikke.
- Dato er ikke valgt: Systemet viser en fejlbesked og gemmer ikke.


## UC7: Notification
Systemet viser en skærm med patientens notifikationer, fx medicinpåmindelser eller besked om at et resultat er klar.
Systemet opretter automatisk notifikationer baseret på fx kommende medicindoser.
Brugeren kan åbne en notifikation, hvorved den markeres som læst (isRead).

Regnvejrsdag:
- Ingen notifikationer findes: Systemet viser en besked om at listen er tom.


## UC8: NewRound
Systemet viser en skærm til ny fertilitetsrunde med dagens dato som startdato.
Brugeren udfylder rundenummer og behandlingstype og klikker Start Round.
Ny runde oprettes med status PLANNED/IN_PROGRESS og result PENDING, og gemmes i databasen, tilknyttet det aktive forløb.
Dashboardet opdateres med den nye runde.

Regnvejrsdag:
- Rundenummer er tomt: Systemet viser en fejlbesked og opretter ikke en ny runde.


## UC9: HormoneLog
Systemet viser en skærm med hormonværdier for den aktive runde.
Brugeren klikker Tilføj Værdi og udfylder hormontype, værdi, enhed og dato.
Brugeren klikker Gem. Systemet gemmer hormonværdien i databasen og opdaterer listen.

Regnvejrsdag:
- Værdien er ikke et tal: Systemet viser en fejlbesked og gemmer ikke.


## UC10: MedicationLog
Systemet viser en skærm med tidligere medicinindtastninger for den aktive runde.
Brugeren klikker Tilføj Medicin, vælger en medicin fra stamdata (eller opretter en ny) og udfylder dosis og tidspunkt.
Brugeren klikker Gem. Systemet gemmer medicinregistreringen i databasen (med reference til Medication) og opdaterer listen.

Regnvejrsdag:
- Et eller flere påkrævede felter er tomme: Systemet viser en fejlbesked og gemmer ikke.


## UC11: Timeline
Systemet viser en skærm med alle hændelser (Event) for den aktive runde i kronologisk rækkefølge.
Brugeren kan klikke på en hændelse for at se detaljer.

Regnvejrsdag:
- Ingen hændelser findes for den aktive runde: Systemet viser en besked om at tidslinjen er tom.


## UC12: Document
Systemet viser en skærm med dokumenter tilknyttet den aktive runde, fx blodprøvesvar og behandlingsplan.
Brugeren vælger et dokument for at åbne det via den gemte filPath.

Regnvejrsdag:
- Ingen dokumenter findes for runden: Systemet viser en besked om at listen er tom.
- Filen kan ikke findes/åbnes: Systemet viser en fejlbesked.


## UC13: RoundHistory
Systemet viser en skærm med alle tidligere fertilitetsrunder for det aktive forløb.
Brugeren vælger en runde, og systemet viser detaljer inklusiv behandlingstype, antal udtagne æg, antal befrugtede æg og resultat.

Regnvejrsdag:
- Ingen tidligere runder findes: Systemet viser en besked om at der ingen historik er.


## UC14: EndRound
Systemet viser en mulighed for at markere den aktive runde som afsluttet.
Brugeren vælger et resultat (POSITIVE, NEGATIVE eller PENDING) og klikker End Round.
Systemet opdaterer rundens status til COMPLETED og gemmer det i databasen.
Patienten kan derefter starte en ny runde (UC8) under samme forløb.

Regnvejrsdag:
- Intet resultat er valgt: Systemet viser en fejlbesked og afslutter ikke runden.


## Fremtidige features
Følgende features er identificeret men ikke implementeret i denne version:
- Humør-felt på dagbogsnoter (UC6) — for at give patienten et nemt overblik over deres følelsesmæssige forløb
- Redigér og slet aftaler (UC5) — for at give patienten fuld kontrol over deres kalender
- Markér medicin som taget (UC10) — så medicinloggen kan bruges som daglig tjekliste
- Indtastning af eggsRetrieved, eggsFertilised, embryosCreated og embryosTransferred ved New/End Round (UC8/UC14) — felterne findes i domænemodellen, men mangler UI til indtastning
- Automatisk generering af APPOINTMENT_REMINDER-notifikationer (UC7), ud over MEDICATION_REMINDER
- Upload-funktion til dokumenter (UC12) — i dag kan dokumenter kun vises, ikke tilføjes af patienten selv