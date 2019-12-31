import React, { useState, useEffect, useMemo } from 'react';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';
import PropTypes from 'prop-types';
import { toast } from 'react-toastify';
import { FaCheck, FaAngleLeft } from 'react-icons/fa';

import api from '~/services/api';
import { ROUTE_PATH } from '~/config/constants';

import {
  ContentWrapper,
  ContentHeader,
  Content,
} from '~/pages/_layouts/default/styles';
import { Button, LinkButton } from '~/styles/global';

const schema = Yup.object().shape({
  title: Yup.string().required('O campo título é obrigatório'),
  duration: Yup.number()
    .typeError('O campo duração é obrigatório')
    .required()
    .min(0),
  price: Yup.number()
    .typeError('O campo preço é obrigatório')
    .required()
    .min(0),
});

const PlanForm = ({ location }) => {
  const INITIAL_STATE = {
    duration: 0,
    price: 0,
  };

  const { data } = location;

  const [plan, setPlan] = useState(INITIAL_STATE);
  const total = useMemo(
    () =>
      `R$ ${(plan.duration * plan.price).toFixed(2).toLocaleString('pt-br')}`,
    [plan.duration, plan.price]
  );

  useEffect(() => {
    async function getPlan() {
      const response = await api.get(`plans/${data.plan.id}`);
      setPlan({
        ...response.data,
        total: response.data.duration * response.data.price,
      });
    }
    if (data && data.plan) {
      getPlan();
    }
  }, [data]);

  const handleSubmit = async ({ title, duration, price }, { resetForm }) => {
    try {
      if (data && data.plan) {
        await api.put(`plans/${plan.id}`, {
          title,
          duration,
          price,
        });
        return toast.success('Plano salvo com sucesso!');
      }
      await api.post('plans', { title, duration, price });
      resetForm();
      setPlan(INITIAL_STATE);
      return toast.success('Plano criado com sucesso!');
    } catch (err) {
      return toast.error('Erro ao salvar plano.');
    }
  };

  const handleInputChange = (event, field) =>
    setPlan({ ...plan, [field]: event.target.value });

  return (
    <ContentWrapper>
      <ContentHeader>
        <h1>{data && data.plan ? 'Edição de plano' : 'Cadastro de plano'}</h1>
        <div>
          <LinkButton to={ROUTE_PATH.PLAN} disabled type="button">
            <FaAngleLeft /> Voltar
          </LinkButton>
          <Button type="submit" form="plan-form">
            <FaCheck /> Salvar
          </Button>
        </div>
      </ContentHeader>
      <Content>
        <Form
          id="plan-form"
          schema={schema}
          onSubmit={handleSubmit}
          initialData={plan}
        >
          <label htmlFor="title">TÍTULO DO PLANO</label>
          <Input id="title" name="title" type="text" />

          <div className="group">
            <div>
              <label htmlFor="age">DURAÇÃO (em meses)</label>
              <Input
                id="duration"
                name="duration"
                type="number"
                onChange={e => handleInputChange(e, 'duration')}
                value={plan.duration}
              />
            </div>

            <div>
              <label htmlFor="price">PREÇO MENSAL</label>
              <Input
                id="price"
                name="price"
                type="number"
                onChange={e => handleInputChange(e, 'price')}
                value={plan.price}
              />
            </div>

            <div>
              <label htmlFor="total">PREÇO TOTAL</label>
              <Input disabled id="total" name="total" value={total} />
            </div>
          </div>
        </Form>
      </Content>
    </ContentWrapper>
  );
};

PlanForm.propTypes = {
  location: PropTypes.shape({
    data: PropTypes.shape({
      plan: PropTypes.object,
    }),
  }).isRequired,
};

export default PlanForm;
