import styled from 'styled-components';
import { Link } from 'react-router-dom';

import colors from '~/styles/colors';

export const Wrapper = styled.div`
  height: 100vh;
  background: ${colors.signedBackground};
`;

export const ContentWrapper = styled.div`
  width: 100%;
  max-width: 900px;
  margin: 35px auto;
`;

export const ContentHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  h1 {
    font-size: 24px;
  }

  div {
    button,
    input {
      margin-left: 16px;
    }
  }
`;

export const Content = styled.div`
  margin: 25px 0;
  padding: 30px;
  background: ${colors.white};
  border-radius: 4px;
`;

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;

  tbody {
    tr {
      height: 64px;

      & + tr td {
        border-top: 1px solid rgba(0, 0, 0, 0.1);
      }

      td {
        color: ${colors.text};
        text-align: center;
      }
    }
  }
`;

export const Actions = styled.td`
  a {
    margin-left: 20px;
  }
`;

export const InfoAction = styled(Link)`
  color: ${colors.info};
`;

export const DangerAction = styled(Link)`
  color: ${colors.error};
`;

export const Pagination = styled.div`
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
