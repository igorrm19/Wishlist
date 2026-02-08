import { useState } from 'react';
import useCartStore from "./useCartStore";
import DeleteSVG from './componets/svgComponents/deleteSvgComponent';
import './App.css'

function App() {
  const [input, setInput] = useState("");
  const { items, addItem, removeItem } = useCartStore();

  function PrevenDefalt(e) {
    e.preventDefault();

    if (!input.trim()) return;

    addItem(input);
    setInput("");
  }


  return (
    <>
      <div className='container'>
        <h1>WISH LIST</h1>
        <div className='wish-list'>
          <form className='list-form' onSubmit={PrevenDefalt}>

            <input
              className='list-input'
              type="text" placeholder='Add a new wish'
              value={input}
              onChange={(e) => setInput(e.target.value)} />

            <button className='list-button'>Add</button>
          </form>
          <div className='list-container'>
            {items.map((item, index) => (
              <div key={index} className="list-item">
                <span>{item}</span>
                <button
                  className="remove-button"
                  onClick={() => removeItem(item)}>
                    <DeleteSVG />
                  </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default App
