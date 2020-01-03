import styled from 'styled-components';

import colors from '~/styles/colors';

export const Answer = styled.div`
  h2 {
    font-size: 14px;
    color: ${colors.activeMenu};
    margin: 0 0 8px;
  }
  p {
    font-size: 16px;
    line-height: 26px;
    color: ${colors.text};
  }

  form {
    margin-top: 20px;

    textarea {
      background: ${colors.white};
      border: 1px solid ${colors.inputBorder};
      border-radius: 4px;
      min-height: 120px;
      font-size: 16px;
      padding: 10px;
      margin: 0 0 20px;
      width: 100%;
      color: ${colors.text};

      &:disabled {
        background: ${colors.signedBackground};
      }

      &::placeholder {
        color: ${colors.placeholder};
      }
    }

    button {
      width: 100%;
    }
  }
`;
