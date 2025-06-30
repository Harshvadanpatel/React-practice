import { useState,useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const[count,setCount]=useState(0)
  const increment = () => {
    setCount(count + 1)
  }

  useEffect(()=>{
    setTimeout(()=>{
      setCount(count=>count+1)
    },2000)
  })


  return (
    <>
      <h1>I have rendered {count} time!!</h1>
      {/* <button onClick={increment}>click me!!</button> */}
    </>
  )
}

export default App
