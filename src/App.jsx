import './App.css'
import Navbar from './components/NavBar/Navbar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'

function App() {

  return (
    <div>
      <Navbar />
      <ItemListContainer saludo={"Proximamente una rica tienda de café"} />
    </div>
  )
}

export default App
