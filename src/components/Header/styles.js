import styled from 'styled-components';

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

    a {
      text-transform: uppercase;
      font-weight: bold;
      color: ${colors.placeholder};
    }
  }

  aside {
    display: flex;
    align-items: center;
  }
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
