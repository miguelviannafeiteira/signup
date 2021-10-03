import React from 'react';
import './App.css';
import { ReactComponent as Error } from './images/icon-error.svg';

const Input = ({ type, name, value, onChange, error, onBlur }) => {
  function handleError({ target }) {
    target.previousElementSibling.classList.add('ativo');
  }

  return (
    <div>
      <label className="label" htmlFor={name}>
        {error ? (
          <input
            style={{ borderColor: 'hsl(0, 100%, 74%)' }}
            id={name}
            name={name}
            type={type}
            value={value}
            onChange={onChange}
            onBlur={onBlur}
            placeholder={name}
            onFocus="this.placeholder=''
          "
          />
        ) : (
          <input
            id={name}
            name={name}
            type={type}
            value={value}
            onChange={onChange}
            onBlur={onBlur}
            placeholder={name}
            onFocus="this.placeholder=''
        "
          />
        )}
        {error && <Error className="error" />}
      </label>
      {error && <p className="textoError">{error}</p>}
    </div>
  );
};

export default Input;
