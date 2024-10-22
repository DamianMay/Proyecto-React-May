import './App.css'
import Navbar from './components/NavBar/Navbar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {

  return (
    <div>
      <BrowserRouter>
        <Navbar />

        <Routes> 
          <Route path='/Proyecto-React-May' element={ <ItemListContainer saludo={"De a poco va tomando formar la pagina"} />} />
          <Route path="/category/:idCategory" element={ <ItemListContainer saludo={"Category"} />}></Route>
          <Route path='/detail/:idProduct' element={ <ItemDetailContainer detalle="Detalle"/>}></Route>
        </Routes>
  

      </BrowserRouter>
    </div>
  )
}

export default App
