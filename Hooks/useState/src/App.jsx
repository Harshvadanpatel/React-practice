import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  
  
  const [car, setCar] = useState({
    name: "BMW",
    model: "2025",
    engine: "v8",
    color: "red"
  })
  const color = () => {
    setCar({
      name: "Mercedes",
      model: "2015",
      engine: "v6",
      color: "blue"
    })
  }
  

  return (
    <>
      <h1>My favorite car is a {car.name}</h1>
      <br />
      <h2>Its color is {car.color}, the model is {car.model}, and it has a {car.engine} engine</h2>
      <br />
      <button onClick={color}>Change</button>
    </>
  )
}

export default App
