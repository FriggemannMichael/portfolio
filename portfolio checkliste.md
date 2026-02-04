# Portfolio Checkliste

## 16. SCSS-Refactoring & Accessibility

### Erledigt

- [x] **BEM-Refactoring: footer.scss**
  - `.legal-link` -> `.footer__legal-link`
  - `.copyright` -> `.footer__copyright`
  - HTML-Referenzen aktualisiert

- [x] **BEM-Refactoring: navigation.scss**
  - Ungenutzte Legacy-Styles entfernt (`.lang-ellipse`, `.lang-option`, `.change-language`)

- [x] **Focus-States: styles.scss**
  - `:focus-visible` zu `.btn` hinzugefuegt
  - `:focus-visible` zu `.btn-primary` mit angepasster Outline-Farbe

- [x] **Focus-States: navigation.scss**
  - `:focus-visible` zu `.menu-button` hinzugefuegt
  - `border-radius` fuer bessere Outline-Darstellung

- [x] **Focus-States: contact.scss**
  - `:focus-visible` fuer Custom-Checkbox hinzugefuegt
  - Focus wird auf `.checkbox-custom` visuell uebertragen

### Offen (Prioritaet 2)

- [ ] `styles.scss` in Partials aufteilen (`_variables.scss`, `_mixins.scss`, etc.)
- [ ] Legal-Notice/Privacy-Policy Shared Partial extrahieren
- [ ] Button-Styles vereinheitlichen (globales `.btn` vs. `.secondary-button`)

### Offen (Prioritaet 3)

- [ ] Alle direkten Media Queries durch Mixins ersetzen
- [ ] Browser-Fallbacks fuer `aspect-ratio`, `clamp()`, `:has()` hinzufuegen
- [ ] Ungenutzte Assets entfernen (`suspectMichael.png`, `Portfolio (Copy).zip`)
