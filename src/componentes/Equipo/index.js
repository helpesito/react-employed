import "./Equipo.css"
import "../Colaborador"
import Colaborador from "../Colaborador"

const Equipo = (props) => {

    //Destructuracion
    const {colorPrimario, colorSecundario, titulo} = props.datos

    const estiloTitulo ={borderColor:colorPrimario}

    return <section className="equipo" style={{ backgroundColor:colorSecundario}}>
        <h3 style={estiloTitulo} >{titulo}</h3>
        <div className="colaboradores">
            <Colaborador/>
            <Colaborador/>
            <Colaborador/>
            <Colaborador/>


        </div>
    </section>
}

export default Equipo;