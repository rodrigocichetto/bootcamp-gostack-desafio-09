import React, { useState, useEffect } from 'react';
import { FaPlus } from 'react-icons/fa';
import { toast } from 'react-toastify';

import api from '~/services/api';
import PATHS from '~/routes/paths';

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

const Plan = () => {
  const [plans, setPlans] = useState([]);
  const [pages, setPages] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(true);

  const formatPlans = response =>
    response.data.plans.map(plan => ({
      ...plan,
      price: `R$ ${plan.price.toFixed(2).toLocaleString('pt-br')}`,
    }));

  useEffect(() => {
    async function loadPlans() {
      try {
        setLoading(true);
        const response = await api.get('plans', {
          params: { page: currentPage },
        });

        if (!response.data.plans.length && currentPage > 1) {
          setCurrentPage(currentPage - 1);
        } else {
          setPlans(formatPlans(response));
          setPages(response.data.pages);
          setLoading(false);
        }
      } catch (e) {
        toast.error('Erro ao consultar planos.');
      }
    }
    loadPlans();
  }, [currentPage]);

  const updatePlans = async () => {
    setLoading(true);

    const response = await api.get('plans', {
      params: { page: currentPage },
    });

    setPlans(formatPlans(response));
    setPages(response.data.pages);
    setLoading(false);
  };

  const deletePlan = async ({ id, title }) => {
    // eslint-disable-next-line no-alert
    if (window.confirm(`Deseja realmente excluir ${title}?`)) {
      await api.delete(`plans/${id}`);
      if (plans.length === 1) {
        return setCurrentPage(currentPage - 1);
      }
      return updatePlans();
    }
  };

  if (loading) {
    return <Loader />;
  }

  return (
    <ContentWrapper>
      <ContentHeader>
        <h1>Gerenciando planos</h1>
        <div>
          <LinkButton to={PATHS.PLAN_FORM} type="button">
            <FaPlus /> CADASTRAR
          </LinkButton>
        </div>
      </ContentHeader>
      <Content>
        <Table>
          <thead>
            <tr>
              <th>TÍTULO</th>
              <th>DURAÇÃO</th>
              <th>VALOR P/ MÊS</th>
            </tr>
          </thead>
          <tbody>
            {plans.map(plan => (
              <tr key={plan.id}>
                <td>{plan.title}</td>
                <td>
                  {plan.duration} {plan.duration > 1 ? 'meses' : 'mês'}
                </td>
                <td>{plan.price}</td>
                <Actions>
                  <InfoAction
                    to={{
                      pathname: PATHS.PLAN_FORM,
                      data: { plan },
                    }}
                  >
                    editar
                  </InfoAction>
                  <DangerAction onClick={() => deletePlan(plan)}>
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

export default Plan;
