# HTML-Struktur & Boxen-Modell: Der Grundbaustein für modernes Web-Engineering

Dieses Dokument fasst die wichtigsten Konzepte zusammen und baut unsere Dashboard-Webseite Schritt für Schritt auf. Der Fokus liegt rein auf **Semantik und Struktur**, als Vorbereitung auf modernes, komponenten-basiertes Arbeiten (wie z. B. in React).

---

## 1. Das Kernkonzept: Block vs. Inline

Bevor wir Code schreiben, müssen wir verstehen, wie der Browser HTML-Tags auf dem Bildschirm platziert. Es gibt zwei grundlegende Verhaltensweisen:

*   **Block-Elemente (Die unsichtbaren Boxen):**
    Ein Block-Element beansprucht automatisch die **gesamte verfügbare Breite** des Bildschirms (oder seines Elternelements). Es erzwingt immer einen **Zeilenumbruch (Line Break)** davor und danach. Kein anderes Element darf direkt links oder rechts daneben stehen.
    *Typische Vertreter:* `<header>`, `<main>`, `<section>`, `<article>`, `<h1>` bis `<h6>`, `<p>`, `<ul>`, `<table>`.

*   **Inline-Elemente (Der Textfluss):**
    Ein Inline-Element nimmt **nur exakt so viel Breite** ein, wie sein eigentlicher Inhalt (z. B. der Text) benötigt. Es erzwingt keine Umbrüche und fügt sich nahtlos nebeneinander in den Textfluss ein.
    *Typische Vertreter:* `<strong>`, `<em>`, `<a>`, `<img>`, `<br>`.

**Die goldene Schachtelungsregel:** Block-Elemente dürfen andere Blöcke oder Inline-Elemente enthalten. Ein Inline-Element darf *niemals* ein Block-Element enthalten. Einzige Ausnahme: Das Paragraph-Tag `<p>` und Überschriften (`<h1>` bis `<h6>`) sind zwar Blöcke, dürfen aber im Inneren **nur** Inline-Elemente enthalten!

---

## 2. Der Aufbau der Webseite (Das komplette Dokument)

Hier ist der gesamte Code für unser Dashboard, versehen mit Kommentaren zu Schachtelungsregeln und Ideen, wie man das später in React-Komponenten aufteilen würde.

```html
<!DOCTYPE html>
<html lang="de">
<head>
    <meta charset="UTF-8">
    <title>HTL Kurs - Dashboard</title>
</head>
<body>

    <!-- ==========================================
         REACT-IDEE: <AppHeader/> Komponente 
         ========================================== -->
    <header>
        <h1>Web-Programmierung: Unser Dashboard</h1>
        
        <nav>
            <p><strong>Inhaltsverzeichnis:</strong></p>
            
            <!-- SCHACHTELUNGSREGEL FÜR LISTEN: 
                 In <ul> oder <ol> dürfen direkt NUR <li> stehen -->
            <ul>
                <li><a href="#lehrplan">Zum Lehrplan springen</a></li>
                <li><a href="#projekte">Zu den Projekten springen</a></li>
                <li><a href="#kontakt">Kontakt & Adresse</a></li>
            </ul>
        </nav>
    </header>
    
    <hr>

    <main>
        
        <!-- ==========================================
             REACT-IDEE: <ScheduleWidget/> Komponente 
             ========================================== -->
        <section id="lehrplan">
            <h2>Unser aktueller Lehrplan</h2>
            
            <!-- SCHACHTELUNGSREGEL FÜR TABELLEN: 
                 In <table> dürfen nur Struktur-Tags wie <thead>, <tbody>, <tr> stehen. 
                 Text, Bilder und Links gehören immer ganz nach innen ins <th> oder <td>. -->
            <table border="1">
                <thead>
                    <tr>
                        <th>Wochentag</th>
                        <th>Thema</th>
                    </tr>
                </thead>
                <tbody>
                    <!-- REACT-IDEE: <TableRow day="Montag" topic="HTML"/> -->
                    <tr>
                        <td>Montag</td>
                        <td>HTML Struktur & Boxen</td>
                    </tr>
                    <tr>
                        <td>Mittwoch</td>
                        <td>Tabellen und Listen</td>
                    </tr>
                </tbody>
            </table>
        </section>

        <!-- ==========================================
             REACT-IDEE: <ProjectsWidget/> Komponente 
             ========================================== -->
        <section id="projekte">
            <h2>Schüler-Projekte</h2>
            
            <article>
                <h3>Projekt: HTML-Portfolio</h3>
                
                <!-- <img> ist ein Inline-Element. Es umschließt keinen Inhalt, daher schließt es sich selbst! -->
                <img src="[https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg](https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg)" alt="HTML5 Logo" width="100">
                
                <!-- Inline-Elemente <strong> und <a> stehen direkt im Textfluss -->
                <p>
                    Das erste Projekt nutzt <strong>reines HTML</strong>. 
                    Mehr Infos gibt es auf <a href="[https://developer.mozilla.org/de/docs/Web/HTML](https://developer.mozilla.org/de/docs/Web/HTML)" target="_blank">MDN Web Docs</a>.
                </p>
            </article>
        </section>

    </main>
    
    <hr>

    <!-- ==========================================
         REACT-IDEE: <Sidebar/> oder <ContactWidget/> 
         ========================================== -->
    <aside id="kontakt">
        <h2>Unsere Schule</h2>
        
        <!-- SEMANTIK VON <br>: 
             Wird NIEMALS für optische Abstände genutzt (dafür gibt es CSS).
             Sondern NUR für semantische Umbrüche, z. B. bei einer Postadresse oder einem Gedicht. -->
        <p>
            HTL Informatik<br>
            Musterstraße 42<br>
            1010 Wien<br>
            Österreich
        </p>
    </aside>

    <!-- ==========================================
         REACT-IDEE: <AppFooter/> Komponente 
         ========================================== -->
    <footer>
        <p>
            &copy; 2026 HTL Informatik. <a href="#">Zurück nach oben</a>
        </p>
    </footer>

</body>
</html>
```