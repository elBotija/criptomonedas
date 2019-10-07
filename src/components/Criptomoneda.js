import React from 'react';

export default function Criptomoneda({cripto}) {
  return(
    <option value={cripto.Name}>{cripto.FullName}</option>
  )
}