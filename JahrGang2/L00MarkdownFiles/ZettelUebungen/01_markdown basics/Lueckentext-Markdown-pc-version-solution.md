**Zettelübung: Markdown-Mitschrift über HTML schreiben**

**Name:** 
Musterlösung 
**Datum:** 
_ _ _ _ _ _ _ _ _ _ _ _ 

**Übung 1: Lückentext – Mitschrift formatieren**
Trage die korrekten Markdown-Zeichen in die Lücken ein, damit die in den Klammern beschriebene Formatierung angewandt wird. 

# HTML Grundlagen  (Hauptüberschrift / H1)

## 1. Was ist HTML? (Unterkapitel / H2)
HTML steht für Hypertext Markup Language. Es ist **keine** Programmiersprache, 
sondern eine ***Auszeichnungssprache***. (Fett und Kursiv gleichzeitig)

### Semantische HTML-Zonen (Unter-Unterkapitel / H3)
Wir trennen zwischen Inhalt und Aussehen. 
Die wichtigsten Zonen sind:
- `<header>` (Ungeordnete Liste / Aufzählungszeichen)
- `<main>`   (Ungeordnete Liste / Aufzählungszeichen)
- `<footer>` (Ungeordnete Liste / Aufzählungszeichen)

Wenn wir HTML-Tags im fließenden Text erwähnen, wie z.B. das `<p>`-Tag, nutzen wir Backticks. (Inline-Code)

Für längere Code-Beispiele verwenden wir einen Code-Block:
```html
<article>
    <h1>Hallo Welt</h1>
</article>
```

Weitere Informationen findest du auf Wikipedia:
[Hier geht's zu Wikipedia](https://de.wikipedia.org/wiki/HTML) (Klickbarer Link)

Ein Bild fügen wir so ein:
![HTML Logo](logo.png) (Bild einbinden)

Verweis auf Aufgaben:
Siehe dazu auch unsere Aufgabe in L01HTMLGrundlagen -> Aufgabe-Fennek-Angabe.md Tags-lesen: [Angabe.md](../L01HTMLGrundlagen/2d-Angabe.md) (Link auf die lokale Datei 2d-Angabe.md - Tipp: ../ lässt einen einen Ordner hoch gehen.)

**Übung 2: Code ergänzen (HTML & LaTeX)**
Vervollständige den folgenden Code, indem du die fehlenden Zeichen in die Lücken einträgst, um rohes HTML und mathematische Formeln in Markdown zu integrieren.

1. Manchmal reicht Markdown nicht aus. Wenn wir einen Text exakt in roter Farbe wollen, nutzen wir direkt HTML-Tags im Markdown-Dokument:
<span style="color: red;">Achtung!</span>

1. Eine kurze mathematische Formel direkt im fließenden Text (Inline):
Die Formel für Energie ist $E=mc^2$.

1. Ein großer, zentrierter Code-Block für eine Formel (LaTeX):
$$
x_{1,2} = \frac{-b \pm \sqrt{b^2 - 4ac}}{2a}
$$