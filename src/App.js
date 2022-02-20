import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import html2canvas from 'html2canvas';

function App() {
  /*   linea1 es un variable
    setLinea1 es otra variable la cual nos permitira enviar un valor a linea1
    useState es un metodo que nos devolvera un array con dos valores
    
    */
  const [linea1, setLinea1] = useState('');
  const [linea2, setLinea2] = useState('');
  const [imagen, setImagen] = useState('');

  /*  para obtener esa direccion usamos "debugger" y revisamos las
   propiedades del input  */
  const onChangeLinea1 = function (evento) {
    setLinea1(evento.target.value)
  }

  const onChangeLinea2 = function (evento) {
    setLinea2(evento.target.value)
  }
  const onChangeImagen = function (evento) {
    setImagen(evento.target.value)
  }

  const onClickExportar = function (evento) {
    
    html2canvas(document.querySelector("#meme")).then(canvas => {
      var img    = canvas.toDataURL("image/png");
      var link = document.createElement('a');
      link.download = 'meme.png';
      link.href = img;
      link.click();
  });
  };
  

  return (
    <div className="App">

      <select onChange={onChangeImagen}>
        <option value="fire" >Casa en llamas</option>
        <option value="futurama" >Futurama</option>
        <option value="history" >History channel</option>
        <option value="matrix" >Matrix</option>
        <option value="philosoraptor" >philosoraptor</option>
        <option value="smart" >Smart Guy</option>
      </select> <br />

      <input onChange={onChangeLinea1} type="text" placeholder='linea1'></input><br />
      <input onChange={onChangeLinea2} type="text" placeholder='linea2'></input><br />
      <button onClick={onClickExportar}>Exportar</button>

      <div className="meme" id="meme">

        <span >{linea1}</span> <br />
        <span>{linea2}</span>
        <img src={"/imagen/" + imagen +".jpg"} />
      </div>

    </div>
  );
}

export default App;
