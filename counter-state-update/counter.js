import { checkPropTypes } from 'prop-types';
import React, {useState} from 'react'

export default function Counter({initialCount}){
  let[count, setCount]= useState(initialCount)

  function incrementCount(){
   setCount(currCount => currCount+1);
   //setCount is am asynvhronously function 
    console.log(count);
  }

  const decrementCount =()=>{
    setCount(count-1);
  }

  useEffect(() => {
    console.log(count);
  }, [count])

  return(
    <div>
      <button onClick={decrementCount}>-</button>
      <span>{count}</span>
      <button onClick={incrementCount}>+</button>
    </div>
  )
}

Counter.prototype={
  initialCount: checkPropTypes.number
}

export default Counter;