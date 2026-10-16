# املاک دیپلمات — راهنمای تصاویر و پرامپت‌های تولید

این سند محل‌های استفاده از تصویر در پروژه، هویت بصری، وضعیت فعلی دارایی‌ها، و پرامپت‌های تولید/بازتولید را جمع‌آوری می‌کند.

**وضعیت کلی (اکتبر ۲۰۲۶):** تصاویر برند جایگزین Unsplash شده‌اند و در `index.html` با پیشوند `public/` وصل‌اند. فرمت فعلی JPG/PNG است (نه WebP).

---

## ۱. هویت بصری (برای هماهنگی عکس‌ها)

| عنصر | مقدار |
|------|--------|
| برند | املاک دیپلمات — لوکس، حقوقی، شمیرانات |
| Navy / Primary | `#0F172A` |
| Accent طلایی | `#D97706` |
| پس‌زمینه | `#F8FAFC` |
| فونت UI | Vazirmatn (`public/Fonts/`) |
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

## ۲. لوگو و فاویکون

| فایل | نقش | ابعاد تقریبی | استفاده در UI |
|------|-----|--------------|---------------|
| `public/logo-mark.png` | نشان (مارک) | ۴۵۲×۵۱۲ | هدر، فوتر، واترمارک، badgeها، apple-touch |
| `public/logo-full.png` | لوگوی کامل | ۵۹۶×۸۰۰ | بخش هویت بصری About |
| `public/favicon.png` | فاویکون | ۶۴×۶۴ | `<link rel="icon">` |
| `public/logo.svg` / `favicon.svg` | نسخهٔ قدیمی SVG | — | در UI اصلی استفاده نمی‌شود؛ نگه داشته شده |

---

## ۳. فهرست دارایی‌ها و وضعیت اتصال

مسیرها در کد به شکل `public/images/...` هستند (ریشهٔ سرو Vite + `index.html` در ریشهٔ پروژه).

| # | محل در UI | مسیر فعلی | نوع | ابعاد فعلی | وضعیت |
|---|-----------|-----------|-----|------------|--------|
| 1 | هیرو | `public/images/hero/hero-main.jpg` | بک‌گراند فول‌بلید | ۱۳۷۶×۷۶۸ | ✅ وصل |
| 2–5 | آواتار اعتماد هیرو | `avatars/trust-01.jpg` … `trust-04.jpg` | پرتره دایره‌ای | ۱۰۲۴×۱۰۲۴ | ✅ وصل |
| 6–11 | کارت محله‌ها | `neighborhoods/*.jpg` | کاور محله | عمدتاً ۸۹۶×۱۲۰۰ · شهرک غرب ۱۳۷۶×۷۶۸ | ✅ وصل |
| 12–14 | نظرات | `avatars/testimonial-01.jpg` … `03.jpg` | آواتار | ۱۰۲۴×۱۰۲۴ | ✅ وصل |
| 15 | درباره ما — دفتر | `about/office-zaferanieh.jpg` | دفتر / لابی | ۸۹۶×۱۲۰۰ | ✅ وصل |
| 16 | تیم — آرش | `avatars/agent-arash.jpg` | پرتره | ۱۰۲۴×۱۰۲۴ | ✅ وصل |
| 17 | تیم — سارا | `avatars/agent-sara.jpg` | پرتره | ۱۰۲۴×۱۰۲۴ | ⚠️ فایل هست؛ در About هنوز آیکون placeholder؛ در `propertiesData` برای سارا `avatar: ""` |
| 18–19 | تیم — کیانوش / نوید | `agent-kianoush.jpg` / `agent-navid.jpg` | پرتره | ۱۰۲۴×۱۰۲۴ | ✅ وصل |
| 20–29 | کاور ۱۰ ملک | `properties/nv-101-cover.jpg` … `nv-110-cover.jpg` | لیستینگ | عمدتاً ۱۳۷۶×۷۶۸ · nv-103: ۸۹۶×۱۲۰۰ | ✅ وصل |
| — | گالری / تور مجازی | فعلاً همان کاورها (و گاهی about) | اتاق داخلی اختصاصی نیست | — | ⚠️ placeholder مشترک |
| — | لوگو / فاویکون | بخش ۲ | PNG | — | ✅ وصل |

### درخت فایل فعلی

```
public/
  logo-mark.png
  logo-full.png
  favicon.png
  images/
    hero/
      hero-main.jpg
    avatars/
      trust-01.jpg … trust-04.jpg
      testimonial-01.jpg … testimonial-03.jpg
      agent-arash.jpg
      agent-sara.jpg
      agent-kianoush.jpg
      agent-navid.jpg
    neighborhoods/
      elahiye.jpg
      niavaran.jpg
      zaferanieh.jpg
      velenjak.jpg
      saadat-abad.jpg
      shahrak-gharb.jpg
    about/
      office-zaferanieh.jpg
    properties/
      nv-101-cover.jpg … nv-110-cover.jpg
```

### کارهای باقی‌مانده

1. وصل کردن `agent-sara.jpg` در کارت About و پر کردن `agent.avatar` برای فایل‌های سارا فرهمند  
2. تولید اتاق‌های متمایز گالری/تور (الان کاورها تکرار می‌شوند)  
3. اختیاری: تبدیل به WebP و ارتقای رزولوشن هیرو (هدف پیشنهادی ≥ ۲۶۰۰px عرض)  
4. اختیاری: یکدست‌کردن نسبت محله‌ها (چندتاشان عمودی ۸۹۶×۱۲۰۰ هستند)

---

## ۴. پرامپت‌ها (برای بازتولید یا ارتقا)

### ۴.۱ هیرو اصلی

**نسبت پیشنهادی:** 16:9 · روی تصویر اورلی تیره می‌آید · فایل فعلی: `hero/hero-main.jpg`

```
Ultra-wide cinematic exterior of a modern luxury penthouse villa on a hillside overlooking a dense megacity at dusk, floor-to-ceiling glass, warm amber interior lights glowing, dark slate stone facade, infinity edge terrace, soft golden hour haze over mountains behind the city, dramatic but elegant real-estate hero background, shallow atmospheric depth, photorealistic, shot on 35mm, high dynamic range, empty of people, space in the center for dark gradient overlay and white typography.
```

---

### ۴.۲ آواتارهای اعتماد هیرو (+ مشابه نظرات)

| نقش | فایل | پرامپت |
|-----|------|--------|
| خریدار مرد ۳۰–۴۰ | `avatars/trust-01.jpg` | `Professional headshot of a confident Middle Eastern man in his mid-30s, soft natural window light, navy blazer, warm amber catchlights in eyes, clean studio-neutral background soft gray, friendly trustful expression, circular crop friendly, photorealistic portrait 85mm f/1.8` |
| مالک مرد ۴۰ | `avatars/trust-02.jpg` | `Portrait of a successful Middle Eastern property owner, early 40s, trimmed beard, charcoal suit, calm authoritative smile, soft Rembrandt lighting, slate-gray backdrop, premium real-estate client look` |
| سرمایه‌گذار زن ۳۵ | `avatars/trust-03.jpg` | `Professional portrait of an elegant Middle Eastern businesswoman mid-30s, dark hair, cream blouse and navy blazer, soft warm key light with amber warmth, confident smile, clean gray background` |
| مشتری مرد ۳۰ | `avatars/trust-04.jpg` | `Natural candid-style professional headshot of a young Middle Eastern man around 30, open-collar shirt, approachable smile, soft daylight, muted slate background` |

**نظرات مشتریان**

| نام UI | فایل | پرامپت کوتاه |
|--------|------|--------------|
| رضا ک. (خریدار) | `testimonial-01.jpg` | پرتره مرد ~۴۰، خریدار لوکس — مشابه trust-02 با لبخند گرم‌تر |
| سارا م. (فروشنده) | `testimonial-02.jpg` | پرتره زن ~۳۵، فروشنده ویلا — مشابه trust-03 |
| امیرحسام ن. (سرمایه‌گذار) | `testimonial-03.jpg` | مرد ~۳۵، ظاهر رسمی سرمایه‌گذار — مشابه trust-01 با کت تیره‌تر |

---

### ۴.۳ کارت‌های محله

| محله | فایل | پرامپت |
|------|------|--------|
| الهیه / فرشته | `neighborhoods/elahiye.jpg` | `Luxury low-rise modern villa street in an elite Tehran neighborhood at soft sunset, manicured trees, stone and glass architecture, quiet exclusive residential lane, warm amber light on facades, premium lifestyle real-estate cover photo, 3:2` |
| نیاوران / کامرانیه | `neighborhoods/niavaran.jpg` | `Upscale hillside residential towers and classic luxury villas with mountain backdrop, dense green canopy, golden hour, affluent northern Tehran atmosphere, cinematic wide shot for neighborhood card` |
| زعفرانیه / محمودیه | `neighborhoods/zaferanieh.jpg` | `Elegant tower-in-garden luxury residential complex with tall plane trees, polished stone lobby entrance visible, soft morning light, exclusive garden-tower aesthetic, photoreal` |
| ولنجک | `neighborhoods/velenjak.jpg` | `High-rise modern luxury residences facing mountain slopes, large glass balconies, dramatic elevation and skyline, cool blue hour with warm window amber lights` |
| سعادت‌آباد | `neighborhoods/saadat-abad.jpg` | `Contemporary mid-rise apartment buildings on a clean wide boulevard, modern Iranian urban luxury, bright midday soft light, fresh new-construction feel, tidy landscaping` |
| شهرک غرب | `neighborhoods/shahrak-gharb.jpg` | `Modern duplex villa with private garden and pool in a planned western Tehran suburb, white and stone facade, clear sky, lifestyle luxury exterior, welcoming afternoon light` |

---

### ۴.۴ دفتر درباره ما

```
Interior of a premium real-estate brokerage office boardroom in a luxury high-rise, floor-to-ceiling glass with soft city view, walnut wood and brushed brass accents, navy leather chairs around a long stone table, warm amber accent lighting, marble floor, sophisticated professional atmosphere, empty of people or one blurred silhouette only, photorealistic architectural interior, vertical 4:5 composition with dark gradient space at bottom for caption overlay.
```

**فایل:** `public/images/about/office-zaferanieh.jpg`

---

### ۴.۵ تیم مشاوران

| نام / نقش | فایل | پرامپت |
|-----------|------|--------|
| مهندس آرش راد — نیاوران | `agent-arash.jpg` | `Corporate portrait of a Middle Eastern male real-estate senior consultant mid-40s, navy suit, subtle gold tie pin, standing three-quarter against soft slate office backdrop, confident expert look, square crop, warm professional lighting` |
| سارا فرهمند — الهیه | `agent-sara.jpg` | `Corporate portrait of a Middle Eastern woman luxury contract manager mid-30s, tailored charcoal blazer, pearl earring, poised smile, soft amber-warm key light, square crop for card avatar` |
| کیانوش شمس — برج‌باغ | `agent-kianoush.jpg` | `Portrait of a stylish Middle Eastern male engineer-consultant early 40s, dark turtleneck under blazer, modern architectural lobby background softly blurred, premium tower-garden specialist vibe` |
| نوید یزدانی — سعادت‌آباد | `agent-navid.jpg` | `Approachable corporate headshot of a Middle Eastern male rental specialist early 30s, light gray blazer, open smile, bright clean office light, square crop` |

همان فایل‌ها را برای `agent.avatar` در `propertiesData` استفاده کنید (سارا هنوز خالی است).

---

### ۴.۶ املاک (کاور + اتاق‌های کلیدی)

کاورها موجودند (`properties/nv-XXX-cover.jpg`). برای گالری/تور، ۱–۲ اتاق متمایز از `tourRooms` تولید کنید و از تکرار یک کاور در همهٔ گالری‌ها پرهیز کنید.

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

## ۵. نگاشت در کد

| بخش | محل در `index.html` | مسیر |
|-----|---------------------|------|
| فاویکون / apple-touch | `<head>` | `public/favicon.png`, `public/logo-mark.png` |
| لوگوی هدر | ناوبری | `public/logo-mark.png` |
| هیرو | `#hero-parallax-img` | `public/images/hero/hero-main.jpg` |
| اعتماد هیرو | ۴ `<img>` | `public/images/avatars/trust-0N.jpg` |
| محله‌ها | بخش «محله‌های پرطرفدار» | `public/images/neighborhoods/*.jpg` |
| نظرات | Testimonials | `public/images/avatars/testimonial-0N.jpg` |
| دفتر About | تصویر کنار داستان برند | `public/images/about/office-zaferanieh.jpg` |
| تیم | کارت‌های مشاور | `avatars/agent-*.jpg` (سارا: هنوز placeholder) |
| املاک | `propertiesData[].image` / `gallery` / `tourRooms` | `public/images/properties/nv-XXX-cover.jpg` |
| آواتار مشاور ملک | `agent.avatar` | مسیرهای `agent-*.jpg` (سارا خالی) |

برای فایل جدید: در `public/images/` بگذارید و `src` / فیلد داده را به همان الگوی `public/images/...` به‌روز کنید.

---

## ۶. چک‌لیست

- [x] عکس‌های اصلی بدون وابستگی به Unsplash
- [x] لوگو از PNG برند (`logo-mark` / `logo-full` / `favicon`)
- [x] هیرو، محله‌ها، کاور املاک، اعتماد، نظرات، دفتر About وصل‌اند
- [ ] آواتار سارا فرهمند در About و `propertiesData` وصل شود
- [ ] اتاق‌های گالری/تور متمایز (نه تکرار کاور)
- [ ] پالت و کیفیت بصری یکدست با navy + amber بازبینی شود
- [ ] اختیاری: WebP و رزولوشن بالاتر هیرو
- [ ] lazy-loading روی کارت‌های لیستینگ حفظ شود

---

*آخرین به‌روزرسانی: هم‌تراز با دارایی‌های فعلی `public/` و ارجاعات `index.html` (JPG + لوگوهای PNG).*
