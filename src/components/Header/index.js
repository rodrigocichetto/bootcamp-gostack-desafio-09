import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import history from '~/services/history';
import { ROUTE_PATH } from '~/config/constants';

import { signOut } from '~/store/modules/auth/actions';
import { Container, Content, Link, Profile } from './styles';

import logo from '~/assets/logo-horizontal.svg';

const Header = () => {
  const dispatch = useDispatch();
  const profile = useSelector(state => state.user.profile);

  const handleSignOut = () => dispatch(signOut());

  return (
    <Container>
      <Content>
        <nav>
          <img src={logo} alt="Gympoint" />
          <Link to={ROUTE_PATH.STUDENT} active={history.location.pathname}>
            Alunos
          </Link>
          <Link to="/plans" active={history.location.pathname}>
            Planos
          </Link>
        </nav>
        <aside>
          <Profile>
            <strong>{profile.name}</strong>
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
