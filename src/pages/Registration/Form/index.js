import React, { useState, useEffect, useMemo } from 'react';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';
import PropTypes from 'prop-types';
import { toast } from 'react-toastify';
import { FaCheck, FaAngleLeft } from 'react-icons/fa';
import AsyncSelect from 'react-select/async';

import api from '~/services/api';
import { ROUTE_PATH } from '~/config/constants';

import {
  ContentWrapper,
  ContentHeader,
  Content,
} from '~/pages/_layouts/default/styles';
import { Button, LinkButton } from '~/styles/global';

const schema = Yup.object().shape({
  student_id: Yup.number()
    .typeError('O campo aluno é obrigatório')
    .required(),
  plan_id: Yup.number()
    .typeError('O campo plano é obrigatório')
    .required(),
  start_date: Yup.date().required('O campo data de início é obrigatório'),
});

const RegistrationForm = ({ location }) => {
  const INITIAL_STATE = {
    student: {},
    plan: {},
    start_date: '',
  };

  const { data } = location;

  const [registration, setRegistration] = useState(INITIAL_STATE);
  const total = useMemo(
    () =>
      `R$ ${(registration.plan.duration * registration.plan.price)
        .toFixed(2)
        .toLocaleString('pt-br')}`,
    [registration.plan.duration, registration.plan.price]
  );

  useEffect(() => {
    async function getRegistration() {
      const response = await api.get(`registrations/${data.registration.id}`);
      setRegistration({
        ...response.data,
      });
    }
    if (data && data.registration) {
      getRegistration();
    }
  }, [data]);

  const handleSubmit = async ({ student, plan, start_date }, { resetForm }) => {
    try {
      if (data && data.registration) {
        await api.put(`registrations/${registration.id}`, {
          student_id: student.id,
          plan_id: plan.id,
          start_date,
        });
        return toast.success('Matrícula salva com sucesso!');
      }
      await api.post('registrations', {
        student_id: student.id,
        plan_id: plan.id,
        start_date,
      });
      resetForm();
      setRegistration(INITIAL_STATE);
      return toast.success('Matrícula criada com sucesso!');
    } catch (err) {
      return toast.error('Erro ao salvar matrícula.');
    }
  };

  const loadOptions = () => [];

  const handleInputChange = (event, field) =>
    setRegistration({ ...registration, [field]: event.target.value });

  const handleSelectChange = (newValue, field) =>
    setRegistration({ ...registration, [field]: newValue });

  return (
    <ContentWrapper>
      <ContentHeader>
        <h1>
          {data && data.registration
            ? 'Edição de matrícula'
            : 'Cadastro de matrícula'}
        </h1>
        <div>
          <LinkButton to={ROUTE_PATH.REGISTRATION} disabled type="button">
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
          initialData={registration}
        >
          <label htmlFor="student-id">ALUNO</label>
          <AsyncSelect
            cacheOptions
            loadOptions={loadOptions}
            onInputChange={handleSelectChange}
            id="student-id"
            name="student_id"
            type="text"
          />

          <div className="group">
            <div>
              <label htmlFor="age">DURAÇÃO (em meses)</label>
              <Input
                id="duration"
                name="duration"
                type="number"
                onChange={e => handleInputChange(e, 'duration')}
                value={registration.duration}
              />
            </div>

            <div>
              <label htmlFor="price">PREÇO MENSAL</label>
              <Input
                id="price"
                name="price"
                type="number"
                onChange={e => handleInputChange(e, 'price')}
                value={registration.price}
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

RegistrationForm.propTypes = {
  location: PropTypes.shape({
    data: PropTypes.shape({
      registration: PropTypes.object,
    }),
  }).isRequired,
};

export default RegistrationForm;
