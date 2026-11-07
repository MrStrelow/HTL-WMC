> ### Wir merken uns aus [L01.1 HTML-Grundlagen](L01.1-HTML-Ueberblick.md)
> 1. Der [``Client``](../../../05_Glossar.md#client) (Browser) fragt Daten an, der [``Server``](../../../05_Glossar.md#server) liefert sie aus.
> 2. Eine [``Statische Website``](../../../05_Glossar.md#statische-website) (unser Fokus) wird genau so ausgeliefert, wie sie als Datei am Server liegt. Eine [``Dynamische Website``](../../../05_Glossar.md#dynamische-website) wird bei jeder Anfrage vom Server neu zusammengebaut.
> 3. Eine [``SPA``](../../../05_Glossar.md#spa) lädt die Seite nicht neu. Die Logik liegt im Browser, der nur noch Rohdaten über eine [``Web-API``](../../../05_Glossar.md#web-api) anfordert.
> 4. [``HTTP``](../../../05_Glossar.md#http) ist das Protokoll (die Sprache), mit dem Client und Server kommunizieren. ``GET`` holt Daten, ``POST`` schickt Daten zum Speichern.
> 5. [``RESTful``](../../../05_Glossar.md#restful) ist eine Konvention für Web-APIs. Sie schreibt vor, die HTTP-Methoden (``GET``, ``POST``, ``PUT``, ``DELETE``) logisch für Datenbank-Aktionen zu nutzen.
> 6. [``HTML``](../../../05_Glossar.md#html) ist keine Programmiersprache, sondern eine [``Auszeichnungssprache``](../../../05_Glossar.md#auszeichnungssprache), die dem Browser mitteilt, wie Text *strukturiert* ist. Wir trennen *Struktur* (``HTML``) und *Design* ([``CSS``](../../../05_Glossar.md#css)).
> 7. [``Tags``](../../../05_Glossar.md#tag) werden in spitzen Klammern ``<>`` geschrieben. Ein Element *beginnt* mit einem [``Start-Tag``](../../../05_Glossar.md#start-tag) wie ``<p>`` und *endet* mit einem [``Closing-Tag``](../../../05_Glossar.md#closing-tag) wie ``</p>``.
> 8. [``Attribute``](../../../05_Glossar.md#attribut) stehen immer im ``Start-Tag``, bestehen aus einem *Namen* und einem *Wert* in Anführungszeichen und liefern Zusatzinformationen, z. B. ``<a href="https://www.google.com/">``.
> 9. Ein ``Tag`` ist vergleichbar mit einer ``Funktion``/``Methode`` aus der Programmierung, seine ``Attribute`` mit den ``Eingangsparametern``: ``<a href="...">`` entspricht einem Aufruf wie ``Link(ziel: "...")``.
> 10. [``Elemente``](../../../05_Glossar.md#html-element) sind ``Tags`` und deren *Inhalt*.
> 11. [``Semantisches HTML``](../../../05_Glossar.md#semantik) bedeutet, dass ``Tags`` beschreiben, *was* der Inhalt ist, und nicht *wie* er aussehen soll. Das hilft Suchmaschinen (``SEO``) und Menschen, die auf Screenreader angewiesen sind.
> 12. Jedes HTML-Dokument benötigt ein *zwingendes Grundgerüst* aus ``<!DOCTYPE html>``, ``<html>``, ``<head>`` und ``<body>``. Wir nennen sie *unsichtbare* ``Tags``.
> 13. Alles, was im Browserfenster sichtbar sein soll, muss im [``<body>``](../../../05_Glossar.md#body) stehen. Der [``<head>``](../../../05_Glossar.md#head) enthält *Metadaten* wie ``<meta charset="UTF-8">`` und den ``<title>`` (Text im Browser-Tab).
> 14. [``Block-Elemente``](../../../05_Glossar.md#block-element) verwenden die gesamte verfügbare Breite ihres Eltern-Elements und erzwingen davor und danach einen Zeilenumbruch, z. B. ``<h1>``, ``<p>``, ``<ul>``. Wir schreiben den ``Start-Tag`` und ``Closing-Tag`` *untereinander* in verschiedenen Zeilen.
> 15. [``Inline-Elemente``](../../../05_Glossar.md#inline-element) nehmen nur so viel Breite ein, wie ihr Inhalt benötigt, und fließen im Text mit, z. B. ``<a>``, ``<strong>``, ``<img>``. Wir schreiben den ``Start-Tag`` und ``Closing-Tag`` *nebeneinander* in derselben Zeile.
> 16. ``Block-Elemente`` sind mit ``Block-`` und ``Inline-Elementen`` schachtelbar – es gibt Ausnahmen: ``<p>`` und ``<h1>``–``<h6>`` enthalten nur ``Inline-Elemente``, ``<ul>``/``<ol>`` enthalten nur ``<li>``.
> 17. ``Inline-Elemente`` sind nur mit ``Inline-Elementen`` schachtelbar – es gibt keine Ausnahmen.
> 18. Tags werden wie eine Zwiebel geschlossen: Was zuletzt geöffnet wurde, wird zuerst geschlossen (kein Überkreuzen).
> 19. Der Browser (``Renderer``) stürzt bei falscher Schachtelung nicht ab, sondern repariert sie heimlich. Das sieht oft richtig aus, zerstört aber ``Semantik``, Barrierefreiheit und das spätere ``CSS``-Design.
> 20. ``<h1>`` bis ``<h6>`` beschreiben die *Gliederung* der Seite, nicht die Schriftgröße. Pro Seite gibt es genau eine ``<h1>``.
> 21. Der [``<p>``](../../../05_Glossar.md#paragraph)-Tag umschließt Textabsätze. Fließtext steht niemals „nackt“ in einem Container, sondern immer in einem ``<p>``.
> 22. [``<strong>``](../../../05_Glossar.md#strong) markiert inhaltliche Wichtigkeit (fett), [``<em>``](../../../05_Glossar.md#emphasis) eine sprachliche Betonung im Satz (kursiv).
> 23. ``<ul>`` ist eine ungeordnete, ``<ol>`` eine nummerierte Liste. Beide enthalten nur ``<li>``-Elemente. ``<ol>`` verwenden wir, wenn die Reihenfolge eine Bedeutung hat.
> 24. Der [``<a>``](../../../05_Glossar.md#anchor)-Tag erzeugt Links über ``href``: zu **anderen Webseiten** mit absoluter URL (``https://...``), zu **Dateien derselben Website** mit relativem Pfad (``grundlagen.html``) oder zu **System-Aktionen** (``mailto:...``).
> 25. [``Non-Closing Tags``](../../../05_Glossar.md#non-closing-tag) umschließen keinen Inhalt und haben kein ``Closing-Tag``, z. B. ``<meta>``, ``<img>``, ``<br>``, ``<hr>``, ``<input>``.
> 26. ``<img>`` ist ein leeres Inline-Element. ``src`` gibt den Bildpfad an, das Pflicht-Attribut ``alt`` beschreibt das Bild für Screenreader und Ladefehler.
> 27. [``<table>``](../../../05_Glossar.md#table) enthält Zeilen ``<tr>`` mit Überschrift-Zellen ``<th>`` und Daten-Zellen ``<td>``. Tabellen verwenden wir nur für echte Tabellen-Daten – **niemals für das Seiten-Layout**.
> 28. ``<br>`` bricht eine Zeile **innerhalb** eines Absatzes um (z. B. bei einer Adresse), nie für Abstände. [``<hr>``](../../../05_Glossar.md#horizontal-rule) markiert einen thematischen Umbruch.

> ### Wir merken uns aus [L01.2 Seitenzonen](L01.2-Header-Main-Footer-Nav-Aside.md)
> 1. Fast jede Webseite besteht aus denselben Zonen: Kopf, Navigation, Hauptinhalt, Randspalten und Fußzeile. HTML5 hat dafür eigene semantische ``Block-Elemente``.
> 2. Der [``<header>``](../../../05_Glossar.md#header)-Tag bildet den einleitenden Kopfbereich der **gesamten Seite** (Titel, Logo, Hauptnavigation).
> 3. Der [``<nav>``](../../../05_Glossar.md#nav)-Tag kennzeichnet einen Navigationsblock, meist eine ``<ul>`` mit ``<li>`` und ``<a>``. Eine Seite darf mehrere ``<nav>`` haben: die **Hauptnavigation** im ``<header>`` (überall gleich) und die **Seitennavigation** im ``<aside>`` (je nach Bereich).
> 4. Der [``<aside>``](../../../05_Glossar.md#aside)-Tag kapselt Inhalte, die den Hauptinhalt begleiten, z. B. Seitennavigation oder Zusatzinfos. Er steht **neben** dem ``<main>``, niemals darin.
> 5. Der [``<main>``](../../../05_Glossar.md#main)-Tag umschließt den einzigartigen Hauptinhalt der Seite und kommt **genau einmal** pro Seite vor.
> 6. Der [``<footer>``](../../../05_Glossar.md#footer)-Tag schließt die **gesamte Seite** ab und enthält z. B. Copyright, Impressum oder Kontakt.
> 7. In unserer Welt gibt es genau **einen** ``<header>`` und **einen** ``<footer>`` – beide direkt im ``<body>``, nie in ``<main>``, ``<section>`` oder ``<article>``.
> 8. Im reinen HTML stehen alle Zonen untereinander. Erst ``CSS`` (z. B. Grid) ordnet sie als Spalten nebeneinander an – das HTML bleibt dabei unverändert.

> ### Wir merken uns aus [L01.3 section, Anker und article](L01.3-Section-Article.md)
> 1. Der [``<section>``](../../../05_Glossar.md#section)-Tag gruppiert thematisch zusammengehörige Inhalte zu einem Kapitel oder einer Rubrik. **Daumenregel:** Eine ``<section>`` hat meistens eine Überschrift (heading).
> 2. Die Überschriften-Ebene zeigt die Tiefe in der Gliederung: Hat ``<main>`` ein ``<h2>``, bekommen die Sections darin ``<h3>``.
> 3. Das Attribut ``id`` gibt einem Element einen eindeutigen Namen. Jede ``id`` darf pro Seite nur einmal vorkommen.
> 4. Ein [``<a>``](../../../05_Glossar.md#anchor) mit ``href="#id"`` springt zum Element mit dieser ``id`` auf derselben Seite (*Anker* / *Sprungmarke*). Auf einer anderen Seite: ``datei.html#id``.
> 5. Die Seitennavigation ist entweder ein **Inhaltsverzeichnis** der aktuellen Seite (``href="#..."``) oder ein **Untermenü** zu anderen Seiten des Bereichs.
> 6. Der [``<article>``](../../../05_Glossar.md#article)-Tag kapselt einen eigenständigen Inhalt (Zeitungsartikel, Blogpost, Produktkarte). **Daumenregel:** Ein ``<article>`` ist einzeln verwendbar und hat alle Infos in sich abgeschlossen (**„Ausschneide-Test“**).
> 7. **``<article>`` in ``<section>`` („Zeitungs-Rubrik“):** Außen steht eine Rubrik (``<section>``), darin mehrere einzeln ausschneidbare Beiträge (``<article>``).
> 8. **``<section>`` in ``<article>`` („Buch mit Kapiteln“):** Außen steht ein großes, eigenständiges Werk (``<article>``), das innen in Kapitel (``<section>``) gegliedert ist. Dann muss im ``<article>`` vor den Kapiteln ein Text stehen, der die Idee des Artikels beschreibt und erklärt, was die einzelnen Sections machen.
> 9. Datum und Zusatzinfos eines Beitrags schreiben wir als ``<p>``. ``<time datetime="...">`` macht ein Datum maschinenlesbar. ``<header>`` und ``<footer>`` verwenden wir nicht innerhalb von ``<section>`` oder ``<article>``.

> ### Wir merken uns aus [L01.4 Medien, Buttons und Formulare](L01.4-Formulare-Selection-Input.md)
> 1. ``<figure>`` umschließt ein Bild (oder Diagramm) als eigenständige Block-Einheit. ``<figcaption>`` ist die Bildunterschrift und steht im ``<figure>``. Das Pflicht-Attribut ``alt`` von ``<img>`` beschreibt, was man sieht.
> 2. ``<details>`` und ``<summary>`` bilden einen auf- und zuklappbaren Bereich ohne JavaScript. ``<summary>`` ist die immer sichtbare Zeile.
> 3. Wir entscheiden nach der **Funktion**, nicht nach dem Aussehen: [``<a href>``](../../../05_Glossar.md#anchor), wenn wir zu einer anderen Seite, URL oder einem ``#anker`` **navigieren**, ``<button>``, wenn wir auf der aktuellen Seite eine **Aktion** auslösen.
> 4. ``<form>`` bündelt Eingaben und schickt sie ohne JavaScript als [``HTTP``](../../../05_Glossar.md#http)-Request vom ``Client`` an den ``Server``. ``action`` ist die Adresse des Servers, ``method`` die Übertragungsart.
> 5. ``method="GET"`` hängt die Daten sichtbar an die URL (``?q=htl&seite=2``) – für Suchen und Abfragen. ``method="POST"`` schickt die Daten unsichtbar im Body – für Anmeldungen, Passwörter und alles, was gespeichert wird.
> 6. ``<label for="feld-id">`` beschriftet das Eingabefeld mit derselben ``id``. Das ``name``-Attribut ist der Schlüssel für den Server – ohne ``name`` wird ein Wert nicht mitgeschickt.
> 7. ``<input>`` ist ein ``Non-Closing Tag``. Das Attribut ``type`` bestimmt das Feld: ``text``, ``email``, ``password``, ``number``, ``date``, ``radio``, ``checkbox`` … ``required`` erzwingt eine Eingabe.
> 8. ``<select>`` mit ``<option value="...">`` erzeugt ein Auswahlmenü. An den Server geht der ``value``, nicht der angezeigte Text.
> 9. Radio-Buttons einer Gruppe haben denselben ``name``, man wählt genau einen. ``<fieldset>`` gruppiert zusammengehörige Felder, ``<legend>`` ist die Überschrift der Gruppe.
> 10. ``<textarea>`` ist ein mehrzeiliges Textfeld und hat im Gegensatz zu ``<input>`` ein ``Closing-Tag``. ``<button type="submit">`` schickt das Formular ab.
