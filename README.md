# Simpl

Simpl er et system til patienter, der gennemgår et behandlingsforløb (fx fertilitet, kræft, rehabilitering, psykiatri eller andet), hvor de kan holde styr på deres forløb, aftaler, medicin, hormonværdier og dagbogsnoter.

## Om projektet

Simpl er vores **Pet Project for 2. semester** (Datamatiker, Systemudvikling I). Projektet er en videreudvikling af vores SP4-projekt fra 1. semester, hvor det oprindeligt blev bygget som en JavaFX-desktopapplikation.

**Gruppe:** Besima & Louise

Projektet videreføres i dette semester med planer om at udvide det til et fuldt fullstack-system med en webbaseret frontend, i tråd med semesterets krav om, at Pet Project skal kunne udvikles som et fullstack system med en hjemmeside som frontend.

## Målgruppe

Patienter der er i gang med et behandlingsforløb, og som har behov for overblik over status, aftaler, medicin og egne noter/observationer gennem forløbet.

## Nuværende funktioner (fra 1. semester)

- **Brugerkonti** — oprette profil, logge ind, genoptage sit forløb
- **Valg af forløbstype** — fertilitet, kræft, psykiatri, rehabilitering eller andet
- **Dashboard** — overblik med nøgletal
- **Hormonlog** — registrering af hormonværdier over tid
- **Medicinlog** — registrering af medicin, dosis og om den er taget
- **Aftaler** — planlægning og oversigt over kommende aftaler
- **Dagbog** — daglige dagbogsnoter
- **Tidslinje** — kronologisk overblik over alle hændelser i forløbet
- **Rundehåndtering** — start/afslut en fertilitetsrunde med resultat
- **Rundehistorik** — se tidligere gennemførte runder

## Planer for 2. semester

- Udvide til en **webbaseret frontend** (HTML/CSS/JavaScript) i stedet for/som supplement til JavaFX
- Eksponere backend-logikken via en API, så en webfrontend kan tilgå samme data og logik
- Færdiggøre registrering af æg-data (antal udtagne/befrugtede æg) i UI'en

## Tech stack (nuværende, JavaFX-version)

- **Java 21**
- **JavaFX 21** — brugergrænseflade
- **SQLite** (via `sqlite-jdbc`) — lokal database
- **Maven** — byggeværktøj og afhængighedsstyring

## Arkitektur

Projektet følger **MVC**-mønsteret (Model-View-Controller):

```
src/
├── Main.java              # Applikationens indgangspunkt
├── model/                 # Dataklasser, databaseadgang, Session
├── view/                  # JavaFX views (UI)
├── controller/             # Forretningslogik mellem view og model
├── enums/                  # Enums (AppointmentType, EventType, Result, Status)
├── design/                 # CSS-stylesheet og billeder
└── test/                   # Tests
```

## Database

SQLite-databasen (`simpl.db`) oprettes automatisk i projektets rodmappe, første gang applikationen køres. Databasestrukturen er defineret i `data/schema.sql` og initialiseres ved opstart af `DatabaseInitializer.java`. Den indeholder følgende tabeller:

- `patient` — brugerkonti
- `journey` — patientens overordnede behandlingsforløb
- `fertility_journey` — fertilitetsspecifik data (rundenummer, udtagne æg, befrugtede æg, resultat)
- `event` — hændelser på tidslinjen
- `appointment` — planlagte aftaler
- `medication_log` — medicinregistreringer
- `hormone_log` — hormonværdi-registreringer (tilknyttet fertilitetsforløb)
- `diary_entry` — dagbogsnoter


## Dokumentation

Kravspecifikation (idébeskrivelse, funktionelle/non-funktionelle krav, user stories med acceptkriterier, domænemodel) findes i `doc/`-mappen.