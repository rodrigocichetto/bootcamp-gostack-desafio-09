import styled from 'styled-components';

export const Container = styled.div`
  display: block;
  position: fixed;
  z-index: 1;
  padding-top: 100px;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgb(0, 0, 0);
  background-color: rgba(0, 0, 0, 0.4);
`;

export const Content = styled.div`
  background-color: #fefefe;
  margin: auto;
  padding: 20px;
  border-radius: 4px;
  max-width: 500px;
  width: 100%;
  min-height: 70px;
`;

export const Close = styled.span`
  color: #aaaaaa;
  float: right;
  font-size: 28px;
  font-weight: bold;
  text-decoration: none;
  cursor: pointer;
`;
