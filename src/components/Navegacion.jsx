import React, { Component } from 'react'
import {Link} from 'react-router-dom'

class Navegacion extends Component {
    render() {
        return (
            <div className="nav-contenedor">
                <Link className="nav-item" to="/">Notas</Link>
                <Link className="nav-item" to="/create">Crear Nota</Link>
                <Link className="nav-item" to="/user">Crear Usuario</Link>
            </div>
        )
    }
}

export default Navegacion
