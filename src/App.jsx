import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Header from './components/Header'
import { Middle } from './components/Middle'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header/>
      {/* <Middle/> */}
    </>
  )
}

export default App
