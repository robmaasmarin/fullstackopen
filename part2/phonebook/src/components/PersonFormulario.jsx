import axios from "axios";
import { useState } from "react";
import noteService from "../services/persons";
import {Notification, Notificationerror} from "./ContactAdded";

const PersonFormulario = ({ persons, setPersons, setSuccessMessage, setErrorMessage }) => {
  const [newName, setNewName] = useState("");
  //const [notes, setNotes] = useState(props.notes)
  const [newNumber, setNewNumber] = useState("");
  

  const addPerson = (event) => {
    event.preventDefault();
    const personObject = {
      name: newName,
      number: newNumber,
    };

    // declaramos variable para filtrar y comparar el nuevo contacto con el nombre de los ya existentes
    //const personExist = persons.some((p) => p.name === personObject.name);
    const contactExist = persons.find(p => p && p.name === personObject.name);
    const numExist = persons.some(t => t && t.number === personObject.number);

    // en caso de que no coincida ejecutamos los 2 métodos que teníamos. Important! separación con la ","
    // segunda comprobación. Si no existe el nombre ni el nº, lo añadimos
    if (!contactExist) {
      if (!numExist) {
        noteService
          .create(personObject)
          //axios// utilizamos axios para guardar los números en servidor backend
          //.post("http://localhost:3001/persons", personObject)
          .then((response) => {
            //console.log("esta es la respuesta: ", response);
            setPersons(persons.concat(response.data));
            // tras agregar el contacto mostramos el mensaje 
            setSuccessMessage(
          `Contact '${personObject.name}' was added to the phonebook`
        )
        setTimeout(() => {
          setSuccessMessage(null)
        }, 5000)
            
            setNewName("");
            setNewNumber("");
            setNewName("");
            setNewNumber("");
          });
      }
      //no existe el contacto pero sí el nº > enviamos alerta informando
      else {
        
        alert(`${personObject.number} already exists on this phonebook`);
      }
    }
    //Caso contrario lanzamos la alerta
    else {
      if (
        window.confirm(
          `${personObject.name} already exists on this phonebook. Do you want to replace the old number with a new one?`
        )
      ) {
        // otro ternary operator. Si acepta, actualizamos su contacto. En caso contrario no
        //console.log("aceptó")
        //console.log("Updating contact:", contactExist, typeof contactExist.id)
        const latestContact = persons.find(p => p && p.name === personObject.name);
        if (latestContact){
        const personaActualizada = { ...latestContact, number: newNumber };
        noteService
          .update(latestContact.id, personaActualizada)
          .then((updatedPerson) => {
            console.log("contacto del servidor actualizado..", updatedPerson)
            setPersons(
              persons.map((p) =>
                p && String(p.id) !== String(latestContact.id) ? p : updatedPerson
              )
            );
            
          })
          .catch(error => {
            setErrorMessage(
          `Contact '${personObject.name}' does not longer exists on the server`
        )
        setTimeout(() => {
          setErrorMessage(null)
        }, 5000)
            //alert(`${personObject.name} does not longer exists on the server`)
          });
      }
    }}

    //alert(`${personObject.name} already exists on this phonebook`);

    console.log("button clicked", event.target);
    console.log(personObject.name);
  };

  const handlePersonChange = (event) => {
    console.log(event.target.value);
    setNewName(event.target.value);
  };
  const handleNumberChange = (event) => {
    setNewNumber(event.target.value);
  };

  return (
    <form onSubmit={addPerson}>
      <div>
        <h1>Add a new contact</h1>
        {/*console.log(persons)*/}
        {/*Con required hacemos que sea obligatorio ese campo*/}
        name: <input value={newName} onChange={handlePersonChange} required />
      </div>
      <br></br>
      <div>
        number:{" "}
        <input //inputMode y pattern para aceptar solo números del 1 al 9
          inputMode="numeric"
          pattern="[0-9]*"
          value={newNumber}
          onChange={handleNumberChange}
        />
      </div>

      <div>
        <button type="submit">add</button>
      </div>
    </form>
  );
};

export default PersonFormulario;
