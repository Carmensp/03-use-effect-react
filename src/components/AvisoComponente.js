import React, { useEffect } from 'react'

export const AvisoComponente = () => {
    
    useEffect(() => {
        alert("El componente AvisoComponentese ha montado");

        return () => {
            alert("COMPONENTE DESMONTADO!")
        }
    }, [])

  return (
    <div>
        <hr></hr>
        <h3>Saludos CARMEN que tal estás?</h3>
        <button onClick={e => {
            alert("Bienvenida!")
        }}>Mostrar alerta</button>
    </div>
  )
}
