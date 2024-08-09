import React from 'react'
import { useState } from 'react'

const App = () => {
  const[count,setcount]=useState(0);
  // const[loading,setloading]=useState(true);


  function  increase ()
   {
    return setcount((count)=>count+1)
    
  }
  function  decrease ()
   {
    return setcount((count)=>count-1)
  
  }
  return (
   
    <div>
      <button onClick={increase}> +</button>
      <div>

        {
          count
        }
      </div>



      <button disabled={count<1} onClick={decrease }>-</button>
    </div>
  )
}

export default App
