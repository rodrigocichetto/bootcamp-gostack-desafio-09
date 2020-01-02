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
    form {
      margin-left: 16px;
    }

    form {
      display: inline-flex;
    }
  }
`;

export const Content = styled.div`
  margin: 25px 0;
  padding: 30px;
  background: ${colors.white};
  border-radius: 4px;

  form {
    display: flex;
    flex-direction: column;

    label {
      font-size: 16px;
      font-weight: bold;
      text-transform: uppercase;
      text-align: left;
      margin-bottom: 8px;
    }

    .group {
      display: flex;
      flex-direction: row;

      & > div {
        display: flex;
        flex-direction: column;
        flex: 1;

        & + div {
          margin-left: 15px;
        }
      }
    }

    input {
      background: ${colors.white};
      border: 1px solid ${colors.inputBorder};
      border-radius: 4px;
      min-height: 46px;
      font-size: 16px;
      padding: 10px;
      margin: 0 0 20px;

      &:disabled {
        background: ${colors.signedBackground};
      }

      &::placeholder {
        color: ${colors.placeholder};
      }
    }

    .async-select {
      margin: 0 0 20px;

      input {
        margin: 8px 0;
        min-height: auto;
      }
    }

    span {
      color: ${colors.error};
      align-self: flex-start;
      margin: 0 0 10px;
    }
  }
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

export const DangerAction = styled.a`
  cursor: pointer;
  color: ${colors.error};
`;

export const Search = styled.div`
  position: relative;
  display: flex;

  svg {
    position: absolute;
    left: 15px;
    color: ${colors.placeholder};
    top: 13px;
  }

  input {
    background: ${colors.white};
    border: 1px solid ${colors.inputBorder};
    border-radius: 4px;
    font-size: 16px;
    padding: 10px 16px 10px 35px;
    margin: 0 0 10px;

    &::placeholder {
      color: ${colors.placeholder};
    }
  }
`;
