import React from 'react';
import './App.css';
import {BrowserRouter as Router,Route} from 'react-router-dom'

import Navegacion from './components/Navegacion';
import NotesLists from './components/NotesLists';
import CreateNote from './components/CreateNote'
import CreateUser from './components/CreateUser'


function App() {
  return (
    <Router>
      <Navegacion/>

      <Route path="/" exact component={NotesLists}/>
      <Route path="/edit/:id" component={CreateNote}/>
      <Route path="/create" component={CreateNote}/>
      <Route path="/user" component={CreateUser}/>

    </Router>
  );
}

export default App;
