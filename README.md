# LingAlarm Web

LingAlarm'ın tanıtım web sitesi, yasal sayfaları ve destek merkezi. Saf HTML/CSS/JS ile yazılmıştır — build gerektirmez.

Canlı: https://lingalarm.github.io (veya yapılandırıldığı URL)

## Sayfalar

- `index.html` — Landing page
- `delete-account.html` — Hesap silme talimatları (Google Play ve App Store için zorunlu)
- `privacy-policy.html` — Gizlilik politikası (KVKK / GDPR / CCPA uyumlu)
- `terms.html` — Kullanım şartları
- `support.html` — Destek merkezi ve SSS
- `404.html` — Sayfa bulunamadı

## Yapı

```
website/
├── index.html
├── delete-account.html
├── privacy-policy.html
├── terms.html
├── support.html
├── 404.html
├── README.md
└── assets/
    ├── style.css
    └── app.js
```

## Yerel Önizleme

Sadece `index.html` dosyasını bir tarayıcıda açın, veya yerel sunucu başlatın:

```bash
# Python 3
python -m http.server 8080

# Node.js
npx serve .
```

## GitHub Pages ile Yayınlama

1. GitHub'da yeni bir repo oluşturun (ör. `lingalarm-web`).
2. Bu klasörün içeriğini repo'ya yükleyin.
3. Repo ayarlarından **Settings → Pages** bölümüne gidin.
4. **Source**: `Deploy from a branch`.
5. **Branch**: `main`, klasör: `/ (root)`.
6. Kaydedin; birkaç dakika içinde site `https://USERNAME.github.io/lingalarm-web/` adresinde yayına girer.

## Dil Desteği

Site Türkçe ve İngilizce dillerini destekler. Kullanıcının tarayıcı dili otomatik algılanır; header'daki TR/EN düğmesi ile manuel geçiş yapılabilir.

## Güncelleme

İçerik değişikliği: ilgili HTML dosyasındaki `data-lang-section="tr"` ve `data-lang-section="en"` bloklarını güncelleyin.
Son güncelleme tarihini sayfa üst kısmındaki `class="subtitle"` satırından değiştirin.
