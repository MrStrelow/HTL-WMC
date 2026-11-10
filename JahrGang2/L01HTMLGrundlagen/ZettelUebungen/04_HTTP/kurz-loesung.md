# Lösung: Zettelübung (10 Minuten) – GET oder POST?

## Aufgabe 1 – Wie ist eine URL aufgebaut?
| Teil | Bezeichnung |
| :--- | :--- |
| `https://` | Protokoll (HTTP verschlüsselt) |
| `www.youtube.com` | Host (welcher Server) |
| `/watch` | Pfad (welche Ressource) |
| `?v=dQw4w9WgXcQ&t=14m15s` | Query-String (Schlüssel=Wert-Paare) |
| `#kommentare` | Fragment (Anker, wird nicht an den Server geschickt) |

## Aufgabe 2 – Eine GET-URL selbst schreiben
```text
https://www.google.com/search?q=asfdds&t=14m15s
```
Der Query-String beginnt mit `?`, mehrere Parameter werden mit `&` getrennt. Jeder Parameter ist ein Paar **name=Wert**, der Name kommt aus dem `name`-Attribut des Formularfelds.

## Aufgabe 3 – GET oder POST?
| Szenario | GET / POST | Begründung |
| :--- | :---: | :--- |
| Suche im Onlineshop nach „Kopfhörer“ | GET | Daten werden nur abgefragt, `?q=Kopfhörer` darf in der URL stehen |
| Login mit Benutzername und Passwort | POST | Passwort darf nicht in URL, Verlauf und Lesezeichen landen |
| Seite 2 einer Produktliste anzeigen | GET | nur lesen, `?seite=2` kann geteilt werden |
| Einen Kommentar unter einem Blogpost speichern | POST | verändert Daten am Server, Text kann lang sein |
| Eine Suchergebnisseite als Lesezeichen speichern | GET | nur bei GET stehen die Daten in der URL und lassen sich speichern |
