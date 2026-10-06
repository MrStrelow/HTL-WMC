> ### Wir merken uns aus [Markdown](L00-HowToMarkdown.md)
> 1. [`Auszeichnungssprachen`](../../../05_Glossar.md#auszeichnungssprache) [`annotieren`](../../../05_Glossar.md#annotieren) Text mit Symbolen, um *Struktur* zu definieren.
> 2. Eine [`Auszeichnungssprachen`](../../../05_Glossar.md#auszeichnungssprache) wird einem [`Parser`](../../../05_Glossar.md#parser) übergeben. Dieser liest die Symbole und baut eine [`Datenstruktur`](../../../05_Glossar.md#datenstruktur). Der [`Renderer`](../../../05_Glossar.md#renderer) erzeugt daraus die *[`Darstellung`](../../../05_Glossar.md#darstellung)*.
> 3. Ein [`Linter`](../../../05_Glossar.md#linter) überprüft Text auf *schwache* [`semantische`](../../../05_Glossar.md#semantik) Regeln, *Best Practices* und *Formatierung*. Dadurch werden wir auf potentielle [`Bugs`](../../../05_Glossar.md#bugs) aufmerksam.
> 4. [`WYSIWYG`](../../../05_Glossar.md#wysiwyg) mischt Inhalt und Design visuell. Das ist intuitiv, aber schwer zu automatisieren.
> 5. [`Markdown`](../../../05_Glossar.md#markdown) & [`LaTeX`](../../../05_Glossar.md#latex) trennen *Struktur* und *Design*. Diese Trennung erlaubt uns, Änderungen im *Design* vorzunehmen, ohne die *Struktur* ändern zu müssen - und umgekehrt.
> 6. *Überschriften* werden durch Rauten `#` am Zeilenanfang definiert. Die Anzahl der Rauten bestimmt die Ebene der Überschrift.
> 7. *Kursiver* und **fetter** Text wird mit einem Sternpaar `*` bzw. zwei Sternpaaren `**` umschlossen. Es kann durch drei Sterne `***` kombiniert werden. 
> 8. *Kursiver* und **fetter** Text dient zum ***Hervorheben*** von Text, nicht um Überschriften zu erstellen.
> 9. Ungeordnete Listen nutzen `*` oder `-`. Geordnete Listen nutzen Zahlen wie `1.`. Einrückungen mit dem Tabulator erzeugen Unterpunkte.
> 10. Links folgen der [`Syntax`](../../../05_Glossar.md#syntax) `[Text](URL)`. Bilder nutzen exakt dieselbe [`Syntax`](../../../05_Glossar.md#syntax), haben aber ein Ausrufezeichen vorangestellt: `![Alt-Text](URL)`.
> 11. Ein Backtick (`` ` ``) fasst [`Inline`](../../../05_Glossar.md#inline)-Code ein. Drei Backticks (`` ``` ``) gefolgt vom Namen der Sprache wie z.B. `` ```csharp `` oder `` ```html `` erzeugen mehrzeilige [`Code-Blöcke`](../../../05_Glossar.md#code-block) mit *Syntax-Highlighting*.
> 12. Ein Zeilenumbruch kann – falls zweimal Enter nicht funktioniert – mit einem Backslash `\` oder dem [`HTML`](../../../05_Glossar.md#html)-Tag `<br>` umgesetzt werden.
> 13. Für komplexe [`Annotationen`](../../../05_Glossar.md#annotieren) greifen wir auf [`HTML`](../../../05_Glossar.md#html)-Tags zurück. 
> 14. [`Absätze`](../../../05_Glossar.md#absatz) ([`Paragraph`](../../../05_Glossar.md#paragraph)) benötigen zwingend eine echte Leerzeile im [`Markdown-Code`](../../../05_Glossar.md#markdown-code).
> 15. [`Blockzitate`](../../../05_Glossar.md#blockzitate) werden mit einem `>` eingeleitet und können für tiefere Ebenen (`>>`) verschachtelt werden.
> 16. [`Tabellen`](../../../05_Glossar.md#tabellen) werden visuell mit `|` (Spalten) und `-` (Kopfzeilen-Trennung) gezeichnet. Doppelpunkte `:` bestimmen die Textausrichtung.
<!-- 
> 3. Ein [`Compiler`](../../../05_Glossar.md#compiler) übersetzt Code und ist für die [`Syntax`](../../../05_Glossar.md#syntax) zuständig. 
> > 4. Ein [`Schema`](../../../05_Glossar.md#schema) definiert den strengen Bauplan und die [`Semantik`](../../../05_Glossar.md#semantik) von Text z.B. *"Das ist ein gültiges Datum"*.
> > 6. Der [`Parser`](../../../05_Glossar.md#parser) zerlegt Text in eine [`Datenstruktur`](../../../05_Glossar.md#datenstruktur), und der [`Renderer`](../../../05_Glossar.md#renderer) erzeugt daraus eine [`Darstellung`](../../../05_Glossar.md#darstellung) dieser [`Datenstruktur`](../../../05_Glossar.md#datenstruktur).
> > 19. Komplexe mathematische Formeln binden wir mit der [`Auszeichnungssprache`](../../../05_Glossar.md#auszeichnungssprache) [`LaTeX`](../../../05_Glossar.md#latex) direkt in [`Markdown`](../../../05_Glossar.md#markdown) ein (`$` oder `$$`).
-->