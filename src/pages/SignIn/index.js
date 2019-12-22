import React from 'react';

import logo from '~/assets/logo.png';

// import { Container } from './styles';

const SignIn = () => (
  <>
    <img src={logo} alt="Gympoint" />
    <form>
      <input type="email" placeholder="exemplo@email.com" />
      <input type="password" placeholder="*************" />

      <button type="submit">Entrar no sistema</button>
    </form>
  </>
);

export default SignIn;
