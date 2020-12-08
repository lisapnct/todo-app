import "./App.css";
import { useState } from "react";
import ItemList from "./components/ItemList/ItemList";

function App() {
  const [input, setInput] = useState("");
  const [items, setItems] = useState([]);

  const addItem = (input) => {
    let newItem = {
      label: input,
      id: Math.floor(Math.random() * 100),
      isCompleted: false,
    }
    setItems((items) => [...items, newItem]);
  };

  const completeItem = (id) => {
      let index = items.findIndex(e => e.id === id)
      let modItems = [...items];
      modItems[index].isCompleted = !modItems[index].isCompleted 
      setItems( modItems );
  };

  return (
    <div className="App">
      <h1>#todo</h1>
      <input onChange={(event) => setInput(event.target.value)} type="text" />
      <button onClick={() => addItem(input)}>add</button>
      <ItemList items={items} handleComplete={completeItem} />
    </div>
  );
}

export default App;
