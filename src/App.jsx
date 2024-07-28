import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { incNumber, decNumber } from './Actions/index';
import './App.css';

function App() {
  const Mystate = useSelector((state) => state.ChangeTheNumber);
  const dispatch = useDispatch();

  return (
    <>
      <h1>Redux View</h1>

      <div className="container">
        <h1>Increment/Decrement counter</h1>
        <h4>using React and Redux</h4>

        <div className="quantity">
          <button onClick={() => dispatch(decNumber())} className="quantity__minus" title="Decrement">
            <span>-</span>
          </button>
          <input name="quantity" type="text" className="quantity__input" value={Mystate} readOnly />
          <button onClick={() => dispatch(incNumber())} className="quantity__plus" title="Increment">
            <span>+</span>
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
