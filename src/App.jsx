import { useState } from 'react';
import useCartStore from "./useCartStore";
import './App.css'

function App() {
  const [input, setInput] = useState("");
  const { items, addItem, removeItem } = useCartStore();

  function PrevenDefalt(e){
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
                onChange={(e) => setInput(e.target.value)}/>

             <button className='list-button'>Add</button>
           </form>
           <div className='list-container'>
           {items.map((item, index) => (
          <p key={index} onClick={() => removeItem(item)}>
            {item}
          </p>
        ))}
           </div>
          </div>
        </div>
    </>
  )
}

export default App
