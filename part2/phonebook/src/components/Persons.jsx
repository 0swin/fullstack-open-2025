const Persons = ({ filteredPersons, deletePerson }) => (
  <div>
    {filteredPersons.map((person) => (
      <li key={person.id}>
        {person.name} : {person.number}{" "}
        <button onClick={() => deletePerson(person.id)}>🗑️</button>
      </li>
    ))}
  </div>
);

export default Persons;
