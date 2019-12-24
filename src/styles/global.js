import styled, { createGlobalStyle } from 'styled-components';
import { darken } from 'polished';

// import { Input as InputUnform } from '@rocketseat/unform';

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

export const Input = styled.input`
  background: ${colors.white};
  border: 1px solid ${colors.inputBorder};
  border-radius: 4px;
  font-size: 16px;
  padding: 10px 16px;
  margin: 0 0 10px;

  &::placeholder {
    color: ${colors.placeholder};
  }
`;
