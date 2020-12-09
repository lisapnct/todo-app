import "./App.css";
import { useState } from "react";
import ItemList from "./components/ItemList/ItemList";

function App() {
  const [input, setInput] = useState("");
  const [items, setItems] = useState([]);
  const [filteredItems, setFilteredItems] = useState([]);
  const [filter, setFilter] = useState('all')

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

  const handleFilter = (status) =>  {
    if(status === 'active') setFilteredItems(items.filter(e => !e.isCompleted));
    else if(status === 'completed') setFilteredItems(items.filter(e => e.isCompleted));
    setFilter(status);
  };

  const displayedItems = filter === 'all' ? items : filteredItems;

  return (
    <div className="App">
      <h1>#todo</h1>
      <button onClick={() => handleFilter('all')}>All</button>
      <button onClick={() => handleFilter('active')}>Active</button>
      <button onClick={() => handleFilter('completed')}>Completed</button>
      <hr/>
      <input onChange={(event) => setInput(event.target.value)} type="text" />
      <button onClick={() => addItem(input)}>add</button>
      <ItemList items={displayedItems} handleComplete={completeItem} />
    </div>
  );
}

export default App;
