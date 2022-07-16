import logo from './logo.png';
import './App.css';
import {useState} from "react";
import Juegos from "./components/Juegos";

function App() {
    const [juegos, setJuegos] = useState(null);

    const hacerPeticion = async () => {
        const api = await fetch('https://www.freetogame.com/api/games');
        const games = await api.json();
        const masPopulares = games.slice(0, 12);
        setJuegos(masPopulares);
    };
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="title">Juegos Free To Play</h1>
          {juegos ? (
              <Juegos juegos={juegos} setJuegos={setJuegos} />
              )
          : (<>
              <img src={logo} className="img-home" alt="logo" />
              <button onClick={hacerPeticion} className='btn-search'>Buscar</button>
            </>)
          }
      </header>
    </div>
  );
}

export default App;
