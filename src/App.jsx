import { useState } from 'react'

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <h1>Redux View</h1>

     <div class="container">
  <h1>Increment/Decrement counter</h1>
  <h4>using React and Redux</h4>
  
  <div class="quantity">
    <button class="quantity__minus" title="Decrement"><span>-</span></button>
    <input name="quantity" type="text" class="quantity__input" value="0" />
    <button class="quantity__plus" title="Increment"><span>+</span></button>
  </div>
</div>

    </>
  )
}

export default App
