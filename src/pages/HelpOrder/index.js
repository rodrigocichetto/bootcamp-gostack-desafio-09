import React, { useState, useEffect } from 'react';
import { Form, Input } from '@rocketseat/unform';
import { toast } from 'react-toastify';

import api from '~/services/api';

import Pagination from '~/components/Pagination';
import Loader from '~/components/Loader';
import Modal from '~/components/Modal';
import {
  ContentWrapper,
  ContentHeader,
  Content,
  Table,
  Actions,
  ModalAction,
} from '~/pages/_layouts/default/styles';
import { Button } from '~/styles/global';
import { Answer } from './styles';

const HelpOrder = () => {
  const [showModal, setShowModal] = useState(false);
  const [helps, setHelps] = useState([]);
  const [selectedHelp, setSelectedHelp] = useState({});
  const [pages, setPages] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadHelpOrders() {
      try {
        setLoading(true);
        const response = await api.get('help-orders');

        if (!response.data.help_orders.length && currentPage > 1) {
          setCurrentPage(currentPage - 1);
        } else {
          setHelps(response.data.help_orders);
          setPages(response.data.pages);
          setLoading(false);
        }
      } catch (e) {
        toast.error('Erro ao consultar pedidos de auxílio.');
      }
    }
    loadHelpOrders();
  }, [currentPage]);

  const updateHelpOrders = async () => {
    try {
      setLoading(true);
      const response = await api.get('help-orders');

      if (!response.data.help_orders.length && currentPage > 1) {
        setCurrentPage(currentPage - 1);
      } else {
        setHelps(response.data.help_orders);
        setPages(response.data.pages);
        setLoading(false);
      }
    } catch (e) {
      toast.error('Erro ao consultar pedidos de auxílio.');
    }
  };

  const handleModal = help => {
    setSelectedHelp(help);
    setShowModal(true);
  };

  const handleSubmit = async ({ answer }) => {
    try {
      await api.post(`/help-orders/${selectedHelp.id}/answer`, { answer });
      await updateHelpOrders();
      setShowModal(false);
      return toast.success('Resposta enviada com sucesso!');
    } catch (err) {
      return toast.error('Erro ao salvar resposta.');
    }
  };

  if (loading) {
    return <Loader />;
  }

  return (
    <ContentWrapper>
      <ContentHeader>
        <h1>Pedidos de auxílio</h1>
      </ContentHeader>
      <Content>
        <Table>
          <thead>
            <tr>
              <th>ALUNO</th>
            </tr>
          </thead>
          <tbody>
            {helps.map(help => (
              <tr key={help.id}>
                <td>{help.student.name}</td>
                <Actions>
                  <ModalAction href="#modal" onClick={() => handleModal(help)}>
                    responder
                  </ModalAction>
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
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <Answer>
            <h2>PERGUNTA DO ALUNO</h2>
            <p>{selectedHelp.question}</p>
            <Form id="answer-form" onSubmit={handleSubmit}>
              <h2>SUA RESPOSTA</h2>
              <Input type="text" multiline name="answer" />
              <Button>Responder aluno</Button>
            </Form>
          </Answer>
        </Modal>
      )}
    </ContentWrapper>
  );
};

export default HelpOrder;
