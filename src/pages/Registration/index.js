import React, { useState, useEffect } from 'react';
import { FaPlus } from 'react-icons/fa';
import { format } from 'date-fns';
import { toast } from 'react-toastify';
import pt from 'date-fns/locale/pt';

import api from '~/services/api';
import { ROUTE_PATH } from '~/config/constants';

import { ActiveIcon } from './styles';
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
import { LinkButton } from '~/styles/global';

const Registration = () => {
  const [registrations, setRegistrations] = useState([]);
  const [pages, setPages] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(true);

  const formatRegistrations = response =>
    response.data.registrations.map(registration => ({
      ...registration,
      price: `R$ ${registration.price.toFixed(2).toLocaleString('pt-br')}`,
      start_date: format(
        new Date(registration.start_date),
        "d 'de' MMMM 'de' Y",
        {
          locale: pt,
        }
      ),
      end_date: format(new Date(registration.end_date), "d 'de' MMMM 'de' Y", {
        locale: pt,
      }),
    }));

  useEffect(() => {
    async function loadRegistrations() {
      try {
        setLoading(true);
        const response = await api.get('registrations', {
          params: { page: currentPage },
        });

        if (!response.data.registrations.length && currentPage > 1) {
          setCurrentPage(currentPage - 1);
        } else {
          setRegistrations(formatRegistrations(response));
          setPages(response.data.pages);
          setLoading(false);
        }
      } catch (e) {
        toast.error('Erro ao consultar matrículas.');
      }
    }
    loadRegistrations();
  }, [currentPage]);

  const updateRegistrations = async () => {
    setLoading(true);

    const response = await api.get('registrations', {
      params: { page: currentPage },
    });

    setRegistrations(formatRegistrations(response));
    setPages(response.data.pages);
    setLoading(false);
  };

  const deleteRegistration = async ({ id, student }) => {
    // eslint-disable-next-line no-alert
    if (
      window.confirm(`Deseja realmente excluir a matrícula de ${student.name}?`)
    ) {
      await api.delete(`registrations/${id}`);
      if (registrations.length === 1) {
        return setCurrentPage(currentPage - 1);
      }
      return updateRegistrations();
    }
    return false;
  };

  if (loading) {
    return <Loader />;
  }

  return (
    <ContentWrapper>
      <ContentHeader>
        <h1>Gerenciando matrículas</h1>
        <div>
          <LinkButton to={ROUTE_PATH.REGISTRATION_FORM} type="button">
            <FaPlus /> CADASTRAR
          </LinkButton>
        </div>
      </ContentHeader>
      <Content>
        <Table>
          <thead>
            <tr>
              <th>ALUNO</th>
              <th>PLANO</th>
              <th>INÍCIO</th>
              <th>TÉRMINO</th>
              <th>ATIVA</th>
            </tr>
          </thead>
          <tbody>
            {registrations.map(registration => (
              <tr key={registration.id}>
                <td>{registration.student.name}</td>
                <td>{registration.plan.title}</td>
                <td>{registration.start_date}</td>
                <td>{registration.end_date}</td>
                <td>{registration.active && <ActiveIcon />}</td>
                <Actions>
                  <InfoAction
                    to={{
                      pathname: ROUTE_PATH.REGISTRATION_FORM,
                      data: { registration },
                    }}
                  >
                    editar
                  </InfoAction>
                  <DangerAction
                    onClick={() => deleteRegistration(registration)}
                  >
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

export default Registration;
