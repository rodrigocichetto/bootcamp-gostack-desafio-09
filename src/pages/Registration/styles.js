import styled from 'styled-components';
import { FaCheckCircle } from 'react-icons/fa';

import colors from '~/styles/colors';

export const ActiveIcon = styled(FaCheckCircle)`
  color: ${colors.success};
`;
