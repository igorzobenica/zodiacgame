import { components } from 'react-select';
import styled from 'styled-components';

const ValueContainer = styled(components.ValueContainer)`
  && {
    padding: calc(0.75rem - 1px) calc(1rem - 1px);
  }
`;

export default ValueContainer;
