import React, { Component } from 'react'
import axios from 'axios'
import {format} from 'timeago.js'
import {Link} from 'react-router-dom'

export default class NotesLists extends Component {

    state={
        notes:[]
    }

    getNotes=async()=>{
        const res= await axios.get('/api/notes')
        this.setState({
            notes:res.data
        })
    }

    componentDidMount(){
        this.getNotes();
        
    }

    

    eliminarNota=async (id)=>{
        await axios.delete('/api/notes/'+id);
        this.getNotes();
    
    }

    render() {
        return (
            <div className="contenedorNotas">
                {
                    this.state.notes.map(n=>(
                        <div className="nota-item" key={n._id}>
                            <div>{n.titulo}</div>
                            <div>{n.contenido}</div>
                            <div>{n.autor}</div>
                            <div>{format(n.date)}</div>
                            <div><button onClick={()=>this.eliminarNota(n._id)}>Eliminar</button></div>
                            <div><Link to={'/edit/'+n._id}>Editar</Link></div>
                        </div>
                    ))
                }
               
            </div>
        )
    }
}
