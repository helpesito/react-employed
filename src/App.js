import { useState } from 'react';
import './App.css';
import Header from './componentes/Header/Header';
import Formulario from './componentes/formulario/Formulario';
import Miorg from './componentes/Miorg';

function App() {
  
  const [mostrarFormulario,actualizarMostrar] = useState(true)

  //ternario --> condicion? seMuestra | noSeMuestra
  //condicion && seMuestra
  const cambiarMostra = () => {
      actualizarMostrar(!mostrarFormulario)
  }
  return (
    <div>
      <Header/>
      {mostrarFormulario ? <Formulario/> : <></> }
      <Miorg cambiarMostra={cambiarMostra}/>
    </div>
  );
}

export default App;
