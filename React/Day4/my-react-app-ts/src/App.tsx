// import { useState } from 'react'
import './App.css'
import Message from './components/message';

function App() {
  // const [count, setCount] = useState<number>(100);
  let message = {msg:"I am Spiderman",to:"Aunt May",from:"Peter"} 
  return (
    <>
      <Message messagedetails={message}/>
    </>
  )
}

export default App
