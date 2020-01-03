import React, { useState, useEffect, useMemo } from 'react';
import { Form, Input } from '@rocketseat/unform';
import PropTypes from 'prop-types';
import { toast } from 'react-toastify';
import { FaCheck, FaAngleLeft } from 'react-icons/fa';
import AsyncSelect from 'react-select/async';
import { endOfDay, addMonths, format } from 'date-fns';

import api from '~/services/api';
import PATHS from '~/routes/paths';

import {
  ContentWrapper,
  ContentHeader,
  Content,
} from '~/pages/_layouts/default/styles';
import { Button, LinkButton } from '~/styles/global';

const RegistrationForm = ({ location }) => {
  const INITIAL_STATE = {
    student: {},
    plan: {},
    start_date: new Date(),
  };

  const { data } = location;

  const [registration, setRegistration] = useState(INITIAL_STATE);

  const total = useMemo(
    () =>
      registration.plan.duration && registration.plan.price
        ? `R$ ${(registration.plan.duration * registration.plan.price)
            .toFixed(2)
            .toLocaleString('pt-br')}`
        : '',
    [registration.plan]
  );
  const endDate = useMemo(
    () =>
      registration.start_date && registration.plan.duration
        ? format(
            endOfDay(
              addMonths(
                new Date(registration.start_date),
                registration.plan.duration
              )
            ),
            'yyyy-MM-dd'
          )
        : '',
    [registration.start_date, registration.plan]
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

  const handleSubmit = async ({ start_date }, { resetForm }) => {
    if (!registration.student.id || !registration.plan.id) {
      return toast.error('Preencha todos os campos!');
    }
    try {
      if (data && data.registration) {
        await api.put(`registrations/${registration.id}`, {
          plan_id: registration.plan.id,
          start_date: `${start_date}T11:00:00-03:00`,
        });
        return toast.success('Matrícula salva com sucesso!');
      }
      await api.post('registrations', {
        student_id: registration.student.id,
        plan_id: registration.plan.id,
        start_date: `${start_date}T11:00:00-03:00`,
      });
      resetForm();
      setRegistration(INITIAL_STATE);
      return toast.success('Matrícula criada com sucesso!');
    } catch (err) {
      return toast.error('Erro ao salvar matrícula.');
    }
  };

  const loadStudentsOptions = async inputValue => {
    const response = await api.get('students', { params: { q: inputValue } });
    return response.data.students.map(student => ({
      value: student,
      label: student.name,
    }));
  };

  const loadPlansOptions = async inputValue => {
    const response = await api.get('plans', { params: { q: inputValue } });
    return response.data.plans.map(plan => ({
      value: plan,
      label: plan.title,
    }));
  };

  const handleStartDateChange = event =>
    setRegistration({
      ...registration,
      start_date: event.target.value
        ? new Date(`${event.target.value}T11:00:00-03:00`)
        : new Date(),
    });

  const handleSelectChange = (newValue, field) => {
    setRegistration({ ...registration, [field]: newValue.value });
  };

  return (
    <ContentWrapper>
      <ContentHeader>
        <h1>
          {data && data.registration
            ? 'Edição de matrícula'
            : 'Cadastro de matrícula'}
        </h1>
        <div>
          <LinkButton to={PATHS.REGISTRATION} disabled type="button">
            <FaAngleLeft /> Voltar
          </LinkButton>
          <Button type="submit" form="registration-form">
            <FaCheck /> Salvar
          </Button>
        </div>
      </ContentHeader>
      <Content>
        <Form
          id="registration-form"
          onSubmit={handleSubmit}
          initialData={registration}
        >
          <label htmlFor="student-id">ALUNO</label>
          <AsyncSelect
            cacheOptions
            loadOptions={loadStudentsOptions}
            onChange={newValue => handleSelectChange(newValue, 'student')}
            defaultOptions
            id="student-id"
            name="student"
            value={{
              value: registration.student,
              label: registration.student.name,
            }}
            isDisabled={data && data.registration}
            className="async-select"
            placeholder="Buscar aluno"
          />

          <div className="group">
            <div>
              <label htmlFor="age">PLANO</label>
              <AsyncSelect
                cacheOptions
                loadOptions={loadPlansOptions}
                onChange={newValue => handleSelectChange(newValue, 'plan')}
                defaultOptions
                id="student-id"
                name="plan"
                value={{
                  value: registration.plan,
                  label: registration.plan.title,
                }}
                className="async-select"
              />
            </div>

            <div>
              <label htmlFor="start_date">DATA DE INÍCIO</label>
              <Input
                id="start_date"
                name="start_date"
                type="date"
                min={format(new Date(), 'yyyy-MM-dd')}
                onChange={handleStartDateChange}
                value={format(new Date(registration.start_date), 'yyyy-MM-dd')}
              />
            </div>

            <div>
              <label htmlFor="end-date">DATA DE TÉRMINO</label>
              <Input
                disabled
                type="date"
                id="end-date"
                name="end_date"
                value={endDate}
              />
            </div>

            <div>
              <label htmlFor="total">VALOR FINAL</label>
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
