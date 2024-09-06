import './App.css';
import { NavBar } from './components/NavBar/NavBar';
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer';
import { ItemCount } from './components/ItemCount/ItemCount';

function App() {
  return (
    <div className="App">
      <header>
        <NavBar />
      </header>
      <div className='cardsContainer'>
        <ItemListContainer />
      </div>
      <div className='divContador'>
        <ItemCount initial={1} stock={7} onAdd={(quantity) => console.log('Cantidad agregada ', quantity)} />
      </div>
    </div>
  );
}

export default App;
