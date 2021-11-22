import NavBar from './components/Navbar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from "./components/main/details/ItemDetailContainer"
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './styles/css/App.css';

const App = () => {
  return (
    <BrowserRouter>
      <header className="header">
        <NavBar />
      </header>
      <main className="main">
        <h1 className="main__title">Mi Ecommerce</h1>
        <Routes>
          <Route path="/" element={<ItemListContainer />}/>
          <Route path="/category/:idCategory" element={<ItemListContainer />}/>
          <Route path="/item/:idProduct" element={<ItemDetailContainer />}/>
        </Routes>
      </main>
      <footer></footer>
    </BrowserRouter>
  )};
export default App;
