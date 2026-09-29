# Zettelübung: Markdown vs. HTML5 Semantik

**Aufgabe 1: Lückentext** 
In der folgenden Tabelle werden Markdown-Befehle ihren direkten HTML5-Äquivalenten gegenübergestellt. 
Fülle die markierten Lücken (`___`) in der Tabelle aus. Überlege bei der HTML-Umsetzung, ob der jeweilige Tag **semantisch** ist (also dem Browser/Screenreader eine inhaltliche *Bedeutung* oder *Struktur* vermittelt) oder ob er rein visuell wirkt, und begründe deine Entscheidung kurz in der letzten Spalte.

| Beschreibung / Element | Markdown Syntax | HTML5 Tag | Semantisch? (Ja/Nein) | Warum? (Kurze Begründung) |
| :--- | :--- | :--- | :---: | :--- |
| Hauptüberschrift | `# Überschrift` | `___` | Ja | `___` |
| Fließtext / Absatz | `___` | `<p>` | `___` | `___` |
| `___` | `\` oder 2 Leerzeichen | `___` | Nein | `___` |
| Wichtige Hervorhebung (Fett) | `___` | `___` | `___` | `___` |
| `___` | `---` | `<hr>` | `___` | `___` |
| Bild mit Alternativtext | `___` | `___` | Ja | `___` |
| Aufzählungszeichen (Punkt) | `* Punkt` oder `- Punkt` | `___` | `___` | `___` |
| Klickbarer Link | `___` | `<a>` | `___` | `___` |
| `___` | `> Zitattext` | `<blockquote>` | `___` | `___` |
| Mathematische Formel | `$$a^2 + b^2 = c^2$$` | `___` | `___` | `___` |

**Aufgabe 2: Recherche-Falle bei der letzten Zeile**
Bei der Suche nach dem HTML5-Tag für die "Mathematische Formel" in der letzten Tabellenzeile wirst du auf eine Besonderheit stoßen.
Recherchiere im Internet: Wie werden Formeln im nativen HTML5-Standard (ohne Markdown) abgebildet? Beschreibe in 2-3 eigenen Sätzen, wie dieser HTML-Code aussieht, warum ihn fast niemand per Hand schreibt und wie Webentwickler das Problem in der Realität lösen.

**Deine Antwort:**
___
___
___


# Zettelübung: Die Matrix der HTML-Elemente

**Aufgabe 1: Markdown-Tabelle vervollständigen**
Kopiere den unten stehenden rohen Markdown-Code in deinen Editor. Deine Aufgabe ist es, die Tabelle korrekt zu formatieren und alle Lücken (`___`) logisch auszufüllen.

**Regeln für das Ausfüllen:**
1. Finde für die möglichen Kombinationen die passende Beschreibung (z. B. "Sichtbares Inline-Element") und setze 2 bis 3 passende HTML-Tags als Beispiel ein.
2. **Die Falle:** Drei dieser 8 Kombinationen sind in der Welt von HTML **logisch absolut unmöglich**. (Tipp: Überlege dir, ob ein Element, das der Browser gar nicht auf den Bildschirm zeichnet, eine Breite oder ein Block-Verhalten haben kann). Trage bei diesen drei Zeilen einfach `Unmöglich` in die leeren Spalten ein.

### 📝 Lückentext-Tabelle (Markdown)

| Sichtbar? | Semantisch? | Block? | Element-Kategorie / Erklärung | HTML-Tags (Beispiele) |
| :---: | :---: | :---: | :--- | :--- |
| ✅ Ja | ✅ Ja | ✅ Ja | Bedeutungs-tragende große Kiste | `___`, `___`, `___` |
| ✅ Ja | ✅ Ja | ❌ Nein | `___` | `<a>`, `<strong>`, `<img>` |
| ✅ Ja | ❌ Nein | ✅ Ja | Sichtbare Kiste, rein für CSS/Design | `___` |
| ✅ Ja | ❌ Nein | ❌ Nein | `___` | `___`, `<br>` |
| ❌ Nein | ✅ Ja | ❌ Nein | Unsichtbares Grundgerüst / Meta | `___`, `___`, `___` |
| ❌ Nein | ✅ Ja | ✅ Ja | `___` | `___` |
| ❌ Nein | ❌ Nein | ✅ Ja | `___` | `___` |
| ❌ Nein | ❌ Nein | ❌ Nein | `___` | `___` |


**Aufgabe 2: Erkläre das "Warum"**
Wähle eine der drei Zeilen, in die du `Unmöglich` eingetragen hast. Erkläre in einem kurzen Absatz (unterhalb der Tabelle), **warum** diese Kombination aus Sichtweise des Renderers (Browsers) keinen Sinn ergibt. Nutze für deine Erklärung die Markdown-Funktion für *Blockzitate* (`>`).

> ___
> ___