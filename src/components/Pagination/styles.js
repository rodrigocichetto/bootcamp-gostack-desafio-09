import styled from 'styled-components';
import { darken } from 'polished';

import colors from '~/styles/colors';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;

  button {
    margin-left: 10px;

    svg {
      margin: 0;
    }
  }
`;

export const Item = styled.button`
  margin: 5px 0 0;
  padding: 10px 16px;
  border-radius: 4px;
  border: 0;
  font-size: 16px;
  font-weight: bold;
  background: ${props => (props.active ? colors.primary : colors.disabled)};
  color: ${colors.white};
  transition: background 0.2s;

  &:hover {
    background: ${darken(0.03, colors.primary)};
  }

  svg {
    vertical-align: top;
    width: 7px;
  }
`;
