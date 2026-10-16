# املاک دیپلمات — راهنمای تصاویر و پرامپت‌های تولید

این سند محل‌های استفاده از تصویر در پروژه، هویت بصری، و پرامپت‌های آمادهٔ تولید عکس را جمع‌آوری می‌کند تا تصاویر Unsplash با دارایی‌های اختصاصی برند جایگزین شوند.

---

## ۱. هویت بصری (برای هماهنگی عکس‌ها)

| عنصر | مقدار |
|------|--------|
| برند | املاک دیپلمات — لوکس، حقوقی، شمیرانات |
| Navy / Primary | `#0F172A` |
| Accent طلایی | `#D97706` |
| پس‌زمینه | `#F8FAFC` |
| فونت UI | Vazirmatn |
| حس کلی | معماری رئال لوکس، آرام، پریمیوم؛ بدون نئون/بنفش مصنوعی |

**قواعد بصری عکس‌ها**

- نور: ساعت طلایی یا نور پنجره نرم؛ accent کهربایی کم
- پالت: slate تیره + کرم/سنگ + چوب گرم
- هیرو و کارت محله: فضای خالی پایین برای گرادیان تیره و متن
- منفی مشترک: `text, watermark, logo, people crowds, purple neon, plastic CGI, oversaturated HDR`

**پیشوند سبک مشترک** (به ابتدای هر پرامپت اضافه شود):

```
Luxury Tehran real-estate editorial photography for brand "Diplomat Estates". Color mood: deep slate navy (#0F172A), warm amber-gold accents (#D97706), soft daylight or golden hour. Ultra-realistic architecture photography, sharp details, natural materials (stone, glass, warm wood), cinematic depth, premium calm atmosphere. No text, no logos, no watermarks, no neon purple lighting, no cartoon, no CGI look.
```

---

## ۲. فهرست محل‌های استفاده از تصویر

| # | محل در UI | فایل / کلید | نوع | ابعاد پیشنهادی |
|---|-----------|-------------|-----|----------------|
| 1 | هیرو صفحه اصلی | `#hero-parallax-img` | بک‌گراند فول‌بلید | 2600×1600 · 16:9 |
| 2–5 | آواتارهای اعتماد هیرو | ۴ `<img>` در هیرو | پرتره دایره‌ای | 256×256 |
| 6–11 | کارت محله‌ها | بخش «محله‌های پرطرفدار» | کاور محله | 1200×800 · 3:2 |
| 12–14 | نظرات مشتریان | بخش Testimonials | آواتار | 256×256 |
| 15 | درباره ما — دفتر | تصویر کنار داستان برند | دفتر / لابی | 1200×1400 · 4:5 |
| 16–19 | تیم مشاوران | صفحه About | پرتره مربعی | 600×600 |
| 20–29 | کاور ۱۰ ملک | `propertiesData[].image` | کارت لیستینگ | 1200×800 |
| — | گالری / تور مجازی | `gallery` / `tourRooms` | اتاق‌های داخلی | 1200×800 |
| — | آواتار مشاور روی ملک | `agent.avatar` | پرتره | 300×300 |
| — | لوگو / فاویکون | `/logo.svg`, `/favicon.svg` | SVG (جنریت لازم نیست) | — |

### مسیر پیشنهادی فایل‌ها پس از تولید

```
public/images/
  hero/
    hero-main.webp
  avatars/
    trust-01.webp … trust-04.webp
    testimonial-01.webp … testimonial-03.webp
    agent-arash.webp
    agent-sara.webp
    agent-kianoush.webp
    agent-navid.webp
  neighborhoods/
    elahiye.webp
    niavaran.webp
    zaferanieh.webp
    velenjak.webp
    saadat-abad.webp
    shahrak-gharb.webp
  about/
    office-zaferanieh.webp
  properties/
    nv-101/
      cover.webp
      living.webp
      kitchen.webp
      master.webp
      roof.webp
    nv-102/ …
    …
```

### اولویت تولید

1. هیرو  
2. شش محله  
3. ده کاور ملک  
4. تیم و آواتارها  
5. دفتر درباره ما  
6. اتاق‌های گالری / تور  

---

## ۳. پرامپت‌ها

### ۳.۱ هیرو اصلی

**نسبت:** 16:9 · روی تصویر اورلی تیره می‌آید.

```
Ultra-wide cinematic exterior of a modern luxury penthouse villa on a hillside overlooking a dense megacity at dusk, floor-to-ceiling glass, warm amber interior lights glowing, dark slate stone facade, infinity edge terrace, soft golden hour haze over mountains behind the city, dramatic but elegant real-estate hero background, shallow atmospheric depth, photorealistic, shot on 35mm, high dynamic range, empty of people, space in the center for dark gradient overlay and white typography.
```

**خروجی پیشنهادی:** `public/images/hero/hero-main.webp`

---

### ۳.۲ آواتارهای اعتماد هیرو (+ مشابه نظرات)

| نقش | فایل پیشنهادی | پرامپت |
|-----|---------------|--------|
| خریدار مرد ۳۰–۴۰ | `avatars/trust-01.webp` | `Professional headshot of a confident Middle Eastern man in his mid-30s, soft natural window light, navy blazer, warm amber catchlights in eyes, clean studio-neutral background soft gray, friendly trustful expression, circular crop friendly, photorealistic portrait 85mm f/1.8` |
| مالک مرد ۴۰ | `avatars/trust-02.webp` | `Portrait of a successful Middle Eastern property owner, early 40s, trimmed beard, charcoal suit, calm authoritative smile, soft Rembrandt lighting, slate-gray backdrop, premium real-estate client look` |
| سرمایه‌گذار زن ۳۵ | `avatars/trust-03.webp` | `Professional portrait of an elegant Middle Eastern businesswoman mid-30s, dark hair, cream blouse and navy blazer, soft warm key light with amber warmth, confident smile, clean gray background` |
| مشتری مرد ۳۰ | `avatars/trust-04.webp` | `Natural candid-style professional headshot of a young Middle Eastern man around 30, open-collar shirt, approachable smile, soft daylight, muted slate background` |

**نظرات مشتریان**

| نام UI | پرامپت کوتاه |
|--------|--------------|
| رضا ک. (خریدار) | پرتره مرد ~۴۰، خریدار لوکس — مشابه trust-02 با لبخند گرم‌تر |
| سارا م. (فروشنده) | پرتره زن ~۳۵، فروشنده ویلا — مشابه trust-03 |
| امیرحسام ن. (سرمایه‌گذار) | مرد ~۳۵، ظاهر رسمی سرمایه‌گذار — مشابه trust-01 با کت تیره‌تر |

---

### ۳.۳ کارت‌های محله

| محله | فایل | پرامپت |
|------|------|--------|
| الهیه / فرشته | `neighborhoods/elahiye.webp` | `Luxury low-rise modern villa street in an elite Tehran neighborhood at soft sunset, manicured trees, stone and glass architecture, quiet exclusive residential lane, warm amber light on facades, premium lifestyle real-estate cover photo, 3:2` |
| نیاوران / کامرانیه | `neighborhoods/niavaran.webp` | `Upscale hillside residential towers and classic luxury villas with mountain backdrop, dense green canopy, golden hour, affluent northern Tehran atmosphere, cinematic wide shot for neighborhood card` |
| زعفرانیه / محمودیه | `neighborhoods/zaferanieh.webp` | `Elegant tower-in-garden luxury residential complex with tall plane trees, polished stone lobby entrance visible, soft morning light, exclusive garden-tower aesthetic, photoreal` |
| ولنجک | `neighborhoods/velenjak.webp` | `High-rise modern luxury residences facing mountain slopes, large glass balconies, dramatic elevation and skyline, cool blue hour with warm window amber lights` |
| سعادت‌آباد | `neighborhoods/saadat-abad.webp` | `Contemporary mid-rise apartment buildings on a clean wide boulevard, modern Iranian urban luxury, bright midday soft light, fresh new-construction feel, tidy landscaping` |
| شهرک غرب | `neighborhoods/shahrak-gharb.webp` | `Modern duplex villa with private garden and pool in a planned western Tehran suburb, white and stone facade, clear sky, lifestyle luxury exterior, welcoming afternoon light` |

---

### ۳.۴ دفتر درباره ما

```
Interior of a premium real-estate brokerage office boardroom in a luxury high-rise, floor-to-ceiling glass with soft city view, walnut wood and brushed brass accents, navy leather chairs around a long stone table, warm amber accent lighting, marble floor, sophisticated professional atmosphere, empty of people or one blurred silhouette only, photorealistic architectural interior, vertical 4:5 composition with dark gradient space at bottom for caption overlay.
```

**خروجی:** `public/images/about/office-zaferanieh.webp`

---

### ۳.۵ تیم مشاوران

| نام / نقش | فایل | پرامپت |
|-----------|------|--------|
| مهندس آرش راد — نیاوران | `agent-arash.webp` | `Corporate portrait of a Middle Eastern male real-estate senior consultant mid-40s, navy suit, subtle gold tie pin, standing three-quarter against soft slate office backdrop, confident expert look, square crop, warm professional lighting` |
| سارا فرهمند — الهیه | `agent-sara.webp` | `Corporate portrait of a Middle Eastern woman luxury contract manager mid-30s, tailored charcoal blazer, pearl earring, poised smile, soft amber-warm key light, square crop for card avatar` |
| کیانوش شمس — برج‌باغ | `agent-kianoush.webp` | `Portrait of a stylish Middle Eastern male engineer-consultant early 40s, dark turtleneck under blazer, modern architectural lobby background softly blurred, premium tower-garden specialist vibe` |
| نوید یزدانی — سعادت‌آباد | `agent-navid.webp` | `Approachable corporate headshot of a Middle Eastern male rental specialist early 30s, light gray blazer, open smile, bright clean office light, square crop` |

همان فایل‌ها را برای `agent.avatar` در `propertiesData` هم استفاده کنید.

---

### ۳.۶ املاک (کاور + اتاق‌های کلیدی)

برای هر ملک کاور بسازید؛ سپس ۱–۲ اتاق از `tourRooms` را متمایز تولید کنید (از تکرار یک صحنه در همه گالری‌ها پرهیز کنید).

#### NV-101 — پنت‌هاوس ۳۲۰م نیاوران

| نقش | پرامپت |
|-----|--------|
| کاور | `Ultra-luxurious rooftop penthouse terrace with 360° city and mountain view at blue hour, glass pavilion gazebo, outdoor jacuzzi, warm amber interior spill light, empty terrace furniture in charcoal and cream, cinematic architectural photo` |
| سالن | `Grand open-plan living room with 4.2m ceiling, floor-to-ceiling thermal windows, slab stone floors, floating fireplace, Bose speakers subtle, minimal luxury furniture in cream and navy, soft daylight` |
| آشپزخانه | `Gaggenau luxury kitchen with matte polyurethane cabinets, island, dirty kitchen glimpse, polished stone counters, museum lighting` |
| مستر | `Royal master suite king bed, walk-in closet, Hansgrohe fixtures glimpse, soft warm lighting, panoramic window` |
| روف | همان حس کاور با نور روز ملایم‌تر |

#### NV-102 — آپارتمان ۲۱۰م الهیه

```
Cover: Modern single-unit luxury apartment exterior/terrace overlooking lush Elahiyeh gardens, warm stone and walnut interior visible through glass, soft afternoon light. Interior living: open salon with tall windows, parquet floor, 20m furnished terrace, Bosch semi-furnished kitchen, king master bedroom with wall-hung fixtures.
```

#### NV-103 — ویلای ۴۵۰م شهرک غرب

```
Cover: Minimal modern duplex villa with private landscaped garden and heated outdoor pool, 20m street frontage feel, white stone facade, evening ambient lights. Interiors: double-height salon with floating walnut staircase and glass rail, island kitchen Miele appliances, master overlooking garden pool.
```

#### NV-104 — ۱۶۵م سعادت‌آباد (رهن و اجاره)

```
Bright south-facing luxury apartment living room, Dehbid stone floor, high-gloss Austrian cabinets kitchen, clean modern family home, soft midday light, mid-luxury (not ultra-palace), tidy and inviting for rental listing cover.
```

#### NV-105 — برج‌باغ ۲۶۰م زعفرانیه

```
Cover: Lobby of a 5-star hotel-like residential garden-tower, 6m ceiling, slab stone and walnut, soft chandelier amber light. Also: spa indoor pool with glass wall facing garden, panoramic mountain-view living room, terrace kitchen.
```

#### NV-106 — اداری ۱۸۰م ولنجک

```
Modern premium office open-plan with frameless glass partitions, VIP boardroom with conference screen, reception desk in stone and brass, fiber-ready tech vibe, north-facing street facade office tower interior, cool professional daylight with warm wood accents.
```

#### NV-107 — عمارت ۶۰۰م کامرانیه

```
Cover: Neo-classical modern triplex mansion facade in travertine, tall windows, landscaped courtyard. Interiors: 5m ceiling salon with handcrafted plaster details, private indoor spa pool with rock waterfall, home cinema 12 seats, glass hydraulic elevator hint.
```

#### NV-108 — ۱۴۰م قیطریه (دید پارک)

```
Apartment living room with floor-to-ceiling windows overlooking dense green park trees, soft filtered daylight, serene residential luxury, balcony with park view, warm wood and stone interiors, lifestyle cover photo.
```

#### NV-109 — پنت‌هاوس ۴۰۰م ولنجک

```
Iconic glass infinity pool cantilevered on a high-rise penthouse terrace above Tehran and Tochal mountains at sunset, warm amber interior lights, 100m roof garden, ultra-modern Poliform interiors, cinematic hero listing cover.
```

#### NV-110 — ۱۲۰م رهن کامل سعادت‌آباد

```
Clean renovated mid-range apartment living room, bright southern light, new MDF kitchen, porcelain tile floors, calm quiet residential building feel, realistic rental listing photography (honest, not over-glamorized).
```

---

## ۴. نگاشت جایگزینی در کد

پس از قرار دادن فایل‌ها در `public/images/`:

1. **هیرو** — `src` مربوط به `#hero-parallax-img` را به `/images/hero/hero-main.webp` تغییر دهید.
2. **محله‌ها** — شش `<img>` بخش محله‌ها را به مسیرهای `neighborhoods/` وصل کنید.
3. **About / تیم** — تصویر دفتر و چهار پرتره مشاوران را به‌روز کنید.
4. **داده‌ها** — در `propertiesData` فیلدهای `image`, `gallery`, `tourRooms[].image`, `agent.avatar` را به مسیرهای محلی تغییر دهید.
5. **فرمت** — ترجیحاً WebP با کیفیت ۸۰–۸۵؛ برای هیرو عرض حداقل ۲۶۰۰px.

---

## ۵. چک‌لیست قبل از انتشار

- [ ] همه عکس‌ها بدون متن/واترمارک
- [ ] پالت هماهنگ با navy + amber
- [ ] هیرو و محله‌ها فضای خالی پایین برای اورلی دارند
- [ ] کاور املاک متمایز از هم هستند (تکرار صحنه نیست)
- [ ] آواتارها crop مربعی/دایره‌ای تمیز دارند
- [ ] لوگو همچنان از `/logo.svg` لود می‌شود
- [ ] lazy-loading روی کارت‌های لیستینگ حفظ شده

---

*آخرین به‌روزرسانی: بر اساس وضعیت فعلی `index.html` و هویت بصری Tailwind برند دیپلمات.*
