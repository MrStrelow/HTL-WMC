#### Welche Begriffe werden hier verwendet?
[``WMC``](05_Glossar.md#wmc), [``Git``](05_Glossar.md#git), [``GitHub``](05_Glossar.md#github), [``Branch``](05_Glossar.md#branch), [``Moodle``](05_Glossar.md#moodle), [``Jahrgang``](05_Glossar.md#jahrgang), [``Lektion / Übung``](05_Glossar.md#lektion), [``Workspace``](05_Glossar.md#workspace), [``Visual Studio Code``](05_Glossar.md#visual-studio-code), [``w3schools``](05_Glossar.md#w3schools), [``Live-Coding``](05_Glossar.md#live-coding), [``Angabe / Lösung``](05_Glossar.md#angabe--lösung).

# Was gibt es hier?

Dies ist eine *öffentliche* **Abbildung** meiner **Unterlagen, Mitschriften und Lösungen** zu dem Fach **WMC** *(Webprogrammieren und Mobile Computing)* mit Fokus auf den HTML5- und CSS3-Kurs (2 Wochenstunden). 

Diese Seite existiert, um ***mir*** das Leben organisatorisch einfacher zu machen *(und hoffentlich später auch Ihnen, ab dem Zeitpunkt, wo Ihnen ``git`` ein Begriff ist)*. Es dient als *Archiv* für eine ``Schulklasse`` - z.B. als Ergänzung des ``Klassenbuches`` für die Frage *"Welcher Stoff wurde wann und wie behandelt?"*.

>**Personenbezogene Daten sind hier nicht zu finden, wie etwa Noten, Abgaben, etc.**

>**Um Inhalte hier sehen zu können, brauchen Sie keinen *GitHub* Account!**

## Wo finde ich Materialien für meine Klasse?
>**⚠️ Verwenden Sie die Links im Moodle-Kurs, wenn Sie sich nicht sicher sind! Diese bringen Sie ans korrekte Ziel. ⚠️** 

**Für jene, die es trotzdem interessiert:**
Sie finden hier Unterlagen zu den jeweiligen ``Jahrgängen`` (aktueller Fokus: HTL Informatik).
* Jede ``Schulklasse`` besitzt einen eigenen *Bereich*, der hier ``Branch`` (Zweig auf Englisch) genannt wird. 
* Ein ``Branch`` erstreckt sich über *alle* ``Jahrgänge`` einer *spezifischen* ``Schulklasse``. Für die Kennzeichnung verwende ich: 
    * ein von der ``Schulklasse`` selbst bestimmtes *angebrachtes* und *bereits nicht vergebenes Wort*, oder falls nicht möglich...
    * das Jahr des Eintritts der Schüler und deren Buchstaben. Das wäre für z.B. die **3CHIF**, welche im Jahr **2024** in die 1. Klasse eingetreten ist, der ``Branch`` *2024C-HIF*. 

    Dieser ``Branch`` bildet den individuellen Stand *dieser* ``Schulklasse`` ab.
* Der Branch *main* ist keiner ``Schulklasse`` zugewiesen und stellt die grobe Umsetzung des Lehrplans dar. **Es besteht keine Gewähr, dass der aktuellste Lehrplan hier verlinkt ist. Überprüfen Sie die Informationen.**

## Wo finde ich Skripten, Übungen und Projekte?
>**⚠️ Verwenden Sie die Links im Moodle-Kurs, wenn Sie sich nicht sicher sind! Diese bringen Sie ans korrekte Ziel. ⚠️** 

1) Innerhalb eines ``Jahrgangs`` befinden sich *mehrere* ``Lektionen`` und ein großes ``Abschlussprojekt``. 
2) Eine ``Lektion`` ist technisch ein Ordner (Workspace) für ein bestimmtes Thema. 
3) Diese Ordner sind strukturiert in ``Aufgaben``, ``Zettelübungen`` und ``LiveCoding/Mitschriften``. 

>**Anmerkung:** Öffnen Sie den jeweiligen Ordner in unserem Standard-Editor **Visual Studio Code**. Starten Sie die `.html`-Dateien von dort aus (z.B. mit der Erweiterung *Live Server*), um die Ergebnisse im Browser zu betrachten.

Ein ``Jahrgang`` sieht in etwa folgendermaßen aus:

/'''text
📁 JahrGang3/
├── 📁 L01_HTML_Grundlagen/
│   ├── 📁 Aufgaben/
│   │   ├── 📄 HTML_Referenz.html
│   │   └── 📄 CSS_Referenz.css
│   ├── 📁 Zetteluebungen/
│   └── 📁 LiveCoding_Mitschrift/
│
├── 📁 L08_CSS_Float/
│   ├── 📁 Aufgaben/
│   │   ├── 📁 bilder/
│   │   ├── 📁 css/
│   │   ├── 📄 index.html
│   │   └── 📄 Angabe.md
│   ├── 📁 Zetteluebungen/
│   └── 📁 LiveCoding_Mitschrift/
│
├── 📁 L09_CSS_Position/
│   ├── 📁 Aufgaben/
│   │   ├── 📄 index.html
│   │   └── 📄 boxen.css
│   ├── 📁 Zetteluebungen/
│   └── 📁 LiveCoding_Mitschrift/
│       ├── 📁 Demo_CSS_Position/
│       │   └── 📄 index.html
│       └── 📁 W3Schools_Beispiele/
│           └── 📄 selectors.html
│
└── 📁 Projekt_Statische_Website/
    ├── 📄 Projektanforderungen.md
    └── 📄 index.html
/'''

Folgende Ordner und Unterteilungen sind nennenswert:
* Jede ``Lektion`` bündelt ein Thema und ist in **Aufgaben**, **Zettelübungen** und **LiveCoding_Mitschrift** unterteilt.
* Die Unterordner ``Aufgaben`` beinhalten Arbeitsaufträge. Für jede Aufgabe gibt es eine ``Angabe`` (oft als Markdown oder PDF) und die dazugehörigen HTML/CSS-Dateien zur Bearbeitung.
* Die ``Zettelübungen`` beinhalten kurze Theorie- oder Praxisfragen, die oft gemeinsam besprochen werden.
* Im Ordner ``LiveCoding_Mitschrift`` befinden sich Beispiele, die wir *gemeinsam innerhalb der Stunde erarbeiten* (oft direkt aus Tutorials oder Referenzen von **w3schools** abgeleitet). 
* Das ``Projekt_Statische_Website`` beinhaltet die Anforderungen für das Abschlussprojekt: Die Erstellung einer mehrseitigen, statischen Website (ähnlich wie fennek.mobi).

### Notengebung & Abgaben
In jedem Ordner der ``Klasse`` befindet sich ein *wie_komme_ich_zur_note.md*. Es müssen als Hausübung weniger Aufgaben abgegeben werden, als sich insgesamt im Repository befinden. Die genaue Liste der abzugebenden HÜs steht im Moodle-Kurs.
>**⚠️ Verwenden Sie Moodle für alle Dateiabgaben!**⚠️

Bei Fragen melden Sie sich bei mir in Teams. 

Viel Spaß beim Programmieren und Gestalten!