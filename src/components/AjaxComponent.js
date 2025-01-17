import React, { useEffect, useState } from 'react'



export const AjaxComponent = () => {

  const [usuarios, setUsuarios] = useState([]);
  const [cargando, setCargando] = useState(true);
  const [errores, setErrores] = useState("");

  const getUsuariosStaticos = () => {
    setUsuarios([
      {
        "id": 1,
        "email": "carmen@reqres.in",
        "first_name": "Carmen",
        "last_name": "Lawson",
        "avatar": "https://reqres.in/img/faces/7-image.jpg"
    },
    {
        "id": 2,
        "email": "angellindsay.ferguson@reqres.in",
        "first_name": "Ángel",
        "last_name": "Ferguson",
        "avatar": "https://reqres.in/img/faces/8-image.jpg"
    },
    { 
        "id": 3,
        "email": "sonia@reqres.in",
        "first_name": "Sonia",
        "last_name": "Funke",
        "avatar": "https://reqres.in/img/faces/9-image.jpg"
    }
    ])
  }

  const getUsuariosAjaxPms = () => {
    fetch("https://reqres.in/api/users?page=1")
      .then(respuesta => respuesta.json())
      .then(
        resultado_final => {
          setUsuarios(resultado_final.data)
          console.log(usuarios)
        },
        error => {
          console.log(error)
        }
      )
  }

  const getUsuariosAjaxAW = () => {
    setTimeout(async() => {
      try{
        const peticion = await fetch("https://reqres.in/api/users?page=1");
        const{data} = await peticion.json();
        setUsuarios(data);
        setCargando(false);
      }catch(error){
        console.log(error);
        setErrores(error.message);
      }
    }, 2000)
  }

  useEffect(() => {
    //getUsuariosStaticos();
    //getUsuariosAjaxPms();
    getUsuariosAjaxAW();
  }, [])

  if(errores !== ""){
    //Cuando hay algún error
    return (
      <div className='errores'>
        {errores}
      </div>
    )
  } else if(cargando == true){
    //Cuando está todo cargando
    return (
      <div className='cargando'>
        Cargando datos...
      </div>
    )
  } else if(cargando == false && errores === ""){
    //Cuando todo ha ido bien
    return (
      <div>
          <h2>Listado de usuarios via Ajax</h2>
          <ol className='usuarios'>
            {
              usuarios.map(usuario => {
                return (<li key={usuario.id}>
                          <img src={usuario.avatar} width="50"></img>
                          &nbsp;
                          {usuario.first_name} {usuario.last_name}
                        </li>)
              })
            }
          </ol>
      </div>
    )
  }
  

  
}
