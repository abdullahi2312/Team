import Header from "./component/Header"
import Home from "./Pages/Home"
import About from "./Pages/About"
import Product from "./Pages/Product"
import Contact from "./Pages/Contact"
import { Routes,Route } from "react-router-dom"
import Data from "./Xoogta/Data"
import View from "./Pages/View"

function App(){
  return<>
  <Header/>
  <Routes>
    <Route path="/home" element={<Home/>} />
    <Route path="/about" element={<About/>} />
    <Route path="/product" element={<Product Data={Data} />} />
    <Route path="/contact" element={<Contact/>} />
    <Route path="/view/:id" element={<View/>} />
  </Routes>
  </>
}

export default App