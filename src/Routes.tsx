import { HashRouter, Route, Routes } from "react-router-dom"
import Home from "./components/Home"
import Details from './components/Details'

const RootRoutes = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/details" element={<Details/>} />
      </Routes>
    </HashRouter>
  )
}

export default RootRoutes
