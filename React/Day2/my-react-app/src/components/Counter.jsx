import { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h1>Count : {count}</h1>
      <button
        className='btn btn-outline-primary'
        onClick={()=>setCount(count+1)}
      >+</button> <button
        className='btn btn-outline-primary'
        onClick={()=>setCount(count-1)}
      >-</button>
    </div>
  )
}

export default Counter
