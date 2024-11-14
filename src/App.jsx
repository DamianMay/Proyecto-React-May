import './App.css'
import Navbar from './components/NavBar/Navbar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { CartProvider } from './components/Context/CartContext'
import Cart from './components/Cart/Cart'
import Footer from './components/Footer/Footer'
import Banner from './components/Banner/Banner'
import Checkout from './components/Checkout/Checkout'
import "animate.css"



function App() {

  return (
    <div id="root">
      <BrowserRouter>
        <CartProvider>
          <Navbar />
          <div className="main-content">
            <Routes> 
              <Route path='/Proyecto-React-May' element={ <ItemListContainer saludo= {<Banner />} />} />
              <Route path="/category/:idCategory" element={ <ItemListContainer/>}></Route>
              <Route path='/detail/:idProduct' element={ <ItemDetailContainer/>}></Route>
              <Route path='/cart'  element= {<Cart />}></Route>
              <Route path='/checkout'  element= {<Checkout />}></Route>
            </Routes>
          </div>
          <Footer />
        </CartProvider>
      </BrowserRouter>
    </div>
  )
}

export default App
