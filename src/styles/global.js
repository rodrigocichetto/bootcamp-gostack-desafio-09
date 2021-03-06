import styled, { createGlobalStyle } from 'styled-components';
import { darken } from 'polished';
import { Link } from 'react-router-dom';

import colors from '~/styles/colors';

import 'react-toastify/dist/ReactToastify.css';

export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Roboto:300,400,700&display=swap');

  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  *:focus {
    outline: 0;
  }

  html, body, #root {
    height: 100vh;
  }

  body {
    -webkit-font-smoothing: antialiased;
  }

  body, input, button {
    font-size: 14px;
    font-family: 'Roboto', sans-serif;
  }

  a {
    text-decoration: none;
    cursor: pointer;
  }

  ul {
    list-style: none;
  }

  button {
    cursor: pointer;
  }
`;

export const Button = styled.button`
  margin: 5px 0 0;
  padding: 10px 16px;
  border-radius: 4px;
  border: 0;
  font-size: 16px;
  font-weight: bold;
  background: ${colors.primary};
  color: ${colors.white};
  transition: background 0.2s;

  &:hover {
    background: ${darken(0.03, colors.primary)};
  }

  svg {
    vertical-align: top;
    margin-right: 5px;
  }
`;

export const LinkButton = styled(Link)`
  margin: 5px 0 0;
  padding: 10px 16px;
  border-radius: 4px;
  border: 0;
  font-size: 16px;
  font-weight: bold;
  background: ${props => (props.disabled ? colors.disabled : colors.primary)};
  color: ${colors.white};
  transition: background 0.2s;

  &:hover {
    background: ${darken(0.03, colors.primary)};
  }

  svg {
    vertical-align: text-top;
    margin-right: 5px;
  }
`;
