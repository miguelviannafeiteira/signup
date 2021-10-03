import React from 'react';

const types = {
  email: {
    regex:
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    mensagem: 'Looks like this is not an email',
    mensagemVazia: 'Email cannot be empty',
  },
  nome: {
    regex: /\w/g,
    mensagemVazia: 'Frist Name cannot be empty',
  },
  sobrenome: {
    regex: /\w/g,
    mensagemVazia: 'Last Name cannot be empty',
  },
  senha: {
    regex: /\w/g,
    mensagemVazia: 'Password cannot be empty',
  },
};

const useForm = (type) => {
  const [value, setValue] = React.useState('');
  const [error, setError] = React.useState(null);

  function validate(value) {
    if (type === false) return true;
    if (value.length === 0) {
      setError(types[type].mensagemVazia);
      return false;
    } else if (types[type] && !types[type].regex.test(value)) {
      setError(types[type].mensagem);
      return false;
    } else {
      setError(null);
      return true;
    }
  }
  function onChange({ target }) {
    if (error) validate(target.value);
    setValue(target.value);
  }

  return {
    value,
    error,
    setValue,
    onChange,
    validate: () => validate(value),
    onBlur: () => validate(value),
  };
};

export default useForm;
