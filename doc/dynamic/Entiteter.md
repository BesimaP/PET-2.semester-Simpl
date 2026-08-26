# Simpl - Pet Project (2. semester)

*Domænemodellen er udvidet af Louise til at dække et mere komplet fertilitetsforløb med separat login, diagnose, medicin-stamdata, en selvstændig Round-entitet samt dokumenter og notifikationer.*

**Entities:**

- **Patient**
  Den centrale entitet i systemet. Repræsenterer personen, der gennemgår et fertilitetsforløb.
  Login-oplysninger er adskilt i en separat UserAccount, så Patient kun indeholder person-data.
  Important attributes: name, dateOfBirth.

- **UserAccount**
  Håndterer login/autentificering, adskilt fra selve patientdataen.
  Important attributes: username, passwordHash (adgangskoder gemmes aldrig i klartekst).

- **Diagnosis**
  En selvstændig entitet, der beskriver patientens diagnose(r), i stedet for et enkelt tekstfelt på Patient.
  Important attributes: name, description.

- **FertilityJourney**
  Repræsenterer patientens overordnede fertilitetsforløb — kan strække sig over flere runder over måneder eller år.
  Holder ikke selv rundedata; i stedet har den flere Round-entiteter, én per forsøg.
  Important attributes: startDate, status (Active / Paused / Completed / Cancelled).

- **Round**
  Repræsenterer ét komplet IVF-forsøg inden i et FertilityJourney, fra stimulation til graviditetstest.
  En patient kan have flere runder under samme forløb, hvis et forsøg ikke lykkes.
  Important attributes: roundNumber, startDate, endDate, treatmentType, eggsRetrieved, eggsFertilised, embryosCreated, embryosTransferred, result (Positive / Negative / Pending / Cancelled), status (Planned / In progress / Completed / Cancelled).

- **Medication**
  Stamdata for et lægemiddel (fx navn og beskrivelse), adskilt fra selve registreringen af, at det er taget.
  Important attributes: name, description.

- **MedicationLog**
  Registrering af at en bestemt Medication er taget som en del af en Round.
  Important attributes: scheduledDateTime, takenDateTime, dose, unit, taken, note.

- **HormoneLog**
  Registrering af en hormonmåling under en specifik Round — hormonniveauer måles typisk flere gange under stimulationsperioden.
  Important attributes: dateTime, hormoneType (FSH / LH / Østradiol / Progesteron / AMH / Andet), value, unit.

- **Event**
  Et konkret trin i forløbet (fx "Stimulation startet", "Æg udtaget", "Overførsel udført") — bruges til at bygge en tidslinje for runden.
  Important attributes: dateTime, eventType, description, notes.

- **DiaryEntry**
  Giver patienten et privat rum til at skrive noter om symptomer, tanker eller spørgsmål til lægen — knyttet til den specifikke runde.
  Important attributes: dateTime, title, content.

- **Document**
  Dokumenter tilknyttet en runde, fx blodprøvesvar, behandlingsplan eller samtykkeerklæring.
  Important attributes: title, documentType (Blodprøvesvar / Behandlingsplan / Information / Samtykke / Labresultat / Andet), createdDate, filePath, notes.

- **Notification**
  Påmindelser og beskeder til patienten, fx medicinpåmindelser eller besked om, at et resultat er klar.
  Important attributes: title, message, dateTime, notificationType, isRead.

- **Appointment**
  Aftaler tilknyttet en runde — scanning, konsultation, æg-udtagning, overførsel m.m.
  Important attributes: dateTime, appointmentType, location, status (Scheduled / Completed / Cancelled / No show), notes, cancellationReason.