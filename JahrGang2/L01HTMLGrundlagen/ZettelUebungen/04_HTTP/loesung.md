# Lösung: Zettelübung HTTP – Request, Response, GET und POST

## Aufgabe 1 – Aufbau eines Requests
```text
POST /anmeldung HTTP/1.1                              → Startzeile (Methode: POST, Pfad: /anmeldung, HTTP-Version: HTTP/1.1)
Host: lernportal.htl.at                               → Header (welcher Server)
Content-Type: application/x-www-form-urlencoded       → Header (Format des Bodys)
                                                      → Leerzeile (trennt Header und Body)
titel=Wetterstation&email=max%40htl.at                → Body (Formulardaten)
```
Die Wörter ``titel`` und ``email`` kommen aus dem ``name``-Attribut der Eingabefelder. Ohne ``name`` würde der Wert nicht mitgeschickt.

## Aufgabe 2 – Eine URL zerlegen
| Teil | Bezeichnung |
| :--- | :--- |
| `https://` | Protokoll (HTTP verschlüsselt) |
| `lernportal.htl.at` | Host (welcher Server) |
| `/search` | Pfad (welche Ressource) |
| `?q=htl&seite=2` | Query-String (Schlüssel=Wert-Paare, getrennt mit `&`) |
| `#treffer` | Fragment (Anker) |

Das **Fragment** wird nie an den Server geschickt. Es springt nur im Browser zum Element mit `id="treffer"`.

## Aufgabe 3 – Was antwortet der Server?
```text
HTTP/1.1 200 OK
Content-Type: text/html; charset=UTF-8

<!DOCTYPE html>
<html lang="de">
<head>
    <title>Startseite</title>
</head>
<body>
    <h1>
        HTL Lernportal
    </h1>
</body>
</html>
```
Die **Antwort auf einen GET-Request ist das HTML der Seite – es steht im Body der Response.** Existiert die Datei nicht, kommt `404 Not Found`.

## Aufgabe 4 – GET oder POST?
| Szenario | GET / POST | Begründung |
| :--- | :---: | :--- |
| Suche im Onlineshop nach „Kopfhörer“ | GET | Daten werden nur abgefragt, `?q=Kopfhörer` darf in der URL stehen |
| Login mit Benutzername und Passwort | POST | Passwort darf nicht in URL, Verlauf und Lesezeichen landen |
| Seite 2 einer Produktliste anzeigen | GET | nur lesen, `?seite=2` kann geteilt werden |
| Einen Kommentar unter einem Blogpost speichern | POST | verändert Daten am Server, Text kann lang sein |
| Eine Suchergebnisseite als Lesezeichen speichern | GET | nur bei GET stehen die Daten in der URL und lassen sich speichern |

## Aufgabe 5 – Idempotent?
1. **Idempotent** heißt: Egal, wie oft man den Request schickt – am Server kommt derselbe Zustand heraus. GET ist idempotent, POST nicht.
2. Der Browser fragt **„Formular erneut senden?“**. Beim Neuladen würde er den POST-Request noch einmal schicken und z. B. eine zweite Anmeldung anlegen, weil POST nicht idempotent ist.
3. Bei GET steht das Passwort **sichtbar in der URL**, also auch im Verlauf, in Lesezeichen und in Server-Logs. Bei POST steht es im Body und damit nicht in der URL – lesbar ist es im Netzwerk trotzdem. Geschützt werden URL **und** Body erst durch **https** (Verschlüsselung).

## Aufgabe 6 – Einen echten GET-Request untersuchen
* Im Reiter **Netzwerk** steht der Request `search?q=htl+donaustadt&…` mit der Methode **GET**.
* Der Query-Parameter für den Suchbegriff heißt **`q`**, sein Wert ist `htl donaustadt` (in der URL mit `+` statt Leerzeichen). Daneben schickt Google weitere Parameter mit, z. B. Sprache oder Sitzungsinfos.
* Statuscode: **200** (OK).
* Der Body des Requests ist **leer**: Bei GET stehen alle Daten im Query-String der URL.
* Der Screenshot `get-request.png` zeigt Methode, URL und den Query-Parameter `q` und ist mit `![…](get-request.png)` im Markdown eingebunden.
