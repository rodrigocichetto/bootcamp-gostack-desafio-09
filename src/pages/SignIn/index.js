import React from 'react';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';

import logo from '~/assets/logo.png';

// import { Container } from './styles';

const schema = Yup.object().shape({
  email: Yup.string()
    .email('Insira um e-mail válido')
    .required('O e-mail é obrigatório'),
  password: Yup.string().required('Digite a sua senha'),
});

const SignIn = () => {
  const handleSubmit = data => {
    console.tron.log(data);
  };

  return (
    <>
      <img src={logo} alt="Gympoint" />
      <Form schema={schema} onSubmit={handleSubmit}>
        <label htmlFor="email">Seu e-mail</label>
        <Input
          id="email"
          name="email"
          type="email"
          placeholder="exemplo@email.com"
        />

        <label htmlFor="password">Sua senha</label>
        <Input
          id="password"
          name="password"
          type="password"
          placeholder="*************"
        />

        <button type="submit">Entrar no sistema</button>
      </Form>
    </>
  );
};

export default SignIn;
