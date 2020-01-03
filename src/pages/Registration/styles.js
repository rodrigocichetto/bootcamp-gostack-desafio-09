import styled from 'styled-components';
import { FaCheckCircle, FaTimesCircle } from 'react-icons/fa';

import colors from '~/styles/colors';

export const ActiveIcon = styled(FaCheckCircle)`
  color: ${colors.success};
`;

export const InactiveIcon = styled(FaTimesCircle)`
  color: ${colors.error};
`;
