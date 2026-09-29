# Demo: Wir bauen ein HTML-Dokument (Schritt für Schritt)

In dieser Demo bauen wir ein valides HTML5-Dokument von Grund auf auf. Wir nutzen dabei die Kategorien aus unserer Tabelle und achten gleichzeitig darauf, was unser Linter (die VS Code Extension **HTMLHint**) dazu sagt. Wir betrachten in jedem Schritt, wie es richtig aussehen muss – und welche typischen Fehler wir unbedingt vermeiden sollten.

### Schritt 1: Das unsichtbare Grundgerüst (⚙️ Struktur & Meta)
Wir beginnen mit der absolut notwendigen Basis. Nichts von diesem Code ist auf der fertigen Webseite sichtbar, aber er ist für den Browser überlebenswichtig.

✅ **So ist es richtig:**
```html
<!DOCTYPE html>
<html lang="de">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Meine erste strukturierte Seite</title>
</head>
<body>
    <!-- Hier kommt später der sichtbare Inhalt hinein -->
</body>
</html>
```

🔴 **So bitte nicht (Fehlerhaftes Grundgerüst):**
```html
<html lang="de">
<head>
    <meta charset="UTF-8">
    <!-- FEHLER: Der <title> fehlt! -->
</head>
<body>
    <title>Titel im falschen Bereich!</title> 
</body>
</html>
```
*Linter-Check:* **HTMLHint** wird beim fehlerhaften Code sofort meckern. Es fehlen die `<!DOCTYPE html>`-Deklaration (*„Doctype must be declared first“*) und der Titel im Kopfbereich (*„Title must be present in head“*). Ein `<title>` im `<body>` ist wirkungslos und bricht die Regeln der Dokumentstruktur.

---

### Schritt 2: Semantische Block-Elemente (✅ Sichtbar, Block)
Jetzt füllen wir den `<body>` mit sichtbaren, semantischen Elementen. Block-Elemente nehmen die volle Breite ein und stapeln sich wie Kisten übereinander.

✅ **So ist es richtig:**
```html
<body>
    <header>
        <h1>Willkommen auf meinem Blog</h1>
    </header>

    <main>
        <section>
            <h2>Mein erster Beitrag</h2>
            <p>Das ist ein Absatz. Er ist ein Block-Element und erzeugt automatisch einen Abstand nach unten.</p>
            <ul>
                <li>Erster wichtiger Punkt</li>
                <li>Zweiter wichtiger Punkt</li>
            </ul>
        </section>
    </main>
</body>
```

🔴 **So bitte nicht (Falsch geschachtelte Blöcke):**
```html
<body>
    <main>
        <section>
            <!-- FEHLER: Ein Absatz darf keine anderen Block-Elemente (wie h2) enthalten -->
            <p><h2>Mein erster Beitrag</h2></p>
            
            <!-- FEHLER: Eine Liste darf als direkte Kinder nur <li> enthalten -->
            <ul>
                <p>Erster wichtiger Punkt</p> 
            </ul>
        </section>
    </main>
</body>
```
*Linter-Check:* **HTMLHint** warnt uns bei der falschen Version streng. `<p>` darf keine Block-Elemente umschließen, und ein `<ul>` erwartet zwingend `<li>`-Elemente als direkte Kinder. Der Browser versucht das heimlich zu reparieren, zerstört dabei aber das Layout für unser späteres CSS.

---

### Schritt 3: Semantische Inline-Elemente (✅ Sichtbar, Inline)
Nun bringen wir Fließtext-Elemente ins Spiel. **Wichtig:** Gemäß unserer Zwiebel-Regel dürfen Inline-Elemente nur *innerhalb* von Block-Elementen platziert werden, niemals umgekehrt!

✅ **So ist es richtig (Zwiebel-Regel beachtet):**
```html
        <section>
            <h2>Mein erster Beitrag</h2>
            <p>Das ist ein Absatz. Er enthält nun <strong>sehr wichtigen Text</strong> und ein <time datetime="2026-09-29">Datum</time>.</p>
            <ul>
                <li>Erster wichtiger Punkt mit einem <a href="[https://htl.at](https://htl.at)">Link zur HTL</a></li>
                <li>Zweiter wichtiger Punkt</li>
            </ul>
        </section>
```

🔴 **So bitte nicht (Tags überkreuzt & falsch umschlossen):**
```html
        <section>
            <!-- FEHLER: Zwiebel-Prinzip verletzt! Tags überkreuzen sich. -->
            <p>Das ist <strong>sehr wichtiger Text</p></strong>.
            
            <!-- FEHLER: Ein Inline-Element umschließt ein Block-Element -->
            <a href="[https://htl.at](https://htl.at)">
                <h2>Verbotener Link-Titel</h2>
            </a>
        </section>
```
*Linter-Check:* Kreuzen sich die Tags, wirft **HTMLHint** sofort einen roten Fehler (*„Tag must be paired“*), weil es das schließende `</p>` nicht zuordnen kann, solange das `<strong>` noch offen ist. 

---

### Schritt 4: Selbstschließende Tags (🛑 Void Elements)
Wir fügen nun Elemente hinzu, die keinen Inhalt umschließen und daher kein End-Tag besitzen.

✅ **So ist es richtig:**
```html
    <main>
        <section>
            <h2>Mein erster Beitrag</h2>
            <!-- Ein Bild (Inline, selbstschließend) mit zwingendem alt-Attribut -->
            <img src="logo.png" alt="Das Logo der Schule">
            
            <p>Dieser Satz wird hier <br> gewaltsam umgebrochen.</p>
        </section>

        <!-- Eine horizontale Trennlinie (Block, selbstschließend) -->
        <hr>
    </main>
```

🔴 **So bitte nicht (Vergessene Attribute & erfundene End-Tags):**
```html
    <main>
        <section>
            <!-- FEHLER: Das alt-Attribut fehlt komplett! -->
            <img src="logo.png">
            
            <!-- FEHLER: Void-Elements dürfen kein End-Tag und keinen Inhalt haben! -->
            <p>Dieser Satz wird hier <br>gewaltsam umgebrochen.</br></p>
        </section>
    </main>
```
*Linter-Check:* Bei `<img>` prüft **HTMLHint** extrem streng, ob das `alt`-Attribut vorhanden ist (*„alt attribute of img must be present“*). Fehlt es, gibt es einen Fehler, da Screenreader das Bild für blinde Nutzer sonst nicht beschreiben können. Ein `</br>` wird als grober Syntaxfehler gewertet.

---

### Schritt 5: Nicht-semantische Container (❌ Nur für Design)
Zum Schluss bereiten wir unsere Struktur für das spätere Styling mit CSS vor. Wir nutzen `<div>` (für Kisten) und `<span>` (für Fließtext), wenn wir Elemente gruppieren wollen, es aber keinen passenden semantischen Tag dafür gibt.

✅ **So ist es richtig:**
```html
<!DOCTYPE html>
<html lang="de">
<head>
    <meta charset="UTF-8">
    <title>Das finale Dokument</title>
</head>
<body>
    <!-- Ein div umschließt den gesamten sichtbaren Bereich für ein zentriertes Layout -->
    <div id="page-wrapper">
        <header>
            <h1>Willkommen auf meinem Blog</h1>
        </header>

        <main>
            <section>
                <h2>Mein erster Beitrag</h2>
                <img src="logo.png" alt="Das Logo">
                <!-- Ein span umschließt Fließtext rein für CSS -->
                <p>Er enthält <span class="highlight-red">farblich markierten Text</span>, ohne tiefere Bedeutung.</p>
            </section>
            
            <hr>
            
            <!-- Eine div-Kiste, die später als Karte (Card) designt wird -->
            <div class="info-card">
                <p>Zusätzliche Information ohne eigene Semantik.</p>
            </div>
        </main>
    </div>
</body>
</html>
```

🔴 **So bitte nicht (Inline umschließt Block):**
```html
<body>
    <!-- FEHLER: Ein span (Inline) darf niemals Kisten (Block) umschließen! -->
    <span id="page-wrapper">
        <header>
            <h1>Willkommen auf meinem Blog</h1>
        </header>
        
        <div class="info-card">
            <p>Das zerstört das Layout.</p>
        </div>
    </span>
</body>
```
*Fazit:* Wir haben nun ein perfektes, `semantisch` wertvolles und `syntaktisch` von **HTMLHint** fehlerfrei abgenommenes Dokument. Es kombiniert unsichtbare Metadaten, strukturierende Block-Elemente, fließende Inline-Tags, Void-Elements und bedeutungslose CSS-Container exakt so, wie Suchmaschinen und Browser es erwarten.