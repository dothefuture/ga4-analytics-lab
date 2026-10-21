# Работа 8 · GA4: отчёты и исследования

Практика по теме 10 на том же ресурсе GA4 и сайте, которые использовались
в темах 5–9.

- Презентация: https://algorthimization-course-vvodnoe.vercel.app/op03-informacionnye-tehnologii/lessons/10-ga4-explorations/index.html
- Материалы: https://algorthimization-course-vvodnoe.vercel.app/op03-informacionnye-tehnologii/lessons/10-ga4-explorations/materials.html
- Сайт: https://ga4-analytics-lab-two.vercel.app/
- Measurement ID из кода: `G-0DJ198TV26`
- Основной кейс: `instagram / backend_guide`
- Маршрут: `/guide.html` → `/contacts.html`

## Что сделать в GA4

1. Зафиксировать Property, часовой пояс, права и завершённый период.
2. В Reports проверить Traffic acquisition, Landing page, Pages and screens,
   Events и Tech. Сравнить Instagram с `(direct)`.
3. В Free form сделать таблицу трафика и отдельную вкладку для
   `generate_lead`.
4. Создать сегменты Instagram Sessions и Direct Sessions.
5. Собрать закрытую воронку `session_start → cta_click → form_start →
   generate_lead`, переходы Indirectly, без Within.
6. Отдельно проверить Open, Within 10 minutes и Breakdown, затем вернуть
   базовые условия.
7. Создать прямой Path после `cta_click` и обратный Path перед
   `generate_lead`.
8. Для итогового кейса применить одновременно `source=instagram` и
   `campaign=backend_guide`.
9. Выгрузить результаты и сверить GA4 с уникальными непустыми
   `request_id` в Google Sheets.

Если данных или прав недостаточно, сохраняется честное пустое состояние
и описывается ограничение. Числа из презентации не считаются результатом
работы.

## Что сдаётся

- заполненный [`homework_08.md`](homework_08.md);
- экспорты GA4 в `exports/`;
- PNG-подтверждения в `screens/` по списку
  [`screens/README.md`](screens/README.md);
- заполненный [`CHECKLIST.md`](CHECKLIST.md).

Коммит: `hw-08: GA4 reports and explorations`, ветка `main`.
