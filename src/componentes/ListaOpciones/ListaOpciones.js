import "./ListaOpciones.css"

const ListaOpciones = (props) => {

    

    const manejarCambio = (e) => {
        console.log("cambio", e.target.value)
        props.setValor(e.target.value)
    }

    return <div className="lista_opciones">
        <label>Equipos</label>
            <select value={props.valor} onChange={manejarCambio}>
                <option value="" disabled defaultValue="" hidden>seleccionar equipo</option>
                {props.equipos.map((equipo,index)=> <option key={index} value={equipo}>{equipo}</option>
                )}
            </select>
    </div>
}

export default ListaOpciones;