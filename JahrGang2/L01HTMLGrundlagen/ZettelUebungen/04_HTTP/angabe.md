# Zettelübung: HTTP – Request, Response, GET und POST

> Verwende die [HTTP-Slide](../../Skripten/L01.4.1-HTTP.html) als Hilfestellung. Öffne sie in einem Browser.

## Aufgabe 1 – Aufbau eines Requests
Beschrifte jede Zeile des folgenden Requests mit dem richtigen Teil: ``Startzeile``, ``Header``, ``Leerzeile`` oder ``Body``. Markiere in der Startzeile zusätzlich ``Methode``, ``Pfad`` und ``HTTP-Version``.

```text
POST /anmeldung HTTP/1.1                              → ___________________
Host: lernportal.htl.at                               → ___________________
Content-Type: application/x-www-form-urlencoded       → ___________________
                                                      → ___________________
titel=Wetterstation&email=max%40htl.at                → ___________________
```

Welches Formularfeld-Attribut bestimmt die Wörter ``titel`` und ``email`` im Body?

___________________________________________________________


## Aufgabe 2 – Eine URL zerlegen
Ordne jeden Teil der URL zu: ``Protokoll``, ``Host``, ``Pfad``, ``Query-String``, ``Fragment``.

```text
https://lernportal.htl.at/search?q=htl&seite=2#treffer
```

| Teil | Bezeichnung |
| :--- | :--- |
| `https://` | ___ |
| `lernportal.htl.at` | ___ |
| `/search` | ___ |
| `?q=htl&seite=2` | ___ |
| `#treffer` | ___ |

Welcher Teil wird **nie** an den Server geschickt? Warum?

___________________________________________________________


## Aufgabe 3 – Was antwortet der Server?
Ein Browser schickt `GET /index.html HTTP/1.1`. Schreibe die Response, wenn die Datei existiert. Sie soll eine Statuszeile, einen Header für den Inhaltstyp, die Leerzeile und einen Body mit einer kleinen HTML-Seite enthalten.

```text







```

Welchen Statuscode bekommt der Browser, wenn die Datei **nicht** existiert? ___________


## Aufgabe 4 – GET oder POST?
Entscheide für jedes Szenario, welche Methode passt, und begründe in einem Halbsatz.

| Szenario | GET / POST | Begründung |
| :--- | :---: | :--- |
| Suche im Onlineshop nach „Kopfhörer“ | ___ | ___ |
| Login mit Benutzername und Passwort | ___ | ___ |
| Seite 2 einer Produktliste anzeigen | ___ | ___ |
| Einen Kommentar unter einem Blogpost speichern | ___ | ___ |
| Eine Suchergebnisseite als Lesezeichen speichern | ___ | ___ |


## Aufgabe 5 – Idempotent?
1. Was bedeutet ``idempotent``?
2. Ein Formular mit `method="POST"` wird abgeschickt, danach drückt man **F5**. Was fragt der Browser und warum?
3. Warum schickt man ein Passwort **nie** mit GET? Und warum ist ein POST-Request ohne https trotzdem nicht sicher?

___________________________________________________________

___________________________________________________________

___________________________________________________________


## Aufgabe 6 – Einen echten GET-Request untersuchen
1. Öffne `https://www.google.com` im Browser und drücke **F12** (oder Rechtsklick → **Untersuchen**). Wechsle in den Reiter **Netzwerk** (*Network*).
2. Suche bei Google nach `htl donaustadt`.
3. Suche in der Liste den **GET-Request** zur Suche (Name beginnt mit `search?q=…`) und klicke ihn an.
4. Finde den **Query-Parameter**, in dem dein Suchbegriff steht (Reiter **Payload** bzw. **Nutzlast** → *Query String Parameters*).
5. Mache einen **Screenshot**, auf dem Methode, URL und der Query-Parameter zu sehen sind. Speichere ihn im selben Ordner wie diese Datei als `get-request.png` und füge ihn hier ein:

```markdown
![GET-Request der Google-Suche](get-request.png)
```

<!-- Füge deinen Screenshot hier ein -->


**Beantworte:**
* Wie heißt der Query-Parameter für den Suchbegriff? ___________
* Welchen Statuscode hat die Antwort? ___________
* Ist der Body des Requests leer? Warum? ___________________________________________
