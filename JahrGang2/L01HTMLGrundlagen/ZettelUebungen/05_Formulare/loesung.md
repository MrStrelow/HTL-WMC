# Lösung: Zettelübung Formulare – ein GET-Request an Google

## Aufgabe 1
Ausschnitt (der Rest der Seite ist wie in der Slide):

```html
<main>
    <h2>
        Neuigkeiten
    </h2>
    <section id="suche">
        <h3>
            Suche
        </h3>
        <form action="https://www.google.com/search" method="GET">
            <p>
                <label for="suchbegriff">Suchbegriff:</label>
                <input id="suchbegriff" type="search" name="q">
            </p>
            <p>
                <button type="submit">Suchen</button>
            </p>
        </form>
    </section>
    ...
</main>
```

* URL nach dem Absenden: `https://www.google.com/search?q=htl+donaustadt`
* Der Suchbegriff steht im **Query-String** nach dem `?`. Der Name `q` kommt aus dem `name`-Attribut des `<input>`; Google erwartet den Suchbegriff unter genau diesem Namen.
* Ohne `name` schickt der Browser den Wert **nicht** mit – die URL endet bei `/search?` und Google zeigt keine Ergebnisse.

## Aufgabe 2
```html
<p>
    <label for="sprache">Sprache:</label>
    <select id="sprache" name="hl">
        <option value="de">Deutsch</option>
        <option value="en">Englisch</option>
    </select>
</p>
```
* Die URL wird z. B. zu `https://www.google.com/search?q=htl+donaustadt&hl=en`.
* Mehrere Parameter werden mit `&` getrennt; jeder ist ein Paar **name=value**. An den Server geht der `value` der Option, nicht der angezeigte Text.
