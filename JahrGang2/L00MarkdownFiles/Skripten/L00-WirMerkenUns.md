> ### Zusammenfassung: Wir merken uns
> 
> 1. [`Auszeichnungssprachen`](../../../05_Glossar.md#auszeichnungssprache) [`annotieren`](../../../05_Glossar.md#annotieren) Text mit Symbolen, um *Struktur* zu definieren.
> 2. Der [`Parser`](../../../05_Glossar.md#parser) liest die Symbole und baut eine [`Datenstruktur`](../../../05_Glossar.md#datenstruktur). Der [`Renderer`](../../../05_Glossar.md#renderer) erzeugt daraus die *[`Darstellung`](../../../05_Glossar.md#darstellung)*.
> 3. Ein [`Compiler`](../../../05_Glossar.md#compiler) übersetzt Code und ist für die [`Syntax`](../../../05_Glossar.md#syntax) zuständig.
> 4. Ein [`Schema`](../../../05_Glossar.md#schema) definiert den strengen Bauplan und die [`Semantik`](../../../05_Glossar.md#semantik) von Text z.B. *"Das ist ein gültiges Datum"*.
> 5. Ein [`Linter`](../../../05_Glossar.md#linter) überprüft Text auf *schwache* [`semantische`](../../../05_Glossar.md#semantik) Regeln. Er erzwingt Konsistenz und macht auf potentielle [`Bugs`](../../../05_Glossar.md#bugs) aufmerksam.
> 6. Der [`Parser`](../../../05_Glossar.md#parser) zerlegt Text in eine [`Datenstruktur`](../../../05_Glossar.md#datenstruktur), und der [`Renderer`](../../../05_Glossar.md#renderer) erzeugt daraus eine [`Darstellung`](../../../05_Glossar.md#darstellung) dieser [`Datenstruktur`](../../../05_Glossar.md#datenstruktur).
> 7. [`WYSIWYG`](../../../05_Glossar.md#wysiwyg) mischt Inhalt und Design visuell. Das ist intuitiv, aber schwer zu automatisieren.
> 8. [`Markdown`](../../../05_Glossar.md#markdown) & [`LaTeX`](../../../05_Glossar.md#latex) trennen *Struktur* und *Design* strikt. Diese Trennung erlaubt uns, Änderungen im *Design* vorzunehmen, ohne die *Struktur* ändern zu müssen (und umgekehrt).
> 9. Wir schreiben den [`Markdown-Code`](../../../05_Glossar.md#markdown-code) als ersten Schritt und betrachten die fertige [`Darstellung`](../../../05_Glossar.md#darstellung) nach dem Rendern.
> 10. *Überschriften* werden durch Rauten `#` am Zeilenanfang definiert. Die Anzahl der Rauten bestimmt die Hierarchie-Ebene der Überschrift.
> 11. *Kursiver* und **fetter** Text wird mit einem Sternpaar `*` bzw. zwei Sternpaaren `**` umschlossen und kann kombiniert werden. 
> 12. *Kursiver* und **fetter** Text dient zum ***Hervorheben*** von Text, nicht um Überschriften zu erstellen.
> 13. Ungeordnete Listen nutzen `*` oder `-`. Geordnete Listen nutzen Zahlen wie `1.`. Einrückungen mit dem Tabulator erzeugen Unterpunkte.
> 14. Links folgen der [`Syntax`](../../../05_Glossar.md#syntax) `[Text](URL)`. Bilder nutzen exakt dieselbe [`Syntax`](../../../05_Glossar.md#syntax), haben aber ein Ausrufezeichen vorangestellt: `![Alt-Text](URL)`.
> 15. Ein Backtick (`` ` ``) fasst [`Inline`](../../../05_Glossar.md#inline)-Code ein. Drei Backticks (`` ``` ``) gefolgt vom Sprachnamen erzeugen mehrzeilige [`Code-Blöcke`](../../../05_Glossar.md#code-block) mit Syntax-Highlighting.
> 16. [`Inline`](../../../05_Glossar.md#inline)-Code kann für das *Hervorheben* von Texten oder Befehlen verwendet werden.
> 17. Ein Zeilenumbruch (Line Break) kann – falls zweimal Enter nicht funktioniert – mit einem Backslash `\` oder dem [`HTML`](../../../05_Glossar.md#html)-Tag `<br>` umgesetzt werden.
> 18. Für komplexe [`Annotationen`](../../../05_Glossar.md#annotieren) greifen wir auf [`HTML`](../../../05_Glossar.md#html)-Tags zurück. 
> 19. Komplexe mathematische Formeln binden wir mit der [`Auszeichnungssprache`](../../../05_Glossar.md#auszeichnungssprache) [`LaTeX`](../../../05_Glossar.md#latex) direkt in [`Markdown`](../../../05_Glossar.md#markdown) ein (`$` oder `$$`).
> 20. [`Absätze`](../../../05_Glossar.md#absatz) ([`Paragraph`](../../../05_Glossar.md#paragraph)) benötigen zwingend eine echte Leerzeile im [`Markdown-Code`](../../../05_Glossar.md#markdown-code).
> 21. [`Blockzitate`](../../../05_Glossar.md#blockzitate) werden mit einem `>` eingeleitet und können für tiefere Ebenen (`>>`) verschachtelt werden.
> 22. [`Tabellen`](../../../05_Glossar.md#tabellen) werden visuell mit `|` (Spalten) und `-` (Kopfzeilen-Trennung) gezeichnet. Doppelpunkte `:` bestimmen die Textausrichtung.