import { useState, useEffect } from "react";
import Persons from "./components/Persons";
import Filtro from "./components/Filtro";
import PersonFormulario from "./components/PersonFormulario";
import axios from 'axios'
import noteService from "./services/persons"
import {Notification, Notificationerror} from "./components/ContactAdded"
import "./index.css"

const App = () =>{
      const [persons, setPersons] = useState([]);
      const [successMessage, setSuccessMessage] = useState("");
      const [errorMessage, setErrorMessage] = useState("");

//using useEffect with axios to read from backend
    useEffect(() => {
    noteService
      .getAll()
      .then((response) => {
      //console.log('promise fulfilled')
      setPersons(response.data)// saving response 
      
    })
  }, [])
  
  return (
    <div>
      <h2>Phonebook</h2>
      <Notification message={successMessage} />
      <Notificationerror message={errorMessage} />
      <Filtro persons={persons} />
      <PersonFormulario persons={persons} setPersons={setPersons} setSuccessMessage={setSuccessMessage} setErrorMessage={setErrorMessage}  />
      <h2>Numbers</h2>
      <ul>
        {persons.filter(Boolean).map((person) => (
          <Persons key={person.id} person={person} setPersons={setPersons} persons={persons} />
        ))}
      </ul>
    </div>
  );
};

export default App;
