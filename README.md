## Node
Versión Node:  v16.14.0

## React - Typescript
Documentación: https://es.reactjs.org/
npx create-react-app calendar --template typescript

## Rudex
Documentación: https://redux.js.org/
yarn add redux
yarn add @types/react-redux

## redux-devtools
Documentación: https://github.com/zalmoxisus/redux-devtools-extension
yarn add redux-devtools-extension

## multi-select
Documentación: https://github.com/hc-oss/react-multi-select-component
yarn add react-multi-select-component

## icons
Documentación: https://github.com/react-icons/react-icons
yarn add react-icons

## Estructura:

App.tsx
App.css
src/
actions/
  index.ts  
  listActions.ts
  notificationAction.ts
assets/
  time.png
components/
  calendar/
      AppCalendar.tsx
      Calendar.tsx
  climate/
    CardClimate.tsx
    WeatherPanel.tsx
  evento/
    Dropdown.tsx
    TodoList.tsx
    TodoListItem.tsx
  modal/
    ModalForm.tsx
    useModal.tsx
hooks/
  useCalendar.ts
  useLocalStorage.ts
reducers/
  listReducer.ts
  notificationReducer.ts
store/
  store.ts
types/
  types.ts


