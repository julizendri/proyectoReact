import './App.css';
import NavBar from './components/NavBar/NavBar';
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer';

function App() {
  return (
    <div className="App">
      <header>
        <NavBar />
      </header>
      <div className='cardsContainer'>
        <ItemListContainer />
      </div>
    </div>
  );
}

export default App;
