import React from 'react';

const Cotizacion = ({result}) => {
  return (  
    <div className="resultado">
      <h2>Resultado</h2>
      <p className="precio">El precio es <span>{result.PRICE}</span></p>
      <p>Precio más alto del día: <span> {result.HIGHDAY}</span></p>
      <p>Precio más Bajo del día: <span> {result.LOWDAY}</span></p>
      <p>Variacion ultimas 24hs: <span> {result.CHANGEPCT24HOUR}</span></p>
      <p>Ultima Actualizacion: <span> {result.LASTUPDATE}</span></p>
    </div>
  )
}
 
export default Cotizacion;