import styled from 'styled-components';

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
