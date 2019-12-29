import React, { useState, useEffect } from 'react';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';
import PropTypes from 'prop-types';
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
  name: Yup.string().required('O campo nome é obrigatório'),
  email: Yup.string()
    .email('Digite um e-mail válido')
    .required('O campo e-mail é obrigatório'),
  age: Yup.number()
    .typeError('O campo idade é obrigatório')
    .required()
    .min(0),
  weight: Yup.number()
    .typeError('O campo peso é obrigatório')
    .required()
    .min(0),
  height: Yup.number()
    .typeError('O campo altura é obrigatório')
    .required()
    .min(0),
});

const StudentForm = ({ location }) => {
  const { data } = location;

  const [student, setStudent] = useState({});

  useEffect(() => {
    async function getStudent() {
      const response = await api.get(`students/${data.student.id}`);
      setStudent(response.data);
    }
    if (data && data.student) {
      getStudent();
    }
  }, [data]);

  const handleSubmit = ({ name, email, age, weight, height }) => {
    console.log('SUBMITED');
  };

  return (
    <ContentWrapper>
      <ContentHeader>
        <h1>Gerenciando alunos</h1>
        <div>
          <LinkButton to={ROUTE_PATH.STUDENT} disabled type="button">
            <FaAngleLeft /> Voltar
          </LinkButton>
          <Button type="submit" form="student-form">
            <FaCheck /> Salvar
          </Button>
        </div>
      </ContentHeader>
      <Content>
        <Form
          id="student-form"
          schema={schema}
          onSubmit={handleSubmit}
          initialData={student}
        >
          <label htmlFor="name">NOME COMPLETO</label>
          <Input id="name" name="name" type="text" placeholder="John Doe" />

          <label htmlFor="email">ENDEREÇO DE E-MAIL</label>
          <Input
            id="email"
            name="email"
            type="email"
            placeholder="exemplo@email.com"
          />

          <label htmlFor="age">IDADE</label>
          <Input id="age" name="age" type="number" />

          <label htmlFor="weight">PESO (em kg)</label>
          <Input id="weight" name="weight" type="number" />

          <label htmlFor="height">ALTURA</label>
          <Input id="height" name="height" type="number" />
        </Form>
      </Content>
    </ContentWrapper>
  );
};

StudentForm.propTypes = {
  location: PropTypes.shape({
    data: PropTypes.shape({
      student: PropTypes.object,
    }),
  }).isRequired,
};

export default StudentForm;
