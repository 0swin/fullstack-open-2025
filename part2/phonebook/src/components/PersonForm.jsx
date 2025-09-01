const PersonForm = ({
  onSubmit,
  handleNameChange,
  newName,
  handleNumberChange,
  newNumber,
}) => (
  <form onSubmit={onSubmit}>
    <div>
      name: <input onChange={handleNameChange} value={newName} />
    </div>
    <div>
      number: <input onChange={handleNumberChange} value={newNumber} />
    </div>
    <div>
      <button type="submit" action>
        add
      </button>
    </div>
  </form>
);

export default PersonForm;
