import { useState , useRef } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useEffect } from 'react'

function App() {
  const [value, setValue] = useState(0)
  const count = useRef(0) 
  // useRef is used to persist a value across renders without causing re-renders
  // It does not trigger a re-render when the value changes
  // count.current = value // This will not cause a re-render
  // useRef is often used to store mutable values that do not need to trigger a re-render when changed
  // For example, you can use it to store a reference to a DOM element or to keep track of a value that does not affect the UI

  useEffect(()=>{
    count.current = value // This will not cause a re-render
  })



  return (
    <>
      <button onClick={()=>{setValue(prev=>prev+1)}}>+1</button>
      <h1>increment the count {value}</h1>
      <button onClick={()=>{setValue(prev=>prev-1)}}>-1</button>

      <h1>I've rendered {value}</h1>
    </>
  )
}

export default App
