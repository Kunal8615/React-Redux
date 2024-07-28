import { useState } from 'react'
import store from './Store/Store'

/* store.subscribe(()=> console.log(store.getState()));*/

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <h1>Redux View</h1>

     <div className="container">
  <h1>Increment/Decrement counter</h1>
  <h4>using React and Redux</h4>
  
  <div className="quantity">
    <button className="quantity__minus" title="Decrement"><span>-</span></button>
    <input name="quantity" type="text" className="quantity__input" value="0" />
    <button className="quantity__plus" title="Increment"><span>+</span></button>
  </div>
</div>

    </>
  )
}

export default App
