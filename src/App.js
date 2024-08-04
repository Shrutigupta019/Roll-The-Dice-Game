import { useState } from 'react';
import './App.css';
import StartGame from './components/StartGame';
import PlayGame from './components/PlayGame';

function App() {
  const [isGameStarted,setIsGameStarted] = useState(false)
  const toogleGamePlay = () =>{
    setIsGameStarted((prev) => !prev);
  }
  return (
    <div className="App">
      {isGameStarted ? <PlayGame/> : <StartGame toggle={toogleGamePlay}/>}
    </div>
  );
}

export default App;
