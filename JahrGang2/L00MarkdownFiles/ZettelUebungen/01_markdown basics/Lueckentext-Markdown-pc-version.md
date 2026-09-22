**Zettelübung: Markdown-Mitschrift über HTML schreiben**

**Name:** 
_ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ 
**Datum:** 
_ _ _ _ _ _ _ _ _ _ _ _ 

**Übung 1: Lückentext – Mitschrift formatieren**
Trage die korrekten Markdown-Zeichen in die Lücken (`___`) ein, damit die in den Klammern beschriebene Formatierung angewandt wird. 

___ HTML Grundlagen  (Hauptüberschrift / H1)

___ 1. Was ist HTML? (Unterkapitel / H2)
HTML steht für Hypertext Markup Language. Es ist __keine__ Programmiersprache, 
sondern eine ___Auszeichnungssprache___. (Fett und Kursiv gleichzeitig)

___ Semantische HTML-Zonen (Unter-Unterkapitel / H3)
Wir trennen zwischen Inhalt und Aussehen. 
Die wichtigsten Zonen sind:
___ `<header>` (Ungeordnete Liste / Aufzählungszeichen)
___ `<main>`   (Ungeordnete Liste / Aufzählungszeichen)
___ `<footer>` (Ungeordnete Liste / Aufzählungszeichen)

Wenn wir HTML-Tags im fließenden Text erwähnen, wie z.B. das ___<p>___-Tag, nutzen wir Backticks. (Inline-Code)

Für längere Code-Beispiele verwenden wir einen Code-Block:
______html (Code-Block Start mit HTML Syntax Highlighting)
<article>
    <h1>Hallo Welt</h1>
</article>
______ (Code-Block Ende)

Weitere Informationen findest du auf Wikipedia:
___Hier geht's zu Wikipedia___(https://de.wikipedia.org/wiki/HTML) (Klickbarer Link)

Ein Bild fügen wir so ein:
_____[HTML Logo](logo.png) (Bild einbinden)

Verweis auf Aufgaben:
Siehe dazu auch unsere Aufgabe in L01HTMLGrundlagen -> Aufgabe-Fennek-Angabe.md Tags-lesen: ___Angabe.md___ (Link auf die lokale Datei 2d-Angabe.md - Tipp: ../ lässt einen einen Ordner hoch gehen.)

**Übung 2: Code ergänzen (HTML & LaTeX)**
Vervollständige den folgenden Code, indem du die fehlenden Zeichen in die Lücken (`___`) einträgst, um rohes HTML und mathematische Formeln in Markdown zu integrieren.

// 1. Manchmal reicht Markdown nicht aus. Wenn wir einen Text exakt in roter Farbe wollen, 
// nutzen wir direkt HTML-Tags im Markdown-Dokument:
___span style="color: red;"___Achtung!___/span___

// 2. Eine kurze mathematische Formel direkt im fließenden Text (Inline):
Die Formel für Energie ist ___E=mc^2___.

// 3. Ein großer, zentrierter Code-Block für eine Formel (LaTeX):
______
x_{1,2} = \frac{-b \pm \sqrt{b^2 - 4ac}}{2a}
______
