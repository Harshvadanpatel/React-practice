import { useCallback, useEffect, useState, useRef} from 'react'

function App() {
  const [length, setLength] = useState(8)
  const [numbers, setNumbers] = useState(false)
  const [characters, setCharacters] = useState(false)
  const [Password, setPassword] = useState('')

  const passwordRef = useRef(null)

  const passwordGenerator = useCallback(() => {
    let pass = ""
    let str = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
    if (numbers) {
      str += "0123456789"
    }
    if (characters) {
      str += "@#$%&"
    }

    for (let i = 1; i <= length; i++) {
      const randomIndex = Math.floor(Math.random() * str.length + 1)
      pass = str[randomIndex] + pass
    }

    setPassword(pass)



  }, [length, numbers, characters, setPassword])


  const passwordClipBord = useCallback(()=>{
    passwordRef.current?.select()
    passwordRef.current?.setSelectionRange(0, 103)
    window.navigator.clipboard.writeText(Password)
  },[Password])


  useEffect(() => { passwordGenerator() }, [length, numbers, characters, passwordGenerator])


  return (
    <>
      <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 text-orange-500 bg-gray-800'>
        <h1 className='text-white text-center my-3'>Password generator</h1>
        <div className='flex shadow rounded-lg overflow-hidden mb-4'>
          <input type="text"
            value={Password}
            className='outline-none w-full py-1 px-3 bg-white text-gray-600'
            placeholder='Password'
            readOnly
            ref={passwordRef}
          />
          <button 
          onClick={passwordClipBord}
          className='bg-blue-700 text-white px-3 py-0.5 shrink-0'>
            Copy
          </button>
        </div>
        <div className='flex text-sm gap-x-2'>
          <div className='flex item-center gap-x-1'>
            <input type="range"
              min={6}
              max={100}
              value={length}
              className='cursor-pointer'
              onChange={(e) => setLength(e.target.value)}
            />
            <label htmlFor="">Length:({length})</label>
          </div>
          <div className='flex item-center gap-x-1'>
            <input type="checkbox" defaultChecked={numbers} id="numbersInput" onChange={() => {
              setNumbers((prev) => !prev)
            }} />
            <label htmlFor="numbersInput">Numbers</label>
          </div>

          <div className='flex item-center gap-x-1'>
            <input type="checkbox" defaultChecked={characters} id="numbersInput" onChange={() => {
              setCharacters((prev) => !prev)
            }} />
            <label htmlFor="numbersInput">Character</label>
          </div>

        </div>
      </div>
    </>
  )
}

export default App
