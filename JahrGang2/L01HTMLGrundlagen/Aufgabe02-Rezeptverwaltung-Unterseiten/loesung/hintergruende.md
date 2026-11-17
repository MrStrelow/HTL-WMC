# Hintergründe: Die Unterseiten der Rezeptverwaltung

## Wiederverwendete Komponenten

| Komponente | auf allen Seiten gleich? | was ändert sich von Seite zu Seite? |
| :--- | :--- | :--- |
| Header | ja – Titel, Hauptnavigation, Login | nur die **Pfade**: im Unterordner `../index.html` statt `index.html` |
| Seitennavigation | Aufbau gleich (`aside` → `h2` → `nav` → `ul` → `li` → `a`) | die **Links**: jede Seite verlinkt auf ihre eigenen Kapitel |
| Main | nein | der ganze Inhalt – das ist der **einzigartige** Teil jeder Seite |
| Zusatzinfos | Aufbau gleich (`aside` → `h2` + `p`) | der **Küchen-Tipp** auf den Rezeptseiten und bei „Rezept einreichen“ |
| Footer | ja, vollständig | nichts – `#top` zeigt immer auf den Header derselben Seite |

* Weil Header, Seitennavigation, Zusatzinfos und Footer auf jeder Seite wiederkommen, sind sie **Komponenten**: einmal gebaut, oft verwendet.
* Das `<main>` ist der Teil, der eine Seite von der anderen unterscheidet. Deshalb gibt es genau **ein** `<main>` pro Seite.

## Relative Pfade

| Link steht in | Ziel | Pfad | Warum so? |
| :--- | :--- | :--- | :--- |
| `index.html` | `rezepte/apfelstrudel.html` | `rezepte/apfelstrudel.html` | vom Hauptordner **in** den Unterordner `rezepte` |
| `kategorien/desserts.html` | `rezepte/apfelstrudel.html` | `../rezepte/apfelstrudel.html` | erst mit `../` in den Hauptordner, dann in `rezepte` |
| `rezepte/apfelstrudel.html` | `index.html` | `../index.html` | `../` = einen Ordner nach oben |
| `rezepte/apfelstrudel.html` | `bilder/apfelstrudel.svg` | `../bilder/apfelstrudel.svg` | der Ordner `bilder` liegt im Hauptordner |
| `kategorien/suppen.html` | `style.css` | `../style.css` | ohne `../` würde das CSS nicht gefunden – die Seite wäre ungestylt |
| `kategorien/desserts.html` | Rezept der Woche | `../index.html#rezept-der-woche` | andere Seite **plus** Anker auf ein Element dort |
| `rezepte.html` | `#suppen` | `#suppen` | Anker auf **dieser** Seite – kein Pfad nötig |

## Komponente: Formular „Rezept einreichen“

### Code

```html
<form action="https://httpbin.org/post" method="POST">
    <fieldset>
        <legend>
            Über dich
        </legend>
        <p>
            <label for="name">Dein Name:</label>
            <input id="name" type="text" name="name" required>
        </p>
        <p>
            <label for="email">E-Mail-Adresse:</label>
            <input id="email" type="email" name="email" required>
        </p>
    </fieldset>
    <fieldset>
        <legend>
            Dein Rezept
        </legend>
        <p>
            <label for="titel">Name des Rezepts:</label>
            <input id="titel" type="text" name="titel" required>
        </p>
        <!-- weitere Felder: Kategorie (select), Zeit und Portionen (number), Datum (date), vegetarisch (checkbox) -->
    </fieldset>
    <fieldset>
        <legend>
            Schwierigkeit
        </legend>
        <p>
            <input id="s-leicht" type="radio" name="schwierigkeit" value="leicht" checked>
            <label for="s-leicht">leicht</label>
        </p>
        <p>
            <input id="s-mittel" type="radio" name="schwierigkeit" value="mittel">
            <label for="s-mittel">mittel</label>
        </p>
        <p>
            <input id="s-schwer" type="radio" name="schwierigkeit" value="schwer">
            <label for="s-schwer">schwer</label>
        </p>
    </fieldset>
    <p>
        <label for="zutaten">Zutaten (eine pro Zeile):</label>
        <textarea id="zutaten" name="zutaten" rows="5"></textarea>
    </p>
    <!-- Zubereitung (textarea), Datenschutz (checkbox, required) -->
    <p>
        <button type="submit">Rezept einreichen</button>
    </p>
</form>
```

### Schachtelung

* `<form>` bündelt alle Eingaben. Darin fassen drei `<fieldset>` zusammengehörige Felder zu **Gruppen** zusammen; `<legend>` ist die Überschrift jeder Gruppe.
* Jedes Paar aus `<label>` und Eingabefeld steht in einem eigenen `<p>`, damit es eine eigene Zeile bekommt. `for` beim Label und `id` beim Feld sind gleich – so gehören sie zusammen.
* Die drei Radio-Buttons haben **denselben** `name="schwierigkeit"`. Nur so weiß der Browser, dass sie eine Gruppe sind und man genau **einen** wählen darf. An den Server geht der `value` des gewählten Buttons.
* `<textarea>` hat im Gegensatz zu `<input>` ein **Closing-Tag**.
* **POST statt GET:** Das Rezept wird **gespeichert** – das verändert Daten am Server. Außerdem sind Zutaten und Zubereitung lange Texte, die nicht in die URL passen. Bei POST stehen die Daten im **Body** des Requests.

### Verwendete Tags

| Tag | Block oder Inline | liegt in | Bedeutung |
| :--- | :--- | :--- | :--- |
| `<form>` | Block | `<section>` | Formular, schickt per POST an den Server |
| `<fieldset>` | Block | `<form>` | Gruppe zusammengehöriger Felder |
| `<legend>` | Block | `<fieldset>` | Überschrift der Gruppe |
| `<p>` | Block | `<fieldset>`, `<form>` | eine Zeile mit Label und Feld |
| `<label>` | Inline | `<p>` | Beschriftung, über `for` mit dem Feld verbunden |
| `<input>` | Inline (Non-Closing) | `<p>` | Eingabefeld: `text`, `email`, `number`, `date`, `checkbox`, `radio` |
| `<select>` | Inline | `<p>` | Auswahlmenü für die Kategorie |
| `<textarea>` | Inline | `<p>` | mehrzeiliges Textfeld |
| `<button>` | Inline | `<p>` | `type="submit"` schickt das Formular ab |

## Komponente: Rezeptseite

### Code

```html
<main>
    <article id="rezept">
        <h2>
            Apfelstrudel
        </h2>
        <p>
            Von <strong>Mia</strong> aus der 2BHIF, <time datetime="2026-11-16">16. November 2026</time>
        </p>
        <p>
            Der Apfelstrudel braucht etwas Geduld, schmeckt aber warm am besten. Zuerst findest du die Zutaten für ein Blech, danach die Zubereitung in drei Schritten.
        </p>
        <figure>
            <img src="../bilder/apfelstrudel.svg" alt="Apfelstrudel mit Staubzucker auf einem Teller" width="320">
            <figcaption>
                Abb. 1: Apfelstrudel mit Staubzucker
            </figcaption>
        </figure>
        <section id="zutaten">
            <h3>
                Zutaten
            </h3>
            <table>
                <!-- Zeilen mit <tr>, <th> und <td> -->
            </table>
        </section>
        <section id="zubereitung">
            <h3>
                Zubereitung
            </h3>
            <ol>
                <!-- drei <li> -->
            </ol>
        </section>
        <details>
            <summary>
                Nährwerte anzeigen
            </summary>
            <ul>
                <!-- zwei <li> -->
            </ul>
        </details>
        <p>
            <a href="../kategorien/desserts.html">Zurück zu Desserts</a> &bull; <a href="../index.html">Zur Startseite</a>
        </p>
    </article>
</main>
```

### Schachtelung

* Das ganze Rezept ist **ein eigenständiges Werk** und deshalb außen ein `<article>`. „Zutaten“ und „Zubereitung“ ergeben allein keinen Sinn – sie sind Kapitel, also `<section>` (**section in article**).
* Vor den Kapiteln steht der **Einleitungstext**, der sagt, worum es geht und was die Kapitel machen.
* Die Kapitel haben die `id`s `zutaten` und `zubereitung`. Die Seitennavigation springt mit `href="#zutaten"` dorthin.
* Bild und Links zeigen mit `../` in den Hauptordner, weil die Seite im Unterordner `rezepte/` liegt.

### Verwendete Tags

| Tag | Block oder Inline | liegt in | Bedeutung |
| :--- | :--- | :--- | :--- |
| `<main>` | Block | `<body>` | einzigartiger Hauptinhalt der Seite |
| `<article>` | Block | `<main>` | das ganze Rezept als eigenständiges Werk |
| `<section>` | Block | `<article>` | Kapitel „Zutaten“ bzw. „Zubereitung“ |
| `<figure>` / `<figcaption>` | Block | `<article>` / `<figure>` | Bild mit Bildunterschrift |
| `<img>` | Inline (Non-Closing) | `<figure>` | Bild, Pfad mit `../` |
| `<table>`, `<tr>`, `<th>`, `<td>` | Tabelle | `<section>` | Zutaten mit Menge |
| `<ol>` / `<li>` | Block | `<section>` / `<ol>` | nummerierte Zubereitungsschritte |
| `<details>` / `<summary>` | Block | `<article>` / `<details>` | aufklappbare Nährwerte |
| `<time>` | Inline | `<p>` | maschinenlesbares Datum |
| `<a>` | Inline | `<p>` | Links zurück zur Kategorie und zur Startseite |

## Linter-Protokoll

| Datei | Linter | Meldung | Was habe ich geändert? |
| :--- | :--- | :--- | :--- |
| `einreichen.html` | HTMLHint | `input-requires-label`: No matching label tag found | Label des Radio-Buttons hatte `for="leicht"`, Feld hatte `id="s-leicht"` – `for` angepasst |
| `rezepte.html` | HTMLHint | `id-unique`: The id value must be unique | beim Kopieren der Karten zweimal `id="kaiserschmarrn"` – auf dieser Seite brauchen die Karten keine `id`, entfernt |
| `kategorien/suppen.html` | – (Durchklicken) | Seite ohne Design | `href="style.css"` auf `href="../style.css"` korrigiert |
| `hintergruende.md` | markdownlint | MD040: Fenced code blocks should have a language specified | ```` ```html ```` ergänzt |

Ergebnis: Beide Linter melden **keine Fehler** mehr, und alle Links funktionieren.
