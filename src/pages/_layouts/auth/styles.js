import styled from 'styled-components';
import { darken } from 'polished';

import colors from '~/styles/colors';

export const Wrapper = styled.div`
  height: 100vh;
  background: ${colors.primary};
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Content = styled.div`
  width: 100%;
  max-width: 360px;
  text-align: center;
  background: ${colors.white};
  border-radius: 4px;
  padding: 50px 30px;

  form {
    display: flex;
    flex-direction: column;
    margin-top: 30px;

    label {
      font-size: 16px;
      font-weight: bold;
      text-transform: uppercase;
      text-align: left;
      margin-bottom: 8px;
    }

    input {
      background: ${colors.white};
      border: 1px solid ${colors.inputBorder};
      border-radius: 4px;
      height: 44px;
      font-size: 16px;
      padding: 0 10px;
      margin: 0 0 10px;

      &::placeholder {
        color: ${colors.placeholder};
      }
    }

    span {
      color: ${colors.error};
      align-self: flex-start;
      margin: 0 0 10px;
    }

    button {
      margin: 5px 0 0;
      height: 44px;
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
    }
  }
`;
