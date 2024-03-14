
import React, { useState } from "react";
import './../styles/App.css';

const App = () => {
   const [count,setCount] = useState(0);

   function handleClick() {
      setCount(count);
   }

  return (
    <div>
        <p>Button clicked {count} times</p>
        <button onClick={handleClick}>clicked</button>
    </div>
  )
}

export default App
