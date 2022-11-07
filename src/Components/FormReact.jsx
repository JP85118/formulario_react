import React, {useState} from "react"

function FormReact() {
  const [nombre, setNombre] = useState("");

  return (
    <>
      <h2>Form React</h2>
      <div>
      <form>
      <label htmlFor="nombre"> Nombre: </label>
      <input type="text" 
      value={nombre}
      id="nombre"
      onChange={(e)=>{
        setNombre(e.target.value)
        //console.log(nombre);
      }}
      />
      <button type="submit" onClick={(e) =>{
        e.preventDefault();
        alert(`El mensaje es:  ${nombre}`)
      }}> Enviar </button>
      <div>{nombre}</div>
      </form>
      </div>
    </>
  )
}

export default FormReact