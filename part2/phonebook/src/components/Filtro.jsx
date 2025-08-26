import { useState } from "react";

const Filtro = ({ persons }) => {
  //creamos un elemento searching que almacenará el texto que va escribiendo el user
  const [searching, setSearching] = useState("");
  //definimos el filtro que contiene los contactos cuyo nombre incluye lo que va escribiendo el user
  const filterContacts = persons
    .filter(f => f)
    .filter(f => f.name && f.name.toLowerCase().includes(searching.toLowerCase()))
  ;
  return (
    <div>
      <p>filter shown with </p>
      <input
        type="text"
        placeholder="search contact..."
        value={searching}
        onChange={(e) => setSearching(e.target.value)}
      />
      {/* mostramos la lista de contactos tras pasar por el filtro */}
      <ul>
        {filterContacts.length > 0 ? (
          filterContacts.map((contacto, i) => (
            <li key={i}>
              {contacto.name} {contacto.number}
            </li>
          ))
        ) : (
          <li>No results</li>
        )}
      </ul>
    </div>
  );
};

export default Filtro;
