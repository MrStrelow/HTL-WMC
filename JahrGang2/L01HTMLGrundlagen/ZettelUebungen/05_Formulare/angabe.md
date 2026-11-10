# Zettelübung: Formulare – ein GET-Request an Google

> Verwende die [Formular-Slide](../../Skripten/L01.4-Formulare-Selection-Input.html) als Hilfestellung. Öffne sie in einem Browser.

## Aufgabe 1 – Folien abschreiben und eine Google-Suche einbauen
1. Schreibe die Neuigkeiten-Seite aus der Slide (Tab **„3 · Formular mit GET“**, Schritt 1) in eine Datei `index.html` ab.
2. Baue – wie in den Schritten 2–4 der Slide – oberhalb der Neuigkeiten eine `<section id="suche">` mit einem Suchformular ein:
   * `<form>` mit `action="https://www.google.com/search"` und `method="GET"`
   * `<label>` und `<input type="search">`, verbunden über `for` und `id`
   * das `name`-Attribut, das Google für den Suchbegriff erwartet
   * `<button type="submit">`
3. Öffne `index.html` im Browser, suche nach `htl donaustadt` und kontrolliere die Adresszeile.
4. Kopiere deinen Code in das Code-Snippet:

```html
<!DOCTYPE html>
```

**Beantworte:**
* Wie sieht die URL nach dem Absenden aus? ___________________________________________
* Welcher Teil der URL ist dein Suchbegriff, und woher kommt der Name davor? ___________________________________________
* Was passiert, wenn du das `name`-Attribut entfernst? ___________________________________________


## Aufgabe 2 – Weiterer Parameter (für Schnelle)
Ergänze ein Auswahlfeld `<select name="hl">` mit den Optionen `de` (Deutsch) und `en` (Englisch). Suche erneut.

* Wie verändert sich die URL? ___________________________________________
* Woran erkennst du, dass mehrere Parameter mitgeschickt werden? ___________________________________________
