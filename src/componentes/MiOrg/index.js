import { useState } from 'react';
import "./MiOrg.css"

const MiOrg = (props) => {
    /* Estado - hooks

    HOOKS:
    const [nomVar, funcion] = useState(valorInicial) <- Definir un hook
    Nos permite actualizar el valor de una función en tiempo real
    */
    console.log(props)
    const [mostrar, actualizarMostar] = useState(true)
    const manejarClick = () => {
        console.log("Mostar/Ocultar elemento", !mostrar)
        actualizarMostar(!mostrar)
    }

    return <section className="orgSection">
        <h3 className="title">Mi organización</h3>
        <img src="./img/add.png" alt="Add" onClick={props.cambiarMostrar}/>
    </section>
}

export default MiOrg