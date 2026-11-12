# CampusKit – Figma & komponentenbasierte Entwicklung

Eine kleine, lokal ausführbare Begleitdemo für die 15-Minuten-Präsentation im Modul **Komponentenbasierte Entwicklung**.

## Lernziel
Die Demo macht vier Ideen sichtbar:
1. **Komponente:** `Button()` erzeugt ein wiederverwendbares UI-Element.
2. **Properties (Props):** `variant` und `size` steuern Aussehen und Größe.
3. **Zustand (State):** Anmeldung und Merkliste ändern sich nach Interaktion.
4. **Konsistenz:** zentrale CSS-Variablen und gemeinsame Klassen halten das Interface zusammen.

## Starten
Es werden keine Pakete und kein Build-Schritt benötigt.

```bash
python3 -m http.server 8000
```

Dann im Browser öffnen: http://localhost:8000

Alternativ `index.html` direkt öffnen. Für die Präsentation wird der lokale Server empfohlen.

## Live-Demo – Ablauf (ca. 3 Minuten)
1. **30 Sek.** Oberfläche zeigen: Kurskarte, Badge, Button und Metadaten.
2. **45 Sek.** Im Komponenten-Labor `Primary`, `Secondary` und `Quiet` wählen. Danach Größe ändern. Der Code-Ausdruck zeigt die Props.
3. **45 Sek.** „Kurs merken“ anklicken: `favorite` wechselt zwischen `true` und `false`.
4. **45 Sek.** „Jetzt anmelden“ anklicken: `enrolled`, freie Plätze und Status werden aktualisiert.
5. **15 Sek.** Dunkelmodus umschalten und Fazit ziehen: wiederverwendbare Bausteine + definierte Zustände.

## Projektstruktur
```text
.
├── index.html
├── README.md
└── src/
    ├── app.js
    └── styles.css
```

## Architektur
- `index.html`: semantische Seitenstruktur und Komponenten-Slots.
- `src/styles.css`: Design-Tokens als CSS Custom Properties, Variantenklassen und responsives Layout.
- `src/app.js`: `Button()` als kleine UI-Komponente, Properties und expliziter UI-State.

## Bezug zu Figma
In Figma kann das gleiche Muster gestaltet werden:
- `Button` als **Main Component** anlegen.
- Varianten über Eigenschaften wie `Type = Primary | Secondary | Quiet` und `Size = Normal | Small` organisieren.
- Kurskarte aus wiederverwendbaren Elementen zusammensetzen.
- Im Prototype-Tab die Interaktionen für Merken und Anmelden verbinden.
- Für die Übergabe an die Entwicklung Maße, Farben, Typografie und Assets in Dev Mode prüfen.

Wichtig: Dieses Repository ist die **Code-Demo** zur Präsentation und keine native Figma-Datei (`.fig`). Die Figma-Schritte oben dienen dazu, das Muster in einem eigenen Figma-File nachzubauen.

## GitHub veröffentlichen
1. Neues Repository namens `figma-komponenten-demo` erstellen.
2. Dateien aus diesem Ordner hochladen oder:
   ```bash
   git init
   git add .
   git commit -m "Add component-based Figma presentation demo"
   git branch -M main
   git remote add origin https://github.com/DEIN-NAME/figma-komponenten-demo.git
   git push -u origin main
   ```
3. Den Repository-Link in die Abgabe bzw. Präsentation übernehmen.

## Technische Hinweise
- Vanilla HTML/CSS/JavaScript, keine externen Abhängigkeiten.
- Buttons sind per Tastatur fokussierbar; Statusmeldung nutzt `aria-live`.
- Der Anmeldestatus lebt nur im Arbeitsspeicher und wird beim Neuladen zurückgesetzt.
