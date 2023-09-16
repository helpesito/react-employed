import { useState } from "react"
import "./CampoTexto.css"

const CampoTexto = (props) => {

    const placeholderMod = `${props.placeholder}...`
    
    const manejarCambio = (evento) =>{
        props.setValor(evento.target.value)
    }
    
    return <div className="campo_texto">
        <label>{props.titulo}</label>
        <input 
            type="" 
            placeholder={placeholderMod} 
            required={props.required} 
            value={props.valor}
            onChange={manejarCambio} 
            />
    </div> 
}

export default CampoTexto