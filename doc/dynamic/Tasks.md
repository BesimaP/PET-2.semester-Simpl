# Tasks per user story

## User story 1 – Oprette fertilitetsforløb
- [ ]  Lav layout til at oprette et nyt fertilitetsforløb
- [ ]  Gem det nye forløb i databasen med startdato sat automatisk
- [ ]  Vis det nye forløb på patientens oversigt
- [ ]  Test at oprettelsen virker og bliver synlig

## User story 2 – Tidslinje (Round)
- [ ]  Lav layout til tidslinjevisningen for en runde
- [ ]  Hent og sortér hændelser (Event) efter dato fra databasen
- [ ]  Sørg for at tidslinjen opdateres automatisk, når en ny hændelse tilføjes
- [ ]  Test sorteringen og live-opdateringen

## User story 3 – Aftaler (Journey)
- [ ]  Lav layout til aftaleoversigten
- [ ]  Hent og sortér aftaler efter dato (nærmeste først)
- [ ]  Vis dato, type og lokation for hver aftale
- [ ]  Sørg for korrekt tilknytning til det rigtige forløb, hvis patienten har flere
- [ ]  Test sortering og korrekt tilknytning

## User story 4 – Dagbogsnoter (Journey)
- [ ]  Lav layout til at skrive og gemme en note
- [ ]  Gem noten i databasen med dato, titel og forløbs-tilknytning
- [ ]  Vis listen af tidligere noter til patienten
- [ ]  Test hele flowet fra start til slut

## User story 5 – Login
- [ ]  Lav layout til login-skærmen
- [ ]  Tjek brugernavn/adgangskode mod databasen
- [ ]  Håndter fejlscenariet: bruger uden profil henvises til oprettelse (User story 6)
- [ ]  Lav layout til at redigere profiloplysninger
- [ ]  Test både succesfuldt login og fejlscenariet

## User story 6 – Oprette profil
- [ ]  Lav layout til profiloprettelse (navn, fødselsdato, brugernavn, adgangskode)
- [ ]  Gem den nye profil i databasen
- [ ]  Tilføj validering: brugernavn allerede taget / manglende felter
- [ ]  Test både succesfuld oprettelse og fejlmeddelelser

## User story 7 – Diagnoser
- [ ]  Lav layout til at registrere en ny diagnose (navn, beskrivelse)
- [ ]  Gem diagnosen i databasen, tilknyttet patienten
- [ ]  Lav layout til at vise alle patientens registrerede diagnoser
- [ ]  Test at flere diagnoser kan registreres og vises samtidig

## User story 8 – Medicin
- [ ]  Opret Medication-stamdata (navn, beskrivelse) som kan genbruges på tværs af registreringer
- [ ]  Lav layout til at registrere medicinindtag (vælg medicin, dosis, tidspunkt) på en aktiv runde
- [ ]  Gem registreringen i databasen, med reference til den valgte Medication
- [ ]  Lav layout til medicinlisten, der viser tidligere registreringer
- [ ]  Test at data gemmes og vises korrekt, inkl. korrekt reference til Medication

## User story 9 – Hormonlog
- [ ]  Lav layout til at registrere hormontype, værdi, enhed og dato
- [ ]  Gem målingen i databasen, tilknyttet den aktive Round
- [ ]  Implementér logik til at finde og vise den seneste måling
- [ ]  Test registrering og "seneste værdi"-visning

## User story 10 – Rundedata og rundehistorik
- [ ]  Lav layout til at starte en ny runde (rundenummer, behandlingstype)
- [ ]  Lav layout til at afslutte en runde med et resultat
- [ ]  Gem resultatet på den specifikke Round, når den afsluttes
- [ ]  Lav layout til rundehistorik, der viser alle Rounds tilknyttet forløbet
- [ ]  Test start, afslutning og historikvisning

## User story 11 – Dokumenter
- [ ]  Lav layout til dokumentlisten for en runde (titel, type)
- [ ]  Implementér upload/gemning af dokumenter, tilknyttet filePath
- [ ]  Lav layout til at åbne og vise et valgt dokument
- [ ]  Test at dokumenter kan gemmes, listes og åbnes korrekt

## User story 12 – Notifikationer
- [ ]  Implementér logik der genererer en notifikation, når en medicindosis nærmer sig (MEDICATION_REMINDER)
- [ ]  Lav layout til notifikationslisten (titel, besked, isRead-status)
- [ ]  Implementér markering af en notifikation som læst
- [ ]  Test at notifikationer genereres korrekt og kan markeres som læst