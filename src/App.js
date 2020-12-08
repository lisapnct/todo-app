import "./App.css";
import { useState } from "react";
import ItemList from "./components/ItemList/ItemList";

function App() {
  const [input, setInput] = useState("");
  const [items, setItems] = useState([]);

  const addItem = (item) => {
    setItems((items) => [...items, item]);
  };

  return (
    <div className="App">
      <h1>#todo</h1>
      <input onChange={(event) => setInput(event.target.value)} type="text" />
      <button onClick={() => addItem(input)}>add</button>
      <ItemList items={items} />
    </div>
  );
}

export default App;
