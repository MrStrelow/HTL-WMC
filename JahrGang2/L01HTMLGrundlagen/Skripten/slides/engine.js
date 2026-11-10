/* =========================================================
   Slide-Engine für die L01-Slides (einheitliches Format)
   ---------------------------------------------------------
   Verwendung in einer Slide-Datei:

   <script type="text/plain" id="code-xyz">
   1|<header>          <- Zeile ab Schritt 1 sichtbar
   2|    <nav>         <- Zeile ab Schritt 2 sichtbar
   2-3|    <p>Alt</p>  <- sichtbar in Schritt 2 bis 3, danach verschwindet die Zeile
   2|!    <p>          <- konzeptioneller Fehler: wird gerendert, rot durchgestrichen angezeigt
   2|?    <p>          <- „Daraus macht der Browser“: nur Anzeige, wird nicht gerendert
   @include frame-top  <- fügt ein Fragment ein (data-fragment="frame-top")
   </script>

   SlideDeck.init({ title, subtitle, css, tabs: [...] })

   Ansicht oben rechts (bleibt beim Weiterblättern gleich):
              HTML | HTML + CSS     Umschalter (genau eines davon)
              Block/Inline          zuschaltbar (kombinierbar)
              Komponenten           zuschaltbar (kombinierbar)

   Tastatur:  ← / →  Schritt zurück / weiter (springt am Ende in den nächsten Tab)
              ↑ / ↓  vorheriger / nächster Tab
              1 / 2  HTML / HTML + CSS
              3 / 4  Block/Inline bzw. Komponenten ein-/ausschalten
   ========================================================= */
(function () {
    "use strict";

    const BLOCK_TAGS = ["header", "nav", "main", "aside", "footer", "section", "article",
        "h1", "h2", "h3", "h4", "h5", "h6", "p", "ul", "ol", "li", "table", "thead", "tbody",
        "tr", "th", "td", "figure", "figcaption", "form", "fieldset", "legend", "details",
        "summary", "hr", "div", "blockquote", "body", "html"];
    const INLINE_TAGS = ["a", "strong", "em", "span", "time", "code", "label", "button",
        "input", "select", "option", "textarea", "img", "br", "mark", "small", "b", "i", "abbr"];
    const VOID_INLINE = ["img", "input", "br", "select", "textarea"];
    const META_TAGS = ["!DOCTYPE", "html", "body", "head", "meta", "title", "link", "style", "script"];

    const NOTES = {
        styled: "<b>HTML + CSS (Ausblick):</b> exakt dasselbe HTML, nur mit CSS. CSS lernen wir später – hier nur zum Anschauen.",
        blocks: "<b>Block</b> = blau gestrichelt (volle Breite, eigene Zeile) · <b>Inline</b> = gelb mit Tag-Namen (fließt im Text mit).",
        components: "<b>Komponenten (Ausblick):</b> logisch zusammengehörige Teile nennt man später <i>Komponenten</i> (z. B. in React). Wird später behandelt."
    };

    const COMP_COLORS = ["#2563eb", "#16a34a", "#9333ea", "#ea580c", "#db2777", "#0891b2", "#ca8a04", "#4f46e5"];

    /* ---------------- Hilfsfunktionen ---------------- */
    const esc = (s) => s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

    function mini(md) {
        // Mini-Markdown für Erklärtexte: `code`, **fett**, *kursiv*, Leerzeile = Absatz
        let s = esc(md);
        s = s.replace(/`([^`]+)`/g, "<code>$1</code>");
        s = s.replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>");
        s = s.replace(/(^|[^*])\*([^*\s][^*]*)\*/g, "$1<em>$2</em>");
        s = s.replace(/\n\s*\n/g, "<br><br>").replace(/\n/g, " ");
        return s;
    }

    function tagClass(name) {
        const n = name.toLowerCase();
        if (n === "!doctype" || META_TAGS.includes(n)) return "t-tag-meta";
        if (INLINE_TAGS.includes(n)) return "t-tag-inline";
        return "t-tag-block";
    }

    function hlAttrs(a) {
        let out = "";
        const re = /(\s+)|([^\s=]+)(?:(=)("[^"]*"|'[^']*'|[^\s>]+))?/g;
        let m;
        while ((m = re.exec(a))) {
            if (m[1]) { out += m[1]; continue; }
            if (m[2] === "/") { out += "/"; continue; }
            out += '<span class="t-attr">' + esc(m[2]) + "</span>";
            if (m[3]) out += '=<span class="t-val">' + esc(m[4] || "") + "</span>";
        }
        return out;
    }

    function hlHtml(line) {
        let out = "", last = 0, m;
        const re = /<!--.*?-->|<(\/?)(!DOCTYPE|[a-zA-Z][\w-]*)([^>]*)>|&[#\w]+;/g;
        while ((m = re.exec(line))) {
            out += esc(line.slice(last, m.index));
            if (m[0].startsWith("<!--")) out += '<span class="t-com">' + esc(m[0]) + "</span>";
            else if (m[0][0] === "&") out += '<span class="t-ent">' + esc(m[0]) + "</span>";
            else out += '<span class="t-br">&lt;' + m[1] + '</span><span class="' + tagClass(m[2]) + '">' + m[2] + "</span>" + hlAttrs(m[3]) + '<span class="t-br">&gt;</span>';
            last = re.lastIndex;
        }
        return out + esc(line.slice(last));
    }

    function hlCss(line) {
        if (/^\s*\/\*|^\s*\*|\*\/\s*$/.test(line)) return '<span class="c-com">' + esc(line) + "</span>";
        const prop = line.match(/^(\s*)([\w-]+)(\s*:\s*)(.*)$/);
        if (prop && !/\{\s*$/.test(line)) return prop[1] + '<span class="c-prop">' + esc(prop[2]) + "</span>" + esc(prop[3]) + esc(prop[4]);
        const sel = line.match(/^(\s*)([^{]+)(\{.*)$/);
        if (sel) return sel[1] + '<span class="c-sel">' + esc(sel[2]) + "</span>" + esc(sel[3]);
        return esc(line);
    }

    function readScript(id) {
        const el = document.getElementById(id);
        if (!el) throw new Error("Code-Block #" + id + " fehlt");
        return el.textContent;
    }

    function fragments() {
        const map = {};
        document.querySelectorAll("script[data-fragment]").forEach((s) => { map[s.dataset.fragment] = s.textContent; });
        return map;
    }

    function parseSource(text, minStep, maxStep, frags, depth) {
        if (depth > 10) throw new Error("@include zu tief verschachtelt");
        const out = [];
        const lines = text.replace(/^\r?\n/, "").replace(/\s+$/, "").split(/\r?\n/);
        for (const raw of lines) {
            let from = minStep, to = maxStep, code = raw;
            const m = raw.match(/^(\d+)(?:-(\d+))?\|(.*)$/);
            if (m) {
                from = Math.max(minStep, +m[1]);
                to = m[2] ? Math.min(maxStep, +m[2]) : maxStep;
                code = m[3];
            }
            const inc = code.match(/^(\s*)@include\s+([\w-]+)\s*$/);
            if (inc) {
                if (!(inc[2] in frags)) throw new Error("Fragment " + inc[2] + " fehlt");
                parseSource(frags[inc[2]], from, to, frags, depth + 1).forEach((l) => {
                    l.code = l.code.length ? inc[1] + l.code : l.code;
                    out.push(l);
                });
                continue;
            }
            // "!" = konzeptioneller Fehler (wird gerendert, aber durchgestrichen angezeigt)
            // "?" = was der Browser daraus macht (nur Anzeige, wird nicht gerendert)
            let kind = "";
            if (m && /^[!?]/.test(code)) { kind = code[0] === "!" ? "err" : "browser"; code = code.slice(1); }
            out.push({ from, to, code, kind });
        }
        return out;
    }

    /* ---------------- Skript, das in der Vorschau läuft ---------------- */
    const FRAME_SCRIPT = function () {
        function send(m) { m.__slides = 1; try { parent.postMessage(m, "*"); } catch (e) { /* ignorieren */ } }
        function flash(el) {
            const old = el.style.boxShadow;
            el.style.transition = "box-shadow .3s";
            el.style.boxShadow = "0 0 0 4px #f59e0b";
            setTimeout(function () { el.style.boxShadow = old; }, 1200);
        }
        document.addEventListener("keydown", function (e) {
            const t = e.target && e.target.tagName;
            if (/INPUT|TEXTAREA|SELECT/.test(t)) return;
            if (["ArrowLeft", "ArrowRight", "ArrowUp", "ArrowDown", "1", "2", "3", "4", "p", "P", "f", "F"].indexOf(e.key) >= 0) {
                e.preventDefault();
                send({ type: "key", key: e.key });
            }
        });
        document.addEventListener("click", function (e) {
            const a = e.target.closest && e.target.closest("a");
            if (!a) return;
            const h = a.getAttribute("href") || "";
            e.preventDefault();
            if (h.charAt(0) === "#") {
                const el = h.length > 1 ? document.getElementById(h.slice(1)) : null;
                if (el) { el.scrollIntoView({ behavior: "smooth", block: "start" }); flash(el); }
                send({ type: "nav", hash: h, found: !!el });
            } else {
                send({ type: "link", href: h });
            }
        });
        const forms = Array.prototype.slice.call(document.forms);
        document.addEventListener("submit", function (e) {
            const f = e.target;
            e.preventDefault();
            const query = new URLSearchParams(new FormData(f)).toString();
            send({ type: "submit", index: forms.indexOf(f), method: (f.getAttribute("method") || "GET").toUpperCase(), action: f.getAttribute("action") || "", query: query });
        });
        window.addEventListener("message", function (e) {
            if (!e.data || e.data.type !== "really-submit") return;
            const f = forms[e.data.index];
            if (f) { f.setAttribute("target", "_blank"); f.submit(); }
        });
        window.addEventListener("scroll", function () { send({ type: "scroll", y: window.scrollY }); });
        const neu = document.querySelector("[data-sd-neu]");
        if (window.__SD_FOCUS && neu) neu.scrollIntoView({ block: "center" });
        else if (window.__SD_SCROLL) window.scrollTo(0, window.__SD_SCROLL);
        if (window.__SD_INLINE) {
            // Jedes Inline-Element bekommt ein kleines Schild mit seinem Tag-Namen
            document.querySelectorAll(window.__SD_INLINE).forEach(function (el) {
                const l = document.createElement("span");
                l.className = "__sd-il";
                l.textContent = "<" + el.tagName.toLowerCase() + ">";
                el.parentNode.insertBefore(l, el);
            });
        }
        const C = window.__SD_COMPONENTS;
        if (C) {
            C.forEach(function (c, i) {
                document.querySelectorAll(c.sel).forEach(function (el) {
                    const col = c.color;
                    el.style.outline = "3px solid " + col;
                    el.style.outlineOffset = "-3px";
                    if (getComputedStyle(el).position === "static") el.style.position = "relative";
                    const b = document.createElement("span");
                    b.className = "__sd-badge";
                    b.textContent = "<" + c.name + " />";
                    b.style.background = col;
                    el.appendChild(b);
                });
            });
        }
    };

    function blockCss() {
        const blocks = BLOCK_TAGS.filter((t) => !["html", "body", "thead", "tbody", "tr", "hr"].includes(t));
        const tableCells = ["th", "td"];
        const labelled = blocks.filter((t) => !tableCells.includes(t));
        let css = "body{padding:6px}\n";
        css += blocks.map((t) => t).join(",") + "{outline:2px dashed #2563eb;outline-offset:-2px;margin-top:6px;margin-bottom:6px;padding:3px 8px 6px}\n";
        css += labelled.map((t) => t + "::before").join(",") + "{display:block;font:600 10px/1.5 ui-monospace,Consolas,monospace;color:#2563eb;letter-spacing:0;font-style:normal}\n";
        labelled.forEach((t) => {
            css += t + "::before{content:'<" + t + ">'}\n";
            css += t + "[id]::before{content:'<" + t + " id=\"' attr(id) '\">'}\n";
        });
        css += "hr{outline:2px dashed #2563eb;outline-offset:3px}\n";
        css += "summary::before{display:inline}\n";
        css += INLINE_TAGS.filter((t) => t !== "br" && t !== "option").join(",") + "{outline:2px solid #f59e0b;outline-offset:0;background-color:rgba(251,191,36,.25)}\n";
        // Schild mit Tag-Namen: bei normalen Inline-Elementen per ::before direkt im Element,
        // bei leeren Elementen (img, input, br, ...) fügt das Vorschau-Skript ein <span> davor ein
        INLINE_TAGS.filter((t) => !VOID_INLINE.includes(t) && t !== "option").forEach((t) => {
            css += t + "::before{content:'<" + t + ">'}\n";
        });
        css += INLINE_TAGS.filter((t) => !VOID_INLINE.includes(t) && t !== "option").map((t) => t + "::before").join(",") + ",.__sd-il{display:inline-block;font:600 9px/1.3 ui-monospace,Consolas,monospace;color:#92400e;background:#fde68a;border-radius:3px;padding:0 3px;margin:0 2px;vertical-align:super;font-style:normal;text-decoration:none;letter-spacing:0;pointer-events:none}\n";
        return css;
    }

    const BADGE_CSS = ".__sd-badge{position:absolute;top:0;right:0;z-index:50;color:#fff;font:600 11px/1.6 ui-monospace,Consolas,monospace;padding:0 7px;border-radius:0 0 0 6px;pointer-events:none;white-space:nowrap;font-style:normal}";

    /* ---------------- Hauptobjekt ---------------- */
    const SlideDeck = {
        init(cfg) {
            this.cfg = cfg;
            this.css = cfg.css || "";
            const frags = fragments();
            this.tabs = cfg.tabs.map((t) => {
                const lines = parseSource(readScript(t.code), 1, Infinity, frags, 0);
                return Object.assign({}, t, { lines });
            });
            this.tabIndex = 0;
            this.step = 1;
            this.styled = false;      // HTML oder HTML + CSS
            this.blocks = false;      // Block/Inline zugeschaltet?
            this.components = false;  // Komponenten zugeschaltet?
            this.codeMode = "html";
            this.scrollY = 0;
            this.build();
            this.readHash();
            this.render(true);
            window.addEventListener("keydown", (e) => this.onKey(e.key, e));
            window.addEventListener("message", (e) => this.onMessage(e));
            window.addEventListener("hashchange", () => { if (this.readHash()) this.render(true); });
        },

        build() {
            const c = this.cfg;
            document.title = c.title;
            document.body.innerHTML = `
<div class="sd-top">
  <div class="sd-top-left">
    <div class="sd-title"><strong>${esc(c.title)}</strong><small>${esc(c.subtitle || "")}</small></div>
    <div class="sd-tabs" role="tablist"></div>
  </div>
  <div class="sd-views">
    <div class="sd-seg" role="radiogroup" aria-label="Darstellung">
      <button class="sd-view" data-v="html" title="Nur HTML (Taste 1)">HTML<kbd>1</kbd></button>
      <button class="sd-view" data-v="css" title="HTML mit CSS – Ausblick (Taste 2)">HTML + CSS<kbd>2</kbd></button>
    </div>
    <button class="sd-view sd-chip" data-v="blocks" title="Block/Inline zuschalten (Taste 3)">Block / Inline<kbd>3</kbd></button>
    <button class="sd-view sd-chip" data-v="components" title="Komponenten zuschalten (Taste 4)">Komponenten<kbd>4</kbd></button>
    <button class="sd-view sd-fs" data-act="fs" title="Vollbild ein/aus (Taste F)">⛶ Vollbild<kbd>F</kbd></button>
    <div class="sd-pres-group">
      <button class="sd-view sd-chip" data-pres="1" title="Erklärung ausblenden, Code 30 % / Browser 70 % (Taste P)">🎤 Presenter<kbd>P</kbd></button>
      <button class="sd-view" data-show="both" title="Code und Browser">Code + Browser</button>
      <button class="sd-view" data-show="browser" title="Nur den Browser zeigen">nur Browser</button>
      <button class="sd-view" data-show="code" title="Nur den Code zeigen">nur Code</button>
    </div>
  </div>
</div>
<div class="sd-work">
  <div class="sd-code-wrap">
    <div class="sd-code-head">
      <span class="sd-file"></span>
      <span class="sd-legend"><span class="lg-block">Block</span><span class="lg-inline">Inline</span><span class="lg-meta">unsichtbar</span></span>
      <span class="sd-spacer"></span>
      <button class="sd-code-toggle" data-mode="html">HTML</button>
      <button class="sd-code-toggle" data-mode="css">CSS (Ausblick)</button>
    </div>
    <div class="sd-code"></div>
  </div>
  <div class="sd-browser">
    <div class="sd-browser-head"><span class="sd-dots"><i></i><i></i><i></i></span><span class="sd-tabchip"></span><span class="sd-url"></span></div>
    <div class="sd-viewnote" hidden></div>
    <iframe class="sd-frame" title="Vorschau"></iframe>
    <div class="sd-toast"></div>
    <div class="sd-request" hidden></div>
  </div>
</div>
<div class="sd-explain">
  <button class="sd-nav-btn" data-dir="-1" title="Zurück (←)">‹</button>
  <div class="sd-explain-body">
    <div class="sd-step-label"></div>
    <div class="sd-step-title"></div>
    <div class="sd-step-text"></div>
    <div class="sd-progress"></div>
  </div>
  <button class="sd-nav-btn" data-dir="1" title="Weiter (→)">›</button>
</div>
<div class="sd-pnav"><button data-go="-1" title="Zurück (←)">‹</button><span></span><button data-go="1" title="Weiter (→)">›</button></div>`;
            const q = (s) => document.querySelector(s);
            this.el = {
                tabs: q(".sd-tabs"), views: q(".sd-views"), code: q(".sd-code"), file: q(".sd-file"),
                legend: q(".sd-legend"), frame: q(".sd-frame"), url: q(".sd-url"), chip: q(".sd-tabchip"),
                note: q(".sd-viewnote"), toast: q(".sd-toast"), req: q(".sd-request"),
                label: q(".sd-step-label"), title: q(".sd-step-title"), text: q(".sd-step-text"),
                progress: q(".sd-progress"), prev: q('[data-dir="-1"]'), next: q('[data-dir="1"]')
            };
            this.tabs.forEach((t, i) => {
                const b = document.createElement("button");
                b.className = "sd-tab" + (t.optional ? " optional" : "");
                b.textContent = (t.optional ? "⭐ " : "") + t.label;
                b.title = t.optional ? "Optional – für besonders Interessierte" : t.label;
                b.addEventListener("click", () => { this.tabIndex = i; this.step = 1; this.scrollY = 0; this.render(true); });
                this.el.tabs.appendChild(b);
            });
            this.el.views.querySelectorAll("[data-v]").forEach((b) => {
                b.addEventListener("click", () => this.setView(b.dataset.v));
            });
            if (!this.css) this.el.views.querySelector('[data-v="css"]').style.display = "none";
            this.el.views.querySelector('[data-act="fs"]').addEventListener("click", () => SlideDeck.toggleFullscreen());
            document.querySelectorAll(".sd-code-toggle").forEach((b) => {
                b.addEventListener("click", () => { this.codeMode = b.dataset.mode; this.renderCode(); });
                if (b.dataset.mode === "css" && !this.css) b.style.display = "none";
            });
            this.el.prev.addEventListener("click", () => this.go(-1));
            this.el.next.addEventListener("click", () => this.go(1));
            // Presenter-Modus und Ansicht (Code + Browser / nur Browser / nur Code)
            this.presenter = false;
            this.show = "both";
            q("[data-pres]").addEventListener("click", () => this.togglePresenter());
            document.querySelectorAll("[data-show]").forEach((b) => b.addEventListener("click", () => { this.show = b.dataset.show; this.applyLayout(); }));
            document.querySelectorAll(".sd-pnav [data-go]").forEach((b) => b.addEventListener("click", () => this.go(+b.dataset.go)));
            const sync = () => { q(".sd-pnav span").textContent = this.el.label.textContent; };
            new MutationObserver(sync).observe(this.el.label, { childList: true, characterData: true, subtree: true });
            this.applyLayout();
        },

        togglePresenter() { this.presenter = !this.presenter; this.applyLayout(); },

        // Presenter: Erklärung aus, Code 30 % / Browser 70 %. Ansicht: beides, nur Browser, nur Code.
        applyLayout() {
            const b = document.body.classList;
            b.toggle("sd-presenter", this.presenter);
            b.toggle("sd-v-browser", this.show === "browser");
            b.toggle("sd-v-code", this.show === "code");
            document.querySelector("[data-pres]").classList.toggle("active", this.presenter);
            document.querySelectorAll("[data-show]").forEach((x) => x.classList.toggle("active", x.dataset.show === this.show));
        },

        get tab() { return this.tabs[this.tabIndex]; },

        readHash() {
            const h = decodeURIComponent(location.hash.slice(1));
            if (!h) return false;
            const [id, st] = h.split("/");
            const i = this.tabs.findIndex((t) => t.id === id);
            if (i < 0) return false;
            if (i === this.tabIndex && (+st || 1) === this.step) return false;
            this.tabIndex = i;
            this.step = Math.min(Math.max(+st || 1, 1), this.tabs[i].steps.length);
            return true;
        },

        writeHash() {
            const h = "#" + this.tab.id + "/" + this.step;
            if (location.hash !== h) history.replaceState(null, "", h);
        },

        go(dir) {
            const n = this.tab.steps.length;
            if (dir > 0 && this.step < n) this.step++;
            else if (dir < 0 && this.step > 1) this.step--;
            else if (dir > 0 && this.tabIndex < this.tabs.length - 1) { this.tabIndex++; this.step = 1; this.scrollY = 0; }
            else if (dir < 0 && this.tabIndex > 0) { this.tabIndex--; this.step = this.tab.steps.length; this.scrollY = 0; }
            else return;
            this.render(true);
        },

        goTab(dir) {
            const i = this.tabIndex + dir;
            if (i < 0 || i >= this.tabs.length) return;
            this.tabIndex = i; this.step = 1; this.scrollY = 0;
            this.render(true);
        },

        onKey(key, e) {
            if (e && e.target && /INPUT|TEXTAREA|SELECT/.test(e.target.tagName)) return;
            if (e && (e.ctrlKey || e.metaKey || e.altKey)) return;
            const map = { ArrowRight: () => this.go(1), ArrowLeft: () => this.go(-1), ArrowDown: () => this.goTab(1), ArrowUp: () => this.goTab(-1) };
            if (map[key]) { if (e) e.preventDefault(); map[key](); return; }
            if (key === "p" || key === "P") { this.togglePresenter(); return; }
            if (key === "f" || key === "F") { SlideDeck.toggleFullscreen(); return; }
            const v = { 1: "html", 2: "css", 3: "blocks", 4: "components" }[key];
            if (v) this.setView(v);
        },

        toggleFullscreen() {
            try {
                if (document.fullscreenElement) document.exitFullscreen();
                else document.documentElement.requestFullscreen();
            } catch (e) { /* Vollbild nicht erlaubt */ }
        },

        // html/css schalten um, blocks/components werden zu- bzw. abgeschaltet
        setView(v) {
            if (v === "html") this.styled = false;
            else if (v === "css") this.styled = !!this.css;
            else if (v === "blocks") this.blocks = !this.blocks;
            else if (v === "components") this.components = !this.components;
            this.render(false);
        },

        onMessage(e) {
            const d = e.data;
            if (!d || !d.__slides) return;
            if (d.type === "key") this.onKey(d.key, null);
            else if (d.type === "scroll") this.scrollY = d.y;
            else if (d.type === "nav") {
                this.el.url.textContent = this.baseUrl() + (d.hash === "#" ? "" : d.hash);
                if (!d.found && d.hash.length > 1) this.toast("Sprungziel " + d.hash + " existiert (noch) nicht – es fehlt ein Element mit id=\"" + d.hash.slice(1) + "\"");
            } else if (d.type === "link") {
                this.toast("Link zu „" + d.href + "“ – in der Vorschau nicht geöffnet");
            } else if (d.type === "submit") this.showRequest(d);
        },

        baseUrl() { return this.tab.url || "file:///lernportal/index.html"; },

        toast(msg) {
            const t = this.el.toast;
            t.textContent = msg;
            t.classList.add("show");
            clearTimeout(this._toast);
            this._toast = setTimeout(() => t.classList.remove("show"), 2600);
        },

        showRequest(d) {
            const isGet = d.method === "GET";
            const url = d.action + (isGet ? "?" + d.query : "");
            if (isGet) this.el.url.textContent = url;
            const body = isGet
                ? `GET ${url}\n\n(Body leer – die Daten stehen sichtbar in der URL nach dem ?)`
                : `POST ${d.action}\nContent-Type: application/x-www-form-urlencoded\n\n${d.query}\n\n(Die Daten stehen im Body – die URL bleibt ohne ?)`;
            this.el.req.innerHTML = `<strong>📨 Der Browser würde jetzt diesen HTTP-Request schicken:</strong><pre>${esc(body)}</pre>
<div class="sd-req-actions"><button data-act="close">Schließen</button><button class="primary" data-act="send">Wirklich absenden ↗ (neuer Tab)</button></div>`;
            this.el.req.hidden = false;
            this.el.req.querySelector('[data-act="close"]').onclick = () => { this.el.req.hidden = true; };
            this.el.req.querySelector('[data-act="send"]').onclick = () => {
                this.el.frame.contentWindow.postMessage({ type: "really-submit", index: d.index }, "*");
                this.el.req.hidden = true;
            };
        },

        visibleLines() {
            const s = this.step;
            return this.tab.lines.filter((l) => l.from <= s && s <= l.to && l.kind !== "browser");
        },

        // markNew: das erste neue Element bekommt data-sd-neu, damit die Vorschau dorthin scrollt
        currentHtml(markNew) {
            const s = this.step;
            const isBase = this.tab.steps[s - 1] && this.tab.steps[s - 1].base;
            let marked = !markNew || isBase;
            return this.visibleLines().map((l) => {
                if (marked || l.from !== s) return l.code;
                const m = l.code.match(/<([a-zA-Z][\w-]*)/);
                if (!m || /^(html|head|meta|title|body)$/i.test(m[1])) return l.code;
                marked = true;
                const at = m.index + m[0].length;
                return l.code.slice(0, at) + " data-sd-neu" + l.code.slice(at);
            }).join("\n");
        },

        renderCode() {
            const box = this.el.code;
            document.querySelectorAll(".sd-code-toggle").forEach((b) => b.classList.toggle("active", b.dataset.mode === this.codeMode));
            this.el.legend.style.visibility = this.codeMode === "html" ? "visible" : "hidden";
            if (this.codeMode === "css") {
                this.el.file.textContent = "style.css (Ausblick)";
                box.innerHTML = this.css.replace(/^\n/, "").split("\n").map((l, i) =>
                    `<div class="sd-line"><span class="sd-ln">${i + 1}</span><span class="sd-src">${hlCss(l)}</span></div>`).join("");
                box.scrollTop = 0;
                return;
            }
            this.el.file.textContent = this.tab.file || "index.html";
            const s = this.step;
            const isBase = this.tab.steps[s - 1] && this.tab.steps[s - 1].base;
            let n = 0, html = "", firstMark = -1, idx = 0;
            // Entfernte Zeilen verschwinden einfach. Durchgestrichen wird nur, was konzeptionell falsch ist.
            for (const l of this.tab.lines) {
                if (!(l.from <= s && s <= l.to)) continue;
                const cls = l.kind || (l.from === s && !isBase ? "new" : "");
                if (cls && firstMark < 0) firstMark = idx;
                const ln = l.kind === "browser" ? "⇒" : ++n;
                html += `<div class="sd-line ${cls}"><span class="sd-ln">${ln}</span><span class="sd-src">${hlHtml(l.code) || " "}</span></div>`;
                idx++;
            }
            box.innerHTML = html;
            if (firstMark >= 0) {
                const row = box.children[firstMark];
                const top = row.offsetTop - box.clientHeight * 0.25;
                box.scrollTo({ top: Math.max(0, top), behavior: "smooth" });
            }
        },

        renderPreview(stepChanged) {
            let inject = "";
            if (this.styled) inject += "<style>" + this.css + "</style>";
            if (this.blocks) {
                const inl = VOID_INLINE.join(",");
                inject += "<style>" + blockCss() + "</style><script>window.__SD_INLINE=" + JSON.stringify(inl) + ";<\/script>";
            }
            if (this.components) {
                const comps = (this.tab.components || []).map((c, i) => Object.assign({ color: COMP_COLORS[i % COMP_COLORS.length] }, c));
                inject += "<style>" + BADGE_CSS + "</style><script>window.__SD_COMPONENTS=" + JSON.stringify(comps).replace(/</g, "\\u003c") + ";<\/script>";
            }
            inject += "<script>window.__SD_SCROLL=" + (this.scrollY || 0) + ";window.__SD_FOCUS=" + !!stepChanged + ";(" + FRAME_SCRIPT.toString() + ")();<\/script>";
            let html = this.currentHtml(true);
            html = /<\/body>/i.test(html) ? html.replace(/<\/body>/i, inject + "\n</body>") : html + inject;
            this.el.frame.srcdoc = html;
            const t = html.match(/<title>([\s\S]*?)<\/title>/i);
            this.el.chip.textContent = t ? t[1].trim() : "(kein <title>)";
            this.el.url.textContent = this.baseUrl();
            const notes = ["styled", "blocks", "components"].filter((k) => this[k]).map((k) => NOTES[k]);
            this.el.note.innerHTML = notes.join("<br>");
            this.el.note.hidden = !notes.length;
            this.el.req.hidden = true;
        },

        render(stepChanged) {
            this.tabs.forEach((t, i) => this.el.tabs.children[i].classList.toggle("active", i === this.tabIndex));
            const st = this.tab.steps[this.step - 1];
            const on = { html: !this.styled, css: this.styled, blocks: this.blocks, components: this.components };
            this.el.views.querySelectorAll("[data-v]").forEach((b) => {
                b.classList.toggle("active", on[b.dataset.v]);
                b.setAttribute("aria-pressed", on[b.dataset.v] ? "true" : "false");
            });
            if (stepChanged) {
                const n = this.tab.steps.length;
                this.el.label.textContent = (this.tab.optional ? "⭐ Optional · " : "") + this.tab.label + " · Schritt " + this.step + " / " + n;
                this.el.title.textContent = st.title;
                this.el.text.innerHTML = mini(st.text || "");
                this.el.progress.innerHTML = "";
                for (let i = 1; i <= n; i++) {
                    const b = document.createElement("button");
                    b.className = i === this.step ? "current" : (i < this.step ? "done" : "");
                    b.title = "Schritt " + i;
                    b.addEventListener("click", () => { this.step = i; this.render(true); });
                    this.el.progress.appendChild(b);
                }
                const hint = document.createElement("span");
                hint.className = "sd-hint";
                hint.textContent = "← → Schritte · ↑ ↓ Tabs · 1/2 HTML ⇄ HTML + CSS · 3 Block/Inline · 4 Komponenten · F Vollbild";
                this.el.progress.appendChild(hint);
                this.el.prev.disabled = this.tabIndex === 0 && this.step === 1;
                this.el.next.disabled = this.tabIndex === this.tabs.length - 1 && this.step === n;
                this.renderCode();
                this.writeHash();
            }
            this.renderPreview(stepChanged);
        }
    };

    window.SlideDeck = SlideDeck;
})();
