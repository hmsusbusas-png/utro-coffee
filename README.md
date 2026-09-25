# Утро — лендинг кофейни

Demo landing page for a fictional Moscow coffee shop («Утро» on Pokrovka).
Light minimalism, warm palette, no frameworks, no builders. Pure HTML/CSS/JS.

**Live:** [hmsusbusas-png.github.io/utro-coffee](https://hmsusbusas-png.github.io/utro-coffee/)

## What's inside

- Split hero with an arched photo (the signature touch)
- Three "reasons to visit" cards
- Typographic price list with dot leaders — no card grids
- Photo gallery with lazy loading
- Reviews + Yandex Maps rating badge
- Promo block («6th coffee free») with a slightly rotated badge
- Contacts with a live Yandex Maps embed

Fonts: [Prata](https://fonts.google.com/specimen/Prata) (display serif, native Cyrillic)
+ [Golos Text](https://fonts.google.com/specimen/Golos+Text). Scroll reveal via
IntersectionObserver, `prefers-reduced-motion` respected. Photos: StockCake (free stock).

## Run

No build step. Open `index.html` or:

```bash
python -m http.server 8000
# → http://localhost:8000
```

## Structure

```
├── index.html
├── css/style.css
├── js/main.js        # 14 lines, scroll reveal only
├── assets/img/       # 6 photos
└── favicon.svg
```

---

## RU

Демо-лендинг вымышленной московской кофейни «Утро» (Покровка, 27).
Светлый минимализм, тёплая палитра, без фреймворков и конструкторов.

**Живой сайт:** [hmsusbusas-png.github.io/utro-coffee](https://hmsusbusas-png.github.io/utro-coffee/)

Внутри: сплит-hero с арочным фото, три «причины зайти», типографское меню
с точечными лидерами вместо карточек, галерея с ленивой загрузкой, отзывы
с рейтингом Яндекс.Карт, акция «шестой кофе в подарок» и контакты
с живой картой.

Сборка не нужна — открой `index.html` или подними любой статический сервер.
