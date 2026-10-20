# `<section>` vs. `<article>`

**Gesamtdauer:** 25 Minuten  

---

## ⏱️ Zeitplan

| Phase | Dauer | Aufgabe |
| :--- | :--- | :--- |
| **Phase 1** | 5 Min. | Thema finden & Skizze (Brainstorming) |
| **Phase 2** | 15 Min. | HTML-Datei erstellen & strukturieren |
| **Phase 3** | 5 Min. | Begründung & Dokumentation |

---

## Brainstorming (5 Minuten)

Entscheide dich für eine der beiden Schachtelungsvarianten und überlege dir ein passendes Szenario:

* **Variante A: `<article>` in `<section>`**
* **Variante B: `<section>` in `<article>`**

---

## HTML-Umsetzung (15 Minuten)
> Verwende die [HTML-Slide](vorbereitung-animiert.html) als Hilfestellung! Öffne diese in einem browser.

Erstelle eine Datei mit dem Namen `index.html` und setze dein gewähltes Szenario um. Kopiere dieses anschließend in ein HTML-``Code Snippet`` weiter unten ein.
Verwende  für *Fließtext* folgdenen [Lorem-Ipsum Text](https://www.lipsum.com/feed/html). Überschriften sind mit *sinnvollen* Namen zu ertellen.

1. **Grundgerüst:** Valides HTML5-Grundgerüst (`<!DOCTYPE html>`, `<html>`, `<head>`, `<body>`).
2. **Semantik:** 
   * Verwende saubere Block- und Inline-Elemente (`<h1>`–`<h3>`, `<p>`, `<ul>`/`<ol>`, `<strong>`, `<a>` etc.).
   * Kein Fließtext „nackt“ im Container – nutze stets `<p>`.
   * Setze die gewählte Schachtelung (`<section>` in `<article>` ODER `<article>` in `<section>`) korrekt und vollständig um.
3. **Formatierung:** Schreibe Block-Tags konsequent mit Zeilenumbrüchen und sauberer Einrückung.

```html
<!DOCTYPE html>
```

---

## Dokumentation & Begründung (5 Minuten)

Fülle die folgenden Abschnitte direkt hier in dieser Markdown-Datei aus:

### 1. Thema
> *Trage hier in 1–2 Sätzen ein, welches Szenario du umgesetzt hast (z. B. „News-Feed für Gaming-Hardware“ oder „Fachartikel über ein Smart-Home-Projekt“).*

### 2. Schachtelungsart
- [ ] Variante A: `<article>` in `<section>`  
- [ ] Variante B: `<section>` in `<article>`

### 3. Begründung
> * *Warum kann das Element, das du als `<article>` deklariert hast, für sich allein stehen?*  
> * *Warum ist das Element, das du als `<section>` deklariert hast, ein rein thematischer Abschnitt bzw. ein Kapitel?*
