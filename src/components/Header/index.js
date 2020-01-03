import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import history from '~/services/history';
import PATHS from '~/routes/paths';

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
          <Link to={PATHS.STUDENT} active={history.location.pathname}>
            Alunos
          </Link>
          <Link to={PATHS.PLAN} active={history.location.pathname}>
            Planos
          </Link>
          <Link to={PATHS.REGISTRATION} active={history.location.pathname}>
            Matrículas
          </Link>
          <Link to={PATHS.HELP_ORDER} active={history.location.pathname}>
            Pedidos de auxílio
          </Link>
        </nav>
        <aside>
          {profile && (
            <Profile>
              <strong>{profile.name}</strong>
              <a href="#logount" onClick={handleSignOut}>
                sair do sistema
              </a>
            </Profile>
          )}
        </aside>
      </Content>
    </Container>
  );
};

export default Header;
