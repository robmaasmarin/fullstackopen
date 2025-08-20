import { useState, useEffect } from "react";
import Persons from "./components/Persons";
import Filtro from "./components/Filtro";
import PersonFormulario from "./components/PersonFormulario";
import axios from 'axios'

const App = () =>{
      const [persons, setPersons] = useState([]);
      
      /* moving this to db.json 
    { name: "Arto Hellas", number: "040-123456", id: 1 },
    { name: "Ada Lovelace", number: "39-44-5323523", id: 2 },
    { name: "Dan Abramov", number: "12-43-234345", id: 3 },
    { name: "Mary Poppendieck", number: "39-23-6423122", id: 4 },
  
*/
//using useEffect with axios to read from backend
    useEffect(() => {
    console.log('effect')
    axios.get('http://localhost:3001/persons').then((response) => {
      //console.log('promise fulfilled')
      setPersons(response.data)// saving response 
      
    })
  }, [])
  //console.log('render', persons.length, 'notes')
  return (
    <div>
      <h2>Phonebook</h2>
      <Filtro persons={persons} />
      <PersonFormulario persons={persons} setPersons={setPersons} />
      <h2>Numbers</h2>
      <ul>
        {persons.map((person) => (
          <Persons key={person.id} person={person} />
        ))}
      </ul>
    </div>
  );
};

export default App;
