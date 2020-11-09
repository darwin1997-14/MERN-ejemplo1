import React, { Component } from 'react'
import axios from 'axios'

export default class CreateUser extends Component {

    state={
        users:[],
        nombre:''
    }

    componentDidMount(){
        this.mostrarUsuarios();
    }

    mostrarUsuarios=async ()=>{
        const res=await axios.get('/api/users')
        this.setState({users:res.data})
    }

    handlerNomre=(e)=>{
        this.setState({nombre:e.target.value})
    }

    submit=async (e)=>{
        e.preventDefault();
        await axios.post('/api/users',{
            nombre:this.state.nombre
        })
        this.mostrarUsuarios();
        this.state.nombre=""
        
    }
    eliminarUser=async (id)=>{
        await axios.delete('/api/users/'+id)
        this.mostrarUsuarios();

    }

    render() {
        return (
            <div>
                <div className="form-user">
                    <h3>Crear Nuevo Usuario</h3>
                    <form onSubmit={this.submit}>
                        <input type="text" onChange={this.handlerNomre} value={this.state.nombre}/>
                        <button type="submit">Guardar</button>

                    </form>
                </div>
                <ul className="list-users">
                    {this.state.users.map(u=>(
                        <li className="user-list" 
                            key={u._id} 
                            onDoubleClick={()=>this.eliminarUser(u._id)}
                            >
                            {u.nombre}
                        </li>)
                    )}
                </ul>
            </div>
        )
    }
}
