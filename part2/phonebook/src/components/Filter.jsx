const Filter = ({ value, onChange }) => (
  <div>
    filter: <input onChange={onChange} value={value} />
  </div>
);

export default Filter;
