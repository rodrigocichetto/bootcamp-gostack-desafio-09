import React from 'react';
import { useDispatch } from 'react-redux';
// import { Link } from 'react-router-dom';
import history from '~/services/history';

import { signOut } from '~/store/modules/auth/actions';
import { Container, Content, Link, Profile } from './styles';

import logo from '~/assets/logo-horizontal.svg';

const Header = () => {
  const dispatch = useDispatch();

  const handleSignOut = () => dispatch(signOut());

  return (
    <Container>
      <Content>
        <nav>
          <img src={logo} alt="Gympoint" />
          <Link to="/dashboard" active={history.location.pathname}>
            Alunos
          </Link>
          <Link to="/plans" active={history.location.pathname}>
            Planos
          </Link>
        </nav>
        <aside>
          <Profile>
            <strong>Name</strong>
            <a href="#logout" onClick={handleSignOut}>
              sair do sistema
            </a>
          </Profile>
        </aside>
      </Content>
    </Container>
  );
};

export default Header;
