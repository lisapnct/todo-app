import "./App.css";
import { useState, useEffect } from "react";
import ItemList from "./components/ItemList/ItemList";

function App() {
  const [input, setInput] = useState("");
  const [items, setItems] = useState([]);
  const [filteredItems, setFilteredItems] = useState([]);
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    handleFilter(filter);
  }, [items]);

  const addItem = (item) => {
    if (item) {
      const createId = () => {
        let id = Math.floor(Math.random() * 100);
        if (items.find((e) => e.id === id))
          id = Math.floor(Math.random() * 100);
        return id;
      };
      let newItem = {
        label: item,
        id: createId(),
        isCompleted: false,
      };
      setItems((items) => [...items, newItem]);
      setInput("");
    }
  };

  const completeItem = (id) => {
    let index = items.findIndex((e) => e.id === id);
    let modItems = [...items];
    modItems[index].isCompleted = !modItems[index].isCompleted;
    setItems(modItems);
  };

  const handleFilter = (status) => {
    if (status === "active")
      setFilteredItems(items.filter((e) => !e.isCompleted));
    else if (status === "completed")
      setFilteredItems(items.filter((e) => e.isCompleted));
    setFilter(status);
  };

  const deleteItem = (id) => {
    setItems(items.filter((e) => e.id !== id));
  };

  const deleteAllItem = (id) => {
    setItems(items.filter((e) => !e.isCompleted));
  };

  const displayedItems = filter === "all" ? items : filteredItems;

  return (
    <div className="App">
      <h1>#todo</h1>
      <button onClick={() => handleFilter("all")}>All</button>
      <button onClick={() => handleFilter("active")}>Active</button>
      <button onClick={() => handleFilter("completed")}>Completed</button>
      <hr />
      <input
        className="item-input"
        value={input}
        onChange={(event) => setInput(event.target.value)}
        type="text"
      />
      <button className="btn-blue" onClick={() => addItem(input)}>
        add
      </button>
      <ItemList
        items={displayedItems}
        tab={filter}
        handleComplete={completeItem}
        handleDelete={deleteItem}
      />
      {filter === "completed" && displayedItems.length > 0 && (
        <button onClick={() => deleteAllItem()}>Delete All</button>
      )}
    </div>
  );
}

export default App;
