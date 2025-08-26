import noteService from "../services/persons";

const Persons = ({ person, persons, setPersons }) => {
  //declaramos variable para eliminar contactos
  const handleDelete = () => {
    if (window.confirm(`Do you really want to delete the contact contact "${person.name}" with id ${person.id}`)) {
    noteService// utilizamos el método deletePerson que hemos creado en persons.js
      .deletePerson(person.id)
      .then((response) => {
      console.log("response from server is ", response)
      setPersons(persons.filter((p) => p.id !== person.id));
    })
    .catch((error) => {
      alert("no se ha podido borrar en el server");
    });
  }
};

  return (
    <div>
      <li>
        {person.name} {person.number}{" "}
        <button onClick={handleDelete}>delete</button>
      </li>
    </div>
  );
};

export default Persons;
