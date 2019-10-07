import React, {useState, useEffect} from 'react';
import axios from 'axios'
import imagen from './cryptomonedas.png';
import Formulario from './components/Formulario'
import Cotizacion from './components/Cotizacion'


function App() {

  const [getMoneda, setMoneda] = useState('')
  const [getCriptomoneda, setCriptomoneda] = useState('')
  const [getSpinner, setSpinner] = useState(false)
  const [getResult, setResult] = useState({})

  useEffect(()=>{
    if(getMoneda.length){
      const cotizarCriptomoneda = async () => {
        let url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${getCriptomoneda}&tsyms=${getMoneda}`
  
        setSpinner(true)
        const resultado = await axios.get(url)
        setResult(resultado.data.DISPLAY[getCriptomoneda][getMoneda])
        setSpinner(false)
      }
      cotizarCriptomoneda()
    }
  },[getMoneda, getCriptomoneda])

  const _spinner = () => {
    if(getSpinner){
      return(
        <div className="spinner">
          <div className="rect1"></div>
          <div className="rect2"></div>
          <div className="rect3"></div>
          <div className="rect4"></div>
          <div className="rect5"></div>
        </div>
      )
    }else if(Object.entries(getResult).length){
      return <Cotizacion result={getResult}/>
    }
  }

  return (
    <div className="container"> 
      <div className="row">
        <div className="one-half column">
          <img src={imagen} alt="criptomonedas" className="logotipo"/>
        </div>
        <div className="one-half column">
          <h1>Cotiza Criptomonedas al Instante</h1>
          <Formulario
            setMonedaParent={setMoneda}
            setCriptomonedaParent={setCriptomoneda}
          />
          {_spinner()}
        </div>
      </div>
    </div>
  );
}

export default App;
