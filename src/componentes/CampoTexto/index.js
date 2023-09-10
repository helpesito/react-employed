import "./CampoTexto.css"

const CampoTexto = (props) => {
    console.log("Datos: ", props.titulo)
    const placeholderMod = `${props.placeholder}...`
    return <div className="campo_texto">
        <label>{props.titulo}</label>
        <input type="" placeholder={placeholderMod}/>
    </div>
}

export default CampoTexto