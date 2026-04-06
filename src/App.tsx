import { BrowserRouter, Route, Routes } from "react-router-dom"
import Watertank from "./components/Watertank"


const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Watertank />} />
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App