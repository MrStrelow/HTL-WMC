# Zettelübung: Markdown und HTML5-tags

## Aufgabe 1
Schreibe einen HTML Code der den Titel der Website setzt und eine ``Überschrift`` ``Willkommen!`` sowie einen ``Paragraphen`` der einen *Sinnlosen* Text beinhaltet soll.
Verwende dazu [folgenden Link](https://www.lipsum.com/feed/html).

Vergiss die **unsichtbaren Tags** nicht.
```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
    <title>Meine Webseite</title>
  </head>
  <body>
    <h1>Willkommen!</h1>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras tempus, nunc eu porta tempus, libero risus mattis leo, non faucibus magna dui vel orci. Nulla congue, dui vitae mollis commodo, velit nibh gravida lorem, id egestas mauris justo et urna. Sed sed leo id ligula maximus sodales non eget lectus. Nam id purus metus. Phasellus condimentum, felis eget fringilla gravida, augue libero semper ante, quis consectetur sem lectus sed mi. Maecenas maximus ullamcorper erat imperdiet feugiat. Vivamus dapibus, nibh in ullamcorper convallis, eros est tempor urna, ac ultricies lacus arcu ut lectus. Aliquam imperdiet nibh sed diam efficitur, at dictum risus convallis. Donec porta neque vel sapien tempus pretium. Donec eu justo est. Aenean ex dolor, ornare cursus quam eget, gravida fermentum nunc. Aliquam id tristique erat. Ut orci ligula, fermentum et fermentum vel, tincidunt quis nibh. Donec pellentesque suscipit turpis ac laoreet.</p>
  </body>
</html>
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

**Lösungen (Fehleranalyse):**
1. Es fehlen die ``unsichtbaren`` Tags.
2. **Block in Inline (`<h2>` in `<span>`):** Ein `<span>` ist ein Inline-Element (nur für Fließtext), während `<h2>` ein Block-Element ist. Block-Elemente dürfen niemals in Inline-Elementen liegen. Der Browser bricht das Layout hier intern auf.
3. **Listen in Absätzen (`<ul>` in `<p>`):** Ein `<p>`-Tag darf nur Text und Inline-Elemente enthalten. Eine `<ol>` oder `<ul>` ist ein Block-Element und zerreißt den Absatz. Der Browser schließt das `<p>` automatisch vor der Liste.
4. **Falsche Tags für Layout (`<br><br><br>`):** Das `<br>`-Tag ist nur für inhaltliche Zeilenumbrüche gedacht (z. B. in Gedichten oder Adressen). Um Abstände zu erzeugen, nutzt man CSS (`margin` oder `padding`), keine aneinandergereihten `<br>`-Tags.
5. **Fehlende Semantik (`<div class="header">` / `<b>`):** Statt eines bedeutungslosen `<div>` mit der Klasse "header" sollte das semantische `<header>`-Tag genutzt werden. Genauso ist `<b>` rein visuell; wenn der Text wichtig ist, muss `<strong>` verwendet werden, ansonsten formatiert man ihn per CSS.

## Aufgabe 3
In der folgenden Tabelle werden Markdown-Befehle ihren direkten HTML5-Äquivalenten gegenübergestellt. 
Fülle die markierten Lücken (`___`) in der Tabelle aus. Überlege bei der HTML-Umsetzung, ob der jeweilige Tag **semantisch** ist (also dem Browser/Screenreader eine inhaltliche *Bedeutung* oder *Struktur* vermittelt) oder ob er rein visuell wirkt, und begründe deine Entscheidung kurz in der letzten Spalte.

| Beschreibung / Element | Markdown Syntax | HTML5 Tag | Semantisch? (Ja/Nein) | Warum? (Kurze Begründung) |
| :--- | :--- | :--- | :---: | :--- |
| Hauptüberschrift | `# Überschrift` | `<h1>` | Ja | Gibt dem Dokument eine klare, maschinenlesbare Hierarchie. |
| Fließtext / Absatz | `Normaler Text` | `<p>` | Ja | Definiert einen in sich geschlossenen Textabsatz. |
| Wichtige Hervorhebung | `**Wichtig**` | `<strong>` oder `<em>` | Ja | Markiert den Text als inhaltlich wichtig (Screenreader betonen es). *In markdown gibt es keine Möglichkeit dafür, deshalb sagen wir es ist **fett***. |
| Fett | `**Text**` | `<b>` | Nein | Rein optische Formatierung ohne inhaltliche Relevanz (veraltet - css nutzen - html ist nur für struktur!). |
| Thematischer Bruch | `---` | `<hr>` | Ja | Definiert einen thematischen Wechsel (nicht nur einen Strich). |
| Bild mit Alternativtext | `![Alt-Text](url)`| `<img>` | Ja | Liefert über das `alt`-Attribut Bildinhalte für Blinde/Suchmaschinen. |
| Aufzählungszeichen (Punkt)| `* Punkt` oder `- Punkt` | `<ul>` & `<li>` | Ja | Gruppiert Listenelemente logisch zusammen, statt sie nur umzubrechen. |
| Klickbarer Link | `[Text](url)` | `<a>` | Ja | Erstellt einen Hyperlink, der Dokumente miteinander verknüpft. |
| Zitat-Block | `> Zitattext` | `<blockquote>`| Ja | Markiert den Text explizit als Zitat aus einer fremden Quelle. |
| Mathematische Formel | `$$a^2 + b^2 = c^2$$` | `<math>` | Ja | Strukturiert Formeln maschinenlesbar (MathML). |

### Aufgabe 3.1
Bei der Suche nach dem HTML5-Tag für die "Mathematische Formel" in der letzten Tabellenzeile wirst du auf eine Besonderheit stoßen.
Recherchiere im Internet: Wie werden Formeln im nativen HTML5-Standard (ohne Markdown) abgebildet? Beschreibe in 2-3 eigenen Sätzen, wie dieser HTML-Code aussieht, warum ihn fast niemand per Hand schreibt und wie Webentwickler das Problem in der Realität lösen.

**Deine Antwort:**
Natives HTML5 nutzt den Standard "MathML" (mit dem `<math>`-Tag). Dieser Code ist extrem verschachtelt und unleserlich (z.B. braucht ein einfacher Bruch eigene Tags wie `<mfrac>`, `<mi>`, `<mn>`), weshalb ihn niemand manuell tippt. In der Praxis schreiben Entwickler Formeln in der kurzen LaTeX-Syntax und binden JavaScript-Bibliotheken (wie MathJax oder KaTeX) ein, die diesen Code beim Laden der Seite automatisch in gültiges HTML umwandeln.


## Aufgabe 4
Kopiere den unten stehenden rohen Markdown-Code in deinen Editor. Deine Aufgabe ist es, die Tabelle korrekt zu formatieren und alle Lücken (`___`) logisch auszufüllen.

**Regeln für das Ausfüllen:**
1. Finde für die möglichen Kombinationen die passende Beschreibung (z. B. "Sichtbares Inline-Element") und setze 2 bis 3 passende HTML-Tags als Beispiel ein.
2. *Drei* dieser 8 Kombinationen sind in der Welt von HTML *unmöglich*. Trage bei diesen drei Zeilen einfach `Unmöglich` in die leeren Spalten ein.

| Sichtbar? | Semantisch? | Block? | HTML-Tags (Beispiele) |
| :---: | :---: | :---: | :--- |
| ✅ Ja | ✅ Ja | ✅ Ja | `<main>`, `<article>`, `<ul>` |
| ✅ Ja | ✅ Ja | ❌ Nein | `<a>`, `<strong>`, `<img>` |
| ✅ Ja | ❌ Nein | ✅ Ja | `<div>` |
| ✅ Ja | ❌ Nein | ❌ Nein | `<span>`, `<br>` |
| ❌ Nein | ✅ Ja | ❌ Nein | `<html>`, `<head>`, `<meta>` |
| ❌ Nein | ✅ Ja | ✅ Ja | Unmöglich |
| ❌ Nein | ❌ Nein | ✅ Ja | Unmöglich |
| ❌ Nein | ❌ Nein | ❌ Nein | Unmöglich |


### Aufgabe 4.1
Wähle eine der drei Zeilen, in die du `Unmöglich` eingetragen hast. Erkläre in einem kurzen Absatz (unterhalb der Tabelle), **warum** diese Kombination aus Sichtweise des Renderers (Browsers) keinen Sinn ergibt. Nutze für deine Erklärung die Markdown-Funktion für *Blockzitate* (`>`).

> Die Kombination "Unsichtbar, aber Block-Element" ergibt keinen Sinn, da die Konzepte "Block" und "Inline" reine Layout-Eigenschaften sind. Sie beschreiben, wie viel physischen Platz ein Element auf dem Bildschirm für sich beansprucht (ein Block nimmt z.B. die volle Breite ein). Ein Element wie `<meta>`, das ohnehin komplett unsichtbar ist und nicht gerendert wird, kann logischerweise keine visuelle "Layout-Kiste" erzeugen.


