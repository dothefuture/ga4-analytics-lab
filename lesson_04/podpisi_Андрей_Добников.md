# Практикум «Младший разработчик: первая неделя»

МДК.01.01 · аннотации типов и окружение проекта

- Студент: Андрей Добников
- Группа: —
- Сдано: 08.10.2026

## Рецензия

| Письмо | Результат | Баллы |
|---|---|---|
| 1. Рабочее место | 18 из 18 | 2 / 2 |
| 2. Подписи по заявкам | 10 из 10 | 4 / 4 |
| 3. Вызовы и подпись | 40 из 40 | 2 / 2 |
| 4. Подпись вручную | 4 из 4 | 2 / 2 |
| **Итого** |  | **10 / 10 · отлично** |

## Письмо 1. Рабочее место

### Порядок команд

1. `Распаковать архив и открыть папку проекта в VS Code: File -> Open Folder, затем Terminal -> New Terminal`
2. `python -m venv .venv`
3. `Активировать окружение: .venv\Scripts\activate в Windows или source .venv/bin/activate в macOS и Linux`
4. `python -m pip install -r requirements.txt`
5. `python main.py`

Лишние шаги:

- `python -m pip freeze > requirements.txt`
- `deactivate`
- `pip install rich`

### Первый коммит

| Файл или папка | Куда |
|---|---|
| `main.py` | В репозиторий |
| `app/calculator.py` | В репозиторий |
| `tests/test_calculator.py` | В репозиторий |
| `requirements.txt` | В репозиторий |
| `README.md` | В репозиторий |
| `.gitignore` | В репозиторий |
| `.venv/` | Остается на компьютере |
| `__pycache__/` | Остается на компьютере |
| `app/__pycache__/calculator.cpython-312.pyc` | Остается на компьютере |
| `.env` | Остается на компьютере |

### Вопросы из чата

| Стажер | Причина |
|---|---|
| Денис | Пакет установлен в другой Python, не в окружение проекта |
| Лиза | Окружение не активно в этом терминале |
| Ксюша | Зависимости проекта не записаны в `requirements.txt` |
| Глеб | Нет правил `.gitignore` для окружения и кэша |
| Марат | Список зависимостей снят не в окружении проекта |
| Оля | VS Code использует другой интерпретатор, не из `.venv` |
| Тимур | Окружение перенесено с другого компьютера |

## Письмо 2. Подписи по заявкам

```python
def average_grade(grades: list[int]) -> float:
```

```python
def count_absences(marks: list[str]) -> int:
```

```python
def order_total(items: dict[str, int], discount: int = 0) -> int:
```

```python
def find_guest_phone(guests: dict[str, str], name: str) -> str | None:
```

```python
def is_membership_active(end_date: date, today: date) -> bool:
```

```python
def parse_quantity(value: int | str) -> int:
```

```python
def distance_bounds(distances: list[float]) -> tuple[float, float]:
```

```python
def print_receipt(lines: list[str], width: int = 32) -> None:
```

```python
def average_by_student(journal: dict[str, list[int]]) -> dict[str, float]:
```

```python
def format_name(last_name: str, first_name: str, middle_name: str | None = None) -> str:
```

## Письмо 3. Вызовы и подпись

### `def average_grade(grades: list[int]) -> float:`

Подходит:

```python
average_grade([5, 4, 4, 3])
average_grade([])
average_grade(grades=[3, 3])
score: float = average_grade([5, 5])
```

Не подходит:

```python
average_grade([5, "4", 3])
average_grade((5, 4, 3))
average_grade(5)
score: int = average_grade([5, 5])
```

### `def find_guest_phone(guests: dict[str, str], name: str) -> str | None:`

Подходит:

```python
find_guest_phone(guests, "Анна")
find_guest_phone({}, "Анна")
phone: str | None = find_guest_phone(guests, "Анна")
```

Не подходит:

```python
find_guest_phone("Анна", guests)
find_guest_phone(guests, None)
find_guest_phone({"Анна": 79001112233}, "Анна")
phone: str = find_guest_phone(guests, "Анна")
find_guest_phone(guests, "Анна").startswith("+7")
```

### `def format_name(last_name: str, first_name: str, middle_name: str | None = None) -> str:`

Подходит:

```python
format_name("Иванов", "Пётр")
format_name("Иванов", "Пётр", "Сергеевич")
format_name("Иванов", "Пётр", None)
format_name(first_name="Пётр", last_name="Иванов")
```

Не подходит:

```python
format_name("Иванов")
format_name("Иванов", "Пётр", middle_name=1)
format_name("Иванов", None)
format_name("Иванов", "Пётр", "Сергеевич", "Москва")
```

### `def parse_quantity(value: int | str) -> int:`

Подходит:

```python
parse_quantity(5)
parse_quantity("5")
parse_quantity("пять")
total: int = parse_quantity("3") + 2
```

Не подходит:

```python
parse_quantity(5.5)
parse_quantity(None)
parse_quantity(["5"])
label: str = parse_quantity("3")
```

### `def print_receipt(lines: list[str], width: int = 32) -> None:`

Подходит:

```python
print_receipt(["Латте", "Круассан"])
print_receipt(["Латте"], 40)
print_receipt([], width=20)
```

Не подходит:

```python
print_receipt(["Латте"], "40")
print_receipt("Латте")
print_receipt(["Латте", 250])
result = print_receipt(["Латте"])
print_receipt(["Латте"], width=None)
```

## Письмо 4. Подпись вручную

```python
def best_student(averages: dict[str, float]) -> str | None:
```

```python
def add_bonus(balance: int, visits: int, is_vip: bool = False) -> int:
```

```python
def split_address(address: str) -> tuple[str, str]:
```

```python
def unique_authors(books: list[tuple[str, str]]) -> set[str]:
```
