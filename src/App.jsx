
import './App.css'

function App() {


  return (
    <>
      <div className='container'>
        <h1>WISH LIST</h1>
        <div className='wish-list'>
           <form className='list-form'>
             <input className='list-input' type="text" placeholder='Add a new wish' />
             <button className='list-button'>Add</button>
           </form>
           <div className='list-container'>
            <h1>1</h1>
           </div>
          </div>
        </div>
    </>
  )
}

export default App
