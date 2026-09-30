# GA4 Analytics Lab

Шаблон для ОП.03 «Информационные технологии», темы 5 и последующих занятий по веб-аналитике.

## Начало работы

1. Нажмите **Use this template → Create a new repository**, создайте собственную копию.
2. В VS Code выберите **Clone Repository**, клонируйте свою копию и откройте папку.
3. Для локального просмотра используйте Live Server в VS Code.
4. В Vercel импортируйте свой репозиторий. Framework Preset: **Other**, Root Directory: корень; Build Command: пусто (при необходимости Override), Output Directory: **.**.
5. После Deploy откройте постоянный Production URL.

## Структура

```text
index.html
about.html
contacts.html
css/style.css
js/script.js
README.md
```

Статический HTML/CSS/JavaScript: npm и сборка не нужны. Навигация работает на всех страницах.
Контактная форма отправляет POST в Apps Script Web App; запись идёт в лист `leads`.
Готовый приёмник: `apps-script/Code.gs` (подставьте ID таблицы и URL `/exec` в `contacts.html`).

## Установка аналитики

В исходном шаблоне Google Tag отсутствует — это часть практической работы.
Получите код своего **учебного** веб-потока в GA4 и вставьте один экземпляр сразу после открывающего `<head>` в **каждый** из трёх HTML-файлов.
Сохраните файлы, выполните Commit и Push, дождитесь нового Ready Deployment.
Посетите Home, About, Contacts и проверьте реальные события в Realtime.

Не меняйте рабочий поток ByteCamp. Не публикуйте секреты, пароли или личные данные.
Measurement ID не является секретом; используйте только ID своего учебного потока.

## UTM-проверка

Подставьте собственный Production URL:

```text
https://YOUR-PROJECT.vercel.app/?utm_source=telegram&utm_medium=social&utm_campaign=ga4_lab
```

Откройте ссылку в новой приватной сессии. Не принимайте новую вкладку за новую сессию GA4.

