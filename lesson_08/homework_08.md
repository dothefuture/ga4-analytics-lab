# Домашняя работа № 8 · GA4: отчёты и исследования

**Дисциплина:** ОП.03 «Информационные технологии»

| Поле | Значение |
|---|---|
| Номер работы | 8 |
| Тема работы | GA4: отчёты и исследования |
| Дата оформления репозитория | 21.10.2026 |
| Сайт | https://ga4-analytics-lab-two.vercel.app/ |
| Measurement ID | `G-0DJ198TV26` |
| Source | `instagram` |
| Campaign | `backend_guide` |

## Подтверждено кодом проекта

- На опубликованном сайте доступен маршрут `/guide.html` →
  `/contacts.html` с сохранением UTM-параметров.
- В коде отправляются `cta_click` и `generate_lead`.
- Форма создаёт `request_id` и передаёт `utm_source`, `utm_medium` и
  `utm_campaign` в Apps Script.
- Значения по умолчанию для прямого трафика: `direct / none / not_set`.

## Условия анализа

ФИО, группа, GA4 Property, часовой пояс, права, период анализа и дата
экспорта должны быть взяты из учебного аккаунта. В репозитории этих данных
нет, поэтому здесь они не подставлены.

## Reports

Заполняется только фактическими значениями из GA4.

| Вопрос | Измерение | Метрика | Значение | Подтверждение |
|---|---|---|---|---|
| Объём кампании | Session source / medium + Session campaign | Sessions |  | `screens/01-reports-traffic.png` |
| Стартовая страница | Landing page | Sessions |  | `screens/02-reports-landing.png` |
| Нажатия CTA | Event name = cta_click | Event count |  | `screens/03-reports-events.png` |
| Начало формы | Event name = form_start | Event count |  | `screens/03-reports-events.png` |
| Отправка | Event name = generate_lead | Event count |  | `screens/03-reports-events.png` |
| Сеансы с отправкой | Session source / medium | Session key event rate |  | `screens/04-reports-comparison.png` |

## Free form

- Название исследования и вкладок:
- Rows / Values:
- Filters:
- Сегменты и их тип:
- Состав Key events:
- Файл экспорта:
- Подтверждение: `screens/05-free-form.png`

## Funnel

- Условия: Closed, Indirectly, без Within.
- Фильтры: `source=instagram` И `campaign=backend_guide`.
- Период:

| Шаг | Пользователи | Дошли дальше, % | Потеря, чел. | Потеря, % |
|---|---:|---:|---:|---:|
| session_start |  |  |  |  |
| cta_click |  |  |  |  |
| form_start |  |  |  |  |
| generate_lead |  | — | — | — |

Подтверждение: `screens/06-funnel.png`.

## Path

- Starting point: `cta_click`.
- Reverse Path Ending point: `generate_lead`.
- Метрика и Node type:
- Наблюдаемые действия:
- Подтверждение: `screens/07-path.png`.

## Сверка с Google Sheets

- Период / часовой пояс / фильтры:
- Число строк:
- Число уникальных непустых `request_id`:
- Расхождения с GA4 и возможные причины:
- Подтверждение: `screens/08-sheets-reconciliation.png`.

## Итог

Наблюдение, ограничение, гипотеза и план проверки заполняются после
получения фактических данных. Примерные значения не используются.

ИИ использован для оформления структуры репозитория и бланка. Источники
и фактические показатели должны подтверждаться GA4 и Google Sheets.
