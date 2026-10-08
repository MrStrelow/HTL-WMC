>**Wir merken uns von [HTML](L01.1-HTML.md.md):**
>1. [``HTML``](../../../05_Glossar.md#html) (Hypertext Markup Language) ist keine Programmiersprache, sondern eine ``Auszeichnungssprache``, die dem Browser mitteilt wie Text *strukturiert* ist.
>2. Wir trennen *Strutkur* ([``HTML``](../../../05_Glossar.md#html)) und *Design* ([``CSS``](../../../05_Glossar.md#css)) und setzen diese in zwei verschiedene *Sprachen* um.
>2. [``Tags``](../../../05_Glossar.md#tag) werden in spitzen Klammern ``<>`` geschrieben. 
>3. Ein [``Tag``](../../../05_Glossar.md#tag) *beginnt* mit einem [``Start-Tag``](../../../05_Glossar.md#start-tag) z.B. ``<p>`` und *endet* mit einem [``Closing Tag``](../../../05_Glossar.md#closing-tag). Der [``Closing Tag``](../../../05_Glossar.md#closing-tag) z.B. ``</p>`` besitzt einen Schrägstrich.
>4. [``Semantisches HTML``](../../../05_Glossar.md#semantik) bedeutet, dass [``Tags``](../../../05_Glossar.md#tag) beschreiben *was* der Inhalt ist, und nicht *wie* dieser aussehen soll. Ein Beispiel wäre ``<h1>`` hat eine konkrete *Bedeutung* - der ``annotierte`` Text ist eine Überschrift. Wenn ein Programm das Internet durchsucht, um Überschrifte nzu suchen (TODO: warum?)  dann können wir auf ``<h1>`` filtern. ABer ``<b>`` nicht. Der Text ist *fett* aber was heißt das? Wichtig? Stilistisch? Wenn wir ein Programm verwenden um das Internet zu durchsuchen, dann bekommen wir viel verschiedenes und können nichts damit anfangen. TODO reformulate.
>5. [``Attribute``](../../../05_Glossar.md#attribut) stehen immer im [``Start-Tag``](../../../05_Glossar.md#start-tag), bestehen aus einem *Namen* und einem *Wert* in Anführungszeichen und liefern Zusatzinformationen z.B. ``<a href="https://www.google.com/">``.
>6. Jedes HTML-Dokument benötigt ein zwingendes Grundgerüst bestehend aus ``<!DOCTYPE html>``, ``<html>``, ``<head>`` und ``<body>``.
>7. Der ``<body>`` beinhaltet die *Struktur*, ``<head>`` beinhaltet Informationen welche nicht für die *Struktur* relevant sind.
> Block elemente vs inline elemente

<!-- 
>4. [``Non-Closing Tags``](../../../05_Glossar.md#non-closing-tag) stehen für sich allein und umschließen keinen Inhalt, weshalb sie kein End-Tag benötigen - leere Elemente wie ``<img>`` oder ``<br>``.
>1) Der [``Client``](../../../05_Glossar.md#client) (z.B. dein Webbrowser) stellt Anfragen, und der [``Server``](../../../05_Glossar.md#server) liefert die entsprechenden Antworten.
>2) Die Kommunikation zwischen [``Client``](../../../05_Glossar.md#client) und [``Server``](../../../05_Glossar.md#server) erfolgt über das Protokoll [``HTTP``](../../../05_Glossar.md#http) (Hypertext Transfer Protocol).
>3) Eine [``Statische Website``](../../../05_Glossar.md#statische-website) wird vom [``Server``](../../../05_Glossar.md#server) exakt so ausgeliefert, wie sie als unveränderliche HTML/CSS-Datei auf der Festplatte liegt (schnell und ideal für Infoseiten).
>4) Eine [``Dynamische Website``](../../../05_Glossar.md#dynamische-website) wird vom [``Server``](../../../05_Glossar.md#server) auf Anfrage "on the fly" zusammengebaut (z.B. für Blogs oder Online-Shops).
>5) Eine [``Single Page Application (SPA)``](../../../05_Glossar.md#spa) lädt die Seite nicht neu; die Logik liegt im ``JavaScript`` des Browsers, der Inhalte dynamisch austauscht.
>6) Eine [``Web-API``](../../../05_Glossar.md#web-api) liefert keine fertigen Webseiten, sondern reine Rohdaten, auf die eine SPA zugreifen kann.
>7) [``RESTful``](../../../05_Glossar.md#restful) ist ein Architektur-Standard für Web-APIs, der vorschreibt, die HTTP-Methoden (GET, POST, PUT, DELETE) logisch für Datenbank-Aktionen zu nutzen.
>16) Gute [``Semantik``](../../../05_Glossar.md#semantik) verbessert die Auffindbarkeit bei Suchmaschinen (``SEO``) und hilft Menschen, die auf Screenreader angewiesen sind (Barrierefreiheit).
>17) Vermeide die "Div-Suppe" (zu viele bedeutungslose ``<div>``-Tags). Nutze stattdessen HTML5-Zonen-Tags wie ``<main>``, ``<article>``, ``<header>`` oder ``<nav>``, wo immer es möglich ist.
>18) Der ``<main>``-Tag umschließt den einzigartigen Hauptinhalt der Webseite und sollte nur einmal pro Dokument vorkommen.
>19) Wenn der finale Text für eine Webseite noch fehlt, nutzen wir [``Blindtext``](../../../05_Glossar.md#blindtext) (wie Lorem Ipsum), um beim Gestalten des Layouts nicht abgelenkt zu werden.
>20) Alles, was im Browserfenster sichtbar sein soll, muss zwingend im ``<body>`` stehen. Der ``<head>`` ist nur für unsichtbare Metadaten und Konfigurationen da.
>21) **[``Semantische Tags``](../../../05_Glossar.md#semantische-tags)** geben dem Browser und Suchmaschinen die exakte Bedeutung des Inhalts vor. Beispiele: ``<h1>`` bis ``<h6>``, ``<p>``, ``<strong>``, ``<em>``, ``<a>``, ``<ul>``, ``<ol>``, ``<li>``, ``<header>``, ``<nav>``, ``<main>``, ``<article>``, ``<aside>``, ``<footer>``.
>22) **[``Non-Closing Tags``](../../../05_Glossar.md#non-closing-tag)** (leere Elemente) stehen für sich allein, haben keinen Inhalt und kein End-Tag. Beispiele: ``<img>``, ``<br>``, ``<hr>``, ``<input>``, ``<meta>``, ``<link>``.
>23) **[``Nicht-semantische Tags``](../../../05_Glossar.md#nicht-semantische-tags)** verraten nichts über ihren Inhalt und dienen lediglich als neutrale Container für das spätere CSS-Design. Beispiele: ``<div>`` (für Block-Elemente) und ``<span>`` (für Textabschnitte). -->
