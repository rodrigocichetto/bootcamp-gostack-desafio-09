import React from 'react';
import { FaPlus } from 'react-icons/fa';

import {
  ContentWrapper,
  ContentHeader,
  Content,
  Table,
  Actions,
  InfoAction,
  DangerAction,
} from '~/pages/_layouts/default/styles';
import { Input, Button } from '~/styles/global';

const Dashboard = () => {
  return (
    <ContentWrapper>
      <ContentHeader>
        <h1>Gerenciando alunos</h1>
        <div>
          <Button type="button">
            <FaPlus /> CADASTRAR
          </Button>
          <Input type="text" placeholder="Buscar aluno" />
        </div>
      </ContentHeader>
      <Content>
        <Table>
          <thead>
            <tr>
              <th>NOME</th>
              <th>E-MAIL</th>
              <th>IDADE</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Cha Ji-Hun</td>
              <td>example@rocketseat.com.br</td>
              <td>20</td>
              <Actions>
                <InfoAction to="/">editar</InfoAction>
                <DangerAction to="/">apagar</DangerAction>
              </Actions>
            </tr>
            <tr>
              <td>Cha Ji-Hun</td>
              <td>example@rocketseat.com.br</td>
              <td>20</td>
              <Actions>
                <InfoAction to="/">editar</InfoAction>
                <DangerAction to="/">apagar</DangerAction>
              </Actions>
            </tr>
            <tr>
              <td>Cha Ji-Hun</td>
              <td>example@rocketseat.com.br</td>
              <td>20</td>
              <Actions>
                <InfoAction to="/">editar</InfoAction>
                <DangerAction to="/">apagar</DangerAction>
              </Actions>
            </tr>
          </tbody>
        </Table>
      </Content>
    </ContentWrapper>
  );
};

export default Dashboard;
