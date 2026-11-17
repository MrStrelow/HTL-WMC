# Aufgabe 2: Die Unterseiten der Rezeptverwaltung

In Aufgabe 1 hast du die Startseite des **Kochbuchs der 2BHIF** gebaut. Ihre Links zeigen auf Seiten, die es noch nicht gibt: *Alle Rezepte*, *Rezept einreichen*, die drei Kategorien und die vier Rezepte. In dieser Aufgabe baust du diese **neun Seiten**.

Du lernst dabei zwei neue Dinge:

* **Komponenten wiederverwenden:** Header, Seitennavigation, Zusatzinfos und Footer gibt es auf **jeder** Seite. Du kopierst sie aus `index.html` und passt nur an, was sich ändert.
* **Relative Pfade über Ordner hinweg:** Seiten im Unterordner brauchen `../`, um Dateien im Hauptordner zu erreichen.

| Skriptum | Was du hier anwendest |
| :--- | :--- |
| [L01.1 HTML-Grundlagen](../Skripten/L01.1-HTML-Ueberblick.html) | Grundgerüst, Listen, Tabellen, Bilder, relative Links |
| [L01.2 Seitenzonen](../Skripten/L01.2-Header-Main-Footer-Nav-Aside.html) | dieselben Zonen auf jeder Seite |
| [L01.3 section, Anker, article](../Skripten/L01.3-Section-Article.html) | article in section (Kategorien), section in article (Rezeptseiten), Anker |
| [L01.4 Medien, Buttons, Formulare](../Skripten/L01.4-Formulare-Selection-Input.html) | großes POST-Formular mit `fieldset`, `legend`, Radio-Buttons, `number`, `date`, `textarea` |

---

## Abgabe

```text
rezeptverwaltung/
├── index.html              (aus Aufgabe 1 – fertig)
├── rezepte.html            neu
├── einreichen.html         neu
├── kategorien/
│   ├── suppen.html         neu
│   ├── hauptspeisen.html   neu
│   └── desserts.html       neu
├── rezepte/
│   ├── kuerbiscremesuppe.html  neu
│   ├── wiener-schnitzel.html   neu
│   ├── kaiserschmarrn.html     neu
│   └── apfelstrudel.html       neu
├── style.css
├── hintergruende.md
└── bilder/
```

Starte mit der **Vorlage** im Ordner [`vorlage/`](vorlage/). Sie enthält die **fertige Startseite** aus Aufgabe 1, `style.css`, alle Bilder, die Linter-Einstellungen und für jede neue Seite eine Datei mit Grundgerüst, eingebundenem `style.css` und allen Texten als Kommentar.

---

## Teil 1 – Die neun Seiten

### So gehst du vor

Arbeite **Seite für Seite**:

1. Öffne die Vorlage der Seite. Grundgerüst, `<title>` und `<link rel="stylesheet">` stehen schon drin.
2. **Kopiere den Rahmen** aus `index.html`: `<header>`, `<aside id="seiten-nav">`, `<aside id="zusatz-info">` und `<footer>`. Das sind die **wiederverwendeten Komponenten**.
3. Passe an, was sich auf dieser Seite ändert: die Links der **Seitennavigation**, eventuell den **Küchen-Tipp** – und bei Seiten im Unterordner die **Pfade** (siehe unten).
4. Schreibe das `<main>` mit den vorgegebenen Texten.
5. Öffne die Seite im Browser und klicke **jeden Link** an – keiner darf ins Leere führen.

Am Ende der Seite **Rezept einreichen** und der **Rezeptseiten** gibt es neue CSS-Blöcke. Kopiere sie wie in Aufgabe 1 **vollständig und unverändert ans Ende** von `style.css`, speichere und lade neu (F5). CSS musst du nicht verstehen.

### Relative Pfade: der Weg von einer Datei zur anderen

Ein relativer Pfad beschreibt den Weg **von der Datei, in der der Link steht**, zum Ziel. `../` heißt: **einen Ordner nach oben**.

| Link steht in … | Ziel | Pfad |
| :--- | :--- | :--- |
| `index.html` | `rezepte/apfelstrudel.html` | `rezepte/apfelstrudel.html` |
| `kategorien/desserts.html` | `rezepte/apfelstrudel.html` | `../rezepte/apfelstrudel.html` |
| `rezepte/apfelstrudel.html` | `index.html` | `../index.html` |
| `rezepte/apfelstrudel.html` | `bilder/apfelstrudel.svg` | `../bilder/apfelstrudel.svg` |
| `kategorien/suppen.html` | `style.css` | `../style.css` |
| `kategorien/desserts.html` | Rezept der Woche auf der Startseite | `../index.html#rezept-der-woche` |

**Wichtig:** Auf den Seiten in `kategorien/` und `rezepte/` müssen auch die Links der **Hauptnavigation im Header** `../` bekommen: `../index.html`, `../rezepte.html`, `../einreichen.html`. Der Link „Nach oben“ (`#top`) und die Anker der Seitennavigation bleiben gleich – sie zeigen auf **dieselbe** Seite.

### 1.1 Alle Rezepte

**Datei:** `rezepte.html` – eine Übersicht aller Rezepte als Tabelle und darunter die Rezepte nach Kategorie.

**Was du dabei anwendest:** Tabelle mit Links in den Zellen, mehrere Rubriken als **article in section**, Anker auf `#uebersicht`, `#suppen`, …

Vorgegebene Texte (stehen auch als Kommentar in der Vorlage):

```text
SEITENNAVIGATION (aside id="seiten-nav"): Auf dieser Seite
    Übersicht -> #uebersicht · Suppen -> #suppen · Hauptspeisen -> #hauptspeisen · Desserts -> #desserts

MAIN
Kapitel section id="uebersicht"
    Überschrift: Übersicht
    Absatz: Alle **fünf** Rezepte auf einen Blick.
    Tabelle, Spalten: Rezept | Kategorie | Zeit | Schwierigkeit   (Rezept-Name ist ein Link)
        Kürbiscremesuppe (rezepte/kuerbiscremesuppe.html) | Suppen | 30 min | leicht
        Wiener Schnitzel (rezepte/wiener-schnitzel.html) | Hauptspeisen | 40 min | mittel
        Kaiserschmarrn (rezepte/kaiserschmarrn.html) | Desserts | 25 min | mittel
        Apfelstrudel (rezepte/apfelstrudel.html) | Desserts | 90 min | schwer
        Palatschinken (index.html#rezept-der-woche) | Desserts | 20 min | leicht

Kapitel section id="suppen"  (article in section)
    Überschrift: Suppen
    Karte (article): Kürbiscremesuppe
        Bild: bilder/kuerbiscremesuppe.svg (width 240) · alt: Orange Kürbissuppe in einem weißen Teller
        Bildunterschrift: Kürbiscremesuppe mit Kürbiskernen
        Text: Eine **cremige** Suppe für kalte Herbsttage – fertig in *30 Minuten*.
        Zubereitungszeit: **30 Minuten** • Schwierigkeit: leicht
        Zum Rezept -> rezepte/kuerbiscremesuppe.html   |   Button: Merken

Kapitel section id="hauptspeisen"  (article in section)
    Überschrift: Hauptspeisen
    Karte (article): Wiener Schnitzel
        Bild: bilder/schnitzel.svg (width 240) · alt: Goldbraunes Schnitzel mit einer Zitronenscheibe
        Bildunterschrift: Wiener Schnitzel mit Zitrone
        Text: **Dünn** geklopft und *goldbraun* herausgebacken – am besten mit Erdäpfelsalat.
        Zubereitungszeit: **40 Minuten** • Schwierigkeit: mittel
        Zum Rezept -> rezepte/wiener-schnitzel.html   |   Button: Merken

Kapitel section id="desserts"  (article in section)
    Überschrift: Desserts
    Karte (article): Kaiserschmarrn
        Bild: bilder/kaiserschmarrn.svg (width 240) · alt: Zerrissener Kaiserschmarrn mit Rosinen und Staubzucker
        Bildunterschrift: Kaiserschmarrn mit Zwetschkenröster
        Text: Der **österreichische Klassiker** mit Rosinen und Zwetschkenröster.
        Zubereitungszeit: **25 Minuten** • Schwierigkeit: mittel
        Zum Rezept -> rezepte/kaiserschmarrn.html   |   Button: Merken
    Karte (article): Apfelstrudel
        Bild: bilder/apfelstrudel.svg (width 240) · alt: Apfelstrudel mit Staubzucker auf einem Teller
        Bildunterschrift: Apfelstrudel mit Staubzucker
        Text: Hauchdünner Teig, viel Apfel und *Zimt* – der **Lieblingsnachtisch** der Klasse.
        Zubereitungszeit: **90 Minuten** • Schwierigkeit: schwer
        Zum Rezept -> rezepte/apfelstrudel.html   |   Button: Merken
    Karte (article): Palatschinken
        Bild: bilder/palatschinken.svg (width 240) · alt: Drei gefüllte Palatschinken auf einem weißen Teller
        Bildunterschrift: Palatschinken mit Marillenmarmelade
        Text: Dünne Pfannkuchen, schnell gemacht – unser **Rezept der Woche**.
        Zubereitungszeit: **20 Minuten** • Schwierigkeit: leicht
        Zum Rezept -> index.html#rezept-der-woche   |   Button: Merken

ZUSATZINFOS: Küchen-Tipp wie in index.html
```

### 1.2 Rezept einreichen

**Datei:** `einreichen.html` – ein großes Formular, mit dem man ein eigenes Rezept einschickt.

**Was du dabei anwendest:** `method="POST"` (es wird etwas **gespeichert**), `<fieldset>` mit `<legend>` als Gruppe, Radio-Buttons mit **gleichem** `name`, `type="email"`, `number`, `date`, `checkbox`, `<textarea>`, `required`. Jedes Feld hat ein `<label>` über `for`/`id`.

Vorgegebene Texte (stehen auch als Kommentar in der Vorlage):

```text
SEITENNAVIGATION (aside id="seiten-nav"): Auf dieser Seite
    Formular -> #formular · Hinweise -> #hinweise

MAIN
Kapitel section id="formular"
    Überschrift: Rezept einreichen
    Absatz: Teile dein **Lieblingsrezept** mit der Klasse. Felder mit Pflichtangaben musst du ausfüllen.
    Formular: POST an https://httpbin.org/post
        Gruppe (fieldset) "Über dich":
            Dein Name:            type="text",   name="name",   id="name",   required
            E-Mail-Adresse:       type="email",  name="email",  id="email",  required
        Gruppe (fieldset) "Dein Rezept":
            Name des Rezepts:     type="text",   name="titel",  id="titel",  required
            Kategorie:            select, name="kategorie", id="kat": Suppe (suppe), Hauptspeise (hauptspeise), Dessert (dessert)
            Zubereitungszeit in Minuten:  type="number", name="zeit", id="zeit", min="1"
            Portionen:            type="number", name="portionen", id="portionen", min="1", value="4"
            Gekocht am:           type="date",   name="datum",  id="datum"
            Das Rezept ist vegetarisch.   type="checkbox", name="vegetarisch", value="ja", id="vegetarisch"
        Gruppe (fieldset) "Schwierigkeit":
            Radio-Buttons, name="schwierigkeit": leicht (id s-leicht, checked), mittel (id s-mittel), schwer (id s-schwer)
        Zutaten (eine pro Zeile):     textarea, name="zutaten", id="zutaten", rows="5"
        Zubereitung:                  textarea, name="zubereitung", id="schritte", rows="6"
        Ich stimme der Veröffentlichung meines Rezepts zu.   type="checkbox", name="datenschutz", value="ja", id="datenschutz", required
        Button: Rezept einreichen

Kapitel section id="hinweise"
    Überschrift: Hinweise
    Liste: Schreibe jede Zutat in eine **eigene Zeile**.
           Beschreibe die Zubereitung in *kurzen* Schritten.
           Wir prüfen jedes Rezept, bevor es veröffentlicht wird.

ZUSATZINFOS: Küchen-Tipp
    Warum **POST**? Dein Rezept wird *gespeichert* – die Daten gehören in den Body, nicht in die URL.
```

**Styling:** Ergänze in `style.css` – damit bekommen alle Rezept-Karten auf den neuen Seiten ihren Rahmen:

```css
/* ---------- Aufgabe 2: Rezept-Karten auf allen Seiten ---------- */
main section article {
    background: #fffbeb;
    border: 1px solid #fde68a;
    border-radius: 12px;
    padding: 8px 16px;
    margin: 16px 0;
}
```

**Styling:** Ergänze in `style.css` – Gruppen, Gruppenüberschriften und Textfelder des Formulars:

```css
/* ---------- Aufgabe 2: Formular "Rezept einreichen" ---------- */
fieldset {
    border: 1px solid #fdba74;
    border-radius: 12px;
    padding: 8px 16px;
    margin: 16px 0;
}

legend {
    font-weight: bold;
    color: #9a3412;
    padding: 0 6px;
}

textarea {
    font: inherit;
    width: 100%;
    padding: 6px 8px;
    border: 1px solid #fdba74;
    border-radius: 6px;
}
```

**Ausprobieren:** Schicke das Formular ab. httpbin zeigt unter `"form"` jedes Feld mit seinem `name`. Fehlt ein Feld, fehlt im HTML das `name`-Attribut. Bei den Radio-Buttons darf nur **ein** Wert ankommen.

### 1.3 Kategorie Suppen

**Datei:** `kategorien/suppen.html` – alle Suppen.

**Was du dabei anwendest:** **article in section**: Die Kategorie ist die Rubrik, jedes Rezept eine Karte mit eigener `id`. Pfade mit `../`.

Vorgegebene Texte (stehen auch als Kommentar in der Vorlage):

```text
SEITENNAVIGATION (aside id="seiten-nav"): Auf dieser Seite
    Kürbiscremesuppe -> #kuerbiscremesuppe

MAIN
Kapitel section id="rezepte"  (article in section)
    Überschrift: Suppen
    Absatz: Warme Suppen für jede Jahreszeit – von *klar* bis **cremig**.
    Karte (article id="kuerbiscremesuppe"): Kürbiscremesuppe
        Bild: ../bilder/kuerbiscremesuppe.svg (width 240) · alt: Orange Kürbissuppe in einem weißen Teller
        Bildunterschrift: Kürbiscremesuppe mit Kürbiskernen
        Text: Eine **cremige** Suppe für kalte Herbsttage – fertig in *30 Minuten*.
        Zubereitungszeit: **30 Minuten** • Schwierigkeit: leicht
        Zum Rezept -> ../rezepte/kuerbiscremesuppe.html   |   Button: Merken

ZUSATZINFOS: Küchen-Tipp wie in index.html
```

### 1.4 Kategorie Hauptspeisen

**Datei:** `kategorien/hauptspeisen.html` – alle Hauptspeisen.

**Was du dabei anwendest:** wie bei den Suppen.

Vorgegebene Texte (stehen auch als Kommentar in der Vorlage):

```text
SEITENNAVIGATION (aside id="seiten-nav"): Auf dieser Seite
    Wiener Schnitzel -> #wiener-schnitzel

MAIN
Kapitel section id="rezepte"  (article in section)
    Überschrift: Hauptspeisen
    Absatz: Die **Klassiker** der österreichischen Küche für Mittag und Abend.
    Karte (article id="wiener-schnitzel"): Wiener Schnitzel
        Bild: ../bilder/schnitzel.svg (width 240) · alt: Goldbraunes Schnitzel mit einer Zitronenscheibe
        Bildunterschrift: Wiener Schnitzel mit Zitrone
        Text: **Dünn** geklopft und *goldbraun* herausgebacken – am besten mit Erdäpfelsalat.
        Zubereitungszeit: **40 Minuten** • Schwierigkeit: mittel
        Zum Rezept -> ../rezepte/wiener-schnitzel.html   |   Button: Merken

ZUSATZINFOS: Küchen-Tipp wie in index.html
```

### 1.5 Kategorie Desserts

**Datei:** `kategorien/desserts.html` – alle Desserts – auch die Palatschinken, deren Rezept auf der Startseite steht.

**Was du dabei anwendest:** wie bei den Suppen; ein Link mit Anker auf eine **andere** Seite (`../index.html#rezept-der-woche`).

Vorgegebene Texte (stehen auch als Kommentar in der Vorlage):

```text
SEITENNAVIGATION (aside id="seiten-nav"): Auf dieser Seite
    Kaiserschmarrn -> #kaiserschmarrn · Apfelstrudel -> #apfelstrudel · Palatschinken -> #palatschinken

MAIN
Kapitel section id="rezepte"  (article in section)
    Überschrift: Desserts
    Absatz: Süßes zum Abschluss – *warm*, *kalt* und immer **hausgemacht**.
    Karte (article id="kaiserschmarrn"): Kaiserschmarrn
        Bild: ../bilder/kaiserschmarrn.svg (width 240) · alt: Zerrissener Kaiserschmarrn mit Rosinen und Staubzucker
        Bildunterschrift: Kaiserschmarrn mit Zwetschkenröster
        Text: Der **österreichische Klassiker** mit Rosinen und Zwetschkenröster.
        Zubereitungszeit: **25 Minuten** • Schwierigkeit: mittel
        Zum Rezept -> ../rezepte/kaiserschmarrn.html   |   Button: Merken
    Karte (article id="apfelstrudel"): Apfelstrudel
        Bild: ../bilder/apfelstrudel.svg (width 240) · alt: Apfelstrudel mit Staubzucker auf einem Teller
        Bildunterschrift: Apfelstrudel mit Staubzucker
        Text: Hauchdünner Teig, viel Apfel und *Zimt* – der **Lieblingsnachtisch** der Klasse.
        Zubereitungszeit: **90 Minuten** • Schwierigkeit: schwer
        Zum Rezept -> ../rezepte/apfelstrudel.html   |   Button: Merken
    Karte (article id="palatschinken"): Palatschinken
        Bild: ../bilder/palatschinken.svg (width 240) · alt: Drei gefüllte Palatschinken auf einem weißen Teller
        Bildunterschrift: Palatschinken mit Marillenmarmelade
        Text: Dünne Pfannkuchen, schnell gemacht – unser **Rezept der Woche**.
        Zubereitungszeit: **20 Minuten** • Schwierigkeit: leicht
        Zum Rezept -> ../index.html#rezept-der-woche   |   Button: Merken

ZUSATZINFOS: Küchen-Tipp wie in index.html
```

### 1.6 Rezept: Kürbiscremesuppe

**Datei:** `rezepte/kuerbiscremesuppe.html` – das vollständige Rezept.

**Was du dabei anwendest:** **section in article** wie das Rezept der Woche: Einleitungstext, Bild, Kapitel *Zutaten* (Tabelle) und *Zubereitung* (`<ol>`), Nährwerte in `<details>`. Die Kapitel haben die `id`s `zutaten` und `zubereitung`.

Vorgegebene Texte (stehen auch als Kommentar in der Vorlage):

```text
SEITENNAVIGATION (aside id="seiten-nav"): Auf dieser Seite
    Zutaten -> #zutaten · Zubereitung -> #zubereitung

MAIN
article id="rezept"  (section in article)
    Überschrift: Kürbiscremesuppe
    Autor:in: Von **Jonas** aus der 2BHIF, 10. November 2026 (2026-11-10)
    Einleitung: Diese Suppe wärmt an kalten Tagen und braucht nur wenige Zutaten. Zuerst findest du die Zutaten für vier Personen, danach die Zubereitung in drei Schritten.
    Bild: ../bilder/kuerbiscremesuppe.svg (width 320) · alt: Orange Kürbissuppe in einem weißen Teller
          Bildunterschrift: Abb. 1: Kürbiscremesuppe mit Kürbiskernen
    Kapitel section id="zutaten": Zutaten (Tabelle, Spalten Zutat | Menge)
        Hokkaido-Kürbis | 800 g
        Zwiebel | 1 Stück
        Gemüsesuppe | 750 ml
        Schlagobers | 125 ml
        Kürbiskerne | 2 EL
    Kapitel section id="zubereitung": Zubereitung (nummerierte Liste)
        1. Kürbis und Zwiebel würfeln und in etwas Öl *anrösten*.
        2. Mit der Gemüsesuppe aufgießen und **20 Minuten** kochen lassen.
        3. Pürieren, Schlagobers einrühren und mit Kürbiskernen servieren.
    Aufklappen: Nährwerte anzeigen
        Energie: 180 kcal pro Teller
        Eiweiß: 4 g
    Absatz mit zwei Links: Zurück zu Suppen -> ../kategorien/suppen.html  •  Zur Startseite -> ../index.html

ZUSATZINFOS: Küchen-Tipp
    Der Hokkaido-Kürbis muss **nicht geschält** werden – die Schale wird beim Kochen weich.
```

### 1.7 Rezept: Wiener Schnitzel

**Datei:** `rezepte/wiener-schnitzel.html` – das vollständige Rezept.

**Was du dabei anwendest:** wie bei der Kürbiscremesuppe.

Vorgegebene Texte (stehen auch als Kommentar in der Vorlage):

```text
SEITENNAVIGATION (aside id="seiten-nav"): Auf dieser Seite
    Zutaten -> #zutaten · Zubereitung -> #zubereitung

MAIN
article id="rezept"  (section in article)
    Überschrift: Wiener Schnitzel
    Autor:in: Von **Ben** aus der 2BHIF, 15. November 2026 (2026-11-15)
    Einleitung: Das Wiener Schnitzel ist der bekannteste Klassiker der österreichischen Küche. Zuerst findest du die Zutaten für vier Personen, danach die Zubereitung in drei Schritten.
    Bild: ../bilder/schnitzel.svg (width 320) · alt: Goldbraunes Schnitzel mit einer Zitronenscheibe
          Bildunterschrift: Abb. 1: Wiener Schnitzel mit Zitrone
    Kapitel section id="zutaten": Zutaten (Tabelle, Spalten Zutat | Menge)
        Kalbsschnitzel | 4 Stück
        Mehl | 100 g
        Eier | 2 Stück
        Semmelbrösel | 150 g
        Zitrone | 1 Stück
    Kapitel section id="zubereitung": Zubereitung (nummerierte Liste)
        1. Die Schnitzel **dünn** klopfen und salzen.
        2. Nacheinander in Mehl, verquirltem Ei und Semmelbröseln wenden.
        3. In heißem Öl schwimmend *goldbraun* herausbacken.
    Aufklappen: Nährwerte anzeigen
        Energie: 520 kcal pro Portion
        Eiweiß: 35 g
    Absatz mit zwei Links: Zurück zu Hauptspeisen -> ../kategorien/hauptspeisen.html  •  Zur Startseite -> ../index.html

ZUSATZINFOS: Küchen-Tipp
    Die Panier **nicht andrücken** – nur so wird sie beim Backen schön wellig.
```

### 1.8 Rezept: Kaiserschmarrn

**Datei:** `rezepte/kaiserschmarrn.html` – das vollständige Rezept.

**Was du dabei anwendest:** wie bei der Kürbiscremesuppe.

Vorgegebene Texte (stehen auch als Kommentar in der Vorlage):

```text
SEITENNAVIGATION (aside id="seiten-nav"): Auf dieser Seite
    Zutaten -> #zutaten · Zubereitung -> #zubereitung

MAIN
article id="rezept"  (section in article)
    Überschrift: Kaiserschmarrn
    Autor:in: Von **Sarah** aus der 2BHIF, 14. November 2026 (2026-11-14)
    Einleitung: Kaiserschmarrn ist eine süße Hauptspeise oder ein großes Dessert. Zuerst findest du die Zutaten für vier Personen, danach die Zubereitung in drei Schritten.
    Bild: ../bilder/kaiserschmarrn.svg (width 320) · alt: Zerrissener Kaiserschmarrn mit Rosinen und Staubzucker
          Bildunterschrift: Abb. 1: Kaiserschmarrn mit Zwetschkenröster
    Kapitel section id="zutaten": Zutaten (Tabelle, Spalten Zutat | Menge)
        Mehl | 150 g
        Milch | 250 ml
        Eier | 4 Stück
        Zucker | 2 EL
        Rosinen | 40 g
        Butter | 2 EL
    Kapitel section id="zubereitung": Zubereitung (nummerierte Liste)
        1. Eier trennen und die Dotter mit Milch und Mehl glatt verrühren.
        2. Eiklar mit Zucker **steif** schlagen und vorsichtig unterheben.
        3. In Butter backen, wenden, mit zwei Gabeln *zerreißen* und mit Staubzucker bestreuen.
    Aufklappen: Nährwerte anzeigen
        Energie: 420 kcal pro Portion
        Eiweiß: 14 g
    Absatz mit zwei Links: Zurück zu Desserts -> ../kategorien/desserts.html  •  Zur Startseite -> ../index.html

ZUSATZINFOS: Küchen-Tipp
    Mit **Zwetschkenröster** oder Apfelmus servieren.
```

### 1.9 Rezept: Apfelstrudel

**Datei:** `rezepte/apfelstrudel.html` – das vollständige Rezept.

**Was du dabei anwendest:** wie bei der Kürbiscremesuppe.

Vorgegebene Texte (stehen auch als Kommentar in der Vorlage):

```text
SEITENNAVIGATION (aside id="seiten-nav"): Auf dieser Seite
    Zutaten -> #zutaten · Zubereitung -> #zubereitung

MAIN
article id="rezept"  (section in article)
    Überschrift: Apfelstrudel
    Autor:in: Von **Mia** aus der 2BHIF, 16. November 2026 (2026-11-16)
    Einleitung: Der Apfelstrudel braucht etwas Geduld, schmeckt aber warm am besten. Zuerst findest du die Zutaten für ein Blech, danach die Zubereitung in drei Schritten.
    Bild: ../bilder/apfelstrudel.svg (width 320) · alt: Apfelstrudel mit Staubzucker auf einem Teller
          Bildunterschrift: Abb. 1: Apfelstrudel mit Staubzucker
    Kapitel section id="zutaten": Zutaten (Tabelle, Spalten Zutat | Menge)
        Strudelteig | 1 Packung
        Äpfel | 1 kg
        Zucker | 80 g
        Zimt | 1 TL
        Rosinen | 50 g
        Butter | 60 g
    Kapitel section id="zubereitung": Zubereitung (nummerierte Liste)
        1. Äpfel schälen, blättrig schneiden und mit Zucker, Zimt und Rosinen mischen.
        2. Teig auflegen, mit Butter bestreichen, die Fülle verteilen und **einrollen**.
        3. Bei *180 °C* etwa 40 Minuten backen.
    Aufklappen: Nährwerte anzeigen
        Energie: 310 kcal pro Stück
        Eiweiß: 4 g
    Absatz mit zwei Links: Zurück zu Desserts -> ../kategorien/desserts.html  •  Zur Startseite -> ../index.html

ZUSATZINFOS: Küchen-Tipp
    Lauwarm mit **Vanillesauce** oder Schlagobers servieren.
```

**Styling:** Ergänze in `style.css` – für alle vier Rezeptseiten:

```css
/* ---------- Aufgabe 2: Rezeptseiten ---------- */
#rezept figure img {
    border-radius: 12px;
}

#zubereitung li {
    margin: 8px 0;
}
```

Damit dieser Block wirkt, braucht dein `<article>` die `id="rezept"` und die Zubereitungs-Section die `id="zubereitung"`.

---

## Teil 2 – `hintergruende.md`

Beschreibe in `hintergruende.md` (Gliederung in der Vorlage):

1. **Wiederverwendete Komponenten** – eine Tabelle: Welche Komponente ist auf allen Seiten **gleich**, was **ändert** sich von Seite zu Seite?
2. **Relative Pfade** – eine Tabelle mit mindestens **fünf** Pfaden aus deinen Seiten: *Link steht in*, *Ziel*, *Pfad*, *Warum so?*
3. **Komponente: Formular „Rezept einreichen“** – Code-Snippet, Bullet Points zur Schachtelung (`form` → `fieldset` → `legend`/`p` → `label`/`input`) und eine Tabelle mit *Tag*, *Block oder Inline*, *liegt in*, *Bedeutung*. Erkläre auch, warum hier **POST** und nicht GET verwendet wird.
4. **Komponente: Rezeptseite** – Code-Snippet des `<main>` einer Rezeptseite, Bullet Points zur Schachtelung (section in article) und die Tag-Tabelle.
5. **Linter-Protokoll**.

---

## Teil 3 – Linter

Prüfe **alle zehn** HTML-Dateien mit **HTMLHint** und `hintergruende.md` mit **markdownlint** und behebe alle Meldungen. HTMLHint prüft zusätzlich, ob jede `id` nur einmal vorkommt – achte darauf bei den kopierten Komponenten.

Prüfe außerdem selbst, was kein Linter findet: **Jeder Link** auf jeder Seite muss funktionieren. Klicke dich einmal durch die ganze Website.
