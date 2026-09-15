#### Welche Begriffe werden hier verwendet?
[``Markdown``](../../../05_Glossar.md#markdown), [``LaTeX``](../../../05_Glossar.md#latex), [``Inline``](../../../05_Glossar.md#inline), [``Code-Block``](../../../05_Glossar.md#code-block), [``HTML``](../../../05_Glossar.md#html).

# Lektion: Markdown Cheatsheet – Dokumentation leicht gemacht

Um unsere Projekte, README-Dateien und Skripten zu schreiben, nutzen wir **``Markdown``**. Es ist eine extrem simple Auszeichnungssprache. Statt wie in Word auf Buttons für "Fett" oder "Überschrift" zu klicken, tippen wir einfach ein paar Sonderzeichen direkt in den Text.

## 1. Text und Überschriften

Überschriften werden mit einer Raute `#` erzeugt. Je mehr Rauten, desto kleiner die Überschrift (genau wie bei `<h1>` bis `<h6>` in HTML).

/'''markdown
# Hauptüberschrift (H1)
## Unterkapitel (H2)
### Unter-Unterkapitel (H3)

Das ist ein normaler Text. Um etwas zu betonen, können wir es **fett** oder *kursiv* schreiben. Wir können Text auch ~~durchstreichen~~.
/'''

## 2. Listen

Listen sind in Markdown viel schneller geschrieben als in HTML (`<ul>` oder `<ol>`).

/'''markdown
Ungeordnete Liste (Punkte):
* Erster Punkt
* Zweiter Punkt
  * Eingerückter Unterpunkt (mit Leerzeichen davor)

Geordnete Liste (Zahlen):
1. Erster Schritt
2. Zweiter Schritt
/'''

## 3. Links und Bilder

Die Syntax für Links und Bilder ist fast identisch. Bilder haben lediglich ein Ausrufezeichen `!` ganz am Anfang.

/'''markdown
Ein Link:
[Hier steht der klickbare Text](https://www.htl.at)

Ein Bild (z.B. aus demselben Ordner):
![Alternativtext für Blinde oder bei Fehlern](hamster.png)
/'''

## 4. Code darstellen

Da wir Entwickler sind, müssen wir oft Code-Beispiele teilen. 
*   **``Inline``-Code:** Kurzer Code mitten im Satz wird mit einem einzelnen Backtick (Gravis) umschlossen.
*   **``Code-Block``:** Mehrere Zeilen Code werden normalerweise mit drei Backticks umschlossen. Wenn wir direkt danach die Sprache (z.B. `html` oder `csharp`) dazuschreiben, färbt Markdown den Code sogar farbig (Syntax Highlighting) ein!

/'''markdown
Wir nutzen den Tag `<h1>` für Überschriften.

Hier ist ein C# Block:
/'''csharp
int alter = 15;
Console.WriteLine(alter);
/'''
/'''

## 5. HTML und LaTeX in Markdown einbauen

Markdown deckt etwa 90 % unserer Bedürfnisse ab. Wenn wir aber spezielle Dinge brauchen (wie eine komplexe Tabelle, exakte Bildgrößen oder mathematische Formeln), greifen wir auf zwei mächtige Werkzeuge zurück:

### HTML in Markdown
Markdown ist voll kompatibel mit HTML! Wenn du etwas in Markdown nicht hinbekommst, kannst du jederzeit HTML-Tags in dein `.md`-Dokument schreiben.

/'''markdown
Ich möchte <span style="color: red;">genau diesen Text in Rot</span> haben!

Ein Bild, das exakt 100 Pixel breit ist (geht mit Markdown allein nicht gut):
<img src="logo.png" width="100" alt="Logo">
/'''

### Mathematik mit LaTeX
Für komplexe mathematische Formeln nutzt Markdown die Wissenschaftssprache **``LaTeX``**. Wir signalisieren Markdown mit Dollarzeichen `$`, dass nun eine Mathe-Formel folgt.

/'''markdown
Dies ist eine **Inline**-Formel direkt im Text: $E=mc^2$.

Dies ist ein großer, zentrierter **Code-Block** für Formeln (zwei Dollarzeichen):
$$
x_{1,2} = \frac{-b \pm \sqrt{b^2 - 4ac}}{2a}
$$
/'''

---

> **Wir merken uns von Markdown:**
> 1) **``Markdown``** formatiert Texte durch simple Sonderzeichen (`#`, `*`, `[]`) und ist der Standard für Dokumentationen (wie READMEs auf GitHub).
> 2) Kurzer Code mitten im Text (``Inline``) wird mit einem Backtick eingefasst, mehrzeilige **``Code-Blöcke``** mit drei Backticks.
> 3) **``HTML``** funktioniert auch innerhalb von Markdown! Wenn die einfachen Sonderzeichen nicht reichen (z.B. für Farben), schreiben wir einfach HTML-Tags.
> 4) Mathematische Formeln setzen wir mit der Sprache **``LaTeX``**, eingefasst in Dollarzeichen `$`.