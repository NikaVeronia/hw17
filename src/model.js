import { createEvent, createStore, createEffect } from 'effector';

export const addItem = createEvent();

// Эффект для загрузки данных
export const fetchItems = createEffect(async () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(["Item 1", "Item 2", "Item 3"]);
    }, 1000); // Симуляция загрузки данных
  });
});

// Хранилище для списка элементов
export const itemsStore = createStore([])
  .on(addItem, (state, item) => [...state, item]) // Обработка события addItem
  .on(fetchItems.doneData, (_, items) => items); // Обновление списка после загрузки
