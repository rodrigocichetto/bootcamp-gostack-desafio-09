import React, { useState, useEffect } from 'react';
import { FaPlus, FaAngleRight, FaAngleLeft } from 'react-icons/fa';

import api from '~/services/api';

import {
  ContentWrapper,
  ContentHeader,
  Content,
  Table,
  Actions,
  InfoAction,
  DangerAction,
  Pagination,
} from '~/pages/_layouts/default/styles';
import { Input, Button } from '~/styles/global';

const Dashboard = () => {
  const [students, setStudents] = useState([]);
  const [pages, setPages] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    async function loadStudents() {
      const response = await api.get('students', {
        params: { page: currentPage },
      });

      setStudents(response.data.students);
      setPages(response.data.pages);
    }
    loadStudents();
  }, [currentPage, students]);

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
            {students.map(student => (
              <tr key={student.id}>
                <td>{student.name}</td>
                <td>{student.email}</td>
                <td>{student.age}</td>
                <Actions>
                  <InfoAction to="/">editar</InfoAction>
                  <DangerAction to="/">apagar</DangerAction>
                </Actions>
              </tr>
            ))}
          </tbody>
        </Table>
      </Content>
      <Pagination>
        {currentPage !== 1 && pages > 0 && (
          <Button type="button" onClick={() => setCurrentPage(currentPage - 1)}>
            <FaAngleLeft />
          </Button>
        )}
        {currentPage - 1 >= 1 && (
          <Button type="button" onClick={() => setCurrentPage(currentPage - 1)}>
            {currentPage - 1}
          </Button>
        )}
        <Button type="button">{currentPage}</Button>
        {pages > currentPage && (
          <Button type="button" onClick={() => setCurrentPage(currentPage + 1)}>
            {currentPage + 1}
          </Button>
        )}
        {currentPage + 0 < pages && (
          <Button type="button" onClick={() => setCurrentPage(currentPage + 1)}>
            <FaAngleRight />
          </Button>
        )}
      </Pagination>
    </ContentWrapper>
  );
};

export default Dashboard;
