# 📢 UserAlert - سیستم هشدار پیشرفته برای رابط کاربری وب

[![version](https://img.shields.io/badge/version-1.0.0-blue.svg)](#)
[![license](https://img.shields.io/badge/license-MIT-green.svg)](#)
[![jquery](https://img.shields.io/badge/require-jQuery%203.x%2B-ff69b4.svg)](https://jquery.com/)

کتابخانه **UserAlert** یک سیستم هشدار (Notification) زیبا و تعاملی برای رابط کاربری وب است که با استفاده از jQuery توسعه داده شده. این ابزار به شما کمک می‌کند پیام‌هایی مانند موفقیت، خطا، هشدار، یا تاییدیه را به شکلی زیبا و قابل شخصی‌سازی به کاربر نمایش دهید.

---

## 🧩 ویژگی‌ها

- 🚀 بدون نیاز به کتابخانه‌های سنگین
- ⏱ دارای تایمر با نوار زمان
- ✋ قابلیت توقف تایمر توسط کاربر
- 🔄 انیمیشن باز/بسته شدن پیام
- 🔘 دکمه‌های تایید و لغو
- 🎨 رنگ‌بندی سفارشی برای هر پیام
- 🖼 پشتیبانی از آیکون دلخواه از [Tabler Icons](https://tabler.io/icons)
- 📱 طراحی رسپانسیو و قابل استفاده در موبایل و دسکتاپ

---

## 📦 نصب

### 1. افزودن jQuery

```html
<script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
```

### 2. افزودن فایل‌های موردنیاز

```html
<link rel="stylesheet" href="userAlert.css">
<script src="userAlert.js"></script>
```

### 3. افزودن فونت آیکون‌های Tabler (در صورت استفاده از `type: "custom"`)

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@tabler/icons-webfont@latest/dist/tabler-icons.min.css"/>
```

---

## 🛠 نحوه استفاده

```js
userAlert({
  type: "success",
  title: "عملیات موفق",
  message: "اطلاعات با موفقیت ذخیره شد.",
  timer: 10
});
```

---

## ⚙️ پارامترها

| پارامتر             | نوع      | پیش‌فرض                                | توضیح                                                                 |
|----------------------|-----------|-----------------------------------------|------------------------------------------------------------------------|
| `type`               | string    | `"success"`                             | نوع پیام: `success`, `info`, `warning`, `error`, `custom`             |
| `icon_name`          | string    | `"icons"`                               | فقط برای `type: "custom"` استفاده می‌شود. نام آیکون از [Tabler Icons](https://tabler.io/icons) |
| `title`              | string    | `"UserAlert"`                           | عنوان پیام                                                            |
| `message`            | string    | `""`                                    | محتوای پیام (نمایش در بدنه قابل باز/بسته شدن)                        |
| `footer`             | string    | `"This message closes in {timer} seconds."` | متن پاورقی هشدار، امکان درج شمارش معکوس با `{timer}`              |
| `timer`              | number    | `10`                                    | مدت زمان نمایش هشدار بر حسب ثانیه                                     |
| `show_stop_timer`    | boolean   | `true`                                  | نمایش گزینه توقف تایمر                                               |
| `stop_timer_text`    | string    | `"Click to stop."`                      | متن مربوط به توقف تایمر                                              |
| `customColor`        | string    | `""`                                    | رنگ دلخواه برای هشدار (جایگزین رنگ پیش‌فرض)                          |
| `confirm`            | boolean   | `false`                                 | نمایش دکمه‌های تایید و لغو                                            |
| `confirm_btn`        | string    | `"Confirm"`                             | متن دکمه تایید                                                        |
| `cancel_btn`         | string    | `"Cancel"`                              | متن دکمه لغو                                                          |
| `onConfirm`          | function  | `null`                                  | تابع اجراشونده هنگام تایید                                            |
| `onCancel`           | function  | `null`                                  | تابع اجراشونده هنگام لغو                                              |

---

## 📋 مثال‌ها

### ✅ هشدار ساده موفقیت

```js
userAlert({
  type: "success",
  title: "عملیات موفق",
  message: "تغییرات با موفقیت ذخیره شد."
});
```

---

### ⚠️ هشدار با تایید و لغو

```js
userAlert({
  type: "warning",
  title: "حذف اطلاعات",
  message: "آیا مطمئن هستید؟",
  confirm: true,
  confirm_btn: "بله، حذف کن",
  cancel_btn: "خیر",
  onConfirm: () => alert("تایید شد"),
  onCancel: () => alert("لغو شد")
});
```

---

### 🎨 هشدار با رنگ سفارشی

```js
userAlert({
  title: "هشدار سفارشی",
  message: "این پیام با رنگ خاص نمایش داده می‌شود.",
  customColor: "#8e44ad",
  timer: 6
});
```

---

### 🖼 استفاده از آیکون دلخواه از Tabler

برای این کار باید `type` را روی `custom` قرار دهید و نام آیکون مورد نظر خود را از [Tabler Icons](https://tabler.io/icons) بردارید. مثلاً اگر آیکون شما `brand-discord` است:

```js
userAlert({
  type: "custom",
  icon_name: "brand-discord",
  title: "هشدار سفارشی",
  message: "این هشدار با آیکون انتخابی شما نمایش داده شده.",
  customColor: "#7289da",
  timer: 8
});
```

---

## 🔧 وابستگی‌ها

- jQuery نسخه ۳.۶ یا بالاتر
- فایل فونت آیکون Tabler (در صورت استفاده از آیکون سفارشی)

---

## 🖼 ساختار DOM

هشدارها در عنصر `#userAlertsWrapper` درج می‌شوند. ساختار داخلی به شکل زیر است:

```
.userAlert__main
 ├─ .userAlert__header
 ├─ .userAlert__body
 └─ .userAlert__footer
```

---

## 📜 مجوز

این کتابخانه تحت لایسنس **MIT** منتشر شده است. استفاده آزاد برای پروژه‌های شخصی و تجاری.

---

## 📮 مشارکت

اگر پیشنهادی برای بهبود عملکرد، طراحی یا امکانات کتابخانه دارید، خوشحال می‌شویم آن را از طریق Pull Request یا Issue با ما در میان بگذارید.
