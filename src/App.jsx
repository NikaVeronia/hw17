import React, { useState } from "react";
import { useStore } from "effector-react";
import { itemsStore, addItem, fetchItems } from "./model";

const App = () => {
  const items = useStore(itemsStore); // Получение данных из хранилища
  const [inputValue, setInputValue] = useState("");

  const handleAddItem = () => {
    if (inputValue.trim()) {
      addItem(inputValue); // Добавление элемента в список
      setInputValue(""); // Очистка поля ввода
    }
  };

  const handleFetchItems = () => {
    fetchItems(); // Загрузка данных
  };

  return (
    <div style={{ padding: "20px"}}>
      <h1>Effector App</h1>
      <div style={{ margin: "10px"}}>
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Введите элемент"
        />
        <button onClick={handleAddItem}style={{ margin: "10px"}}>Добавить</button>
      </div>
      <button onClick={handleFetchItems}>Загрузить данные</button>
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default App;
