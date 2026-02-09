import { BrowserRouter, Routes,Route } from "react-router-dom"
import Login from "./pages/Login"
import Dashboard from "./pages/Dashboard"
import Profile from "./pages/Profile"
import NotFound from "./pages/NotFound"

function App() {

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login/>} />
         <Route path="/dashboard" element={<Dashboard/>} />
         <Route path="/profile" element={<Profile/>} />
        <Route path="*" element={<NotFound/>} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
