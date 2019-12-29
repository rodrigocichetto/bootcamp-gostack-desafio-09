import React from 'react';
import { FaAngleRight, FaAngleLeft } from 'react-icons/fa';

import { Container, Item } from './styles';

const Pagination = ({ pages, currentPage, onChange }) => {
  return (
    <Container>
      {currentPage !== 1 && pages > 0 && (
        <Item type="button" onClick={() => onChange(currentPage - 1)}>
          <FaAngleLeft />
        </Item>
      )}
      {currentPage - 1 >= 1 && (
        <Item type="button" onClick={() => onChange(currentPage - 1)}>
          {currentPage - 1}
        </Item>
      )}
      <Item active type="button">
        {currentPage}
      </Item>
      {pages > currentPage && (
        <Item type="button" onClick={() => onChange(currentPage + 1)}>
          {currentPage + 1}
        </Item>
      )}
      {currentPage + 0 < pages && (
        <Item type="button" onClick={() => onChange(currentPage + 1)}>
          <FaAngleRight />
        </Item>
      )}
    </Container>
  );
};

export default Pagination;
