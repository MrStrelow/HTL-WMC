<style>
/* Druck-Layout für Prince (Markdown Preview Enhanced): A4, jede Aufgabe auf eigener Seite, Code kompakt */
@page { size: A4; margin: 1.3cm 1.6cm; }
h2 { page-break-after: avoid; break-after: avoid; }
pre, pre[class*="language-"] {
    page-break-inside: auto !important;
    break-inside: auto !important;
    font-size: 9pt !important;
    line-height: 1.2 !important;
    padding: 0.6em 1em !important;
    margin: 0.3em 0 !important;
}
pre code, pre[class*="language-"] code { font-size: inherit !important; line-height: inherit !important; }
.antwort { height: 7cm; }
.neue-seite { page-break-before: always; break-before: page; height: 0; }
</style>

**Schriftliche Mitarbeitsüberprüfung - Seitenzonen, section und article**
WMC - CAMM - 2BHIF - Gruppe B

**Name:**
_ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _
**Datum:**
10.11.2026

## Aufgabe 1 - **Konzepte** *(Wissen, Verstehen)*
1. Erkläre, wie ein ``Anker`` funktioniert. Welche zwei ``Attribute`` werden dafür benötigt und warum darf eine ``id`` pro Seite nur *einmal* vorkommen?

<div class="antwort"></div>

2. Wann verwenden wir eine ``<section>`` und wann einen ``<article>``? Wie können wir diese ineinander schachteln?

<div class="antwort"></div>

<div class="neue-seite"></div>

## Aufgabe 2 - **section in article und Anker - Lueckentext** *(Anwenden)*
1) Befülle die vorhandenen Lücken mit *HTML-Code* aus.

```html
<!DOCTYPE html>
<html lang="de">
    <head>
        <meta charset="UTF-8">
        <title>Projektbericht</title>
    </head>
    <body>
        <header>
            <h1>
                HTL Projekt-Archiv
            </h1>
        </header>

        <!--
            Die Seitennavigation begleitet den Hauptinhalt
            und verlinkt auf Inhalte dieser Seite.
        -->
        <______________>
            <nav>
                <ul>
                    <li>
                        <a ______=____________________>1. Problemstellung</a>
                    </li>
                </ul>
            </nav>
        </______________>

        <______________>
            <______________>
                <h2>
                    Solar-Wetterstation
                </h2>
                <!--
                    Schreibe hier den Text, den ein Gesamtwerk mit mehreren
                    Kapiteln laut unserer Daumenregel braucht (1-2 Sätze).
                -->
                <p>
                    __________________________________________________________
                    __________________________________________________________
                </p>
                <______________ ____=____________________>
                    <______________>
                        1. Problemstellung
                    </______________>
                    <p>
                        Messdaten sollen ohne Stromkabel übertragen werden.
                    </p>
                </______________>
            </______________>
        </______________>

        <footer>
            <p>
                &copy; 2026 HTL Projekt-Archiv
            </p>
        </footer>
    </body>
</html>
```

<div class="neue-seite"></div>

## Aufgabe 3 - **Fehler finden** *(Analysieren)*
Markiere im folgenden ***vollständigen*** *HTML-File* Fehler zu *Schachtelungsregeln*, *Formatierungsregeln* und *Bedeutung* der ``Tags``. Begründe jeden Fehler in einem Halbsatz.

```html
<header>
    <h1>
        HTL Campus News
    </h1>
    <ul>
        <li><a href="#aufgabe">Aufgabe</a></li>
        <li><a href="#ergebnis">Ergebnis</a></li>
    </ul>
</header>

<main>
    <article id="contest">
        <h2>
            Bericht: Coding-Contest 2026
        </h2>
        <p>
            Unser 2. Jahrgang hat beim Landes-Coding-Contest teilgenommen.
            Zuerst beschreiben wir die Aufgabe, danach das Ergebnis.
        </p>
        <section id="aufgabe">
            <header>
                <h3>1. Die Aufgabe</h3>
            </header>
            <p>
                In drei Stunden musste ein Spiel in C# programmiert werden.
            </p>
        </section>
        <section id="ergebnis">
            <p>
                Der 2. Jahrgang gewinnt den Landespreis.
            </p>
        </section>
    </article>
</main>

<aside>
    <p>
        Tipps zum Coding-Contest
    </p>
</aside>

<footer>
    <p>&copy; 2026 HTL Campus News</p>
</footer>
<footer>
    <p>Impressum</p>
</footer>
```
