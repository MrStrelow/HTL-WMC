#### Welche Begriffe werden hier verwendet?
[``Editor``](05_Glossar.md#editor), [``Visual Studio Code``](05_Glossar.md#visual-studio-code), [``Workspace``](05_Glossar.md#workspace), [``Extensions``](05_Glossar.md#extensions), [``Live Server``](05_Glossar.md#live-server), [``HTML``](05_Glossar.md#html), [``CSS``](05_Glossar.md#css), [``Markdown``](05_Glossar.md#markdown).

---

### Schritt 1: Download
Wir laden uns den ``Editor`` **Visual Studio Code** (VS Code) herunter. Gehe dazu auf die offizielle Website [code.visualstudio.com](https://code.visualstudio.com/) und klicke auf den großen blauen **Download**-Button für dein Betriebssystem.

---
### Schritt 2: Installation
Führe das heruntergeladene Setup-Programm aus. Akzeptiere die Lizenzvereinbarungen und klicke dich durch den Installer. 
>**Wichtig:** Achte darauf, im Schritt "Zusätzliche Aufgaben auswählen" die Häkchen bei **"Aktion 'Mit Code öffnen' zum Windows-Explorer-Kontextmenü für Dateien hinzufügen"** und **"... für Verzeichnisse hinzufügen"** zu setzen. Das macht das spätere Öffnen von Projektordnern deutlich einfacher.

---
### Schritt 3: Visual Studio Code starten
Suche nach der Installation im Startmenü nach ``Visual Studio Code`` und öffne das Programm. Wenn du möchtest, kannst du unter **View > Command Palette** (Shortcut: **Ctrl+Shift+P**) nach "Configure Display Language" suchen und ein deutsches Sprachpaket installieren, standardmäßig arbeiten wir aber oft mit der englischen Oberfläche.

---
### Schritt 4: Nützliche Extensions (Erweiterungen) installieren
Klicke in der linken Seitenleiste auf das Icon mit den vier Quadraten (``Extensions``, Shortcut: **Ctrl+Shift+X**) und suche nach...:

* ``Live Server``: Es startet einen lokalen Webserver. Sobald du eine ``HTML``- oder ``CSS``-Datei speicherst, lädt die Seite im Browser automatisch neu.
<!-- * **Prettier - Code formatter**: Sorgt automatisch für saubere Einrückungen und schönen Code. -->
* **Auto Rename Tag**: Wenn du einen öffnenden ``HTML``-Tag (z.B. **&lt;h1&gt;**) in **&lt;h2&gt;** änderst, ändert sich der schließende Tag **&lt;/h1&gt;** vollautomatisch mit.
* **CSS Peek**: Erlaubt es dir, in der ``HTML``-Datei direkt zu sehen, wie eine ``CSS``-Klasse definiert ist, ohne die ``CSS``-Datei manuell durchsuchen zu müssen.
* **Markdown Preview Enhanced**: Da **.md**-Dateien von mir für Angaben und Skripten benutzt werden, kann hier eine schönere Darstellung gewählt werden. Shortcut: **Ctrl+Shift+V** wenn eine Datei mit der Endung **.md** geöffnet ist.

---
### Schritt 5: Einen Workspace (Projektordner) öffnen
Erstelle an einem passenden Ort auf deinem Computer einen neuen Ordner **WMC2**. Öffne VS Code, klicke oben auf **File > Open Folder...** und wähle den erstellten Ordner aus. Dies ist nun dein aktueller ``Workspace``. Erstelle darin den Ordner **L01HTMLGrundlagen** und darin noch einen Ordner **Mitschrift-ErsteSchritte**.

---
### Schritt 6: Die erste Datei anlegen
Klicke in der linken Leiste (im Explorer) auf das Symbol für **New File** (oder mache einen Rechtsklick ins leere Feld) und nenne die Datei **index.html**. 

Tippe in die erste Zeile einfach ein **!** (Ausrufezeichen) und drücke die **Enter**- oder **Tab**-Taste. VS Code generiert dir nun vollautomatisch das Grundgerüst einer ``HTML``5-Seite:

/'''html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    
</body>
</html>
/'''

---
### Schritt 7: Programm (Website) ausführen und testen
Schreibe in den **&lt;body&gt;**-Bereich einen einfachen Test-Text, zum Beispiel **&lt;h1&gt;Hallo Welt!&lt;/h1&gt;**. Speichere die Datei mit **Ctrl+S**.

Um das Ergebnis zu sehen, mache einen **Rechtsklick** mitten in deinen Code und wähle **Open with Live Server** (Alternativ: Unten rechts in der blauen Statusleiste auf **Go Live** klicken). Dein Standardbrowser öffnet sich nun automatisch und zeigt deine Webseite an.