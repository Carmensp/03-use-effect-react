import React, { useEffect, useState } from 'react'
import { AvisoComponente } from './AvisoComponente';

export const PruebasComponent = () => {

    const [usuario, setUsuario] = useState("Carmen");
    const [fecha, setFecha] = useState("01-02-2014");
    //const [contador, setContador] = useState(0);

    const modUsuario = e => {
        setUsuario(e.target.value);
    }
    const modFecha = e => {
        setFecha(Date.now());
    }

    useEffect(() => {
        console.log("Has cargado el componente PruebasComponent o has realizado un cambio en un estado");
    })

    useEffect(() => {
        console.log("Has cargado el componente PruebasComponent");
    }, [])

    useEffect(() => {
        //setContador(contador+1);
        console.log("Has modificado el usuario");
    }, [usuario])

  return (
    <div>
        <h1>El Efecto - Hook UseEffect</h1>
        <strong className='label label-green'>{usuario}</strong>
        <strong>{fecha}</strong>
        <p>
            <input type='text' onChange={modUsuario} placeholder='Cambia el nombre'/>
            <button onClick={modFecha}>CAMBIAR FECHA</button>
        </p >    
        { usuario == "CARMEN" && <AvisoComponente/> }
    </div>
  )
}
