const Persons = ({ filteredPersons }) => (
  <div>
    {filteredPersons.map((person) => (
      <li key={person.id}>
        {person.name} : {person.number}
      </li>
    ))}
  </div>
);

export default Persons;
