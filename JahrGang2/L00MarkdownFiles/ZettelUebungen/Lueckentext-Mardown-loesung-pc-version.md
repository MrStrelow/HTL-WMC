**Zettelübung: Markdown-Mitschrift über HTML schreiben (LÖSUNG)**

**Name:** 
_ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ 
**Datum:** 
_ _ _ _ _ _ _ _ _ _ _ _ 

**Übung 1: Lückentext – Mitschrift formatieren**

# HTML Grundlagen

## 1. Was ist HTML?
HTML steht für Hypertext Markup Language. Es ist __keine__ Programmiersprache, 
sondern eine ***Auszeichnungssprache***.

### Semantische HTML-Zonen
Wir trennen zwischen Inhalt und Aussehen. 
Die wichtigsten Zonen sind:
* `<header>`
* `<main>`
* `<footer>`

Wenn wir HTML-Tags im fließenden Text erwähnen, wie z.B. das `<p>`-Tag, nutzen wir Backticks.

Für längere Code-Beispiele verwenden wir einen Code-Block:
```html
<article>
    <h1>Hallo Welt</h1>
</article>
```

Weitere Informationen findest du auf Wikipedia:
[Hier geht's zu Wikipedia](https://de.wikipedia.org/wiki/HTML)

Ein Bild fügen wir so ein (erstelle dazu in paint ein Bild das logo.png heißt):
![HTML Logo](logo.png)

Verweis auf Aufgaben:
Siehe dazu auch unsere Aufgabe in L01HTMLGrundlagen -> Aufgabe-Fennek-Angabe.md Tags-lesen: [Angabe.md](../L01HTMLGrundlagen/Aufgabe-Fennek-Angabe.md)

**Übung 2: Code ergänzen (HTML & LaTeX)**

// 1. Manchmal reicht Markdown nicht aus. Wenn wir einen Text exakt in roter Farbe wollen, 
// nutzen wir direkt HTML-Tags im Markdown-Dokument:
<span style="color: red;">Achtung!</span>

// 2. Eine kurze mathematische Formel direkt im fließenden Text (Inline):
Die Formel für Energie ist $E=mc^2$.

// 3. Ein großer, zentrierter Code-Block für eine Formel (LaTeX):
$$x_{1,2} = \frac{-b \pm \sqrt{b^2 - 4ac}}{2a}$$