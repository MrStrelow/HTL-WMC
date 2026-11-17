# Zettelübung: Formulare mit GET und POST

> **Zugehörige HTML-Slide:** [L01.4 · Medien, Buttons & Formulare](../../Skripten/L01.4-Formulare-Selection-Input.html#get/1) – im Browser öffnen.

Du baust in **eine** Seite zwei Formulare ein: eine Suche, die Daten **holt** (GET), und ein Login, das Daten **schickt** (POST). Am Ende vergleichst du, wo die Daten landen.

## Aufgabe 1 – Eine Google-Suche (GET)

1. Lege eine Datei `index.html` mit Grundgerüst an. Im `<body>` steht ein `<header>` mit der Überschrift `<h1>` „HTL Lernportal“ und ein `<main>`.
2. Baue in das `<main>` eine `<section id="suche">` mit einer Überschrift und einem Suchformular ein:
   * `<form>` mit `action="https://www.google.com/search"` und `method="GET"`
   * `<label>` und `<input type="search">`, verbunden über `for` und `id`
   * das `name`-Attribut, das Google für den Suchbegriff erwartet
   * `<button type="submit">`
3. Öffne `index.html` im Browser, suche nach `htl donaustadt` und kontrolliere die Adresszeile.

**Beantworte:**

* Wie sieht die URL nach dem Absenden aus? ___________________________________________
* Welcher Teil der URL ist dein Suchbegriff, und woher kommt der Name davor? ___________________________________________
* Was passiert, wenn du das `name`-Attribut entfernst? ___________________________________________

## Aufgabe 2 – Ein Login im Header (POST)

Baue in den `<header>` deiner Seite ein Login-Formular ein, das an `https://httpbin.org/post` schickt. Die Daten dürfen **nicht** in der URL stehen.

* ein Feld für den **Benutzernamen** (`name="benutzer"`)
* ein Feld für das **Passwort**, dessen Eingabe nicht lesbar ist (`name="passwort"`)
* zu jedem Feld ein `<label>`, verbunden über `for` und `id`
* einen Absende-Button „Anmelden“

Melde dich mit `max` / `geheim` an. httpbin zeigt dir, was angekommen ist.

## Aufgabe 3 – Wo landen die Daten?

Vergleiche die beiden Formulare nach dem Absenden.

| | Suche (Aufgabe 1) | Login (Aufgabe 2) |
| :--- | :--- | :--- |
| `method` | ___ | ___ |
| Wie sieht die Adresszeile aus? | ___ | ___ |
| Wo stehen die Daten im Request? | ___ | ___ |
| Darf man die Seite als Lesezeichen speichern? | ___ | ___ |

Steht `passwort=geheim` irgendwo lesbar, obwohl es nicht in der URL steht? Was schützt es wirklich?

___________________________________________________________

## Abgabe

Kopiere deine fertige `index.html` in das Code-Snippet:

```html
<!DOCTYPE html>
```
