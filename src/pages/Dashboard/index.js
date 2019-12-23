import React from 'react';

import {
  ContentWrapper,
  ContentHeader,
  Content,
} from '~/pages/_layouts/default/styles';
import { Input, Button } from '~/styles/global';

const Dashboard = () => {
  return (
    <ContentWrapper>
      <ContentHeader>
        <h1>Gerenciando alunos</h1>
        <div>
          <Button type="button">CADASTRAR</Button>
          <Input type="text" placeholder="Buscar aluno" />
        </div>
      </ContentHeader>
      <Content>asdsad</Content>
    </ContentWrapper>
  );
};

export default Dashboard;
