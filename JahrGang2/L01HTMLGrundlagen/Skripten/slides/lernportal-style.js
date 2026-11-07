/* =========================================================
   AUSBLICK: CSS für das durchgehende Beispiel „HTL Lernportal“
   (L01.2 – L01.4). Wird in den Slides nur angezeigt, nicht erklärt.
   Als JS-String abgelegt, damit die Slides auch per Doppelklick
   (file://) ohne Webserver funktionieren.
   ========================================================= */
window.LERNPORTAL_CSS = `/* Ausblick: Das HTML bleibt gleich – nur CSS ordnet es an. */
* {
    box-sizing: border-box;
}

body {
    margin: 0;
    padding: 16px;
    font-family: system-ui, sans-serif;
    background: #f1f5f9;
    color: #1e293b;
    /* Das 3-Spalten-Design entsteht erst hier! */
    display: grid;
    grid-template-columns: 190px minmax(0, 1fr) 190px;
    grid-template-areas:
        "kopf  kopf  kopf"
        "links mitte rechts"
        "fuss  fuss  fuss";
    gap: 16px;
    align-items: start;
}

body > header {
    grid-area: kopf;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    gap: 12px;
    background: #1e293b;
    color: white;
    border-radius: 10px;
    padding: 12px 20px;
}

body > header h1 {
    margin: 0;
    font-size: 1.3rem;
}

body > header ul {
    display: flex;
    gap: 16px;
    list-style: none;
    margin: 0;
    padding: 0;
}

body > header a {
    color: #7dd3fc;
    font-weight: 600;
    text-decoration: none;
}

#seiten-nav {
    grid-area: links;
    background: #e2e8f0;
    border-radius: 10px;
    padding: 4px 16px 12px;
}

#seiten-nav ul {
    list-style: none;
    margin: 0;
    padding: 0;
}

#seiten-nav li {
    margin: 6px 0;
}

#seiten-nav a {
    color: #1d4ed8;
    text-decoration: none;
}

main {
    grid-area: mitte;
    background: white;
    border-radius: 10px;
    padding: 4px 24px 20px;
}

#zusatz-info {
    grid-area: rechts;
    background: #fef9c3;
    border-radius: 10px;
    padding: 4px 16px 12px;
}

body > footer {
    grid-area: fuss;
    text-align: center;
    color: #64748b;
    font-size: 0.9rem;
}

body > footer a {
    color: #475569;
}

main section {
    border-top: 1px solid #e2e8f0;
}

article {
    background: #f8fafc;
    border: 1px solid #e2e8f0;
    border-radius: 10px;
    padding: 2px 16px 10px;
    margin: 12px 0;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.08);
}

figure {
    margin: 8px 0;
}

img {
    max-width: 100%;
    border-radius: 8px;
}

figcaption {
    color: #64748b;
    font-size: 0.85rem;
}

details {
    background: white;
    border: 1px solid #cbd5e1;
    border-radius: 8px;
    padding: 6px 12px;
    margin: 8px 0;
}

summary {
    cursor: pointer;
    font-weight: 600;
}

form p {
    display: flex;
    flex-direction: column;
    gap: 4px;
    max-width: 420px;
}

input,
select,
textarea {
    font: inherit;
    padding: 6px 8px;
    border: 1px solid #94a3b8;
    border-radius: 6px;
}

fieldset {
    border: 1px solid #cbd5e1;
    border-radius: 8px;
    max-width: 420px;
}

fieldset p {
    flex-direction: row;
    align-items: center;
}

button {
    font: inherit;
    font-weight: 600;
    background: #2563eb;
    color: white;
    border: 0;
    border-radius: 6px;
    padding: 6px 14px;
    cursor: pointer;
}

/* Kleiner Bildschirm: alles untereinander */
@media (max-width: 700px) {
    body {
        grid-template-columns: 1fr;
        grid-template-areas: "kopf" "links" "mitte" "rechts" "fuss";
    }
}`;
