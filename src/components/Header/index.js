import React from 'react';
import { Link } from 'react-router-dom';

import { Container, Content, Profile } from './styles';

import logo from '~/assets/logo-horizontal.svg';

const Header = () => (
  <Container>
    <Content>
      <nav>
        <img src={logo} alt="Gympoint" />
        <Link to="/dashboard">Alunos</Link>
      </nav>
      <aside>
        <Profile>
          <strong>Name</strong>
          <Link to="/signout">sair do sistema</Link>
        </Profile>
      </aside>
    </Content>
  </Container>
);

export default Header;
