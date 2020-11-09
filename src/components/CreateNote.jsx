import React, { Component } from 'react'
import axios from 'axios'
import DataPicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css'

export default class CreateNote extends Component {

    state={usuarios:[],
            userSelected:'',
            titulo:"",
            contenido:"",
            editar:false,
            idEditar:"",
            date:new Date()}

    async componentDidMount(){
        
        const res=await axios.get("/api/users");
        this.setState({usuarios:res.data.map(u=>u.nombre),
                        userSelected:res.data[0].nombre})

        //actualiazar nota
        if(this.props.match.params.id){
            const res=await axios.get('/api/notes/'+this.props.match.params.id)
            

            this.setState({editar:true,
                            idEditar:this.props.match.params.id,
                            titulo:res.data.titulo,
                            contenido:res.data.contenido,
                            date:new Date(res.data.date),
                            userSelected:res.data.autor
                        })
                        
          
        }


    }

    enviarNota=async (e)=>{
        e.preventDefault();

        const newNote={
            titulo:this.state.titulo,
            contenido:this.state.contenido,
            date:this.state.date,
            autor:this.state.userSelected
        }

        //actualizar nota
        if(this.state.editar){
            await axios.put('/api/notes/'+this.state.idEditar,newNote)

        }else{//crear nota
            await axios.post('/api/notes',newNote)
        }

        
        

        
        window.location.href='/'

    }

    onChangeInput=(e)=>{
        this.setState({
            [e.target.name]:e.target.value
        })

    }

    cambiarFecha=(d)=>{
        this.setState({date:d})

    }

    render() {
        return (
            <div className="contenedor-cre-note">

                <h1>CREAR NOTA</h1>
                {/* seleccionar usuario */}
                <select className="usuarios-note" 
                        name="userSelected"
                        onChange={this.onChangeInput}
                        value={this.state.userSelected}
                        >

                    {this.state.usuarios.map(u=>
                    <option key={u} value={u}>
                        {u}
                    </option>)}

                </select>

                <input type="text" 
                       className="titulo" 
                       name="titulo" 
                       placeholder="Titulo"
                       required
                       onChange={this.onChangeInput}
                       value={this.state.titulo}
                       />

                <textarea name="contenido" 
                          className="contenido" 
                          placeholder="Contenido"
                          required
                          onChange={this.onChangeInput}
                          value={this.state.contenido}
                          >
                </textarea>     

                <DataPicker onChange={this.cambiarFecha} selected={this.state.date}/>   

                <form onSubmit={this.enviarNota}>

                    <button type="submit">Save</button>
                </form>
                
            </div>
        )
    }
}
