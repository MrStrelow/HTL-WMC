# Zettelübung: Markdown und HTML5-tags

## Aufgabe 1
Schreibe einen HTML Code der den Titel der Website setzt und eine `Überschrift` `Willkommen!` sowie einen `Paragraphen` der einen *sinnlosen* Text beinhaltet soll.
Verwende dazu [folgenden Link](https://www.lipsum.com/feed/html).

Vergiss die **unsichtbaren Tags** nicht.

```html
<!-- Schreibe deinen HTML-Code hier -->








```


## Aufgabe 2
Der folgende HTML-Code sieht im Browser scheinbar "normal" aus. Allerdings verletzt er grob mehrere Schachtelungsregeln. 

Analysiere den Code und benenne **drei Fehler**. Erkläre jeweils kurz, warum das in HTML ein schlechter Stil ist.

```html
<div class="header">Mein Blog</div>

<p>
  Hier ist meine Einkaufsliste:
  <ul>
    <li>Äpfel</li>
    <li>Milch</li>
  </ul>
</p>

<span>
  <h2>Das ist ein Untertitel</h2>
</span>

<br><br><br>
<b>Vielen Dank fürs Lesen!</b>
```

**Deine Antwort (Fehleranalyse):**
1. ___
2. ___
3. ___


## Aufgabe 3
In der folgenden Tabelle werden Markdown-Befehle ihren direkten HTML5-Äquivalenten gegenübergestellt. 
Fülle die markierten Lücken (`___`) in der Tabelle aus. Überlege bei der HTML-Umsetzung, ob der jeweilige Tag **semantisch** ist (also dem Browser/Screenreader eine inhaltliche *Bedeutung* oder *Struktur* vermittelt) oder ob er rein visuell wirkt, und begründe deine Entscheidung kurz in der letzten Spalte.

| Beschreibung / Element | Markdown Syntax | HTML5 Tag | Semantisch? (Ja/Nein) | Warum? (Kurze Begründung) |
| :--- | :--- | :--- | :---: | :--- |
| Hauptüberschrift | `# Überschrift` | `___` | Ja | `___` |
| Fließtext / Absatz | `___` | `<p>` | `___` | `___` |
| Wichtige Hervorhebung | `___` | `___` | `___` | `___` |
| Fett | `___` | `___` | `___` | `___` |
| `___` | `---` | `<hr>` | `___` | `___` |
| Bild mit Alternativtext | `___` | `___` | Ja | `___` |
| Aufzählungszeichen (Punkt)| `* Punkt` oder `- Punkt` | `___` | `___` | `___` |
| Klickbarer Link | `___` | `<a>` | `___` | `___` |
| `___` | `> Zitattext` | `<blockquote>`| `___` | `___` |
| Mathematische Formel | `$$a^2 + b^2 = c^2$$` | `___` | `___` | `___` |

### Aufgabe 3.1
Bei der Suche nach dem HTML5-Tag für die "Mathematische Formel" in der letzten Tabellenzeile wirst du auf eine Besonderheit stoßen.
Recherchiere im Internet: Wie werden Formeln im nativen HTML5-Standard (ohne Markdown) abgebildet? Beschreibe in 2-3 eigenen Sätzen, wie dieser HTML-Code aussieht, warum ihn fast niemand per Hand schreibt und wie Webentwickler das Problem in der Realität lösen.

**Deine Antwort:**
___
___
___


## Aufgabe 4
Kopiere den unten stehenden rohen Markdown-Code in deinen Editor. Deine Aufgabe ist es, die Tabelle korrekt zu formatieren und alle Lücken (`___`) logisch auszufüllen.

**Regeln für das Ausfüllen:**
1. Finde für die möglichen Kombinationen 2 bis 3 passende HTML-Tags als Beispiel und setze sie ein.
2. *Drei* dieser 8 Kombinationen sind in der Welt von HTML *unmöglich*. Trage bei diesen drei Zeilen einfach `Unmöglich` in die leeren Spalten ein.

### 📝 Lückentext-Tabelle (Markdown)

| Sichtbar? | Semantisch? | Block? | HTML-Tags (Beispiele) |
| :---: | :---: | :---: | :--- |
| ✅ Ja | ✅ Ja | ✅ Ja | `___`, `___`, `___` |
| ✅ Ja | ✅ Ja | ❌ Nein | `___`, `___`, `___` |
| ✅ Ja | ❌ Nein | ✅ Ja | `___` |
| ✅ Ja | ❌ Nein | ❌ Nein | `___`, `___` |
| ❌ Nein | ✅ Ja | ❌ Nein | `___`, `___`, `___` |
| ❌ Nein | ✅ Ja | ✅ Ja | `___` |
| ❌ Nein | ❌ Nein | ✅ Ja | `___` |
| ❌ Nein | ❌ Nein | ❌ Nein | `___` |


## Aufgabe 5
Wähle eine der drei Zeilen, in die du `Unmöglich` eingetragen hast. Erkläre in einem kurzen Absatz (unterhalb der Tabelle), **warum** diese Kombination aus Sichtweise des Renderers (Browsers) keinen Sinn ergibt. Nutze für deine Erklärung die Markdown-Funktion für *Blockzitate* (`>`).

> ___
> ___
> ___