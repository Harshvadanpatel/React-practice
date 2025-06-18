import { useState } from 'react'

function App() {
const [count, setCount] = useState(0);

const increment = () => {
  
   // This will not trigger a re-render
  setCount(count+1); // This will trigger a re-render
  console.log(`Incrementing count${count}`);
  if(count>=20){
    
  }

}

const Decrement = ()=>{
  if(setCount<0){
    console.log("Count cannot be less than 0");

    return;
    
  }
  setCount(count-1);
  
  console.log(`Decrementing count${count}`);
}
 
return(

  <>
  <h1>Hello Harshvadan</h1>
  <h2>Count: {count}</h2>
  <button onClick={increment} disabled={count>=20}>Increment</button>
  <button onClick= {Decrement} disabled = {count<=0}>Decrement</button>
  {count >= 20 && count >= 0 && (
  <p>Count is 20 or more and not less than 0!</p>
)}
  </>
)
}

export default App
