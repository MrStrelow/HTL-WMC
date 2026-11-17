# Lösung: Zettelübung Formulare mit GET und POST

> **Zugehörige HTML-Slide:** [L01.4 · Medien, Buttons & Formulare](../../Skripten/L01.4-Formulare-Selection-Input.html#get/1) – im Browser öffnen.

## Aufgabe 1 – Google-Suche (GET)

```html
<!DOCTYPE html>
<html lang="de">
<head>
    <meta charset="UTF-8">
    <title>HTL Lernportal</title>
</head>
<body>
    <header>
        <h1>
            HTL Lernportal
        </h1>
    </header>

    <main>
        <section id="suche">
            <h2>
                Suche
            </h2>
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
    </main>
</body>
</html>
```

* URL nach dem Absenden: `https://www.google.com/search?q=htl+donaustadt`
* Der Suchbegriff steht im **Query-String** nach dem `?`. Der Name `q` kommt aus dem `name`-Attribut des `<input>`; Google erwartet den Suchbegriff unter genau diesem Namen.
* Ohne `name` schickt der Browser den Wert **nicht** mit – die URL endet bei `/search?` und Google zeigt keine Ergebnisse. Das gilt für **jedes** Formularfeld, auch beim Login.

## Aufgabe 2 – Login im Header (POST)

```html
<header>
    <h1>
        HTL Lernportal
    </h1>
    <form action="https://httpbin.org/post" method="POST">
        <p>
            <label for="benutzer">Benutzername:</label>
            <input id="benutzer" type="text" name="benutzer">
        </p>
        <p>
            <label for="passwort">Passwort:</label>
            <input id="passwort" type="password" name="passwort">
        </p>
        <p>
            <button type="submit">Anmelden</button>
        </p>
    </form>
</header>
```

* `method="POST"`: Die Daten gehen im **Body** des Requests an den Server.
* `type="password"` zeigt die Eingabe nur als Punkte an.
* Label und Eingabefeld sind inline. Jedes Paar steht deshalb in einem eigenen `<p>`.
* httpbin zeigt die Daten unter `"form": { "benutzer": "max", "passwort": "geheim" }`.

## Aufgabe 3 – Wo landen die Daten?

| | Suche (Aufgabe 1) | Login (Aufgabe 2) |
| :--- | :--- | :--- |
| `method` | `GET` | `POST` |
| Wie sieht die Adresszeile aus? | `…/search?q=htl+donaustadt` | `https://httpbin.org/post` – **ohne** `?` |
| Wo stehen die Daten im Request? | im **Query-String** der URL | im **Body** (`benutzer=max&passwort=geheim`) |
| Darf man die Seite als Lesezeichen speichern? | ja – die Suche ist in der URL gespeichert | nein – die Daten sind nicht in der URL, Neuladen fragt „Formular erneut senden?“ |

Ja: `passwort=geheim` steht lesbar im **Body** des Requests. POST versteckt die Daten nur aus der Adresszeile, dem Verlauf und den Lesezeichen. Wirklich geschützt werden URL **und** Body erst durch **https** (Verschlüsselung).

## Aufgabe 4 – Weiterer Parameter

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
