Anna re2u

# Taskana

Планировщик задач: создание, редактирование, удаление задач с приоритетом, отметка выполнения, сортировка списка и переключение светлой/тёмной темы.

## Стек

- **React 19** — функциональные компоненты и хуки: `useState`, `useEffect`, `useRef`, `useCallback`, `useReducer`, `useId`, `useMemo`, `useContext`, `createContext`
- **react-dom** — только `createRoot` (`react-dom/client`) в `main.jsx`.
- **Vite 7**  dev-сервер (Fast Refresh) и сборка.
- **ESLint** и **Prettier** — линт и форматирование.
- **CSS Modules** (`*.module.css`, по одному на компонент) + общие переменные/сброс в `src/assets/styles`. Без CSS-in-JS и без UI-кит библиотек.
- `src/utils/clsx.js` — своя реализация `clsx`, не npm-пакет `clsx`.
- Роутинга нет (`react-router` и т.п. не используется) — всё приложение это один экран.
- Внешнего стейт-менеджера нет (Redux/Zustand и т.п.) — только React Context + `useReducer`/`useState`.
- Тестов и тестового фреймворка в проекте нет.
- Состояние хранится только в памяти — при перезагрузке страницы данные сбрасываются.

## Как запустить

1. Установить зависимости:
```bash
npm ci
```

2. Запустить в dev-режиме (откроется в браузере автоматически):
```bash
npm run dev
```

3. Собрать production-версию:
```bash
npm run build
```

4. Локально посмотреть собранную версию:
```bash
npm run preview
```

5. Проверить код линтером:
```bash
npm run lint
```

6. Отформатировать код / проверить форматирование:
```bash
npm run format
npm run format:check
```

## Структура проекта

```
src/
├── main.jsx                 # точка входа, монтирует <AppLayout /> в #root
├── layouts/
│   └── AppLayout.jsx        # оборачивает приложение в провайдеры контекстов, рендерит Header + Content
├── pages/
│   └── incomingTasks/       # экран "Входящие"
├── components/              # UI-компоненты, каждый в своей папке рядом со своим *.module.css
│   ├── header/, footer/, nav/, sidebar/, mainContainer/, content/   — каркас страницы
│   ├── taskEditor/          # боковая панель создания/редактирования задачи
│   │   ├── taskTitleInput/  # поле "Название"
│   │   ├── prioritySelector/# выбор приоритета
│   │   └── modalFooter/     # кнопки "Создать/Сохранить", "Отмена", "Удалить"
│   ├── taskItems/, tasklist/# список задач и его пустое состояние
│   ├── dropdown/            # дропдаун сортировки
│   ├── themeSwither/        # переключатель темы
│   ├── button/, icon/, illustration/, logo/  # переиспользуемые примитивы
│   └── index.js             # общий баррель-экспорт — импортировать компоненты снаружи через '@/components'
├── contexts/                 # состояние приложения, каждое в своей папке: Provider + Context/hook-доступ
│   ├── tasks/                # список задач (useReducer): addTask, toggleTask, updateTask, deleteTask
│   ├── taskEditor/           # открыта ли панель редактора, в каком режиме (create/edit), какая задача редактируется
│   └── taskSort/             # выбранный вариант сортировки списка
├── hooks/
│   ├── useTaskForm.js        # вся логика формы редактора задачи (useReducer): заголовок, приоритет, сабмит
│   ├── useTheme.js           # состояние светлой/тёмной темы + применение data-theme на <html>
│   ├── useToggle.js          # управление булевым состоянием (переключатели, модалки, дропдауны)
│   └── useDismiss.js         # закрытия UI-элементов по клику вне и по Escape
├── constants/                 # статические константы: опции сортировки, приоритеты, класс фокус-рамки
├── utils/                     # чистые функции: sortTasks, generateId, clsx
└── assets/styles/              # global.css (общие правила), variables.css (цвета/переходы, тема), normalize.css (сброс)
```

## Заметки

- **Состояние вынесено в контексты по зонам ответственности** (`tasks`, `taskEditor`, `taskSort`) — каждый со своим `Provider` и хуком доступа (`useTasks`, `useTaskEditor`, `useTaskSort`)

- **Сложное состояние — через `useReducer`**, а не через несколько связанных `useState` (список задач, форма редактора, состояние панели редактора) Простое одиночное состояние (например, `taskSort`, `useTheme`) оставлено на `useState` 

- **`Button` — один компонент на все виды кнопок в приложении**, нужный вид выбирается пропом `variant` (`accent` — по умолчанию, красная кнопка "Создать" в хедере; ещё есть `priority`, `switch`, `primary`, `secondary`, `dropdown`, `iconSecondary`, `iconNegative`). Отдельного пропа под размер нет — ширину/высоту каждый `variant` задаёт сам через `min-width`/`width` в CSS
`Button.Text` — отдельный статический подкомпонент, просто `<span>` с типографикой для текстовой подписи кнопки — используется всегда, когда у кнопки вообще есть текст.

- **`FOCUS_RING`** (`src/constants/focusRing.js`) — строка `'focus-ring focus-ring'`, класс `focus-ring` продублирован специально: селектор `.focus-ring.focus-ring` в `global.css` за счёт этого получает специфичность в два класса и гарантированно перебивает стили конкретных компонентов без `!important`. Даёт единый на всё приложение вид рамки фокуса (цвет, кольцо `box-shadow`, transition) — стиль задан один раз в `global.css` для `button`/`a`/`textarea`/`select`/`label`/`li`/`[tabindex]`, подключается на любом из них через `clsx(..., FOCUS_RING)` в `className`.  Часть компонентов стилизует фокус не через `FOCUS_RING`, а собственными `:focus-visible`-правилами — так сделано для чекбоксов задач и `PrioritySelector`, потому что там цвет рамки должен совпадать с цветом приоритета, а не быть нейтральным. если фокусу нужен смысловой цвет — свой `:focus-visible`; если нет — `FOCUS_RING`
