import { useState, useEffect } from "react";
import axios from "axios";

import Filter from "./components/Filter";
import PersonForm from "./components/PersonForm";
import Persons from "./components/Persons";
import Notification from "./components/Notification";

import personsService from "./services/persons";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [newFilter, setNewFilter] = useState("");
  const [notificationMessage, setNotificationMessage] = useState(null);
  const [notificationType, setNotificationType] = useState("success");

  useEffect(() => {
    console.log("effect");
    personsService.getAll().then((initialPersons) => {
      setPersons(initialPersons);
    });
  }, []);

  const filteredPersons = persons.filter((person) =>
    person.name.toLowerCase().includes(newFilter.toLowerCase())
  );

  const handleNameChange = (event) => {
    console.log(event.target.value);
    setNewName(event.target.value);
  };
  const handleNumberChange = (event) => {
    console.log(event.target.value);
    setNewNumber(event.target.value);
  };
  const handleFilterChange = (event) => {
    console.log(event.target.value);
    setNewFilter(event.target.value);
  };

  const addName = (event) => {
    event.preventDefault();
    const nameExists = persons.some((person) => person.name === newName);

    // If person already exist
    if (nameExists) {
      const person = persons.find((person) => person.name == newName);
      personsService
        .update(person.id, { ...person, number: newNumber })
        .then((returnedPerson) => {
          setPersons(
            persons
              .filter((person) => person.id != returnedPerson.id)
              .concat(returnedPerson)
          );
          setNotificationMessage(`Updated ${newName}`);
          setNotificationType("success");
          setTimeout(() => {
            setNotificationMessage(null);
          }, 5000);
        })
        .catch((_) => {
          setNotificationMessage(
            `Information of ${person.name} was already removed from server`
          );
          setNotificationType("error");
          setTimeout(() => {
            setNotificationMessage(null);
          }, 5000);
          setPersons(persons.filter((p) => p.id != person.id));
        });
      return;
    }

    const personObject = {
      name: newName,
      number: newNumber,
      id: newName,
    };

    personsService.create(personObject).then((returnedPerson) => {
      setPersons(persons.concat(returnedPerson));
      setNewName("");
      setNewNumber("");

      setNotificationMessage(`Added ${newName}`);
      setNotificationType("success");
      setTimeout(() => {
        setNotificationMessage(null);
      }, 5000);
    });
  };

  const deletePerson = (id) => {
    console.log("delete " + id);
    const person = persons.find((person) => person.id == id);
    console.log(person);

    if (
      window.confirm(
        `Are you sure you want to delete ${person.name} from your phonebook?`
      )
    ) {
      personsService
        .deletePerson(id)
        .then(() => {
          setPersons(persons.filter((person) => person.id != id));
        })
        .catch((error) => {
          setNotificationMessage(
            `Information of ${person.name} was already removed from server`
          );
          setNotificationType("error");
          setTimeout(() => {
            setNotificationMessage(null);
          }, 5000);
          setPersons(persons.filter((person) => person.id != id));
        });
    }
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <Notification message={notificationMessage} type={notificationType} />
      <Filter value={newFilter} onChange={handleFilterChange} />
      <h2>add a new number</h2>
      <PersonForm
        onSubmit={addName}
        newName={newName}
        handleNameChange={handleNameChange}
        newNumber={newNumber}
        handleNumberChange={handleNumberChange}
      ></PersonForm>
      <h2>Numbers</h2>
      <Persons
        filteredPersons={filteredPersons}
        deletePerson={(id) => deletePerson(id)}
      />
    </div>
  );
};

export default App;
