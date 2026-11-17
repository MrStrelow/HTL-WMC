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
WMC - CAMM - 2BHIF - Gruppe A

**Name:** 
_ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ 
**Datum:** 
10.11.2026

## Aufgabe 1 - **Konzepte** *(Wissen, Verstehen)*
1. Nenne die ``Tags`` der fünf Zonen des *3-Spalten-Designs* und beschreibe deren ``Semantik``. Wie oft darf **bei uns** ``<Footer>`` auf einer Seite vorkommen?

<div class="antwort"></div>

2. Erkläre den *Unterschied* zwischen ``<article>`` in ``<section>`` und ``<section>`` in ``<article>`` anhand je eines *Beispiels*. Was muss in einem ``<article>`` stehen, der mehrere ``<section>`` enthält?

<div class="antwort"></div>

<div class="neue-seite"></div>

## Aufgabe 2 - **Seitenzonen und Anker - Lueckentext** *(Anwenden)*
1) Befülle die vorhandenen Lücken mit *HTML-Code* aus.

```html
<!DOCTYPE html>
<html lang="de">
    <head>
        <meta charset="UTF-8">
        <title>HTL Lernportal</title>
    </head>
    <body>
        <!-- Soll in der Seitennavigation angesprochen werden können. -->
        <______________ ____=__________>
            <h1>
                HTL Lernportal
            </h1>
            <______________>
                <ul>
                    <li>
                        <a href="index.html">Home</a>
                    </li>
                </ul>
            </______________>
        </______________>

        <!-- 
            Die Seitennavigation begleitet den Hauptinhalt 
            und verlinkt auf Inhalte dieser Seite.
        -->
        <______________>
            <nav>
                <ul>
                    <li>
                        <a ______=____________________>1. Einleitung</a>
                    </li>
                </ul>
            </nav>
        </______________>

        <______________>
            <h2>
                Modul: HTML-Struktur
            </h2>
            <______________ ____=__________________>
                <h3>
                    1. Einleitung
                </h3>
                <p>
                    Lorem ipsum dolor sit amet.
                </p>
            </______________>
        </______________>

        <______________>
            <p>
                &copy; 2026 HTL Lernportal &bull; <a href=__________>Nach oben</a>
            </p>
        </______________>
    </body>
</html>
```

<div class="neue-seite"></div>

## Aufgabe 3 - **Fehler finden** *(Analysieren)*
Markiere im folgenden ***vollständigen*** *HTML-File* Fehler zu *Schachtelungsregeln*, *Formatierungsregeln* und *Bedeutung* der ``Tags``. Begründe jeden Fehler in einem Halbsatz.

```html
<header>
    <h1>HTL Lernportal</h1>
</header>

<aside id="seiten-nav">
    <nav>
        <a href="problem">1. Problemstellung</a>
        <a href="#ergebnis">2. Ergebnis</a>
    </nav>
</aside>

<main>
    <section>
        <h2>
            Projektbericht: Solar-Wetterstation
        </h2>
        <article id="problem">
            <h3>
                Kapitel 1: Problemstellung
            </h3>
            <p>
                Die Messdaten sollen ohne Stromkabel übertragen werden.
            </p>
        </article>
        <article id="problem">
            <h3>
                Kapitel 2: Ergebnis
            </h3>
            <p>
                Wie in Kapitel 1 beschrieben, funktioniert das jetzt.
            </p>
            <footer>
                <p>
                    Veröffentlicht am 15. Oktober
                </p>
            </footer>
        </article>
    </section>
</main>

<main>
    <p>
        Impressum
    </p>
</main>
```
