
import './App.css';
import Boton from './Componentes/Boton';
import Contador from './Componentes/Contador';
import logo from './imagenes/freecodecamp-logo.png';
import { useState } from 'react';

function App() {
  
  const [numClics, setNumClics] = useState(0);

  const manejarClic = () => {
    console.log(numClics);
    setNumClics(numClics + 1);
  }; 
  
  const reiniciarcont = () => {
    console.log(numClics);
    setNumClics(0)
  };


  return (
    <div className='App'>
      <div className='freecodecamp-logo-contenedor'>
        <img className='freecodecamp-logo'
          src={logo }
          alt='Logo de FreeCodeCamp'
        />
      </div>
      <div className='contenedor-principal'>
        <Contador
        numClics={ numClics }
        />
        <Boton 
          texto='Click'
          click={true}
          manejarClic={ manejarClic }
        />
        <Boton
          texto='Reiniciar'
          click={false}
          manejarClic= { reiniciarcont }
        />
      </div>
    </div>
  );
}

export default App;
