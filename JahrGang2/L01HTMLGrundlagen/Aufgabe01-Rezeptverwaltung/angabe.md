# Aufgabe: Rezeptverwaltung „Kochbuch der 2BHIF“

Du baust die Startseite einer **Rezeptverwaltung** und beschreibst danach ihre Teile – die **Komponenten** – in einem Markdown-Dokument. Am Ende prüfst du beide Dateien mit einem **Linter**.

Die Aufgabe deckt den ganzen Stoff von L01 ab:

| Skriptum | Was du hier anwendest |
| :--- | :--- |
| [L01.1 HTML-Grundlagen](../Skripten/L01.1-HTML-Ueberblick.html) | Grundgerüst, Block/Inline, Überschriften, Listen, Links, Bild, Tabelle |
| [L01.2 Seitenzonen](../Skripten/L01.2-Header-Main-Footer-Nav-Aside.html) | `header`, `nav`, `aside`, `main`, `footer` |
| [L01.3 section, Anker, article](../Skripten/L01.3-Section-Article.html) | `section`, `id` + `href="#…"`, `article`, article in section, section in article |
| [L01.4 Medien, Buttons, Formulare](../Skripten/L01.4-Formulare-Selection-Input.html) | `figure`, `details`, `a` vs. `button`, Formular mit GET und POST |
| [L00 Markdown](../../L00MarkdownFiles/Skripten/L00-HowToMarkdown.md) | Überschriften, Listen, Tabellen, Code-Blöcke |

---

## Abgabe

Lade **einen Ordner** mit folgendem Inhalt ab:

```text
rezeptverwaltung/
├── index.html
├── hintergruende.md
├── style.css
└── bilder/
    └── (alle Bilder aus der Vorlage)
```

Starte mit der **Vorlage** im Ordner [`vorlage/`](vorlage/). Sie enthält das Grundgerüst mit eingebundenem `style.css`, alle Bilder, die Gliederung von `hintergruende.md` und die Einstellungen für die Linter (`.htmlhintrc`, `.markdownlint.json`).

---

## Teil 1 – `index.html` (Rezeptverwaltung)

Baue eine Seite im **3-Spalten-Design** wie das Lernportal aus den Slides. Halte dich an unsere Regeln:

* Block-Tags: Start- und Closing-Tag **untereinander**, Inhalt eingerückt.
* Inline-Tags: Start- und Closing-Tag **in einer Zeile**.
* Genau **ein** `<header>`, **ein** `<main>` und **ein** `<footer>` – direkt im `<body>`.
* Kein Fließtext „nackt“ in einem Container – immer in `<p>`.

Die **Texte sind vorgegeben** – du findest sie in den Tabellen unten und als Kommentare in [`vorlage/index.html`](vorlage/index.html). Deine Aufgabe ist es, sie mit den **richtigen Tags** und der **richtigen Schachtelung** auszuzeichnen.

### So gehst du vor

Du arbeitest **Komponente für Komponente**:

1. Schreibe das **HTML** einer Komponente in `index.html` und kontrolliere es im Browser.
2. Kopiere danach den **CSS-Block** dieser Komponente aus der Angabe **ans Ende** von `style.css` und lade die Seite neu.
3. Erst dann kommt die nächste Komponente.

**CSS kennst du noch nicht – du musst es auch nicht verstehen.** Es ist ein **Ausblick** auf das, was wir später lernen. Du musst nur Folgendes tun:

* `style.css` liegt in der Vorlage **neben** `index.html` und ist dort schon eingebunden (`<link rel="stylesheet" href="style.css">` im `<head>`). Daran änderst du **nichts**.
* Öffne `style.css` in VS Code. Kopiere jeden CSS-Block aus dieser Angabe **vollständig und unverändert** ans **Ende** der Datei – unter den bisherigen Inhalt. Lösche nichts.
* Speichere `style.css` und lade die Seite im Browser neu (**F5**).

Das CSS findet deine Elemente über ihren **Tag-Namen** (z. B. `header`, `main`, `footer`) und über ihre **`id`**. Diese `id`s müssen deshalb **genau so** in deinem HTML stehen:

| `id` | an welchem Element? |
| :--- | :--- |
| `top` | `<header>` |
| `haupt-nav` | `<nav>` im Header |
| `seiten-nav` | `<aside>` links |
| `suche` | `<section>` Rezeptsuche |
| `kategorien` | `<section>` Kategorien |
| `neue-rezepte` | `<section>` Neue Rezepte |
| `rezept-der-woche` | `<article>` Rezept der Woche |
| `zusatz-info` | `<aside>` rechts |

**Ein Block wirkt nicht?** Dann prüfe der Reihe nach:

1. Hast du `style.css` **gespeichert** und die Seite **neu geladen**?
2. Steht der Block **vollständig** in `style.css` (jede `{` hat ihre `}`)?
3. Stimmt die `id` in deinem HTML **genau** mit der Tabelle überein (Groß-/Kleinschreibung, Bindestrich)?
4. Stimmt deine **Schachtelung**? Das CSS für `#haupt-nav ul` wirkt z. B. nur, wenn das `<ul>` **im** `<nav id="haupt-nav">` steht.

So siehst du sofort, ob dein HTML richtig ist.

### So soll die Seite aussehen

Solange das Layout aus Schritt 1.6 fehlt, stehen alle Komponenten **untereinander** (Block-Elemente). Am Ende sieht die Seite so aus:

```text
┌──────────────────────────────────────────────────────────────────────┐
│ HEADER   Kochbuch der 2BHIF                                          │
│          Startseite · Alle Rezepte · Rezept einreichen               │
│          Login: Benutzername [____] Passwort [____] ☐ [Anmelden]     │
├───────────────┬────────────────────────────────────┬─────────────────┤
│ ASIDE links   │ MAIN                               │ ASIDE rechts    │
│ Auf dieser    │ ┌ Rezeptsuche ───────────────────┐ │ Küchen-Tipp     │
│ Seite         │ │ Suchbegriff [___] Kategorie [▾]│ │ Teig immer      │
│ · Rezeptsuche │ └────────────────────────────────┘ │ rasten lassen … │
│ · Kategorien  │ ┌ Kategorien ────────────────────┐ │                 │
│ · Neue        │ │ [Bild]   [Bild]       [Bild]   │ │                 │
│   Rezepte     │ │ Suppen   Hauptspeisen Desserts │ │                 │
│ · Rezept der  │ └────────────────────────────────┘ │                 │
│   Woche       │ ┌ Neue Rezepte ──────────────────┐ │                 │
│               │ │ [Bild] Kürbiscremesuppe        │ │                 │
│               │ │ [Bild] Kaiserschmarrn          │ │                 │
│               │ │ [Bild] Wiener Schnitzel        │ │                 │
│               │ │ [Bild] Apfelstrudel            │ │                 │
│               │ └────────────────────────────────┘ │                 │
│               │ ┌ Rezept der Woche ──────────────┐ │                 │
│               │ │ Palatschinken  [großes Bild]   │ │                 │
│               │ │ Zutaten (Tabelle)              │ │                 │
│               │ │ Zubereitung: 1. [Bild]         │ │                 │
│               │ │              2. [Bild]         │ │                 │
│               │ │              3. [Bild]         │ │                 │
│               │ │ ▸ Nährwerte anzeigen           │ │                 │
│               │ └────────────────────────────────┘ │                 │
├───────────────┴────────────────────────────────────┴─────────────────┤
│ FOOTER   © 2026 Kochbuch der 2BHIF · Nach oben  /  Adresse            │
└──────────────────────────────────────────────────────────────────────┘
```

Alle Bilder liegen schon in [`vorlage/bilder/`](vorlage/bilder/). Jedes Bild steht in einem `<figure>` mit `<img>` (`src`, `alt`, `width`) und – wo angegeben – einer `<figcaption>`.

### 1.1 Grundgerüst (L01.1)

* `<!DOCTYPE html>`, `<html lang="de">`, `<head>` mit `<meta charset="UTF-8">`, `<body>`.
* `<title>`: **Kochbuch der 2BHIF – Rezeptverwaltung**

### 1.2 Kopf mit Hauptnavigation und Login (L01.2, L01.4)

* `<header>` mit `id="top"` (Sprungziel für „Nach oben“).
* **Login-Formular** im Header: `<form>` mit `action="https://httpbin.org/post"` und `method="POST"`. Jedes Feld hat ein `<label>` (über `for`/`id`) und ein `name`.

| Element | Vorgegebener Text / Wert |
| :--- | :--- |
| Hauptüberschrift `<h1>` | Kochbuch der 2BHIF |
| Hauptnavigation `<nav id="haupt-nav">` (Liste von Links) | Startseite → `index.html` · Alle Rezepte → `rezepte.html` · Rezept einreichen → `einreichen.html` |
| Feld 1 (`type="text"`, `name="benutzername"`) | Label: Benutzername: |
| Feld 2 (`type="password"`, `name="passwort"`) | Label: Passwort: |
| Checkbox (`name="angemeldet_bleiben"`, `value="ja"`) | Label: Angemeldet bleiben |
| `<button type="submit">` | Anmelden |

**Styling:** Ergänze in `style.css` – damit werden Kopfbereich, Navigation, Login-Felder und **alle Buttons** gestaltet:

```css
/* ---------- Komponente 1: Header ---------- */
header {
    background: #9a3412;
    color: white;
    padding: 16px 24px;
    border-radius: 12px;
}

header h1 {
    margin: 0 0 8px;
}

#haupt-nav ul {
    display: flex;
    gap: 16px;
    list-style: none;
    margin: 0 0 12px;
    padding: 0;
}

#haupt-nav a {
    color: #fed7aa;
    font-weight: bold;
    text-decoration: none;
}

header form {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 12px;
}

header form p {
    margin: 0;
}

input,
select {
    font: inherit;
    padding: 6px 8px;
    border: 1px solid #fdba74;
    border-radius: 6px;
}

button {
    font: inherit;
    font-weight: bold;
    color: white;
    background: #ea580c;
    border: 0;
    border-radius: 6px;
    padding: 6px 14px;
    cursor: pointer;
}

button:hover {
    background: #c2410c;
}
```

### 1.3 Seitennavigation (L01.2, L01.3)

Ein `<aside id="seiten-nav">` links mit einem `<nav>`, das als **Inhaltsverzeichnis** auf die Kapitel **dieser Seite** springt (`href="#…"`).

| Element | Vorgegebener Text / Wert |
| :--- | :--- |
| Überschrift `<h2>` | Auf dieser Seite |
| Links | Rezeptsuche → `#suche` · Kategorien → `#kategorien` · Neue Rezepte → `#neue-rezepte` · Rezept der Woche → `#rezept-der-woche` |

**Styling:** Ergänze in `style.css`:

```css
/* ---------- Komponente 2: Seitennavigation ---------- */
#seiten-nav {
    background: #ffedd5;
    border-radius: 12px;
    padding: 8px 16px;
}

#seiten-nav ul {
    list-style: none;
    padding: 0;
}

#seiten-nav li {
    margin: 8px 0;
}

#seiten-nav a {
    color: #9a3412;
    text-decoration: none;
}

#seiten-nav a:hover {
    text-decoration: underline;
}
```

### 1.4 Hauptinhalt (L01.1, L01.3, L01.4)

Das `<main>` enthält vier Kapitel. Die `id` jedes Kapitels muss zu den Links der Seitennavigation passen.

**Kapitel 1 – Rezeptsuche** (`<section id="suche">`) mit einer Suche als **GET-Formular**: `action="https://httpbin.org/get"`, `method="GET"`.

| Element | Vorgegebener Text / Wert |
| :--- | :--- |
| Überschrift `<h2>` | Rezeptsuche |
| Suchfeld (`type="search"`, `name="q"`) | Label: Suchbegriff: · Platzhalter: z. B. Palatschinken |
| Auswahl (`<select name="kategorie">`) | Label: Kategorie: · Optionen: Alle Kategorien (`alle`), Hauptspeise (`hauptspeise`), Dessert (`dessert`), Suppe (`suppe`) |
| `<button type="submit">` | Suchen |

**Kapitel 2 – Kategorien** (`<section id="kategorien">`): drei Bilder als `<figure>`. Die Bildunterschrift ist jeweils ein **Link** auf die Kategorie-Seite.

| Element | Vorgegebener Text / Wert |
| :--- | :--- |
| Überschrift `<h2>` | Kategorien |
| Absatz | Stöbere in unseren Rezepten nach **Kategorie**. |
| Bild 1 (`width="160"`) | `bilder/kuerbiscremesuppe.svg` · `alt`: Orange Kürbissuppe in einem weißen Teller · Bildunterschrift: Link „Suppen“ → `kategorien/suppen.html` |
| Bild 2 (`width="160"`) | `bilder/schnitzel.svg` · `alt`: Goldbraunes Schnitzel mit einer Zitronenscheibe · Bildunterschrift: Link „Hauptspeisen“ → `kategorien/hauptspeisen.html` |
| Bild 3 (`width="160"`) | `bilder/apfelstrudel.svg` · `alt`: Apfelstrudel mit Staubzucker auf einem Teller · Bildunterschrift: Link „Desserts“ → `kategorien/desserts.html` |

**Kapitel 3 – Neue Rezepte** (`<section id="neue-rezepte">`) – **article in section**: Die Section ist eine **Rubrik**, darin liegen **vier** Rezept-Karten als `<article>`. Jede Karte hat in dieser Reihenfolge: Überschrift `<h3>`, Bild als `<figure>` (`width="240"`) mit Bildunterschrift, Text, Datum als `<p>` mit `<time datetime="…">`, einen Link „Zum Rezept“ (`<a>`, Navigation) und einen Button „Merken“ (`<button type="button">`, Aktion).

| Element | Karte 1 | Karte 2 |
| :--- | :--- | :--- |
| Überschrift `<h3>` | Kürbiscremesuppe | Kaiserschmarrn |
| Bild | `bilder/kuerbiscremesuppe.svg` · `alt`: Orange Kürbissuppe in einem weißen Teller | `bilder/kaiserschmarrn.svg` · `alt`: Zerrissener Kaiserschmarrn mit Rosinen und Staubzucker |
| Bildunterschrift | Kürbiscremesuppe mit Kürbiskernen | Kaiserschmarrn mit Zwetschkenröster |
| Text (**fett** = `<strong>`, *kursiv* = `<em>`) | Eine **cremige** Suppe für kalte Herbsttage – fertig in *30 Minuten*. | Der **österreichische Klassiker** mit Rosinen und Zwetschkenröster. |
| Datum | Veröffentlicht am 10. November 2026 (`2026-11-10`) | Veröffentlicht am 14. November 2026 (`2026-11-14`) |
| Link „Zum Rezept“ | `rezepte/kuerbiscremesuppe.html` | `rezepte/kaiserschmarrn.html` |

| Element | Karte 3 | Karte 4 |
| :--- | :--- | :--- |
| Überschrift `<h3>` | Wiener Schnitzel | Apfelstrudel |
| Bild | `bilder/schnitzel.svg` · `alt`: Goldbraunes Schnitzel mit einer Zitronenscheibe | `bilder/apfelstrudel.svg` · `alt`: Apfelstrudel mit Staubzucker auf einem Teller |
| Bildunterschrift | Wiener Schnitzel mit Zitrone | Apfelstrudel mit Staubzucker |
| Text | **Dünn** geklopft und *goldbraun* herausgebacken – am besten mit Erdäpfelsalat. | Hauchdünner Teig, viel Apfel und *Zimt* – der **Lieblingsnachtisch** der Klasse. |
| Datum | Veröffentlicht am 15. November 2026 (`2026-11-15`) | Veröffentlicht am 16. November 2026 (`2026-11-16`) |
| Link „Zum Rezept“ | `rezepte/wiener-schnitzel.html` | `rezepte/apfelstrudel.html` |

Die Rubrik selbst bekommt die Überschrift `<h2>` **Neue Rezepte**.

**Kapitel 4 – Rezept der Woche** (`<article id="rezept-der-woche">`) – **section in article**: Das ganze Rezept ist ein eigenständiges Werk. Zuerst stehen Titel, Autor:in und der **Einleitungstext**, danach Bild, Kapitel und der aufklappbare Bereich.

| Element | Vorgegebener Text / Wert |
| :--- | :--- |
| Überschrift `<h2>` | Rezept der Woche: Palatschinken |
| Autor:in und Datum | Von **Lena** aus der 2BHIF, 17. November 2026 (`2026-11-17`) |
| Einleitungstext | Palatschinken sind dünne Pfannkuchen und schnell gemacht. Zuerst findest du die Zutaten für vier Personen, danach die Zubereitung Schritt für Schritt – zu jedem Schritt gibt es ein Bild. |
| Bild (`<figure>` mit `<img>`, `width="320"`) | `bilder/palatschinken.svg` · `alt`: Drei gefüllte Palatschinken auf einem weißen Teller |
| Bildunterschrift `<figcaption>` | Abb. 1: Palatschinken mit Marillenmarmelade |
| Kapitel `<section>` mit `<h3>` **Zutaten** | Tabelle mit den Spalten **Zutat** und **Menge**: Mehl – 200 g · Milch – 400 ml · Eier – 3 Stück · Salz – 1 Prise |
| Kapitel `<section>` mit `<h3>` **Zubereitung** | Nummerierte Liste mit drei Schritten. Jeder Listenpunkt enthält einen Absatz `<p>` und ein Bild als `<figure>` (`width="200"`) – siehe Tabelle unten. |
| `<details>` mit `<summary>` | Zeile: Nährwerte anzeigen · Inhalt (Liste): Energie: 240 kcal pro Stück · Eiweiß: 9 g |

| Schritt | Text | Bild · `alt` | Bildunterschrift |
| :--- | :--- | :--- | :--- |
| 1 | Mehl, Milch, Eier und Salz zu einem *glatten* Teig verrühren. | `bilder/teig-ruehren.svg` · Schüssel mit hellem Teig und einem Schneebesen | Abb. 2: Teig verrühren |
| 2 | Den Teig **10 Minuten** rasten lassen. | `bilder/teig-rasten.svg` · Schüssel mit Teig neben einer Eieruhr auf 10 Minuten | Abb. 3: Teig rasten lassen |
| 3 | In einer heißen Pfanne dünn herausbacken und füllen. | `bilder/herausbacken.svg` · Goldgelbe Palatschinke in einer dampfenden Pfanne | Abb. 4: In der Pfanne herausbacken |

**Styling:** Ergänze in `style.css` – Karten, Bilder, Tabelle und Aufklapp-Bereich bekommen ihr Aussehen:

```css
/* ---------- Komponente 3: Main ---------- */
main {
    background: white;
    border-radius: 12px;
    padding: 8px 24px 24px;
}

main section {
    border-top: 2px solid #fed7aa;
    padding-top: 8px;
}

#kategorien figure {
    display: inline-block;
    margin: 8px 16px 8px 0;
    text-align: center;
}

#neue-rezepte article {
    background: #fffbeb;
    border: 1px solid #fde68a;
    border-radius: 12px;
    padding: 8px 16px;
    margin: 16px 0;
}

figure {
    margin: 8px 0;
}

figcaption {
    color: #78716c;
    font-size: 0.9em;
}

table {
    border-collapse: collapse;
}

th,
td {
    border: 1px solid #fdba74;
    padding: 6px 12px;
    text-align: left;
}

th {
    background: #ffedd5;
}

details {
    border: 1px solid #fdba74;
    border-radius: 8px;
    padding: 8px 12px;
}

summary {
    cursor: pointer;
    font-weight: bold;
}
```

### 1.5 Zusatzinfos und Fußzeile (L01.1, L01.2, L01.3)

| Element | Vorgegebener Text / Wert |
| :--- | :--- |
| `<aside id="zusatz-info">` rechts: Überschrift `<h2>` | Küchen-Tipp |
| `<aside>` rechts: Absatz | Teig immer **rasten** lassen. Mehr Tipps findest du bei Chefkoch. – „Chefkoch“ ist ein externer Link auf `https://www.chefkoch.de/` |
| `<footer>`: 1. Absatz | &copy; 2026 Kochbuch der 2BHIF &bull; Nach oben – „Nach oben“ ist ein Link auf `#top` |
| `<footer>`: 2. Absatz (Zeilen mit `<br>` trennen) | HTL Donaustadt · Donaustadtstraße 45 · 1220 Wien |

**Styling:** Ergänze in `style.css`:

```css
/* ---------- Komponente 4: Zusatzinfos ---------- */
#zusatz-info {
    background: #fef3c7;
    border-radius: 12px;
    padding: 8px 16px;
}

/* ---------- Komponente 5: Footer ---------- */
footer {
    text-align: center;
    color: #78716c;
    font-size: 0.9em;
}

footer a {
    color: #9a3412;
}
```

### 1.6 Zum Schluss: das 3-Spalten-Layout

Jetzt sind alle Komponenten fertig. Erst **dieser** Block ordnet sie als drei Spalten an – das HTML bleibt dabei **unverändert**. Er funktioniert nur, wenn `header`, `#seiten-nav`, `main`, `#zusatz-info` und `footer` **direkt im `<body>`** stehen.

```css
/* ---------- Zum Schluss: das 3-Spalten-Layout ---------- */
body {
    display: grid;
    grid-template-columns: 200px minmax(0, 1fr) 220px;
    grid-template-areas:
        "kopf  kopf  kopf"
        "links mitte rechts"
        "fuss  fuss  fuss";
    gap: 16px;
    align-items: start;
}

header {
    grid-area: kopf;
}

#seiten-nav {
    grid-area: links;
}

main {
    grid-area: mitte;
}

#zusatz-info {
    grid-area: rechts;
}

footer {
    grid-area: fuss;
}

/* Schmaler Bildschirm: alles wieder untereinander */
@media (max-width: 800px) {
    body {
        grid-template-columns: 1fr;
        grid-template-areas: "kopf" "links" "mitte" "rechts" "fuss";
    }
}
```

### 1.7 Ausprobieren

* Schicke die **Suche** ab: In der Adresszeile müssen `q` und `kategorie` stehen, httpbin zeigt sie unter `"args"`.
* Schicke das **Login** ab: Die URL bleibt ohne `?`, httpbin zeigt die Daten unter `"form"`.
* Klicke die Links im Inhaltsverzeichnis und „Nach oben“.

---

## Teil 2 – `hintergruende.md` (die Komponenten beschreiben)

Wir nennen die großen Teile der Seite **Komponenten**. Beschreibe in `hintergruende.md` jede Komponente einzeln:

| Komponente | Was gehört dazu? |
| :--- | :--- |
| Header | `<header>` mit `<h1>`, Hauptnavigation und Login-Formular |
| Seitennavigation | `<aside>` links mit `<nav>` |
| Main | `<main>` mit allen Kapiteln |
| Zusatzinfos | `<aside>` rechts |
| Footer | `<footer>` |

Für **jede** Komponente gibt es (siehe Vorlage):

1. ein **Code-Snippet** (```` ```html ````) mit genau dem HTML dieser Komponente,
2. **Bullet Points**, die die **Schachtelung** erklären: Was steckt worin, und **warum** (Bedeutung)?
3. eine **Tabelle** mit den verwendeten Tags: *Tag*, *Block oder Inline*, *liegt in (Eltern-Element)*, *Bedeutung*.

Dazu kommen zwei kurze Abschnitte:

* **Gesamtstruktur** – ein Schema, wie die Komponenten im `<body>` liegen, und warum es drei Spalten erst mit CSS gibt.
* **Linter-Protokoll** – welche Meldungen die Linter gezeigt haben und wie du sie behoben hast.

---

## Teil 3 – Linter

Prüfe deine Abgabe am Ende mit zwei Lintern in VS Code und behebe **alle** Meldungen:

| Datei | Linter (VS Code Extension) | Was wird geprüft? |
| :--- | :--- | :--- |
| `index.html` | **HTMLHint** (nutzt die `.htmlhintrc` aus der Vorlage) | z. B. fehlender `<title>`, fehlendes `alt`, doppelte `id`, nicht geschlossene Tags |
| `hintergruende.md` | **markdownlint** | z. B. Überschriften-Ebenen, Leerzeilen um Listen und Code-Blöcke, Sprache beim Code-Block |

Zusätzlich darfst du `index.html` mit dem **W3C-Validator** prüfen: [validator.w3.org](https://validator.w3.org/#validate_by_upload) → Datei hochladen.

Trage die gefundenen Meldungen in den Abschnitt **Linter-Protokoll** ein.
