import React, { useState } from "react";

const useDropdown = (label, defaultState, options) => {
  const [state, setState] = useState(defaultState); // no
  const id = `use-dropdown-${label.replace(" ", "").toLowerCase()}`; // no
  const Dropdown = () => (
    <label htmlFor={id}>
      {label}
      <select
        id={id} // no
        value={state} // no
        onChange={e => setState(e.target.value)} // UNDERSTOOD
        onBlur={e => setState(e.target.value)} // UNDERSTOOD
        disabled={options.length === 0} // UNDERSTOOD
      >
        <option>All</option>
        {options.map(item => (
          // UNDERSTOOD
          <option key={item} value={item}>
            {item}
          </option>
        ))}
      </select>
    </label>
  );

  return [state, Dropdown, setState]; // no
};

export default useDropdown;
