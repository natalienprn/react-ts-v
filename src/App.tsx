
import './App.css'
import { Route, Routes } from "react-router-dom"
import Home from "./pages/home"
import Info from "./pages/info"
import cardData from './data/data'
import SearchPage from './pages/searchpage'

function App() {


  return (
    <>
      <Routes>

        <Route path='/' element={<Home />} />
        <Route path="/product/:id" element={<Info cardData={cardData} />} />
        <Route path="/result" element={<SearchPage />}/>
      </Routes>
    </>
  )
}

export default App
