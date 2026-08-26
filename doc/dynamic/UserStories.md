# User stories med acceptkriterier

*Hvert acceptkriterie følger Givet/Når/Så-formatet (Gherkin), med en kort forklaring af, hvad det konkret tester. Opdateret til at matche den endelige domænemodel (Patient → FertilityJourney → Round, med Diagnosis, Document og Notification tilføjet).*

### User story 1
Som patient vil jeg kunne oprette et nyt fertilitetsforløb, så jeg kan begynde at følge min behandling fra start.

**Acceptkriterier:**
- Acceptkriterie 1: "Givet en patient er logget ind, når patienten opretter et nyt fertilitetsforløb, så vises det nye forløb på patientens oversigt" → tester at selve oprettelsen virker og bliver synlig (en patient kan godt have flere forløb over tid)
- Acceptkriterie 2: "Givet at forløbet oprettes, når det gennemføres, så sættes startdato automatisk" → tester en specifik teknisk detalje (at man ikke selv skal indtaste dato)

### User story 2
Som patient vil jeg kunne se en tidslinje over hændelser i en runde, så jeg ved, hvor langt jeg er nået, uden at skulle spørge min klinik.

**Acceptkriterier:**
- Acceptkriterie 1: "Givet en runde med registrerede hændelser, når patienten åbner tidslinjen, så vises hændelserne sorteret efter dato" → tester at sorteringen er korrekt
- Acceptkriterie 2: "Givet en ny hændelse registreres, når den gemmes, så vises hændelsen på tidslinjen i korrekt kronologisk rækkefølge, uden at patienten skal genindlæse siden" → tester at tidslinjen reagerer live, uden manuel genindlæsning

### User story 3
Som patient vil jeg kunne se mine kommende aftaler, så jeg ikke overser vigtige tider i mit forløb.

**Acceptkriterier:**
- Acceptkriterie 1: "Givet flere aftaler registreret, når aftaleoversigten åbnes, så vises de sorteret efter dato, nærmeste først" → tester sorteringslogikken
- Acceptkriterie 2: "Givet en oprettet aftale, når den vises i listen, så fremgår dato, type og lokation" → tester at de rigtige felter faktisk er synlige
- Acceptkriterie 3: "Givet flere forløb, når aftalerne vises, så knyttes hver aftale til det korrekte forløb" → tester at data ikke blandes sammen mellem forløb

### User story 4
Som patient vil jeg kunne tilføje dagbogsnoter til mit forløb, så jeg har et bedre overblik over mine tanker og følelser lige i momentet.

**Acceptkriterier:**
- Acceptkriterie 1: "Givet en fritekst-note skrives og gemmes, så gemmes den med dato og titel" → tester at gem-funktionen virker med de rigtige felter
- Acceptkriterie 2: "Givet en note gemmes, når den vises igen, så er den tilknyttet det aktive forløb" → tester korrekt tilknytning

### User story 5
Som patient vil jeg kunne logge ind, så jeg kan få adgang til mit eget, private forløb.

**Acceptkriterier:**
- Acceptkriterie 1: "Givet en bruger uden profil forsøger at logge ind, når login fejler pga. manglende profil, så vises en mulighed for at oprette en ny profil (jf. User story 6)" → tester at nye brugere korrekt henvises videre til oprettelse
- Acceptkriterie 2: "Givet korrekt brugernavn og adgangskode, når de indtastes, så logges brugeren ind og får adgang til eget forløb" → tester den centrale sikkerhedsfunktion
- Acceptkriterie 3: "Givet en logget-ind patient, når profilen redigeres, så kan navn og fødselsdato opdateres" → tester redigeringsfunktionen

### User story 6
Som patient vil jeg kunne oprette en profil, så jeg kan blive registreret som bruger af systemet.

**Acceptkriterier:**
- Acceptkriterie 1: "Givet en ny bruger uden profil, når navn, fødselsdato, brugernavn og adgangskode oprettes, så oprettes en ny patientprofil" → tester at oprettelsen lykkes med alle felter
- Acceptkriterie 2: "Givet oplysninger er indtastet forkert eller brugernavn taget, så kommer fejlmeddelelse om at prøve igen" → tester fejlhåndtering ved ugyldig oprettelse

### User story 7
Som patient vil jeg kunne registrere mine diagnoser, så min behandler og jeg selv har overblik over min sygdomshistorik.

**Acceptkriterier:**
- Acceptkriterie 1: "Givet en logget-ind patient, når en ny diagnose med navn og beskrivelse registreres, så gemmes diagnosen på patientens profil" → tester at oprettelsen lykkes
- Acceptkriterie 2: "Givet flere registrerede diagnoser, når profilen ses, så vises alle patientens diagnoser" → tester at en patient kan have flere diagnoser samtidig

### User story 8
Som patient vil jeg kunne registrere mit medicinindtag, så jeg kan holde styr på, om jeg har taget min medicin som planlagt.

**Acceptkriterier:**
- Acceptkriterie 1: "Givet en aktiv runde, når en registrering oprettes med en valgt medicin, dosis og tidspunkt, så gemmes registreringen tilknyttet den korrekte medicin" → tester at registreringen refererer korrekt til medicin-stamdata
- Acceptkriterie 2: "Givet en gemt registrering, når medicinlisten ses, så vises medicinnavn, dosis og tidspunkt korrekt" → tester at data også vises korrekt bagefter

### User story 9
Som patient vil jeg kunne registrere mine hormonværdier, så jeg kan følge udviklingen i min behandling.

**Acceptkriterier:**
- Acceptkriterie 1: "Givet en aktiv runde, når hormontype, værdi, enhed og dato registreres, så gemmes målingen tilknyttet runden" → tester at registreringen lykkes med alle felter
- Acceptkriterie 2: "Givet flere målinger, når seneste værdi tjekkes, så vises den nyeste måling korrekt" → tester at "seneste" beregnes rigtigt

### User story 10
Som patient vil jeg kunne starte en ny runde og se min rundehistorik, så jeg kan følge, hvordan mine tidligere forsøg er gået.

**Acceptkriterier:**
- Acceptkriterie 1: "Givet et fertilitetsforløb, når en ny runde startes med rundenummer og behandlingstype, så oprettes runden tilknyttet forløbet" → tester at "start ny runde" opretter en selvstændig runde
- Acceptkriterie 2: "Givet en runde i gang, når den afsluttes med et resultat, så gemmes resultatet på runden" → tester at afslutning og resultat hænger sammen på det korrekte niveau
- Acceptkriterie 3: "Givet tidligere gennemførte runder, når rundehistorikken åbnes, så vises alle runder tilknyttet det aktive forløb" → tester at historikken viser alle runder, ikke kun den seneste

### User story 11
Som patient vil jeg kunne se dokumenter tilknyttet min runde, så jeg har adgang til blodprøvesvar og behandlingsplan ét sted.

**Acceptkriterier:**
- Acceptkriterie 1: "Givet en runde med tilknyttede dokumenter, når dokumentlisten åbnes, så vises alle dokumenter med titel og type" → tester at dokumenter vises korrekt
- Acceptkriterie 2: "Givet et dokument vælges, når det åbnes, så vises filens indhold via den gemte filPath" → tester at det faktiske dokument kan tilgås

### User story 12
Som patient vil jeg kunne modtage notifikationer, så jeg ikke overser vigtige påmindelser om medicin eller aftaler.

**Acceptkriterier:**
- Acceptkriterie 1: "Givet en patient har en kommende medicindosis, når tidspunktet nærmer sig, så oprettes en notifikation af typen MEDICATION_REMINDER" → tester at systemet selv genererer relevante påmindelser
- Acceptkriterie 2: "Givet ulæste notifikationer, når patienten åbner listen, så vises de med titel, besked og hvorvidt de er læst (isRead)" → tester visning og læst-status