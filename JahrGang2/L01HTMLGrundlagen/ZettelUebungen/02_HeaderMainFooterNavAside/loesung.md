# Musterlösung: Seitenzonen – header, nav, aside, main, footer

> **Zugehörige HTML-Slide:** [L01.2 · Seitenzonen](../../Skripten/L01.2-Header-Main-Footer-Nav-Aside.html#zonen/1) – im Browser öffnen.

## Struktur aus der HTML-Slide (Tab „1 · Zonen aufbauen“)

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
        <nav id="haupt-nav">
            <ul>
                <li>
                    <a href="index.html">Home</a>
                </li>
                <li>
                    <a href="kapitel.html">Kapitel</a>
                </li>
                <li>
                    <a href="kontakt.html">Kontakt</a>
                </li>
            </ul>
        </nav>
    </header>

    <aside id="seiten-nav">
        <h2>
            Kapitel
        </h2>
        <nav>
            <ul>
                <li>
                    <a href="grundlagen.html">1. Grundlagen</a>
                </li>
                <li>
                    <a href="layout.html">2. Layout</a>
                </li>
                <li>
                    <a href="formulare.html">3. Formulare</a>
                </li>
            </ul>
        </nav>
    </aside>

    <main>
        <h2>
            Modul: HTML-Struktur
        </h2>
        <p>
            Der Hauptinhalt kommt genau <strong>einmal</strong> pro Seite vor. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
    </main>

    <aside id="zusatz-info">
        <h2>
            Tipps
        </h2>
        <p>
            Halte die <a href="https://developer.mozilla.org/de/">MDN Web Docs</a> offen.
        </p>
    </aside>

    <footer>
        <p>
            &copy; 2026 HTL Lernportal &bull; <a href="impressum.html">Impressum</a>
        </p>
    </footer>
</body>
</html>
```

## Die neuen Tags in eigenen Worten

1. ``<header>``: Der Kopfbereich der **ganzen Seite**. Hier stehen der Name der Website mit der Hauptüberschrift ``<h1>`` und die Hauptnavigation. Es gibt bei uns genau einen ``<header>``.
2. ``<nav>``: Ein Navigationsblock, also eine **Liste von Links** (``<ul>``, ``<li>``, ``<a>``). Die **Hauptnavigation** im ``<header>`` führt zu den großen Bereichen und ist überall gleich, die **Seitennavigation** im ``<aside>`` gehört nur zum aktuellen Bereich. Eine Seite darf mehrere ``<nav>`` haben.
3. ``<aside>``: Inhalt, der den Hauptinhalt **begleitet**, aber nicht selbst der Hauptinhalt ist – z. B. links die Seitennavigation und rechts Tipps oder Zusatzinfos.
4. ``<main>``: Der **einzigartige Hauptinhalt** dieser Seite. Er kommt genau **einmal** pro Seite vor. Was auf jeder Seite gleich ist (Kopf, Navigation, Fußzeile), gehört nicht hinein.
5. ``<footer>``: Die Fußzeile der **ganzen Seite** mit Copyright, Impressum oder Kontakt. Es gibt bei uns genau einen ``<footer>``.

**Zusätzlich gut:** Im reinen HTML stehen alle Zonen untereinander, weil sie Block-Elemente sind. Das 3-Spalten-Design (Seitennavigation | Hauptinhalt | Zusatzinfos) entsteht erst durch CSS.
