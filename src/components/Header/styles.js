import styled from 'styled-components';
import { Link as LinkReactRouterDom } from 'react-router-dom';

import colors from '~/styles/colors';

export const Container = styled.div`
  padding: 0 30px;
  background: ${colors.white};
`;

export const Content = styled.div`
  height: 64px;
  max-width: 900px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;

  nav {
    display: flex;
    align-items: center;

    img {
      margin-right: 20px;
      padding-right: 20px;
      border-right: 1px solid ${colors.inputBorder};
    }
  }

  aside {
    display: flex;
    align-items: center;
  }
`;

export const Link = styled(LinkReactRouterDom)`
  text-transform: uppercase;
  font-weight: bold;
  margin-right: 20px;
  color: ${({ to, active }) =>
    to === active ? colors.activeMenu : colors.placeholder};
`;

export const Profile = styled.div`
  display: flex;
  flex-direction: column;
  text-align: right;
  margin-right: 10px;

  strong {
    display: block;
    color: ${colors.text};
  }

  a {
    display: block;
    color: ${colors.primary};
    margin-top: 2px;
  }
`;
