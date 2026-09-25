# Утро — landing для кофейни

Demo landing page for a small coffee shop: light minimalism, warm cream palette,
typographic price list with dot leaders, real photos. No frameworks, no builders.

**Live:** [hmsusbusas-png.github.io/utro-coffee](https://hmsusbusas-png.github.io/utro-coffee/)

> This is a portfolio demo: the coffee shop is fictional, but the structure,
> copy and prices are what a real client would get.

## What's inside

- Split hero with an arched photo — the signature detail
- Three facts block instead of generic "why choose us"
- Menu as a typographic price list (dot leaders, two columns) — not cards
- Staggered photo gallery, reviews, promo sticker
- Contacts with hours, phone and an embedded Yandex Map
- Fonts: [Prata](https://fonts.google.com/specimen/Prata) + [Golos Text](https://fonts.google.com/specimen/Golos+Text) (native Cyrillic)

## Run

No build step:

```bash
python -m http.server 8000
# → http://localhost:8000
```

## Structure

```
├── index.html
├── css/style.css
├── js/main.js          # small: scroll reveal only
├── assets/img/         # photos (unsplash, free to use)
└── favicon.svg
```

## Contact

Telegram: [@lev_backend](https://t.me/lev_backend)

---

## RU

Демо-лендинг для маленькой кофейни: светлый минимализм, тёплая кремовая
палитра, типографский прайс-лист с точечными лидерами, живые фото.

**Живой сайт:** [hmsusbusas-png.github.io/utro-coffee](https://hmsusbusas-png.github.io/utro-coffee/)

> Это демо для портфолио: кофейня вымышленная, но структура, тексты и цены —
> такие, какие получил бы реальный заказчик.

Внутри: сплит-hero с арочным фото, блок «три причины» вместо шаблонных
преимуществ, меню как типографский прайс (не карточки), галерея со смещённой
сеткой, отзывы, акция-стикер, контакты с Яндекс-картой.

Сборка не нужна — открой `index.html` или подними любой статический сервер.

Связь: Telegram [@lev_backend](https://t.me/lev_backend)
