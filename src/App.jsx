import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { NavBar } from './components/NavBar/NavBar';
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer';
import { ItemDetailContainer } from './components/ItemDetailContainer/ItemDetailContainer';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <header>
          <NavBar />
        </header>
        <Routes>
        <Route path='/' element={<ItemListContainer greeting={'Productos'} />}/>
        <Route path='/category/:categoryId' element={<ItemListContainer greeting={'Productos'} />}/>
        <Route path='/item/:itemId' element={<ItemDetailContainer/>}/>
        <Route path='*' element={<h1>404 NOT FOUND</h1>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
