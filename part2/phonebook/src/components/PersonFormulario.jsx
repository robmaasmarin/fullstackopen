import { useState } from "react";

const PersonFormulario =  ({ persons, setPersons })  => {


  const [newName, setNewName] = useState("");
  //const [notes, setNotes] = useState(props.notes)
  const [newNumber, setNewNumber] = useState("");


  const addPerson = (event) => {
    event.preventDefault();
    const personObject = {
      name: newName,
      number: newNumber,
      id: persons.length + 1,
    };
    // declaramos variable para filtrar y comparar el nuevo contacto con el nombre de los ya existentes
    const personExist = persons.some((p) => p.name === personObject.name);
    const numExist = persons.some((t) => t.number === personObject.number);
    // en caso de que no coincida ejecutamos los 2 métodos que teníamos. Important! separación con la ","
    // segunda comprobación. Si no existe el nombre ni el nº, lo añadimos
    !personExist
      ? !numExist
        ? (setPersons(persons.concat(personObject)),
          setNewName(""),
          setNewNumber(""))
        : //no existe el contacto pero sí el nº > enviamos alerta informando
          alert(`${personObject.number} already exists on this phonebook`)
      : //Caso contrario lanzamos la alerta
        alert(`${personObject.name} already exists on this phonebook`);

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
  )
}

export default PersonFormulario