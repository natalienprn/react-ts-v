// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import { Route, Routes} from "react-router-dom"
import Home from "./pages/home"
import Info from "./pages/info"

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <h1>hello</h1>
      <Routes>
        <Route path='/trademe-react-ts' element = {<Home />} />
        <Route path='/trademe-react-ts/info' element = {<Info />} />

      </Routes>
    </>
  )
}

export default App
