import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cart from "./Pages/Cart/Cart";
import Contact from "./Pages/Contact/Contact";
import Home from "./Pages/Home/Home";
import Layout from "./Pages/Layout/Layout";
import Shop from "./Pages/Shop/Shop";
import Product from "./Pages/Product/Product";
import './App.css'
function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout/>}>
      <Route index element={<Home/>} />
      <Route path="/Cart"  element={<Cart/>}/>
      <Route path="/Contact" element={<Contact/>}/>
      <Route path="/Shop" element={<Shop/>}/>
      <Route path='/Product/:id' element={<Product/>} />
      </Route>
    </Routes>
    </BrowserRouter>
    </>
  )
}
export default App