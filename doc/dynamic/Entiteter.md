# Simpl - Pet Project (2. semester)

**Entities:**

- **Patient**
  The central entity in the system. Represents the person undergoing a treatment journey (fertility, cancer, rehabilitation, psychiatry, or other).
  All other data is connected to the patient via Journey.
  The system supports multiple patients via login. Each patient has a unique username and password.
  Important attributes: name and date of birth are used to identify the patient. diagnosis describes the reason for treatment (e.g. PCOS, unexplained infertility, or another diagnosis depending on journey type).


- **Journey (abstract)**
  A model.Journey is the most important container in the system — everything else (events, medication, diary, appointments) belongs to a specific journey.
  model.Journey is abstract, meaning you never create a plain model.Journey — only a specific type such as FertilityJourney, CancerJourney, RehabilitationJourney, PsychiatryJourney or OtherJourney.
  All journey types share the same core data: start date and status. Important attributes: startDate (when the journey began), status (Active / Completed / Paused)


- **FertilityJourney**
  A FertilityJourney is a concrete journey type that extends model.Journey with fertility-specific data.
  It represents one complete IVF treatment process from stimulation to pregnancy test.
  A patient can have multiple rounds if the first attempt is unsuccessful.
  Important attributes: roundNumber, eggsRetrieved and eggsFertilised are used to compare rounds in the history.
  result (Positive / Negative / Pending) records the outcome of the pregnancy test.


- **CancerJourney**
  A CancerJourney is a concrete journey type that extends model.Journey with cancer-specific data.
  It represents a patient's treatment process for a cancer diagnosis.
  Important attributes: cancerType (the type of cancer) and stage (how advanced the cancer is).


- **RehabilitationJourney**
  A RehabilitationJourney is a concrete journey type that extends model.Journey with rehabilitation-specific data.
  It represents a patient's process of recovering from an injury.
  Important attributes: injuryType (the type of injury) and goal (what the patient is working towards, e.g. regaining mobility).


- **PsychiatryJourney**
  A PsychiatryJourney is a concrete journey type that extends model.Journey with psychiatric care data.
  Important attributes: condition (the diagnosed psychiatric condition being treated).


- **OtherJourney**
  An OtherJourney is a concrete journey type for treatment processes that do not fit the other categories.
  Important attributes: description (a free-text description of the journey).


- **Event**
  An event is a concrete step in the process — e.g. "Stimulation started", "Egg retrieval completed" or "Transfer performed" for a fertility journey, or similar milestones for other journey types.
  Events are used to build the timeline and give the patient an overview of what has happened and when.
  Important attributes: type indicates which phase the event belongs to. date and description provide context on the timeline.


- **MedicationLog**
  Many treatment journeys involve daily medication — e.g. hormone-stimulating medication such as Gonal-F or Cetrotide during a fertility journey, often for several weeks.
  MedicationLog records what was taken, when and in what dose.
  The taken field (boolean) makes it possible to use as a daily checklist.
  Important attributes: medication (the name of the medication), dose (e.g. "150 IU"), taken (whether it was taken that day).


- **HormoneLog**
  During the stimulation period of a fertility journey, the patient's hormone levels are measured regularly — typically oestradiol and LH — to assess how the ovaries are responding to the medication.
  HormoneLog stores these measurements so they can be displayed as a graph over time, giving the patient insight into their body's response to the treatment.
  HormoneLog belongs specifically to FertilityJourney as hormone tracking is unique to fertility treatment — it is not relevant for the other journey types.
  Important attributes: hormone (e.g. "Oestradiol"), value (the measured value), unit (e.g. "pmol/L").


- **DiaryEntry**
  A treatment journey — whether fertility, cancer, rehabilitation or psychiatric — can be emotionally demanding.
  The diary gives the patient a private place to write notes to themselves — symptoms, thoughts, questions for the doctor or simply how the day has been.
  It is the most personal part of the system and distinguishes Simpl from the clinics' own systems.
  Important attributes: title (short headline), content (free text without limitation), date (automatically filled with today's date).


- **Appointment**
  Treatment journeys often involve many appointments — scans, consultations, egg retrieval, transfer (for fertility), or check-ups and treatments for other journey types.
  The Appointment entity collects them in one place so the patient does not have to keep track of them in a calendar or on paper.
  The system displays upcoming appointments on the dashboard. Important attributes: type (e.g. "Follicle scan", "Transfer"), location (clinic or hospital), date and notes for practical details.