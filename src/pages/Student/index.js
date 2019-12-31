import React, { useState, useEffect } from 'react';
import { FaPlus } from 'react-icons/fa';

import api from '~/services/api';
import { ROUTE_PATH } from '~/config/constants';

import Pagination from '~/components/Pagination';
import Loader from '~/components/Loader';
import {
  ContentWrapper,
  ContentHeader,
  Content,
  Table,
  Actions,
  InfoAction,
  DangerAction,
} from '~/pages/_layouts/default/styles';
import { Input, LinkButton } from '~/styles/global';

const Student = () => {
  const [students, setStudents] = useState([]);
  const [pages, setPages] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadStudents() {
      setLoading(true);
      const response = await api.get('students', {
        params: { page: currentPage },
      });

      if (!response.data.students.length && currentPage > 1) {
        setCurrentPage(currentPage - 1);
      } else {
        setStudents(response.data.students);
        setPages(response.data.pages);
        setLoading(false);
      }
    }
    loadStudents();
  }, [currentPage]);

  const updateStudents = async () => {
    setLoading(true);

    const response = await api.get('students', {
      params: { page: currentPage },
    });

    setStudents(response.data.students);
    setPages(response.data.pages);
    setLoading(false);
  };

  const deleteStudent = async ({ id, name }) => {
    // eslint-disable-next-line no-alert
    if (window.confirm(`Deseja realmente excluir ${name}?`)) {
      await api.delete(`students/${id}`);
      if (students.length === 1) {
        return setCurrentPage(currentPage - 1);
      }
      return updateStudents();
    }
    return false;
  };

  if (loading) {
    return <Loader />;
  }

  return (
    <ContentWrapper>
      <ContentHeader>
        <h1>Gerenciando alunos</h1>
        <div>
          <LinkButton to={ROUTE_PATH.STUDENT_FORM} type="button">
            <FaPlus /> CADASTRAR
          </LinkButton>
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
                  <InfoAction
                    to={{
                      pathname: ROUTE_PATH.STUDENT_FORM,
                      data: { student },
                    }}
                  >
                    editar
                  </InfoAction>
                  <DangerAction onClick={() => deleteStudent(student)}>
                    apagar
                  </DangerAction>
                </Actions>
              </tr>
            ))}
          </tbody>
        </Table>
      </Content>
      {pages > 1 && (
        <Pagination
          pages={pages}
          currentPage={currentPage}
          onChange={setCurrentPage}
        />
      )}
    </ContentWrapper>
  );
};

export default Student;
