import React, {useState, useEffect} from 'react';
import axios from 'axios'
import Criptomoneda from './Criptomoneda'

export default function Formulario({setMonedaParent, setCriptomonedaParent}){

  const [getCripto, setCripto] = useState([])
  const [getMoneda, setMoneda] = useState('')
  const [getCriptoCotizar, setCriptoCotizar] = useState('')
  const [getError, setError] = useState(false)

  useEffect(() => {
    const getAPI = async () => {
      const url = 'https://min-api.cryptocompare.com/data/top/totaltoptiervolfull?limit=15&tsym=USD';
      const resultado = await axios.get(url)

      setCripto(resultado.data.Data) 
    }
    getAPI()
  },[])

  const cotizarMoneda = e => {
    e.preventDefault()
    if(getMoneda.length && getCriptoCotizar.length){
      setError(false)

      setCriptomonedaParent(getCriptoCotizar)
      setMonedaParent(getMoneda)
    }else{
      setError(true)
    }
  }

  const showError = () =>{
    if(getError) return (<p className="error">Debes completar todos los campos</p>)
  }

  return(
    <form onSubmit={cotizarMoneda} >
      <div className="row">
        <label>Elige tu Moneda</label>
        <select className="u-full-width" onChange={e => setMoneda(e.target.value)}>
          <option value="">- Elige tu moneda -</option>
          <option value="USD">Dolar Estadounidence</option>
          <option value="ARS">Peso Argentino</option>
          <option value="MXN">Peso Mexicano</option>
          <option value="GBP">Libras</option>
          <option value="EUR">Euro</option>
        </select>
      </div>
      <div className="row">
        <label>Elige tu Moneda</label>
        <select className="u-full-width" onChange={e => setCriptoCotizar(e.target.value)}>
          <option value="">- Elige tu criptomoneda -</option>
          {getCripto.map(x => (
            <Criptomoneda key={x.CoinInfo.Id} cripto={x.CoinInfo}/>
          ))}
        </select>
      </div>
      <input type="submit" className="button-primary u-full-width" value="Calcular"/>
      {showError()}
    </form>
  )
}