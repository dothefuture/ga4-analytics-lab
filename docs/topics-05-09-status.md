# Статус работ по темам 5-9

Репозиторий `ga4-analytics-lab` закрывает техническую часть сайта для тем 5-7 и служит источником проверок для тем 8-9. Скриншоты из Google Analytics, Google Sheets, ManyChat и Instagram обычно сдаются в рабочем репозитории дисциплины, а не в этом шаблоне сайта.

## Тема 5. Свой сайт, Vercel и Google Tag

- Google Tag установлен на `index.html`, `about.html`, `contacts.html`.
- Measurement ID: `G-0DJ198TV26`.
- После push в GitHub нужно дождаться нового деплоя Vercel и проверить страницы в GA4 Realtime.

## Тема 6. События и параметры GA4

- Главное CTA на `index.html` имеет `id="program-cta"`.
- При клике отправляется событие `cta_click` с параметрами:
  - `button_name: "program"`
  - `page_section: "hero"`
- При отправке формы отправляется событие `generate_lead` с параметром:
  - `lead_source: "contact_form"`

## Тема 7. Контролируемая таблица заявок

- Форма `contacts.html` содержит поля `request_id`, `utm_source`, `utm_medium`, `utm_campaign`.
- Клиентский код заполняет UTM из адресной строки или подставляет значения `direct`, `none`, `not_set`.
- Приемник заявок лежит в `apps-script/Code.gs`.
- В `contacts.html` в атрибут `action` формы подставлен опубликованный URL Apps Script Web App:

```text
https://script.google.com/macros/s/AKfycbxqzmFu4Hn8L-QrQO6ljQOMup8vMdqHc_YsUgdnHwgA1h1MD_0UDilOb7nM7P-Ta-Yl1g/exec
```

Развертывание Apps Script: `Приём заявок с сайта GA4 Analytics Lab`, доступ `Все`, запуск от аккаунта владельца проекта.

## Тема 8. Google Таблицы: подготовка данных

В этом репозитории нет самой Google Таблицы. Для сдачи темы нужны скриншоты/отчет из рабочего репозитория дисциплины: исходный лист, очищенные поля, формулы, повторный импорт CSV v2.

## Тема 9. Instagram -> ManyChat -> заявка

В этом репозитории есть конечная форма и GA4-событие `generate_lead`, но нет настроек Instagram и ManyChat. Для сдачи темы нужны скриншоты цепочки: комментарий, DM, ссылка с UTM, форма, событие GA4, строка в Google Sheets.
