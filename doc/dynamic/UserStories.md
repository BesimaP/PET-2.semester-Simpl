# User stories med acceptkriterier

*Hvert acceptkriterie følger Givet/Når/Så-formatet (Gherkin), med en kort forklaring af, hvad det konkret tester.*

### User story 1
Som patient vil jeg kunne oprette et nyt fertilitetsforløb, så jeg kan begynde at følge min behandling fra start.

**Acceptkriterier:**
- Acceptkriterie 1: "Givet en patient er logget ind, når patienten vælger en forløbstypen og opretter et forløb, så vises det nye forløb på patientens oversigt" → tester at selve oprettelsen virker og bliver synlig (en patient kan godt have flere forløb, fx et afsluttet og et nyt)
- Acceptkriterie 2: "Givet at forløbet oprettes, når det gennemføres, så sættes startdato automatisk" → tester en specifik teknisk detalje (at man ikke selv skal indtaste dato)

### User story 2
Som patient vil jeg kunne se en tidslinje over mit forløbs status, så jeg ved, hvor langt jeg er nået, uden at skulle spørge min klinik.

**Acceptkriterier:**
- Acceptkriterie 1: "Givet et aktivt forløb med hændelser, når patienten åbner tidslinjen, så vises hændelserne sorteret efter dato" → tester at sorteringen er korrekt
- Acceptkriterie 2: "Givet en ny hændelse registreres, når den gemmes, så opdateres tidslinjen automatisk" → tester at tidslinjen reagerer live, uden manuel genindlæsning

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
- Acceptkriterie 2: "Givet en note gemmes, så genereres der en hændelse på tidslinjen" → tester sammenhængen mellem dagbog og tidslinje
- Acceptkriterie 3: "Givet en note gemmes, når den vises igen, så er den tilknyttet det aktive forløb" → tester korrekt tilknytning

### User story 5
Som patient vil jeg kunne logge ind, så jeg kan få adgang til mit eget, private forløb.

**Acceptkriterier:**
- Acceptkriterie 1: "Givet en ny bruger uden profil prøver at oprette sig- føres videre til User case 6"
- Acceptkriterie 2: "Givet korrekt brugernavn og adgangskode, når de indtastes, så logges brugeren ind og får adgang til eget forløb" → tester den centrale sikkerhedsfunktion
- Acceptkriterie 3: "Givet en logget-ind patient, når profilen redigeres, så kan navn, fødselsdato og diagnose opdateres" → tester redigeringsfunktionen

### User story 6
Som patient vil jeg kunne oprette en profil og vælge forløbstype

**Acceptkriterier**
- Acceptkriterie 1: "Givet en ny bruger uden profil, når navn, fødselsdato, diagnose, brugernavn og adgangskode oprettes, så oprettes en ny patientprofil" → tester at oprettelsen lykkes med alle felter
- Acceptkriterie 2: "Givet oplysninger står korrekt- oprettes ny profil og der kan vælges forløbstype"
- Acceptkriterie 3: "Givet oplysninger er indtastet forkert eller brugernavn taget- så kommer fejlmeddelelse om at prøve igen"

### User story 7
Som patient vil jeg kunne registrere mit medicinindtag, så jeg kan holde styr på, om jeg har taget min medicin som planlagt.

**Acceptkriterier:**
- Acceptkriterie 1: "Givet et aktivt forløb, når medicinnavn, dosis, dato og status registreres, så gemmes registreringen" → tester at alle felter gemmes korrekt
- Acceptkriterie 2: "Givet en gemt registrering, når medicinlisten ses, så vises dato og medicinnavn korrekt" → tester at data også vises korrekt bagefter

### User story 8
Som patient vil jeg kunne registrere mine hormonværdier, så jeg kan følge udviklingen i mit fertilitetsforløb.

**Acceptkriterier:**
- Acceptkriterie 1: "Givet et fertilitetsforløb, når hormontype, værdi, enhed og dato registreres, så gemmes målingen" → tester at registreringen lykkes med alle felter
- Acceptkriterie 2: "Givet flere målinger, når seneste værdi tjekkes, så vises den nyeste måling korrekt" → tester at "seneste" beregnes rigtigt

### User story 9
Som patient vil jeg kunne registrere data for en fertilitetsrunde og se min rundehistorik, så jeg kan følge, hvordan mine tidligere forsøg er gået.

**Acceptkriterier:**
- Acceptkriterie 1: "Givet et fertilitetsforløb, når en ny runde startes med rundenummer, så oprettes runden" → tester at "start ny runde" virker
- Acceptkriterie 2: "Givet en runde i gang, når den afsluttes med et resultat, så gemmes resultatet på forløbet" → tester at afslutning og resultat hænger sammen
- Acceptkriterie 3: "Givet tidligere gennemførte runder, når rundehistorikken åbnes, så vises alle tidligere runder" → tester at historikken viser alle runder, ikke kun den seneste