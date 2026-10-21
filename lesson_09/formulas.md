# Формулы DataLens

## GA4 трафик и GA4 generate_lead

```text
Дата = DATE_PARSE([date])
source = IF([utm_source] = "(direct)", "direct", [utm_source])
campaign = IF([utm_campaign] = "(direct)" OR [utm_campaign] = "(not set)", "not_set", [utm_campaign])
```

Поля `sessions`, `active_users`, `lead_events`: тип «Целое число»,
агрегация «Сумма». Сумма `active_users` по дням не равна уникальным
пользователям за весь период.

## Заявки

```text
Дата = DATE([created_at])
source = [utm_source]
campaign = [utm_campaign]
Lead Count = COUNTD([request_id])
Done Count = COUNTD(IF([status] = "done", [request_id], NULL))
```

`name` и `email` скрываются в датасете и не добавляются в чарты.

## Сводная таблица

Три датасета связываются только по `source`, `campaign` и `Дата`. `null`
означает отсутствие пары в конкретном датасете и не заменяется нулём.
